import { useState, useRef, useCallback } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { PixelHeart } from '@/components/PixelHeart'

// Realistic SEO extensions people typically install
const SEO_EXTENSIONS = [
  { abbr: 'SQ',  name: 'SEOquake',         color: '#f97316', bg: '#ff6b001a' },
  { abbr: 'SF',  name: 'Screaming Frog',   color: '#22c55e', bg: '#22c55e1a' },
  { abbr: 'MR',  name: 'MozBar',           color: '#3b82f6', bg: '#3b82f61a' },
  { abbr: 'AH',  name: 'Ahrefs SEO',       color: '#f59e0b', bg: '#f59e0b1a' },
  { abbr: 'SS',  name: 'SERPsim',          color: '#a78bfa', bg: '#a78bfa1a' },
  { abbr: 'WV',  name: 'Wave A11y',        color: '#ec4899', bg: '#ec48991a' },
  { abbr: 'GT',  name: 'GTmetrix',         color: '#06b6d4', bg: '#06b6d41a' },
  { abbr: 'SE',  name: 'SEO Minion',       color: '#84cc16', bg: '#84cc161a' },
  { abbr: 'RR',  name: 'Redirect Path',    color: '#ef4444', bg: '#ef44441a' },
  { abbr: 'CZ',  name: 'ColorZilla',       color: '#e879f9', bg: '#e879f91a' },
  { abbr: 'LH',  name: 'Lighthouse',       color: '#facc15', bg: '#facc151a' },
  { abbr: 'CE',  name: 'Cookie Editor',    color: '#2dd4bf', bg: '#2dd4bf1a' },
]

function ExtIcon({ abbr, color, bg, name }: { abbr: string; color: string; bg: string; name: string }) {
  return (
    <div
      title={name}
      className="flex items-center justify-center rounded-md text-[8px] font-black flex-shrink-0 cursor-default"
      style={{ width: 22, height: 22, background: bg, border: `1px solid ${color}40`, color }}
    >
      {abbr}
    </div>
  )
}

