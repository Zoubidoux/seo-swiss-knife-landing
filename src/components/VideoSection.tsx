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
    <div className="p-1.5 flex flex-col gap-1 text-[8px] bg-white">
      {/* Indexability */}
      <div className="flex items-center gap-1.5 px-2 py-1.5 rounded bg-green-50 border border-green-100">
        <span className="text-[9px]">✓</span>
        <span className="text-black/40 text-[6.5px] uppercase font-bold tracking-wide">INDEXABILITÉ</span>
        <span className="ml-auto font-bold text-green-600">INDEXABLE</span>
      </div>

      {/* Title */}
      <div className="bg-black/[0.02] rounded px-2 py-1.5 border border-black/5">
        <div className="flex items-center justify-between mb-0.5">
          <span className="text-black/35 text-[6px] uppercase font-bold tracking-wide">TITRE</span>
          <span className="text-[6px] px-1 rounded font-semibold bg-green-100 text-green-700">72 CAR.</span>
        </div>
        <p className="text-black/80 text-[7px] font-bold leading-tight">L'Or de J'adore : essence de parfum notes florales et intenses | DIOR FR</p>
      </div>

      {/* Meta description */}
      <div className="bg-black/[0.02] rounded px-2 py-1.5 border border-black/5">
        <div className="flex items-center justify-between mb-0.5">
          <span className="text-black/35 text-[6px] uppercase font-bold tracking-wide">MÉTA DESCRIPTION</span>
          <span className="text-[6px] px-1 rounded font-semibold bg-green-100 text-green-700">✓ 151 CAR.</span>
        </div>
        <p className="text-black/60 text-[7px] font-medium leading-tight">L'Or de J'adore, la nouvelle essence de parfum Dior aux notes florales intenses…</p>
      </div>

      {/* URL with HTTP status */}
      <div className="bg-black/[0.02] rounded px-2 py-1.5 border border-black/5">
        <div className="flex items-center justify-between mb-0.5">
          <span className="text-black/35 text-[6px] uppercase font-bold tracking-wide">URL</span>
          <span className="text-[6px] px-1.5 py-0.5 rounded font-black bg-green-500 text-white">HTTP 200</span>
        </div>
        <p className="text-[7px] font-bold leading-tight">
          <span className="text-red-500">https://www.dior.com</span>
          <span className="text-blue-500">/fr_fr/beauty/products/</span>
          <span className="text-black/40">lor-de-jadore-Y0997…</span>
        </p>
      </div>

      {/* Canonical */}
      <div className="bg-black/[0.02] rounded px-2 py-1.5 border border-black/5">
        <div className="flex items-center gap-1 mb-0.5">
          <span className="text-[6px] font-black text-green-600">✓</span>
          <span className="text-black/35 text-[6px] uppercase font-bold tracking-wide">CANONIQUE</span>
          <span className="ml-auto text-[6px] font-bold text-green-600">AUTO-RÉFÉRENCÉE</span>
        </div>
        <p className="text-black/35 text-[6.5px] truncate">https://www.dior.com/fr_fr/beauty/products/lor-de-jad…</p>
      </div>

      {/* Robots / X-Robots */}
      <div className="flex gap-1">
        <div className="flex-1 bg-black/[0.02] rounded px-2 py-1.5 border border-black/5">
          <div className="text-black/35 text-[6px] uppercase font-bold tracking-wide mb-0.5">BALISE ROBOTS</div>
          <div className="text-black/70 text-[7px] font-bold">index,follow</div>
        </div>
        <div className="flex-1 bg-black/[0.02] rounded px-2 py-1.5 border border-black/5">
          <div className="text-black/35 text-[6px] uppercase font-bold tracking-wide mb-0.5">X-ROBOTS-TAG</div>
          <div className="text-black/20 text-[7px]">—</div>
        </div>
      </div>

      {/* Last Modified */}
      <div className="bg-black/[0.02] rounded px-2 py-1.5 border border-black/5">
        <div className="text-black/35 text-[6px] uppercase font-bold tracking-wide mb-0.5">LAST MODIFIED</div>
        <div className="text-black/55 text-[7px] font-medium">14 mars 2026 <span className="text-[6px] ml-1 px-1 rounded bg-primary/10 text-primary font-bold">today browser</span></div>
      </div>
    </div>
  )
}

