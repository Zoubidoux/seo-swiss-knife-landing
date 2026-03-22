import { Button } from '@/components/ui/button'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/i18n/index'
import { Mascot } from '@/components/Mascot'

export function CTASection() {
  const { lang} = useLanguage()
  const t = translations[lang].cta

  return (
    <section id="install" className="relative bg-white py-32 px-6 overflow-hidden grid-bg border-t-2 border-black">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] grain-bg" />
      
      {/* Background technical markers */}
      <div className="absolute top-12 left-12 technical-marker after:content-['+'] after:opacity-20" />
      <div className="absolute bottom-12 right-12 technical-marker after:content-['+'] after:opacity-20" />

      <div className="relative max-w-4xl mx-auto text-center flex flex-col items-center gap-12">
        <div className="flex flex-wrap items-center justify-center gap-16">
          {t.stats.map((s, i) => (
            <div key={s.label} className="flex flex-col items-center gap-2 group transition-all">
              <span className={`text-4xl md:text-6xl font-black tracking-tighter transition-colors ${i === 2 ? 'text-expert' : 'text-black opacity-40 group-hover:opacity-100'}`}>
                {s.value}
              </span>
              <span className="text-[10px] text-black/20 uppercase tracking-[0.3em] font-black group-hover:text-black/40 transition-colors">
                {s.label}
              </span>
            </div>
          ))}
        </div>

        <h2 className="text-4xl md:text-7xl font-black text-black tracking-tighter leading-[0.95] text-balance max-w-3xl">
          {t.headline}
        </h2>

        <div className="flex flex-col items-center gap-6">
          <Button size="lg" className="px-16 h-20 text-xs uppercase tracking-[0.25em] font-black rounded-xl bg-black text-white border-none hover-offset-expert transition-all">
             {t.cta}
          </Button>
          <p className="text-black/30 text-[10px] font-black uppercase tracking-[0.35em]">{t.ctaSub}</p>
        </div>
      </div>

      {/* Mascot Decoration */}
      <div className="absolute -bottom-10 -left-10 opacity-10">
         <Mascot type="beginner" size={200} />
      </div>
      <div className="absolute top-10 -right-10 opacity-10">
         <Mascot type="expert" size={240} className="rotate-[15deg]" />
      </div>
    </section>
  )
}
