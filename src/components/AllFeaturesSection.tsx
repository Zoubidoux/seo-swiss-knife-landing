import { useState, useMemo } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/i18n/index'


const ALL_FEATURES = [
  // ─── Semantic ───────────────────────────────────────────────
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
  // ─── Technical ──────────────────────────────────────────────
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
  // ─── Netlinking ─────────────────────────────────────────────
  { cat: 'Netlinking', icon: '🔗', title: 'Full Link Listing', desc: 'Every internal and external link: URL, anchor text, status code.' },
  { cat: 'Netlinking', icon: '⛔', title: 'Nofollow Link Detection', desc: 'Highlight all rel="nofollow" links at a glance.' },
  { cat: 'Netlinking', icon: '💰', title: 'Sponsored & UGC Tags', desc: 'Detect rel="sponsored" and rel="ugc" link attributes.' },
  { cat: 'Netlinking', icon: '📤', title: 'External Link Audit', desc: 'Separate internal vs external links, identify outgoing followed links.' },
  { cat: 'Netlinking', icon: '📥', title: 'Link CSV Export', desc: 'Export the full link list with all attributes as a CSV file.' },
  { cat: 'Netlinking', icon: '🖱',  title: 'Link Grabber', desc: 'Ctrl/Cmd+drag to collect links from the page into a clipboard list.' },
  { cat: 'Netlinking', icon: '▣',  title: 'Text Grabber', desc: 'Select any text on page to copy or Google-search it instantly.' },
  // ─── Toolbox ────────────────────────────────────────────────
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
  // ─── Toolbar ────────────────────────────────────────────────
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

const CAT_COLORS: Record<string, string> = {
  Semantic:   '#a78bfa',
  Technique:  '#39d3ff',
  Technical:  '#39d3ff',
  Netlinking: '#2dd4bf',
  Toolbox:    '#facc15',
  Outils:     '#facc15',
  Toolbar:    '#f97316',
}

export function AllFeaturesSection() {
  const { lang } = useLanguage()
  const t = translations[lang].allFeatures
  const [search, setSearch] = useState('')
  const [activeFilter, setActiveFilter] = useState<string>('All')

  const categories = lang === 'fr'
    ? [t.all, 'Sémantique', 'Technique', 'Netlinking', 'Outils', 'Toolbar']
    : [t.all, 'Semantic', 'Technical', 'Netlinking', 'Toolbox', 'Toolbar']

  const filtered = useMemo(() => {
    const q = search.toLowerCase()
    return ALL_FEATURES.filter((f) => {
      const matchSearch = !q || f.title.toLowerCase().includes(q) || f.desc.toLowerCase().includes(q) || f.cat.toLowerCase().includes(q)
      const matchFilter = activeFilter === t.all || f.cat === activeFilter
        || (activeFilter === 'Sémantique' && f.cat === 'Semantic')
        || (activeFilter === 'Technique'  && f.cat === 'Technical')
        || (activeFilter === 'Outils'     && f.cat === 'Toolbox')
      return matchSearch && matchFilter
    })
  }, [search, activeFilter, t.all])

  return (
    <section className="bg-background py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <p className="text-center text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-5">
          {t.eyebrow}
        </p>
        <h2
          className="text-center text-4xl md:text-5xl font-semibold bg-clip-text text-transparent mb-3 tracking-tight"
          style={{ backgroundImage: 'linear-gradient(135deg, #e8e8e9 0%, #a78bfa 100%)' }}
        >
          {t.headline}
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-10 max-w-lg mx-auto">{t.sub}</p>

        {/* Search */}
        <div className="relative mb-6 max-w-xl mx-auto">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">🔍</span>
          <input
            type="text"
            placeholder={t.placeholder}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl text-sm text-foreground placeholder-muted-foreground outline-none focus:ring-2"
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          />
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => {
            const isActive = cat === activeFilter
            const color = cat === t.all ? '#a78bfa' : CAT_COLORS[cat] ?? '#a78bfa'
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className="px-4 py-1.5 rounded-full text-sm font-medium transition-all"
                style={{
                  background: isActive ? `${color}20` : 'rgba(255,255,255,0.04)',
                  color: isActive ? color : 'rgba(255,255,255,0.5)',
                  border: `1px solid ${isActive ? `${color}50` : 'rgba(255,255,255,0.08)'}`,
                }}
              >
                {cat}
              </button>
            )
          })}
        </div>

        {/* Count */}
        <p className="text-center text-muted-foreground text-xs mb-8 tracking-wide">
          {filtered.length} {lang === 'fr' ? 'fonctionnalités' : 'features'}
        </p>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {filtered.map((f) => {
            const color = CAT_COLORS[f.cat] ?? '#a78bfa'
            return (
              <div
                key={f.title}
                className="liquid-glass rounded-xl p-4 flex gap-3 hover:bg-white/[0.03] transition-colors cursor-default"
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-sm flex-shrink-0 mt-0.5"
                  style={{ background: `${color}18`, color }}
                >
                  {f.icon}
                </div>
                <div>
                  <p className="text-foreground font-semibold text-sm leading-tight">{f.title}</p>
                  <p className="text-muted-foreground text-xs mt-1 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
