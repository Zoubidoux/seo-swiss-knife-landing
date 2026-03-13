import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/i18n/index'

export function ProblemSection() {
  const { lang } = useLanguage()
  const t = translations[lang].problem

  return (
    <section className="relative bg-background py-32 px-6 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      <div className="relative max-w-5xl mx-auto">
        <p className="text-center text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-5">{t.eyebrow}</p>
        <h2 className="text-center text-4xl md:text-5xl font-semibold text-foreground leading-tight mb-6 tracking-tight">
          {t.headline.split('\n').map((line, i) => <span key={i}>{line}{i === 0 && <br />}</span>)}
        </h2>
        <p className="text-center text-lg text-muted-foreground max-w-xl mx-auto mb-16 leading-relaxed">{t.sub}</p>
        <div className="grid md:grid-cols-3 gap-5">
          {t.pains.map((p) => (
            <div key={p.title} className="liquid-glass rounded-2xl p-7 flex flex-col gap-4 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
              <span className="text-3xl">{p.icon}</span>
              <h3 className="text-foreground font-semibold text-base leading-snug">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
