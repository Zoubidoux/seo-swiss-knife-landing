import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/i18n/index'

// Cycles through HTTP status states — colors from background.js
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
      {/* Single extension badge — icon + code side by side, no overlap */}
      <div
        key={s.code}
        className="flex items-center gap-1.5 px-2 py-1 rounded-md transition-all duration-500"
        style={{ background: `${s.iconGlow}12`, border: `1px solid ${s.iconGlow}30` }}
      >
        <img src="/src/assets/icon.png" alt="" className="w-4 h-4 flex-shrink-0" style={{ imageRendering: 'pixelated', filter: `drop-shadow(0 0 5px ${s.iconGlow})` }} />
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
