import { Button } from '@/components/ui/button'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/i18n/index'
import { ArrowRight } from 'lucide-react'

export function SolutionBanner() {
  const { lang } = useLanguage()
  const t = translations[lang].solution

  return (
    <section className="relative py-32 px-6 overflow-hidden bg-white grain-bg border-y border-black/5">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
      <div className="relative max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
        <p className="text-[10px] font-black tracking-[0.3em] uppercase text-primary">
           {t.eyebrow}
        </p>
        <h2 className="text-4xl md:text-7xl font-black text-black leading-[0.95] tracking-tighter text-balance">
          {t.headline}
        </h2>
        <p className="text-xl text-black/50 leading-relaxed max-w-2xl mx-auto font-medium text-balance">
          {t.sub}
        </p>
        <Button size="lg" className="cta-primary h-14 px-10 rounded-xl uppercase tracking-widest font-black text-xs">
           {t.cta}
           <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </section>
  )
}
