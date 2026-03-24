import { useState, useEffect, useRef } from 'react'
import { ChevronDown, Menu, X, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/i18n/index'
import { Mascot } from '@/components/Mascot'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '@/contexts/AuthContext'

export function Navbar() {
  const { lang, setLang } = useLanguage()
  const t = translations[lang].nav
  const { user } = useAuth()
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
    { id: 'features', label: translations[lang].features.items[0].title, badge: translations[lang].features.items[0].label },
    { id: 'technical', label: translations[lang].features.items[1].title, badge: translations[lang].features.items[1].label },
    { id: 'context-menu', label: translations[lang].contextMenu.headline, badge: translations[lang].contextMenu.eyebrow },
    { id: 'all-features', label: translations[lang].allFeatures.headline, badge: translations[lang].allFeatures.eyebrow },
    { id: 'ai-agent', isLink: true, to: '/ai-agent', label: t.aiExpert, badge: t.aiAssistantBadge },
  ]

  return (
    <div
      className="w-full fixed top-0 z-50 transition-all duration-300"
      style={{
        background: scrolled || mobileMenuOpen ? 'rgba(255,255,255,0.98)' : 'transparent',
        backdropFilter: scrolled || mobileMenuOpen ? 'blur(10px)' : 'none',
        borderBottom: scrolled || mobileMenuOpen ? '2px solid #000000' : '2px solid transparent'
      }}
    >
      <nav className="flex items-center justify-between py-6 px-6 md:px-8 max-w-7xl mx-auto">
        {/* Left — Brand */}
        <Link to="/" className="flex items-center no-underline group shrink-0 relative z-50">
          <span className="font-black text-sm tracking-[-0.03em] uppercase text-black flex items-center group-hover:scale-[1.02] transition-transform">
            <span>SEARCHT</span>
            <div className="relative flex items-center justify-center overflow-visible mx-[0.02em]">
              {/* Pixly in background — subtle */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{transform:'translateY(18%) scale(1.8)', opacity: 0.18}}>
                <img src="/assets/mascots/beginner-closed.png" alt="" className="w-full h-full object-contain" />
              </div>
              {/* OO eyes — same cap height as letters */}
              <div className="relative flex items-center gap-[0.04em]">
                <div className="w-[0.62em] h-[0.68em] rounded-full bg-white border-[0.07em] border-black flex items-center justify-center shadow-sm">
                  <div className="w-[40%] h-[40%] bg-black rounded-full" />
                </div>
                <div className="w-[0.62em] h-[0.68em] rounded-full bg-white border-[0.07em] border-black flex items-center justify-center shadow-sm">
                  <div className="w-[40%] h-[40%] bg-black rounded-full" />
                </div>
              </div>
            </div>
            <span>LBOX</span>
          </span>
        </Link>

        {/* Center — Navigation (Desktop) */}
        <div className="hidden lg:flex items-center gap-10">
          <Link to="/" className={`text-[11px] uppercase tracking-[0.2em] font-black transition-all no-underline ${location.pathname === '/' ? 'text-black underline underline-offset-8 decoration-2' : 'text-black/40 hover:text-black'}`}>
            {t.home}
          </Link>

          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={() => setFeaturesOpen(!featuresOpen)}
              className={`flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] font-black transition-all no-underline ${featuresOpen ? 'text-black' : 'text-black/40 hover:text-black'}`}
            >
              {t.features} <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${featuresOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {featuresOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-6 w-64 p-3 rounded-xl bg-white border-2 border-black shadow-[8px_8px_0_0_rgba(0,0,0,0.1)] animate-in fade-in slide-in-from-top-2">
                 {featureItems.map((item) => (
                    <Link 
                      key={item.label}
                      to={item.isLink ? item.to || '/' : `/#${item.id}`}
                      onClick={(e) => !item.isLink && scrollToSection(e, item.id || '')}
                      className="group flex flex-col px-4 py-3 rounded-lg hover:bg-black/5 transition-all no-underline"
                    >
                       <div className="text-[11px] font-black text-black uppercase tracking-widest">{item.label}</div>
                       <div className="text-[9px] font-medium text-black/30 uppercase tracking-[0.1em]">{item.badge}</div>
                    </Link>
                 ))}
              </div>
            )}
          </div>

          <Link to="/ai-agent" className={`flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] font-black transition-all no-underline ${location.pathname === '/ai-agent' ? 'text-expert' : 'text-black/40 hover:text-black'}`}>
             <span>{t.aiExpert}</span>
          </Link>

          <Link to="/pricing" className={`text-[11px] uppercase tracking-[0.2em] font-black transition-all no-underline ${location.pathname === '/pricing' ? 'text-black underline underline-offset-8 decoration-2' : 'text-black/40 hover:text-black'}`}>
            {t.pricing}
          </Link>
        </div>

        {/* Right — Lang & CTA */}
        <div className="flex items-center gap-6">
          <div className="relative group hidden sm:block">
            <button className="flex items-center gap-2 text-[11px] font-black text-black/40 hover:text-black transition-all uppercase tracking-[0.2em] py-2">
              <span className="text-base leading-none">
                {lang === 'en' ? '🇺🇸' : lang === 'fr' ? '🇫🇷' : lang === 'de' ? '🇩🇪' : lang === 'it' ? '🇮🇹' : '🇪🇸'}
              </span>
              <span>{lang}</span>
              <ChevronDown className="w-3 h-3 translate-y-[1px]" />
            </button>
            
            <div className="absolute top-full right-0 mt-2 w-36 p-2 rounded-xl bg-white border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,0.05)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              {[
                { code: 'en', label: 'English', flag: '🇺🇸' },
                { code: 'fr', label: 'Français', flag: '🇫🇷' },
                { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
                { code: 'it', label: 'Italiano', flag: '🇮🇹' },
                { code: 'es', label: 'Español', flag: '🇪🇸' }
              ].map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code as any)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-[10px] font-black uppercase tracking-wider transition-colors ${
                    lang === l.code ? 'bg-black text-white' : 'text-black/40 hover:bg-black/5 hover:text-black'
                  }`}
                >
                  <span className="text-sm">{l.flag}</span>
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          <Link
            to="/account"
            className="hidden md:flex items-center gap-1.5 text-[11px] font-black uppercase tracking-[0.2em] transition-all no-underline text-black/40 hover:text-black"
          >
            <User className="w-3.5 h-3.5" />
            {user ? 'Account' : 'Login'}
          </Link>

          <Button size="sm" className="rounded-lg px-8 h-12 font-black text-[10px] tracking-widest uppercase hidden md:flex bg-black text-white border-none hover-offset-expert transition-all">
            {t.install}
          </Button>

          <button 
            className="lg:hidden p-2 text-black transition-colors relative z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-black border-b-2 border-black animate-in slide-in-from-top duration-300">
          <div className="flex flex-col p-8 gap-8">
            <Link to="/" className="text-xl font-black uppercase tracking-tighter text-white">{t.home}</Link>
            
            <div className="flex flex-col gap-6 pl-6 border-l-2 border-white/10">
              <span className="text-[10px] uppercase tracking-[0.3em] font-black text-white/30">{t.features}</span>
              {featureItems.map(item => (
                item.isLink ? (
                  <Link key={item.id} to={item.to || '/'} className="text-lg font-bold text-white/70">{item.label}</Link>
                ) : (
                  <a key={item.id} href={`/#${item.id}`} onClick={(e) => scrollToSection(e, item.id || '')} className="text-lg font-bold text-white/70">{item.label}</a>
                )
              ))}
            </div>

            <Link to="/ai-agent" className="flex items-center gap-3 text-xl font-black uppercase tracking-tighter text-expert">
               <Mascot type="expert" size={24} />
               {t.aiExpert}
            </Link>

            <Link to="/pricing" className="text-xl font-black uppercase tracking-tighter text-white">{t.pricing}</Link>
            <Link to="/account" className="flex items-center gap-3 text-xl font-black uppercase tracking-tighter text-white/60">
              <User className="w-5 h-5" />
              {user ? 'My Account' : 'Login'}
            </Link>
            
            <div className="flex flex-col gap-6 pt-8 border-t-2 border-white/10">
               <span className="text-[10px] uppercase tracking-[0.3em] font-black text-white/30">Language</span>
               <div className="grid grid-cols-2 gap-3">
                 {[
                   { code: 'en', flag: '🇺🇸' },
                   { code: 'fr', flag: '🇫🇷' },
                   { code: 'de', flag: '🇩🇪' },
                   { code: 'it', flag: '🇮🇹' },
                   { code: 'es', flag: '🇪🇸' }
                 ].map((l) => (
                   <button
                     key={l.code}
                     onClick={() => setLang(l.code as any)}
                     className={`flex items-center justify-center gap-3 px-4 py-3 rounded-xl text-[11px] font-black uppercase tracking-wider transition-all ${
                       lang === l.code ? 'bg-white text-black' : 'text-white/40 border-2 border-white/10'
                     }`}
                   >
                     <span>{l.flag}</span>
                     {l.code}
                   </button>
                 ))}
               </div>
               <Button size="lg" className="w-full mt-6 rounded-xl h-16 font-black text-xs uppercase tracking-widest bg-white text-black border-none hover:bg-white/90">
                 {t.install}
               </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
