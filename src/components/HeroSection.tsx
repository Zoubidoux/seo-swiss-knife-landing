import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/i18n/index'
import { PixelHeart } from '@/components/PixelHeart'

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
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden bg-[#0a061e]">
      {/* ── Background Elements ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[80%] h-[60%] bg-purple-600/20 blur-[120px] rounded-full opacity-40 animate-pulse" />
        <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-[60%] h-[40%] bg-blue-600/10 blur-[100px] rounded-full opacity-30" />
        
        {/* Floating Hearts */}
        <div className="absolute inset-0 z-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                top: `${20 + Math.random() * 60}%`,
                left: `${10 + Math.random() * 80}%`,
                opacity: 0.1,
                transform: `scale(${0.5 + Math.random()})`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            >
              <PixelHeart size={24} />
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase mb-8 border border-white/10 bg-white/5 text-white/50 backdrop-blur-sm">
          CHROME EXTENSION · 100% FREE · PUBLIC BETA
        </div>

        {/* H1 Headline */}
        <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black mb-8 tracking-tighter leading-[0.8] text-white">
          {t.headline}
        </h1>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <div className="px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_8px_#a78bfa]" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/70">+20 apps in one</span>
          </div>
          <div className="px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/70">+60 features</span>
          </div>
          <div className="px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-400 shadow-[0_0_8px_#818cf8]" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/70">Many unique & customizable</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-white/40 mb-12 max-w-2xl leading-relaxed font-medium">
          {t.sub}
        </p>

        {/* Micro Mockup (from screenshot) */}
        <div className="mb-10 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 inline-flex items-center gap-4 backdrop-blur-sm">
           <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
             <div className="w-3 h-3 bg-red-400/80 rounded-sm flex items-center justify-center text-[7px] font-bold text-white">404</div>
             <span className="text-[9px] text-white/40 font-mono">Chrome toolbar</span>
           </div>
           <div className="w-[1px] h-4 bg-white/10" />
           <div className="flex items-center gap-2">
             <div className="w-3 h-3 bg-indigo-500 rounded-sm" />
             <span className="text-[9px] text-white/40 font-bold uppercase tracking-widest">404 Not Found</span>
           </div>
        </div>

        {/* Main CTA */}
        <div className="flex flex-col items-center gap-4">
          <Button 
            size="lg" 
            className="h-16 px-12 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-black text-lg uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_20px_40px_rgba(167,139,250,0.25)]"
          >
            {t.cta}
          </Button>
          <p className="text-[11px] font-medium text-white/30 tracking-wide">
            {t.ctaSub}
          </p>
        </div>
      </div>

      {/* Social Proof Bridge */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a061e] to-transparent pointer-events-none" />
    </section>
  )
}
