import { useState, useEffect } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/i18n/index'
import { PixelHeart } from '@/components/PixelHeart'


type SiteKey = 'dior' | 'apple' | 'shopify' | 'lemonde'

const PRESETS: { key: SiteKey; label: string; url: string; flag: string; industry: string }[] = [
  { key: 'dior',    label: 'Dior',     url: 'dior.com/en_us',  flag: '🇫🇷', industry: 'Luxury Fashion' },
  { key: 'apple',   label: 'Apple',    url: 'apple.com',        flag: '🇺🇸', industry: 'Tech' },
  { key: 'shopify', label: 'Shopify',  url: 'shopify.com',      flag: '🇨🇦', industry: 'SaaS' },
  { key: 'lemonde', label: 'Le Monde', url: 'lemonde.fr',       flag: '🇫🇷', industry: 'News' },
]

type FieldStatus = 'good' | 'warn' | 'bad'
const SITE_DATA: Record<SiteKey, {
  score: number; scoreColor: string
  pageBg: string; pageAccent: string
  navItems: string[]; brand: string; heroTitle: string; heroCopy: string
  fields: { label: string; value: string; status: FieldStatus }[]
  goods: string[]; issues: string[]
  activeTab: string
}> = {
  dior: {
    score: 82, scoreColor: '#16A34A',
    pageBg: '#FFFFFF', pageAccent: 'rgba(0,0,0,0.02)',
    navItems: ['Collections','Beauty','Watches','Men'], brand: 'DIOR',
    heroTitle: 'The Art of Living by Dior', heroCopy: 'Spring — Summer 2026',
    fields: [
      { label: 'Title',    value: 'DIOR | Official Website — Haute Couture & Fashion', status: 'good' },
      { label: 'Canonical',value: 'https://www.dior.com/en_us', status: 'good' },
      { label: 'H1',       value: 'The Art of Living by Dior', status: 'good' },
      { label: 'Schema',   value: 'Organization, WebSite, BreadcrumbList', status: 'good' },
      { label: 'Hreflang', value: '38 tags — 2 missing x-default ⚠', status: 'warn' },
      { label: 'Images',   value: '14 images — 3 missing alt ⚠', status: 'warn' },
    ],
    goods: ['HTTPS + canonical valid', 'H1 unique & present', '3 schema types detected'],
    issues: ['3 images missing alt', '2 hreflang missing x-default'],
    activeTab: 'Overview',
  },
  apple: {
    score: 96, scoreColor: '#16A34A',
    pageBg: '#FAFAFA', pageAccent: 'rgba(0,0,0,0.03)',
    navItems: ['Store','Mac','iPad','iPhone','Watch'], brand: 'apple',
    heroTitle: 'iPhone 17 Pro', heroCopy: 'Hello, Apple Intelligence.',
    fields: [
      { label: 'Title',    value: 'Apple', status: 'good' },
      { label: 'Canonical',value: 'https://www.apple.com/', status: 'good' },
      { label: 'H1',       value: 'iPhone 17 Pro. Hello, Apple Intelligence.', status: 'good' },
      { label: 'Schema',   value: 'WebSite, Organization — valid ✓', status: 'good' },
      { label: 'Hreflang', value: 'None detected ⚠', status: 'warn' },
      { label: 'Speed',    value: 'LCP 1.2s · CLS 0.02 · INP 48ms ✓', status: 'good' },
    ],
    goods: ['Perfect Core Web Vitals', 'All images have alt text', 'Schema valid — no errors'],
    issues: ['No hreflang tags detected', 'Title too short (5 chars)'],
    activeTab: 'Overview',
  },
  shopify: {
    score: 88, scoreColor: '#16A34A',
    pageBg: '#FFFFFF', pageAccent: 'rgba(0,0,0,0.02)',
    navItems: ['Products','Pricing','Blog','Partners'], brand: 'Shopify',
    heroTitle: 'The commerce platform for entrepreneurs', heroCopy: 'Build your business from anywhere.',
    fields: [
      { label: 'Title',    value: 'Shopify — Build your business', status: 'warn' },
      { label: 'Canonical',value: 'https://www.shopify.com/', status: 'good' },
      { label: 'H1',       value: 'The commerce platform for entrepreneurs', status: 'good' },
      { label: 'Schema',   value: 'WebSite, Org, SoftwareApp, FAQPage ✓', status: 'good' },
      { label: 'Hreflang', value: '20 locales — x-default present ✓', status: 'good' },
      { label: 'Links',    value: '142 links — 1 broken ⚠', status: 'warn' },
    ],
    goods: ['Rich schema — 4 types', 'Hreflang on 20 locales', 'Perfect meta description'],
    issues: ['Title too short (30 chars)', '1 broken link in footer'],
    activeTab: 'Overview',
  },
  lemonde: {
    score: 71, scoreColor: '#D97706',
    pageBg: '#FAFAFA', pageAccent: 'rgba(0,0,0,0.03)',
    navItems: ['International','Politique','Société','Économie'], brand: 'Le Monde',
    heroTitle: "L'actualité en direct", heroCopy: 'Retrouvez toute l\'info en continu.',
    fields: [
      { label: 'Title',    value: 'Le Monde.fr — Actualités et Infos en France et dans le monde', status: 'warn' },
      { label: 'H1',       value: "L'actualité en direct — 2 found ⚠", status: 'warn' },
      { label: 'Schema',   value: 'NewsArticle, WebSite, Org — valid ✓', status: 'good' },
      { label: 'OG Image', value: 'Missing on 3 article types ⚠', status: 'warn' },
      { label: 'Speed',    value: 'LCP 3.8s ⚠ · CLS 0.18 ⚠', status: 'bad' },
      { label: 'Images',   value: '31 images — 7 missing alt ⚠', status: 'warn' },
    ],
    goods: ['News schema present', 'HTTPS valid', 'robots.txt well-structured'],
    issues: ['Duplicate H1 on home', 'LCP 3.8s above threshold', '7 images missing alt'],
    activeTab: 'Overview',
  },
}

