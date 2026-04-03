import { useEffect, useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { useAuth } from '@/contexts/AuthContext'
import { AuthForm } from '@/components/AuthForm'
import { SEO } from '@/components/SEO'
import { ArrowRight, Loader2, Zap, ShieldCheck, Chrome } from 'lucide-react'

// STRIPE PAYMENT LINKS — must match PricingSection.tsx
// To switch to production: replace test_ URLs with live buy.stripe.com URLs
const PLAN_DATA: Record<string, { name: string; price: string; period: string; stripeUrl: string }> = {
  'pro-monthly': {
    name: 'Pro Monthly',
    price: '9',
    period: 'month',
    stripeUrl: 'https://buy.stripe.com/test_6oU4gB8Pi3l5gNk6Fl0sU00'
  },
  'pro-yearly': {
    name: 'Pro Yearly',
    price: '79',
    period: 'year',
    stripeUrl: 'https://buy.stripe.com/test_4gMdRb0iM1cX40ybZF0sU01'
  },
  'unlimited-monthly': {
    name: 'Unlimited Monthly',
    price: '19',
    period: 'month',
    stripeUrl: 'https://buy.stripe.com/test_00w7sN8Pi08TgNkd3J0sU02'
  },
  'unlimited-yearly': {
    name: 'Unlimited Yearly',
    price: '179',
    period: 'year',
    stripeUrl: 'https://buy.stripe.com/test_5kQbJ3fdG9Jtbt0bZF0sU03'
  }
}

export function CheckoutContinuePage() {
  const [searchParams] = useSearchParams()
  const { user } = useAuth()
  const [isRedirecting, setIsRedirecting] = useState(false)
  const [error] = useState<string | null>(null)

  const planKey = searchParams.get('plan') || ''
  const billing = searchParams.get('billing') || 'monthly'
  const fullKey = `${planKey}-${billing}`
  const plan = PLAN_DATA[fullKey] || PLAN_DATA['pro-monthly']

  // Auto-redirect to Stripe if user is already logged in
  useEffect(() => {
    if (user && !isRedirecting) {
      handleDirectToStripe()
    }
  }, [user])

  const handleDirectToStripe = () => {
    setIsRedirecting(true)
    // Direct redirect to Stripe payment link with user context.
    // client_reference_id lets the webhook attribute the subscription to this user.
    const url = new URL(plan.stripeUrl)
    url.searchParams.set('client_reference_id', user?.id ?? '')
    url.searchParams.set('prefilled_email', user?.email ?? '')
    window.location.href = url.toString()
  }

  if (isRedirecting) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-indigo-600 animate-spin mx-auto mb-6" />
          <h2 className="text-xl font-black uppercase tracking-tight mb-2">Preparing your secure checkout</h2>
          <p className="text-gray-400 text-sm font-medium uppercase tracking-widest">Redirecting you to Stripe...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white pt-20 pb-32">
      <SEO title="Continue to Checkout — Search Toolbox" description="Sign in to link your subscription and continue to checkout." />
      
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_400px] gap-12 lg:gap-24 items-start pt-12">
          
          {/* Left Side: Context & Reassurance */}
          <div className="flex flex-col justify-center h-full">
            <Link to="/pricing" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-indigo-600 mb-12 no-underline transition-colors">
              <span className="rotate-180 inline-block"><ArrowRight className="w-3 h-3" /></span>
              Back to Pricing
            </Link>

            <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter leading-[0.9] mb-8 text-balance">
              Create your account <br />
              to <span className="text-indigo-600">continue</span>.
            </h1>
            
            <p className="text-lg text-gray-500 font-medium leading-relaxed max-w-xl mb-12">
              Your subscription needs to be safely linked to an account so you can access <strong className="text-gray-900">Pro features</strong> on both the website and the Chrome extension.
            </p>

            {/* Feature Highlights */}
            <div className="grid sm:grid-cols-2 gap-8 mb-16">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center shrink-0 border border-indigo-100">
                  <ShieldCheck className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-tight mb-1">Secure & Private</p>
                  <p className="text-[11px] text-gray-400 font-medium leading-tight">Your data is encrypted and secure with Supabase Auth.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center shrink-0 border border-amber-100">
                  <Chrome className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-tight mb-1">Cross-Platform Sync</p>
                  <p className="text-[11px] text-gray-400 font-medium leading-tight">Install once, use everywhere on your Chrome browsers.</p>
                </div>
              </div>
            </div>

            {/* Summary Card */}
            <div className="p-8 rounded-[32px] bg-gray-50 border border-gray-100 flex items-center justify-between group overflow-hidden relative">
              <div className="absolute right-0 top-0 opacity-[0.03] -rotate-12 translate-x-1/4 -translate-y-1/4">
                 <Zap size={200} fill="currentColor" className="text-indigo-600" />
              </div>
              <div className="relative z-10">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-300 mb-2">Selected Plan</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-gray-900">{plan.name}</span>
                  <span className="text-gray-400 text-sm font-bold uppercase tracking-widest">/ {plan.period}</span>
                </div>
              </div>
              <div className="text-right relative z-10">
                <p className="text-3xl font-black text-indigo-600 tracking-tighter">${plan.price}</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-indigo-600/30">Auto-Renews</p>
              </div>
            </div>
          </div>

          {/* Right Side: Auth Form */}
          <div className="relative">
            {error && (
              <div className="absolute -top-16 left-0 right-0 p-4 bg-red-50 border border-red-100 rounded-xl text-xs font-bold text-red-500 text-center animate-in fade-in slide-in-from-top-2">
                {error}
              </div>
            )}
            <div className="bg-white rounded-[32px] shadow-[0_30px_60px_rgba(0,0,0,0.08)] border border-gray-100/50 p-2">
              <AuthForm 
                redirectPath={`${window.location.pathname}${window.location.search}`}
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
