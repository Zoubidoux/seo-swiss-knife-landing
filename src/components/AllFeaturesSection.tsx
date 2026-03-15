import { useState, useMemo, useRef, useEffect } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/i18n/index'

const ALL_FEATURES = [
  { cat: 'Semantic', icon: '◉',  title: 'Page Overview', desc: 'Title, meta description, canonical URL, robots, viewport, charset — scored and flagged in real-time.' },
  { cat: 'Semantic', icon: '📏', title: 'Title & Description Length', desc: 'Character count badges with good/warn/bad thresholds (SEO-optimal ranges).' },
  { cat: 'Semantic', icon: '🔗', title: 'Canonical URL Checker', desc: 'Detect self-referencing canonicals, cross-domain canonicals, and missing canonical tags.' },
  { cat: 'Semantic', icon: '🤖', title: 'Robots Meta Tag', desc: 'Parse noindex, nofollow, noarchive, noimageindex, unavailable_after and all robot directives.' },
  { cat: 'Semantic', icon: '¶',  title: 'Heading Hierarchy Audit', desc: 'Visual H1–H6 tree. Detect missing H1, multiple H1s, and heading level skips.' },
  { cat: 'Semantic', icon: '⬡',  title: 'Open Graph Preview', desc: 'Live OG image, title, description, and site name exactly as Facebook and LinkedIn see it.' },
  { cat: 'Semantic', icon: '🐦', title: 'Twitter Card Preview', desc: 'Twitter summary_large_image and app card preview with real image rendering.' },
  { cat: 'Semantic', icon: '💬', title: 'WhatsApp & Messaging Preview', desc: 'Preview link unfurls for WhatsApp and messaging apps using og: and twitter: tags.' },
  { cat: 'Semantic', icon: '{}', title: 'JSON-LD Schema Extractor', desc: 'Extract, expand, and validate all JSON-LD blocks with syntax highlighting.' },
  { cat: 'Semantic', icon: '🔠', title: 'Microdata & RDFa Extractor', desc: 'Parse Microdata and RDFa structured data in addition to JSON-LD.' },
  { cat: 'Semantic', icon: '⚠', title: 'Schema Property Validator', desc: 'Property-level error flags — missing required fields, wrong data types, invalid URLs.' },
  { cat: 'Semantic', icon: '☸',  title: 'Hreflang Tag Parser', desc: 'List all hreflang and x-default tags with language/region codes.' },
  { cat: 'Semantic', icon: '🔄', title: 'Hreflang Return Link Checker', desc: 'Verify that each alternate URL links back correctly (reciprocal hreflang).' },
  { cat: 'Semantic', icon: '🌍', title: 'Hreflang Language Validator', desc: 'Detect malformed language codes (en-gb vs en-GB, fr-fr vs fr-FR) and missing x-default.' },
  { cat: 'Semantic', icon: '⬸',  title: 'URL Variants Checker', desc: 'www/non-www, HTTP/HTTPS, trailing slash, and case variants — consolidated into canonical.' },
  { cat: 'Technical', icon: '⊖', title: 'Robots.txt Viewer', desc: 'Fetch and display the robots.txt with rule highlighting and crawl directive analysis.' },
  { cat: 'Technical', icon: '📡', title: 'X-Robots-Tag Header', desc: 'Inspect the X-Robots-Tag HTTP response header — often overrides meta robots.' },
  { cat: 'Technical', icon: '🔒', title: 'HTTPS Detection', desc: 'Confirm HTTPS protocol, detect mixed content warnings, and HTTP→HTTPS redirect presence.' },
  { cat: 'Technical', icon: '⇕',  title: 'Redirect Chain Tracer', desc: 'Full hop-by-hop chain with status codes (301, 302, 307, 308…), response times, and loop detection.' },
  { cat: 'Technical', icon: '⏱',  title: 'Redirect Response Times', desc: 'Measure latency per hop to identify slow redirects that waste crawl budget.' },
  { cat: 'Technical', icon: '◇',  title: 'Image Alt Text Audit', desc: 'Flag every image missing alt text — the #1 image SEO error on the web.' },
  { cat: 'Technical', icon: '📐', title: 'Image Dimensions Checker', desc: 'Detect oversized images being served at 1920px but rendered at 200px.' },
  { cat: 'Technical', icon: '🖼',  title: 'Image Format Audit', desc: 'Identify JPEG/PNG images that should be converted to WebP or AVIF for speed.' },
  { cat: 'Technical', icon: '💾', title: 'Image Size Checker', desc: 'Flag images larger than SEO-recommended thresholds (e.g. >200kb).' },
  { cat: 'Technical', icon: '📦', title: 'Image ZIP Export', desc: 'Download all images on the page as a single ZIP file.' },
  { cat: 'Technical', icon: '📊', title: 'Image CSV Export', desc: 'Export a spreadsheet of all images: src, alt, dimensions, size, format.' },
  { cat: 'Technical', icon: '△',  title: 'CSS Inspector', desc: 'Click any element on the page and inspect its computed CSS without opening DevTools.' },
  { cat: 'Technical', icon: '</>', title: 'Source Code Viewer', desc: 'View raw HTML source with syntax highlighting — compare with rendered DOM.' },
  { cat: 'Technical', icon: '⟨⟩', title: 'JS Render Comparison', desc: 'Before/after JavaScript execution diff to spot crawler-invisible content.' },
  { cat: 'Technical', icon: '📸', title: 'Viewport Screenshot', desc: 'Capture a pixel-perfect screenshot of the visible viewport in one click.' },
  { cat: 'Technical', icon: '📜', title: 'Full Page Screenshot', desc: 'Scroll-capture the entire page as a single PNG image — including content below the fold.' },
  { cat: 'Netlinking', icon: '🔗', title: 'Full Link Listing', desc: 'Every internal and external link: URL, anchor text, status code.' },
  { cat: 'Netlinking', icon: '⛔', title: 'Nofollow Link Detection', desc: 'Highlight all rel="nofollow" links at a glance.' },
  { cat: 'Netlinking', icon: '💰', title: 'Sponsored & UGC Tags', desc: 'Detect rel="sponsored" and rel="ugc" link attributes.' },
  { cat: 'Netlinking', icon: '📤', title: 'External Link Audit', desc: 'Separate internal vs external links, identify outgoing followed links.' },
  { cat: 'Netlinking', icon: '📥', title: 'Link CSV Export', desc: 'Export the full link list with all attributes as a CSV file.' },
  { cat: 'Netlinking', icon: '🖱',  title: 'Link Grabber', desc: 'Ctrl/Cmd+drag to collect links from the page into a clipboard list.' },
  { cat: 'Netlinking', icon: '▣',  title: 'Text Grabber', desc: 'Select any text on page to copy or Google-search it instantly.' },
  { cat: 'Toolbox', icon: '🌐', title: 'SERP VPN Geo-Simulation', desc: 'Simulate Google searches from 50+ countries without routing real traffic through a VPN.' },
  { cat: 'Toolbox', icon: '📱', title: 'Device Simulation', desc: 'Preview SERP and page from any device: Googlebot Mobile, iPhone, Android.' },
  { cat: 'Toolbox', icon: '⌘',  title: 'Google Dork Operators', desc: 'Pre-built site:, inurl:, intitle:, cache:, related: operators for instant power-user searches.' },
  { cat: 'Toolbox', icon: '🔎', title: 'Duplicate Content Checker', desc: 'Detect pages that Google may be treating as duplicate content via search operators.' },
  { cat: 'Toolbox', icon: '⚡', title: 'PageSpeed Insights Link', desc: 'One-click PageSpeed Insights for the current URL.' },
  { cat: 'Toolbox', icon: '✅', title: 'Rich Results Tester', desc: 'Open Google Rich Results Test for the current URL in one click.' },
  { cat: 'Toolbox', icon: '📊', title: 'Open in Ahrefs / SEMRush / Moz', desc: 'Jump to Ahrefs, SEMRush, Moz, Majestic, or SimilarWeb for the current domain instantly.' },
  { cat: 'Toolbox', icon: '🍪', title: 'Cookie View / Edit / Delete', desc: 'Full cookie manager: view values, edit, add new cookies, or nuke all at once.' },
  { cat: 'Toolbox', icon: '📤', title: 'Cookie Export / Import', desc: 'Save and restore cookie sets — great for testing geo or consent variations.' },
  { cat: 'Toolbox', icon: '♻',  title: 'Cache & Storage Cleaner', desc: 'Clear cache, cookies, localStorage, sessionStorage — by time range or all at once.' },
  { cat: 'Toolbox', icon: '⬛', title: 'User Agent Switcher', desc: 'Googlebot Desktop, Googlebot Mobile, Bingbot, or any custom UA string.' },
  { cat: 'Toolbox', icon: '≡',  title: 'SEO Glossary (150+ terms)', desc: 'Plain-language definitions for every SEO concept — no browser tab needed.' },
  { cat: 'Toolbox', icon: '📋', title: 'Weighted SEO Report', desc: 'Scored audit across 8 categories (Indexability, On-Page, Technical, Schema, Social, Speed, Links, Images).' },
  { cat: 'Toolbox', icon: '📄', title: 'PDF Report Export', desc: 'Export the full SEO audit as a professional PDF — client-ready in 10 seconds.' },
  { cat: 'Toolbox', icon: '🔗', title: 'Shareable Report URL', desc: 'Open the report in a standalone tab to share with clients or teammates.' },
  { cat: 'Toolbar', icon: '🔴', title: 'JavaScript Toggle', desc: 'Disable JS with one click to see your page as crawlers see it during indexing.' },
  { cat: 'Toolbar', icon: '📱', title: 'Mobile Device Preview', desc: 'View any page in an accurate phone/tablet frame without a real device.' },
  { cat: 'Toolbar', icon: '🎨', title: 'Color Picker', desc: 'Pick any color from the page. Returns HEX, RGB, and HSL values instantly.' },
  { cat: 'Toolbar', icon: '◻',  title: 'Transparent Overlay Mode', desc: 'Make the extension semi-transparent to view the page behind it.' },
  { cat: 'Toolbar', icon: '◑',  title: 'Light / Dark Theme', desc: 'Toggle between the light and dark UI theme at any time.' },
  { cat: 'Toolbar', icon: '⌨',  title: 'Keyboard Shortcuts', desc: 'Full keyboard navigation — every tab accessible with a configurable shortcut.' },
  { cat: 'Toolbar', icon: '⚙',  title: 'Configurable Sidebar', desc: 'Hide any tabs you don\'t use. Set your default landing tab. Stays across sessions.' },
  { cat: 'Toolbar', icon: '📐', title: 'Side Panel Mode', desc: 'Runs as a Chrome Side Panel — stays open while you browse, no popup needed.' },
  { cat: 'Toolbar', icon: '🔪', title: 'Context Menu Integration', desc: '30+ SEO actions available from the browser right-click menu — fully configurable.' },
]

