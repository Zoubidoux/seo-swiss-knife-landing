import { useState, useRef } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/i18n/index'

type TabId = 'overview' | 'headings' | 'schema' | 'redirects' | 'images' | 'report'

const TABS: { id: TabId; icon: string; label: string; group: string; color: string }[] = [
  { id: 'overview',  icon: '◉',  label: 'Overview',  group: 'SEM', color: '#a78bfa' },
  { id: 'headings',  icon: '¶',  label: 'Headings',  group: 'SEM', color: '#a78bfa' },
  { id: 'schema',    icon: '{}', label: 'Schema',    group: 'SEM', color: '#a78bfa' },
  { id: 'redirects', icon: '⇕',  label: 'Redirect',  group: 'TECH', color: '#39d3ff' },
  { id: 'images',    icon: '◇',  label: 'Images',    group: 'TECH', color: '#39d3ff' },
  { id: 'report',    icon: '📋', label: 'Report',    group: 'TOOL', color: '#facc15' },
]

const TAB_TOUR: TabId[] = ['overview', 'headings', 'schema', 'redirects', 'images', 'report']

/* ── Panel content per tab ── */
function OverviewContent() {
  return (
    <div className="p-2 flex flex-col gap-1 text-[9px]">
      <div className="flex items-center justify-between bg-white/5 rounded px-2 py-1.5 mb-0.5">
        <span className="text-white/40 font-semibold uppercase tracking-wider text-[7px]">SEO Score — dior.com</span>
        <div className="flex items-center gap-1.5">
          <div className="h-1 w-16 bg-white/10 rounded-full overflow-hidden"><div className="h-full w-[82%] rounded-full" style={{ background: 'linear-gradient(90deg,#22c55e,#a3e635)' }} /></div>
          <span className="font-bold text-sm" style={{ color: '#22c55e' }}>82</span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-1 mb-1">
        {[['H1s','1','#22c55e'],['H2s','6','#39d3ff'],['Imgs','14','#a78bfa']].map(([l,v,c])=>(
          <div key={l} className="bg-white/[0.04] rounded p-1.5 text-center">
            <div className="font-bold text-sm" style={{color:c as string}}>{v}</div>
            <div className="text-white/30 text-[6px] uppercase tracking-wide">{l}</div>
          </div>
        ))}
      </div>
      {[
        { l:'Title', v:'DIOR | Official Website — Haute Couture & Fashion', ok:true },
        { l:'Canonical', v:'https://www.dior.com/en_us', ok:true },
        { l:'Robots', v:'index, follow', ok:true },
        { l:'H1', v:'The Art of Living by Dior', ok:true },
        { l:'Hreflang', v:'38 tags — 2 missing x-default ⚠', ok:false },
        { l:'OG Image', v:'/assets/og-dior-2026.jpg (1200×630)', ok:true },
      ].map(f=>(
        <div key={f.l} className="bg-white/[0.03] rounded px-2 py-1 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{background: f.ok?'#22c55e':'#facc15'}} />
          <span className="text-white/30 text-[6px] uppercase w-12 flex-shrink-0">{f.l}</span>
          <span className="text-white/60 truncate text-[7.5px]">{f.v}</span>
        </div>
      ))}
    </div>
  )
}

function HeadingsContent() {
  const hs = [
    { lv:'H1', t:'The Art of Living by Dior', c:'#9ec890', i:0 },
    { lv:'H2', t:'Spring — Summer 2026', c:'#7ab8c8', i:1 },
    { lv:'H2', t:'Lady Dior — Iconic Handbags', c:'#7ab8c8', i:1 },
    { lv:'H3', t:'Cannage Collection', c:'#c8a96e', i:2 },
    { lv:'H3', t:'New Arrivals 2026', c:'#c8a96e', i:2 },
    { lv:'H2', t:'Sauvage — Fragrance', c:'#7ab8c8', i:1 },
    { lv:'H2', t:'Men\'s Collection', c:'#7ab8c8', i:1 },
  ]
  return (
    <div className="p-2 flex flex-col gap-1">
      <div className="flex items-center justify-between bg-white/5 rounded px-2 py-1.5 mb-1">
        <span className="text-white/40 text-[7px] uppercase">7 headings — dior.com</span>
        <span className="text-[6px] px-1.5 rounded" style={{ background:'rgba(34,197,94,0.15)', color:'#22c55e' }}>Valid ✓</span>
      </div>
      {hs.map((h,i)=>(
        <div key={i} className="flex items-center gap-1.5 px-1.5 py-1 rounded" style={{paddingLeft:6+h.i*8}}>
          <span className="text-[6px] font-black px-1 rounded flex-shrink-0" style={{background:`${h.c}25`,color:h.c}}>{h.lv}</span>
          <span className="text-white/55 text-[7.5px] truncate">{h.t}</span>
        </div>
      ))}
    </div>
  )
}

