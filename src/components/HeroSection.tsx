import { Button } from '@/components/ui/button'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/i18n/index'

// Toolbar badge callout — always-on indicator
function ToolbarBadge() {
  return (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
      <span className="text-white/40 text-[10px]">Chrome toolbar</span>
      <div className="flex items-center gap-1 px-1.5 py-0.5 rounded" style={{ background: 'rgba(167,139,250,0.15)', border: '1px solid rgba(167,139,250,0.25)' }}>
        <img src="/src/assets/icon.png" alt="" className="w-3.5 h-3.5" style={{ imageRendering: 'pixelated' }} />
        <span className="text-[9px] font-black" style={{ color: '#a78bfa' }}>7</span>
      </div>
      <span className="text-white/35 text-[10px]">issues detected — without opening</span>
    </div>
  )
}

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

        {/* H1 — extension name with logo */}
        <div className="flex items-center justify-center gap-4 mb-2">
          <img
            src="/src/assets/icon.png"
            alt="SEO Swiss Knife icon"
            className="flex-shrink-0"
            style={{ width: 52, height: 52, imageRendering: 'pixelated', filter: 'drop-shadow(0 0 24px rgba(167,139,250,0.6))' }}
          />
          <h1
            className="font-bold tracking-tight bg-clip-text text-transparent leading-tight"
            style={{
              fontSize: 'clamp(42px, 9vw, 86px)',
              backgroundImage: 'linear-gradient(180deg, #f0f0f2 0%, #a78bfa 100%)',
            }}
          >
            {t.headline}
          </h1>
        </div>

        {/* Sub headline */}
        <p className="text-hero-sub text-center text-lg leading-8 max-w-xl mt-4 opacity-80">
          {t.sub}
        </p>

        {/* Toolbar badge callout */}
        <div className="mt-6">
          <ToolbarBadge />
        </div>

        {/* CTA */}
        <div className="mt-8 flex flex-col items-center gap-3">
          <Button variant="hero" className="px-8 py-4 text-base rounded-full">
            {t.cta}
          </Button>
          <span className="text-muted-foreground text-xs">{t.ctaSub}</span>
        </div>

        {/* Arrow down to content */}
        <div className="mt-14 mb-4 text-foreground/20 text-2xl animate-bounce">↓</div>
      </div>
    </section>
  )
}
