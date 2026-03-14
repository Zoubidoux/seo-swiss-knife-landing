import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/i18n/index'

export function Navbar() {
  const { lang, setLang } = useLanguage()
  const t = translations[lang].nav

  return (
    <div className="w-full sticky top-0 z-50" style={{ background: 'rgba(4,2,18,0.85)', backdropFilter: 'blur(12px)' }}>
      <nav className="flex items-center justify-between py-4 px-8 max-w-7xl mx-auto">
        {/* Left — Logo / Brand */}
        <a href="#" className="flex items-center gap-2.5 no-underline group">
          <img src="/src/assets/icon.png" alt="SEO Swiss Knife" className="w-6 h-6 flex-shrink-0" style={{ imageRendering: 'pixelated' }} />
          <span className="font-bold text-base tracking-tight" style={{ background: 'linear-gradient(90deg, #39d3ff, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            SEO Swiss Knife
          </span>
        </a>

        {/* Center — Anchor nav items */}
        <div className="hidden md:flex items-center gap-7">
          <a href="#features" className="flex items-center gap-1 text-foreground/70 text-sm hover:text-foreground transition-colors no-underline">
            {t.features} <ChevronDown className="w-3.5 h-3.5 opacity-50" />
          </a>
          <a href="#how-it-works" className="text-foreground/70 text-sm hover:text-foreground transition-colors no-underline">
            {t.howItWorks}
          </a>
          <a href="#all-features" className="text-foreground/70 text-sm hover:text-foreground transition-colors no-underline">
            {t.features} +
          </a>
          <a href="#faq" className="text-foreground/70 text-sm hover:text-foreground transition-colors no-underline">
            {t.faq}
          </a>
        </div>

        {/* Right — Lang toggle + Install CTA */}
        <div className="flex items-center gap-3">
          {/* FR / EN toggle */}
          <button
            onClick={() => setLang(lang === 'en' ? 'fr' : 'en')}
            className="text-sm font-semibold px-3 py-1.5 rounded-full transition-colors"
            style={{
              background: 'rgba(255,255,255,0.06)',
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

      {/* Gradient divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-foreground/15 to-transparent" />
    </div>
  )
}