function SchemaContent() {
  return (
    <div className="p-2 flex flex-col gap-1.5">
      <div className="flex items-center gap-2 bg-white/5 rounded px-2 py-1.5">
        <span className="text-[#a78bfa] font-bold text-sm">3</span>
        <span className="text-white/40 text-[7.5px]">Schema types — dior.com</span>
      </div>
      {[
        { type:'Organization', props:8, valid:true, detail:'name, logo, sameAs, address...' },
        { type:'WebSite', props:4, valid:true, detail:'name, url, potentialAction' },
        { type:'BreadcrumbList', props:3, valid:false, detail:'Missing @id on 2 ListItems ⚠' },
      ].map(s=>(
        <div key={s.type} className="bg-white/[0.04] rounded px-2 py-1.5">
          <div className="flex items-center justify-between mb-0.5">
            <span className="text-[#a78bfa] font-bold text-[8.5px]">{s.type}</span>
            <span className="text-[6px] px-1.5 rounded font-semibold" style={{background:s.valid?'rgba(34,197,94,0.15)':'rgba(250,204,21,0.15)',color:s.valid?'#22c55e':'#facc15'}}>{s.valid?'Valid':'Warning'}</span>
          </div>
          <div className="text-white/30 text-[6.5px]">{s.props} props · {s.detail}</div>
        </div>
      ))}
    </div>
  )
}

function RedirectContent() {
  const hops = [
    { code:301, url:'http://dior.com/product-2024', ms:38, label:'Moved Permanently' },
    { code:301, url:'https://dior.com/product-2024', ms:29, label:'HTTPS upgrade' },
    { code:200, url:'https://www.dior.com/en_us/product-2024', ms:198, label:'Final destination ✓' },
  ]
  return (
    <div className="p-2 flex flex-col gap-1.5">
      <div className="bg-white/5 rounded px-2 py-1.5 text-white/40 text-[7.5px] mb-0.5">2 redirects · 265ms total · Final 200 ✓</div>
      {hops.map((h,i)=>(
        <>
          <div key={i} className="flex rounded overflow-hidden border border-white/10">
            <div className="flex flex-col items-center justify-center px-2 py-1.5 min-w-[34px]" style={{background:h.code===200?'rgba(34,197,94,0.25)':'rgba(250,204,21,0.2)'}}>
              <span className="font-bold text-white text-xs">{h.code}</span>
              <span className="text-white/50 text-[6px]">{h.ms}ms</span>
            </div>
            <div className="flex-1 bg-white/[0.02] px-2 py-1.5">
              <p className="text-[#39d3ff] truncate text-[7.5px]">{h.url}</p>
              <p className="text-white/35 text-[6.5px] mt-0.5">{h.label}</p>
            </div>
          </div>
          {i<hops.length-1 && <div key={`a-${i}`} className="text-center text-white/20 text-[9px]">↓</div>}
        </>
      ))}
    </div>
  )
}

function ImagesContent() {
  const imgs = [
    { src:'/ss26-hero.webp', alt:'Spring Summer 2026 hero', dims:'1920×1080', size:'86kb', ok:true },
    { src:'/lady-dior.webp', alt:'Lady Dior bag', dims:'800×800', size:'44kb', ok:true },
    { src:'/sauvage.jpg', alt:'', dims:'600×600', size:'62kb', ok:false },
    { src:'/logo-white.svg', alt:'Dior logo', dims:'120×40', size:'2kb', ok:true },
    { src:'/bg-couture.png', alt:'', dims:'1920×1080', size:'312kb', ok:false },
  ]
  return (
    <div className="p-2 flex flex-col gap-1">
      <div className="flex items-center justify-between bg-white/5 rounded px-2 py-1.5 mb-0.5">
        <span className="text-white/40 text-[7px]">14 images on page</span>
        <span className="text-[6px] px-1.5 rounded font-semibold" style={{background:'rgba(250,204,21,0.15)',color:'#facc15'}}>3 missing alt</span>
      </div>
      {imgs.map(img=>(
        <div key={img.src} className="flex items-start gap-2 bg-white/[0.03] rounded px-1.5 py-1">
          <div className="w-4 h-4 rounded bg-white/10 flex items-center justify-center text-[7px] text-white/30 flex-shrink-0 mt-0.5">◇</div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <p className="text-[#39d3ff] truncate text-[7.5px]">{img.src}</p>
              <span className="text-[5.5px] ml-1 px-0.5 rounded" style={{background:'rgba(57,211,255,0.1)',color:'#39d3ff'}}>{img.dims.split('×')[0]}px</span>
            </div>
            {img.ok
              ? <p className="text-white/35 text-[6.5px] truncate">{img.alt} · {img.size}</p>
              : <p className="text-[6.5px] font-semibold" style={{color:'#facc15'}}>⚠ No alt · {img.size}</p>
            }
          </div>
        </div>
      ))}
    </div>
  )
}

