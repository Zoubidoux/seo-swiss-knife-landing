/**
 * Vercel Serverless Function — /api/stripe-webhook
 *
 * Listens for Stripe events and updates the user's subscription
 * in Supabase when a payment succeeds or subscription changes.
 *
 * Required env vars (set in Vercel dashboard):
 *   STRIPE_SECRET_KEY         — Stripe secret key (sk_live_...)
 *   STRIPE_WEBHOOK_SECRET     — Stripe webhook signing secret (whsec_...)
 *   SUPABASE_URL              — Your Supabase project URL
 *   SUPABASE_SERVICE_ROLE_KEY — Service role key (bypasses RLS to write)
 */

import type { VercelRequest, VercelResponse } from '@vercel/node'
import Stripe from 'stripe'
import { createClient } from '@supabase/supabase-js'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

// Use service role key here (server-side only — never expose to browser)
const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).end()

  const sig = req.headers['stripe-signature'] as string
  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      req.body,           // raw body (see vercel.json rawBody config below)
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (err) {
    console.error('Webhook signature error:', err)
    return res.status(400).json({ error: 'Invalid signature' })
  }

  // ── Handle events ────────────────────────────────────────────────────────
  switch (event.type) {

    // New paid subscription created
    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session
      await handleCheckoutCompleted(session)
      break
    }

    // Subscription renewed or plan changed
    case 'customer.subscription.updated': {
      const sub = event.data.object as Stripe.Subscription
      await handleSubscriptionUpdated(sub)
      break
    }

    // Subscription cancelled / expired
    case 'customer.subscription.deleted': {
      const sub = event.data.object as Stripe.Subscription
      await handleSubscriptionDeleted(sub)
      break
    }
  }

  res.status(200).json({ received: true })
}

// ── Helpers ───────────────────────────────────────────────────────────────

async function handleCheckoutCompleted(session: Stripe.Checkout.Session) {
  const userId = session.client_reference_id   // pass this from your checkout URL
  const customerId = session.customer as string
  const subscriptionId = session.subscription as string

  if (!userId || !customerId) return

  // Fetch subscription details to get period_end
  const sub = await stripe.subscriptions.retrieve(subscriptionId)
  const plan = getPlanFromPrice(sub.items.data[0]?.price?.lookup_key ?? '')

  await supabase.from('profiles').upsert({
    id: userId,
    stripe_customer_id: customerId,
    subscription_status: plan,
    subscription_plan: sub.items.data[0]?.price?.lookup_key ?? null,
    subscription_period_end: new Date(sub.current_period_end * 1000).toISOString(),
  })
}

async function handleSubscriptionUpdated(sub: Stripe.Subscription) {
  const customerId = sub.customer as string
  const plan = getPlanFromPrice(sub.items.data[0]?.price?.lookup_key ?? '')

  // Look up user by stripe_customer_id
  const { data: profile } = await supabase
    .from('profiles')
    .select('id')
    .eq('stripe_customer_id', customerId)
    .single()

  if (!profile) return

  await supabase.from('profiles').update({
    subscription_status: sub.status === 'active' ? plan : 'free',
    subscription_plan: sub.items.data[0]?.price?.lookup_key ?? null,
    subscription_period_end: new Date(sub.current_period_end * 1000).toISOString(),
  }).eq('id', profile.id)
}

async function handleSubscriptionDeleted(sub: Stripe.Subscription) {
  const customerId = sub.customer as string

  const { data: profile } = await supabase
    .from('profiles')
    .select('id')
    .eq('stripe_customer_id', customerId)
    .single()

  if (!profile) return

  await supabase.from('profiles').update({
    subscription_status: 'free',
    subscription_plan: null,
    subscription_period_end: null,
  }).eq('id', profile.id)
}

function getPlanFromPrice(lookupKey: string): 'pro' | 'enterprise' | 'free' {
  if (lookupKey.includes('enterprise')) return 'enterprise'
  if (lookupKey.includes('pro')) return 'pro'
  return 'free'
}
