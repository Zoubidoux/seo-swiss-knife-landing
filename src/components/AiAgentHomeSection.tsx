import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/i18n/index'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Terminal, User, ChevronRight } from 'lucide-react'
import { Mascot } from '@/components/Mascot'

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
    <section className="relative py-32 overflow-hidden bg-black grid-bg">
      {/* ── Background Detail: Technical atmosphere ── */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] grain-bg" />
      
      {/* ── Perspective Markers: Graphic UI lines ── */}
      <div className="absolute top-0 left-0 w-[1px] h-full bg-white/10" />
      <div className="absolute bottom-20 left-0 w-full h-[1px] bg-white/10" />

      <div className="max-w-6xl mx-auto relative z-10 px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Content side */}
          <div className="flex-1 flex flex-col gap-8 text-center lg:text-left">
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
               <div className="inline-flex items-center gap-3 px-4 py-2 rounded-lg border-2 border-white/20 bg-white/5 text-[10px] font-black tracking-[0.2em] uppercase text-white self-center lg:self-start">
                  <span className="w-1.5 h-1.5 bg-expert rounded-full animate-pulse" />
                  {t.eyebrow}
               </div>
            </div>
            
            <h2 className="text-4xl md:text-7xl font-black text-white leading-[0.95] tracking-tighter text-balance">
              {t.headline}
            </h2>
            
            <p className="text-lg md:text-xl text-white leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium text-balance shadow-black/20 text-shadow">
              {t.subheadline}
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              {t.features.map((f, i) => (
                <div key={i} className="editorial-card rounded-2xl p-6 bg-white/[0.02] border-white/10 hover:border-expert/40 transition-all hover:bg-white/[0.04] text-left group">
                  <div className="flex items-center gap-3 mb-3">
                     <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-expert group-hover:bg-expert group-hover:text-white transition-all">
                        <Terminal size={14} />
                     </div>
                     <h4 className="font-black text-xs uppercase tracking-widest text-white">{f.title}</h4>
                  </div>
                  <p className="text-[11px] text-white/40 leading-relaxed font-medium">{f.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-8">
              <Button size="lg" className="rounded-xl px-10 h-16 bg-white text-black hover:bg-white/90 hover-offset-expert transition-all font-black text-xs uppercase tracking-widest">
                {t.primaryCta}
              </Button>
              <Link to="/ai-agent">
                <Button size="lg" variant="outline" className="rounded-xl px-10 h-16 border-white/20 hover:bg-white/5 text-white font-black text-xs uppercase tracking-widest">
                  {t.secondaryCta}
                </Button>
              </Link>
            </div>
          </div>

          {/* Visual side - The Auditor's Terminal */}
          <div className="flex-1 relative w-full max-w-lg lg:max-w-none animate-in fade-in slide-in-from-right-12 duration-1000">
             <div className="absolute -top-10 -right-10 z-0">
                <Mascot type="expert" size={200} className="grayscale opacity-10" />
             </div>
             
             <div className="relative z-10 rounded-2xl border-2 border-white/20 bg-[#0A0A0A] offset-expert overflow-hidden aspect-square lg:aspect-auto lg:h-[600px] flex flex-col">
                {/* Terminal Header */}
                <div className="px-6 py-4 border-b border-white/10 bg-white/[0.02] flex items-center justify-between">
                   <div className="flex items-center gap-4">
                      <div className="flex gap-1.5">
                         <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                         <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                         <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                      </div>
                      <span className="text-[8px] font-black uppercase tracking-[0.3em] text-white/20">Auditor: Expert Mode</span>
                   </div>
                   <div className="flex items-center gap-2">
                      <span className="text-[8px] font-mono text-expert/60">SESSION_ID: 0x4F2A</span>
                   </div>
                </div>

                <div className="flex-1 p-8 flex flex-col gap-10 overflow-hidden font-mono">
                   {/* User Message */}
                   <div className={`flex gap-5 transition-all duration-700 ${chatStep >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                     <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/10">
                       <User size={18} className="text-white/60" />
                     </div>
                     <div className="p-5 rounded-2xl rounded-tl-none bg-white/[0.03] border border-white/10 text-[11px] text-white/80 max-w-[85%] leading-relaxed">
                       <span className="text-white/20 mr-2">$</span>
                       {t.chat.user}
                     </div>
                   </div>

                   {/* Scanning State */}
                   <div className={`flex gap-5 transition-all duration-700 ${chatStep >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                     <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0">
                        <Mascot type="expert" size={60} />
                     </div>
                     <div className="flex-1 space-y-4">
                        <div className="text-[10px] text-expert font-black uppercase tracking-widest animate-pulse">
                           {t.chat.scanning}...
                        </div>
                        <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                           <div className="h-full bg-expert w-full animate-[progress_2s_ease-in-out]" />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                           <div className="h-8 rounded bg-white/[0.02] border border-white/5 text-[8px] flex items-center px-3 text-white/40">ANALYTIC_LOAD: OK</div>
                           <div className="h-8 rounded bg-white/[0.02] border border-white/5 text-[8px] flex items-center px-3 text-white/40">DOM_WALKER: RUNNING</div>
                        </div>
                     </div>
                   </div>

                   {/* Final Response */}
                   <div className={`flex gap-5 transition-all duration-700 ${chatStep >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                     <div className="w-10 h-10 rounded-xl bg-expert flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                        <Mascot type="expert" size={40} state="open" />
                     </div>
                     <div className="p-6 rounded-2xl rounded-tl-none bg-white/[0.04] border-2 border-expert/20 text-[11px] text-white max-w-[85%] leading-relaxed relative">
                        <div className="absolute top-3 right-4">
                           <ChevronRight className="w-4 h-4 text-expert opacity-40" />
                        </div>
                        {t.chat.response}
                        
                        <div className="flex flex-wrap gap-2 mt-6">
                           {['SEO_OPTIMIZED', 'HREFLANG_PASS'].map(tag => (
                              <div key={tag} className="px-3 py-1.5 rounded-lg border border-expert/30 bg-expert/10 text-[8px] text-expert font-black uppercase tracking-widest">
                                 {tag}
                              </div>
                           ))}
                        </div>
                     </div>
                   </div>
                </div>
                
                {/* Footer Controls */}
                <div className="px-6 py-5 bg-white/[0.02] border-t border-white/10 flex items-center justify-between">
                   <div className="flex gap-4">
                      <div className="h-1.5 w-12 bg-white/10 rounded-full" />
                      <div className="h-1.5 w-8 bg-white/10 rounded-full" />
                   </div>
                   <div className="text-[9px] font-black uppercase tracking-[0.3em] text-white/20">Core Auditor Engaged</div>
                </div>
             </div>

             {/* Background technical markers */}
             <div className="absolute -bottom-6 -left-6 technical-marker after:content-['+'] after:opacity-40" />
             <div className="absolute -top-6 -right-6 technical-marker after:content-['+'] after:opacity-40" />
          </div>
        </div>
      </div>
    </section>
  )
}
