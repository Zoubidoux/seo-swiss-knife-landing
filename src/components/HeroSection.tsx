import { Button } from '@/components/ui/button'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/i18n/index'

export function HeroSection() {
  const { lang } = useLanguage()
  const t = translations[lang].hero

  return (
    <section className="bg-background relative overflow-hidden pt-0">
      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(124,58,237,0.18) 0%, transparent 70%)' }}
      />

      {/* Centered hero content */}
      <div className="flex flex-col items-center px-6 pt-20 pb-10">
        {/* Eyebrow */}
        <div
          className="mb-6 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
          style={{ background: 'rgba(167,139,250,0.1)', border: '1px solid rgba(167,139,250,0.25)', color: '#a78bfa' }}
        >
          {t.eyebrow}
        </div>

        {/* H1 — extension name */}
        <h1
          className="text-center font-bold tracking-tight bg-clip-text text-transparent leading-tight"
          style={{
            fontSize: 'clamp(48px, 10vw, 96px)',
            backgroundImage: 'linear-gradient(180deg, #f0f0f2 0%, #a78bfa 100%)',
          }}
        >
          {t.headline}
        </h1>

        {/* Sub headline */}
        <p className="text-hero-sub text-center text-lg leading-8 max-w-xl mt-6 opacity-80">
          {t.sub}
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-col items-center gap-3">
          <Button variant="hero" className="px-8 py-4 text-base rounded-full">
            {t.cta}
          </Button>
          <span className="text-muted-foreground text-xs">{t.ctaSub}</span>
        </div>

        {/* Arrow down to content */}
        <div className="mt-16 mb-4 text-foreground/20 text-2xl animate-bounce">↓</div>
      </div>
    </section>
  )
}
