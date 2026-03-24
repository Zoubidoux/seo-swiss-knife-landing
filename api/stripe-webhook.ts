/**
 * Vercel Serverless Function — /api/stripe-webhook
 *
 * Full subscription lifecycle:
 *   checkout.session.completed      → New subscription activated
 *   invoice.payment_succeeded       → Auto-renewal succeeded, update period_end
 *   invoice.payment_failed          → Payment failed, mark as past_due
 *   customer.subscription.updated   → Plan changed OR cancel_at_period_end toggled
 *   customer.subscription.deleted   → Subscription ended → downgrade to free
 *
 * Required env vars (Vercel dashboard → Settings → Environment Variables):
 *   STRIPE_SECRET_KEY         sk_live_...
 *   STRIPE_WEBHOOK_SECRET     whsec_...
 *   SUPABASE_URL              https://xxx.supabase.co
 *   SUPABASE_SERVICE_ROLE_KEY eyJ... (server only, bypasses RLS)
 *
 * Stripe Dashboard → Webhooks → listen for:
 *   checkout.session.completed
 *   invoice.payment_succeeded
 *   invoice.payment_failed
 *   customer.subscription.updated
 *   customer.subscription.deleted
 */

import type { VercelRequest, VercelResponse } from '@vercel/node'
import Stripe from 'stripe'
import { createClient } from '@supabase/supabase-js'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export const config = { api: { bodyParser: false } }   // need raw body for signature check

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).end()

  const sig = req.headers['stripe-signature'] as string
  let event: Stripe.Event

  try {
    // req.body is the raw Buffer when bodyParser: false
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET!)
  } catch (err) {
    console.error('[webhook] signature error:', err)
    return res.status(400).json({ error: 'Invalid signature' })
  }

  try {
    switch (event.type) {

      // ── 1. New subscription paid ──────────────────────────────────────────
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session
        if (session.mode !== 'subscription') break
        await handleCheckoutCompleted(session)
        break
      }

      // ── 2. Auto-renewal succeeded ─────────────────────────────────────────
      // This fires every billing cycle. Update the period_end and clear any
      // past_due flag from a previous failed attempt.
      case 'invoice.payment_succeeded': {
        const invoice = event.data.object as Stripe.Invoice
        if (!invoice.subscription) break
        const sub = await stripe.subscriptions.retrieve(invoice.subscription as string)
        await syncSubscription(sub)
        break
      }

      // ── 3. Payment failed (card declined, expired, etc.) ──────────────────
      // Stripe retries automatically (smart retries). We mark payment_status
      // so the user sees a warning and is invited to update their card.
      case 'invoice.payment_failed': {
        const invoice = event.data.object as Stripe.Invoice
        if (!invoice.subscription) break
        await markPaymentFailed(invoice.subscription as string)
        break
      }

      // ── 4. Subscription changed (plan upgrade, downgrade, or cancellation) ─
      // cancel_at_period_end = true  → user clicked "Cancel" in the portal;
      //                                access stays active until period_end
      // cancel_at_period_end = false → user reactivated; normal renewal
      case 'customer.subscription.updated': {
        const sub = event.data.object as Stripe.Subscription
        await syncSubscription(sub)
        break
      }

      // ── 5. Subscription definitively ended ────────────────────────────────
      // Fires when the period ends after cancellation OR after too many
      // failed payment retries.
      case 'customer.subscription.deleted': {
        const sub = event.data.object as Stripe.Subscription
        await downgradeToFree(sub.customer as string)
        break
      }
    }
  } catch (err) {
    console.error('[webhook] handler error:', err)
    // Still return 200 so Stripe does not retry (we'll investigate via logs)
    return res.status(200).json({ received: true, error: String(err) })
  }

  return res.status(200).json({ received: true })
}

// ── Core helpers ──────────────────────────────────────────────────────────────

async function handleCheckoutCompleted(session: Stripe.Checkout.Session) {
  const userId = session.client_reference_id     // pass as ?client_reference_id=USER_UUID in checkout URL
  const customerId = session.customer as string
  const subscriptionId = session.subscription as string

  if (!userId || !customerId || !subscriptionId) {
    console.warn('[webhook] checkout.session missing ids', { userId, customerId, subscriptionId })
    return
  }

  // First update the profile with the customer id so syncSubscription can find the user
  await supabase
    .from('profiles')
    .update({ stripe_customer_id: customerId, stripe_subscription_id: subscriptionId })
    .eq('id', userId)

  const sub = await stripe.subscriptions.retrieve(subscriptionId)
  await syncSubscription(sub, userId)
}

/**
 * The single source of truth for subscription state.
 * Called on: checkout completed, invoice paid, sub updated.
 */
async function syncSubscription(sub: Stripe.Subscription, userId?: string) {
  const customerId = sub.customer as string
  const priceItem = sub.items.data[0]

  const plan = getPlanFromPrice(priceItem?.price?.lookup_key ?? '')
  const interval = (priceItem?.price?.recurring?.interval ?? null) as 'month' | 'year' | null

  // If userId not provided (event-driven), look up by stripe_customer_id
  const profileId = userId ?? await findUserByCustomer(customerId)
  if (!profileId) {
    console.warn('[webhook] no profile found for customer', customerId)
    return
  }

  const isActive = sub.status === 'active' || sub.status === 'trialing'

  await supabase.from('profiles').update({
    stripe_customer_id: customerId,
    stripe_subscription_id: sub.id,
    subscription_status: isActive ? plan : 'free',
    subscription_plan: priceItem?.price?.lookup_key ?? null,
    subscription_interval: interval,
    subscription_period_end: new Date(sub.current_period_end * 1000).toISOString(),
    cancel_at_period_end: sub.cancel_at_period_end,
    payment_status: sub.status === 'past_due' ? 'past_due' : isActive ? 'active' : null,
  }).eq('id', profileId)
}

async function markPaymentFailed(subscriptionId: string) {
  const { data: profile } = await supabase
    .from('profiles')
    .select('id')
    .eq('stripe_subscription_id', subscriptionId)
    .single()

  if (!profile) return

  await supabase.from('profiles').update({
    payment_status: 'past_due',
  }).eq('id', profile.id)
}

async function downgradeToFree(customerId: string) {
  const profileId = await findUserByCustomer(customerId)
  if (!profileId) return

  await supabase.from('profiles').update({
    subscription_status: 'free',
    subscription_plan: null,
    subscription_interval: null,
    subscription_period_end: null,
    cancel_at_period_end: false,
    payment_status: null,
    stripe_subscription_id: null,
  }).eq('id', profileId)
}

// ── Utility ───────────────────────────────────────────────────────────────────

async function findUserByCustomer(customerId: string): Promise<string | null> {
  const { data } = await supabase
    .from('profiles')
    .select('id')
    .eq('stripe_customer_id', customerId)
    .single()
  return data?.id ?? null
}

function getPlanFromPrice(lookupKey: string): 'pro' | 'enterprise' | 'free' {
  if (lookupKey.includes('enterprise')) return 'enterprise'
  if (lookupKey.includes('pro')) return 'pro'
  return 'free'
}
