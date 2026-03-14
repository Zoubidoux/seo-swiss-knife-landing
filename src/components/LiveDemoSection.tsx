import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

type SiteKey = 'dior' | 'apple' | 'shopify' | 'lemonde' | 'custom'

const PRESETS: { key: SiteKey; label: string; url: string; flag: string }[] = [
  { key: 'dior',    label: 'Dior',     url: 'dior.com/en_us',       flag: '🇫🇷' },
  { key: 'apple',   label: 'Apple',    url: 'apple.com',             flag: '🇺🇸' },
  { key: 'shopify', label: 'Shopify',  url: 'shopify.com',           flag: '🇨🇦' },
  { key: 'lemonde', label: 'Le Monde', url: 'lemonde.fr',            flag: '🇫🇷' },
]

const SITE_DATA: Record<SiteKey, {
  score: number
  scoreColor: string
  title: string
  canonical: string
  h1: string
  schema: string
  issues: string[]
  goods: string[]
  fields: { label: string; value: string; status: 'good' | 'warn' | 'bad' }[]
}> = {
  dior: {
    score: 82, scoreColor: '#22c55e',
    title: 'DIOR | Official Website — Haute Couture & Fashion',
    canonical: 'https://www.dior.com/en_us',
    h1: 'The Art of Living by Dior',
    schema: 'Organization, WebSite, BreadcrumbList',
    goods: ['HTTPS + valid canonical', 'H1 unique and present', 'robots: index, follow'],
    issues: ['3 images missing alt text', '2 hreflang tags missing x-default', 'OG description too short (48 chars)'],
    fields: [
      { label: 'Title',       value: 'DIOR | Official Website — Haute Couture & Fashion', status: 'good' },
      { label: 'Description', value: 'Discover the latest Dior collections, fashion shows and...', status: 'warn' },
      { label: 'Canonical',   value: 'https://www.dior.com/en_us', status: 'good' },
      { label: 'Robots',      value: 'index, follow', status: 'good' },
      { label: 'H1',          value: 'The Art of Living by Dior', status: 'good' },
      { label: 'Hreflang',    value: '38 tags — 2 missing x-default ⚠', status: 'warn' },
      { label: 'Schema',      value: 'Organization, WebSite, BreadcrumbList', status: 'good' },
      { label: 'Images',      value: '14 images — 3 missing alt ⚠', status: 'warn' },
    ],
  },
  apple: {
    score: 96, scoreColor: '#22c55e',
    title: 'Apple',
    canonical: 'https://www.apple.com/',
    h1: 'iPhone 17 Pro. Hello, Apple Intelligence.',
    schema: 'WebSite, Organization, ItemList',
    goods: ['Perfect title length', 'All images have alt text', 'Schema valid — no errors'],
    issues: ['No hreflang tags detected', 'H2 hierarchy skip on product pages'],
    fields: [
      { label: 'Title',       value: 'Apple', status: 'good' },
      { label: 'Description', value: 'Discover the innovative world of Apple and shop...', status: 'good' },
      { label: 'Canonical',   value: 'https://www.apple.com/', status: 'good' },
      { label: 'Robots',      value: 'index, follow', status: 'good' },
      { label: 'H1',          value: 'iPhone 17 Pro. Hello, Apple Intelligence.', status: 'good' },
      { label: 'Hreflang',    value: 'None detected — international pages?', status: 'warn' },
      { label: 'Schema',      value: 'WebSite, Organization — valid ✓', status: 'good' },
      { label: 'Core Web',    value: 'LCP 1.2s · CLS 0.02 · INP 48ms', status: 'good' },
    ],
  },
  shopify: {
    score: 88, scoreColor: '#22c55e',
    title: 'Shopify — Build your business',
    canonical: 'https://www.shopify.com/',
    h1: 'The commerce platform for entrepreneurs',
    schema: 'WebSite, Organization, SoftwareApplication, FAQPage',
    goods: ['Rich schema — 4 types valid', 'Perfect meta description', 'Hreflang on all 20 locales'],
    issues: ['Title 42 chars — below optimal 50+', '1 broken link detected in footer'],
    fields: [
      { label: 'Title',       value: 'Shopify — Build your business', status: 'warn' },
      { label: 'Description', value: 'Millions of the world\'s most successful brands trust...', status: 'good' },
      { label: 'Canonical',   value: 'https://www.shopify.com/', status: 'good' },
      { label: 'H1',          value: 'The commerce platform for entrepreneurs', status: 'good' },
      { label: 'Hreflang',    value: '20 locales — x-default present ✓', status: 'good' },
      { label: 'Schema',      value: 'WebSite, Org, SoftwareApp, FAQPage', status: 'good' },
      { label: 'Links',       value: '142 links — 1 broken ⚠', status: 'warn' },
      { label: 'Images',      value: '22 images — all have alt text ✓', status: 'good' },
    ],
  },
  lemonde: {
    score: 71, scoreColor: '#facc15',
    title: 'Le Monde — Actualités et infos en direct',
    canonical: 'https://www.lemonde.fr/',
    h1: 'L\'actualité en direct',
    schema: 'NewsArticle, WebSite, Organization',
    goods: ['News schema present', 'HTTPS valid', 'robots.txt well-structured'],
    issues: ['Missing OG image on some articles', 'Duplicate H1 on home + category', 'Large JS bundle (2.4MB) affects Crawl Budget'],
    fields: [
      { label: 'Title',       value: 'Le Monde.fr - Actualités et Infos en France et dans le monde', status: 'warn' },
      { label: 'Description', value: 'Retrouvez toute l\'actualité en direct et en continu...', status: 'good' },
      { label: 'Canonical',   value: 'https://www.lemonde.fr/', status: 'good' },
      { label: 'H1',          value: 'L\'actualité en direct — 2 found ⚠', status: 'warn' },
      { label: 'Schema',      value: 'NewsArticle, WebSite, Org — valid ✓', status: 'good' },
      { label: 'OG Image',    value: 'Missing on 3 article types ⚠', status: 'warn' },
      { label: 'PageSpeed',   value: 'LCP 3.8s ⚠ · CLS 0.18 ⚠', status: 'bad' },
      { label: 'Images',      value: '31 images — 7 missing alt ⚠', status: 'warn' },
    ],
  },
  custom: {
    score: 0, scoreColor: '#a78bfa',
    title: '', canonical: '', h1: '', schema: '',
    goods: [], issues: [],
    fields: [],
  },
}