const CATS = [
  { key: 'All',        label: 'All',        labelFr: 'Tout',       color: '#a78bfa', bg: 'rgba(139,92,246,0.12)', border: 'rgba(139,92,246,0.25)' },
  { key: 'Semantic',   label: 'Semantic',   labelFr: 'Sémantique', color: '#a78bfa', bg: 'rgba(139,92,246,0.08)', border: 'rgba(139,92,246,0.18)' },
  { key: 'Technical',  label: 'Technical',  labelFr: 'Technique',  color: '#38bdf8', bg: 'rgba(56,189,248,0.08)', border: 'rgba(56,189,248,0.18)' },
  { key: 'Netlinking', label: 'Netlinking', labelFr: 'Netlinking', color: '#34d399', bg: 'rgba(52,211,153,0.08)', border: 'rgba(52,211,153,0.18)' },
  { key: 'Toolbox',    label: 'Toolbox',    labelFr: 'Outils',     color: '#fbbf24', bg: 'rgba(251,191,36,0.08)', border: 'rgba(251,191,36,0.18)'  },
  { key: 'Toolbar',    label: 'Toolbar',    labelFr: 'Toolbar',    color: '#f97316', bg: 'rgba(249,115,22,0.08)', border: 'rgba(249,115,22,0.18)'  },
]

