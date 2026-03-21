import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/i18n/index'

export function Footer() {
  const { lang } = useLanguage()
  const t = translations[lang].footer

  return (
    <footer className="border-t border-border py-10 px-6 bg-background">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <span className="font-bold bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, #39d3ff, #a78bfa)' }}>
          Search Toolbox
        </span>
        <div className="flex gap-6">
          <a href="#" className="hover:text-foreground transition-colors">{t.privacy}</a>
          <a href="#" className="hover:text-foreground transition-colors">{t.store}</a>
        </div>
        <span>© {new Date().getFullYear()} Search Toolbox. {lang === 'fr' ? 'Tous droits réservés.' : 'All rights reserved.'}</span>
      </div>
    </footer>
  )
}
