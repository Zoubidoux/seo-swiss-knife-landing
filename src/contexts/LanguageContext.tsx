import { createContext, useContext, useState, useEffect } from 'react'
import type { ReactNode } from 'react'
import type { Lang } from '@/i18n/index'

interface LanguageCtx {
  lang: Lang
  setLang: (l: Lang) => void
}

const LanguageContext = createContext<LanguageCtx>({ lang: 'en', setLang: () => {} })

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const l = params.get('lang') as Lang
    if (l && ['en', 'fr', 'de', 'it', 'es'].includes(l)) {
      setLang(l)
    }
  }, [])
  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
