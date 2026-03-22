import { ExtensionMockup } from '@/components/ExtensionMockup'
import type { MockupTab } from '@/components/ExtensionMockup'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/i18n/index'

const TABS: MockupTab[] = ['overview', 'redirects', 'schema']

export function FeatureSpotlight() {
  const { lang } = useLanguage()
  const spotlights = translations[lang].spotlight

  return (
    <section className="bg-white py-24 px-6 overflow-hidden grain-bg">
      <div className="max-w-6xl mx-auto flex flex-col gap-32">
        {spotlights.map((s, i) => {
          const accent = i % 2 === 0 ? '#a78bfa' : '#39d3ff'
          return (
            <div key={s.eyebrow} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-16 md:gap-24`}>
              {/* Text side */}
              <div className="flex-1 flex flex-col gap-6 text-center md:text-left animate-in fade-in slide-in-from-bottom-8 duration-1000">
                <p className="text-[10px] font-black tracking-[0.3em] uppercase" style={{ color: accent }}>
                  {s.eyebrow}
                </p>
                <h2 className="text-4xl md:text-6xl font-black text-black leading-[0.95] tracking-tighter text-balance">{s.title}</h2>
                <p className="text-black/50 text-xl leading-relaxed font-medium text-balance">{s.body}</p>
                
                <ul className="flex flex-col gap-4 mt-4">
                  {s.bullets.map(b => (
                    <li key={b} className="flex items-center gap-3 justify-center md:justify-start">
                      <div className="w-2 h-2 rounded-sm rotate-45" style={{ background: accent }} />
                      <span className="text-sm font-bold text-black/70">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mockup side */}
              <div className="flex-1 flex justify-center w-full max-w-2xl animate-in fade-in zoom-in-95 duration-1000">
                <div className="editorial-card rounded-3xl p-6 shadow-2xl relative group">
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                  <ExtensionMockup activeTab={TABS[i]} />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
