import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/i18n/index'

export function ProblemSection() {
  const { lang } = useLanguage()
  const t = translations[lang].problem

  return (
    <section className="relative bg-[#F5F2EE] py-32 px-6 overflow-hidden grain-bg">
      <div className="relative max-w-5xl mx-auto flex flex-col items-center">
        <p className="text-center text-[10px] font-black tracking-[0.3em] uppercase text-black/40 mb-8">
           The Problem
        </p>
        
        <h2 className="text-center text-4xl md:text-7xl font-black text-black leading-[0.95] mb-10 tracking-tighter text-balance max-w-4xl">
           Every SEO audit feels like <span className="relative">assembling IKEA furniture<svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/30" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/></svg></span> without the manual.
        </h2>

        <p className="text-center text-xl md:text-2xl text-black/50 max-w-2xl mx-auto mb-20 leading-relaxed font-medium text-balance">
          {t.sub}
        </p>

        <div className="grid md:grid-cols-3 gap-8 w-full">
          {t.pains.map((p) => (
            <div key={p.title} className="editorial-card rounded-2xl p-8 flex flex-col gap-6 hover:translate-y-[-4px] transition-transform">
              <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-3xl">
                {p.icon}
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-black font-black text-xl leading-tight tracking-tight">{p.title}</h3>
                <p className="text-black/60 text-sm leading-relaxed font-medium">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
