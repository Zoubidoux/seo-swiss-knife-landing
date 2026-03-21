import { useState, useEffect, useRef } from 'react'
import { ChevronDown, Sparkles, Menu, X } from 'lucide-react'
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
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

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (isHome) {
      e.preventDefault()
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        setFeaturesOpen(false)
        setMobileMenuOpen(false)
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
        background: scrolled || mobileMenuOpen ? 'rgba(4,13,26,0.95)' : 'transparent',
        backdropFilter: scrolled || mobileMenuOpen ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled || mobileMenuOpen ? 'blur(20px)' : 'none',
        borderBottom: scrolled || mobileMenuOpen ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent'
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

      <nav className="flex items-center justify-between py-5 px-6 md:px-8 max-w-7xl mx-auto">
        {/* Left — Brand */}
        <Link to="/" className="flex items-center gap-2.5 no-underline group shrink-0 relative z-50">
          <PixelHeart size={24} style={{ filter: 'drop-shadow(0 0 8px rgba(167,139,250,0.5))' }} />
          <span className="font-bold text-lg tracking-tighter" style={{ background: 'linear-gradient(90deg, #fff, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Search Toolbox
          </span>
        </Link>

        {/* Center — Navigation (Desktop) */}
        <div className="hidden lg:flex items-center gap-8">
          <Link to="/" className={`text-[11px] uppercase tracking-[0.15em] font-bold transition-all no-underline ${location.pathname === '/' ? 'text-purple-400' : 'text-white/70 hover:text-white'}`}>
            {t.home}
          </Link>

          {/* Features Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={() => setFeaturesOpen(!featuresOpen)}
              className={`flex items-center gap-1.5 text-[11px] uppercase tracking-[0.15em] font-bold transition-all no-underline ${featuresOpen ? 'text-purple-400' : 'text-white/70 hover:text-white'}`}
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

          <Link to="/ai-agent" className={`flex items-center gap-1.5 text-[11px] uppercase tracking-[0.15em] font-bold transition-all no-underline ${location.pathname === '/ai-agent' ? 'text-purple-400' : 'text-white/70 hover:text-white'}`}>
             <Sparkles className="w-3.5 h-3.5" />
             <span>{lang === 'fr' ? 'Expert AI' : 'AI Expert'}</span>
          </Link>

          <Link to="/pricing" className={`text-[11px] uppercase tracking-[0.15em] font-bold transition-all no-underline ${location.pathname === '/pricing' ? 'text-purple-400' : 'text-white/70 hover:text-white'}`}>
            {t.pricing}
          </Link>

          <a href="/#faq" onClick={(e) => scrollToSection(e, 'faq')} className="text-[11px] uppercase tracking-[0.15em] font-bold text-white/70 hover:text-white transition-all no-underline">
            {t.faq}
          </a>
        </div>

        {/* Right — Lang & CTA (Desktop & Tablet) */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setLang(lang === 'en' ? 'fr' : 'en')}
            className="text-[11px] font-bold text-white/40 hover:text-white transition-all uppercase tracking-widest hidden sm:block"
          >
            {t.langToggle}
          </button>

          <Button variant="hero" size="sm" className="rounded-full px-8 h-10 font-black text-[10px] tracking-widest uppercase hidden md:flex bg-purple-600 hover:bg-purple-500 text-white">
            {t.install}
          </Button>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-white/70 hover:text-white transition-colors relative z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#040D1A] border-b border-white/10 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col p-6 gap-6">
            <Link to="/" className="text-sm font-bold uppercase tracking-widest text-white/90">{t.home}</Link>
            
            <div className="flex flex-col gap-4 pl-4 border-l border-white/5">
              <span className="text-[10px] uppercase tracking-[0.2em] font-black text-white/20">{t.features}</span>
              {featureItems.map(item => (
                item.isLink ? (
                  <Link key={item.id} to={item.to || '/'} className="text-sm font-bold text-white/60">{item.label}</Link>
                ) : (
                  <a key={item.id} href={`/#${item.id}`} onClick={(e) => scrollToSection(e, item.id || '')} className="text-sm font-bold text-white/60">{item.label}</a>
                )
              ))}
            </div>

            <Link to="/ai-agent" className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white/90">
              <Sparkles className="w-4 h-4 text-purple-400" />
              {lang === 'fr' ? 'Expert AI' : 'AI Expert'}
            </Link>

            <Link to="/pricing" className="text-sm font-bold uppercase tracking-widest text-white/90">{t.pricing}</Link>
            <a href="/#faq" onClick={(e) => scrollToSection(e, 'faq')} className="text-sm font-bold uppercase tracking-widest text-white/90">{t.faq}</a>
            
            <div className="flex items-center justify-between pt-6 border-t border-white/5">
               <button
                 onClick={() => setLang(lang === 'en' ? 'fr' : 'en')}
                 className="text-xs font-black uppercase tracking-[0.2em] text-white/40"
               >
                 {lang === 'en' ? 'Français' : 'English'}
               </button>
               <Button variant="hero" size="sm" className="rounded-full px-8 h-10 font-black text-[10px] tracking-widest uppercase bg-purple-600 text-white">
                 {t.install}
               </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
