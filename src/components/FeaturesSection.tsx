import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/i18n/index'

const groupColors: Record<string, string> = {
  Semantic:   'rgba(167,139,250,0.15)',
  Sémantique: 'rgba(167,139,250,0.15)',
  Technical:  'rgba(57,211,255,0.15)',
  Technique:  'rgba(57,211,255,0.15)',
  Netlinking: 'rgba(45,212,191,0.15)',
  Toolbox:    'rgba(250,204,21,0.15)',
  Outils:     'rgba(250,204,21,0.15)',
}

export function FeaturesSection() {
  const { lang } = useLanguage()
  const t = translations[lang].features

  return (
    <section id="features" className="bg-background py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-5">{t.eyebrow}</p>
        <h2
          className="text-center text-4xl md:text-5xl font-semibold bg-clip-text text-transparent mb-4 tracking-tight"
          style={{ backgroundImage: 'linear-gradient(135deg, #e8e8e9 0%, #a78bfa 100%)' }}
        >
          {t.headline}
        </h2>
        <p className="text-center text-lg text-muted-foreground max-w-lg mx-auto mb-16">{t.sub}</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {t.items.map((f) => (
            <div key={f.title} className="group liquid-glass rounded-2xl p-6 flex flex-col gap-3 hover:bg-white/[0.04] transition-all duration-200 cursor-default">
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-base font-bold flex-shrink-0"
                  style={{ background: groupColors[f.label] ?? 'rgba(255,255,255,0.07)', color: f.color }}
                >
                  {f.icon}
                </div>
                <div>
                  <p className="text-foreground font-semibold text-sm leading-tight">{f.title}</p>
                  <p className="text-xs mt-0.5 font-medium" style={{ color: f.color }}>{f.label}</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
