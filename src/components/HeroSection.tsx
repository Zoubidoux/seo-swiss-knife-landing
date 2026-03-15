import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/i18n/index'
import { PixelHeart } from '@/components/PixelHeart'

// hue-rotate pour teinter le cœur violet en d'autres couleurs de marque
const TINTS: Record<string, string> = {
  purple: '',
  red:    'hue-rotate(220deg) saturate(1.4)',
  green:  'hue-rotate(145deg) saturate(1.3)',
  yellow: 'hue-rotate(58deg)  saturate(1.5) brightness(1.1)',
}

// Orbites — variété de couleurs, tailles généreuses
const ORBITS = [
  { r: 115, size: 14, speed: 13, start:  20, opacity: 0.55, tint: 'purple' },
  { r: 170, size: 20, speed: 21, start: 110, opacity: 0.50, tint: 'yellow' },
  { r: 240, size: 16, speed: 31, start: 195, opacity: 0.45, tint: 'green'  },
  { r: 150, size: 12, speed: 16, start: 285, opacity: 0.52, tint: 'red'    },
  { r: 290, size: 18, speed: 42, start:  65, opacity: 0.38, tint: 'purple' },
  { r: 200, size: 24, speed: 25, start: 340, opacity: 0.48, tint: 'yellow' },
  { r: 320, size: 13, speed: 50, start: 150, opacity: 0.30, tint: 'green'  },
  { r: 180, size: 16, speed: 19, start: 240, opacity: 0.42, tint: 'red'    },
  { r: 260, size: 10, speed: 37, start:  80, opacity: 0.35, tint: 'purple' },
]

const HERO_STYLE = `
@keyframes orbitHeart {
  from { transform: rotate(var(--os)) translateX(var(--or)) rotate(calc(-1 * var(--os))); }
  to   { transform: rotate(calc(var(--os) + 360deg)) translateX(var(--or)) rotate(calc(-360deg - var(--os))); }
}
@keyframes plasmaA {
  0%,100% { transform: translate(0,0) scale(1); }
  40%      { transform: translate(-50px, 35px) scale(1.1); }
  70%      { transform: translate(40px, -25px) scale(0.93); }
}
@keyframes plasmaB {
  0%,100% { transform: translate(0,0) scale(1); }
  35%      { transform: translate(55px, 25px) scale(1.08); }
  65%      { transform: translate(-30px, 45px) scale(0.95); }
}
@keyframes plasmaC {
  0%,100% { transform: translate(0,0) scale(1); }
  50%      { transform: translate(-35px,-40px) scale(1.12); }
}
@keyframes badgeIn {
  from { opacity: 0; transform: translateY(5px); }
  to   { opacity: 1; transform: translateY(0); }
}
`

const BADGE_STATES = [
  { code: '200', glow: '#00c48c', bg: '#00c48c', label: '200 OK' },
  { code: '301', glow: '#7eb8ff', bg: '#e0922a', label: '301 Redirect' },
  { code: '404', glow: '#ff6b6b', bg: '#ff6b6b', label: '404 Not Found' },
]

function ToolbarBadge() {
  const [idx, setIdx] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % BADGE_STATES.length), 2000)
    return () => clearInterval(t)
  }, [])
  const s = BADGE_STATES[idx]
  return (
    <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 rounded-full"
      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
      <span className="hidden sm:inline text-white/30 text-[10px] tracking-wide">Chrome toolbar</span>
      <div key={s.code} className="flex items-center gap-1.5 px-2 py-1 rounded-md"
        style={{ background: `${s.glow}14`, border: `1px solid ${s.glow}28`, animation: 'badgeIn 0.35s ease' }}>
        <PixelHeart size={14} style={{ filter: `drop-shadow(0 0 4px ${s.glow})` }} />
        <span className="text-[9px] font-black min-w-[26px] text-center px-1 py-0.5 rounded"
          style={{ background: s.bg, color: '#000' }}>{s.code}</span>
      </div>
      <span className="text-white/25 text-[10px]">{s.label}</span>
    </div>
  )
}

function OrbitingHearts() {
  return (
    <div aria-hidden="true" className="absolute pointer-events-none"
      style={{ top: '50%', left: '50%', width: 0, height: 0, zIndex: 1 }}>
      {ORBITS.map((o, i) => (
        <div key={i} style={{
          position: 'absolute', top: 0, left: 0,
          width: o.size, height: o.size,
          marginLeft: -o.size / 2, marginTop: -o.size / 2,
          opacity: o.opacity,
          filter: TINTS[o.tint] || undefined,
          ['--or' as string]: `${o.r}px`,
          ['--os' as string]: `${o.start}deg`,
          animation: `orbitHeart ${o.speed}s linear infinite`,
          animationDelay: `${-(o.speed * o.start / 360).toFixed(2)}s`,
        }}>
          <img src="/icon128.png" width={o.size} height={o.size}
            style={{ imageRendering: 'pixelated', display: 'block' }} alt="" />
        </div>
      ))}
    </div>
  )
}

