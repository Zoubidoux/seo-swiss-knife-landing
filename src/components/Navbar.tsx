import { useState, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/i18n/index'
import { PixelHeart } from '@/components/PixelHeart'
import { Link, useLocation } from 'react-router-dom'

export function Navbar() {
  const { lang, setLang } = useLanguage()
  const t = translations[lang].nav
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll() // sync immediately on mount
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (isHome) {
      e.preventDefault()
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div
      className="w-full sticky top-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(15,5,45,0.40)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(10px)' : 'none',
      }}
    >
      <nav className="flex items-center justify-between py-4 px-8 max-w-7xl mx-auto">
        {/* Left — Logo / Brand */}
        <Link to="/" className="flex items-center gap-2.5 no-underline group">
          <PixelHeart size={22} style={{ filter: 'drop-shadow(0 0 3px rgba(167,139,250,0.35))' }} />
          <span className="font-bold text-base tracking-tight" style={{ background: 'linear-gradient(90deg, #39d3ff, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Search Toolbox
          </span>
        </Link>

        {/* Center — Anchor nav items */}
        <div className="hidden md:flex items-center gap-7">
          <a href="/#features" onClick={(e) => scrollToSection(e, 'features')} className="flex items-center gap-1 text-foreground/70 text-sm hover:text-foreground transition-colors no-underline">
            {t.features} <ChevronDown className="w-3.5 h-3.5 opacity-50" />
          </a>
          <Link to="/ai-agent" className="text-foreground/70 text-sm hover:text-foreground transition-colors no-underline font-semibold text-purple-400">
            {t.agent}
          </Link>
          <a href="/#how-it-works" onClick={(e) => scrollToSection(e, 'how-it-works')} className="text-foreground/70 text-sm hover:text-foreground transition-colors no-underline">
            {t.howItWorks}
          </a>
          <a href="/#faq" onClick={(e) => scrollToSection(e, 'faq')} className="text-foreground/70 text-sm hover:text-foreground transition-colors no-underline">
            {t.faq}
          </a>
        </div>

        {/* Right — Lang toggle + Install CTA */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setLang(lang === 'en' ? 'fr' : 'en')}
            className="text-sm font-semibold px-3 py-1.5 rounded-full transition-colors"
            style={{
              background: scrolled ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.12)',
              color: 'rgba(255,255,255,0.7)',
            }}
          >
            {t.langToggle}
          </button>

          <Button variant="hero" size="sm" className="rounded-full px-5">
            {t.install}
          </Button>
        </div>
      </nav>

      {/* Divider — only visible when scrolled */}
      <div
        className="w-full h-px transition-opacity duration-500"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.25), transparent)',
          opacity: scrolled ? 1 : 0,
        }}
      />
    </div>
  )
}
