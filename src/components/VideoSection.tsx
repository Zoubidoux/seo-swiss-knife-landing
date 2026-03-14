import { useState, useEffect } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/i18n/index'

// Simulated findings for the Dior page analysis
const FINDINGS = [
  { label: 'Title', value: 'DIOR | Official Website — Haute Couture & Fashion', chars: '52', status: 'good' },
  { label: 'Canonical', value: 'https://www.dior.com/en_us', status: 'good' },
  { label: 'Robots', value: 'index, follow', status: 'good' },
  { label: 'OG Image', value: '/assets/og-dior-2026.jpg (1200×630)', status: 'good' },
  { label: 'H1', value: 'The Art of Living by Dior', status: 'good' },
  { label: 'Schema', value: 'Organization, WebSite, BreadcrumbList', status: 'good' },
  { label: 'Hreflang', value: '38 tags — 2 missing x-default', status: 'warn' },
  { label: 'Images', value: '14 images — 3 missing alt text', status: 'warn' },
]

const SCORE_CATEGORIES = [
  { name: 'Indexability', score: 98, color: '#22c55e' },
  { name: 'On-Page',      score: 84, color: '#22c55e' },
  { name: 'Technical',    score: 79, color: '#facc15' },
  { name: 'Schema',       score: 91, color: '#22c55e' },
  { name: 'Social',       score: 72, color: '#facc15' },
  { name: 'Images',       score: 58, color: '#f97316' },
]

