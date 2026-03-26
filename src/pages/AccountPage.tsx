import { useState, useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useAuth } from '@/contexts/AuthContext'
import { supabase } from '@/lib/supabase'
import { Button } from '@/components/ui/button'
import { SEO } from '@/components/SEO'
import { Link } from 'react-router-dom'
import { AuthForm } from '@/components/AuthForm'
import { PricingSection } from '@/components/PricingSection'
import {
  LogOut, User, CreditCard, Zap, Crown,
  ExternalLink, AlertTriangle, RefreshCw, Calendar, CheckCircle2, Loader2, AlertCircle
} from 'lucide-react'

// ── Skeletons ──
const Skeleton = ({ className }: { className: string }) => (
  <div className={`animate-pulse bg-gray-200 rounded-lg ${className}`} />
)

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
  const { user, session, profile, signOut, error: loadError, debugInfo } = useAuth()
  const [portalLoading, setPortalLoading] = useState(false)
  const [linkingStatus, setLinkingStatus] = useState<'idle' | 'linking' | 'success' | 'error'>('idle')
  const [linkingError, setLinkingError] = useState<string | null>(null)
  
  const pricingRef = useRef<HTMLDivElement>(null)

  const scrollToPricing = () => {
    pricingRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  if (!profile) {
    return (
      <div className="min-h-[400px] flex flex-col items-center justify-center gap-4">
        <Loader2 className="w-8 h-8 text-indigo-600 animate-spin" />
        <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Finalizing setup...</p>
      </div>
    )
  }

  // Normalize plan string to match PLAN_META keys
  const planKey = (profile.plan || 'free').toLowerCase()
  const plan = PLAN_META[planKey] || PLAN_META.free
  
  const isPaid = planKey !== 'free'
  const isCancelled = profile.cancel_at_period_end === true
  const isPastDue = profile.payment_status === 'past_due'

  const periodEnd = profile.period_end
    ? new Date(profile.period_end).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    : null

  const intervalLabel = profile.subscription_interval === 'year' ? 'Annual' : profile.subscription_interval === 'month' ? 'Monthly' : null

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
    if (!profile.stripe_customer_id) {
      alert("Billing portal is only available after your first payment. Please check back in a few minutes or contact support.")
      return
    }
    setPortalLoading(true)
    try {
      const res = await fetch('/api/create-portal-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ customerId: profile.stripe_customer_id }),
      })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      } else {
        throw new Error(data.error || 'Failed to create portal session')
      }
    } catch (err: any) {
      console.error('Portal error:', err)
      alert('Could not open the billing portal. Please try again later.')
      setPortalLoading(false)
    }
  }

  return (
    <div className="min-h-screen px-4 py-8 bg-[#F9FAFB]">
      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-10">
          <Link to="/" className="inline-flex items-center gap-3 no-underline">
            <span className="font-black text-xl text-gray-900 tracking-tight uppercase">Search Toolbox<span className="text-indigo-600">.</span></span>
          </Link>
          <button 
            onClick={() => signOut()} 
            className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-400 hover:text-gray-950 transition-colors bg-transparent border-none cursor-pointer"
          >
            <LogOut className="w-4 h-4" /> Sign out
          </button>
        </div>

        {/* ── Data Fetch Error Banner ── */}
        {loadError && (loadError !== 'Database error') && (
          <div className="flex items-center gap-3 p-4 bg-amber-50 border border-amber-100 rounded-2xl mb-8">
            <AlertCircle className="w-5 h-5 text-amber-500 shrink-0" />
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-amber-600">Sync Warning</p>
              <p className="text-xs text-amber-700/60 font-medium">We're having trouble reaching the database ({loadError}). Your plan info might be outdated.</p>
            </div>
          </div>
        )}

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

        {/* ── Plan & Usage Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          {/* Plan Card */}
          <div className="bg-white border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] rounded-[32px] p-8 flex flex-col">
            <div className="flex items-start justify-between mb-8">
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-300 mb-2">Current Plan</p>
                <div className="flex items-center gap-2 mb-1">
                  <span style={{ color: plan.color }}>{plan.icon}</span>
                  <span className="text-3xl font-black text-gray-900">{plan.label}</span>
                </div>
                {periodEnd && isPaid && (
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tight flex items-center gap-1.5 mt-2">
                    {isCancelled
                      ? <><Calendar className="w-3 h-3" /> Ends {periodEnd}</>
                      : <><RefreshCw className="w-3 h-3" /> {intervalLabel} · Renews {periodEnd}</>
                    }
                  </p>
                )}
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider" style={{
                background: isPastDue ? '#FEF2F2' : isPaid ? '#EEF2FF' : '#F9FAFB',
                border: `1px solid ${isPastDue ? '#FEE2E2' : isPaid ? '#E0E7FF' : '#F3F4F6'}`,
                color: isPastDue ? '#EF4444' : isPaid ? '#4F46E5' : '#9CA3AF',
              }}>
                {isPastDue ? 'Past due' : 'Active'}
              </div>
            </div>

            <div className="mt-auto">
              {!isPaid ? (
                <Button 
                  onClick={scrollToPricing}
                  className="w-full h-12 font-black text-[10px] uppercase tracking-[0.2em] rounded-xl bg-gray-900 text-white hover:bg-black border-none shadow-lg transition-all"
                >
                  Upgrade to Pro
                </Button>
              ) : (
                <button
                  onClick={openPortal}
                  disabled={portalLoading}
                  className="w-full h-12 font-black text-[10px] uppercase tracking-[0.2em] rounded-xl flex items-center justify-center gap-2 transition-all bg-gray-50 border border-gray-100 text-gray-500 hover:bg-gray-100 disabled:opacity-50"
                >
                  {portalLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <CreditCard className="w-4 h-4" />}
                  {isCancelled ? 'Reactivate' : 'Manage Billing'}
                </button>
              )}
            </div>
          </div>

          {/* AI Usage Card */}
          <div className="bg-white border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] rounded-[32px] p-8 flex flex-col relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity rotate-12">
              <Zap size={160} fill="currentColor" className="text-indigo-600" />
            </div>
            
            <div className="relative z-10">
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-300 mb-2">AI Credits</p>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-black text-gray-900">{profile.credits_remaining ?? 0}</span>
                <span className="text-sm font-bold text-gray-300 uppercase tracking-widest">Remaining</span>
              </div>

              {/* Progress bar */}
              <div className="w-full h-2 bg-gray-50 rounded-full overflow-hidden mb-4 border border-gray-100/50">
                <div 
                  className="h-full bg-indigo-500 transition-all duration-1000" 
                  style={{ width: `${Math.min(100, ((profile.credits_remaining ?? 0) / (planKey === 'enterprise' ? 1000 : 150)) * 100)}%` }}
                />
              </div>

              <div className="flex items-center justify-between">
                <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">
                  {planKey === 'free' ? 'Standard Limit: 10' : `Limit: ${planKey === 'enterprise' ? '1000' : '150'}`}
                </p>
                {/* Refill CTA if low */}
                {profile.credits_remaining !== null && profile.credits_remaining < 10 && (
                  <Link to="/pricing" className="text-[9px] font-black text-indigo-600 uppercase tracking-widest hover:underline">
                    Refill Credits
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Extension link */}
        <div className="bg-white border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] rounded-[32px] p-8 mb-12">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 border ${
                linkingStatus === 'success' ? 'bg-green-50 border-green-100 text-green-600' :
                linkingStatus === 'error' ? 'bg-red-50 border-red-100 text-red-600' :
                'bg-indigo-50 border-indigo-100 text-indigo-600'
              }`}>
                {linkingStatus === 'linking' ? <Loader2 className="w-6 h-6 animate-spin" /> : <Zap className="w-6 h-6" />}
              </div>
              <div>
                <p className="text-sm font-black text-gray-900 mb-0.5">Chrome Extension</p>
                <div className="flex items-center gap-2">
                  <span className={`w-1.5 h-1.5 rounded-full ${
                    linkingStatus === 'success' ? 'bg-green-500' : 
                    linkingStatus === 'error' ? 'bg-red-500' : 
                    'bg-indigo-400 animate-pulse'
                  }`} />
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tight">
                    {linkingStatus === 'linking' ? 'Linking in progress...' :
                     linkingStatus === 'success' ? 'SEO & GEO Toolkit · SYNCED' :
                     linkingStatus === 'error' ? 'Sync Failed' :
                     'SEO & GEO Toolkit · Waiting for handshake'}
                  </p>
                </div>
              </div>
            </div>
            <a
              href="https://chromewebstore.google.com/detail/search-toolbox"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-indigo-600 hover:text-indigo-700 transition-colors no-underline shrink-0 px-5 py-2.5 rounded-xl bg-indigo-50 border border-indigo-100"
            >
              Open <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
          {linkingError && (
            <p className="mt-4 text-[10px] text-red-400 font-medium bg-red-50 p-3 rounded-lg border border-red-100/50">
              Error details: {linkingError}
            </p>
          )}
        </div>

        {/* ── Pricing section (embedded) ── */}
        {!isPaid && (
          <div ref={pricingRef} className="mt-48 pt-24 border-t-2 border-dashed border-gray-100 -mx-4 md:-mx-8 lg:-mx-12 xl:-mx-32 bg-white/80 pb-64">
            <div className="px-6 mb-20 text-center max-w-2xl mx-auto">
              <h3 className="text-4xl font-black text-gray-900 uppercase tracking-tight">Level Up Your Toolkit</h3>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-[0.4em] mt-4 leading-relaxed">
                Save 27% with yearly billing. Unlimited generations, higher limits, and priority expert support.
              </p>
            </div>
            <div className="max-w-6xl mx-auto px-6">
              <PricingSection isEmbedded={true} />
            </div>
          </div>
        )}

        {/* Diagnostic info (opacity: 10% by default) */}
        <div className="mt-8 pt-8 border-t border-gray-100 opacity-10 hover:opacity-100 transition-all">
           <p className="text-[8px] font-mono text-gray-400 leading-relaxed">
             DEBUG: UID={user?.id} | Email={user?.email} | DB_Plan={profile.plan} | UP={debugInfo?.upFound ? 'Yes' : 'No'} | UE={debugInfo?.ueFound ? 'Yes' : 'No'} | Customer={profile.stripe_customer_id || 'None'} | Error={loadError || 'None'}
           </p>
        </div>
      </div>
    </div>
  )
}

// ── Page wrapper ──────────────────────────────────────────────────────────────
export function AccountPage() {
  const [searchParams] = useSearchParams()
  const auth = useAuth()
  
  if (!auth) {
    return <div className="p-20 text-center font-black uppercase text-gray-400">Loading Context...</div>
  }

  const { user, loading } = auth
  const extSession = searchParams.get('ext_session')

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F9FAFB] p-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-between mb-20">
            <Skeleton className="h-8 w-40" />
            <Skeleton className="h-4 w-20" />
          </div>
          <div className="flex gap-4 mb-12">
            <Skeleton className="w-12 h-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-48" />
              <Skeleton className="h-3 w-32" />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Skeleton className="h-64 rounded-[32px]" />
            <Skeleton className="h-64 rounded-[32px]" />
          </div>
          <Skeleton className="h-32 rounded-[32px]" />
        </div>
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
