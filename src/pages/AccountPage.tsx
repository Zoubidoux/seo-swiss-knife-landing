import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useAuth } from '@/contexts/AuthContext'
import { supabase } from '@/lib/supabase'
import { Button } from '@/components/ui/button'
import { SEO } from '@/components/SEO'
import { Link } from 'react-router-dom'
import { AuthForm } from '@/components/AuthForm'
import {
  LogOut, User, CreditCard, CheckCircle, Zap, Crown,
  ExternalLink, AlertTriangle, RefreshCw, Calendar, CheckCircle2, Loader2, AlertCircle
} from 'lucide-react'

// ── Dashboard (logged in) ─────────────────────────────────────────────────────
const PLAN_META: Record<string, { label: string; color: string; icon: React.ReactNode }> = {
  free:       { label: 'Free',       color: '#9ca3af', icon: <Zap className="w-4 h-4" /> },
  pro:        { label: 'Pro',        color: '#7c3aed', icon: <Crown className="w-4 h-4" /> },
  enterprise: { label: 'Enterprise', color: '#f59e0b', icon: <Crown className="w-4 h-4" /> },
}

interface DashboardProps {
  extSession: string | null
}

function Dashboard({ extSession }: DashboardProps) {
  const { user, session, profile, signOut } = useAuth()
  const [portalLoading, setPortalLoading] = useState(false)
  const [linkingStatus, setLinkingStatus] = useState<'idle' | 'linking' | 'success' | 'error'>('idle')
  const [linkingError, setLinkingError] = useState<string | null>(null)

  const plan = PLAN_META[profile?.plan ?? 'free']
  const isPaid = profile?.plan !== 'free' && !!profile?.plan
  const isCancelled = profile?.cancel_at_period_end === true
  const isPastDue = profile?.payment_status === 'past_due'

  const periodEnd = profile?.period_end
    ? new Date(profile.period_end).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    : null

  const intervalLabel = profile?.subscription_interval === 'year' ? 'Annual' : profile?.subscription_interval === 'month' ? 'Monthly' : null

  useEffect(() => {
    if (extSession && user && session && linkingStatus === 'idle') {
      linkExtension()
    }
  }, [extSession, user, session, linkingStatus])

  const linkExtension = async () => {
    setLinkingStatus('linking')
    try {
      const { error: updateError } = await supabase
        .from('auth_pending_sessions')
        .update({
          access_token: session?.access_token,
          refresh_token: session?.refresh_token,
        })
        .eq('code', extSession)

      if (updateError) throw updateError
      setLinkingStatus('success')
    } catch (err: any) {
      console.error('Linking error:', err)
      setLinkingError(err.message || 'Failed to link your extension.')
      setLinkingStatus('error')
    }
  }

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
    <div className="min-h-screen px-4 py-8 bg-[#F9FAFB]">
      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-10">
          <Link to="/" className="inline-flex items-center gap-3 no-underline">
            <span className="font-black text-xl text-gray-900 tracking-tight uppercase">Search Toolbox<span className="text-indigo-600">.</span></span>
          </Link>
          <button onClick={signOut} className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-400 hover:text-gray-950 transition-colors bg-transparent border-none">
            <LogOut className="w-4 h-4" /> Sign out
          </button>
        </div>

        {/* ── Extension linking status ── */}
        {extSession && (
          <div className="mb-8 p-6 rounded-[24px] bg-white border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.05)] text-center">
            {linkingStatus === 'linking' && (
              <div className="flex flex-col items-center gap-3">
                <Loader2 className="w-8 h-8 text-indigo-600 animate-spin" />
                <p className="text-sm font-black uppercase tracking-tight">Linking Chrome Extension...</p>
              </div>
            )}
            {linkingStatus === 'success' && (
              <div className="flex flex-col items-center gap-3 text-green-600">
                <CheckCircle2 className="w-10 h-10" />
                <div>
                  <p className="text-sm font-black uppercase tracking-tight">Extension Linked Successfully!</p>
                  <p className="text-xs text-gray-400 font-medium mt-1">You can now close this window and return to the extension.</p>
                </div>
                <Button onClick={() => window.close()} className="mt-2 h-10 px-6 text-[10px] font-black uppercase tracking-widest bg-gray-900 text-white rounded-lg">Close Window</Button>
              </div>
            )}
            {linkingStatus === 'error' && (
              <div className="flex flex-col items-center gap-3 text-red-500">
                <AlertCircle className="w-10 h-10" />
                <div>
                  <p className="text-sm font-black uppercase tracking-tight">Linking Failed</p>
                  <p className="text-xs text-red-400 font-medium mt-1">{linkingError}</p>
                </div>
                <Button onClick={linkExtension} className="mt-2 h-10 px-6 text-[10px] font-black uppercase tracking-widest bg-gray-900 text-white rounded-lg">Try Again</Button>
              </div>
            )}
          </div>
        )}

        {/* User info */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 border-2 border-indigo-100 bg-white">
            <User className="w-5 h-5 text-indigo-600" />
          </div>
          <div>
            <p className="text-gray-900 font-black">{user?.email}</p>
            <p className="text-gray-400 text-xs font-medium">Member since {new Date(user?.created_at ?? '').toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
          </div>
        </div>

        {/* ── Payment failed banner ── */}
        {isPastDue && (
          <div className="flex items-start gap-3 px-4 py-3 rounded-xl mb-4 bg-red-50 border border-red-100">
            <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
            <div className="flex-1">
              <p className="text-xs font-black text-red-500 uppercase tracking-wide">Payment failed</p>
              <p className="text-xs text-red-700/60 mt-0.5 font-medium">Your last payment couldn't be processed. Update your card to keep your plan active.</p>
            </div>
            <button onClick={openPortal} className="text-xs font-black uppercase tracking-wider text-red-600 hover:text-red-700 bg-transparent border-none shrink-0">
              Fix now
            </button>
          </div>
        )}

        {/* ── Cancellation notice ── */}
        {isCancelled && periodEnd && (
          <div className="flex items-start gap-3 px-4 py-3 rounded-xl mb-4 bg-amber-50 border border-amber-100">
            <Calendar className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
            <div className="flex-1">
              <p className="text-xs font-black text-amber-600 uppercase tracking-wide">Subscription cancelled</p>
              <p className="text-xs text-amber-700/60 mt-0.5 font-medium">Your {plan.label} plan stays active until <strong className="text-amber-700">{periodEnd}</strong>, then reverts to Free.</p>
            </div>
            <button onClick={openPortal} className="text-xs font-black uppercase tracking-wider text-amber-600 hover:text-amber-700 bg-transparent border-none shrink-0">
              Reactivate
            </button>
          </div>
        )}

        {/* ── Plan card ── */}
        <div className="mb-5 bg-white border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] rounded-[24px] p-8">
          <div className="flex items-start justify-between mb-8">
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-300 mb-2">Current Plan</p>
              <div className="flex items-center gap-2 mb-1">
                <span style={{ color: plan.color }}>{plan.icon}</span>
                <span className="text-3xl font-black text-gray-900">{plan.label}</span>
                {intervalLabel && (
                  <span className="text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md bg-gray-50 text-gray-400 border border-gray-100">
                    {intervalLabel}
                  </span>
                )}
              </div>
              {periodEnd && isPaid && (
                <p className="text-xs text-gray-400 font-medium flex items-center gap-1.5 mt-2">
                  {isCancelled
                    ? <><Calendar className="w-3.5 h-3.5" /> Ends {periodEnd}</>
                    : <><RefreshCw className="w-3.5 h-3.5" /> Renews {periodEnd}</>
                  }
                </p>
              )}
            </div>

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider" style={{
              background: isPastDue ? '#FEF2F2' : isPaid ? '#EEF2FF' : '#F9FAFB',
              border: `1px solid ${isPastDue ? '#FEE2E2' : isPaid ? '#E0E7FF' : '#F3F4F6'}`,
              color: isPastDue ? '#EF4444' : isPaid ? '#4F46E5' : '#9CA3AF',
            }}>
              {isPastDue ? <AlertTriangle className="w-3.5 h-3.5" /> : <CheckCircle className="w-3.5 h-3.5" />}
              {isPastDue ? 'Past due' : 'Active'}
            </div>
          </div>

          {/* CTA */}
          {!isPaid ? (
            <Link to="/pricing" className="no-underline">
              <Button className="w-full h-14 font-black text-xs uppercase tracking-[0.2em] rounded-xl bg-[#6366F1] text-white hover:bg-[#5558e3] border-none shadow-lg shadow-indigo-100 transition-all">
                Upgrade to Pro
              </Button>
            </Link>
          ) : (
            <button
              onClick={openPortal}
              disabled={portalLoading}
              className="w-full h-14 font-black text-xs uppercase tracking-[0.2em] rounded-xl flex items-center justify-center gap-2 transition-all bg-gray-50 border border-gray-100 text-gray-500 hover:bg-gray-100 disabled:opacity-50"
            >
              <CreditCard className="w-4 h-4" />
              {isCancelled ? 'Reactivate or manage plan' : 'Manage subscription'}
            </button>
          )}

          {isPaid && !isCancelled && (
            <p className="text-center text-[10px] text-gray-300 font-medium mt-4 uppercase tracking-widest">
              Cancel anytime from the portal
            </p>
          )}
        </div>

        {/* Extension link */}
        <div className="bg-gray-50 border border-gray-100 rounded-[20px] p-6">
          <p className="text-[10px] font-black uppercase tracking-widest text-gray-300 mb-3">Chrome Extension</p>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-bold text-gray-900">SEO & GEO Toolkit</p>
              <p className="text-xs text-gray-400 mt-1 font-medium">Synced with your account</p>
            </div>
            <a
              href="https://chromewebstore.google.com/detail/search-toolbox"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-indigo-600 hover:text-indigo-700 transition-colors no-underline shrink-0 ml-4"
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
  const [searchParams] = useSearchParams()
  const extSession = searchParams.get('ext_session')

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F9FAFB]">
        <Loader2 className="w-8 h-8 text-indigo-600 animate-spin" />
      </div>
    )
  }

  return (
    <>
      <SEO title="My Account — Search Toolbox" description="Manage your Search Toolbox account and subscription." />
      <div className="min-h-screen bg-[#F9FAFB]">
        {user ? (
          <Dashboard extSession={extSession} />
        ) : (
          <div className="pt-20 pb-20">
            <AuthForm redirectPath={extSession ? window.location.pathname + window.location.search : undefined} />
          </div>
        )}
      </div>
    </>
  )
}
