import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/i18n/index'
import { Button } from '@/components/ui/button'
import { PixelHeart } from '@/components/PixelHeart'
import { Check, ArrowRight, Zap, Shield, Sparkles } from 'lucide-react'
import { SEO } from '@/components/SEO'

export function AiAgentPage() {
  const { lang } = useLanguage()
  const t = translations[lang].aiAgent.page

  return (
    <div className="pt-24 pb-16 min-h-screen bg-background">
      <SEO 
        title={t.meta.title}
        description={t.meta.description}
        faq={t.faq}
      />

      {/* Hero Section */}
      <section className="px-6 py-16 md:py-24 max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase mb-8"
          style={{ background: 'rgba(167,139,250,0.12)', border: '1px solid rgba(167,139,250,0.22)', color: '#a78bfa' }}>
          <Sparkles size={12} className="animate-pulse" />
          AI SEO AGENT V1.0
        </div>
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
          {t.hero.headline}
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
          {t.hero.subheadline}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="hero" size="lg" className="rounded-full px-10 h-14 text-lg">
            {t.hero.cta}
          </Button>
          <div className="text-xs text-muted-foreground flex items-center gap-2">
            <Shield size={14} className="text-emerald-400" />
            100% Private & Local
          </div>
        </div>

        {/* Floating Mockup Preview */}
        <div className="mt-20 relative group">
           <div className="absolute inset-0 bg-purple-500/20 blur-[120px] rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
           <div className="relative rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl overflow-hidden aspect-[16/9] flex items-center justify-center shadow-2xl">
              <div className="flex flex-col items-center gap-4 animate-pulse">
                 <PixelHeart size={80} />
                 <div className="text-sm font-mono text-purple-400">AGENT INITIALIZED_</div>
              </div>
           </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="px-6 py-24 bg-white/[0.01] border-y border-white/[0.05]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">{t.problem.title}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t.problem.body}
          </p>
        </div>
      </section>

      {/* Differentiation Grid */}
      <section className="px-6 py-24 max-w-6xl mx-auto">
        <h2 className="text-center text-3xl font-semibold mb-16">{t.differentiation.title}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {t.differentiation.items.map((item, i) => (
            <div key={i} className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-purple-500/50 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform">
                {i === 0 ? <Zap /> : i === 1 ? <Shield /> : <ArrowRight />}
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3 Modes Section */}
      <section className="px-6 py-24 bg-gradient-to-b from-transparent to-purple-500/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-3xl font-semibold mb-16">{t.modes.title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {t.modes.items.map((item, i) => (
              <div key={i} className={`p-8 rounded-3xl border transition-all ${i === 2 ? 'bg-purple-500/10 border-purple-500/30' : 'bg-black/20 border-white/5'}`}>
                <div className="text-[10px] font-bold text-purple-400 mb-2 uppercase tracking-widest">Level 0{i+1}</div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 py-24 max-w-4xl mx-auto">
        <h2 className="text-center text-3xl font-semibold mb-16">{t.howItWorks.title}</h2>
        <div className="space-y-12">
          {t.howItWorks.steps.map((step, i) => (
            <div key={i} className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center font-bold text-black border-4 border-background shadow-lg">
                {i + 1}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits & Use Cases */}
      <section className="px-6 py-24 border-t border-white/5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-24">
          <div>
            <h2 className="text-3xl font-semibold mb-12">{t.benefits.title}</h2>
            <ul className="space-y-6">
              {t.benefits.items.map((b, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <div className="mt-1 w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <div>
                    <span className="block font-bold mb-1">{b.title}</span>
                    <span className="text-muted-foreground text-sm">{b.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-12">{t.useCases.title}</h2>
            <div className="space-y-4">
              {t.useCases.items.map((uc, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                   <h4 className="font-bold mb-2 text-purple-400">{uc.title}</h4>
                   <p className="text-sm text-muted-foreground leading-relaxed">{uc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-6 py-24 max-w-3xl mx-auto">
        <h2 className="text-center text-3xl font-semibold mb-16">FAQ</h2>
        <div className="space-y-8">
          {t.faq.map((item, i) => (
            <div key={i} className="flex flex-col gap-3">
              <h3 className="text-lg font-bold">{item.q}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-24">
        <div className="max-w-5xl mx-auto rounded-[40px] p-12 md:p-24 bg-gradient-to-br from-purple-600 to-purple-800 text-center relative overflow-hidden">
           {/* Decorative circles */}
           <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
           <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/20 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />
           
           <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 relative z-10">{t.finalCta.title}</h2>
           <p className="text-xl text-white/80 mb-12 relative z-10 max-w-xl mx-auto">{t.finalCta.body}</p>
           <Button variant="ghost" size="lg" className="bg-white text-purple-700 hover:bg-white/90 rounded-full px-12 h-14 text-lg relative z-10 font-bold">
             {t.finalCta.cta}
           </Button>
        </div>
      </section>
    </div>
  )
}