export function ComparisonSlider() {
  const { lang } = useLanguage()
  const [sliderX, setSliderX] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  const move = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const pct = Math.min(96, Math.max(4, ((clientX - rect.left) / rect.width) * 100))
    setSliderX(pct)
  }, [])

  const onMouseDown = () => { dragging.current = true }
  const onMouseMove = (e: React.MouseEvent) => { if (dragging.current) move(e.clientX) }
  const onMouseUp = () => { dragging.current = false }
  const onTouchMove = (e: React.TouchEvent) => { move(e.touches[0].clientX) }

  return (
    <section className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 40% at 50% 50%, rgba(57,211,255,0.05) 0%, transparent 70%)' }} />
      <div className="max-w-5xl mx-auto">

        <p className="text-center text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-4">
          {lang === 'fr' ? 'Avant · Après' : 'Before · After'}
        </p>
        <h2
          className="text-center text-4xl md:text-5xl font-semibold bg-clip-text text-transparent mb-3 tracking-tight"
          style={{ backgroundImage: 'linear-gradient(135deg, #e8e8e9 0%, #39d3ff 100%)' }}
        >
          {lang === 'fr' ? '12 extensions ou 1 seule ?' : '12 extensions or just 1?'}
        </h2>
        <p className="text-center text-muted-foreground text-base mb-10 max-w-lg mx-auto">
          {lang === 'fr'
            ? 'La plupart des SEOs ont 10+ extensions installées. Search Toolbox remplace tout ça.'
            : 'Most SEOs have 10+ extensions installed. Search Toolbox replaces all of them.'}
        </p>

        {/* Slider */}
        <div
          ref={containerRef}
          className="relative rounded-2xl overflow-hidden select-none cursor-col-resize"
          style={{ border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 32px 80px rgba(0,0,0,0.5)' }}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onTouchMove={onTouchMove}
          onTouchStart={onMouseDown}
          onTouchEnd={onMouseUp}
        >

          {/* ─── BEFORE (left, always visible) ─── */}
          <div className="flex flex-col" style={{ background: '#0b0c14', minHeight: 460 }}>

            {/* Before browser chrome */}
            <div className="flex-shrink-0" style={{ background: '#12131f', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
              {/* Traffic lights + tab */}
              <div className="flex items-center gap-2 px-4 pt-2.5 pb-0">
                <div className="flex gap-1.5 flex-shrink-0">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>
                <div className="flex items-end gap-0.5 ml-2 h-6">
                  <div className="flex items-center gap-1.5 px-3 h-full rounded-t-md text-[9px] text-white/40" style={{ background: '#1c1e2e', border: '1px solid rgba(255,255,255,0.07)', borderBottom: 'none' }}>
                    ahrefs.com — Backlink chec…
                  </div>
                </div>
              </div>
              {/* URL bar + MANY extensions */}
              <div className="flex items-center gap-2 px-3 py-2">
                <div className="flex-1 flex items-center gap-2 px-3 py-1.5 rounded-lg text-[9px] text-white/35" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                  🔒 https://ahrefs.com/backlink-checker
                </div>
                {/* 12 extension icons crammed in */}
                <div className="flex items-center gap-1 flex-shrink-0">
                  {SEO_EXTENSIONS.map(e => <ExtIcon key={e.abbr} {...e} />)}
                  <span className="text-[9px] text-white/30 ml-1">⋯</span>
                </div>
              </div>
            </div>

            {/* Before body — pain points */}
            <div className="flex-1 p-5 flex flex-col gap-3">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-white/50 uppercase tracking-wider">
                  {lang === 'fr' ? 'Votre situation actuelle' : 'Your current setup'}
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full font-semibold" style={{ background: 'rgba(239,68,68,0.15)', color: '#ef4444' }}>
                  {lang === 'fr' ? '12 extensions actives' : '12 extensions active'}
                </span>
              </div>

              {/* Extension list */}
              <div className="grid grid-cols-2 gap-2">
                {SEO_EXTENSIONS.map(e => (
                  <div key={e.abbr} className="flex items-center gap-2 px-2.5 py-2 rounded-lg" style={{ background: e.bg, border: `1px solid ${e.color}25` }}>
                    <div className="flex items-center justify-center rounded text-[9px] font-black w-5 h-5 flex-shrink-0" style={{ background: e.bg, color: e.color }}>
                      {e.abbr}
                    </div>
                    <span className="text-[10px] font-medium text-white/55">{e.name}</span>
                    <span className="ml-auto text-[8px] font-bold" style={{ color: '#ef4444' }}>✕</span>
                  </div>
                ))}
              </div>

              {/* Pain footer */}
              <div className="mt-2 rounded-xl p-3 flex flex-col gap-1.5" style={{ background: 'rgba(239,68,68,0.07)', border: '1px solid rgba(239,68,68,0.15)' }}>
                {[
                  { icon: '⏱', text: lang === 'fr' ? '~2h par audit · jongler entre 12 onglets' : '~2h per audit · juggling 12 tabs' },
                  { icon: '💸', text: lang === 'fr' ? 'Certaines extensions sont payantes' : 'Several extensions cost money' },
                  { icon: '🐌', text: lang === 'fr' ? 'Chrome ralenti par toutes ces extensions' : 'Chrome slowed down by all these' },
                ].map(({ icon, text }) => (
                  <div key={text} className="flex items-center gap-2 text-[10px]" style={{ color: 'rgba(255,255,255,0.45)' }}>
                    <span>{icon}</span><span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ─── AFTER (right, clipped) ─── */}
          <div
            className="absolute inset-0 flex flex-col"
            style={{ background: '#040D1A', clipPath: `inset(0 0 0 ${sliderX}%)` }}
          >
            {/* After browser chrome */}
            <div className="flex-shrink-0" style={{ background: '#080f1c', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
              <div className="flex items-center gap-2 px-4 pt-2.5 pb-0">
                <div className="flex gap-1.5 flex-shrink-0">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>
                <div className="flex items-end gap-0.5 ml-2 h-6">
                  <div className="flex items-center gap-1.5 px-3 h-full rounded-t-md text-[9px] text-white/40" style={{ background: '#0d1a2e', border: '1px solid rgba(255,255,255,0.08)', borderBottom: 'none' }}>
                    <PixelHeart size={11} />
                    ahrefs.com — Search Toolbox analyzing…
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 px-3 py-2">
                <div className="flex-1 flex items-center gap-2 px-3 py-1.5 rounded-lg text-[9px] text-white/35" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                  🔒 https://ahrefs.com/backlink-checker
                </div>
                {/* Just ONE icon in toolbar */}
                <div className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg flex-shrink-0" style={{ background: 'rgba(167,139,250,0.15)', border: '1px solid rgba(167,139,250,0.35)' }}>
                  <PixelHeart size={16} style={{ filter: 'drop-shadow(0 0 6px rgba(167,139,250,0.8))' }} />
                  <span className="text-[9px] font-black px-1.5 rounded-full" style={{ background: '#22c55e', color: '#000' }}>✓</span>
                </div>
              </div>
            </div>

            {/* Color stripe */}
            <div className="h-[2px] w-full flex-shrink-0" style={{ background: 'linear-gradient(90deg, #a78bfa, #39d3ff, #2dd4bf, #facc15)' }} />

            {/* After body */}
            <div className="flex-1 p-5 flex flex-col gap-3">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <PixelHeart size={18} style={{ filter: 'drop-shadow(0 0 8px rgba(167,139,250,0.6))' }} />
                  <span
                    className="text-sm font-black tracking-wide"
                    style={{ background: 'linear-gradient(90deg, #39d3ff, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                  >
                    Search Toolbox
                  </span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full font-semibold" style={{ background: 'rgba(34,197,94,0.15)', color: '#22c55e' }}>
                  {lang === 'fr' ? '1 seule extension' : '1 extension only'}
                </span>
              </div>

              {/* What it replaces */}
              <div className="grid grid-cols-2 gap-2">
                {[
                  { icon: '◉', label: lang === 'fr' ? 'Overview + Score SEO' : 'Overview + SEO Score', color: '#a78bfa' },
                  { icon: '{}', label: lang === 'fr' ? 'Schema + Microdata' : 'Schema + Microdata', color: '#a78bfa' },
                  { icon: '⇕', label: lang === 'fr' ? 'Tracé de redirections' : 'Redirect tracer', color: '#39d3ff' },
                  { icon: '◇', label: lang === 'fr' ? 'Audit images' : 'Image audit', color: '#39d3ff' },
                  { icon: '🌐', label: lang === 'fr' ? 'SERP VPN 50+ pays' : 'SERP VPN 50+ countries', color: '#facc15' },
                  { icon: '🍪', label: lang === 'fr' ? 'Éditeur cookies' : 'Cookie editor', color: '#facc15' },
                  { icon: '📸', label: lang === 'fr' ? 'Screenshot full page' : 'Full page screenshot', color: '#2dd4bf' },
                  { icon: '📋', label: lang === 'fr' ? 'Rapport PDF client' : 'Client PDF report', color: '#2dd4bf' },
                  { icon: '¶',  label: lang === 'fr' ? 'Hiérarchie headings' : 'Heading hierarchy', color: '#a78bfa' },
                  { icon: '☸', label: 'Hreflang audit', color: '#39d3ff' },
                  { icon: '🎨', label: lang === 'fr' ? 'Color picker' : 'Color picker', color: '#ec4899' },
                  { icon: '≡',  label: lang === 'fr' ? 'Glossaire SEO 150+' : 'SEO Glossary 150+', color: '#facc15' },
                ].map(({ icon, label, color }) => (
                  <div key={label} className="flex items-center gap-2 px-2.5 py-2 rounded-lg" style={{ background: `${color}10`, border: `1px solid ${color}25` }}>
                    <span className="text-sm flex-shrink-0" style={{ color }}>{icon}</span>
                    <span className="text-[10px] font-medium text-white/60 leading-tight">{label}</span>
                    <span className="ml-auto text-[9px] font-bold" style={{ color: '#22c55e' }}>✓</span>
                  </div>
                ))}
              </div>

              {/* Gains footer */}
              <div className="mt-2 rounded-xl p-3 flex flex-col gap-1.5" style={{ background: 'rgba(34,197,94,0.07)', border: '1px solid rgba(34,197,94,0.15)' }}>
                {[
                  { icon: '⚡', text: lang === 'fr' ? '~5 min par audit · tout dans un seul panel' : '~5 min per audit · everything in one panel' },
                  { icon: '🆓', text: lang === 'fr' ? '100% gratuit, sans compte requis' : '100% free, no account needed' },
                  { icon: '🚀', text: lang === 'fr' ? 'Chrome plus rapide, moins d\'extensions' : 'Faster Chrome, fewer extensions' },
                ].map(({ icon, text }) => (
                  <div key={text} className="flex items-center gap-2 text-[10px]" style={{ color: 'rgba(255,255,255,0.55)' }}>
                    <span>{icon}</span><span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ─── Drag handle ─── */}
          <div
            className="absolute top-0 bottom-0 z-20 pointer-events-none flex items-center justify-center"
            style={{ left: `${sliderX}%`, transform: 'translateX(-50%)' }}
          >
            <div className="absolute inset-y-0 w-[2px]" style={{ background: 'rgba(255,255,255,0.55)', backdropFilter: 'blur(2px)' }} />
            <div
              className="relative z-10 flex items-center gap-1.5 px-3 py-2 rounded-full text-[11px] font-black"
              style={{
                background: 'rgba(8,10,24,0.95)',
                border: '1.5px solid rgba(255,255,255,0.25)',
                backdropFilter: 'blur(16px)',
                color: 'rgba(255,255,255,0.9)',
                boxShadow: '0 4px 24px rgba(0,0,0,0.7)',
                whiteSpace: 'nowrap',
              }}
            >
              ◀ {lang === 'fr' ? 'Glissez' : 'Drag'} ▶
            </div>
          </div>

          {/* Corner labels */}
          <div className="absolute top-4 left-4 z-10 text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded pointer-events-none"
            style={{ background: 'rgba(239,68,68,0.2)', color: '#ef4444', opacity: sliderX > 15 ? 1 : 0, transition: 'opacity 0.2s' }}>
            {lang === 'fr' ? 'Avant' : 'Before'}
          </div>
          <div className="absolute top-4 right-4 z-10 text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded pointer-events-none"
            style={{ background: 'rgba(34,197,94,0.2)', color: '#22c55e', opacity: sliderX < 85 ? 1 : 0, transition: 'opacity 0.2s' }}>
            {lang === 'fr' ? 'Après' : 'After'}
          </div>
        </div>

        <p className="text-center mt-8 text-base font-bold" style={{ color: '#c4b5fd' }}>
          {lang === 'fr'
            ? '✦ La dernière extension SEO que vous installerez jamais ✦'
            : '✦ The last SEO extension you\'ll ever install ✦'}
        </p>
      </div>
    </section>
  )
}