const SITE_SCREENSHOTS: Record<SiteKey, string> = {
  dior:    '/site-dior.jpg',
  apple:   '/site-apple.jpg',
  shopify: '/site-shopify.jpg',
  lemonde: '/site-lemonde.jpg',
}

function SiteMock({ site }: { site: SiteKey }) {
  return (
    <div className="flex-1 overflow-hidden select-none relative bg-white" style={{ minWidth: 0 }}>
      <img
        src={SITE_SCREENSHOTS[site]}
        alt={site}
        className="w-full h-full object-cover object-top opacity-90"
        style={{ display: 'block' }}
      />
      {/* subtle overlay to help extension panel pop */}
      <div className="absolute inset-y-0 right-0 w-12 pointer-events-none bg-gradient-to-r from-transparent to-white/10" />
    </div>
  )
}

function ExtensionPanel({ site, step }: { site: SiteKey; step: number }) {
  const d = SITE_DATA[site]
  const statusColor = (s: FieldStatus) => s === 'good' ? '#16A34A' : s === 'warn' ? '#D97706' : '#DC2626'

  return (
    <div className="flex-shrink-0 flex flex-col bg-white border-l border-black/5" style={{ width: 260 }}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-black/5 bg-[#F9F9FB]">
        <div className="flex items-center gap-2">
          <PixelHeart size={16} />
          <span className="text-[10px] font-black tracking-widest uppercase text-black/40">SEARCHTOOLBOX</span>
        </div>
        <span className="text-[8px] px-2 py-0.5 rounded-full font-black uppercase tracking-widest bg-green-100 text-green-700">Allowed</span>
      </div>

      {/* Mini tab bar */}
      <div className="flex border-b border-black/5 bg-white">
        {['Overview','Schema','Images'].map((tab, i) => (
          <div key={tab} className="flex-1 py-2 text-center text-[8px] uppercase tracking-[0.2em] font-black cursor-pointer transition-colors"
               style={{
                 color: i === 0 ? 'black' : 'rgba(0,0,0,0.2)',
                 borderBottom: i === 0 ? '2px solid black' : '2px solid transparent'
               }}>
            {tab}
          </div>
        ))}
      </div>

      {/* Score */}
      <div className="flex items-center gap-4 px-4 py-6 border-b border-black/5">
        <div>
          <span className="font-black text-4xl tracking-tighter" style={{ color: d.scoreColor }}>{step > 0 ? d.score : '…'}</span>
          <p className="text-[8px] text-black/30 font-black uppercase tracking-widest mt-1">SEO Score</p>
        </div>
        <div className="flex-1">
          <div className="h-2 bg-black/5 rounded-full overflow-hidden mb-2">
            <div className="h-full rounded-full transition-all duration-700"
                 style={{ width: step > 0 ? `${d.score}%` : '5%', background: d.scoreColor }} />
          </div>
          <div className="flex gap-3">
            <span className="text-[9px] font-black uppercase tracking-widest" style={{ color: '#16A34A' }}>✓ {d.goods.length} OK</span>
            <span className="text-[9px] font-black uppercase tracking-widest" style={{ color: '#D97706' }}>⚠ {d.issues.length} ISSUE</span>
          </div>
        </div>
      </div>

      {/* Fields */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3" style={{ scrollbarWidth: 'none' }}>
        {d.fields.slice(0, step).map((f) => (
          <div key={f.label} className="flex items-start gap-3 py-2 border-b border-black/5 last:border-0">
            <span className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ background: statusColor(f.status) }} />
            <div className="min-w-0">
              <span className="text-[8px] text-black/30 uppercase tracking-widest font-black leading-none">{f.label}</span>
              <p className="text-[10px] font-bold text-black/70 truncate mt-1 leading-tight">{f.value}</p>
            </div>
          </div>
        ))}
        {step < d.fields.length && (
          <div className="flex items-center gap-2 py-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-[9px] font-black uppercase tracking-widest text-primary">Scanning…</span>
          </div>
        )}
      </div>

      {/* Issues summary */}
      {step >= d.fields.length && (
        <div className="px-4 py-4 border-t border-black/5 bg-[#FFFBEB]">
          {d.issues.map(issue => (
            <div key={issue} className="flex items-start gap-2 mb-2 last:mb-0">
              <span className="text-[10px] mt-0.5 flex-shrink-0 text-amber-600">⚠</span>
              <span className="text-[9px] text-amber-800 font-bold leading-tight">{issue}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export function LiveDemoSection() {
  const { lang } = useLanguage()
  const t = translations[lang].liveDemo
  const [active, setActive] = useState<SiteKey>('dior')
  const [step, setStep] = useState(0)
  const [scanning, setScanning] = useState(false)

  function selectSite(key: SiteKey) {
    setActive(key)
    setStep(0)
    setScanning(true)
  }

  useEffect(() => {
    if (!scanning) return
    setStep(0)
    const maxSteps = SITE_DATA[active].fields.length
    let cur = 0
    const timer = setInterval(() => {
      cur++
      setStep(cur)
      if (cur >= maxSteps) { setScanning(false); clearInterval(timer) }
    }, 280)
    return () => clearInterval(timer)
  }, [scanning, active])

  // Auto-start on mount
  useEffect(() => { setTimeout(() => setScanning(true), 600) }, [])

  const preset = PRESETS.find(p => p.key === active)!

  return (
    <section className="relative bg-background py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
      <div className="absolute pointer-events-none" style={{ inset:0, background:'radial-gradient(ellipse 50% 40% at 50% 0%, rgba(57,211,255,0.06) 0%, transparent 70%)' }} />

      <div className="relative max-w-6xl mx-auto">
        <p className="text-center text-sm font-semibold tracking-widest uppercase mb-5" style={{ color: '#39d3ff' }}>
          {t.eyebrow}
        </p>
        <h2 className="text-center text-4xl md:text-5xl font-semibold bg-clip-text text-transparent mb-4 tracking-tight" style={{ backgroundImage: 'linear-gradient(135deg, #e8e8e9 0%, #39d3ff 100%)' }}>
          {t.headline}
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-12 max-w-xl mx-auto">
          {t.sub}
        </p>

        {/* Site selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {PRESETS.map((p) => (
            <button
              key={p.key}
              onClick={() => selectSite(p.key)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200"
              style={{
                background: active === p.key ? 'rgba(57,211,255,0.12)' : 'rgba(255,255,255,0.04)',
                color: active === p.key ? '#39d3ff' : 'rgba(255,255,255,0.45)',
                border: `1px solid ${active === p.key ? 'rgba(57,211,255,0.35)' : 'rgba(255,255,255,0.08)'}`,
              }}
            >
              <span>{p.flag}</span>
              <span>{p.label}</span>
              <span className="text-[9px] opacity-50">{p.industry}</span>
            </button>
          ))}
        </div>

        {/* Full browser frame */}
        <div className="relative rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.09)', boxShadow: '0 40px 100px rgba(0,0,0,0.7)' }}>
          {/* Glow */}
          <div className="absolute -inset-10 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(57,211,255,0.07) 0%, transparent 70%)' }} />

          {/* Browser chrome */}
          <div className="flex items-center gap-2 px-4 py-2.5 relative z-10" style={{ background: '#080f1c', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>
            {/* Tab bar */}
            <div className="flex items-end gap-0.5 ml-2 h-7">
              <div className="flex items-center gap-2 px-3 h-full rounded-t-lg" style={{ background: '#0d1a2e', border: '1px solid rgba(255,255,255,0.08)', borderBottom: 'none' }}>
                <PixelHeart size={12} />
                <span className="text-[9px] text-white/60 truncate max-w-[100px]">https://www.{preset.url}</span>
                <span className="text-[8px] text-white/20 ml-0.5">✕</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 h-full" style={{ background: 'transparent' }}>
                <span className="text-[8px] text-white/20">+</span>
              </div>
            </div>
            <div className="flex-1" />
            {/* Toolbar extension badge */}
            <div className="flex items-center gap-1.5 px-2 py-1 rounded-md" style={{ background: 'rgba(167,139,250,0.12)', border: '1px solid rgba(167,139,250,0.2)' }}>
              <PixelHeart size={16} />
              {scanning
                ? <span className="text-[8px] animate-pulse" style={{ color: '#39d3ff' }}>…</span>
                : <span className="text-[8px] font-black px-1 rounded-full" style={{ background: '#facc15', color: '#000' }}>{SITE_DATA[active].issues.length}</span>
              }
            </div>
          </div>

          {/* URL bar row */}
          <div className="flex items-center gap-2 px-4 py-2 relative z-10" style={{ background: '#0a1220', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="flex-1 flex items-center gap-2 rounded-lg px-3 py-1.5" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <span className="text-[9px] text-white/25">🔒</span>
              <span className="text-[10px] text-white/45">https://www.{preset.url}</span>
              {scanning && <span className="ml-auto text-[8px] animate-pulse" style={{ color: '#39d3ff' }}>Analysing page…</span>}
            </div>
          </div>

          {/* Page + Extension */}
          <div className="flex" style={{ minHeight: 380 }}>
            <SiteMock site={active} />
            <ExtensionPanel site={active} step={step} />
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 flex flex-col items-center gap-3">
          <p className="text-muted-foreground text-sm text-center max-w-md">
            {t.lockNote}
          </p>
          <button className="px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all hover:opacity-90" style={{ background: 'linear-gradient(135deg, rgba(167,139,250,0.25), rgba(57,211,255,0.2))', color: '#e8e8e9', border: '1px solid rgba(167,139,250,0.3)' }}>
            {t.cta}
          </button>
        </div>
      </div>
    </section>
  )
}
