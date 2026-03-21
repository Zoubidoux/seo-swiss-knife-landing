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
    <section id="context-menu" className="relative bg-background py-28 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Text */}
        <div className="flex-1 flex flex-col gap-5">
          <p className="text-sm font-semibold tracking-widest uppercase text-primary">{t.eyebrow}</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground leading-tight tracking-tight">
            {t.headline}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">{t.sub}</p>
          <ul className="flex flex-col gap-2 mt-2 text-sm text-foreground/70">
            <li className="flex items-start gap-2.5"><span className="text-primary mt-0.5">✓</span> 30+ quick-access actions in the context menu</li>
            <li className="flex items-start gap-2.5"><span className="text-primary mt-0.5">✓</span> Right-click on selected text to Google it or check duplicates</li>
            <li className="flex items-start gap-2.5"><span className="text-primary mt-0.5">✓</span> Every item can be toggled from Settings</li>
          </ul>
        </div>

        {/* Context menu mockup */}
        <div className="flex-1 flex justify-center">
          <div className="relative">
            {/* Glow */}
            <div
              className="absolute inset-0 rounded-3xl blur-3xl opacity-20 pointer-events-none"
              style={{ background: 'radial-gradient(circle, #7c3aed 0%, transparent 70%)', transform: 'scale(1.3)' }}
            />

            {/* Browser window fragment */}
            <div className="relative rounded-xl overflow-hidden" style={{ width: 340, boxShadow: '0 24px 64px rgba(0,0,0,0.7)', border: '1px solid rgba(255,255,255,0.08)' }}>
              {/* Browser chrome */}
              <div className="flex items-center gap-1.5 px-3 py-2.5" style={{ background: '#1a1a2e', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                <div className="flex-1 mx-2 bg-white/5 rounded px-2 py-0.5 text-[9px] text-white/30">https://example.com/product-page</div>
              </div>

              {/* Page content (blurred) */}
              <div className="relative" style={{ background: '#0d1117', height: 180 }}>
                <div className="absolute inset-0 p-4 flex flex-col gap-2 opacity-25">
                  {[100,60,80,45,70,35].map((w,i) => (
                    <div key={i} className="rounded h-2" style={{ width: `${w}%`, background: 'rgba(255,255,255,0.2)' }} />
                  ))}
                </div>

                {/* Context menu overlay */}
                <div
                  className="absolute top-6 left-16 rounded-lg overflow-hidden"
                  style={{
                    width: 240,
                    background: '#1e1e2e',
                    border: '1px solid rgba(255,255,255,0.12)',
                    boxShadow: '0 12px 40px rgba(0,0,0,0.7)',
                    fontSize: 10,
                  }}
                >
                  {/* Parent item */}
                  <div className="flex items-center justify-between px-3 py-2" style={{ background: 'rgba(167,139,250,0.15)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                    <span className="font-bold text-[#a78bfa]">🧰 Search Toolbox</span>
                    <span className="text-white/40 text-[9px]">▶</span>
                  </div>

                  {/* Scrollable submenu (show first 18 items) */}
                  <div style={{ maxHeight: 130, overflowY: 'hidden' }}>
                    {MENU_ITEMS.slice(0, 22).map((item, i) => {
                      if (item.sep) return <div key={i} className="my-0.5 mx-2 h-px" style={{ background: 'rgba(255,255,255,0.08)' }} />
                      return (
                        <div key={i} className="flex items-center gap-2 px-3 py-1 hover:bg-white/5 cursor-default">
                          <span className="text-[10px] w-4 flex-shrink-0">{item.icon}</span>
                          <span className="text-white/70 text-[9px] truncate">{item.label}</span>
                        </div>
                      )
                    })}
                    <div className="px-3 py-1 text-[8px] text-white/30 italic">+ 10 more items...</div>
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
