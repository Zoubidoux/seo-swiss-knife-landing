import { createContext, useContext, useEffect, useState } from 'react'
import type { User, Session } from '@supabase/supabase-js'
import { supabase } from '@/lib/supabase'
import type { Profile } from '@/lib/supabase'

interface AuthContextValue {
  user: User | null
  session: Session | null
  profile: Profile | null
  loading: boolean
  error: string | null
  debugInfo?: { upFound: boolean; ueFound: boolean }
  signIn: (email: string, password: string) => Promise<{ error: string | null }>
  signUp: (email: string, password: string) => Promise<{ error: string | null }>
  signOut: () => Promise<void>
  refreshProfile: () => Promise<void>
}

const AuthContext = createContext<AuthContextValue | null>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [profile, setProfile] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [debugInfo, setDebugInfo] = useState<{ upFound: boolean; ueFound: boolean }>({ upFound: false, ueFound: false })

  const fetchProfile = async (userId: string) => {
    try {
      setError(null)
      const [{ data: up, error: upError }, { data: ue, error: ueError }] = await Promise.all([
        supabase.from('user_profiles').select('*').eq('user_id', userId).maybeSingle(),
        supabase.from('user_entitlements').select('*').eq('user_id', userId).maybeSingle(),
      ])

      if (upError || ueError) {
        console.error('Fetch error:', upError || ueError)
        setError((upError?.message || ueError?.message) ?? 'Database error')
      }

      setDebugInfo({ upFound: !!up, ueFound: !!ue })

      setProfile({
        user_id: userId,
        stripe_customer_id: up?.stripe_customer_id ?? null,
        display_name: up?.display_name ?? null,
        avatar_url: up?.avatar_url ?? null,
        plan: ue?.plan ?? 'free',
        credits_remaining: ue?.credits_remaining ?? 0,
        period_end: ue?.period_end ?? null,
        stripe_subscription_id: ue?.stripe_subscription_id ?? null,
        cancel_at_period_end: ue?.cancel_at_period_end ?? false,
        subscription_interval: ue?.subscription_interval ?? null,
        payment_status: ue?.payment_status ?? null,
      })
    } catch (err: any) {
      console.error('fetchProfile error:', err)
      setError(err.message || 'Unexpected connection error')
      setProfile({
        user_id: userId,
        stripe_customer_id: null,
        display_name: null,
        avatar_url: null,
        plan: 'free',
        credits_remaining: 0,
        period_end: null,
        stripe_subscription_id: null,
        cancel_at_period_end: false,
        subscription_interval: null,
        payment_status: null,
      })
    }
  }

  const refreshProfile = async () => {
    if (user) await fetchProfile(user.id)
  }

  useEffect(() => {
    const init = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession()
        setSession(session)
        setUser(session?.user ?? null)
        if (session?.user) {
          await fetchProfile(session.user.id)
        }
      } catch (err) {
        console.error('Auth init error:', err)
      } finally {
        setLoading(false)
      }
    }

    init()

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
      setSession(session)
      const u = session?.user ?? null
      setUser(u)
      if (u) {
        await fetchProfile(u.id)
      } else {
        setProfile(null)
      }
    })

    return () => subscription.unsubscribe()
  }, [])

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    return { error: error?.message ?? null }
  }

  const signUp = async (email: string, password: string) => {
    const { error } = await supabase.auth.signUp({ email, password })
    return { error: error?.message ?? null }
  }

  const signOut = async () => {
    await supabase.auth.signOut()
  }

  return (
    <AuthContext.Provider value={{ user, session, profile, loading, error, debugInfo, signIn, signUp, signOut, refreshProfile }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider')
  return ctx
}
