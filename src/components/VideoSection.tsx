import { useState, useRef } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/i18n/index'

/* ── All tabs matching the real extension sidebar exactly ── */
type TabId =
  | 'apercu' | 'titres' | 'social' | 'schema' | 'hreflang' | 'variantes'
  | 'robots' | 'redirections' | 'images' | 'nav-inspector' | 'nav-source' | 'render'
  | 'liens'
  | 'nav-vpn' | 'outils' | 'dorks' | 'ua' | 'cookies' | 'cache' | 'lexique' | 'nav-report' | 'parametres'

const GROUPS: { label: string; color: string; tabs: { id: TabId; icon: string; label: string }[] }[] = [
  {
    label: 'SÉMANTIQUE', color: '#a78bfa',
    tabs: [
      { id: 'apercu',    icon: '◉',  label: 'APERÇU' },
      { id: 'titres',    icon: '¶',  label: 'TITRES' },
      { id: 'social',    icon: '⬡',  label: 'SOCIAL' },
      { id: 'schema',    icon: '{}', label: 'SCHEMA' },
      { id: 'hreflang',  icon: '☸',  label: 'HREFLANG' },
      { id: 'variantes', icon: '⬸',  label: 'VARIANTES' },
    ],
  },
  {
    label: 'TECHNIQUE', color: '#39d3ff',
    tabs: [
      { id: 'robots',        icon: '⊘',  label: 'ROBOTS' },
      { id: 'redirections',  icon: '→',  label: 'REDIRECTIONS' },
      { id: 'images',        icon: '□',  label: 'IMAGES' },
      { id: 'nav-inspector', icon: '△',  label: 'NAV-INSPECTO' },
      { id: 'nav-source',    icon: '</>', label: 'NAV-SOURCE' },
      { id: 'render',        icon: '◇',  label: 'RENDER' },
    ],
  },
  {
    label: 'NETLINKING', color: '#2dd4bf',
    tabs: [
      { id: 'liens', icon: '⇄', label: 'LIENS' },
    ],
  },
  {
    label: 'BOÎTE À OUTILS', color: '#facc15',
    tabs: [
      { id: 'nav-vpn',    icon: '🌐', label: 'NAV-VPN' },
      { id: 'outils',     icon: '⌘',  label: 'OUTILS' },
      { id: 'dorks',      icon: '⬛',  label: 'DORKS' },
      { id: 'ua',         icon: ':',  label: 'UA' },
      { id: 'cookies',    icon: '●',  label: 'COOKIES' },
      { id: 'cache',      icon: '⟳',  label: 'CACHE' },
      { id: 'lexique',    icon: '≡',  label: 'LEXIQUE' },
      { id: 'nav-report', icon: '📊', label: 'NAV-REPORT' },
      { id: 'parametres', icon: '⚙',  label: 'PARAMÈTRES' },
    ],
  },
]

const TAB_TOUR: TabId[] = ['apercu', 'titres', 'schema', 'redirections', 'images', 'liens']

