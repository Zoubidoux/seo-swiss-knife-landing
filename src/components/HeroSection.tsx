import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/i18n/index'
import { PixelHeart } from '@/components/PixelHeart'

const BADGE_STATES = [
  { code: '200', iconGlow: '#00b894', badgeBg: '#00b894', label: '200 OK' },
  { code: '301', iconGlow: '#74b9ff', badgeBg: '#e0922a', label: '301 Redirect' },
  { code: '404', iconGlow: '#ff6b6b', badgeBg: '#ff6b6b', label: '404 Not Found' },
]

function ToolbarBadge() {
  const [idx, setIdx] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % BADGE_STATES.length), 1800)
    return () => clearInterval(t)
  }, [])
  const s = BADGE_STATES[idx]

  return (
    <div className="flex items-center gap-3 px-4 py-2 rounded-full" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)' }}>
      <span className="text-white/35 text-[10px] tracking-wide">Chrome toolbar</span>
      <div
        key={s.code}
        className="flex items-center gap-1.5 px-2 py-1 rounded-md transition-all duration-500"
        style={{ background: `${s.iconGlow}12`, border: `1px solid ${s.iconGlow}30` }}
      >
        <PixelHeart size={16} style={{ filter: `drop-shadow(0 0 5px ${s.iconGlow})` }} />
        <span className="text-[9px] font-black min-w-[26px] text-center px-1 py-0.5 rounded" style={{ background: s.badgeBg, color: '#000' }}>{s.code}</span>
      </div>
      <span className="text-white/30 text-[10px]">{s.label} — without opening</span>
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
        style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 0%, rgba(124,58,237,0.22) 0%, transparent 70%)' }}
      />

      <div className="flex flex-col items-center px-6 pt-20 pb-10">

        {/* "Last extension" tagline — bold, top */}
        <div className="mb-5 flex flex-col items-center gap-2">
          <div
            className="px-5 py-2 rounded-full text-sm font-black tracking-wide uppercase"
            style={{
              background: 'linear-gradient(90deg, rgba(167,139,250,0.18) 0%, rgba(57,211,255,0.12) 100%)',
              border: '1px solid rgba(167,139,250,0.35)',
              color: '#c4b5fd',
              letterSpacing: '0.06em',
            }}
          >
            {lang === 'fr' ? '✦ La dernière extension SEO que vous installerez jamais ✦' : '✦ The last SEO extension you\'ll ever install ✦'}
          </div>
          <span className="text-[11px] text-white/35 tracking-widest uppercase">{t.eyebrow}</span>
        </div>

        {/* H1 — extension name with logo */}
        <div className="flex items-center justify-center gap-4 mb-4">
          <PixelHeart size={56} style={{ filter: 'drop-shadow(0 0 28px rgba(167,139,250,0.7))' }} />
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

        {/* Big stat line — immediately under title */}
        <div
          className="flex flex-wrap justify-center items-center gap-3 mb-5 px-4 py-3 rounded-2xl"
          style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          <span
            className="text-2xl md:text-3xl font-black tracking-tight"
            style={{ background: 'linear-gradient(90deg, #a78bfa, #39d3ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
          >
            +20 {lang === 'fr' ? 'apps en une' : 'apps in one'}
          </span>
          <span className="text-white/20 text-2xl font-thin">·</span>
          <span
            className="text-2xl md:text-3xl font-black tracking-tight"
            style={{ background: 'linear-gradient(90deg, #39d3ff, #2dd4bf)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
          >
            +60 {lang === 'fr' ? 'fonctionnalités' : 'features'}
          </span>
          <span className="text-white/20 text-2xl font-thin">·</span>
          <span className="text-sm font-semibold" style={{ color: '#facc15' }}>
            {lang === 'fr' ? '🔥 Dont beaucoup d\'inédites & personnalisables' : '🔥 Many unique & customizable'}
          </span>
        </div>

        {/* Sub headline */}
        <p className="text-hero-sub text-center text-lg leading-8 max-w-xl opacity-75 mb-2">
          {t.sub}
        </p>

        {/* "Last extension" repeated as a strong callout */}
        <p
          className="text-center font-bold text-base mb-6 mt-1"
          style={{ color: '#c4b5fd' }}
        >
          {lang === 'fr'
            ? '→ La dernière extension SEO que vous installerez jamais.'
            : '→ The last SEO extension you\'ll ever install.'}
        </p>

        {/* Toolbar badge callout */}
        <div className="mb-8">
          <ToolbarBadge />
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-3">
          <Button variant="hero" className="px-8 py-4 text-base rounded-full">
            {t.cta}
          </Button>
          <span className="text-muted-foreground text-xs">{t.ctaSub}</span>
        </div>

        {/* Arrow down */}
        <div className="mt-14 mb-4 text-foreground/20 text-2xl animate-bounce">↓</div>
      </div>
    </section>
  )
}
