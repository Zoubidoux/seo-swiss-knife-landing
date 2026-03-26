import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/i18n/index'
import { Check } from 'lucide-react'
import { Mascot } from '@/components/Mascot'
import { useState } from 'react'

// STRIPE LINKS CONFIGURATION
const STRIPE_LINKS = {
  FREE: 'https://chromewebstore.google.com/detail/search-toolbox',
  PRO_MONTHLY: 'https://buy.stripe.com/test_6oU4gB8Pi3l5gNk6Fl0sU00',
  PRO_YEARLY: 'https://buy.stripe.com/test_4gMdRb0iM1cX40ybZF0sU01',
  UNLIMITED_MONTHLY: 'https://buy.stripe.com/test_00w7sN8Pi08TgNkd3J0sU02',
  UNLIMITED_YEARLY: 'https://buy.stripe.com/test_5kQbJ3fdG9Jtbt0bZF0sU03'
}

export function PricingSection({ isEmbedded = false }: { isEmbedded?: boolean }) {
  const { lang } = useLanguage()
  const t = translations[lang].pricing
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly')

  const planExpertise = [
    { color: 'offset-beginner', mascot: 'beginner' },
    { color: 'offset-intermediate', mascot: 'intermediate' },
    { color: 'offset-expert', mascot: 'expert' }
  ]

  // Pricing Logic matching the requirements
  const getPlanData = (index: number) => {
    if (index === 0) { // FREE
      return {
        price: "0",
        period: "forever",
        cta: t.plans[0].cta, // "Install for free"
        href: STRIPE_LINKS.FREE
      }
    }
    
    if (index === 1) { // PRO
      return billingCycle === 'monthly' 
        ? { price: "9", period: "month", cta: "Unlock Pro Monthly", href: STRIPE_LINKS.PRO_MONTHLY }
        : { price: "79", period: "year", cta: "Unlock Pro Yearly", href: STRIPE_LINKS.PRO_YEARLY }
    }

    if (index === 2) { // UNLIMITED
      return billingCycle === 'monthly'
        ? { price: "19", period: "month", cta: "Go Unlimited Monthly", href: STRIPE_LINKS.UNLIMITED_MONTHLY }
        : { price: "179", period: "year", cta: "Go Unlimited Yearly", href: STRIPE_LINKS.UNLIMITED_YEARLY }
    }

    return { price: "0", period: "month", cta: "Unlock", href: "#" }
  }

  if (isEmbedded) {
    return (
      <div className="grid lg:grid-cols-[1.2fr_3fr] gap-12 lg:gap-20 items-start">
        {/* Left Column: Intro & Controls (Sticky) */}
        <div className="lg:sticky lg:top-32 flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-lg border-2 border-black bg-white text-[9px] font-black uppercase tracking-[0.3em] text-black mb-8 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
             <span className="w-1.5 h-1.5 bg-expert rounded-full" />
             PRICING
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tighter text-black leading-[0.9] text-balance">
            {t.headline}
          </h2>
          
          <div className="flex flex-col items-center lg:items-start gap-4">
            <div className="flex items-center p-1 bg-bone border-2 border-black rounded-xl">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-2.5 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all ${
                  billingCycle === 'monthly' ? 'bg-black text-white' : 'text-black/40 hover:text-black'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-6 py-2.5 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all relative ${
                  billingCycle === 'yearly' ? 'bg-black text-white' : 'text-black/40 hover:text-black'
                }`}
              >
                Yearly
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Pricing Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12">
          {t.plans.map((plan, i) => {
            const dynamicData = getPlanData(i)
            return (
              <div 
                key={i} 
                className={`flex flex-col p-6 rounded-[22px] border-2 border-black bg-white relative group ${planExpertise[i].color}`}
              >
                <div className="mb-6 relative">
                  <div className="text-[8px] font-black uppercase tracking-[0.3em] text-black/30 mb-3">{plan.name}</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-black text-black tracking-tighter">${dynamicData.price}</span>
                  </div>
                </div>

                <ul className="flex-1 space-y-3 mb-8">
                  {plan.features.slice(0, 5).map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div className={`w-4 h-4 rounded flex items-center justify-center shrink-0 mt-0.5 border border-black/10 ${i === 2 ? 'bg-expert text-white' : 'bg-gray-100'}`}>
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span className="text-[9px] font-bold text-black/70 leading-tight uppercase tracking-widest">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a href={dynamicData.href} className="w-full h-11 rounded-lg flex items-center justify-center font-black text-[9px] uppercase tracking-[0.2em] bg-black text-white no-underline">
                  {dynamicData.cta}
                </a>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <section id="pricing" className="py-24 px-6 relative overflow-hidden bg-white grid-bg border-t-2 border-black">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] grain-bg" />
      
      <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-[1.2fr_3fr] gap-12 lg:gap-20 items-start">
        
        {/* Left Column: Intro & Controls (Sticky) */}
        <div className="lg:sticky lg:top-32 flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-lg border-2 border-black bg-white text-[9px] font-black uppercase tracking-[0.3em] text-black mb-8 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
             <span className="w-1.5 h-1.5 bg-expert rounded-full" />
             {translations[lang].nav.pricing}
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter text-black leading-[0.9] text-balance">
            {t.headline}
          </h2>
          
          {/* Billing Toggle */}
          <div className="flex flex-col items-center lg:items-start gap-4">
            <div className="flex items-center p-1 bg-bone border-2 border-black rounded-xl">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-2.5 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all ${
                  billingCycle === 'monthly' ? 'bg-black text-white' : 'text-black/40 hover:text-black'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-6 py-2.5 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all relative ${
                  billingCycle === 'yearly' ? 'bg-black text-white' : 'text-black/40 hover:text-black'
                }`}
              >
                Yearly
                {billingCycle === 'yearly' && (
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-beginner text-white text-[7px] font-black rounded border border-black whitespace-nowrap">
                    -27%
                  </div>
                )}
              </button>
            </div>
            <p className="text-[9px] font-black uppercase tracking-widest text-black/30">
               {billingCycle === 'monthly' ? 'Save 27% with yearly' : 'Annual billing enabled'}
            </p>
          </div>
        </div>

        {/* Right Column: Pricing Cards (High Density) */}
        <div className="grid md:grid-cols-3 gap-6">
          {t.plans.map((plan, i) => {
            const dynamicData = getPlanData(i)
            return (
              <div 
                key={i} 
                className={`flex flex-col p-6 rounded-[22px] border-2 border-black transition-all duration-500 editorial-card bg-white relative group ${planExpertise[i].color}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-lg font-black text-[7px] uppercase tracking-[0.2em] bg-black text-white z-20 border-2 border-white">
                    {plan.badge || 'POPULAR'}
                  </div>
                )}

                <div className="mb-6 relative">
                  <div className="absolute -top-4 -right-4 opacity-5 group-hover:opacity-15 transition-opacity">
                     <Mascot type={planExpertise[i].mascot as any} size={50} />
                  </div>
                  <div className="text-[8px] font-black uppercase tracking-[0.3em] text-black/30 mb-3">{plan.name}</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-black text-black tracking-tighter">${dynamicData.price}</span>
                    <span className="text-black/20 text-[9px] font-black uppercase tracking-widest">/{dynamicData.period}</span>
                  </div>
                </div>

                <ul className="flex-1 space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3 group/item">
                      <div className={`w-4.5 h-4.5 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5 border border-black/10 ${
                        i === 0 ? 'bg-beginner text-black' : 
                        i === 1 ? 'bg-intermediate text-black' : 
                        'bg-expert text-white'
                      }`}>
                        <Check className="w-2.5 h-2.5" strokeWidth={6} />
                      </div>
                      <span className="text-[9px] font-bold text-black/80 leading-tight uppercase tracking-widest group-hover/item:text-black transition-colors">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a 
                  href={dynamicData.href}
                  className={`w-full h-12 rounded-xl flex items-center justify-center font-black text-[9px] uppercase tracking-[0.2em] transition-all border-none no-underline ${
                    i === 0 ? 'bg-black text-white hover-offset-beginner' : 
                    i === 1 ? 'bg-black text-white hover-offset-intermediate' : 
                    'bg-black text-white hover-offset-expert shadow-[4px_4px_0_0_rgba(59,130,246,0.1)]'
                  }`}
                >
                  {dynamicData.cta}
                </a>
              </div>
            )
          })}
        </div>
      </div>

      <div className="mt-32 text-center">
        <div className="inline-block p-10 rounded-3xl border-2 border-black bg-white shadow-[12px_12px_0_0_rgba(0,0,0,0.05)] relative overflow-hidden group">
           <div className="absolute inset-0 grid-bg opacity-[0.05] group-hover:opacity-[0.1] transition-opacity" />
           <p className="text-[11px] font-black text-black uppercase tracking-[0.4em] relative z-10">
             {t.footer}
           </p>
        </div>
      </div>
    </section>
  )
}