function DiorPageMock() {
  return (
    <div className="relative flex-1 overflow-hidden" style={{ background: '#0a0a0a', minWidth: 0 }}>
      {/* Nav */}
      <div className="flex items-center justify-between px-6 py-3 border-b border-white/10">
        <div className="flex gap-5">
          {['Collections', 'Beauty', 'Watches', 'Men'].map(l => (
            <span key={l} className="text-[10px] text-white/40 uppercase tracking-widest font-light">{l}</span>
          ))}
        </div>
        <span className="text-white font-serif text-sm tracking-[0.3em] uppercase font-semibold">Dior</span>
        <div className="flex gap-4">
          {['Search', 'Account', 'Bag (2)'].map(l => (
            <span key={l} className="text-[10px] text-white/40 uppercase tracking-widest">{l}</span>
          ))}
        </div>
      </div>
      {/* Hero */}
      <div className="relative overflow-hidden" style={{ height: 220 }}>
        {/* Luxury gradient background simulating product photo */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #1a0a0e 0%, #2d1520 40%, #0d0a12 70%, #050308 100%)' }} />
        <div className="absolute inset-0 opacity-20" style={{ background: 'radial-gradient(ellipse 80% 60% at 60% 40%, #c8966040 0%, transparent 70%)' }} />
        {/* Subtle fashion silhouette lines */}
        <div className="absolute" style={{ right: '20%', top: '10%', width: 80, height: 200, background: 'linear-gradient(180deg, rgba(200,150,96,0.15) 0%, transparent 100%)', borderRadius: '50% 50% 0 0', transform: 'rotate(-5deg)' }} />
        <div className="absolute" style={{ right: '25%', top: '15%', width: 3, height: 160, background: 'rgba(200,150,96,0.2)', borderRadius: 2 }} />
        <div className="absolute inset-0 flex flex-col justify-end pb-8 px-8">
          <p className="text-[8px] text-white/30 uppercase tracking-[0.4em] mb-2 font-light">Spring — Summer 2026</p>
          <h2 className="text-white font-serif text-2xl tracking-wider font-light leading-tight mb-3" style={{ fontStyle: 'italic' }}>
            The Art of Living<br />by Dior
          </h2>
          <button className="self-start text-[9px] uppercase tracking-[0.25em] px-4 py-2 border border-white/40 text-white/70 hover:bg-white/10 transition-colors">
            Discover the Collection
          </button>
        </div>
      </div>
      {/* Product grid hint */}
      <div className="grid grid-cols-3 gap-px mt-px" style={{ background: '#111' }}>
        {[
          { bg: 'linear-gradient(135deg, #1e1018, #0e0a14)', label: 'Lady Dior', sub: 'Handbags' },
          { bg: 'linear-gradient(135deg, #0e1218, #060e16)', label: 'Sauvage', sub: 'Fragrance' },
          { bg: 'linear-gradient(135deg, #181210, #0e0808)', label: 'Dior Beauty', sub: 'Makeup' },
        ].map(({ bg, label, sub }) => (
          <div key={label} className="relative overflow-hidden" style={{ height: 88, background: bg }}>
            <div className="absolute inset-0 opacity-10" style={{ background: 'radial-gradient(circle at 50% 30%, rgba(200,150,96,0.5) 0%, transparent 60%)' }} />
            <div className="absolute bottom-3 left-3">
              <p className="text-white text-[9px] font-semibold tracking-wide">{label}</p>
              <p className="text-white/30 text-[7px] uppercase tracking-widest">{sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ExtensionPanelMock({ visible }: { visible: boolean }) {
  const [step, setStep] = useState(0)

  useEffect(() => {
    if (!visible) { setStep(0); return }
    const timers: ReturnType<typeof setTimeout>[] = []
    FINDINGS.forEach((_, i) => {
      timers.push(setTimeout(() => setStep(i + 1), 300 + i * 220))
    })
    return () => timers.forEach(clearTimeout)
  }, [visible])

  return (
    <div
      className="flex-shrink-0 flex flex-col transition-all duration-500"
      style={{ width: visible ? 220 : 0, overflow: 'hidden', opacity: visible ? 1 : 0 }}
    >
      <div className="h-full flex flex-col" style={{ width: 220, background: '#040D1A', borderLeft: '1px solid rgba(255,255,255,0.08)' }}>
        {/* Header */}
        <div className="h-[3px]" style={{ background: 'linear-gradient(90deg, #a78bfa, #39d3ff, #2dd4bf)' }} />
        <div className="flex items-center justify-between px-3 py-2 border-b border-white/[0.06]">
          <span className="text-[8px] font-black tracking-widest uppercase" style={{ background: 'linear-gradient(90deg, #39d3ff, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            SEO Swiss Knife
          </span>
          <span className="text-[7px] px-1.5 py-0.5 rounded-full font-semibold" style={{ background: 'rgba(34,197,94,0.15)', color: '#22c55e' }}>Allowed</span>
        </div>

        {/* Scanning bar */}
        <div className="px-3 py-2 border-b border-white/[0.04]">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-[7px] text-white/40 uppercase tracking-wide font-semibold">Analysing</span>
            <span className="text-[7px] text-white/30 truncate">dior.com/en_us</span>
          </div>
          <div className="h-0.5 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-300"
              style={{ width: `${(step / FINDINGS.length) * 100}%`, background: 'linear-gradient(90deg, #a78bfa, #39d3ff)' }}
            />
          </div>
        </div>

        {/* SEO Score */}
        <div className="px-3 py-2 border-b border-white/[0.04]">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[7px] text-white/40 uppercase tracking-wide">SEO Score</span>
            <span className="font-black text-base" style={{ color: '#22c55e' }}>82</span>
          </div>
          {SCORE_CATEGORIES.map((c, i) => (
            <div key={c.name} className="flex items-center gap-1.5 mb-1" style={{ opacity: step > i ? 1 : 0.2, transition: 'opacity 0.3s' }}>
              <span className="text-[6px] text-white/40 w-14 flex-shrink-0">{c.name}</span>
              <div className="flex-1 h-0.5 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full rounded-full transition-all duration-700" style={{ width: step > i ? `${c.score}%` : '0%', background: c.color }} />
              </div>
              <span className="text-[6px] font-bold w-5 text-right" style={{ color: c.color }}>{c.score}</span>
            </div>
          ))}
        </div>

        {/* Findings */}
        <div className="flex-1 overflow-y-auto px-2 py-2" style={{ scrollbarWidth: 'none' }}>
          {FINDINGS.slice(0, step).map((f) => (
            <div key={f.label} className="flex items-start gap-1.5 bg-white/[0.03] rounded px-1.5 py-1 mb-1">
              <span className="w-1.5 h-1.5 rounded-full mt-1 flex-shrink-0" style={{ background: f.status === 'good' ? '#22c55e' : '#facc15' }} />
              <div className="min-w-0">
                <span className="text-[6px] text-white/30 uppercase tracking-wide font-semibold">{f.label}</span>
                <p className="text-[7px] text-white/60 truncate">{f.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function VideoSection() {
  const { lang } = useLanguage()
  const t = translations[lang].video
  const [started, setStarted] = useState(false)
  const [showPanel, setShowPanel] = useState(false)

  function handleStart() {
    setStarted(true)
    setTimeout(() => setShowPanel(true), 600)
  }

  return (
    <section className="relative bg-background py-24 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
      <div className="absolute" style={{ inset: 0, background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(124,58,237,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div className="max-w-5xl mx-auto flex flex-col items-center gap-10">
        <div className="text-center flex flex-col gap-3">
          <p className="text-sm font-semibold tracking-widest uppercase text-primary">{t.eyebrow}</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight">{t.headline}</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">{t.sub}</p>
        </div>

        {/* Browser frame */}
        <div className="w-full relative">
          <div className="absolute -inset-8 rounded-3xl blur-3xl opacity-15 pointer-events-none" style={{ background: 'radial-gradient(ellipse, #7c3aed 0%, transparent 70%)' }} />

          <div className="relative rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 32px 80px rgba(0,0,0,0.7)' }}>
            {/* Browser top bar */}
            <div className="flex items-center gap-2 px-4 py-2.5" style={{ background: '#0d1117', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <div className="flex-1 mx-3 flex items-center gap-2 bg-white/[0.06] rounded-md px-3 py-1.5">
                <span className="text-[9px] text-white/20">🔒</span>
                <span className="text-[10px] text-white/40">https://www.dior.com/en_us</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-6 h-6 rounded-md flex items-center justify-center text-[10px] font-bold" style={{ background: 'rgba(167,139,250,0.2)', color: '#a78bfa' }}>🔪</div>
                <span className="text-[9px] font-semibold" style={{ color: '#a78bfa' }}>SEO Swiss Knife</span>
              </div>
            </div>

            {/* Main area: website + extension panel */}
            <div className="flex overflow-hidden" style={{ minHeight: 460 }}>
              <DiorPageMock />
              <ExtensionPanelMock visible={showPanel} />
            </div>
          </div>

          {/* Start button overlay */}
          {!started && (
            <div className="absolute inset-0 flex items-center justify-center rounded-2xl" style={{ background: 'rgba(4,13,26,0.5)', backdropFilter: 'blur(2px)' }}>
              <button
                onClick={handleStart}
                className="flex flex-col items-center gap-3 group"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
                  style={{ background: 'rgba(167,139,250,0.2)', border: '2px solid rgba(167,139,250,0.4)', boxShadow: '0 0 40px rgba(124,58,237,0.4)' }}
                >
                  <span className="text-2xl ml-1">▶</span>
                </div>
                <span className="text-sm font-semibold text-white/70">See it in action on Dior.com</span>
              </button>
            </div>
          )}
        </div>

        {/* Caption */}
        <p className="text-center text-muted-foreground text-sm max-w-md">
          {lang === 'fr'
            ? 'L\'extension analyse n\'importe quelle page en moins d\'une seconde — directement dans le panneau latéral de Chrome.'
            : 'The extension analyses any page in under a second — directly inside the Chrome side panel.'}
        </p>
      </div>
    </section>
  )
}