function ReportContent() {
  const cats = [
    { name:'Indexability', score:98, c:'#22c55e' },
    { name:'On-Page', score:84, c:'#22c55e' },
    { name:'Technical', score:79, c:'#facc15' },
    { name:'Schema', score:91, c:'#22c55e' },
    { name:'Social', score:72, c:'#facc15' },
    { name:'Images', score:58, c:'#f97316' },
    { name:'Links', score:85, c:'#22c55e' },
  ]
  return (
    <div className="p-2 flex flex-col gap-1.5">
      <div className="flex items-center justify-between bg-white/5 rounded px-2 py-1.5 mb-0.5">
        <span className="text-white/40 text-[7px] uppercase font-semibold">Overall — dior.com</span>
        <span className="font-black text-lg" style={{color:'#22c55e'}}>82</span>
      </div>
      {cats.map(c=>(
        <div key={c.name} className="flex items-center gap-2">
          <span className="text-white/40 text-[6.5px] w-14 flex-shrink-0">{c.name}</span>
          <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full rounded-full" style={{width:`${c.score}%`,background:c.c}} />
          </div>
          <span className="text-[7px] font-bold w-5 text-right" style={{color:c.c}}>{c.score}</span>
        </div>
      ))}
      <button className="mt-1.5 w-full py-1.5 rounded text-[7px] font-bold uppercase tracking-wider" style={{background:'rgba(167,139,250,0.15)',color:'#a78bfa'}}>
        Export PDF Report
      </button>
    </div>
  )
}

const PANEL_CONTENT: Record<TabId, React.ReactNode> = {
  overview: <OverviewContent />,
  headings: <HeadingsContent />,
  schema: <SchemaContent />,
  redirects: <RedirectContent />,
  images: <ImagesContent />,
  report: <ReportContent />,
}

