import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/i18n/index'

const COLORS = ['#a78bfa', '#39d3ff', '#2dd4bf']

export function HowItWorks() {
  const { lang } = useLanguage()
  const t = translations[lang].howItWorks

  return (
    <section id="how-it-works" className="relative bg-background py-28 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-5">{t.eyebrow}</p>
        <h2
          className="text-center text-4xl md:text-5xl font-semibold bg-clip-text text-transparent mb-16 tracking-tight"
          style={{ backgroundImage: 'linear-gradient(135deg, #e8e8e9 0%, #a78bfa 100%)' }}
        >
          {t.headline}
        </h2>
        <div className="relative grid md:grid-cols-3 gap-8">
          <div className="hidden md:block absolute top-10 left-[16.6%] right-[16.6%] h-px bg-gradient-to-r from-[#a78bfa] via-[#39d3ff] to-[#2dd4bf] opacity-30" />
          {t.steps.map((s, i) => (
            <div key={s.num} className="flex flex-col items-center text-center gap-5 relative">
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-black z-10"
                style={{ background: `${COLORS[i]}18`, border: `1px solid ${COLORS[i]}30`, color: COLORS[i], boxShadow: `0 0 32px ${COLORS[i]}20` }}
              >
                {s.num}
              </div>
              <h3 className="text-foreground font-semibold text-lg">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
