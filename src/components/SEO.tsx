import { useEffect } from 'react'

interface SEOProps {
  title: string
  description: string
  faq?: { q: string, a: string }[]
}

export function SEO({ title, description, faq }: SEOProps) {
  useEffect(() => {
    // Update Title
    document.title = title

    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.setAttribute('name', 'description')
      document.head.appendChild(metaDescription)
    }
    metaDescription.setAttribute('content', description)

    // Update Hreflang Tags (if needed based on current URL)
    // For now, we keep the ones in index.html as they point to the root
    // But ideally we should update them here to point to the current page's lang variants

    // Inject FAQ Schema if provided
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

    return () => {
      // Cleanup FAQ Schema on unmount if we want to avoid leakage
      const script = document.getElementById('faq-schema')
      if (script) script.remove()
    }
  }, [title, description, faq])

  return null
}