function TitresPanel() {
  const hs = [
    { lv: 'H1', t: "L'Or de J'adore", c: '#4ADE80', i: 0 },
    { lv: 'H2', t: 'Essence de parfum — notes florales et solaires', c: '#60A5FA', i: 1 },
    { lv: 'H2', t: 'Rechargeable · Intensité modérée', c: '#60A5FA', i: 1 },
    { lv: 'H2', t: "Idées cadeaux Dior", c: '#60A5FA', i: 1 },
    { lv: 'H3', t: 'Cadeau exclusif dès 170€', c: '#FBBF24', i: 2 },
    { lv: 'H3', t: 'Service de gravure personnalisé', c: '#FBBF24', i: 2 },
    { lv: 'H2', t: "L'essai avec Dior", c: '#60A5FA', i: 1 },
  ]
  return (
    <div className="p-1.5 flex flex-col gap-0.5 bg-white">
      <div className="flex items-center justify-between bg-black/5 rounded px-2 py-1.5 mb-1 border border-black/5">
        <span className="text-black/40 text-[6.5px] uppercase font-bold tracking-wide">7 balises — lor-de-jadore</span>
        <span className="text-[6px] px-1.5 rounded font-semibold bg-green-100 text-green-700">Structure ✓</span>
      </div>
      {hs.map((h, i) => (
        <div key={i} className="flex items-center gap-1.5 py-1 rounded hover:bg-black/5 transition-colors" style={{ paddingLeft: 8 + h.i * 8 }}>
          <span className="text-[6.5px] font-black px-1 rounded flex-shrink-0" style={{ background: `${h.c}20`, color: h.c }}>{h.lv}</span>
          <span className="text-black/60 text-[7px] font-bold truncate">{h.t}</span>
        </div>
      ))}
    </div>
  )
}

function SchemaPanel() {
  return (
    <div className="p-1.5 flex flex-col gap-1.5 bg-white">
      <div className="flex items-center gap-2 bg-black/5 rounded px-2 py-1.5 border border-black/5">
        <span className="text-primary font-black text-base">4</span>
        <span className="text-black/40 text-[7px] font-bold">Schema types — product page</span>
      </div>
      {[
        { type: 'Product', props: 11, valid: true, detail: 'name, price, image, availability…' },
        { type: 'BreadcrumbList', props: 4, valid: true, detail: 'Accueil › Parfums › J\'adore › L\'Or' },
        { type: 'Organization', props: 7, valid: true, detail: 'name, logo, sameAs, url…' },
        { type: 'WebPage', props: 3, valid: false, detail: '⚠ dateModified manquant' },
      ].map(s => (
        <div key={s.type} className="bg-black/[0.02] rounded px-2 py-1.5 border border-black/5">
          <div className="flex items-center justify-between mb-0.5">
            <span className="text-primary font-black text-[8px] uppercase">{s.type}</span>
            <span className="text-[6px] px-1.5 rounded font-black uppercase tracking-widest"
              style={{ background: s.valid ? '#DCFCE7' : '#FEF3C7', color: s.valid ? '#166534' : '#92400E' }}>
              {s.valid ? 'Valid' : 'Warning'}
            </span>
          </div>
          <div className="text-black/30 text-[6.5px] font-bold">{s.props} props · {s.detail}</div>
        </div>
      ))}
    </div>
  )
}

