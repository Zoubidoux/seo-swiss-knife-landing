import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string || 'https://placeholder.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string || 'placeholder'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
export const supabaseConfigured = !!(import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_ANON_KEY)

// Mirrors the existing user_profiles table
export interface UserProfile {
  user_id: string
  stripe_customer_id: string | null
  display_name: string | null
  avatar_url: string | null
  created_at: string
  updated_at: string
}

// Mirrors the existing user_entitlements table (+ 3 new columns we'll add)
export interface UserEntitlement {
  user_id: string
  plan: string                          // 'free' | 'pro' | 'enterprise'
  credits_remaining: number | null
  credits_total: number | null
  period_end: string | null
  stripe_subscription_id: string | null
  updated_at: string
  // New columns (added via migration)
  cancel_at_period_end: boolean
  subscription_interval: 'month' | 'year' | null
  payment_status: 'active' | 'past_due' | 'unpaid' | null
}

// Combined shape used throughout the landing page
export interface Profile {
  user_id: string
  stripe_customer_id: string | null
  display_name: string | null
  avatar_url: string | null
  plan: string
  credits_remaining: number | null
  period_end: string | null
  stripe_subscription_id: string | null
  cancel_at_period_end: boolean
  subscription_interval: 'month' | 'year' | null
  payment_status: 'active' | 'past_due' | 'unpaid' | null
}
