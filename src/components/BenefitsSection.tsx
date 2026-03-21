import { useLanguage } from '@/contexts/LanguageContext'
import { PixelHeart } from '@/components/PixelHeart'

const FEATURE_GROUPS = [
  {
    color: '#a78bfa',
    bg: 'rgba(167,139,250,0.08)',
    icon: '◉',
    label: 'Semantic',
    count: 15,
    items: ['Full Page Overview', 'Title & Meta Scoring', 'Canonical Checker', 'Robots Meta Parser', 'H1–H6 Hierarchy', 'Open Graph Preview', 'Twitter Card Preview', 'WhatsApp Preview', 'JSON-LD Extractor', 'Microdata & RDFa', 'Schema Validator', 'Hreflang Parser', 'Return Link Checker', 'Language Validator', 'URL Variants'],
  },
  {
    color: '#39d3ff',
    bg: 'rgba(57,211,255,0.08)',
    icon: '⊖',
    label: 'Technical',
    count: 14,
    items: ['Robots.txt Viewer', 'X-Robots-Tag Header', 'HTTPS Detection', 'Redirect Chain Tracer', 'Redirect Timing', 'Image Alt Audit', 'Image Dimensions', 'Image Format (WebP/AVIF)', 'Image Size Checker', 'Image ZIP Export', 'Image CSV Export', 'CSS Inspector', 'Source Code Viewer', 'JS Render Diff'],
  },
  {
    color: '#2dd4bf',
    bg: 'rgba(45,212,191,0.08)',
    icon: '⇄',
    label: 'Netlinking',
    count: 7,
    items: ['Full Link Listing', 'Nofollow Detection', 'Sponsored & UGC Tags', 'External Link Audit', 'Link CSV Export', 'Link Grabber', 'Text Grabber'],
  },
  {
    color: '#facc15',
    bg: 'rgba(250,204,21,0.08)',
    icon: '🌐',
    label: 'Toolbox',
    count: 16,
    items: ['SERP VPN Geo-Sim', 'Device Simulation', 'Google Dork Operators', 'Duplicate Content', 'PageSpeed Link', 'Rich Results Tester', 'Ahrefs / Semrush / Moz', 'Cookie Manager', 'Cookie Export/Import', 'Cache & Storage Cleaner', 'User Agent Switcher', 'SEO Glossary 150+', 'Weighted SEO Report', 'PDF Export', 'Shareable Report URL', 'Viewport Screenshot'],
  },
  {
    color: '#f97316',
    bg: 'rgba(249,115,22,0.08)',
    icon: '⌨',
    label: 'Toolbar & UX',
    count: 9,
    items: ['JavaScript Toggle', 'Mobile Preview', 'Color Picker', 'Transparent Overlay', 'Dark / Light Theme', 'Keyboard Shortcuts', 'Configurable Sidebar', 'Chrome Side Panel', 'Context Menu (30+ actions)'],
  },
]

const STATS = [
  { value: '60+', label: 'Built-in tools', color: '#a78bfa' },
  { value: '30+', label: 'Context menu actions', color: '#39d3ff' },
  { value: '150+', label: 'SEO terms in glossary', color: '#2dd4bf' },
  { value: '100%', label: 'Free — no account', color: '#facc15' },
]

