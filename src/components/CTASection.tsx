import { Button } from '@/components/ui/button'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/i18n/index'

export function CTASection() {
  const { lang } = useLanguage()
  const t = translations[lang].cta

  return (
    <section id="install" className="relative bg-background py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 100%, rgba(124,58,237,0.2) 0%, transparent 70%)' }} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
      <div className="relative max-w-3xl mx-auto text-center flex flex-col items-center gap-8">
        <div className="flex items-center gap-1 text-yellow-400 text-xl tracking-widest">★★★★★</div>
        <p className="text-foreground/70 text-base italic max-w-md">{t.quote}</p>
        <div className="flex gap-10 mt-4">
          {t.stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-1">
              <span className="text-3xl font-black bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #e8e8e9 0%, #a78bfa 100%)' }}>{s.value}</span>
              <span className="text-xs text-muted-foreground uppercase tracking-widest font-medium">{s.label}</span>
            </div>
          ))}
        </div>
        <h2
          className="text-4xl md:text-5xl font-semibold bg-clip-text text-transparent tracking-tight mt-4"
          style={{ backgroundImage: 'linear-gradient(180deg, #f0f0f2 0%, #a78bfa 100%)' }}
        >
          {t.headline.split('\n').map((line, i) => <span key={i}>{line}{i === 0 && <br />}</span>)}
        </h2>
        <Button variant="hero" className="px-10 py-4 text-base rounded-full mt-2">{t.cta}</Button>
        <p className="text-muted-foreground text-xs">{t.ctaSub}</p>
      </div>
    </section>
  )
}
