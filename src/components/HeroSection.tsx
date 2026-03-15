import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/i18n/index'
import { PixelHeart } from '@/components/PixelHeart'

const PLASMA_STYLE = `
@keyframes plasmaFloat1 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33%       { transform: translate(-40px, 30px) scale(1.08); }
  66%       { transform: translate(30px, -20px) scale(0.95); }
}
@keyframes plasmaFloat2 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  40%       { transform: translate(50px, 20px) scale(1.1); }
  70%       { transform: translate(-20px, 40px) scale(0.92); }
}
@keyframes plasmaFloat3 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50%       { transform: translate(-30px, -35px) scale(1.15); }
}
@keyframes badgeFadeIn {
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
}
`

const BADGE_STATES = [
  { code: '200', glow: '#00b894', bg: '#00b894', label: '200 OK' },
  { code: '301', glow: '#74b9ff', bg: '#e0922a', label: '301 Redirect' },
  { code: '404', glow: '#ff6b6b', bg: '#ff6b6b', label: '404 Not Found' },
]

function ToolbarBadge() {
  const [idx, setIdx] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % BADGE_STATES.length), 1900)
    return () => clearInterval(t)
  }, [])
  const s = BADGE_STATES[idx]
  return (
    <div
      className="flex items-center gap-3 px-4 py-2 rounded-full"
      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)' }}
    >
      <span className="text-white/30 text-[10px] tracking-wide">Chrome toolbar</span>
      <div
        key={s.code}
        className="flex items-center gap-1.5 px-2 py-1 rounded-md"
        style={{
          background: `${s.glow}14`,
          border: `1px solid ${s.glow}30`,
          animation: 'badgeFadeIn 0.4s ease',
        }}
      >
        <PixelHeart size={16} style={{ filter: `drop-shadow(0 0 5px ${s.glow})` }} />
        <span
          className="text-[9px] font-black min-w-[26px] text-center px-1 py-0.5 rounded"
          style={{ background: s.bg, color: '#000' }}
        >{s.code}</span>
      </div>
      <span className="text-white/25 text-[10px]">{s.label} — without opening</span>
    </div>
  )
}

export function HeroSection() {
  const { lang } = useLanguage()
  const t = translations[lang].hero

  useEffect(() => {
    const style = document.createElement('style')
    style.id = 'plasma-keyframes'
    if (!document.getElementById('plasma-keyframes')) {
      style.textContent = PLASMA_STYLE
      document.head.appendChild(style)
    }
    return () => {}
  }, [])

  return (
    <section
      className="relative overflow-hidden"
      style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      {/* ── Plasma Background ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Main purple core */}
        <div style={{
          position: 'absolute', top: '-10%', left: '50%', transform: 'translateX(-50%)',
          width: '900px', height: '480px',
          background: 'radial-gradient(ellipse, rgba(124,58,237,0.28) 0%, transparent 68%)',
        }} />
        {/* Blob 1 — purple */}
        <div style={{
          position: 'absolute', top: '2%', left: '20%',
          width: '420px', height: '420px',
          background: 'radial-gradient(circle, rgba(167,139,250,0.16) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'plasmaFloat1 9s ease-in-out infinite',
        }} />
        {/* Blob 2 — cyan */}
        <div style={{
          position: 'absolute', top: '-5%', right: '15%',
          width: '340px', height: '340px',
          background: 'radial-gradient(circle, rgba(57,211,255,0.13) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'plasmaFloat2 11s ease-in-out infinite',
        }} />
        {/* Blob 3 — teal accent */}
        <div style={{
          position: 'absolute', top: '8%', left: '55%',
          width: '220px', height: '220px',
          background: 'radial-gradient(circle, rgba(45,212,191,0.09) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'plasmaFloat3 7s ease-in-out infinite',
        }} />
      </div>

      {/* ── Hero content (above fold) ── */}
      <div className="relative flex flex-col items-center justify-center flex-1 px-6 pt-24 pb-8 text-center">

        {/* Eyebrow badge */}
        <div
          className="mb-6 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
          style={{
            background: 'rgba(167,139,250,0.1)',
            border: '1px solid rgba(167,139,250,0.25)',
            color: '#a78bfa',
          }}
        >
          {t.eyebrow}
        </div>

        {/* H1 — name + icon */}
        <h1
          className="flex items-center justify-center gap-4 font-bold tracking-tight mb-5"
          style={{
            fontSize: 'clamp(44px, 9vw, 90px)',
            lineHeight: 1,
          }}
        >
          <PixelHeart
            size={clamp(44, 56)}
            style={{ filter: 'drop-shadow(0 0 30px rgba(167,139,250,0.8))' }}
          />
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(175deg, #f0f0f2 20%, #a78bfa 100%)' }}
          >
            {t.headline}
          </span>
        </h1>

        {/* Stat pills */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-6">
          <span
            className="px-4 py-1.5 rounded-full text-xl font-black"
            style={{ background: 'rgba(167,139,250,0.12)', border: '1px solid rgba(167,139,250,0.25)', color: '#c4b5fd' }}
          >
            +20 {lang === 'fr' ? 'apps en 1' : 'apps in one'}
          </span>
          <span className="text-white/20">·</span>
          <span
            className="px-4 py-1.5 rounded-full text-xl font-black"
            style={{ background: 'rgba(57,211,255,0.09)', border: '1px solid rgba(57,211,255,0.2)', color: '#67e8f9' }}
          >
            +60 {lang === 'fr' ? 'fonctionnalités' : 'features'}
          </span>
          <span className="text-white/20">·</span>
          <span className="text-sm font-semibold" style={{ color: '#fbbf24' }}>
            {lang === 'fr' ? '✦ Dont beaucoup d\'inédites' : '✦ Many unique & customizable'}
          </span>
        </div>

        {/* Sub — problem/solution, keyword-rich */}
        <p
          className="text-center max-w-lg mb-4 leading-7"
          style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.6)' }}
        >
          {t.sub}
        </p>

        {/* Toolbar demo */}
        <div className="mb-8">
          <ToolbarBadge />
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-2">
          <Button variant="hero" className="px-9 py-4 text-base rounded-full">
            {t.cta}
          </Button>
          <span className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>{t.ctaSub}</span>
        </div>
      </div>

      {/* ── Arrow at fold line ── */}
      <div
        className="relative flex justify-center pb-8"
        style={{ color: 'rgba(255,255,255,0.18)' }}
      >
        <div className="animate-bounce text-2xl">↓</div>
      </div>
    </section>
  )
}

// tiny helper — just maps to a fixed size (avoids prop spreading issues)
function clamp(_min: number, preferred: number) {
  return preferred
}