/* ── Panel content — real Dior L'Or de J'adore product page data ── */
function ApercuPanel() {
  return (
    <div className="p-1.5 flex flex-col gap-1 text-[8px]">
      {/* Indexability */}
      <div className="flex items-center gap-1.5 px-2 py-1.5 rounded" style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.15)' }}>
        <span className="text-[9px]">✓</span>
        <span className="text-white/40 text-[6.5px] uppercase font-bold tracking-wide">INDEXABILITÉ</span>
        <span className="ml-auto font-bold" style={{ color: '#22c55e' }}>INDEXABLE</span>
      </div>

      {/* Title */}
      <div className="bg-white/[0.04] rounded px-2 py-1.5">
        <div className="flex items-center justify-between mb-0.5">
          <span className="text-white/35 text-[6px] uppercase font-bold tracking-wide">TITRE</span>
          <span className="text-[6px] px-1 rounded font-semibold" style={{ background: 'rgba(34,197,94,0.15)', color: '#22c55e' }}>72 CAR.</span>
        </div>
        <p className="text-white/80 text-[7px] leading-tight">L'Or de J'adore : essence de parfum notes florales et intenses | DIOR FR</p>
      </div>

      {/* Meta description */}
      <div className="bg-white/[0.04] rounded px-2 py-1.5">
        <div className="flex items-center justify-between mb-0.5">
          <span className="text-white/35 text-[6px] uppercase font-bold tracking-wide">MÉTA DESCRIPTION</span>
          <span className="text-[6px] px-1 rounded font-semibold" style={{ background: 'rgba(34,197,94,0.15)', color: '#22c55e' }}>✓ 151 CAR.</span>
        </div>
        <p className="text-white/60 text-[7px] leading-tight">L'Or de J'adore, la nouvelle essence de parfum Dior aux notes florales intenses…</p>
      </div>

      {/* URL with HTTP status */}
      <div className="bg-white/[0.04] rounded px-2 py-1.5">
        <div className="flex items-center justify-between mb-0.5">
          <span className="text-white/35 text-[6px] uppercase font-bold tracking-wide">URL</span>
          <span className="text-[6px] px-1.5 py-0.5 rounded font-black" style={{ background: '#00b894', color: '#000' }}>HTTP 200</span>
        </div>
        <p className="text-[7px] leading-tight">
          <span style={{ color: '#ff6b6b' }}>https://www.dior.com</span>
          <span style={{ color: '#74b9ff' }}>/fr_fr/beauty/products/</span>
          <span className="text-white/40">lor-de-jadore-Y0997…</span>
        </p>
      </div>

      {/* Canonical */}
      <div className="bg-white/[0.04] rounded px-2 py-1.5">
        <div className="flex items-center gap-1 mb-0.5">
          <span className="text-[6px] font-semibold" style={{ color: '#22c55e' }}>✓</span>
          <span className="text-white/35 text-[6px] uppercase font-bold tracking-wide">CANONIQUE</span>
          <span className="ml-auto text-[6px]" style={{ color: '#22c55e' }}>AUTO-RÉFÉRENCÉE</span>
        </div>
        <p className="text-white/35 text-[6.5px] truncate">https://www.dior.com/fr_fr/beauty/products/lor-de-jad…</p>
      </div>

      {/* Robots / X-Robots */}
      <div className="flex gap-1">
        <div className="flex-1 bg-white/[0.04] rounded px-2 py-1.5">
          <div className="text-white/35 text-[6px] uppercase font-bold tracking-wide mb-0.5">BALISE ROBOTS</div>
          <div className="text-white/70 text-[7px]">index,follow</div>
        </div>
        <div className="flex-1 bg-white/[0.04] rounded px-2 py-1.5">
          <div className="text-white/35 text-[6px] uppercase font-bold tracking-wide mb-0.5">X-ROBOTS-TAG</div>
          <div className="text-white/30 text-[7px]">—</div>
        </div>
      </div>

      {/* Last Modified */}
      <div className="bg-white/[0.04] rounded px-2 py-1.5">
        <div className="text-white/35 text-[6px] uppercase font-bold tracking-wide mb-0.5">LAST MODIFIED</div>
        <div className="text-white/55 text-[7px]">14 mars 2026 <span className="text-[6px] ml-1 px-1 rounded" style={{ background: 'rgba(167,139,250,0.12)', color: '#a78bfa' }}>today browser</span></div>
      </div>
    </div>
  )
}

