import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/i18n/index'
import { PixelHeart } from '@/components/PixelHeart'

// Orbiting hearts: [orbitRadius, size, speed(s), startAngle(deg), opacity, blur]
const ORBITS = [
  { r: 220, size: 22, speed: 18, start:  15, opacity: 0.55, blur: 0.5 },
  { r: 170, size: 14, speed: 26, start: 120, opacity: 0.40, blur: 0   },
  { r: 290, size: 16, speed: 32, start: 200, opacity: 0.35, blur: 1   },
  { r: 130, size: 10, speed: 14, start: 270, opacity: 0.50, blur: 0   },
  { r: 340, size: 12, speed: 40, start:  80, opacity: 0.28, blur: 1.5 },
  { r: 200, size: 18, speed: 22, start: 310, opacity: 0.45, blur: 0   },
]

const PLASMA_STYLE = `
@keyframes orbitHeart {
  from { transform: rotate(var(--start)) translateX(var(--r)) rotate(calc(-1 * var(--start))); }
  to   { transform: rotate(calc(var(--start) + 360deg)) translateX(var(--r)) rotate(calc(-1 * (var(--start) + 360deg))); }
}
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

function OrbitingHearts() {
  return (
    <div
      className="absolute pointer-events-none"
      aria-hidden="true"
      style={{ top: '50%', left: '50%', width: 0, height: 0 }}
    >
      {ORBITS.map((o, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            top: 0, left: 0,
            width: o.size,
            height: o.size,
            marginLeft: -o.size / 2,
            marginTop: -o.size / 2,
            opacity: o.opacity,
            filter: o.blur ? `blur(${o.blur}px)` : undefined,
            // CSS custom properties for the orbit animation
            ['--r' as string]: `${o.r}px`,
            ['--start' as string]: `${o.start}deg`,
            animation: `orbitHeart ${o.speed}s linear infinite`,
            animationDelay: `${-o.speed * (o.start / 360)}s`,
          }}
        >
          <img
            src="/icon128.png"
            width={o.size}
            height={o.size}
            style={{ imageRendering: 'pixelated', display: 'block' }}
            alt=""
          />
        </div>
      ))}
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
      style={{ height: '100dvh', minHeight: '600px', display: 'flex', flexDirection: 'column' }}
    >
      {/* ── Plasma Background ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div style={{
          position: 'absolute', top: '-15%', left: '50%', transform: 'translateX(-50%)',
          width: '900px', height: '500px',
          background: 'radial-gradient(ellipse, rgba(124,58,237,0.30) 0%, transparent 65%)',
        }} />
        <div style={{
          position: 'absolute', top: '0%', left: '18%',
          width: '400px', height: '400px',
          background: 'radial-gradient(circle, rgba(167,139,250,0.17) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'plasmaFloat1 9s ease-in-out infinite',
        }} />
        <div style={{
          position: 'absolute', top: '-8%', right: '12%',
          width: '320px', height: '320px',
          background: 'radial-gradient(circle, rgba(57,211,255,0.13) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'plasmaFloat2 11s ease-in-out infinite',
        }} />
        <div style={{
          position: 'absolute', top: '6%', left: '54%',
          width: '200px', height: '200px',
          background: 'radial-gradient(circle, rgba(45,212,191,0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'plasmaFloat3 7s ease-in-out infinite',
        }} />
      </div>

      {/* ── Cœurs en orbite ── */}
      <OrbitingHearts />

      {/* ── Hero content — centré dans le viewport ── */}
      <div className="relative flex flex-col items-center justify-center flex-1 px-6 text-center gap-4">

        {/* Eyebrow */}
        <div
          className="px-4 py-1 rounded-full text-[11px] font-semibold tracking-widest uppercase"
          style={{
            background: 'rgba(167,139,250,0.1)',
            border: '1px solid rgba(167,139,250,0.25)',
            color: '#a78bfa',
          }}
        >
          {t.eyebrow}
        </div>

        {/* H1 */}
        <h1
          className="flex items-center justify-center gap-3 font-bold tracking-tight"
          style={{ fontSize: 'clamp(40px, 8vw, 82px)', lineHeight: 1 }}
        >
          <PixelHeart size={50} style={{ filter: 'drop-shadow(0 0 28px rgba(167,139,250,0.85))' }} />
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(175deg, #f0f0f2 20%, #a78bfa 100%)' }}
          >
            {t.headline}
          </span>
        </h1>

        {/* Stat pills */}
        <div className="flex flex-wrap justify-center items-center gap-2">
          <span
            className="px-3 py-1 rounded-full text-base font-black"
            style={{ background: 'rgba(167,139,250,0.12)', border: '1px solid rgba(167,139,250,0.25)', color: '#c4b5fd' }}
          >
            +20 {lang === 'fr' ? 'apps en 1' : 'apps in one'}
          </span>
          <span className="text-white/20">·</span>
          <span
            className="px-3 py-1 rounded-full text-base font-black"
            style={{ background: 'rgba(57,211,255,0.09)', border: '1px solid rgba(57,211,255,0.2)', color: '#67e8f9' }}
          >
            +60 {lang === 'fr' ? 'fonctionnalités' : 'features'}
          </span>
          <span className="text-white/20">·</span>
          <span className="text-sm font-semibold" style={{ color: '#fbbf24' }}>
            {lang === 'fr' ? '✦ Dont beaucoup d\'inédites' : '✦ Many unique & customizable'}
          </span>
        </div>

        {/* Sub */}
        <p
          className="text-center max-w-md leading-6"
          style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.55)' }}
        >
          {t.sub}
        </p>

        {/* Toolbar badge */}
        <ToolbarBadge />

        {/* CTA */}
        <div className="flex flex-col items-center gap-1.5">
          <Button variant="hero" className="px-9 py-3 text-base rounded-full">
            {t.cta}
          </Button>
          <span className="text-[11px]" style={{ color: 'rgba(255,255,255,0.3)' }}>{t.ctaSub}</span>
        </div>
      </div>

      {/* ── Flèche juste sous la ligne de flottaison ── */}
      <div className="relative flex justify-center pb-5" style={{ color: 'rgba(255,255,255,0.18)' }}>
        <div className="animate-bounce text-xl">↓</div>
      </div>
    </section>
  )
}

// tiny helper — just maps to a fixed size (avoids prop spreading issues)
function clamp(_min: number, preferred: number) {
  return preferred
}