export function HeroSection() {
  const { lang } = useLanguage()
  const t = translations[lang].hero

  useEffect(() => {
    if (!document.getElementById('hero-style')) {
      const el = document.createElement('style')
      el.id = 'hero-style'
      el.textContent = HERO_STYLE
      document.head.appendChild(el)
    }
  }, [])

  return (
    <section className="relative overflow-hidden"
      style={{ height: '100dvh', minHeight: '580px', display: 'flex', flexDirection: 'column' }}>

      {/* ── Plasma — blobs floutés, positifs, pleine section ── */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{ overflow: 'hidden' }}>
        {/* Blob haut-gauche */}
        <div style={{
          position: 'absolute', top: '0%', left: '-10%',
          width: '65%', height: '70%',
          borderRadius: '50%',
          background: 'rgba(109,40,217,0.55)',
          filter: 'blur(90px)',
          animation: 'plasmaA 10s ease-in-out infinite',
          willChange: 'transform',
        }} />
        {/* Blob haut-droite */}
        <div style={{
          position: 'absolute', top: '-5%', right: '-8%',
          width: '55%', height: '65%',
          borderRadius: '50%',
          background: 'rgba(79,70,229,0.45)',
          filter: 'blur(80px)',
          animation: 'plasmaB 13s ease-in-out infinite',
          willChange: 'transform',
        }} />
        {/* Blob bas-centre — couvre le bas */}
        <div style={{
          position: 'absolute', bottom: '5%', left: '20%',
          width: '60%', height: '55%',
          borderRadius: '50%',
          background: 'rgba(91,33,182,0.40)',
          filter: 'blur(100px)',
          animation: 'plasmaC 8s ease-in-out infinite',
          willChange: 'transform',
        }} />
        {/* Accent centre — intensifie le cœur */}
        <div style={{
          position: 'absolute', top: '25%', left: '30%',
          width: '40%', height: '40%',
          borderRadius: '50%',
          background: 'rgba(139,92,246,0.30)',
          filter: 'blur(60px)',
        }} />
      </div>

      {/* ── Orbites ── */}
      <OrbitingHearts />

      {/* ── Contenu — centré dans la section ── */}
      <div className="relative flex flex-col items-center justify-center flex-1 px-4 sm:px-6 text-center gap-4 sm:gap-5"
        style={{ zIndex: 2 }}>

        {/* Eyebrow */}
        <div className="px-3 sm:px-4 py-1 rounded-full text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase"
          style={{ background: 'rgba(139,92,246,0.12)', border: '1px solid rgba(139,92,246,0.22)', color: '#a78bfa' }}>
          {t.eyebrow}
        </div>

        {/* H1 */}
        <h1 className="flex items-center justify-center gap-3 sm:gap-4 font-bold tracking-tight"
          style={{ fontSize: 'clamp(40px, 8vw, 84px)', lineHeight: 1 }}>
          <PixelHeart size={52} style={{ filter: 'drop-shadow(0 0 28px rgba(139,92,246,0.9))' }} />
          <span className="bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(180deg, #f4f4f6 0%, #c4b5fd 100%)' }}>
            {t.headline}
          </span>
        </h1>

        {/* Stat pills */}
        <div className="flex flex-wrap justify-center items-center gap-2">
          <span className="px-3 py-1.5 rounded-full text-sm font-black"
            style={{ background: 'rgba(139,92,246,0.12)', border: '1px solid rgba(139,92,246,0.22)', color: '#c4b5fd' }}>
            +20 {lang === 'fr' ? 'apps en 1' : 'apps in one'}
          </span>
          <span className="text-white/15">·</span>
          <span className="px-3 py-1.5 rounded-full text-sm font-black"
            style={{ background: 'rgba(99,102,241,0.10)', border: '1px solid rgba(99,102,241,0.20)', color: '#a5b4fc' }}>
            +60 {lang === 'fr' ? 'fonctionnalités' : 'features'}
          </span>
          <span className="text-white/15">·</span>
          <span className="text-xs font-semibold" style={{ color: 'rgba(196,181,253,0.7)' }}>
            {lang === 'fr' ? '✦ Dont beaucoup d\'inédites' : '✦ Many unique & customizable'}
          </span>
        </div>

        {/* Sub */}
        <p className="text-center max-w-md leading-7"
          style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.52)' }}>
          {t.sub}
        </p>

        {/* Toolbar badge */}
        <ToolbarBadge />

        {/* CTA */}
        <div className="flex flex-col items-center gap-1.5">
          <Button variant="hero" className="px-7 sm:px-9 py-2.5 sm:py-3 text-sm sm:text-base rounded-full">
            {t.cta}
          </Button>
          <span className="text-[10px] sm:text-[11px]" style={{ color: 'rgba(255,255,255,0.25)' }}>{t.ctaSub}</span>
        </div>
      </div>

      {/* Arrow */}
      <div className="absolute bottom-4 sm:bottom-5 left-1/2 -translate-x-1/2 animate-bounce"
        style={{ color: 'rgba(139,92,246,0.35)', zIndex: 2, fontSize: '1.1rem' }}>↓</div>
    </section>
  )
}