export function AllFeaturesSection() {
  const { lang } = useLanguage()
  const t = translations[lang].allFeatures
  const [search, setSearch] = useState('')
  const [active, setActive] = useState('All')
  const searchRef = useRef<HTMLDivElement>(null)
  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    const el = searchRef.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => setSticky(!e.isIntersecting), { threshold: 1, rootMargin: '-80px 0px 0px 0px' })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const activeCat = CATS.find(c => c.key === active) ?? CATS[0]

  const filtered = useMemo(() => {
    const q = search.toLowerCase()
    return ALL_FEATURES.filter(f => {
      const matchCat = active === 'All' || f.cat === active
      const matchQ = !q || f.title.toLowerCase().includes(q) || f.desc.toLowerCase().includes(q)
      return matchCat && matchQ
    })
  }, [search, active])

  // Group by category when showing All
  const grouped = useMemo(() => {
    if (active !== 'All' || search) return null
    const map: Record<string, typeof ALL_FEATURES> = {}
    ALL_FEATURES.forEach(f => { if (!map[f.cat]) map[f.cat] = []; map[f.cat].push(f) })
    return map
  }, [active, search])

  return (
    <section className="relative bg-background py-20 sm:py-28 px-4 sm:px-6">
      {/* Subtle bg glow */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(109,40,217,0.07) 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <p className="text-center text-xs font-bold tracking-widest uppercase mb-4"
          style={{ color: '#a78bfa' }}>{t.eyebrow}</p>
        <h2 className="text-center font-bold bg-clip-text text-transparent mb-3 tracking-tight"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', backgroundImage: 'linear-gradient(135deg, #f0f0f2 0%, #a78bfa 100%)' }}>
          {t.headline}
        </h2>
        <p className="text-center text-base mb-10 max-w-lg mx-auto" style={{ color: 'rgba(255,255,255,0.45)' }}>
          {t.sub}
        </p>

        {/* Search + filters — anchor for sticky detection */}
        <div ref={searchRef} />
        <div className={`sticky top-[72px] z-20 pb-4 transition-all ${sticky ? 'pt-3' : ''}`}
          style={{ background: sticky ? 'rgba(8,4,24,0.92)' : 'transparent', backdropFilter: sticky ? 'blur(16px)' : 'none', borderBottom: sticky ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>

          {/* Search */}
          <div className="relative mb-4 max-w-lg mx-auto">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm" style={{ color: 'rgba(255,255,255,0.3)' }}>🔍</span>
            <input type="text" placeholder={t.placeholder} value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl text-sm outline-none focus:ring-1"
              style={{
                background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.09)',
                color: '#f0f0f2', '--tw-ring-color': '#a78bfa',
              } as React.CSSProperties} />
          </div>

          {/* Category tabs */}
          <div className="flex flex-wrap justify-center gap-2">
            {CATS.map(c => {
              const isA = c.key === active
              const label = lang === 'fr' ? c.labelFr : c.label
              const count = c.key === 'All' ? ALL_FEATURES.length : ALL_FEATURES.filter(f => f.cat === c.key).length
              return (
                <button key={c.key} onClick={() => setActive(c.key)}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all"
                  style={{
                    background: isA ? c.bg : 'rgba(255,255,255,0.03)',
                    border: `1px solid ${isA ? c.border : 'rgba(255,255,255,0.07)'}`,
                    color: isA ? c.color : 'rgba(255,255,255,0.40)',
                    transform: isA ? 'scale(1.05)' : 'scale(1)',
                  }}>
                  {label}
                  <span className="text-[10px] px-1.5 py-0.5 rounded-full font-bold"
                    style={{ background: isA ? `${c.color}25` : 'rgba(255,255,255,0.06)', color: isA ? c.color : 'rgba(255,255,255,0.3)' }}>
                    {count}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Result count */}
        <p className="text-center text-xs mt-5 mb-8" style={{ color: 'rgba(255,255,255,0.3)' }}>
          {filtered.length} {lang === 'fr' ? 'fonctionnalités' : 'features'}
          {search && <span> — "{search}"</span>}
        </p>

        {/* GROUPED view (All + no search) */}
        {grouped ? (
          <div className="space-y-12">
            {CATS.slice(1).map(cat => {
              const items = grouped[cat.key] ?? []
              return (
                <div key={cat.key}>
                  {/* Category header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="h-px flex-1" style={{ background: `linear-gradient(90deg, ${cat.color}40, transparent)` }} />
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold"
                      style={{ background: cat.bg, border: `1px solid ${cat.border}`, color: cat.color }}>
                      {lang === 'fr' ? cat.labelFr : cat.label}
                      <span className="opacity-60">{items.length}</span>
                    </div>
                    <div className="h-px flex-1" style={{ background: `linear-gradient(270deg, ${cat.color}40, transparent)` }} />
                  </div>
                  {/* Grid */}
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                    {items.map(f => (
                      <FeatureCard key={f.title} f={f} color={cat.color} bg={cat.bg} border={cat.border} />
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          /* FLAT view (filtered / search) */
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {filtered.map(f => {
              const cat = CATS.find(c => c.key === f.cat) ?? CATS[1]
              return <FeatureCard key={f.title} f={f} color={cat.color} bg={cat.bg} border={cat.border} />
            })}
          </div>
        )}
      </div>
    </section>
  )
}

function FeatureCard({ f, color, bg, border }: {
  f: { icon: string; title: string; desc: string }
  color: string; bg: string; border: string
}) {
  return (
    <div className="group rounded-xl p-3.5 flex gap-3 transition-all cursor-default"
      style={{
        background: 'rgba(255,255,255,0.025)',
        border: `1px solid rgba(255,255,255,0.06)`,
      }}
      onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = bg; (e.currentTarget as HTMLDivElement).style.borderColor = border }}
      onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.025)'; (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.06)' }}>
      <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm flex-shrink-0 mt-0.5 transition-all"
        style={{ background: bg, color, border: `1px solid ${border}` }}>
        {f.icon}
      </div>
      <div>
        <h4 className="font-semibold text-sm leading-tight mb-1" style={{ color: '#f0f0f2' }}>{f.title}</h4>
        <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>{f.desc}</p>
      </div>
    </div>
  )
}
