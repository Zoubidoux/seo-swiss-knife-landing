/**
 * CSS-art mockup of the SEO Swiss Knife side panel.
 * Used in FeatureSpotlight sections.
 */

type Tab = 'overview' | 'schema' | 'redirects' | 'images'

const TABS: { id: Tab; label: string; icon: string }[] = [
  { id: 'overview',  label: 'Overview',  icon: '◉' },
  { id: 'schema',    label: 'Schema',    icon: '{}' },
  { id: 'redirects', label: 'Redirect',  icon: '⇕' },
  { id: 'images',    label: 'Images',    icon: '◇' },
]

function OverviewContent() {
  return (
    <div className="p-3 flex flex-col gap-2 text-[10px]">
      {/* Score badge */}
      <div className="flex items-center justify-between bg-white/5 rounded-lg px-3 py-2">
        <span className="text-white/50 font-medium uppercase tracking-wider text-[9px]">SEO Score</span>
        <span className="font-bold text-lg" style={{ color: '#22c55e' }}>87</span>
      </div>
      {/* Fields */}
      {[
        { label: 'Title', value: 'SEO Swiss Knife — Complete Toolkit', status: 'good' },
        { label: 'Description', value: 'All-in-one SEO analysis for Chrome...', status: 'good' },
        { label: 'Canonical', value: 'https://example.com/', status: 'good' },
        { label: 'Robots', value: 'index, follow', status: 'good' },
        { label: 'H1', value: '1 found', status: 'good' },
      ].map((f) => (
        <div key={f.label} className="bg-white/[0.04] rounded-md px-2.5 py-2">
          <div className="flex items-center justify-between mb-0.5">
            <span className="text-white/40 uppercase tracking-wider text-[8px] font-semibold">{f.label}</span>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: f.status === 'good' ? '#22c55e' : '#ef4444' }} />
          </div>
          <span className="text-white/80 truncate block">{f.value}</span>
        </div>
      ))}
    </div>
  )
}

function SchemaContent() {
  return (
    <div className="p-3 flex flex-col gap-2 text-[10px]">
      <div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2">
        <span className="text-[#a78bfa] font-bold">3</span>
        <span className="text-white/50">Schema types detected</span>
      </div>
      {[
        { type: 'WebSite', props: 4, valid: true },
        { type: 'Organization', props: 7, valid: true },
        { type: 'BreadcrumbList', props: 3, valid: false },
      ].map((s) => (
        <div key={s.type} className="bg-white/[0.04] rounded-md px-2.5 py-2">
          <div className="flex items-center justify-between">
            <span className="text-[#a78bfa] font-bold">{s.type}</span>
            <span
              className="text-[8px] px-1.5 py-0.5 rounded font-semibold"
              style={{
                background: s.valid ? 'rgba(34,197,94,0.15)' : 'rgba(239,68,68,0.15)',
                color: s.valid ? '#22c55e' : '#ef4444',
              }}
            >
              {s.valid ? 'Valid' : 'Error'}
            </span>
          </div>
          <span className="text-white/40 text-[8px]">{s.props} properties</span>
        </div>
      ))}
    </div>
  )
}

