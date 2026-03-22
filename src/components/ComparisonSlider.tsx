import { useState, useRef, useCallback } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/i18n/index'
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
  const t = translations[lang].comparison
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
          {t.eyebrow}
        </p>
        <h2
          className="text-center text-4xl md:text-5xl font-semibold bg-clip-text text-transparent mb-3 tracking-tight"
          style={{ backgroundImage: 'linear-gradient(135deg, #e8e8e9 0%, #39d3ff 100%)' }}
        >
          {t.headline}
        </h2>
        <p className="text-center text-muted-foreground text-base mb-10 max-w-lg mx-auto">
          {t.sub}
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
                  {t.currentSetup}
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full font-semibold" style={{ background: 'rgba(239,68,68,0.15)', color: '#ef4444' }}>
                  {t.activeExtensions.replace('{count}', SEO_EXTENSIONS.length.toString())}
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
                {t.painPoints.map(({ icon, text }) => (
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
            style={{ background: '#FFFFFF', clipPath: `inset(0 0 0 ${sliderX}%)` }}
          >
            {/* After browser chrome */}
            <div className="flex-shrink-0" style={{ background: '#FAFAFA', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
              <div className="flex items-center gap-2 px-4 pt-3 pb-0">
                <div className="flex gap-1.5 flex-shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-black/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-black/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-black/10" />
                </div>
                <div className="flex items-end gap-0.5 ml-2 h-7">
                  <div className="flex items-center gap-1.5 px-4 h-full rounded-t-lg text-[10px] text-black/60 font-black bg-white border border-black/5 border-bottom-0">
                    <PixelHeart size={14} className="text-primary" />
                    ahrefs.com — SEARCHTOOLBOX
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 px-4 py-2.5">
                <div className="flex-1 flex items-center gap-2 px-3 py-1.5 rounded-lg text-[10px] text-black/40 font-bold bg-white border border-black/5">
                  https://ahrefs.com/backlink-checker
                </div>
                {/* Just ONE icon in toolbar */}
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg flex-shrink-0 bg-primary/5 border border-primary/20">
                  <PixelHeart size={16} className="text-primary" />
                  <span className="text-[10px] font-black text-primary">✓</span>
                </div>
              </div>
            </div>

            {/* After body */}
            <div className="flex-1 p-8 flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <PixelHeart size={20} className="text-primary" />
                  <span className="text-xl font-black tracking-tighter text-black uppercase">
                    SEARCHTOOLBOX
                  </span>
                </div>
                <span className="text-[10px] px-3 py-1 rounded-full font-black uppercase tracking-widest bg-primary/5 text-primary border border-primary/10">
                  {t.oneExtensionOnly}
                </span>
              </div>

              {/* What it replaces (Labels from benefits.groups[0].items or similar could be used, but keeping static for UI mock) */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: '◉', label: lang === 'fr' ? 'Vue d\'ensemble' : lang === 'it' ? 'Panoramica' : lang === 'de' ? 'Übersicht' : 'Overview' },
                  { icon: '{}', label: 'Schema + JSON-LD' },
                  { icon: '⇕', label: lang === 'fr' ? 'Redirections' : lang === 'it' ? 'Redirect' : lang === 'de' ? 'Weiterleitungen' : 'Redirects' },
                  { icon: '◇', label: 'Image Audit' },
                  { icon: '🌐', label: 'SERP VPN 50+ countries' },
                  { icon: '🍪', label: 'Cookie Editor' },
                  { icon: '📸', label: 'Full Page Screenshot' },
                  { icon: '📋', label: 'Client PDF report' },
                  { icon: '¶',  label: 'Heading Hierarchy' },
                  { icon: '☸', label: 'Hreflang Audit' },
                  { icon: '🎨', label: 'Color Picker' },
                  { icon: '≡',  label: 'SEO Glossary' },
                ].map(({ icon, label }) => (
                  <div key={label} className="flex items-center gap-2.5 px-3.5 py-3 rounded-xl bg-black/5 border border-black/5">
                    <span className="text-base text-black/30 font-bold">{icon}</span>
                    <span className="text-[10px] font-black text-black/60 uppercase tracking-widest leading-tight truncate">{label}</span>
                    <span className="ml-auto text-[11px] font-black text-primary">✓</span>
                  </div>
                ))}
              </div>

              {/* Gains footer */}
              <div className="mt-4 rounded-2xl p-4 flex flex-col gap-2.5 bg-primary/[0.03] border border-primary/10">
                {t.gains.map(({ icon, text }) => (
                  <div key={text} className="flex items-center gap-3 text-[11px] font-bold text-black/40">
                    <span className="text-lg grayscale">{icon}</span><span className="uppercase tracking-widest">{text}</span>
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
            <div className="absolute inset-y-0 w-px bg-black/10" />
            <div
              className="relative z-10 flex items-center gap-2 px-4 py-2.5 rounded-full text-[10px] font-black border border-black/5 uppercase tracking-[0.2em] shadow-xl bg-white text-black/50"
            >
              ◀ {t.drag} ▶
            </div>
          </div>

          {/* Corner labels */}
          <div className="absolute top-6 left-6 z-10 text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-lg pointer-events-none border border-black/5 bg-white/80 backdrop-blur-sm text-black/30"
            style={{ opacity: sliderX > 15 ? 1 : 0, transition: 'opacity 0.2s' }}>
            {t.before}
          </div>
          <div className="absolute top-6 right-6 z-10 text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-lg pointer-events-none border border-primary/20 bg-primary/5 text-primary"
            style={{ opacity: sliderX < 85 ? 1 : 0, transition: 'opacity 0.2s' }}>
            {t.after}
          </div>
        </div>

        <p className="text-center mt-12 text-[10px] font-black uppercase tracking-[0.3em] text-black/20 text-balance">
          {t.footerNote}
        </p>
      </div>
    </section>
  )
}