/* ── Dior page CSS mock ── */
function DiorPage() {
  return (
    <div className="relative flex-1 overflow-hidden select-none" style={{ background: '#080808', minWidth: 0 }}>
      {/* Top nav */}
      <div className="flex items-center justify-between px-5 py-2.5 border-b border-white/[0.07]">
        <div className="flex gap-4">
          {['Collections','Beauty','Watches','Men','Home'].map(l=>(
            <span key={l} className="text-[9px] text-white/30 uppercase tracking-[0.15em] font-light">{l}</span>
          ))}
        </div>
        <div className="flex items-center gap-1">
          <span className="text-white font-serif text-base tracking-[0.35em] uppercase font-medium">DIOR</span>
        </div>
        <div className="flex gap-3">
          {['Search','Account','Bag (2)'].map(l=>(
            <span key={l} className="text-[9px] text-white/30 uppercase tracking-widest">{l}</span>
          ))}
        </div>
      </div>

      {/* Hero image area — luxury fashion CSS art */}
      <div className="relative overflow-hidden" style={{ height: 200 }}>
        {/* Dark fashion background */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(160deg, #14090e 0%, #200d18 35%, #080610 65%, #030208 100%)' }} />
        {/* Warm light leak */}
        <div className="absolute" style={{ right: '15%', top: 0, bottom: 0, width: '45%', background: 'linear-gradient(180deg, rgba(190,140,80,0.08) 0%, rgba(190,140,80,0.04) 50%, transparent 100%)' }} />
        {/* Fashion silhouette suggestion */}
        <div className="absolute" style={{ right: '22%', top: '5%', width: 60, height: 185, background: 'linear-gradient(180deg, rgba(180,130,70,0.12) 0%, rgba(180,130,70,0.06) 60%, transparent 100%)', borderRadius: '40% 40% 20% 20%', filter: 'blur(1px)' }} />
        <div className="absolute" style={{ right: '26%', top: '8%', width: 2, height: 150, background: 'rgba(200,155,90,0.18)', borderRadius: 1 }} />
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.5) 0px, rgba(255,255,255,0.5) 1px, transparent 1px, transparent 4px)' }} />
        <div className="absolute inset-0 flex flex-col justify-end pb-6 px-6">
          <p className="text-[7px] text-white/25 uppercase tracking-[0.45em] mb-1.5 font-light">Spring — Summer 2026</p>
          <h2 className="text-white font-serif text-xl tracking-wider font-light leading-tight mb-2.5" style={{ fontStyle: 'italic', textShadow: '0 2px 20px rgba(0,0,0,0.8)' }}>
            The Art of Living<br />by Dior
          </h2>
          <button className="self-start text-[8px] uppercase tracking-[0.2em] px-3.5 py-1.5 border border-white/30 text-white/60">
            Discover the Collection
          </button>
        </div>
        {/* Gradient overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-8" style={{ background: 'linear-gradient(transparent, rgba(8,8,8,0.7))' }} />
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-3 gap-px mt-px" style={{ background: '#111' }}>
        {[
          { bg: 'linear-gradient(145deg, #180d12, #0c0816)', label: 'Lady Dior', sub: 'Handbags', accent: 'rgba(180,130,80,0.1)' },
          { bg: 'linear-gradient(145deg, #0a1018, #060b14)', label: 'Sauvage', sub: 'Fragrance', accent: 'rgba(80,140,200,0.1)' },
          { bg: 'linear-gradient(145deg, #14100c, #0a0808)', label: 'Dior Beauty', sub: 'Makeup', accent: 'rgba(200,100,120,0.1)' },
        ].map(({ bg, label, sub, accent }) => (
          <div key={label} className="relative overflow-hidden" style={{ height: 72, background: bg }}>
            <div className="absolute inset-0" style={{ background: `radial-gradient(circle at 50% 20%, ${accent} 0%, transparent 70%)` }} />
            <div className="absolute bottom-2 left-2.5">
              <p className="text-white text-[8px] font-semibold tracking-wide">{label}</p>
              <p className="text-white/25 text-[6.5px] uppercase tracking-widest">{sub}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Content hint rows */}
      <div className="px-5 py-3 flex flex-col gap-1">
        {['Featured Editorial', 'New Arrivals — Cruise 2026', 'Dior Hôtel de la Lumière'].map(t => (
          <div key={t} className="flex items-center justify-between py-1.5 border-b border-white/[0.05]">
            <span className="text-[8px] text-white/25 uppercase tracking-widest">{t}</span>
            <span className="text-[7px] text-white/15">→</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function VideoSection() {
  const { lang } = useLanguage()
  const t = translations[lang].video
  const [started, setStarted] = useState(false)
  const [activeTab, setActiveTab] = useState<TabId>('overview')
  const [touring, setTouring] = useState(false)
  const tourRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  function startTour() {
    setStarted(true)
    setTouring(true)
    let idx = 0
    function next() {
      idx++
      if (idx >= TAB_TOUR.length) { setTouring(false); return }
      setActiveTab(TAB_TOUR[idx])
      tourRef.current = setTimeout(next, 1800)
    }
    setActiveTab(TAB_TOUR[0])
    tourRef.current = setTimeout(next, 1800)
  }

  function clickTab(id: TabId) {
    if (tourRef.current) clearTimeout(tourRef.current)
    setTouring(false)
    setActiveTab(id)
  }

  const activeTabData = TABS.find(t => t.id === activeTab)!

  return (
    <section className="relative bg-background py-20 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
      <div className="absolute pointer-events-none" style={{ inset: 0, background: 'radial-gradient(ellipse 60% 40% at 50% 100%, rgba(124,58,237,0.1) 0%, transparent 70%)' }} />

      <div className="max-w-5xl mx-auto flex flex-col items-center gap-10">
        <div className="text-center flex flex-col gap-3">
          <p className="text-sm font-semibold tracking-widest uppercase text-primary">{t.eyebrow}</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight">{t.headline}</h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto leading-relaxed">{t.sub}</p>
        </div>

        {/* Browser frame */}
        <div className="w-full relative">
          <div className="absolute -inset-8 rounded-3xl blur-3xl opacity-12 pointer-events-none" style={{ background: 'radial-gradient(ellipse, #7c3aed 0%, transparent 70%)' }} />

          <div className="relative rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.09)', boxShadow: '0 32px 80px rgba(0,0,0,0.75)' }}>
            {/* Browser top bar */}
            <div className="flex items-center gap-2 px-4 py-2.5" style={{ background: '#0a0f18', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <div className="flex-1 mx-2 flex items-center gap-2 bg-white/[0.05] rounded-md px-3 py-1.5">
                <span className="text-[9px] text-white/20">🔒</span>
                <span className="text-[10px] text-white/40 flex-1">https://www.dior.com/en_us</span>
                {touring && <span className="text-[8px] animate-pulse" style={{ color: '#39d3ff' }}>Analysing…</span>}
              </div>
              {/* Extension in toolbar */}
              <div className="flex items-center gap-1.5 flex-shrink-0 px-2 py-1 rounded" style={{ background: 'rgba(167,139,250,0.12)', border: '1px solid rgba(167,139,250,0.2)' }}>
                <img src="/src/assets/icon.png" alt="" className="w-4 h-4" style={{ imageRendering: 'pixelated' }} />
                <span className="text-[9px] font-bold" style={{ color: '#a78bfa' }}>SSK</span>
                <span className="text-[8px] font-black px-1 rounded-full" style={{ background: '#facc15', color: '#000' }}>3</span>
              </div>
            </div>

            {/* Main: site + extension panel side-by-side */}
            <div className="flex" style={{ minHeight: 430 }}>
              <DiorPage />

              {/* Extension panel */}
              {started && (
                <div className="flex-shrink-0 flex" style={{ width: 220, borderLeft: '1px solid rgba(255,255,255,0.07)' }}>
                  {/* Tab sidebar */}
                  <div className="flex flex-col border-r border-white/[0.06] py-1" style={{ width: 48, background: '#020814' }}>
                    {TABS.map((tab) => {
                      const isActive = tab.id === activeTab
                      return (
                        <button
                          key={tab.id}
                          onClick={() => clickTab(tab.id)}
                          className="flex flex-col items-center gap-0.5 py-1.5 px-0.5 transition-all duration-150 cursor-pointer border-0 bg-transparent"
                          style={{
                            borderLeft: isActive ? `2px solid ${tab.color}` : '2px solid transparent',
                            background: isActive ? `${tab.color}14` : 'transparent',
                          }}
                        >
                          <span className="text-[11px]" style={{ color: isActive ? tab.color : 'rgba(255,255,255,0.2)' }}>{tab.icon}</span>
                          <span className="text-[5.5px] font-bold uppercase tracking-wide" style={{ color: isActive ? tab.color : 'rgba(255,255,255,0.18)' }}>{tab.label}</span>
                        </button>
                      )
                    })}
                  </div>

                  {/* Panel content */}
                  <div className="flex-1 overflow-hidden" style={{ background: '#040D1A' }}>
                    {/* Panel header */}
                    <div className="h-[3px]" style={{ background: 'linear-gradient(90deg, #a78bfa, #39d3ff, #2dd4bf)' }} />
                    <div className="flex items-center justify-between px-2 py-1.5 border-b border-white/[0.06]">
                      <span className="text-[7.5px] font-black" style={{ color: activeTabData.color }}>{activeTabData.label}</span>
                      <span className="text-[6px] px-1.5 py-0.5 rounded-full" style={{ background: 'rgba(34,197,94,0.12)', color: '#22c55e' }}>Allowed</span>
                    </div>
                    <div className="overflow-y-auto" style={{ maxHeight: 390, scrollbarWidth: 'none' }}>
                      {PANEL_CONTENT[activeTab]}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Start overlay */}
          {!started && (
            <div className="absolute inset-0 flex items-center justify-center rounded-2xl" style={{ background: 'rgba(4,8,20,0.55)', backdropFilter: 'blur(3px)' }}>
              <button onClick={startTour} className="flex flex-col items-center gap-3 group">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
                  style={{ background: 'rgba(167,139,250,0.2)', border: '2px solid rgba(167,139,250,0.4)', boxShadow: '0 0 40px rgba(124,58,237,0.5)' }}
                >
                  <span className="text-2xl ml-1">▶</span>
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-white/80">Watch the extension analyse Dior.com</p>
                  <p className="text-xs text-white/35 mt-0.5">Auto-tour all 6 tabs · Click any tab to explore</p>
                </div>
              </button>
            </div>
          )}
        </div>

        {/* Tab hint */}
        {started && (
          <div className="flex flex-wrap justify-center gap-2">
            {TABS.map(tab => (
              <button
                key={tab.id}
                onClick={() => clickTab(tab.id)}
                className="px-3 py-1 rounded-full text-xs font-medium transition-all"
                style={{
                  background: activeTab === tab.id ? `${tab.color}18` : 'rgba(255,255,255,0.04)',
                  color: activeTab === tab.id ? tab.color : 'rgba(255,255,255,0.4)',
                  border: `1px solid ${activeTab === tab.id ? `${tab.color}40` : 'rgba(255,255,255,0.07)'}`,
                }}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
