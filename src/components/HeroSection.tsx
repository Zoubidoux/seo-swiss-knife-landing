import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/i18n/index'
import { Button } from '@/components/ui/button'
import { PixelHeart } from '@/components/PixelHeart'
import { Sparkles } from 'lucide-react'

export function HeroSection() {
  const { lang } = useLanguage()
  const t = translations[lang].hero

  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
      {/* ── Background Glow ── */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none" 
        style={{ 
          background: 'radial-gradient(circle at 50% 45%, rgba(139, 92, 246, 0.18) 0%, transparent 75%)' 
        }} 
      />
      
      {/* ── Content ── */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center gap-12">
        
        {/* Title */}
        <h1 className="flex items-center justify-center gap-5 text-5xl md:text-7xl lg:text-[6.5rem] font-bold text-[#f5f5f4] tracking-tight leading-[1.1] animate-in fade-in slide-in-from-bottom-12 duration-1000">
          <PixelHeart size={54} className="drop-shadow-[0_0_30px_rgba(139,92,246,0.6)]" />
          <span>Search Toolbox</span>
        </h1>

        {/* Feature Badges - Liquid Glass Style */}
        <div className="flex flex-wrap items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
          <div className="liquid-glass px-5 py-2 rounded-full text-[11px] font-medium uppercase tracking-[0.25em] text-white/60">
            +20 apps in one
          </div>
          <div className="liquid-glass px-5 py-2 rounded-full text-[11px] font-medium uppercase tracking-[0.25em] text-white/60">
            +60 features
          </div>
          <div className="liquid-glass px-5 py-2 rounded-full text-[11px] font-medium uppercase tracking-[0.25em] text-white/40 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-primary/60" />
            Many unique & customizable
          </div>
        </div>

        {/* Description */}
        <p className="max-w-2xl text-lg md:text-xl text-muted-foreground font-medium leading-relaxed px-4 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-400">
          {lang === 'fr' 
            ? "Arrêtez de jongler avec 10 extensions. Une seule sidebar pour vos audits schema, redirections, images, robots et visibilité SERP — sans compte, sans login."
            : "Stop juggling 10 extensions. One sidebar instantly audits your schema, redirects, hreflang, images, robots, links and SERP visibility — no tab switching, no login, no API key."}
        </p>

        {/* Chrome Toolbar Mockup */}
        <div className="animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-600">
           <div className="inline-flex items-center gap-4 px-8 py-4 rounded-3xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-2xl shadow-2xl">
              <span className="text-[10px] font-bold text-white/10 uppercase tracking-[0.35em]">Chrome toolbar</span>
              <div className="h-5 w-px bg-white/5" />
              <div className="relative group cursor-help">
                <PixelHeart size={22} className="opacity-70 transition-all group-hover:opacity-100 group-hover:scale-110" style={{ filter: 'drop-shadow(0 0 10px rgba(139, 92, 246, 0.5))' }} />
                <span className="absolute -top-1.5 -right-2 px-1.5 py-0.5 rounded-full bg-orange-500 text-white text-[8px] font-black shadow-lg">404</span>
              </div>
              <div className="px-3 py-1 rounded bg-orange-500/10 border border-orange-500/20 text-orange-500 text-[9px] font-black uppercase tracking-[0.35em]">
                404 Not Found
              </div>
           </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-6 mt-4 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-800">
          <Button 
            size="lg" 
            className="rounded-full px-12 h-16 bg-primary hover:bg-primary/90 text-white font-bold text-sm uppercase tracking-[0.25em] shadow-[0_20px_40px_rgba(139,92,246,0.35)] transition-all hover:scale-[1.03] active:scale-[0.98]"
          >
            {t.cta}
          </Button>
          <span className="text-[10px] font-bold text-white/10 uppercase tracking-[0.35em] flex items-center gap-3">
             <div className="w-1 h-1 rounded-full bg-white/10" />
             {lang === 'fr' ? "Aucun compte requis · Fonctionne partout" : "No account required · Works on any URL"}
             <div className="w-1 h-1 rounded-full bg-white/10" />
          </span>
        </div>
      </div>

      {/* ── Bottom Fade ── */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
    </section>
  )
}
