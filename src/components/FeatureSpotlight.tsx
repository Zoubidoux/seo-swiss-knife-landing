import { ExtensionMockup } from '@/components/ExtensionMockup'
import type { MockupTab } from '@/components/ExtensionMockup'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/i18n/index'

const TABS: MockupTab[] = ['overview', 'redirects', 'schema']

export function FeatureSpotlight() {
  const { lang } = useLanguage()
  const spotlights = translations[lang].spotlight

  return (
    <section className="bg-background py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-14">
        {spotlights.map((s, i) => {
          const accent = i % 2 === 0 ? '#a78bfa' : '#39d3ff'
          return (
            <div key={s.eyebrow} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10`}>
              {/* Text side */}
              <div className="flex-1 flex flex-col gap-3 max-w-sm">
                <p className="text-xs font-bold tracking-widest uppercase" style={{ color: accent }}>
                  {s.eyebrow}
                </p>
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground leading-snug tracking-tight">{s.title}</h2>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.body}</p>
                <ul className="flex flex-col gap-1.5 mt-1">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-foreground/75">
                      <span
                        className="w-3.5 h-3.5 rounded-full flex items-center justify-center flex-shrink-0 text-[8px] font-bold"
                        style={{ background: `${accent}20`, color: accent }}
                      >✓</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mockup side */}
              <div className="flex-1 flex justify-center">
                <div className="relative" style={{ transform: 'scale(0.82)', transformOrigin: 'center' }}>
                  <div
                    className="absolute inset-0 rounded-3xl blur-3xl opacity-20 pointer-events-none"
                    style={{ background: `radial-gradient(circle, ${i % 2 === 0 ? '#7c3aed' : '#0891b2'} 0%, transparent 70%)`, transform: 'scale(1.2)' }}
                  />
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
