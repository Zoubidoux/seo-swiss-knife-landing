import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/i18n/index'
import { Button } from '@/components/ui/button'
import { PixelHeart } from '@/components/PixelHeart'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Sparkles, Bot, User } from 'lucide-react'

export function AiAgentHomeSection() {
  const { lang } = useLanguage()
  const t = translations[lang].aiAgent.homepage
  const [chatStep, setChatStep] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setChatStep(prev => (prev + 1) % 4)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="ai-agent" className="relative bg-[#020617] py-24 px-6 overflow-hidden border-t border-white/5">
      {/* Background decoration */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.08]"
          style={{ background: 'radial-gradient(circle, #a78bfa 0%, transparent 70%)' }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Content side */}
          <div className="flex-1 flex flex-col gap-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-black tracking-[0.2em] uppercase self-center lg:self-start"
              style={{ background: 'rgba(167,139,250,0.12)', border: '1px solid rgba(167,139,250,0.22)', color: '#a78bfa' }}>
              <Sparkles className="w-3.5 h-3.5" />
              {t.eyebrow}
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black leading-[0.95] tracking-tighter text-white">
              {t.headline}
            </h2>
            
            <p className="text-xl text-white/50 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
              {t.subheadline}
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              {t.features.map((f, i) => (
                <div key={i} className="flex flex-col gap-2 p-6 rounded-3xl bg-white/[0.03] border border-white/[0.05] hover:border-purple-500/30 transition-all hover:bg-white/[0.05] text-left">
                  <h4 className="font-black text-xs uppercase tracking-widest text-white flex items-center gap-2">
                    <span className="text-purple-400">✦</span> {f.title}
                  </h4>
                  <p className="text-[11px] text-white/40 leading-relaxed font-medium">{f.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8">
              <Button size="lg" className="rounded-2xl px-10 h-14 bg-purple-600 hover:bg-purple-500 text-white font-black text-xs uppercase tracking-widest">
                {t.primaryCta}
              </Button>
              <Link to="/ai-agent">
                <Button size="lg" variant="outline" className="rounded-2xl px-10 h-14 border-white/10 hover:bg-white/5 text-white font-black text-xs uppercase tracking-widest">
                  {t.secondaryCta}
                </Button>
              </Link>
            </div>
          </div>

          {/* Visual side - Interactive Chat Preview */}
          <div className="flex-1 relative w-full max-w-lg lg:max-w-none">
            <div className="relative z-10 rounded-[40px] p-1 bg-gradient-to-br from-purple-500/20 to-transparent border border-white/10 shadow-2xl overflow-hidden aspect-square lg:aspect-auto lg:h-[550px] flex flex-col bg-[#050510]">
               <div className="px-8 py-5 border-b border-white/5 bg-white/[0.02] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <PixelHeart size={20} />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Pixly AI Engine V1.0</span>
                  </div>
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <div className="w-2 h-2 rounded-full bg-white/10" />
                  </div>
               </div>

               <div className="flex-1 p-8 flex flex-col gap-8 overflow-hidden">
                  <div className={`flex gap-4 transition-all duration-700 ${chatStep >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <div className="w-10 h-10 rounded-xl bg-purple-600 flex items-center justify-center shrink-0 shadow-lg">
                      <User size={18} className="text-white" />
                    </div>
                    <div className="bg-purple-500/10 border border-purple-500/20 p-4 rounded-[24px] rounded-tl-none text-xs text-white/90 max-w-[85%] leading-relaxed font-medium">
                      {lang === 'fr' ? "Analysez le contenu de ma page d'accueil pour le mot-clé 'Expert SEO'." : "Analyze my home page content for the keyword 'SEO Expert'."}
                    </div>
                  </div>

                  <div className={`flex gap-4 transition-all duration-700 ${chatStep >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <div className="w-10 h-10 rounded-xl bg-cyan-600 flex items-center justify-center shrink-0 shadow-lg">
                      <Bot size={18} className="text-white" />
                    </div>
                    <div className="bg-white/[0.05] p-4 rounded-[24px] rounded-tl-none text-xs text-white/60 max-w-[85%] border border-white/5 italic font-medium">
                       {lang === 'fr' ? "Lecture du DOM en cours... 73 balises analysées." : "Scanning DOM... 73 tags analyzed."}
                       <div className="flex gap-1 mt-3">
                          <div className="h-1 flex-1 bg-purple-500/20 rounded-full overflow-hidden">
                            <div className="h-full bg-purple-500 w-full animate-[progress_2s_ease-in-out]" />
                          </div>
                       </div>
                    </div>
                  </div>

                  <div className={`flex gap-4 transition-all duration-700 ${chatStep >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <div className="w-10 h-10 rounded-xl bg-cyan-600 flex items-center justify-center shrink-0 shadow-lg">
                      <Bot size={18} className="text-white" />
                    </div>
                    <div className="bg-white/[0.08] p-4 rounded-[24px] rounded-tl-none text-xs text-white max-w-[85%] border border-white/10 shadow-2xl leading-relaxed font-bold">
                       {lang === 'fr' 
                         ? "Votre H1 contient le mot-clé, mais votre méta-description est trop courte. Je recommande d'ajouter : 'Audit Technique'." 
                         : "Your H1 contains the keyword, but your meta-description is too short. I recommend adding: 'Technical Audit'."}
                       <div className="mt-4 flex gap-2">
                          <div className="px-2 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 text-[9px] text-emerald-400 font-black uppercase tracking-widest">Optimized</div>
                          <div className="px-2 py-1 rounded bg-purple-500/10 border border-purple-500/30 text-[9px] text-purple-400 font-black uppercase tracking-widest">+12% SEO Boost</div>
                       </div>
                    </div>
                  </div>
               </div>
               
               {/* Footer Decoration */}
               <div className="px-8 py-4 bg-white/[0.02] border-t border-white/5 flex justify-center">
                  <div className="text-[9px] font-black uppercase tracking-[0.3em] text-white/10">Neural Context Processor Engaged</div>
               </div>

               {/* Animated background highlights */}
               <div className="absolute top-1/4 -right-20 w-64 h-64 bg-purple-600/10 blur-[100px] rounded-full pointer-events-none" />
               <div className="absolute bottom-1/4 -left-20 w-64 h-64 bg-cyan-600/10 blur-[100px] rounded-full pointer-events-none" />
            </div>
            
            {/* Reflection / Glow */}
            <div className="absolute -inset-10 bg-gradient-to-br from-purple-500/20 to-cyan-500/10 blur-3xl rounded-[60px] opacity-30 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  )
}
