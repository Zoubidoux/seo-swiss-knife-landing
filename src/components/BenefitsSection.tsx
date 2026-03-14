import { useLanguage } from '@/contexts/LanguageContext'

const BEFORE_AFTER = [
  {
    before: { time: '47 min', desc: 'Open 6 different tools', icon: '😩' },
    after:  { time: '< 1 min', desc: 'One panel, everything instant', icon: '⚡' },
    label: 'Full Page Audit',
  },
  {
    before: { time: '20 min', desc: 'Trace redirects manually with curl', icon: '😮‍💨' },
    after:  { time: '3 sec', desc: 'Full chain with status + latency', icon: '⇕' },
    label: 'Redirect Chain',
  },
  {
    before: { time: '35 min', desc: 'Copy-paste to schema validator', icon: '📋' },
    after:  { time: '5 sec', desc: 'Validated in-panel with error flags', icon: '{}' },
    label: 'Schema Validation',
  },
  {
    before: { time: '1.5 hr', desc: 'Manual client report in a spreadsheet', icon: '😤' },
    after:  { time: '10 sec', desc: 'PDF report, client-ready', icon: '📄' },
    label: 'SEO Report',
  },
]

const STATS = [
  { value: '2h+', label: 'Saved per audit', color: '#a78bfa' },
  { value: '20+', label: 'Tools in one sidebar', color: '#39d3ff' },
  { value: '0', label: 'Context switches needed', color: '#2dd4bf' },
  { value: '10s', label: 'Client PDF report', color: '#facc15' },
]

