/**
 * Vercel Serverless Function — /api/stripe-webhook
 *
 * Uses the EXISTING Supabase tables from the Chrome extension:
 *   user_profiles       — stripe_customer_id
 *   user_entitlements   — plan, period_end, stripe_subscription_id, credits_*, ...
 *   stripe_webhook_events — deduplication (already in place)
 *   billing_events      — audit log (already in place)
 *
 * Events handled:
 *   checkout.session.completed    → new sub activated
 *   invoice.payment_succeeded     → auto-renewal, update period_end
 *   invoice.payment_failed        → mark payment_status = past_due
 *   customer.subscription.updated → sync plan / cancel_at_period_end
 *   customer.subscription.deleted → downgrade to free
 *
 * Env vars (Vercel dashboard):
 *   STRIPE_SECRET_KEY         sk_live_...
 *   STRIPE_WEBHOOK_SECRET     whsec_...
 *   SUPABASE_URL              https://yowicdqindwwlybmlpku.supabase.co
 *   SUPABASE_SERVICE_ROLE_KEY eyJ... (service role — server only)
 *
 * Stripe Dashboard → Webhooks → listen for all 5 events above.
 */

import type { VercelRequest, VercelResponse } from '@vercel/node'
import Stripe from 'stripe'
import { createClient } from '@supabase/supabase-js'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export const config = { api: { bodyParser: false } }

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).end()

  const sig = req.headers['stripe-signature'] as string
  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET!)
  } catch (err) {
    console.error('[webhook] signature error:', err)
    return res.status(400).json({ error: 'Invalid signature' })
  }

  // ── Deduplication — uses the existing stripe_webhook_events table ──────────
  const { data: already } = await supabase
    .from('stripe_webhook_events')
    .select('id')
    .eq('stripe_event_id', event.id)
    .single()

  if (already) {
    // Already processed — return 200 so Stripe stops retrying
    return res.status(200).json({ received: true, duplicate: true })
  }

  // Mark as processed immediately (before handling, to prevent race conditions)
  await supabase.from('stripe_webhook_events').insert({
    stripe_event_id: event.id,
    type: event.type,
    processed_at: new Date().toISOString(),
  })

  try {
    switch (event.type) {

      // ── New subscription paid ─────────────────────────────────────────────
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session
        if (session.mode !== 'subscription') break
        await handleCheckoutCompleted(session)
        break
      }

      // ── Auto-renewal succeeded ────────────────────────────────────────────
      case 'invoice.payment_succeeded': {
        const invoice = event.data.object as Stripe.Invoice
        const invoiceSubId = (invoice as any).subscription as string | undefined
        if (!invoiceSubId) break
        const sub = await stripe.subscriptions.retrieve(invoiceSubId)
        await syncEntitlement(sub)
        break
      }

      // ── Payment failed ────────────────────────────────────────────────────
      case 'invoice.payment_failed': {
        const invoice = event.data.object as Stripe.Invoice
        const invoiceSubId = (invoice as any).subscription as string | undefined
        if (!invoiceSubId) break
        await markPaymentFailed(invoiceSubId, invoice.customer as string)
        break
      }

      // ── Plan changed or cancel_at_period_end toggled ──────────────────────
      case 'customer.subscription.updated': {
        const sub = event.data.object as Stripe.Subscription
        await syncEntitlement(sub)
        break
      }

      // ── Subscription definitively ended → downgrade to free ───────────────
      case 'customer.subscription.deleted': {
        const sub = event.data.object as Stripe.Subscription
        await downgradeToFree(sub.customer as string, sub.id)
        break
      }
    }
  } catch (err) {
    console.error('[webhook] handler error:', err)
    // Return 200 anyway — we already deduped, no point in Stripe retrying
    return res.status(200).json({ received: true, error: String(err) })
  }

  return res.status(200).json({ received: true })
}

// ── Helpers ───────────────────────────────────────────────────────────────────

