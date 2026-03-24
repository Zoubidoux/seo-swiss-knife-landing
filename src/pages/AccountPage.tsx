import { useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { Button } from '@/components/ui/button'
import { SEO } from '@/components/SEO'
import { Link } from 'react-router-dom'
import { LogOut, User, CreditCard, CheckCircle, Zap, Crown, ExternalLink } from 'lucide-react'

type Tab = 'login' | 'register'

function AuthForm() {
  const { signIn, signUp } = useAuth()
  const [tab, setTab] = useState<Tab>('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

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
      else setSuccess('Account created! Check your email to confirm your address.')
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{
      background: 'linear-gradient(135deg, #0d0d1a 0%, #1a0a2e 40%, #0f0f2a 100%)'
    }}>
      {/* Background plasma blobs */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', overflow: 'hidden', zIndex: 0 }}>
        <div style={{ position: 'absolute', top: '10%', left: '-5%', width: '50%', height: '50%', borderRadius: '50%', background: 'rgba(109,40,217,0.35)', filter: 'blur(80px)' }} />
        <div style={{ position: 'absolute', bottom: '10%', right: '-5%', width: '40%', height: '40%', borderRadius: '50%', background: 'rgba(79,70,229,0.25)', filter: 'blur(70px)' }} />
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-3 no-underline">
            <img src="/assets/icons/heart-pixel.png" alt="" className="w-8 h-8" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }} />
            <span className="font-black text-2xl text-white tracking-tight uppercase">Search Toolbox</span>
          </Link>
          <p className="text-white/40 text-sm mt-2 font-medium">Your SEO account</p>
        </div>

        {/* Card */}
        <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(20px)', borderRadius: '20px', padding: '2rem' }}>
          {/* Tabs */}
          <div className="flex gap-1 mb-8" style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '12px', padding: '4px' }}>
            {(['login', 'register'] as Tab[]).map(t => (
              <button
                key={t}
                onClick={() => { setTab(t); setError(null); setSuccess(null) }}
                className="flex-1 py-2.5 text-xs font-black uppercase tracking-widest transition-all rounded-lg"
                style={{
                  background: tab === t ? 'rgba(109,40,217,0.6)' : 'transparent',
                  color: tab === t ? '#fff' : 'rgba(255,255,255,0.4)'
                }}
              >
                {t === 'login' ? 'Sign In' : 'Create Account'}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="text-xs font-black uppercase tracking-widest text-white/40 block mb-2">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl text-sm font-medium text-white placeholder:text-white/20 outline-none focus:ring-2 transition-all"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
              />
            </div>
            <div>
              <label className="text-xs font-black uppercase tracking-widest text-white/40 block mb-2">Password</label>
              <input
                type="password"
                required
                minLength={6}
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl text-sm font-medium text-white placeholder:text-white/20 outline-none transition-all"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
              />
            </div>

            {error && (
              <div className="text-xs font-semibold text-red-400 px-4 py-3 rounded-xl" style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)' }}>
                {error}
              </div>
            )}
            {success && (
              <div className="text-xs font-semibold text-green-400 px-4 py-3 rounded-xl" style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)' }}>
                {success}
              </div>
            )}

            <Button
              type="submit"
              disabled={loading}
              className="w-full h-12 font-black text-xs uppercase tracking-widest rounded-xl mt-2"
              style={{ background: 'linear-gradient(135deg, #7c3aed, #4f46e5)', border: 'none', opacity: loading ? 0.7 : 1 }}
            >
              {loading ? '...' : tab === 'login' ? 'Sign In' : 'Create Account'}
            </Button>
          </form>

          {tab === 'login' && (
            <p className="text-center text-xs text-white/30 mt-6">
              No account?{' '}
              <button onClick={() => setTab('register')} className="text-violet-400 font-bold hover:text-violet-300">
                Create one free
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

const PLAN_LABELS: Record<string, { label: string; color: string; icon: React.ReactNode }> = {
  free: { label: 'Free', color: '#9ca3af', icon: <Zap className="w-4 h-4" /> },
  pro: { label: 'Pro', color: '#7c3aed', icon: <Crown className="w-4 h-4" /> },
  enterprise: { label: 'Enterprise', color: '#f59e0b', icon: <Crown className="w-4 h-4" /> },
}

function Dashboard() {
  const { user, profile, signOut } = useAuth()
  const plan = PLAN_LABELS[profile?.subscription_status ?? 'free']

  const periodEnd = profile?.subscription_period_end
    ? new Date(profile.subscription_period_end).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    : null

  const openStripePortal = async () => {
    // Redirects to Vercel function which creates a Stripe billing portal session
    const res = await fetch('/api/create-portal-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ customerId: profile?.stripe_customer_id }),
    })
    const data = await res.json()
    if (data.url) window.location.href = data.url
  }

  return (
    <div className="min-h-screen px-4 py-8" style={{
      background: 'linear-gradient(135deg, #0d0d1a 0%, #1a0a2e 40%, #0f0f2a 100%)'
    }}>
      {/* Background plasma blobs */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', overflow: 'hidden', zIndex: 0 }}>
        <div style={{ position: 'absolute', top: '5%', left: '-5%', width: '45%', height: '45%', borderRadius: '50%', background: 'rgba(109,40,217,0.3)', filter: 'blur(80px)' }} />
        <div style={{ position: 'absolute', bottom: '15%', right: '-5%', width: '35%', height: '35%', borderRadius: '50%', background: 'rgba(79,70,229,0.2)', filter: 'blur(70px)' }} />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <Link to="/" className="inline-flex items-center gap-3 no-underline">
            <img src="/assets/icons/heart-pixel.png" alt="" className="w-7 h-7" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }} />
            <span className="font-black text-xl text-white tracking-tight uppercase">Search Toolbox</span>
          </Link>
          <button
            onClick={signOut}
            className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white/30 hover:text-white transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Sign out
          </button>
        </div>

        {/* Welcome */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'rgba(109,40,217,0.4)', border: '1px solid rgba(109,40,217,0.5)' }}>
              <User className="w-5 h-5 text-violet-300" />
            </div>
            <div>
              <p className="text-white font-black text-lg">{user?.email}</p>
              <p className="text-white/30 text-xs font-medium">Member since {new Date(user?.created_at ?? '').toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
            </div>
          </div>
        </div>

        {/* Plan card */}
        <div className="mb-6" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', padding: '1.5rem' }}>
          <div className="flex items-start justify-between mb-6">
            <div>
              <p className="text-xs font-black uppercase tracking-widest text-white/30 mb-2">Current Plan</p>
              <div className="flex items-center gap-2">
                <span style={{ color: plan.color }}>{plan.icon}</span>
                <span className="text-2xl font-black text-white">{plan.label}</span>
              </div>
              {periodEnd && (
                <p className="text-xs text-white/30 mt-1">
                  {profile?.subscription_status === 'free' ? '' : `Renews ${periodEnd}`}
                </p>
              )}
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider" style={{
              background: profile?.subscription_status === 'free' ? 'rgba(156,163,175,0.1)' : 'rgba(109,40,217,0.2)',
              border: `1px solid ${profile?.subscription_status === 'free' ? 'rgba(156,163,175,0.2)' : 'rgba(109,40,217,0.3)'}`,
              color: plan.color
            }}>
              <CheckCircle className="w-3.5 h-3.5" />
              Active
            </div>
          </div>

          {profile?.subscription_status === 'free' ? (
            <Link to="/pricing">
              <Button className="w-full h-11 font-black text-xs uppercase tracking-widest rounded-xl" style={{ background: 'linear-gradient(135deg, #7c3aed, #4f46e5)', border: 'none' }}>
                Upgrade to Pro
              </Button>
            </Link>
          ) : (
            <button
              onClick={openStripePortal}
              className="w-full h-11 font-black text-xs uppercase tracking-widest rounded-xl flex items-center justify-center gap-2 transition-all hover:opacity-80"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.6)' }}
            >
              <CreditCard className="w-4 h-4" />
              Manage subscription
            </button>
          )}
        </div>

        {/* Extension link */}
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px', padding: '1.25rem' }}>
          <p className="text-xs font-black uppercase tracking-widest text-white/30 mb-3">Chrome Extension</p>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-bold text-white">SEO & GEO Toolkit</p>
              <p className="text-xs text-white/30 mt-0.5">Log in with the same email in the extension to unlock your plan</p>
            </div>
            <a
              href="https://chromewebstore.google.com/detail/search-toolbox"
              target="_blank"
              rel="noopener noreferrer"
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
