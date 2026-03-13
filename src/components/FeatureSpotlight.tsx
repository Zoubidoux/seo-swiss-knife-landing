import { ExtensionMockup } from '@/components/ExtensionMockup'
import type { MockupTab } from '@/components/ExtensionMockup'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/i18n/index'

const TABS: MockupTab[] = ['overview', 'redirects', 'schema']

export function FeatureSpotlight() {
  const { lang } = useLanguage()
  const spotlights = translations[lang].spotlight

  return (
    <section className="bg-background py-24 px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-36">
        {spotlights.map((s, i) => (
          <div key={s.eyebrow} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-16`}>
            <div className="flex-1 flex flex-col gap-5">
              <p className="text-sm font-semibold tracking-widest uppercase" style={{ color: i % 2 === 0 ? '#a78bfa' : '#39d3ff' }}>
                {s.eyebrow}
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-snug tracking-tight">{s.title}</h2>
              <p className="text-muted-foreground text-base leading-relaxed">{s.body}</p>
              <ul className="flex flex-col gap-2 mt-2">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-foreground/80">
                    <span
                      className="mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 text-[9px] font-bold"
                      style={{ background: i % 2 === 0 ? 'rgba(167,139,250,0.2)' : 'rgba(57,211,255,0.2)', color: i % 2 === 0 ? '#a78bfa' : '#39d3ff' }}
                    >✓</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative">
                <div
                  className="absolute inset-0 rounded-3xl blur-3xl opacity-30 pointer-events-none"
                  style={{ background: `radial-gradient(circle, ${i % 2 === 0 ? '#7c3aed' : '#0891b2'} 0%, transparent 70%)`, transform: 'scale(1.2)' }}
                />
                <ExtensionMockup activeTab={TABS[i]} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
