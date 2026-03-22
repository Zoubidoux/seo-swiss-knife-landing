import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLanguage } from '@/contexts/LanguageContext'

interface SEOProps {
  title: string
  description: string
  faq?: { q: string, a: string }[]
}

const DOMAIN = 'https://seo-swiss-knife-landing-1.vercel.app'

export function SEO({ title, description, faq }: SEOProps) {
  const { lang: currentLang } = useLanguage()
  const location = useLocation()

  useEffect(() => {
    // 1. Update Title & Meta Description
    document.title = title
    
    let metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.setAttribute('name', 'description')
      document.head.appendChild(metaDescription)
    }
    metaDescription.setAttribute('content', description)

    // 2. Manage Canonical URL
    // We append the current lang if it's not English (default)
    const baseUrl = `${DOMAIN}${location.pathname}`
    const canonicalUrl = currentLang === 'en' ? baseUrl : `${baseUrl}?lang=${currentLang}`
    
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', canonicalUrl)

    // 3. Manage Hreflang Tags
    const langs = ['en', 'fr', 'de', 'it', 'es']
    
    // Remove existing hreflang to avoid duplicates
    document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(el => el.remove())

    langs.forEach(l => {
      const link = document.createElement('link')
      link.rel = 'alternate'
      link.hreflang = l
      // Construct URL: Default (en) is the base, others use query param
      link.href = l === 'en' ? baseUrl : `${baseUrl}?lang=${l}`
      document.head.appendChild(link)
    })

    // Add x-default (pointing to English)
    const xDefault = document.createElement('link')
    xDefault.rel = 'alternate'
    xDefault.hreflang = 'x-default'
    xDefault.href = baseUrl
    document.head.appendChild(xDefault)

    // 4. Inject FAQ Schema if provided
    if (faq) {
      const schemaId = 'faq-schema'
      let script = document.getElementById(schemaId) as HTMLScriptElement
      if (!script) {
        script = document.createElement('script')
        script.id = schemaId
        script.type = 'application/ld+json'
        document.head.appendChild(script)
      }

      const schemaData = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faq.map(item => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.a
          }
        }))
      }
      script.textContent = JSON.stringify(schemaData)
    }

    // 5. Update OG & Twitter Tags
    const updateMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name'
      let el = document.querySelector(`meta[${attr}="${name}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, name)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    const locales: Record<string, string> = {
      en: 'en_US', fr: 'fr_FR', de: 'de_DE', it: 'it_IT', es: 'es_ES'
    }

    updateMeta('og:title', title, true)
    updateMeta('og:description', description, true)
    updateMeta('og:url', canonicalUrl, true)
    updateMeta('og:locale', locales[currentLang] || 'en_US', true)
    
    updateMeta('twitter:title', title)
    updateMeta('twitter:description', description)
    updateMeta('twitter:url', canonicalUrl)

    return () => {
      // Cleanup schemas if needed on unmount
      const script = document.getElementById('faq-schema')
      if (script) script.remove()
    }
  }, [title, description, faq, location.pathname, currentLang])

  return null
}