function RedirectionsPanel() {
  return (
    <div className="p-1.5 flex flex-col gap-1.5 bg-white">
      <div className="flex items-center gap-2 bg-black/5 rounded px-2 py-1.5 border border-black/5">
        <span className="font-black text-base text-green-600">0</span>
        <span className="text-black/40 text-[7px] font-bold">redirection(s) — accès direct 200</span>
      </div>
      <div className="flex overflow-hidden rounded-md border border-black/5 bg-white">
        <div className="flex flex-col items-center justify-center px-2.5 py-2.5 min-w-[42px] bg-green-500">
          <span className="font-black text-white text-sm leading-none">200</span>
          <span className="text-white/50 text-[6px] font-bold mt-0.5 uppercase">38ms</span>
        </div>
        <div className="flex-1 bg-black/[0.02] px-2 py-2">
          <p className="text-[7px] font-bold leading-tight">
            <span className="text-red-500">https://www.dior.com</span>
            <span className="text-blue-500">/fr_fr/beauty/products/</span>
            <span className="text-black/40">lor-de-jadore-Y0997096.html</span>
          </p>
          <p className="text-black/35 text-[6.5px] font-black uppercase tracking-widest mt-1">OK — Destination finale ✓</p>
        </div>
      </div>
      <div className="bg-black/[0.02] rounded px-2 py-1.5 border border-black/5">
        <div className="text-black/35 text-[6.5px] font-black uppercase tracking-widest mb-1">Autres URLs testées</div>
        {[
          { url: 'http://dior.com/lor-de-jadore', note: '→ HTTPS + www (301+301+200)' },
          { url: 'dior.com/fr_fr/beauty/...', note: '→ 200 via canonical' },
        ].map((r, i) => (
          <div key={i} className="flex items-center gap-1.5 py-1 border-b border-black/5 last:border-0">
            <span className="text-[6px] px-1 rounded font-black bg-amber-100 text-amber-700">301</span>
            <span className="text-blue-500 text-[6.5px] font-bold truncate">{r.url}</span>
            <span className="text-black/25 text-[6px] font-bold flex-shrink-0">{r.note}</span>
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
    <div className="p-1.5 flex flex-col gap-1 bg-white">
      <div className="flex items-center justify-between bg-black/5 rounded px-2 py-1.5 mb-1 border border-black/5">
        <span className="text-black/40 text-[6.5px] font-bold">12 images — page produit</span>
        <span className="text-[6px] px-1.5 rounded font-black bg-amber-100 text-amber-700">2 sans alt ⚠</span>
      </div>
      {imgs.map(img => (
        <div key={img.src} className="flex items-start gap-1.5 bg-black/5 rounded px-2 py-1.5 border border-black/5">
          <div className="w-5 h-5 rounded bg-black/10 flex items-center justify-center text-[7px] text-black/20 flex-shrink-0 mt-0.5">◇</div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <p className="text-blue-500 font-bold truncate text-[7px]">{img.src}</p>
              <span className="text-[5.5px] font-black ml-1 px-1 rounded flex-shrink-0 bg-blue-50 text-blue-500">{img.dims}</span>
            </div>
            {img.ok
              ? <p className="text-black/35 text-[6.5px] font-medium truncate">{img.alt}</p>
              : <p className="text-[6.5px] font-black text-amber-600 uppercase tracking-widest mt-0.5">⚠ alt manquant</p>
            }
          </div>
        </div>
      ))}
    </div>
  )
}

function LiensPanel() {
  return (
    <div className="p-1.5 flex flex-col gap-1.5 bg-white">
      <div className="grid grid-cols-2 gap-1 mb-1">
        {[['Internes', '14', 'primary'], ['Externes', '3', 'blue-400']].map(([l, v]) => (
          <div key={l} className="bg-black/5 rounded p-3 text-center border border-black/5">
            <div className="font-black text-xl text-black">{v}</div>
            <div className="text-black/30 text-[6px] font-black uppercase tracking-[0.2em]">{l}</div>
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
        <div key={i} className="flex items-center gap-2 bg-black/5 rounded px-2 py-1.5 border border-black/5">
          <span className="text-[5.5px] font-black px-1.5 py-0.5 rounded flex-shrink-0 uppercase tracking-widest"
            style={{ background: l.type === 'int' ? '#EDE9FE' : '#DBEAFE', color: l.type === 'int' ? '#7C3AED' : '#2563EB' }}>
            {l.type === 'int' ? 'INT' : 'EXT'}
          </span>
          <span className="text-blue-500 font-bold truncate text-[6.5px] flex-1">{l.href}</span>
          <span className="text-[5.5px] font-black uppercase tracking-widest" style={{ color: l.follow ? '#16A34A' : '#D97706' }}>{l.follow ? 'follow' : 'nofollow'}</span>
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
    <div className="flex flex-col items-center justify-center h-full p-4 gap-2 text-center bg-white">
      <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg bg-black/5 text-black/60">{p?.icon ?? '◉'}</div>
      <span className="text-black/60 font-bold text-[8px] uppercase tracking-wide">{p?.label ?? id}</span>
      <span className="text-black/30 text-[7px] leading-snug max-w-[160px]">{p?.desc ?? ''}</span>
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
    <div className="relative flex-1 overflow-hidden select-none bg-white" style={{ minWidth: 0 }}>
      {/* Added clear background for Dior page */}
      <img
        src="/site-diorproduct.jpg"
        alt="Dior L'Or de J'adore product page"
        className="w-full h-full object-cover object-top opacity-90"
        style={{ display: 'block' }}
      />
      <div className="absolute inset-y-0 right-0 w-10 pointer-events-none bg-gradient-to-r from-transparent to-white/20" />
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



  return (
    <section className="relative bg-white py-32 px-6 overflow-hidden grain-bg border-y border-black/5">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
      <div className="absolute pointer-events-none" style={{ inset: 0, background: 'radial-gradient(ellipse 60% 40% at 50% 100%, rgba(124,58,237,0.1) 0%, transparent 70%)' }} />

      <div className="max-w-5xl mx-auto flex flex-col items-center gap-16">
        <div className="text-center flex flex-col gap-6">
          <p className="text-[10px] font-black tracking-[0.3em] uppercase text-black/40">
            {t.eyebrow}
          </p>
          <h2 className="text-4xl md:text-7xl font-black text-black tracking-tighter leading-[0.95] text-balance">
            {t.headline}
          </h2>
          <p className="text-black/50 text-xl font-medium max-w-xl mx-auto leading-relaxed text-balance">
            {t.sub}
          </p>
        </div>

        {/* Browser frame */}
        <div className="w-full relative">
          <div className="relative rounded-[32px] overflow-hidden editorial-card bg-white" style={{ border: '1px solid rgba(0,0,0,0.05)' }}>
            {/* Browser top bar */}
            <div className="flex items-center gap-4 px-6 py-4 bg-[#F5F5F7] border-bottom border-black/5">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-black/10" />
                <div className="w-3 h-3 rounded-full bg-black/10" />
                <div className="w-3 h-3 rounded-full bg-black/10" />
              </div>
              <div className="flex-1 mx-4 flex items-center gap-3 bg-white rounded-xl px-4 py-2 border border-black/5">
                <span className="text-[10px] text-black/20">🔒</span>
                <span className="text-[11px] font-bold flex items-center gap-0">
                  <span className="text-red-500">www.dior.com</span>
                  <span className="text-blue-500">/fr_fr/beauty/products/</span>
                  <span className="text-black/30">lor-de-jadore-Y0997096.html</span>
                </span>
                {touring && <span className="text-[9px] font-black animate-pulse ml-auto uppercase tracking-widest text-primary">Scanning…</span>}
              </div>
              {/* Extension icon + badge */}
              <div className="flex items-center gap-2 flex-shrink-0 px-3 py-1.5 rounded-xl bg-white border border-black/5 shadow-sm">
                <img src="/src/assets/icon.png" alt="" className="w-5 h-5 grayscale opacity-50" />
                <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-green-500 text-white shadow-sm">200</span>
              </div>
            </div>

            {/* Main content: site + extension panel */}
            <div className="flex bg-white" style={{ minHeight: 600 }}>
              <DiorPage />

              {/* Extension panel — real layout */}
              {started && (
                <div className="flex-shrink-0 flex animate-in slide-in-from-right duration-500" style={{ width: 320, borderLeft: '1px solid rgba(0,0,0,0.05)' }}>
                  {/* Real sidebar navigation */}
                  <div className="flex flex-col border-r border-black/5 overflow-y-auto bg-[#F9F9FB]" style={{ width: 80, scrollbarWidth: 'none' }}>
                    {/* Extension header */}
                    <div className="flex flex-col items-center gap-1.5 py-4 px-2 border-b border-black/5">
                      <img src="/src/assets/icon.png" alt="" className="w-6 h-6 grayscale opacity-80" />
                      <span className="text-[6px] font-black tracking-[0.2em] uppercase text-center leading-tight text-black/40">SEARCH TOOLBOX</span>
                    </div>

                    {/* Groups + tabs */}
                    {GROUPS.map(group => (
                      <div key={group.label} className="mb-4">
                        <div className="px-2 pt-3 pb-1">
                          <span className="text-[6px] font-black uppercase tracking-[0.2em] text-black/20">
                            {group.label.slice(0, 10)}
                          </span>
                        </div>
                        {group.tabs.map(tab => {
                          const isActive = tab.id === activeTab
                          return (
                            <button
                              key={tab.id}
                              onClick={() => clickTab(tab.id)}
                              className="w-full flex flex-col items-center gap-1 py-2 px-1 transition-all cursor-pointer border-0"
                              style={{
                                background: isActive ? 'white' : 'transparent',
                                borderRight: isActive ? '3px solid #000' : '3px solid transparent',
                                boxShadow: isActive ? 'inset 0 0 10px rgba(0,0,0,0.02)' : 'none'
                              }}
                            >
                              <span className="text-[12px] grayscale opacity-80" style={{ color: isActive ? '#000' : '#888' }}>{tab.icon}</span>
                              <span className="text-[6px] font-black uppercase tracking-widest leading-tight text-center" style={{ color: isActive ? '#000' : '#888' }}>
                                {tab.label.slice(0, 10)}
                              </span>
                            </button>
                          )
                        })}
                      </div>
                    ))}
                  </div>

                  {/* Content area */}
                  <div className="flex-1 overflow-hidden bg-white">
                    {/* Panel header */}
                    <div className="flex items-center justify-between px-4 py-3 border-b border-black/5 bg-[#F9F9FB]">
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-black/80">
                        {GROUPS.flatMap(g => g.tabs).find(t => t.id === activeTab)?.label ?? 'APERÇU'}
                      </span>
                      <span className="text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full bg-green-100 text-green-700">Allowed</span>
                    </div>
                    <div className="overflow-y-auto" style={{ maxHeight: 560, scrollbarWidth: 'none' }}>
                      {PANEL_CONTENT[activeTab] ?? <GenericPanel id={activeTab} />}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Start overlay */}
          {!started && (
            <div className="absolute inset-0 flex items-center justify-center rounded-[32px]" style={{ background: 'rgba(255,255,255,0.4)', backdropFilter: 'blur(12px)' }}>
              <button onClick={startTour} className="flex flex-col items-center gap-6 group">
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center transition-transform duration-500 group-hover:scale-110 bg-white shadow-2xl border border-black/5"
                >
                  <span className="text-3xl ml-1 text-black">▶</span>
                </div>
                <div className="text-center">
                  <p className="text-xl font-black text-black tracking-tighter uppercase">Watch it in action</p>
                  <p className="text-sm text-black/40 font-bold mt-1">Dior L'Or de J'adore Analysis</p>
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
                    background: activeTab === id ? `${group?.color}18` : 'rgba(0,0,0,0.04)',
                    color: activeTab === id ? group?.color : 'rgba(0,0,0,0.4)',
                    border: `1px solid ${activeTab === id ? `${group?.color}40` : 'rgba(0,0,0,0.07)'}`,
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
