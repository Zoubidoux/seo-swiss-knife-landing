import { useState, useEffect, useRef } from 'react'
import { ChevronDown, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/i18n/index'
import { PixelHeart } from '@/components/PixelHeart'
import { Link, useLocation } from 'react-router-dom'

export function Navbar() {
  const { lang, setLang } = useLanguage()
  const t = translations[lang].nav
  const [scrolled, setScrolled] = useState(false)
  const [featuresOpen, setFeaturesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setFeaturesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    
    return () => {
      window.removeEventListener('scroll', onScroll)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (isHome) {
      e.preventDefault()
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        setFeaturesOpen(false)
      }
    }
  }

  const featureItems = [
    { id: 'features', label: lang === 'fr' ? 'Audit Sémantique' : 'Semantic Audit', badge: 'semantic audit' },
    { id: 'technical', label: lang === 'fr' ? 'Audit Technique' : 'Technical Audit', badge: 'technical audit' },
    { id: 'context-menu', label: lang === 'fr' ? 'Menu Contextuel' : 'Context Menu', badge: 'right click quick access' },
    { id: 'all-features', label: lang === 'fr' ? 'Tous les Outils' : 'All Tools', badge: 'list of features' },
    { id: 'ai-agent', isLink: true, to: '/ai-agent', label: lang === 'fr' ? 'Agent IA SEO' : 'AI SEO Agent', badge: 'ai seo agent' },
  ]

  return (
    <div
      className="w-full fixed top-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(4,13,26,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent'
      }}
    >
      <style>{`
        @keyframes shine {
          0% { background-position: -100% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-shine {
          background: linear-gradient(90deg, #a78bfa 0%, #fff 50%, #a78bfa 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shine 3s linear infinite;
        }
        .ai-glow {
          box-shadow: 0 0 15px rgba(167,139,250,0.3);
        }
      `}</style>

      <nav className="flex items-center justify-between py-5 px-8 max-w-7xl mx-auto">
        {/* Left — Brand */}
        <Link to="/" className="flex items-center gap-2.5 no-underline group shrink-0">
          <PixelHeart size={24} style={{ filter: 'drop-shadow(0 0 8px rgba(167,139,250,0.5))' }} />
          <span className="font-bold text-lg tracking-tighter" style={{ background: 'linear-gradient(90deg, #fff, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Pixly
          </span>
        </Link>

        {/* Center — Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <Link to="/" className={`text-[10px] uppercase tracking-[0.15em] font-black transition-all no-underline ${location.pathname === '/' ? 'text-purple-400' : 'text-white/50 hover:text-white'}`}>
            {t.home}
          </Link>

          {/* Features Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={() => setFeaturesOpen(!featuresOpen)}
              className={`flex items-center gap-1.5 text-[10px] uppercase tracking-[0.15em] font-black transition-all no-underline ${featuresOpen ? 'text-purple-400' : 'text-white/50 hover:text-white'}`}
            >
              {t.features} <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${featuresOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {featuresOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 p-2 rounded-[24px] bg-[#08111F] border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.5)] animate-in fade-in slide-in-from-top-2">
                 <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#08111F] rotate-45 border-t border-l border-white/5" />
                 {featureItems.map((item) => (
                   item.isLink ? (
                      <Link 
                        key={item.label}
                        to={item.to || '/'}
                        className="group flex flex-col px-4 py-3 rounded-xl hover:bg-white/5 transition-all no-underline"
                      >
                         <div className="text-[11px] font-bold text-white/90 group-hover:text-purple-400">{item.label}</div>
                         <div className="text-[9px] font-medium text-white/20 uppercase tracking-tighter">{item.badge}</div>
                      </Link>
                   ) : (
                      <a 
                        key={item.id}
                        href={`/#${item.id}`}
                        onClick={(e) => scrollToSection(e, item.id || '')}
                        className="group flex flex-col px-4 py-3 rounded-xl hover:bg-white/5 transition-all no-underline"
                      >
                        <div className="text-[11px] font-bold text-white/90 group-hover:text-purple-400">{item.label}</div>
                        <div className="text-[9px] font-medium text-white/20 uppercase tracking-tighter">{item.badge}</div>
                      </a>
                   )
                 ))}
              </div>
            )}
          </div>

          <Link to="/ai-agent" className={`group relative flex items-center gap-2 px-4 py-2 rounded-full transition-all no-underline bg-purple-500/10 border border-purple-500/20 ai-glow overflow-hidden ${location.pathname === '/ai-agent' ? 'ring-1 ring-purple-500/50' : ''}`}>
             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
             <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
             <span className="text-[10px] uppercase tracking-[0.2em] font-black animate-shine">
               {t.agent}
             </span>
          </Link>

          <a href="/#how-it-works" onClick={(e) => scrollToSection(e, 'how-it-works')} className="text-[10px] uppercase tracking-[0.15em] font-black text-white/50 hover:text-white transition-all no-underline">
            {t.howItWorks}
          </a>

          <a href="/#faq" onClick={(e) => scrollToSection(e, 'faq')} className="text-[10px] uppercase tracking-[0.15em] font-black text-white/50 hover:text-white transition-all no-underline">
            {t.faq}
          </a>

          <Link to="/pricing" className={`text-[10px] uppercase tracking-[0.15em] font-black transition-all no-underline ${location.pathname === '/pricing' ? 'text-purple-400' : 'text-white/50 hover:text-white'}`}>
            {t.pricing}
          </Link>
        </div>

        {/* Right — Lang & CTA */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setLang(lang === 'en' ? 'fr' : 'en')}
            className="w-10 h-10 flex items-center justify-center text-[10px] font-black rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all text-white/40 hover:text-white"
          >
            {t.langToggle}
          </button>

          <Button variant="hero" size="sm" className="rounded-xl px-6 h-10 font-black text-[10px] tracking-widest uppercase hidden sm:flex">
            {t.install}
          </Button>
        </div>
      </nav>
    </div>
  )
}
