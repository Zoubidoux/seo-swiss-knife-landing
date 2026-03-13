import { Button } from '@/components/ui/button'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/i18n/index'

export function SolutionBanner() {
  const { lang } = useLanguage()
  const t = translations[lang].solution

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(124,58,237,0.15) 0%, transparent 70%)' }} />
      <div className="relative max-w-3xl mx-auto text-center">
        <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-5">{t.eyebrow}</p>
        <h2
          className="text-5xl md:text-6xl font-semibold bg-clip-text text-transparent mb-6 leading-tight tracking-tight"
          style={{ backgroundImage: 'linear-gradient(180deg, #f8f8f9 0%, #a78bfa 100%)' }}
        >
          {t.headline.split('\n').map((line, i) => <span key={i}>{line}{i === 0 && <br />}</span>)}
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto">{t.sub}</p>
        <Button variant="hero" className="px-8 py-4 text-base rounded-full">{t.cta}</Button>
      </div>
    </section>
  )
}