export function BenefitsSection() {
  const { lang } = useLanguage()

  return (
    <section className="relative bg-background py-24 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(167,139,250,0.3), transparent)' }} />

      <div className="max-w-6xl mx-auto flex flex-col gap-20">

        {/* ── Block 1: Everything you need ── */}
        <div>
          <p className="text-center text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-5">
            {lang === 'fr' ? 'Couverture complète' : 'Complete Coverage'}
          </p>
          <h2
            className="text-center text-4xl md:text-5xl font-semibold bg-clip-text text-transparent mb-4 tracking-tight"
            style={{ backgroundImage: 'linear-gradient(135deg, #e8e8e9 0%, #a78bfa 100%)' }}
          >
            {lang === 'fr'
              ? 'Tout ce dont un SEO a besoin. Sans exception.'
              : 'Every tool a technical SEO needs. Without exception.'}
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-14 max-w-2xl mx-auto">
            {lang === 'fr'
              ? '60+ outils couvrant chaque dimension du SEO — sémantique, technique, netlinking, toolbox — dans un seul panneau Chrome.'
              : '60+ tools covering every SEO dimension — semantic, technical, netlinking, toolbox — inside a single Chrome panel.'}
          </p>

          {/* Feature group grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {FEATURE_GROUPS.map((g) => (
              <div key={g.label} className="liquid-glass rounded-2xl p-5 flex flex-col gap-3" style={{ border: `1px solid ${g.color}18` }}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center text-sm" style={{ background: g.bg, color: g.color }}>{g.icon}</div>
                    <span className="font-bold text-foreground text-sm">{g.label}</span>
                  </div>
                  <span className="text-xs font-black px-2 py-0.5 rounded-full" style={{ background: g.bg, color: g.color }}>{g.count} tools</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {g.items.map((item) => (
                    <span key={item} className="text-[10px] px-2 py-0.5 rounded-full font-medium" style={{ background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.5)', border: '1px solid rgba(255,255,255,0.07)' }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* Keyboard shortcuts card */}
            <div className="liquid-glass rounded-2xl p-5 flex flex-col gap-3" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center text-sm" style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.6)' }}>⌨</div>
                <span className="font-bold text-foreground text-sm">Keyboard Shortcuts</span>
              </div>
              <p className="text-muted-foreground text-xs leading-relaxed">
                {lang === 'fr'
                  ? 'Chaque onglet accessible par un raccourci clavier configurable. Naviguez entre Overview, Schema, Redirects sans jamais toucher la souris.'
                  : 'Every tab accessible with a configurable keyboard shortcut. Navigate Overview → Schema → Redirects without touching the mouse.'}
              </p>
              <div className="flex flex-wrap gap-2 mt-1">
                {[['Alt+1','Overview'],['Alt+2','Headings'],['Alt+3','Schema'],['Alt+4','Redirects'],['Alt+R','Report']].map(([k, v]) => (
                  <div key={k} className="flex items-center gap-1">
                    <kbd className="text-[9px] px-1.5 py-0.5 rounded font-mono" style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.12)' }}>{k}</kbd>
                    <span className="text-[9px] text-white/30">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Block 2: Stats ── */}
        <div className="liquid-glass rounded-2xl py-10 px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-2 text-center">
                <span className="text-5xl font-black bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(135deg, ${s.color}, #fff)` }}>{s.value}</span>
                <span className="text-sm text-muted-foreground font-medium">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Block 3: Problem → Solution (compact) ── */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: '#f97316' }}>
              {lang === 'fr' ? 'Le vrai problème' : 'The Problem'}
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground leading-snug tracking-tight mb-5">
              {lang === 'fr' ? '6 onglets ouverts pour un seul audit.' : '6 tabs open for a single audit.'}
            </h2>
            <div className="flex flex-col gap-3">
              {[
                { icon: '🗂', text: lang === 'fr' ? 'Schema validator ici, robots checker là, redirect tracer ailleurs — le context-switching tue votre productivité.' : 'Schema validator here, robots checker there, redirect tracer somewhere else — context-switching kills your flow.' },
                { icon: '🔍', text: lang === 'fr' ? 'Hreflang cassé, canonical manquant, données structurées malformées — des erreurs invisibles jusqu\'à ce qu\'elles coûtent des rankings.' : 'Broken hreflang, missing canonical, malformed structured data — invisible until they cost you rankings.' },
                { icon: '📊', text: lang === 'fr' ? 'Chaque outil est un onglet séparé, un compte séparé, une interface différente. Fini.' : 'Every tool is a separate tab, separate account, different UI. No more.' },
              ].map((p) => (
                <div key={p.text} className="flex gap-3">
                  <span className="text-xl flex-shrink-0 mt-0.5">{p.icon}</span>
                  <p className="text-muted-foreground text-sm leading-relaxed">{p.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="liquid-glass rounded-2xl p-7 flex flex-col gap-4">
            <div className="flex items-center gap-3 mb-1">
              <PixelHeart size={32} style={{ filter: 'drop-shadow(0 0 10px rgba(167,139,250,0.5))' }} />
              <div>
                <p className="text-foreground font-bold">Search Toolbox</p>
                <p className="text-muted-foreground text-xs">{lang === 'fr' ? 'Un panel, tout le reste.' : 'One panel, everything else gone.'}</p>
              </div>
            </div>
            {[
              lang === 'fr' ? '60+ outils dans un seul sidebar Chrome' : '60+ tools in a single Chrome sidebar',
              lang === 'fr' ? 'Toutes les catégories SEO couvertes' : 'Every SEO category covered',
              lang === 'fr' ? '30+ raccourcis via le menu contextuel' : '30+ shortcuts via right-click context menu',
              lang === 'fr' ? 'Raccourcis clavier configurables' : 'Fully configurable keyboard shortcuts',
              lang === 'fr' ? 'Zéro compte, zéro clé API' : 'Zero account, zero API key',
              lang === 'fr' ? 'Fonctionne sur chaque page visitée' : 'Works on every page you visit',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black flex-shrink-0" style={{ background: 'rgba(34,197,94,0.15)', color: '#22c55e' }}>✓</span>
                <span className="text-sm text-foreground/80">{item}</span>
              </div>
            ))}
            <button className="mt-2 w-full py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all hover:opacity-90" style={{ background: 'linear-gradient(135deg, rgba(167,139,250,0.25), rgba(57,211,255,0.2))', color: '#e8e8e9', border: '1px solid rgba(167,139,250,0.3)' }}>
              {lang === 'fr' ? 'Installer gratuitement →' : 'Install for Free →'}
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}
