import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/i18n/index'
import { Button } from '@/components/ui/button'
import { PixelHeart } from '@/components/PixelHeart'
import { Link } from 'react-router-dom'

export function AiAgentHomeSection() {
  const { lang } = useLanguage()
  const t = translations[lang].aiAgent.homepage

  return (
    <section id="ai-agent" className="relative bg-background py-24 px-6 overflow-hidden">
      {/* Background decoration */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.03]"
          style={{ background: 'radial-gradient(circle, #a78bfa 0%, transparent 70%)' }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Content side */}
          <div className="flex-1 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase"
              style={{ background: 'rgba(167,139,250,0.12)', border: '1px solid rgba(167,139,250,0.22)', color: '#a78bfa' }}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              {t.eyebrow}
            </div>
            
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #fff 0%, #a78bfa 100%)' }}>
              {t.headline}
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.subheadline}
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mt-4">
              {t.features.map((f, i) => (
                <div key={i} className="flex flex-col gap-2 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-purple-500/30 transition-colors">
                  <h4 className="font-bold text-sm text-foreground flex items-center gap-2">
                    <span className="text-purple-400">✦</span> {f.title}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mt-4">
              <Button variant="hero" className="rounded-full px-8">
                {t.primaryCta}
              </Button>
              <Link to="/ai-agent">
                <Button variant="outline" className="rounded-full px-8 border-white/10 hover:bg-white/5">
                  {t.secondaryCta}
                </Button>
              </Link>
            </div>
          </div>

          {/* Visual side - Mockup / Bot visualization */}
          <div className="flex-1 relative">
            <div className="relative z-10 rounded-3xl p-1 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 backdrop-blur-sm border border-white/10 shadow-2xl overflow-hidden aspect-square flex items-center justify-center">
               {/* Animated AI Core */}
               <div className="relative flex items-center justify-center">
                  <div className="absolute inset-0 bg-purple-500/20 blur-[80px] rounded-full animate-pulse" />
                  <div className="relative w-48 h-48 rounded-full border border-purple-500/30 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full border border-cyan-500/20 flex items-center justify-center animate-[spin_10s_linear_infinite]">
                         <div className="absolute top-0 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_cyan]" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <PixelHeart size={64} style={{ filter: 'drop-shadow(0 0 20px rgba(167,139,250,0.8))' }} />
                    </div>
                  </div>
                  
                  {/* Floating data chips */}
                  <div className="absolute -top-10 -right-5 p-3 rounded-xl bg-black/40 border border-white/10 backdrop-blur-md animate-bounce" style={{ animationDuration: '3s' }}>
                    <div className="text-[10px] font-bold text-purple-400 mb-1">AUDIT COMPLETE</div>
                    <div className="h-1 w-12 bg-purple-500/30 rounded-full overflow-hidden">
                      <div className="h-full w-[80%] bg-purple-500" />
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-10 -left-5 p-3 rounded-xl bg-black/40 border border-white/10 backdrop-blur-md animate-bounce" style={{ animationDuration: '4s' }}>
                    <div className="text-[10px] font-bold text-cyan-400 mb-1">SCANNING DOM...</div>
                    <div className="flex gap-1">
                      {[1,2,3,4].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-cyan-500/50 animate-pulse" style={{ animationDelay: `${i*0.2}s` }} />)}
                    </div>
                  </div>
               </div>
            </div>
            
            {/* Glass decoration */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-purple-600/10 blur-[100px] rounded-full" />
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-cyan-600/10 blur-[100px] rounded-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