function TitresPanel() {
  const hs = [
    { lv: 'H1', t: "L'Or de J'adore", c: '#9ec890', i: 0 },
    { lv: 'H2', t: 'Essence de parfum — notes florales et solaires', c: '#7ab8c8', i: 1 },
    { lv: 'H2', t: 'Rechargeable · Intensité modérée', c: '#7ab8c8', i: 1 },
    { lv: 'H2', t: "Idées cadeaux Dior", c: '#7ab8c8', i: 1 },
    { lv: 'H3', t: 'Cadeau exclusif dès 170€', c: '#c8a96e', i: 2 },
    { lv: 'H3', t: 'Service de gravure personnalisé', c: '#c8a96e', i: 2 },
    { lv: 'H2', t: "L'essai avec Dior", c: '#7ab8c8', i: 1 },
  ]
  return (
    <div className="p-1.5 flex flex-col gap-0.5">
      <div className="flex items-center justify-between bg-white/5 rounded px-2 py-1.5 mb-0.5">
        <span className="text-white/40 text-[6.5px] uppercase font-bold tracking-wide">7 balises — lor-de-jadore</span>
        <span className="text-[6px] px-1.5 rounded font-semibold" style={{ background: 'rgba(34,197,94,0.15)', color: '#22c55e' }}>Structure ✓</span>
      </div>
      {hs.map((h, i) => (
        <div key={i} className="flex items-center gap-1.5 py-1 rounded" style={{ paddingLeft: 8 + h.i * 8 }}>
          <span className="text-[6.5px] font-black px-1 rounded flex-shrink-0" style={{ background: `${h.c}25`, color: h.c }}>{h.lv}</span>
          <span className="text-white/60 text-[7px] truncate">{h.t}</span>
        </div>
      ))}
    </div>
  )
}

function SchemaPanel() {
  return (
    <div className="p-1.5 flex flex-col gap-1.5">
      <div className="flex items-center gap-2 bg-white/5 rounded px-2 py-1.5">
        <span className="text-[#a78bfa] font-bold text-base">4</span>
        <span className="text-white/40 text-[7px]">Schema types — product page</span>
      </div>
      {[
        { type: 'Product', props: 11, valid: true, detail: 'name, price, image, availability…' },
        { type: 'BreadcrumbList', props: 4, valid: true, detail: 'Accueil › Parfums › J\'adore › L\'Or' },
        { type: 'Organization', props: 7, valid: true, detail: 'name, logo, sameAs, url…' },
        { type: 'WebPage', props: 3, valid: false, detail: '⚠ dateModified manquant' },
      ].map(s => (
        <div key={s.type} className="bg-white/[0.04] rounded px-2 py-1.5">
          <div className="flex items-center justify-between mb-0.5">
            <span className="text-[#a78bfa] font-bold text-[8px]">{s.type}</span>
            <span className="text-[6px] px-1.5 rounded font-semibold"
              style={{ background: s.valid ? 'rgba(34,197,94,0.15)' : 'rgba(250,204,21,0.15)', color: s.valid ? '#22c55e' : '#facc15' }}>
              {s.valid ? 'Valid' : 'Warning'}
            </span>
          </div>
          <div className="text-white/30 text-[6.5px]">{s.props} props · {s.detail}</div>
        </div>
      ))}
    </div>
  )
}