async function handleCheckoutCompleted(session: Stripe.Checkout.Session) {
  const userId = session.client_reference_id  // pass ?client_reference_id=USER_UUID in checkout URL
  const customerId = session.customer as string
  const subscriptionId = session.subscription as string

  if (!userId || !customerId || !subscriptionId) {
    console.warn('[webhook] checkout missing ids', { userId, customerId, subscriptionId })
    return
  }

  // Store customer_id in user_profiles (same as extension does)
  await supabase
    .from('user_profiles')
    .update({ stripe_customer_id: customerId, updated_at: new Date().toISOString() })
    .eq('user_id', userId)

  const sub = await stripe.subscriptions.retrieve(subscriptionId)
  await syncEntitlement(sub, userId)

  // Log to billing_events (existing audit table)
  await supabase.from('billing_events').insert({
    stripe_customer_id: customerId,
    user_id: userId,
    event_type: 'subscription_created',
    amount: 0,
    metadata: { subscription_id: subscriptionId, plan: getPlanFromPrice(sub.items.data[0]?.price?.lookup_key ?? '') },
  })
}

async function syncEntitlement(sub: Stripe.Subscription, userId?: string) {
  const customerId = sub.customer as string
  const priceItem = sub.items.data[0]
  const plan = getPlanFromPrice(priceItem?.price?.lookup_key ?? '')
  const interval = (priceItem?.price?.recurring?.interval ?? null) as 'month' | 'year' | null
  const isActive = sub.status === 'active' || sub.status === 'trialing'

  const profileId = userId ?? await findUserByCustomer(customerId)
  if (!profileId) {
    console.warn('[webhook] no user_profile found for customer', customerId)
    return
  }

  await supabase.from('user_entitlements').upsert({
    user_id: profileId,
    plan: isActive ? plan : 'free',
    stripe_subscription_id: sub.id,
    period_end: new Date(((sub as any).current_period_end ?? 0) * 1000).toISOString(),
    cancel_at_period_end: sub.cancel_at_period_end,
    subscription_interval: interval,
    payment_status: sub.status === 'past_due' ? 'past_due' : isActive ? 'active' : null,
    updated_at: new Date().toISOString(),
  }, { onConflict: 'user_id' })
}

async function markPaymentFailed(subscriptionId: string, customerId: string) {
  const userId = await findUserByCustomer(customerId)
  if (!userId) return

  await supabase
    .from('user_entitlements')
    .update({ payment_status: 'past_due', updated_at: new Date().toISOString() })
    .eq('user_id', userId)

  await supabase.from('billing_events').insert({
    stripe_customer_id: customerId,
    user_id: userId,
    event_type: 'payment_failed',
    amount: 0,
    metadata: { subscription_id: subscriptionId },
  })
}

async function downgradeToFree(customerId: string, subscriptionId: string) {
  const userId = await findUserByCustomer(customerId)
  if (!userId) return

  await supabase.from('user_entitlements').upsert({
    user_id: userId,
    plan: 'free',
    stripe_subscription_id: null,
    period_end: null,
    cancel_at_period_end: false,
    subscription_interval: null,
    payment_status: null,
    updated_at: new Date().toISOString(),
  }, { onConflict: 'user_id' })

  await supabase.from('billing_events').insert({
    stripe_customer_id: customerId,
    user_id: userId,
    event_type: 'subscription_ended',
    amount: 0,
    metadata: { subscription_id: subscriptionId },
  })
}

async function findUserByCustomer(customerId: string): Promise<string | null> {
  const { data } = await supabase
    .from('user_profiles')
    .select('user_id')
    .eq('stripe_customer_id', customerId)
    .single()
  return data?.user_id ?? null
}

function getPlanFromPrice(lookupKey: string): string {
  if (lookupKey.includes('enterprise')) return 'enterprise'
  if (lookupKey.includes('pro')) return 'pro'
  return 'free'
}
