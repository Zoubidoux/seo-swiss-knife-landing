import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/i18n/index'
import { PixelHeart } from '@/components/PixelHeart'
import { ExtensionMockup } from '@/components/ExtensionMockup'
import { Sparkles, Shield, Zap, ArrowRight } from 'lucide-react'

// Animations for the hero
const HERO_STYLE = `
@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0); }
  50% { transform: translateY(-20px) rotate(1deg); }
}
@keyframes pulse-soft {
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.05); }
}
@keyframes orbit {
  from { transform: rotate(0deg) translateX(180px) rotate(0deg); }
  to { transform: rotate(360deg) translateX(180px) rotate(-360deg); }
}
`

export function HeroSection() {
  const { lang } = useLanguage()
  const t = translations[lang].hero

  useEffect(() => {
    if (!document.getElementById('hero-style')) {
      const el = document.createElement('style')
      el.id = 'hero-style'
      el.textContent = HERO_STYLE
      document.head.appendChild(el)
    }
  }, [])

  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-20 overflow-hidden bg-[#020617]">
      {/* ── Background Elements ── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-[-10%] left-[-10%] w-[60%] h-[70%] bg-purple-600/20 blur-[120px] rounded-full animate-pulse" 
          style={{ animationDuration: '8s' }}
        />
        <div 
          className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[70%] bg-blue-600/20 blur-[120px] rounded-full animate-pulse" 
          style={{ animationDuration: '10s', animationDelay: '1s' }}
        />
        <div 
          className="absolute top-[20%] right-[10%] w-[30%] h-[40%] bg-indigo-500/10 blur-[100px] rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Content */}
          <div className="flex flex-col items-start text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-black tracking-[0.2em] uppercase mb-8 border border-purple-500/30 bg-purple-500/10 text-purple-400">
              <Sparkles className="w-3.5 h-3.5" />
              {t.eyebrow}
            </div>

            {/* H1 */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tighter leading-[0.9] text-white">
              <span className="block mb-2">{lang === 'fr' ? 'Votre Centre de' : 'Your All-in-One'}</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400">
                {lang === 'fr' ? 'Contrôle SEO' : 'SEO Control Center'}
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-white/50 mb-10 max-w-xl leading-relaxed font-medium">
              {t.sub}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12 w-full sm:w-auto">
              <Button size="lg" className="h-16 px-10 rounded-2xl bg-white text-black font-black text-sm uppercase tracking-widest hover:bg-white/90 shadow-[0_20px_40px_rgba(255,255,255,0.1)] group">
                {t.cta}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <div className="px-6 py-2">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 max-w-[140px]">
                  {t.ctaSub}
                </p>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-8 py-6 border-t border-white/5 w-full">
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/40">
                <Shield className="w-4 h-4 text-purple-500" /> {lang === 'fr' ? '100% PRIVÉ' : '100% PRIVATE'}
              </div>
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/40">
                <Zap className="w-4 h-4 text-cyan-500" /> {lang === 'fr' ? 'AUCUNE LATENCE' : 'NO LATENCY'}
              </div>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-6 h-6 rounded-full border-2 border-[#020617] bg-white/10 overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" />
                    </div>
                  ))}
                </div>
                <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">
                  {lang === 'fr' ? '500+ experts font confiance' : '500+ experts trust us'}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Visual Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] z-0 pointer-events-none opacity-20">
               <div className="absolute inset-0 bg-gradient-radial from-purple-500/40 via-transparent to-transparent blur-3xl animate-pulse" />
            </div>

            {/* Floating Mockup */}
            <div className="relative z-10 scale-[0.85] sm:scale-100 lg:scale-[1.1] origin-center lg:origin-right transform" 
                 style={{ animation: 'float 6s ease-in-out infinite' }}>
              
              {/* Actual Extension Mockup */}
              <div className="relative">
                 <ExtensionMockup activeTab="overview" />
                 
                 {/* Decorative orbiting element 1 */}
                 <div className="absolute -top-10 -left-10 w-24 h-24 bg-white/[0.03] border border-white/10 rounded-3xl flex items-center justify-center backdrop-blur-sm z-20 shadow-2xl"
                      style={{ animation: 'float 5s ease-in-out infinite reverse' }}>
                   <div className="flex flex-col items-center">
                     <span className="text-[10px] font-black text-purple-400 mb-1">SCORE</span>
                     <span className="text-2xl font-black text-white">87</span>
                   </div>
                 </div>

                 {/* Decorative orbiting element 2 */}
                 <div className="absolute -bottom-6 -right-10 w-32 h-20 bg-white/[0.03] border border-white/10 rounded-2xl flex flex-col justify-center px-4 backdrop-blur-sm z-20 shadow-2xl"
                      style={{ animation: 'float 7s ease-in-out infinite', animationDelay: '1s' }}>
                   <div className="w-full h-1 bg-white/10 rounded-full mb-2 overflow-hidden">
                     <div className="w-3/4 h-full bg-cyan-400" />
                   </div>
                   <div className="flex justify-between items-center text-[8px] font-bold uppercase tracking-wider text-white/40">
                     <span>Crawl Stats</span>
                     <span className="text-cyan-400">75%</span>
                   </div>
                 </div>
              </div>
            </div>

            {/* Orbiting Hearts / Brand Icons */}
            <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden hidden lg:block">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="absolute top-1/2 left-1/2" style={{
                  ['--os' as string]: `${i * 60}deg`,
                  animation: `orbit ${15 + i*2}s linear infinite`,
                } as React.CSSProperties}>
                   <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm opacity-40">
                     <PixelHeart size={14} />
                   </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Social Proof Integration Bridge */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#020617] to-transparent z-20" />
    </section>
  )
}
