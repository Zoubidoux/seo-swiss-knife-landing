import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/i18n/index'
import { PixelHeart } from '@/components/PixelHeart'

// hue-rotate filters to tint the purple pixel heart
const COLORS = {
  purple: '',
  green:  'hue-rotate(150deg) saturate(1.3) brightness(1.1)',
  yellow: 'hue-rotate(60deg)  saturate(1.4) brightness(1.1)',
  red:    'hue-rotate(220deg) saturate(1.3) brightness(1.1)',
  cyan:   'hue-rotate(195deg) saturate(1.2) brightness(1.1)',
}

// r=orbit radius, size, speed(s), start(deg), opacity, blur, color key
const ORBITS = [
  { r: 130, size: 12, speed: 14, start:  10, opacity: 0.60, blur: 0,   color: 'purple' },
  { r: 185, size: 18, speed: 20, start:  80, opacity: 0.50, blur: 0,   color: 'cyan'   },
  { r: 240, size: 14, speed: 28, start: 155, opacity: 0.45, blur: 0.5, color: 'green'  },
  { r: 165, size: 10, speed: 17, start: 230, opacity: 0.55, blur: 0,   color: 'yellow' },
  { r: 300, size: 16, speed: 36, start: 300, opacity: 0.35, blur: 1,   color: 'red'    },
  { r: 210, size: 22, speed: 24, start:  50, opacity: 0.50, blur: 0,   color: 'purple' },
  { r: 340, size: 11, speed: 44, start: 190, opacity: 0.28, blur: 1.5, color: 'green'  },
  { r: 120, size:  9, speed: 11, start: 320, opacity: 0.40, blur: 0,   color: 'yellow' },
  { r: 270, size: 13, speed: 31, start: 110, opacity: 0.38, blur: 0.5, color: 'cyan'   },
]

const PLASMA_STYLE = `
@keyframes orbitHeart {
  from { transform: rotate(var(--orbit-start)) translateX(var(--orbit-r)) rotate(calc(-1 * var(--orbit-start))); }
  to   { transform: rotate(calc(var(--orbit-start) + 360deg)) translateX(var(--orbit-r)) rotate(calc(-1 * (var(--orbit-start) + 360deg))); }
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
        style={{ background: `${s.glow}14`, border: `1px solid ${s.glow}30`, animation: 'badgeFadeIn 0.4s ease' }}
      >
        <PixelHeart size={16} style={{ filter: `drop-shadow(0 0 5px ${s.glow})` }} />
        <span className="text-[9px] font-black min-w-[26px] text-center px-1 py-0.5 rounded" style={{ background: s.bg, color: '#000' }}>{s.code}</span>
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
      style={{ top: '44%', left: '50%', width: 0, height: 0, zIndex: 1 }}
    >
      {ORBITS.map((o, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            top: 0, left: 0,
            width: o.size, height: o.size,
            marginLeft: -o.size / 2,
            marginTop: -o.size / 2,
            opacity: o.opacity,
            filter: [COLORS[o.color as keyof typeof COLORS], o.blur ? `blur(${o.blur}px)` : ''].filter(Boolean).join(' ') || undefined,
            ['--orbit-r' as string]: `${o.r}px`,
            ['--orbit-start' as string]: `${o.start}deg`,
            animation: `orbitHeart ${o.speed}s linear infinite`,
            animationDelay: `${-(o.speed * o.start / 360).toFixed(2)}s`,
          }}
        >
          <img src="/icon128.png" width={o.size} height={o.size} style={{ imageRendering: 'pixelated', display: 'block' }} alt="" />
        </div>
      ))}
    </div>
  )
}

export function HeroSection() {
  const { lang } = useLanguage()
  const t = translations[lang].hero

  useEffect(() => {
    if (!document.getElementById('plasma-keyframes')) {
      const style = document.createElement('style')
      style.id = 'plasma-keyframes'
      style.textContent = PLASMA_STYLE
      document.head.appendChild(style)
    }
  }, [])

  return (
    <section
      className="relative overflow-hidden"
      style={{ height: '100dvh', minHeight: '600px', display: 'flex', flexDirection: 'column' }}
    >
      {/* ── Plasma ── */}
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
          borderRadius: '50%', animation: 'plasmaFloat1 9s ease-in-out infinite',
        }} />
        <div style={{
          position: 'absolute', top: '-8%', right: '12%',
          width: '320px', height: '320px',
          background: 'radial-gradient(circle, rgba(57,211,255,0.13) 0%, transparent 70%)',
          borderRadius: '50%', animation: 'plasmaFloat2 11s ease-in-out infinite',
        }} />
        <div style={{
          position: 'absolute', top: '6%', left: '54%',
          width: '200px', height: '200px',
          background: 'radial-gradient(circle, rgba(45,212,191,0.1) 0%, transparent 70%)',
          borderRadius: '50%', animation: 'plasmaFloat3 7s ease-in-out infinite',
        }} />
      </div>

      {/* ── Orbiting hearts ── */}
      <OrbitingHearts />

      {/* ── Content — justify-start, positioned in plasma zone ── */}
      <div className="relative flex flex-col items-center justify-start px-6 text-center gap-3" style={{ paddingTop: 'clamp(52px, 8vh, 90px)', zIndex: 2 }}>

        {/* Eyebrow */}
        <div
          className="px-4 py-1 rounded-full text-[11px] font-semibold tracking-widest uppercase"
          style={{ background: 'rgba(167,139,250,0.1)', border: '1px solid rgba(167,139,250,0.25)', color: '#a78bfa' }}
        >
          {t.eyebrow}
        </div>

        {/* H1 */}
        <h1
          className="flex items-center justify-center gap-3 font-bold tracking-tight"
          style={{ fontSize: 'clamp(38px, 7.5vw, 80px)', lineHeight: 1 }}
        >
          <PixelHeart size={48} style={{ filter: 'drop-shadow(0 0 28px rgba(167,139,250,0.85))' }} />
          <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(180deg, #f0f0f2 0%, #a78bfa 100%)' }}>
            {t.headline}
          </span>
        </h1>

        {/* Stat pills */}
        <div className="flex flex-wrap justify-center items-center gap-2">
          <span className="px-3 py-1 rounded-full text-sm font-black" style={{ background: 'rgba(167,139,250,0.12)', border: '1px solid rgba(167,139,250,0.25)', color: '#c4b5fd' }}>
            +20 {lang === 'fr' ? 'apps en 1' : 'apps in one'}
          </span>
          <span className="text-white/20">·</span>
          <span className="px-3 py-1 rounded-full text-sm font-black" style={{ background: 'rgba(57,211,255,0.09)', border: '1px solid rgba(57,211,255,0.2)', color: '#67e8f9' }}>
            +60 {lang === 'fr' ? 'fonctionnalités' : 'features'}
          </span>
          <span className="text-white/20">·</span>
          <span className="text-xs font-semibold" style={{ color: '#fbbf24' }}>
            {lang === 'fr' ? '✦ Dont beaucoup d\'inédites' : '✦ Many unique & customizable'}
          </span>
        </div>

        {/* Sub */}
        <p className="text-center max-w-md leading-6" style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.55)' }}>
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

      {/* ── Arrow at bottom ── */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 animate-bounce text-xl" style={{ color: 'rgba(255,255,255,0.18)', zIndex: 2 }}>↓</div>
    </section>
  )
}