export function BenefitsSection() {
  const { lang } = useLanguage()

  return (
    <section className="relative bg-background py-28 px-6 overflow-hidden">
      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(167,139,250,0.3), transparent)' }} />

      <div className="max-w-6xl mx-auto flex flex-col gap-24">

        {/* ── Block 1: Before / After ── */}
        <div>
          <p className="text-center text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-5">
            {lang === 'fr' ? 'Gain de temps' : 'Time Savings'}
          </p>
          <h2
            className="text-center text-4xl md:text-5xl font-semibold bg-clip-text text-transparent mb-4 tracking-tight"
            style={{ backgroundImage: 'linear-gradient(135deg, #e8e8e9 0%, #a78bfa 100%)' }}
          >
            {lang === 'fr' ? 'Arrêtez de perdre 2h par audit.' : 'Stop wasting 2h per audit.'}
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-14 max-w-xl mx-auto">
            {lang === 'fr'
              ? 'Chaque tâche SEO que vous faites manuellement a une alternative en 1 clic dans SSK.'
              : 'Every SEO task you do manually has a 1-click alternative inside SSK.'}
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {BEFORE_AFTER.map((item) => (
              <div key={item.label} className="liquid-glass rounded-2xl overflow-hidden">
                <div className="px-4 py-3 border-b border-white/[0.06]">
                  <p className="text-xs font-bold text-foreground/70 uppercase tracking-widest">{item.label}</p>
                </div>
                {/* Before */}
                <div className="px-4 py-4 border-b border-white/[0.04]" style={{ background: 'rgba(239,68,68,0.04)' }}>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-lg">{item.before.icon}</span>
                    <span className="text-2xl font-black" style={{ color: '#ef4444' }}>{item.before.time}</span>
                  </div>
                  <p className="text-xs text-white/40 leading-relaxed">{item.before.desc}</p>
                  <p className="text-[9px] uppercase tracking-widest font-semibold mt-2" style={{ color: 'rgba(239,68,68,0.5)' }}>
                    {lang === 'fr' ? 'Sans SSK' : 'Without SSK'}
                  </p>
                </div>
                {/* After */}
                <div className="px-4 py-4" style={{ background: 'rgba(34,197,94,0.04)' }}>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-lg">{item.after.icon}</span>
                    <span className="text-2xl font-black" style={{ color: '#22c55e' }}>{item.after.time}</span>
                  </div>
                  <p className="text-xs text-white/40 leading-relaxed">{item.after.desc}</p>
                  <p className="text-[9px] uppercase tracking-widest font-semibold mt-2" style={{ color: 'rgba(34,197,94,0.5)' }}>
                    {lang === 'fr' ? 'Avec SSK' : 'With SSK'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Block 2: Stat row ── */}
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

        {/* ── Block 3: Problem narrative ── */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: '#f97316' }}>
              {lang === 'fr' ? 'Le vrai problème' : 'The Real Problem'}
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-snug tracking-tight mb-6">
              {lang === 'fr'
                ? 'Vos outils sont partout. Votre concentration, nulle part.'
                : 'Your tools are everywhere. Your focus is nowhere.'}
            </h2>
            <div className="flex flex-col gap-4">
              {[
                {
                  icon: '🗂',
                  title: lang === 'fr' ? '6 onglets ouverts pour un seul audit' : '6 tabs open for a single audit',
                  body: lang === 'fr'
                    ? 'Validateur schema ici, checker redirect là, robot.txt ailleurs — le changement de contexte tue votre productivité.'
                    : 'Schema validator here, redirect checker there, robots.txt somewhere else — context-switching kills your flow.',
                },
                {
                  icon: '⏰',
                  title: lang === 'fr' ? 'Rapports clients = 2h de copy-paste' : 'Client reports = 2h of copy-paste',
                  body: lang === 'fr'
                    ? 'Copier des meta tags dans des spreadsheets pendant que de vrais problèmes SEO attendent. C\'est fini.'
                    : 'Copy-pasting meta tags into spreadsheets while real SEO problems wait. Not anymore.',
                },
                {
                  icon: '🔍',
                  title: lang === 'fr' ? 'Problèmes critiques détectés trop tard' : 'Critical issues spotted too late',
                  body: lang === 'fr'
                    ? 'Hreflang cassé, canonical manquant, structured data malformé — des erreurs invisibles jusqu\'à ce qu\'elles coûtent des rankings.'
                    : 'Broken hreflang, missing canonical, malformed structured data — invisible until they cost you rankings.',
                },
              ].map((p) => (
                <div key={p.title} className="flex gap-4">
                  <span className="text-2xl flex-shrink-0 mt-0.5">{p.icon}</span>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground mb-1">{p.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{p.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Solution side */}
          <div className="liquid-glass rounded-2xl p-8 flex flex-col gap-5">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl" style={{ background: 'rgba(167,139,250,0.15)', color: '#a78bfa' }}>🔪</div>
              <div>
                <p className="text-foreground font-bold text-base">SEO Swiss Knife</p>
                <p className="text-muted-foreground text-xs">{lang === 'fr' ? 'La solution en un panneau' : 'The one-panel solution'}</p>
              </div>
            </div>
            {[
              { icon: '✓', text: lang === 'fr' ? 'Audit complet en moins d\'1 seconde' : 'Full audit in under 1 second', color: '#22c55e' },
              { icon: '✓', text: lang === 'fr' ? '20+ outils dans un seul sidebar Chrome' : '20+ tools in a single Chrome sidebar', color: '#22c55e' },
              { icon: '✓', text: lang === 'fr' ? 'Rapport PDF client en 10 secondes' : 'Client PDF report in 10 seconds', color: '#22c55e' },
              { icon: '✓', text: lang === 'fr' ? 'Aucun compte, aucune clé API requise' : 'No account, no API key required', color: '#22c55e' },
              { icon: '✓', text: lang === 'fr' ? 'Schema, redirects, hreflang — tout validé' : 'Schema, redirects, hreflang — all validated', color: '#22c55e' },
              { icon: '✓', text: lang === 'fr' ? 'Fonctionne sur chaque page que vous visitez' : 'Works on every page you visit', color: '#22c55e' },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black flex-shrink-0" style={{ background: `${item.color}20`, color: item.color }}>{item.icon}</span>
                <span className="text-sm text-foreground/80">{item.text}</span>
              </div>
            ))}
            <button className="mt-4 w-full py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all hover:opacity-90" style={{ background: 'linear-gradient(135deg, rgba(167,139,250,0.25), rgba(57,211,255,0.2))', color: '#e8e8e9', border: '1px solid rgba(167,139,250,0.3)' }}>
              {lang === 'fr' ? 'Installer gratuitement →' : 'Install for Free →'}
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}