function RedirectContent() {
  const hops = [
    { code: 301, url: 'http://example.com/', label: 'Moved Permanently', ms: 42 },
    { code: 301, url: 'https://example.com/', label: 'Moved Permanently', ms: 38 },
    { code: 200, url: 'https://www.example.com/', label: 'OK', ms: 210 },
  ]
  return (
    <div className="p-3 flex flex-col gap-2 text-[10px]">
      <div className="bg-white/5 rounded-lg px-3 py-2 text-white/50 text-[9px]">
        2 redirects → final 200
      </div>
      {hops.map((h, i) => (
        <div key={i} className="flex overflow-hidden rounded-md border border-white/10">
          <div
            className="flex flex-col items-center justify-center px-2 py-2 min-w-[42px]"
            style={{
              background: h.code === 200 ? 'rgba(34,197,94,0.3)' : 'rgba(250,204,21,0.3)',
            }}
          >
            <span className="font-bold text-white text-[13px] leading-none">{h.code}</span>
            <span className="text-white/60 text-[7px] mt-0.5">{h.ms}ms</span>
          </div>
          <div className="flex-1 bg-white/[0.03] px-2 py-2">
            <p className="text-[#39d3ff] truncate text-[9px]">{h.url}</p>
            <p className="text-white/40 text-[8px] mt-0.5">{h.label}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

function ImagesContent() {
  const imgs = [
    { src: '/hero-banner.webp', alt: 'SEO hero image', w: 1200, h: 630, size: '42kb', status: 'ok' },
    { src: '/logo.png',         alt: '',                w: 200,  h: 60,  size: '8kb',  status: 'warn' },
    { src: '/feature-1.jpg',    alt: 'Feature screenshot', w: 800, h: 500, size: '120kb', status: 'warn' },
    { src: '/icon-seo.svg',     alt: 'SEO icon',       w: 24,   h: 24,  size: '1kb',  status: 'ok' },
  ]
  return (
    <div className="p-3 flex flex-col gap-1.5 text-[10px]">
      <div className="flex items-center justify-between bg-white/5 rounded-lg px-3 py-2 mb-1">
        <span className="text-white/50 text-[9px]">4 images found</span>
        <span className="text-[#facc15] text-[9px] font-semibold">2 missing alt</span>
      </div>
      {imgs.map((img) => (
        <div key={img.src} className="flex items-start gap-2 bg-white/[0.04] rounded-md px-2 py-2">
          <div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center text-[9px] text-white/30 flex-shrink-0">◇</div>
          <div className="flex-1 min-w-0">
            <p className="text-[#39d3ff] truncate text-[9px]">{img.src}</p>
            <p className="text-white/40 text-[8px]">{img.w}×{img.h} · {img.size}</p>
            {img.alt ? (
              <p className="text-white/50 text-[8px] truncate">{img.alt}</p>
            ) : (
              <p className="text-[#facc15] text-[8px] font-semibold">Missing alt text</p>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

const CONTENT: Record<Tab, React.ReactNode> = {
  overview:  <OverviewContent />,
  schema:    <SchemaContent />,
  redirects: <RedirectContent />,
  images:    <ImagesContent />,
}

interface ExtensionMockupProps {
  activeTab?: Tab
}

export function ExtensionMockup({ activeTab = 'overview' }: ExtensionMockupProps) {
  return (
    <div
      className="rounded-2xl overflow-hidden shadow-2xl select-none flex-shrink-0"
      style={{
        width: 240,
        background: '#040D1A',
        border: '1px solid rgba(255,255,255,0.08)',
        boxShadow: '0 32px 64px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05)',
      }}
    >
      {/* Header strip */}
      <div
        className="h-[3px] w-full"
        style={{
          background: 'linear-gradient(90deg, #a78bfa, #39d3ff, #2dd4bf, #facc15)',
        }}
      />

      {/* Toolbar */}
      <div className="flex items-center gap-2 px-3 py-2 border-b border-white/[0.06]">
        <div className="w-3 h-3 rounded-full bg-white/10 flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-[#39d3ff]" />
        </div>
        <span
          className="text-[9px] font-black tracking-wider uppercase"
          style={{
            background: 'linear-gradient(90deg, #39d3ff, #a78bfa)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          SEO Swiss Knife
        </span>
        <span className="ml-auto text-[8px] text-white/30 uppercase tracking-wider">Analysis Suite</span>
      </div>

      {/* Body: sidebar + panel */}
      <div className="flex" style={{ minHeight: 340 }}>
        {/* Mini sidebar */}
        <div className="flex flex-col border-r border-white/[0.06] py-2" style={{ width: 52, background: '#020617' }}>
          {TABS.map((t) => (
            <div
              key={t.id}
              className="flex flex-col items-center gap-0.5 py-2 px-1 relative"
              style={{
                borderLeft: t.id === activeTab ? '2px solid #39d3ff' : '2px solid transparent',
                background: t.id === activeTab ? 'rgba(57,211,255,0.08)' : 'transparent',
              }}
            >
              <span className="text-[11px]" style={{ color: t.id === activeTab ? '#39d3ff' : 'rgba(255,255,255,0.3)' }}>
                {t.icon}
              </span>
              <span
                className="text-[7px] font-semibold uppercase tracking-wide"
                style={{ color: t.id === activeTab ? '#39d3ff' : 'rgba(255,255,255,0.25)' }}
              >
                {t.label}
              </span>
            </div>
          ))}
        </div>

        {/* Panel content */}
        <div className="flex-1 overflow-hidden">
          {CONTENT[activeTab]}
        </div>
      </div>
    </div>
  )
}
