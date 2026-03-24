import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type SubscriptionStatus = 'free' | 'pro' | 'enterprise'
export type PaymentStatus = 'active' | 'past_due' | 'unpaid' | null

export interface Profile {
  id: string
  email: string
  stripe_customer_id: string | null
  stripe_subscription_id: string | null
  subscription_status: SubscriptionStatus
  subscription_plan: string | null          // e.g. "pro_monthly" / "pro_yearly"
  subscription_interval: 'month' | 'year' | null
  subscription_period_end: string | null
  cancel_at_period_end: boolean             // true = cancelled, active until period_end
  payment_status: PaymentStatus
  created_at: string
}
