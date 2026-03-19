import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/i18n/index'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'

export function PricingSection() {
  const { lang } = useLanguage()
  const t = translations[lang].pricing

  return (
    <section id="pricing" className="py-24 px-6 relative overflow-hidden bg-background">
      {/* Background Hearts (optional, inspired by screenshot) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] z-0">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 text-purple-500">♥</div>
        <div className="absolute top-1/2 right-1/4 w-4 h-4 text-emerald-500">♥</div>
        <div className="absolute bottom-1/4 left-1/2 w-4 h-4 text-rose-500">♥</div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 text-center mb-16">
        <div className="text-[10px] font-black uppercase tracking-[0.2em] text-purple-500 mb-4">
          PRICING
        </div>
        <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-white px-4">
          {t.headline}
        </h2>
        <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
          {t.subheadline}
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {t.plans.map((plan, i) => (
          <div 
            key={i} 
            className={`flex flex-col p-8 rounded-[32px] border transition-all duration-500 hover:translate-y-[-4px] ${
              plan.popular 
                ? 'bg-[#0A0A1F] border-purple-500/50 shadow-[0_20px_50px_rgba(139,92,246,0.15)] ring-1 ring-purple-500/20' 
                : 'bg-[#050510] border-white/10'
            } relative overflow-hidden`}
          >
            {plan.badge && (
              <div className={`absolute top-0 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-b-2xl font-black text-[10px] uppercase tracking-widest ${
                plan.popular ? 'bg-purple-600 text-white' : 'bg-white/10 text-white/60'
              }`}>
                {plan.badge}
              </div>
            )}

            <div className="mt-4 mb-8">
              <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-4">{plan.name}</div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-5xl font-black text-white">${plan.price}</span>
                <span className="text-white/40 text-sm font-medium">/{plan.period}</span>
              </div>
              <div className="h-px w-full bg-white/5 mt-8" />
            </div>

            <ul className="flex-1 space-y-4 mb-10">
              {plan.features.map((feature, j) => (
                <li key={j} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" strokeWidth={3} />
                  <span className="text-sm text-white/70 leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>

            <Button 
              className={`w-full h-14 rounded-2xl font-black text-xs uppercase tracking-widest transition-all ${
                plan.popular 
                  ? 'bg-purple-600 hover:bg-purple-500 text-white shadow-[0_10px_20px_rgba(139,92,246,0.25)]' 
                  : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
              }`}
            >
              {plan.cta}
            </Button>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-[11px] font-medium text-white/30 uppercase tracking-widest">
          {t.footer}
        </p>
      </div>
    </section>
  )
}