function RedirectionsPanel() {
  return (
    <div className="p-1.5 flex flex-col gap-1.5">
      <div className="flex items-center gap-2 bg-white/5 rounded px-2 py-1.5 mb-0.5">
        <span className="font-bold text-base" style={{ color: '#22c55e' }}>0</span>
        <span className="text-white/40 text-[7px]">redirection(s) — accès direct 200</span>
      </div>
      <div className="flex overflow-hidden rounded-md border border-white/10">
        <div className="flex flex-col items-center justify-center px-2.5 py-2.5 min-w-[42px]" style={{ background: 'rgba(34,197,94,0.25)' }}>
          <span className="font-bold text-white text-sm leading-none">200</span>
          <span className="text-white/50 text-[6px] mt-0.5">38ms</span>
        </div>
        <div className="flex-1 bg-white/[0.03] px-2 py-2">
          <p className="text-[7px] leading-tight">
            <span style={{ color: '#ff6b6b' }}>https://www.dior.com</span>
            <span style={{ color: '#74b9ff' }}>/fr_fr/beauty/products/</span>
            <span className="text-white/40">lor-de-jadore-Y0997096.html</span>
          </p>
          <p className="text-white/35 text-[6.5px] mt-0.5">OK — Destination finale ✓</p>
        </div>
      </div>
      <div className="bg-white/[0.04] rounded px-2 py-1.5">
        <div className="text-white/35 text-[6.5px] mb-1">Autres URLs testées</div>
        {[
          { url: 'http://dior.com/lor-de-jadore', note: '→ HTTPS + www (301+301+200)' },
          { url: 'dior.com/fr_fr/beauty/...', note: '→ 200 via canonical' },
        ].map((r, i) => (
          <div key={i} className="flex items-center gap-1.5 py-0.5">
            <span className="text-[6px] px-1 rounded font-bold" style={{ background: 'rgba(250,204,21,0.15)', color: '#facc15' }}>301</span>
            <span className="text-[#39d3ff] text-[6.5px] truncate">{r.url}</span>
            <span className="text-white/25 text-[6px] flex-shrink-0">{r.note}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function ImagesPanel() {
  const imgs = [
    { src: 'lor-de-jadore-hero.jpg', alt: "L'Or de J'adore — Vue principale", dims: '1400×1400', ok: true },
    { src: 'lor-de-jadore-secondary.jpg', alt: "L'Or de J'adore — Vue secondaire", dims: '1400×1400', ok: true },
    { src: 'cadeau-offert.jpg', alt: '', dims: '240×240', ok: false },
    { src: 'dior-logo-white.svg', alt: 'Dior', dims: '120×32', ok: true },
    { src: 'rechargeable-icon.png', alt: '', dims: '48×48', ok: false },
  ]
  return (
    <div className="p-1.5 flex flex-col gap-1">
      <div className="flex items-center justify-between bg-white/5 rounded px-2 py-1.5 mb-0.5">
        <span className="text-white/40 text-[6.5px]">12 images — page produit</span>
        <span className="text-[6px] px-1.5 rounded font-semibold" style={{ background: 'rgba(250,204,21,0.15)', color: '#facc15' }}>2 sans alt ⚠</span>
      </div>
      {imgs.map(img => (
        <div key={img.src} className="flex items-start gap-1.5 bg-white/[0.03] rounded px-1.5 py-1">
          <div className="w-5 h-5 rounded bg-white/10 flex items-center justify-center text-[7px] text-white/25 flex-shrink-0 mt-0.5">◇</div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <p className="text-[#39d3ff] truncate text-[7px]">{img.src}</p>
              <span className="text-[5.5px] ml-1 px-0.5 rounded flex-shrink-0" style={{ background: 'rgba(57,211,255,0.1)', color: '#39d3ff' }}>{img.dims}</span>
            </div>
            {img.ok
              ? <p className="text-white/35 text-[6.5px] truncate">{img.alt}</p>
              : <p className="text-[6.5px] font-semibold" style={{ color: '#facc15' }}>⚠ alt manquant</p>
            }
          </div>
        </div>
      ))}
    </div>
  )
}

function LiensPanel() {
  return (
    <div className="p-1.5 flex flex-col gap-1.5">
      <div className="grid grid-cols-2 gap-1 mb-0.5">
        {[['Internes', '14', '#a78bfa'], ['Externes', '3', '#39d3ff']].map(([l, v, c]) => (
          <div key={l} className="bg-white/[0.04] rounded p-2 text-center">
            <div className="font-bold text-lg" style={{ color: c }}>{v}</div>
            <div className="text-white/30 text-[6px] uppercase tracking-wide">{l}</div>
          </div>
        ))}
      </div>
      {[
        { href: '/fr_fr/beauty/', text: 'Beauté Dior', type: 'int', follow: true },
        { href: '/fr_fr/beauty/parfum/', text: 'Parfums', type: 'int', follow: true },
        { href: '/fr_fr/fashion/', text: 'Mode', type: 'int', follow: true },
        { href: 'https://instagram.com/dior', text: '@dior', type: 'ext', follow: false },
        { href: 'https://youtube.com/@Dior', text: 'Dior YouTube', type: 'ext', follow: false },
      ].map((l, i) => (
        <div key={i} className="flex items-center gap-1.5 bg-white/[0.03] rounded px-1.5 py-1">
          <span className="text-[5.5px] font-bold px-1 rounded flex-shrink-0"
            style={{ background: l.type === 'int' ? 'rgba(167,139,250,0.15)' : 'rgba(57,211,255,0.1)', color: l.type === 'int' ? '#a78bfa' : '#39d3ff' }}>
            {l.type === 'int' ? 'INT' : 'EXT'}
          </span>
          <span className="text-[#39d3ff] truncate text-[6.5px] flex-1">{l.href}</span>
          <span className="text-[5.5px] flex-shrink-0" style={{ color: l.follow ? '#22c55e' : '#facc15' }}>{l.follow ? 'follow' : 'nofollow'}</span>
        </div>
      ))}
    </div>
  )
}

function GenericPanel({ id }: { id: TabId }) {
  const info: Partial<Record<TabId, { icon: string; label: string; desc: string }>> = {
    social: { icon: '⬡', label: 'SOCIAL / OG', desc: 'og:title · og:image · og:description · twitter:card · 8 balises détectées' },
    hreflang: { icon: '☸', label: 'HREFLANG', desc: '38 variantes linguistiques · x-default absent ⚠' },
    variantes: { icon: '⬸', label: 'VARIANTES', desc: 'fr_fr · en_us · de_de · zh_cn · 34 autres…' },
    robots: { icon: '⊘', label: 'ROBOTS', desc: 'robots.txt valide · 6 sitemaps · Googlebot autorisé' },
    'nav-inspector': { icon: '△', label: 'NAV-INSPECTOR', desc: 'Inspecter des éléments CSS/DOM en temps réel' },
    'nav-source': { icon: '</>', label: 'NAV-SOURCE', desc: 'Code source avec mise en évidence syntaxique' },
    render: { icon: '◇', label: 'RENDER', desc: 'Comparaison DOM brut vs DOM rendu (JS)' },
    'nav-vpn': { icon: '🌐', label: 'NAV-VPN', desc: 'Simuler une localisation pour les SERPs géolocalisés' },
    outils: { icon: '⌘', label: 'OUTILS', desc: 'PageSpeed · Majestic · SEMrush · Ahrefs · accès rapide' },
    dorks: { icon: '⬛', label: 'DORKS', desc: 'Générateur de dorks Google personnalisés' },
    ua: { icon: ':', label: 'USER AGENT', desc: 'Changer le User-Agent du navigateur instantanément' },
    cookies: { icon: '●', label: 'COOKIES', desc: 'Éditeur de cookies — ajouter, modifier, supprimer' },
    cache: { icon: '⟳', label: 'CACHE', desc: 'Vider le cache / les cookies de l\'onglet actif' },
    lexique: { icon: '≡', label: 'LEXIQUE SEO', desc: '150+ termes SEO définis — accessible hors ligne' },
    'nav-report': { icon: '📊', label: 'NAV-REPORT', desc: 'Rapport PDF exportable — audit complet de la page' },
    parametres: { icon: '⚙', label: 'PARAMÈTRES', desc: 'Personnaliser les raccourcis, l\'interface et les modules' },
  }
  const p = info[id]
  return (
    <div className="flex flex-col items-center justify-center h-full p-4 gap-2 text-center">
      <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg" style={{ background: 'rgba(255,255,255,0.05)' }}>{p?.icon ?? '◉'}</div>
      <span className="text-white/60 font-bold text-[8px] uppercase tracking-wide">{p?.label ?? id}</span>
      <span className="text-white/30 text-[7px] leading-snug max-w-[160px]">{p?.desc ?? ''}</span>
    </div>
  )
}

const PANEL_CONTENT: Partial<Record<TabId, React.ReactNode>> = {
  apercu: <ApercuPanel />,
  titres: <TitresPanel />,
  schema: <SchemaPanel />,
  redirections: <RedirectionsPanel />,
  images: <ImagesPanel />,
  liens: <LiensPanel />,
}

/* ── Real Dior product page screenshot ── */
function DiorPage() {
  return (
    <div className="relative flex-1 overflow-hidden select-none" style={{ minWidth: 0 }}>
      <img
        src="/site-diorproduct.jpg"
        alt="Dior L'Or de J'adore product page"
        className="w-full h-full object-cover object-top"
        style={{ display: 'block' }}
      />
      <div className="absolute inset-y-0 right-0 w-10 pointer-events-none" style={{ background: 'linear-gradient(90deg, transparent, rgba(4,13,26,0.8))' }} />
    </div>
  )
}

export function VideoSection() {
  const { lang } = useLanguage()
  const t = translations[lang].video
  const [started, setStarted] = useState(false)
  const [activeTab, setActiveTab] = useState<TabId>('apercu')
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
      tourRef.current = setTimeout(next, 2000)
    }
    setActiveTab(TAB_TOUR[0])
    tourRef.current = setTimeout(next, 2000)
  }

  function clickTab(id: TabId) {
    if (tourRef.current) clearTimeout(tourRef.current)
    setTouring(false)
    setActiveTab(id)
  }

  const activeGroup = GROUPS.find(g => g.tabs.some(t => t.id === activeTab))

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
                <span className="text-[10px] flex items-center gap-0">
                  <span style={{ color: '#ff6b6b' }}>www.dior.com</span>
                  <span style={{ color: '#74b9ff' }}>/fr_fr/beauty/products/</span>
                  <span className="text-white/35">lor-de-jadore-Y0997096.html</span>
                </span>
                {touring && <span className="text-[8px] animate-pulse ml-auto" style={{ color: '#39d3ff' }}>Analyse…</span>}
              </div>
              {/* Extension icon + badge */}
              <div className="flex items-center gap-1 flex-shrink-0 px-1.5 py-0.5 rounded" style={{ background: 'rgba(0,184,148,0.1)', border: '1px solid rgba(0,184,148,0.2)' }}>
                <img src="/src/assets/icon.png" alt="" className="w-4 h-4" style={{ imageRendering: 'pixelated', filter: 'drop-shadow(0 0 4px #00b894)' }} />
                <span className="text-[8px] font-black px-1 rounded" style={{ background: '#00b894', color: '#000' }}>200</span>
              </div>
            </div>

            {/* Main content: site + extension panel */}
            <div className="flex" style={{ minHeight: 460 }}>
              <DiorPage />

              {/* Extension panel — real layout */}
              {started && (
                <div className="flex-shrink-0 flex" style={{ width: 270, borderLeft: '1px solid rgba(255,255,255,0.07)' }}>
                  {/* Real sidebar navigation */}
                  <div className="flex flex-col border-r border-white/[0.06] overflow-y-auto" style={{ width: 64, background: '#020814', scrollbarWidth: 'none' }}>
                    {/* Extension header */}
                    <div className="flex flex-col items-center gap-0.5 py-2 px-1 border-b border-white/[0.06]">
                      <img src="/src/assets/icon.png" alt="" className="w-5 h-5" style={{ imageRendering: 'pixelated' }} />
                      <span className="text-[4.5px] font-black tracking-widest uppercase text-center leading-tight" style={{ background: 'linear-gradient(90deg, #39d3ff, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>SEO SWISS KNIFE</span>
                    </div>

                    {/* Groups + tabs */}
                    {GROUPS.map(group => (
                      <div key={group.label}>
                        <div className="px-1 pt-1.5 pb-0.5">
                          <span className="text-[5px] font-black uppercase tracking-wider" style={{ color: group.color, opacity: 0.75 }}>
                            {group.label.slice(0, 8)}
                          </span>
                        </div>
                        {group.tabs.map(tab => {
                          const isActive = tab.id === activeTab
                          return (
                            <button
                              key={tab.id}
                              onClick={() => clickTab(tab.id)}
                              className="w-full flex flex-col items-center gap-0.5 py-1 px-0.5 transition-all cursor-pointer border-0"
                              style={{
                                background: isActive ? `${group.color}18` : 'transparent',
                                borderLeft: isActive ? `2px solid ${group.color}` : '2px solid transparent',
                              }}
                            >
                              <span className="text-[10px]" style={{ color: isActive ? group.color : 'rgba(255,255,255,0.22)' }}>{tab.icon}</span>
                              <span className="text-[4.5px] font-bold uppercase tracking-wide leading-tight text-center" style={{ color: isActive ? group.color : 'rgba(255,255,255,0.18)' }}>
                                {tab.label.slice(0, 8)}
                              </span>
                            </button>
                          )
                        })}
                      </div>
                    ))}

                    {/* Paramètres with red dot */}
                    <div className="mt-auto border-t border-white/[0.06] pb-1" />
                  </div>

                  {/* Content area */}
                  <div className="flex-1 overflow-hidden" style={{ background: '#040D1A' }}>
                    {/* Rainbow stripe */}
                    <div className="h-[2px]" style={{ background: 'linear-gradient(90deg, #a78bfa, #39d3ff, #2dd4bf, #facc15)' }} />
                    {/* Panel header */}
                    <div className="flex items-center justify-between px-2 py-1.5 border-b border-white/[0.06]">
                      <span className="text-[7.5px] font-black uppercase tracking-wide" style={{ color: activeGroup?.color ?? '#a78bfa' }}>
                        {GROUPS.flatMap(g => g.tabs).find(t => t.id === activeTab)?.label ?? 'APERÇU'}
                      </span>
                      <span className="text-[6px] px-1.5 py-0.5 rounded-full" style={{ background: 'rgba(34,197,94,0.12)', color: '#22c55e' }}>Allowed</span>
                    </div>
                    <div className="overflow-y-auto" style={{ maxHeight: 420, scrollbarWidth: 'none' }}>
                      {PANEL_CONTENT[activeTab] ?? <GenericPanel id={activeTab} />}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Start overlay */}
          {!started && (
            <div className="absolute inset-0 flex items-center justify-center rounded-2xl" style={{ background: 'rgba(4,8,20,0.6)', backdropFilter: 'blur(4px)' }}>
              <button onClick={startTour} className="flex flex-col items-center gap-3 group">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
                  style={{ background: 'rgba(167,139,250,0.2)', border: '2px solid rgba(167,139,250,0.4)', boxShadow: '0 0 40px rgba(124,58,237,0.5)' }}
                >
                  <span className="text-2xl ml-1">▶</span>
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-white/80">Extension en action — Dior L'Or de J'adore</p>
                  <p className="text-xs text-white/35 mt-0.5">Auto-tour · Cliquez un onglet pour explorer</p>
                </div>
              </button>
            </div>
          )}
        </div>

        {/* Tab shortcuts below the frame */}
        {started && (
          <div className="flex flex-wrap justify-center gap-2">
            {TAB_TOUR.map(id => {
              const group = GROUPS.find(g => g.tabs.some(t => t.id === id))
              const tab = GROUPS.flatMap(g => g.tabs).find(t => t.id === id)
              return (
                <button
                  key={id}
                  onClick={() => clickTab(id)}
                  className="px-3 py-1 rounded-full text-xs font-medium transition-all"
                  style={{
                    background: activeTab === id ? `${group?.color}18` : 'rgba(255,255,255,0.04)',
                    color: activeTab === id ? group?.color : 'rgba(255,255,255,0.4)',
                    border: `1px solid ${activeTab === id ? `${group?.color}40` : 'rgba(255,255,255,0.07)'}`,
                  }}
                >
                  {tab?.icon} {tab?.label}
                </button>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