export function LiveDemoSection() {
  const { lang } = useLanguage()
  const [active, setActive] = useState<SiteKey>('dior')
  const [input, setInput] = useState('')
  const [analyzing, setAnalyzing] = useState(false)
  const [analysisStep, setAnalysisStep] = useState(8)

  function selectPreset(key: SiteKey) {
    setActive(key)
    setAnalysisStep(0)
    setAnalyzing(true)
    setTimeout(() => { setAnalyzing(false); setAnalysisStep(8) }, 1400)
  }

  const data = SITE_DATA[active]

  return (
    <section className="relative bg-background py-28 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]" style={{ backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
      <div className="absolute" style={{ inset: 0, background: 'radial-gradient(ellipse 50% 40% at 50% 0%, rgba(57,211,255,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <p className="text-center text-sm font-semibold tracking-widest uppercase mb-5" style={{ color: '#39d3ff' }}>
          {lang === 'fr' ? 'Demo Interactif' : 'Live Demo'}
        </p>
        <h2
          className="text-center text-4xl md:text-5xl font-semibold bg-clip-text text-transparent mb-4 tracking-tight"
          style={{ backgroundImage: 'linear-gradient(135deg, #e8e8e9 0%, #39d3ff 100%)' }}
        >
          {lang === 'fr' ? 'Testez-le sur n\'importe quel site' : 'Try it on any website'}
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-12 max-w-xl mx-auto">
          {lang === 'fr'
            ? 'Sélectionnez un site pour voir ce que l\'extension détecterait en conditions réelles.'
            : 'Select a site to see what the extension would detect in real conditions.'}
        </p>

        {/* Preset selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {PRESETS.map((p) => (
            <button
              key={p.key}
              onClick={() => selectPreset(p.key)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200"
              style={{
                background: active === p.key ? 'rgba(57,211,255,0.12)' : 'rgba(255,255,255,0.04)',
                color: active === p.key ? '#39d3ff' : 'rgba(255,255,255,0.45)',
                border: `1px solid ${active === p.key ? 'rgba(57,211,255,0.35)' : 'rgba(255,255,255,0.08)'}`,
              }}
            >
              <span>{p.flag}</span>
              <span>{p.label}</span>
            </button>
          ))}
        </div>

        {/* Main panel */}
        <div className="liquid-glass rounded-2xl overflow-hidden" style={{ boxShadow: '0 32px 80px rgba(0,0,0,0.5)' }}>
          {/* URL bar */}
          <div className="flex items-center gap-3 px-5 py-3 border-b border-white/[0.06]" style={{ background: 'rgba(255,255,255,0.02)' }}>
            <div className="flex gap-1.5 flex-shrink-0">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
            </div>
            <div className="flex-1 flex items-center gap-2 rounded-lg px-3 py-1.5" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <span className="text-[10px] text-white/30">🔒</span>
              <span className="text-[11px] text-white/50">https://www.{active !== 'custom' ? PRESETS.find(p => p.key === active)?.url : (input || 'yoursite.com')}</span>
              {analyzing && <span className="ml-auto text-[9px] animate-pulse" style={{ color: '#39d3ff' }}>Scanning…</span>}
            </div>
            <div className="flex items-center gap-1.5 flex-shrink-0">
              <div className="w-5 h-5 rounded flex items-center justify-center text-[9px]" style={{ background: 'rgba(167,139,250,0.2)', color: '#a78bfa' }}>🔪</div>
              <span className="text-[9px] font-bold" style={{ color: '#a78bfa' }}>SEO Swiss Knife</span>
            </div>
          </div>

          {/* Content area */}
          <div className="flex flex-col md:flex-row" style={{ minHeight: 380 }}>
            {/* Left: findings list */}
            <div className="flex-1 p-6 flex flex-col gap-4">
              {/* Score */}
              <div className="flex items-center gap-4 p-4 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="text-center">
                  <div className="font-black text-4xl" style={{ color: data.scoreColor }}>{analyzing ? '…' : data.score}</div>
                  <div className="text-[9px] text-white/30 uppercase tracking-wider mt-0.5">SEO Score</div>
                </div>
                <div className="flex-1">
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden mb-2">
                    <div className="h-full rounded-full transition-all duration-700" style={{ width: analyzing ? '10%' : `${data.score}%`, background: `linear-gradient(90deg, ${data.scoreColor}, #a78bfa)` }} />
                  </div>
                  <div className="flex gap-3 flex-wrap">
                    <span className="text-[10px]" style={{ color: '#22c55e' }}>✓ {data.goods.length} passed</span>
                    <span className="text-[10px]" style={{ color: '#facc15' }}>⚠ {data.issues.length} warnings</span>
                  </div>
                </div>
              </div>

              {/* Fields */}
              <div className="grid gap-1.5">
                {(analyzing ? [] : data.fields.slice(0, analysisStep)).map((f) => (
                  <div key={f.label} className="flex items-center gap-3 px-3 py-2 rounded-lg" style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: f.status === 'good' ? '#22c55e' : f.status === 'warn' ? '#facc15' : '#ef4444' }} />
                    <span className="text-[10px] font-semibold text-white/40 uppercase tracking-wide w-20 flex-shrink-0">{f.label}</span>
                    <span className="text-[11px] text-white/65 truncate">{f.value}</span>
                  </div>
                ))}
                {analyzing && (
                  <div className="flex items-center gap-2 px-3 py-3 rounded-lg" style={{ background: 'rgba(57,211,255,0.05)', border: '1px solid rgba(57,211,255,0.15)' }}>
                    <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#39d3ff' }} />
                    <span className="text-[11px]" style={{ color: '#39d3ff' }}>Analyzing page…</span>
                  </div>
                )}
              </div>
            </div>

            {/* Right: issues + goods */}
            <div className="md:w-72 p-6 border-t md:border-t-0 md:border-l border-white/[0.06] flex flex-col gap-5">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: '#22c55e' }}>✓ {lang === 'fr' ? 'Points forts' : 'Passed'}</p>
                <div className="flex flex-col gap-2">
                  {(analyzing ? [] : data.goods).map((g) => (
                    <div key={g} className="flex items-start gap-2">
                      <span className="mt-0.5 text-[10px]" style={{ color: '#22c55e' }}>✓</span>
                      <span className="text-[11px] text-white/60 leading-relaxed">{g}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: '#facc15' }}>⚠ {lang === 'fr' ? 'À corriger' : 'Issues found'}</p>
                <div className="flex flex-col gap-2">
                  {(analyzing ? [] : data.issues).map((issue) => (
                    <div key={issue} className="flex items-start gap-2">
                      <span className="mt-0.5 text-[10px]" style={{ color: '#facc15' }}>⚠</span>
                      <span className="text-[11px] text-white/60 leading-relaxed">{issue}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-auto pt-4 border-t border-white/[0.06]">
                <p className="text-[10px] text-white/30 mb-3 leading-relaxed">
                  {lang === 'fr'
                    ? 'Installez l\'extension pour analyser n\'importe quelle page en conditions réelles.'
                    : 'Install the extension to analyse any real page instantly.'}
                </p>
                <button className="w-full py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all hover:opacity-90" style={{ background: 'linear-gradient(135deg, rgba(167,139,250,0.25), rgba(57,211,255,0.25))', color: '#e8e8e9', border: '1px solid rgba(167,139,250,0.3)' }}>
                  {lang === 'fr' ? 'Installer gratuitement →' : 'Install for Free →'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Custom URL input */}
        <div className="mt-6 flex items-center gap-3 max-w-lg mx-auto">
          <input
            type="text"
            placeholder={lang === 'fr' ? 'Entrez votre URL…' : 'Enter your URL…'}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 px-4 py-3 rounded-xl text-sm text-foreground placeholder-muted-foreground outline-none focus:ring-1 focus:ring-white/20"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
          />
          <button
            className="px-5 py-3 rounded-xl text-sm font-bold uppercase tracking-wider flex-shrink-0 opacity-50 cursor-not-allowed"
            style={{ background: 'rgba(167,139,250,0.15)', color: '#a78bfa', border: '1px solid rgba(167,139,250,0.3)' }}
            title={lang === 'fr' ? 'Disponible après installation' : 'Available after install'}
          >
            {lang === 'fr' ? 'Analyser' : 'Analyze'}
          </button>
        </div>
        <p className="text-center text-muted-foreground text-xs mt-2">
          {lang === 'fr' ? '🔒 Pour analyser votre propre site, installez l\'extension Chrome' : '🔒 To analyse your own site, install the Chrome extension'}
        </p>
      </div>
    </section>
  )
}
