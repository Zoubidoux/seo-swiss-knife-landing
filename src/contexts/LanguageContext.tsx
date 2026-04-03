import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'
import type { Lang } from '@/i18n/index'

interface LanguageCtx {
  lang: Lang
  setLang: (l: Lang) => void
}

const LanguageContext = createContext<LanguageCtx>({ lang: 'en', setLang: () => {} })

const VALID_LANGS = ['en', 'fr', 'de', 'it', 'es']

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    // 1. URL param wins (e.g. ?lang=fr)
    const params = new URLSearchParams(window.location.search)
    const urlLang = params.get('lang') as Lang
    if (urlLang && VALID_LANGS.includes(urlLang)) return urlLang
    // 2. localStorage fallback
    const stored = localStorage.getItem('st_lang') as Lang
    if (stored && VALID_LANGS.includes(stored)) return stored
    return 'en'
  })

  const setLang = (l: Lang) => {
    localStorage.setItem('st_lang', l)
    setLangState(l)
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
