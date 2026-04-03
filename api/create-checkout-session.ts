/**
 * Vercel Serverless Function — /api/create-checkout-session
 *
 * Creates a Stripe Checkout Session for a logged-in user.
 * Ensures client_reference_id and metadata are set for webhook sync.
 */

import type { VercelRequest, VercelResponse } from '@vercel/node'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-01-27.acacia' as any, // Use stable API version
})

const SITE_URL = process.env.VITE_SITE_URL || 'https://seogeotoolkit.com'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).end()

  const { priceId, userId, email, planName } = req.body as { 
    priceId: string; 
    userId: string; 
    email: string;
    planName: string;
  }

  if (!priceId || !userId || !email) {
    return res.status(400).json({ error: 'Missing required parameters (priceId, userId, email)' })
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      client_reference_id: userId,
      customer_email: email,
      metadata: {
        user_id: userId,
        plan: planName,
        source: 'pricing_flow'
      },
      success_url: `${SITE_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${SITE_URL}/checkout/cancel?plan=${planName}`,
      allow_promotion_codes: true,
      billing_address_collection: 'auto',
    })

    return res.status(200).json({ url: session.url })
  } catch (err: any) {
    console.error('[stripe-checkout] error:', err)
    return res.status(500).json({ error: err.message || 'Internal server error' })
  }
}
