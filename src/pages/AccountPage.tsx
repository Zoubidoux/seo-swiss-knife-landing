import { useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { supabase } from '@/lib/supabase'
import { Button } from '@/components/ui/button'
import { SEO } from '@/components/SEO'
import { Link } from 'react-router-dom'
import {
  LogOut, User, CreditCard, CheckCircle, Zap, Crown,
  ExternalLink, AlertTriangle, RefreshCw, Calendar
} from 'lucide-react'

// ── Google icon SVG (inline, no dependency) ──────────────────────────────────
function GoogleIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  )
}

// ── Auth form (not logged in) ─────────────────────────────────────────────────
type Tab = 'login' | 'register'

function AuthForm() {
  const { signIn, signUp } = useAuth()
  const [tab, setTab] = useState<Tab>('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [googleLoading, setGoogleLoading] = useState(false)

  const handleGoogleSignIn = async () => {
    setGoogleLoading(true)
    setError(null)
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/account`,
        // This ensures the same Google account links to the same Supabase user
        // whether the user logs in from the landing page or the extension
        queryParams: { access_type: 'offline', prompt: 'consent' },
      },
    })
    if (error) { setError(error.message); setGoogleLoading(false) }
    // On success: browser redirects to Google → back to /account
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setSuccess(null)
    setLoading(true)
    if (tab === 'login') {
      const { error } = await signIn(email, password)
      if (error) setError(error)
    } else {
      const { error } = await signUp(email, password)
      if (error) setError(error)
      else setSuccess('Account created! Check your email to confirm.')
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{
      background: 'linear-gradient(135deg, #0d0d1a 0%, #1a0a2e 40%, #0f0f2a 100%)'
    }}>
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', overflow: 'hidden', zIndex: 0 }}>
        <div style={{ position: 'absolute', top: '10%', left: '-5%', width: '50%', height: '50%', borderRadius: '50%', background: 'rgba(109,40,217,0.35)', filter: 'blur(80px)' }} />
        <div style={{ position: 'absolute', bottom: '10%', right: '-5%', width: '40%', height: '40%', borderRadius: '50%', background: 'rgba(79,70,229,0.25)', filter: 'blur(70px)' }} />
      </div>

      <div className="relative z-10 w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-3 no-underline">
            <img src="/assets/icons/heart-pixel.png" alt="" className="w-8 h-8" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }} />
            <span className="font-black text-2xl text-white tracking-tight uppercase">Search Toolbox</span>
          </Link>
          <p className="text-white/40 text-sm mt-2 font-medium">Your SEO account</p>
        </div>

        <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(20px)', borderRadius: '20px', padding: '2rem' }}>

          {/* Google sign-in — works with extension using same Supabase project */}
          <button
            onClick={handleGoogleSignIn}
            disabled={googleLoading}
            className="w-full flex items-center justify-center gap-3 h-12 rounded-xl font-black text-xs uppercase tracking-widest transition-all hover:opacity-90 mb-6"
            style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: 'white', opacity: googleLoading ? 0.6 : 1 }}
          >
            <GoogleIcon />
            {googleLoading ? 'Redirecting...' : 'Continue with Google'}
          </button>

          <div className="flex items-center gap-4 mb-6">
            <div style={{ height: '1px', flex: 1, background: 'rgba(255,255,255,0.08)' }} />
            <span className="text-[10px] font-black uppercase tracking-widest text-white/20">or</span>
            <div style={{ height: '1px', flex: 1, background: 'rgba(255,255,255,0.08)' }} />
          </div>

          {/* Tabs */}
          <div className="flex gap-1 mb-6" style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '10px', padding: '3px' }}>
            {(['login', 'register'] as Tab[]).map(t => (
              <button
                key={t}
                onClick={() => { setTab(t); setError(null); setSuccess(null) }}
                className="flex-1 py-2.5 text-xs font-black uppercase tracking-widest transition-all rounded-lg"
                style={{
                  background: tab === t ? 'rgba(109,40,217,0.6)' : 'transparent',
                  color: tab === t ? '#fff' : 'rgba(255,255,255,0.4)',
                }}
              >
                {t === 'login' ? 'Sign In' : 'Sign Up'}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="text-[10px] font-black uppercase tracking-widest text-white/30 block mb-2">Email</label>
              <input
                type="email" required value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder:text-white/20 outline-none"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
              />
            </div>
            <div>
              <label className="text-[10px] font-black uppercase tracking-widest text-white/30 block mb-2">Password</label>
              <input
                type="password" required minLength={6} value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder:text-white/20 outline-none"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
              />
            </div>

            {error && <div className="text-xs font-semibold text-red-400 px-4 py-3 rounded-xl" style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)' }}>{error}</div>}
            {success && <div className="text-xs font-semibold text-green-400 px-4 py-3 rounded-xl" style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)' }}>{success}</div>}

            <Button
              type="submit" disabled={loading}
              className="w-full h-12 font-black text-xs uppercase tracking-widest rounded-xl mt-1"
              style={{ background: 'linear-gradient(135deg, #7c3aed, #4f46e5)', border: 'none', opacity: loading ? 0.7 : 1 }}
            >
              {loading ? '...' : tab === 'login' ? 'Sign In' : 'Create Account'}
            </Button>
          </form>
        </div>

        <p className="text-center text-xs text-white/20 mt-6">
          Same account as your Chrome extension
        </p>
      </div>
    </div>
  )
}

// ── Dashboard (logged in) ─────────────────────────────────────────────────────
const PLAN_META: Record<string, { label: string; color: string; icon: React.ReactNode }> = {
  free:       { label: 'Free',       color: '#9ca3af', icon: <Zap className="w-4 h-4" /> },
  pro:        { label: 'Pro',        color: '#7c3aed', icon: <Crown className="w-4 h-4" /> },
  enterprise: { label: 'Enterprise', color: '#f59e0b', icon: <Crown className="w-4 h-4" /> },
}

function Dashboard() {
  const { user, profile, signOut } = useAuth()
  const [portalLoading, setPortalLoading] = useState(false)

  const plan = PLAN_META[profile?.subscription_status ?? 'free']
  const isPaid = profile?.subscription_status !== 'free'
  const isCancelled = profile?.cancel_at_period_end === true
  const isPastDue = profile?.payment_status === 'past_due'

  const periodEnd = profile?.subscription_period_end
    ? new Date(profile.subscription_period_end).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    : null

  const intervalLabel = profile?.subscription_interval === 'year' ? 'Annual' : profile?.subscription_interval === 'month' ? 'Monthly' : null

  const openPortal = async () => {
    if (!profile?.stripe_customer_id) return
    setPortalLoading(true)
    const res = await fetch('/api/create-portal-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ customerId: profile.stripe_customer_id }),
    })
    const data = await res.json()
    if (data.url) window.location.href = data.url
    else setPortalLoading(false)
  }

  return (
    <div className="min-h-screen px-4 py-8" style={{ background: 'linear-gradient(135deg, #0d0d1a 0%, #1a0a2e 40%, #0f0f2a 100%)' }}>
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', overflow: 'hidden', zIndex: 0 }}>
        <div style={{ position: 'absolute', top: '5%', left: '-5%', width: '45%', height: '45%', borderRadius: '50%', background: 'rgba(109,40,217,0.3)', filter: 'blur(80px)' }} />
        <div style={{ position: 'absolute', bottom: '15%', right: '-5%', width: '35%', height: '35%', borderRadius: '50%', background: 'rgba(79,70,229,0.2)', filter: 'blur(70px)' }} />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-10">
          <Link to="/" className="inline-flex items-center gap-3 no-underline">
            <img src="/assets/icons/heart-pixel.png" alt="" className="w-7 h-7" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }} />
            <span className="font-black text-xl text-white tracking-tight uppercase">Search Toolbox</span>
          </Link>
          <button onClick={signOut} className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white/30 hover:text-white transition-colors">
            <LogOut className="w-4 h-4" /> Sign out
          </button>
        </div>

        {/* User info */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ background: 'rgba(109,40,217,0.4)', border: '1px solid rgba(109,40,217,0.5)' }}>
            <User className="w-5 h-5 text-violet-300" />
          </div>
          <div>
            <p className="text-white font-black">{user?.email}</p>
            <p className="text-white/30 text-xs">Member since {new Date(user?.created_at ?? '').toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
          </div>
        </div>

        {/* ── Payment failed banner ── */}
        {isPastDue && (
          <div className="flex items-start gap-3 px-4 py-3 rounded-xl mb-4" style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.25)' }}>
            <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
            <div className="flex-1">
              <p className="text-xs font-black text-red-400 uppercase tracking-wide">Payment failed</p>
              <p className="text-xs text-white/50 mt-0.5">Your last payment couldn't be processed. Update your card to keep your plan active.</p>
            </div>
            <button onClick={openPortal} className="text-xs font-black uppercase tracking-wider text-red-400 hover:text-red-300 shrink-0">
              Fix now
            </button>
          </div>
        )}

        {/* ── Cancellation notice ── */}
        {isCancelled && periodEnd && (
          <div className="flex items-start gap-3 px-4 py-3 rounded-xl mb-4" style={{ background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.2)' }}>
            <Calendar className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
            <div className="flex-1">
              <p className="text-xs font-black text-amber-400 uppercase tracking-wide">Subscription cancelled</p>
              <p className="text-xs text-white/50 mt-0.5">Your {plan.label} plan stays active until <strong className="text-white/70">{periodEnd}</strong>, then reverts to Free.</p>
            </div>
            <button onClick={openPortal} className="text-xs font-black uppercase tracking-wider text-amber-400 hover:text-amber-300 shrink-0">
              Reactivate
            </button>
          </div>
        )}

        {/* ── Plan card ── */}
        <div className="mb-5" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', padding: '1.5rem' }}>
          <div className="flex items-start justify-between mb-6">
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-2">Current Plan</p>
              <div className="flex items-center gap-2 mb-1">
                <span style={{ color: plan.color }}>{plan.icon}</span>
                <span className="text-2xl font-black text-white">{plan.label}</span>
                {intervalLabel && (
                  <span className="text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md" style={{ background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.4)' }}>
                    {intervalLabel}
                  </span>
                )}
              </div>
              {periodEnd && isPaid && (
                <p className="text-xs text-white/30 flex items-center gap-1">
                  {isCancelled
                    ? <><Calendar className="w-3 h-3" /> Ends {periodEnd}</>
                    : <><RefreshCw className="w-3 h-3" /> Renews {periodEnd}</>
                  }
                </p>
              )}
            </div>

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider" style={{
              background: isPastDue ? 'rgba(239,68,68,0.12)' : isPaid ? 'rgba(109,40,217,0.2)' : 'rgba(156,163,175,0.1)',
              border: `1px solid ${isPastDue ? 'rgba(239,68,68,0.3)' : isPaid ? 'rgba(109,40,217,0.3)' : 'rgba(156,163,175,0.2)'}`,
              color: isPastDue ? '#f87171' : plan.color,
            }}>
              {isPastDue ? <AlertTriangle className="w-3.5 h-3.5" /> : <CheckCircle className="w-3.5 h-3.5" />}
              {isPastDue ? 'Past due' : 'Active'}
            </div>
          </div>

          {/* CTA */}
          {!isPaid ? (
            <Link to="/pricing">
              <Button className="w-full h-11 font-black text-xs uppercase tracking-widest rounded-xl" style={{ background: 'linear-gradient(135deg, #7c3aed, #4f46e5)', border: 'none' }}>
                Upgrade to Pro
              </Button>
            </Link>
          ) : (
            <button
              onClick={openPortal}
              disabled={portalLoading}
              className="w-full h-11 font-black text-xs uppercase tracking-widest rounded-xl flex items-center justify-center gap-2 transition-all hover:opacity-80"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.6)', opacity: portalLoading ? 0.6 : 1 }}
            >
              <CreditCard className="w-4 h-4" />
              {isCancelled ? 'Reactivate or manage plan' : 'Manage subscription · Cancel anytime'}
            </button>
          )}

          {isPaid && !isCancelled && (
            <p className="text-center text-[10px] text-white/20 mt-3">
              Auto-renews {intervalLabel?.toLowerCase()}. Cancel anytime from the portal above — you keep access until {periodEnd ?? 'end of period'}.
            </p>
          )}
        </div>

        {/* Extension link */}
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px', padding: '1.25rem' }}>
          <p className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-3">Chrome Extension</p>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-bold text-white">SEO & GEO Toolkit</p>
              <p className="text-xs text-white/30 mt-0.5">Sign in with the same email or Google account to sync your plan</p>
            </div>
            <a
              href="https://chromewebstore.google.com/detail/search-toolbox"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-violet-400 hover:text-violet-300 transition-colors no-underline shrink-0 ml-4"
            >
              Open <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Page wrapper ──────────────────────────────────────────────────────────────
export function AccountPage() {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #0d0d1a 0%, #1a0a2e 40%, #0f0f2a 100%)' }}>
        <div className="w-8 h-8 rounded-full border-2 border-violet-500 border-t-transparent animate-spin" />
      </div>
    )
  }

  return (
    <>
      <SEO title="My Account — Search Toolbox" description="Manage your Search Toolbox account and subscription." />
      {user ? <Dashboard /> : <AuthForm />}
    </>
  )
}
