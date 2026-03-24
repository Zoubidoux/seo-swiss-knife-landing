/**
 * Vercel Serverless Function — /api/create-portal-session
 *
 * Creates a Stripe Customer Portal session so the user can
 * manage their subscription (cancel, update card, etc.)
 */

import type { VercelRequest, VercelResponse } from '@vercel/node'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).end()

  const { customerId } = req.body as { customerId: string }
  if (!customerId) return res.status(400).json({ error: 'Missing customerId' })

  const session = await stripe.billingPortal.sessions.create({
    customer: customerId,
    return_url: `${process.env.VITE_SITE_URL ?? 'https://seogeotoolkit.com'}/account`,
  })

  res.status(200).json({ url: session.url })
}
