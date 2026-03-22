import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/i18n/index'
import { Mascot } from '@/components/Mascot'
import { Button } from '@/components/ui/button'
import { ArrowRight, Check } from 'lucide-react'

export function BenefitsSection() {
  const { lang } = useLanguage()
  const t = translations[lang].benefits

  const expertiseColors = [
    'offset-beginner',
    'offset-intermediate',
    'offset-expert'
  ]

  return (
    <section className="relative bg-white py-32 px-6 overflow-hidden grid-bg">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] grain-bg" />
      
      <div className="max-w-6xl mx-auto flex flex-col gap-32 relative z-10">

        {/* ── Header ── */}
        <div className="relative">
           <div className="absolute -top-12 left-1/2 -translate-x-1/2">
              <Mascot type="beginner" size={80} />
           </div>
           <p className="text-center text-[10px] font-black tracking-[0.3em] uppercase text-black/40 mb-8 pt-8">
             {t.eyebrow}
           </p>
           <h2 className="text-center text-4xl md:text-7xl font-black text-black mb-8 leading-[0.95] tracking-tighter text-balance">
             {t.headline}
           </h2>
           <p className="text-center text-black/60 text-xl font-medium mb-20 max-w-2xl mx-auto text-balance">
             {t.sub}
           </p>
        </div>

        {/* ── Feature Bento Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.groups.map((g, i) => (
            <div key={g.label} className={`editorial-card rounded-2xl p-8 flex flex-col gap-8 bg-white transition-all ${expertiseColors[i % 3]} hover:translate-x-[-2px] hover:translate-y-[-2px]`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center text-xl">{g.icon}</div>
                  <span className="font-black text-black text-lg tracking-tighter uppercase">{g.label}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span key={item} className="text-[10px] px-3 py-1.5 rounded-lg font-black uppercase tracking-widest text-black/40 bg-bone border border-black/5">
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-6 border-t border-black/5 flex items-center justify-between">
                 <span className="text-[10px] font-black uppercase tracking-widest text-black/20">{g.count} Pro Tools</span>
                 <ArrowRight className="w-4 h-4 text-black/20" />
              </div>
            </div>
          ))}

          {/* Keyboard Shortcuts - Wide Card */}
          <div className="md:col-span-2 editorial-card rounded-2xl p-8 flex flex-col md:flex-row gap-10 bg-white offset-expert">
            <div className="flex-1 flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center text-xl">⌨</div>
                <span className="font-black text-black text-lg tracking-tighter uppercase">{t.shortcuts.title}</span>
              </div>
              <p className="text-black/60 text-base font-medium leading-relaxed">
                {t.shortcuts.body}
              </p>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-4">
               {t.shortcuts.items.map((s) => (
                 <div key={s.key} className="flex flex-col gap-1.5 p-3 rounded-xl border border-black/5 bg-bone/30">
                   <kbd className="w-fit text-[10px] px-2 py-1 rounded-md font-black bg-black text-white border-2 border-black inline-block">{s.key}</kbd>
                   <span className="text-[9px] text-black/40 font-black uppercase tracking-widest leading-none">{s.label}</span>
                 </div>
               ))}
            </div>
          </div>

          {/* Mascot Success Card */}
          <div className="editorial-card rounded-2xl p-8 flex flex-col items-center justify-center text-center bg-intermediate text-white border-none shadow-none">
             <Mascot type="intermediate" state="open" size={100} />
             <p className="font-black uppercase tracking-widest text-[10px] mt-4 opacity-60">Ready to start?</p>
             <p className="text-xl font-black leading-tight mt-2">The ultimate SEO toolbox awaits.</p>
          </div>
        </div>

        {/* ── Stats Snapshot ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {t.stats.map((s, i) => (
            <div key={s.label} className="editorial-card rounded-2xl p-8 bg-white flex flex-col items-center justify-center gap-2 text-center">
              <span className={`text-5xl font-black tracking-tighter leading-none ${i === 0 ? 'text-beginner' : i === 1 ? 'text-intermediate' : 'text-black'}`}>
                 {s.value}
              </span>
              <span className="text-[10px] text-black/40 font-black uppercase tracking-[0.2em]">{s.label}</span>
            </div>
          ))}
        </div>

        {/* ── Problem & Solution: The Precision Split ── */}
        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          <div className="lg:col-span-5 flex flex-col justify-center">
            <p className="text-[10px] font-black tracking-[0.3em] uppercase text-beginner mb-8">
              {t.problem.eyebrow}
            </p>
            <h2 className="text-3xl md:text-5xl font-black text-black tracking-tighter leading-[0.95] mb-12">
              {t.problem.headline}
            </h2>
            <div className="space-y-6">
              {t.problem.items.map((p) => (
                <div key={p.text} className="flex gap-5 p-4 rounded-xl hover:bg-black/[0.02] transition-colors border border-transparent hover:border-black/5">
                  <span className="text-2xl flex-shrink-0">{p.icon}</span>
                  <p className="text-black/60 text-base font-medium leading-relaxed">{p.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 editorial-card rounded-3xl p-10 bg-white relative overflow-hidden offset-intermediate">
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                   <div className="w-6 h-6 border-2 border-white rounded-sm rotate-45" />
                </div>
                <div>
                  <p className="text-black font-black text-2xl tracking-tighter uppercase leading-none">SEARCHTOOLBOX</p>
                  <p className="text-black/40 text-[10px] font-black uppercase tracking-widest mt-1.5">{t.solution.sub}</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-y-6 gap-x-12 mb-12">
                {t.solution.items.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-lg flex items-center justify-center bg-intermediate text-white flex-shrink-0">
                       <Check className="w-3 h-3" strokeWidth={4} />
                    </div>
                    <span className="text-sm text-black font-bold opacity-80">{item}</span>
                  </div>
                ))}
              </div>
              <Button 
                size="lg"
                className="w-full h-16 rounded-xl bg-black text-white font-black uppercase tracking-[0.2em] text-xs hover:bg-black/90 hover:shadow-xl transition-all mt-auto"
              >
                {t.solution.cta}
              </Button>
            </div>
            
            {/* Background Decoration */}
            <div className="absolute -bottom-10 -right-10 opacity-10">
               <Mascot type="expert" size={240} />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
