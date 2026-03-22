import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/i18n/index'

const MENU_ITEMS = [
  { icon: '🔴', label: 'Highlight Nofollow Links', sep: false },
  { icon: '📌', label: 'Highlight Headings (H1–H6)', sep: false },
  { sep: true },
  { icon: '🔍', label: 'site:domain.com Search', sep: false },
  { icon: '🔍', label: '-inurl:https Search', sep: false },
  { icon: '📋', label: 'Check for Duplicate Content', sep: false },
  { sep: true },
  { icon: '🤖', label: 'View robots.txt', sep: false },
  { icon: '🗺️', label: 'View sitemap.xml', sep: false },
  { sep: true },
  { icon: '⚡', label: 'PageSpeed Insights', sep: false },
  { icon: '✅', label: 'Rich Results Test', sep: false },
  { icon: '📋', label: 'Schema Validator', sep: false },
  { icon: '🔎', label: 'Google Search Console', sep: false },
  { sep: true },
  { icon: '📊', label: 'Open in Ahrefs', sep: false },
  { icon: '📊', label: 'Open in SEMRush', sep: false },
  { icon: '📚', label: 'Open in Archive.org', sep: false },
  { sep: true },
  { icon: '🔴', label: 'Toggle JavaScript (reload)', sep: false },
  { icon: '♻️', label: 'Clear Cache (keep cookies)', sep: false },
  { icon: '🍪', label: 'Clear Cookies (this site)', sep: false },
  { sep: true },
  { icon: '📱', label: 'Open Mobile Preview', sep: false },
  { icon: '🎨', label: 'Pick Color from Page', sep: false },
  { icon: '📸', label: 'Screenshot — Viewport', sep: false },
  { icon: '📸', label: 'Screenshot — Full Page (scroll)', sep: false },
  { sep: true },
  { icon: '🔬', label: 'CSS Inspector', sep: false },
  { icon: '</>', label: 'View Source Code', sep: false },
  { icon: '🔗', label: 'Link Grabber', sep: false },
  { icon: '🌍', label: 'SERP VPN', sep: false },
  { icon: '🌐', label: 'Check Hreflang Tags', sep: false },
]

export function ContextMenuSection() {
  const { lang } = useLanguage()
  const t = translations[lang].contextMenu

  return (
    <section id="context-menu" className="relative bg-[#FAFAFA] py-32 px-6 overflow-hidden grain-bg border-y border-black/5">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-24">
        {/* Text */}
        <div className="flex-1 flex flex-col gap-8">
          <p className="text-[10px] font-black tracking-[0.3em] uppercase text-black/40">
            {t.eyebrow}
          </p>
          <h2 className="text-4xl md:text-7xl font-black text-black leading-[0.95] tracking-tighter text-balance">
            {t.headline}
          </h2>
          <p className="text-black/50 text-xl font-medium leading-relaxed max-w-lg text-balance">
            {t.sub}
          </p>
          <ul className="flex flex-col gap-4 mt-2 text-sm text-black/60 font-medium">
            <li className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-lg flex items-center justify-center text-[10px] font-black flex-shrink-0 bg-primary/10 text-primary border border-primary/10">✓</span>
              <span>30+ quick-access actions in the context menu</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-lg flex items-center justify-center text-[10px] font-black flex-shrink-0 bg-primary/10 text-primary border border-primary/10">✓</span>
              <span>Right-click on selected text to Google it or check duplicates</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-lg flex items-center justify-center text-[10px] font-black flex-shrink-0 bg-primary/10 text-primary border border-primary/10">✓</span>
              <span>Every item can be toggled from Settings</span>
            </li>
          </ul>
        </div>

        {/* Context menu mockup */}
        <div className="flex-1 flex justify-center">
          <div className="relative">
            {/* Browser window fragment */}
            <div className="relative rounded-2xl overflow-hidden editorial-card bg-white" style={{ width: 400 }}>
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 py-4 bg-[#F5F5F7] border-bottom border-black/5">
                <div className="flex gap-1.5 flex-shrink-0">
                   <div className="w-2.5 h-2.5 rounded-full bg-black/10" />
                   <div className="w-2.5 h-2.5 rounded-full bg-black/10" />
                   <div className="w-2.5 h-2.5 rounded-full bg-black/10" />
                </div>
                <div className="flex-1 mx-2 bg-white rounded px-3 py-1 text-[9px] text-black/30 font-bold border border-black/5">
                  https://example.com/product-page
                </div>
              </div>

              {/* Page content (blurred) */}
              <div className="relative bg-white" style={{ height: 260 }}>
                <div className="absolute inset-0 p-8 flex flex-col gap-4 opacity-10">
                  {[100,60,80,45,70,35,90,55].map((w,i) => (
                    <div key={i} className="rounded-full h-3" style={{ width: `${w}%`, background: 'black' }} />
                  ))}
                </div>

                {/* Context menu overlay */}
                <div
                  className="absolute top-12 left-12 rounded-xl overflow-hidden"
                  style={{
                    width: 260,
                    background: 'rgba(255,255,255,0.85)',
                    backdropFilter: 'blur(20px) saturate(180%)',
                    border: '1px solid rgba(0,0,0,0.08)',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.12)',
                    fontSize: 11,
                  }}
                >
                  {/* Parent item */}
                  <div className="flex items-center justify-between px-4 py-3 bg-primary/5 border-bottom border-black/5">
                    <span className="font-black text-primary uppercase tracking-tighter">Search Toolbox</span>
                    <span className="text-primary/50 text-[10px]">▶</span>
                  </div>

                  {/* Scrollable submenu */}
                  <div className="py-2">
                    {MENU_ITEMS.slice(0, 18).map((item, i) => {
                      if (item.sep) return <div key={i} className="my-1.5 mx-3 h-px bg-black/5" />
                      return (
                        <div key={i} className="flex items-center gap-3 px-4 py-1.5 hover:bg-primary hover:text-white group transition-colors cursor-default">
                          <span className="text-[12px] w-5 flex-shrink-0 group-hover:grayscale-0 grayscale">{item.icon}</span>
                          <span className="text-black/70 font-bold text-[10px] truncate group-hover:text-white">{item.label}</span>
                        </div>
                      )
                    })}
                    <div className="px-4 py-2 text-[9px] text-black/30 font-black uppercase tracking-widest italic">+ 10 more items...</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
