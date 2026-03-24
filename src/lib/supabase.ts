import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type SubscriptionStatus = 'free' | 'pro' | 'enterprise'

export interface Profile {
  id: string
  email: string
  stripe_customer_id: string | null
  subscription_status: SubscriptionStatus
  subscription_plan: string | null
  subscription_period_end: string | null
  created_at: string
}
