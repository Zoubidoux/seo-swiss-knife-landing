import React from 'react'

export type MockupTab =
  | 'overview' | 'headings' | 'social' | 'schema' | 'hreflang' | 'variants'
  | 'robots' | 'redirects' | 'images' | 'inspector' | 'source' | 'render'
  | 'links'
  | 'vpn' | 'tools' | 'dorks' | 'useragent' | 'cookies' | 'clearcache' | 'glossary' | 'report'

const GROUPS: {
  label: string
  color: string
  bg: string
  tabs: { id: MockupTab; icon: string; label: string }[]
}[] = [
  {
    label: 'Semantic',
    color: '#a78bfa',
    bg: 'rgba(167,139,250,0.12)',
    tabs: [
      { id: 'overview',  icon: '◉',  label: 'Overview' },
      { id: 'headings',  icon: '¶',  label: 'Headings' },
      { id: 'social',    icon: '⬡',  label: 'Social' },
      { id: 'schema',    icon: '{}', label: 'Schema' },
      { id: 'hreflang',  icon: '☸',  label: 'Hreflang' },
      { id: 'variants',  icon: '⬸',  label: 'Variants' },
    ],
  },
  {
    label: 'Technical',
    color: '#39d3ff',
    bg: 'rgba(57,211,255,0.12)',
    tabs: [
      { id: 'robots',    icon: '⊖',   label: 'Robots' },
      { id: 'redirects', icon: '⇕',   label: 'Redirect' },
      { id: 'images',    icon: '◇',   label: 'Images' },
      { id: 'inspector', icon: '△',   label: 'Inspector' },
      { id: 'source',    icon: '</>',  label: 'Source' },
      { id: 'render',    icon: '⟨⟩',  label: 'Render' },
    ],
  },
  {
    label: 'Netlinking',
    color: '#2dd4bf',
    bg: 'rgba(45,212,191,0.12)',
    tabs: [
      { id: 'links', icon: '⇄', label: 'Links' },
    ],
  },
  {
    label: 'Toolbox',
    color: '#facc15',
    bg: 'rgba(250,204,21,0.12)',
    tabs: [
      { id: 'vpn',        icon: '🌐', label: 'SERP VPN' },
      { id: 'tools',      icon: '⌘',  label: 'Tools' },
      { id: 'dorks',      icon: '⚙',  label: 'Dorks' },
      { id: 'useragent',  icon: '⬛',  label: 'UA' },
      { id: 'cookies',    icon: '🍪', label: 'Cookies' },
      { id: 'clearcache', icon: '♻',  label: 'Cache' },
      { id: 'glossary',   icon: '≡',  label: 'Lexique' },
      { id: 'report',     icon: '📋', label: 'Report' },
    ],
  },
]

/* ── Panel content ── */
function OverviewPanel() {
  return (
    <div className="p-2.5 flex flex-col gap-1.5 text-[9px]">
      {/* Score */}
      <div className="flex items-center justify-between bg-white/5 rounded-lg px-2.5 py-2 mb-0.5">
        <span className="text-white/50 font-semibold uppercase tracking-wider text-[8px]">SEO Score</span>
        <div className="flex items-center gap-1.5">
          <div className="h-1 w-20 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full w-[87%] rounded-full" style={{ background: 'linear-gradient(90deg,#22c55e,#a3e635)' }} />
          </div>
          <span className="font-bold text-sm" style={{ color: '#22c55e' }}>87</span>
        </div>
      </div>
      {/* Stat bar */}
      <div className="grid grid-cols-3 gap-1 mb-1">
        {[['H1s','1','#22c55e'],['H2s','4','#39d3ff'],['Imgs','12','#a78bfa']].map(([l,v,c])=>(
          <div key={l} className="bg-white/[0.04] rounded-md p-1.5 text-center">
            <div className="font-bold text-base" style={{color:c}}>{v}</div>
            <div className="text-white/30 text-[7px] uppercase tracking-wide">{l}</div>
          </div>
        ))}
      </div>
      {/* Fields */}
      {[
        { label: 'Title', value: 'SEO Swiss Knife — Chrome Extension', chars: '38', status: 'good' },
        { label: 'Description', value: 'The most complete on-page SEO toolkit...', chars: '62', status: 'good' },
        { label: 'Canonical', value: 'https://example.com/', status: 'good' },
        { label: 'Robots', value: 'index, follow', status: 'good' },
        { label: 'Viewport', value: 'width=device-width, initial-scale=1', status: 'good' },
        { label: 'H1', value: '1 found — ✓ Unique', status: 'good' },
        { label: 'Schema', value: '3 types (WebSite, Org, FAQ)', status: 'good' },
        { label: 'OG Image', value: '/og-image.jpg (1200×630)', status: 'good' },
      ].map((f) => (
        <div key={f.label} className="bg-white/[0.04] rounded-md px-2 py-1.5 flex items-start gap-1.5">
          <span
            className="w-1.5 h-1.5 rounded-full mt-0.5 flex-shrink-0"
            style={{ background: f.status === 'good' ? '#22c55e' : '#ef4444' }}
          />
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <span className="text-white/40 uppercase tracking-wide text-[7px] font-semibold">{f.label}</span>
              {f.chars && (
                <span className="text-[7px] px-1 rounded" style={{ background: 'rgba(34,197,94,0.15)', color: '#22c55e' }}>
                  {f.chars} chars
                </span>
              )}
            </div>
            <span className="text-white/70 truncate block text-[8px] mt-0.5">{f.value}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

function HeadingsPanel() {
  const headings = [
    { level: 'H1', text: 'SEO Swiss Knife — The Complete Chrome Extension', color: '#9ec890' },
    { level: 'H2', text: 'Features Overview', color: '#7ab8c8' },
    { level: 'H3', text: 'Page Meta Audit', color: '#c8a96e' },
    { level: 'H3', text: 'Schema Inspector', color: '#c8a96e' },
    { level: 'H2', text: 'How It Works', color: '#7ab8c8' },
    { level: 'H3', text: 'Install in one click', color: '#c8a96e' },
    { level: 'H3', text: 'Open the side panel', color: '#c8a96e' },
    { level: 'H2', text: 'FAQ', color: '#7ab8c8' },
  ]
  return (
    <div className="p-2.5 flex flex-col gap-1">
      <div className="flex items-center justify-between bg-white/5 rounded px-2 py-1.5 mb-1">
        <span className="text-white/40 text-[7px] uppercase tracking-wide">8 headings found</span>
        <span className="text-[7px] px-1.5 rounded" style={{ background: 'rgba(34,197,94,0.15)', color: '#22c55e' }}>Valid structure ✓</span>
      </div>
      {headings.map((h, i) => (
        <div
          key={i}
          className="flex items-center gap-1.5 px-1.5 py-1 rounded"
          style={{ paddingLeft: h.level === 'H1' ? 6 : h.level === 'H2' ? 14 : 22 }}
        >
          <span className="text-[7px] font-black px-1 rounded flex-shrink-0" style={{ background: `${h.color}30`, color: h.color }}>{h.level}</span>
          <span className="text-white/60 text-[8px] truncate">{h.text}</span>
        </div>
      ))}
    </div>
  )
}

function SchemaPanel() {
  return (
    <div className="p-2.5 flex flex-col gap-1.5">
      <div className="flex items-center gap-2 bg-white/5 rounded-lg px-2 py-1.5">
        <span className="text-[#a78bfa] font-bold text-sm">3</span>
        <span className="text-white/50 text-[8px]">Schema types detected</span>
      </div>
      {[
        { type: 'WebSite', props: 5, valid: true, detail: 'name, url, potentialAction...' },
        { type: 'Organization', props: 8, valid: true, detail: 'name, logo, sameAs, address...' },
        { type: 'FAQPage', props: 3, valid: true, detail: '6 Q&A pairs' },
        { type: 'BreadcrumbList', props: 3, valid: false, detail: 'Missing @id on ListItem' },
      ].map((s) => (
        <div key={s.type} className="bg-white/[0.04] rounded-md px-2 py-2">
          <div className="flex items-center justify-between mb-0.5">
            <span className="text-[#a78bfa] font-bold text-[9px]">{s.type}</span>
            <span
              className="text-[7px] px-1.5 py-0.5 rounded font-semibold"
              style={{ background: s.valid ? 'rgba(34,197,94,0.15)' : 'rgba(239,68,68,0.15)', color: s.valid ? '#22c55e' : '#ef4444' }}
            >
              {s.valid ? 'Valid' : 'Error'}
            </span>
          </div>
          <div className="text-white/30 text-[7px]">{s.props} props · {s.detail}</div>
        </div>
      ))}
    </div>
  )
}

function RedirectPanel() {
  const hops = [
    { code: 301, url: 'http://example.com/old-page', label: 'Moved Permanently', ms: 42 },
    { code: 301, url: 'https://example.com/old-page', label: 'Moved Permanently', ms: 38 },
    { code: 200, url: 'https://www.example.com/new-page/', label: 'OK — Final destination', ms: 210 },
  ]
  return (
    <div className="p-2.5 flex flex-col gap-1.5">
      <div className="bg-white/5 rounded-lg px-2 py-1.5 text-white/50 text-[8px] mb-1">
        2 redirects · Total 290ms · Final 200 ✓
      </div>
      {hops.map((h, i) => (
        <React.Fragment key={i}>
          <div className="flex overflow-hidden rounded-md border border-white/10">
            <div
              className="flex flex-col items-center justify-center px-2 py-2 min-w-[38px]"
              style={{ background: h.code === 200 ? 'rgba(34,197,94,0.3)' : 'rgba(250,204,21,0.3)' }}
            >
              <span className="font-bold text-white text-sm leading-none">{h.code}</span>
              <span className="text-white/60 text-[7px] mt-0.5">{h.ms}ms</span>
            </div>
            <div className="flex-1 bg-white/[0.03] px-2 py-2">
              <p className="text-[#39d3ff] truncate text-[8px]">{h.url}</p>
              <p className="text-white/40 text-[7px] mt-0.5">{h.label}</p>
            </div>
          </div>
          {i < hops.length - 1 && (
            <div className="text-center text-white/20 text-[10px]">↓</div>
          )}
        </React.Fragment>
      ))}
    </div>
  )
}

function ImagesPanel() {
  const imgs = [
    { src: '/hero-banner.webp', alt: 'SEO hero image', dims: '1200×630', size: '42kb', fmt: 'webp', ok: true },
    { src: '/logo.png',         alt: '',               dims: '200×60',   size: '8kb',  fmt: 'png',  ok: false },
    { src: '/feature-1.jpg',    alt: 'Feature screen', dims: '800×500',  size: '120kb',fmt: 'jpg',  ok: true },
    { src: '/icon-seo.svg',     alt: 'SEO icon',       dims: '24×24',    size: '1kb',  fmt: 'svg',  ok: true },
    { src: '/bg-texture.png',   alt: '',               dims: '1920×1080',size: '340kb',fmt: 'png',  ok: false },
  ]
  return (
    <div className="p-2.5 flex flex-col gap-1">
      <div className="flex items-center justify-between bg-white/5 rounded-lg px-2 py-1.5 mb-1">
        <span className="text-white/50 text-[8px]">5 images</span>
        <span className="text-[7px] px-1.5 rounded font-semibold" style={{ background: 'rgba(250,204,21,0.15)', color: '#facc15' }}>2 missing alt</span>
      </div>
      {imgs.map((img) => (
        <div key={img.src} className="flex items-start gap-2 bg-white/[0.04] rounded-md px-2 py-1.5">
          <div className="w-5 h-5 rounded bg-white/10 flex items-center justify-center text-[8px] text-white/30 flex-shrink-0 mt-0.5">◇</div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <p className="text-[#39d3ff] truncate text-[8px]">{img.src}</p>
              <span className="text-[6px] uppercase ml-1 px-1 rounded" style={{ background: 'rgba(57,211,255,0.1)', color: '#39d3ff' }}>{img.fmt}</span>
            </div>
            <p className="text-white/30 text-[7px]">{img.dims} · {img.size}</p>
            {img.ok
              ? <p className="text-white/40 text-[7px] truncate">{img.alt}</p>
              : <p className="text-[7px] font-semibold" style={{ color: '#facc15' }}>⚠ Missing alt text</p>
            }
          </div>
        </div>
      ))}
    </div>
  )
}

function ReportPanel() {
  const cats = [
    { name: 'Indexability', score: 95, color: '#22c55e' },
    { name: 'On-Page',      score: 82, color: '#22c55e' },
    { name: 'Structure',    score: 90, color: '#22c55e' },
    { name: 'Technical',    score: 75, color: '#facc15' },
    { name: 'Schema',       score: 88, color: '#22c55e' },
    { name: 'Social',       score: 60, color: '#f97316' },
    { name: 'Links',        score: 70, color: '#facc15' },
    { name: 'Images',       score: 55, color: '#ef4444' },
  ]
  return (
    <div className="p-2.5 flex flex-col gap-1.5">
      <div className="flex items-center justify-between bg-white/5 rounded-lg px-2.5 py-2 mb-1">
        <span className="text-white/50 text-[8px] uppercase tracking-wide font-semibold">Overall Score</span>
        <span className="font-black text-lg" style={{ color: '#22c55e' }}>77</span>
      </div>
      {cats.map((c) => (
        <div key={c.name} className="flex items-center gap-2">
          <span className="text-white/50 text-[7px] w-16 flex-shrink-0">{c.name}</span>
          <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full rounded-full" style={{ width: `${c.score}%`, background: c.color }} />
          </div>
          <span className="text-[8px] font-bold w-6 text-right" style={{ color: c.color }}>{c.score}</span>
        </div>
      ))}
      <button className="mt-2 w-full py-1.5 rounded-lg text-[8px] font-bold uppercase tracking-wider" style={{ background: 'rgba(167,139,250,0.2)', color: '#a78bfa' }}>
        Export PDF Report
      </button>
    </div>
  )
}

const DEFAULT_PANELS: Partial<Record<MockupTab, React.ReactNode>> = {
  overview:  <OverviewPanel />,
  headings:  <HeadingsPanel />,
  schema:    <SchemaPanel />,
  redirects: <RedirectPanel />,
  images:    <ImagesPanel />,
  report:    <ReportPanel />,
}

function GenericPanel({ tab }: { tab: MockupTab }) {
  const labels: Partial<Record<MockupTab, string>> = {
    social: 'Social Preview',
    hreflang: 'Hreflang Auditor',
    variants: 'URL Variants',
    robots: 'Robots & Crawl',
    inspector: 'CSS Inspector',
    source: 'Source Code',
    render: 'JS Render Diff',
    links: 'Link Audit',
    vpn: 'SERP VPN',
    tools: 'SERP Tools',
    dorks: 'Google Dorks',
    useragent: 'User Agent',
    cookies: 'Cookie Editor',
    clearcache: 'Cache Cleaner',
    glossary: 'SEO Glossary',
  }
  return (
    <div className="flex flex-col items-center justify-center h-full p-6 gap-3">
      <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl" style={{ background: 'rgba(255,255,255,0.05)' }}>
        {GROUPS.flatMap(g => g.tabs).find(t => t.id === tab)?.icon ?? '◉'}
      </div>
      <span className="text-white/40 text-[10px] text-center">{labels[tab] ?? tab}</span>
    </div>
  )
}

interface ExtensionMockupProps {
  activeTab?: MockupTab
}

export function ExtensionMockup({ activeTab = 'overview' }: ExtensionMockupProps) {
  const activeGroup = GROUPS.find(g => g.tabs.some(t => t.id === activeTab))

  return (
    <div
      className="rounded-2xl overflow-hidden shadow-2xl select-none flex-shrink-0"
      style={{
        width: 280,
        background: '#040D1A',
        border: '1px solid rgba(255,255,255,0.08)',
        boxShadow: '0 32px 64px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05)',
        fontFamily: "'Geist Sans', system-ui, sans-serif",
      }}
    >
      {/* Gradient stripe */}
      <div className="h-[3px] w-full" style={{ background: 'linear-gradient(90deg, #a78bfa, #39d3ff, #2dd4bf, #facc15, #a78bfa)', backgroundSize: '200% 100%' }} />

      {/* Header */}
      <div className="flex items-center gap-2 px-3 py-2 border-b border-white/[0.06]">
        <div className="w-3 h-3 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: activeGroup?.color ?? '#39d3ff' }} />
        </div>
        <span className="text-[9px] font-black tracking-wider uppercase" style={{ background: 'linear-gradient(90deg, #39d3ff, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          SEO Swiss Knife
        </span>
        <div className="ml-auto flex items-center gap-1">
          <span className="text-[7px] px-1.5 py-0.5 rounded-full font-semibold" style={{ background: 'rgba(34,197,94,0.15)', color: '#22c55e' }}>Allowed</span>
        </div>
      </div>

      {/* Body */}
      <div className="flex" style={{ minHeight: 420 }}>
        {/* Sidebar */}
        <div className="flex flex-col border-r border-white/[0.06] overflow-y-auto py-1" style={{ width: 56, background: '#020617', scrollbarWidth: 'none' }}>
          {GROUPS.map((group) => (
            <div key={group.label}>
              <div className="px-1.5 pt-2 pb-0.5">
                <span className="text-[6px] font-black uppercase tracking-wider" style={{ color: group.color, opacity: 0.7 }}>
                  {group.label.slice(0, 4)}
                </span>
              </div>
              {group.tabs.map((t) => {
                const isActive = t.id === activeTab
                return (
                  <div
                    key={t.id}
                    className="flex flex-col items-center gap-0.5 py-1.5 px-1 relative"
                    style={{
                      borderLeft: isActive ? `2px solid ${group.color}` : '2px solid transparent',
                      background: isActive ? `${group.bg}` : 'transparent',
                    }}
                  >
                    <span className="text-[11px]" style={{ color: isActive ? group.color : 'rgba(255,255,255,0.25)' }}>
                      {t.icon}
                    </span>
                    <span className="text-[6px] font-semibold uppercase tracking-wide leading-tight text-center" style={{ color: isActive ? group.color : 'rgba(255,255,255,0.2)' }}>
                      {t.label}
                    </span>
                  </div>
                )
              })}
            </div>
          ))}
          {/* Settings */}
          <div className="mt-auto border-t border-white/[0.06] pt-1">
            <div className="flex flex-col items-center gap-0.5 py-1.5 px-1">
              <span className="text-[11px] text-white/20">⚙</span>
              <span className="text-[6px] text-white/20 uppercase tracking-wide">Settings</span>
            </div>
          </div>
        </div>

        {/* Panel content */}
        <div className="flex-1 overflow-hidden">
          {DEFAULT_PANELS[activeTab] ?? <GenericPanel tab={activeTab} />}
        </div>
      </div>
    </div>
  )
}
