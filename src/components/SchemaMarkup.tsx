import { useEffect } from 'react'

/**
 * Injects JSON-LD structured data for SEO via useEffect (avoids dangerouslySetInnerHTML).
 * – SoftwareApplication (the Chrome extension)
 * – FAQPage (enables FAQ rich results in Google)
 */
function injectSchema(id: string, data: object) {
  let el = document.getElementById(id)
  if (!el) {
    el = document.createElement('script')
    el.id = id
    el.setAttribute('type', 'application/ld+json')
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(data)
}

export function SchemaMarkup() {
  useEffect(() => {
    injectSchema('schema-software', {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Search Toolbox',
      applicationCategory: 'BrowserApplication',
      operatingSystem: 'Chrome, Edge, Brave, Arc',
      description:
        'The most complete on-page SEO Chrome extension. 20+ tools in one sidebar: meta audit, schema inspector, redirect tracer, hreflang auditor, image audit, SERP VPN, SEO report export and more.',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      aggregateRating: { '@type': 'AggregateRating', ratingValue: '5', ratingCount: '1' },
      featureList: [
        'Page meta audit (title, description, canonical, robots)',
        'Heading hierarchy audit H1–H6',
        'Schema / structured data validator (JSON-LD, Microdata, RDFa)',
        'Redirect chain tracer',
        'Robots.txt + X-Robots-Tag checker',
        'Hreflang deep auditor',
        'Image SEO audit with CSV/ZIP export',
        'Social media preview (OG, Twitter Card)',
        'SERP VPN geo-simulation',
        'Mobile and desktop device preview',
        'JavaScript toggle',
        'Full-page screenshot',
        'SEO report PDF export',
        'Cookie editor',
        'Cache and storage cleaner',
        'User agent switcher',
        'Google Dorks launcher',
        'CSS and DevTools inspector',
        'Link audit with nofollow detection',
        'SEO glossary 150+ terms',
      ],
    })

    injectSchema('schema-faq', {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Is Search Toolbox free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The core extension is completely free — no account required, no credit card. Install directly from the Chrome Web Store.' } },
        { '@type': 'Question', name: 'Which browsers does Search Toolbox support?', acceptedAnswer: { '@type': 'Answer', text: 'Search Toolbox works on Chrome, Edge, Brave, and Arc.' } },
        { '@type': 'Question', name: 'Does Search Toolbox work on any website?', acceptedAnswer: { '@type': 'Answer', text: 'It works on any public URL, staging, localhost, and authenticated pages. It analyses the live DOM so JavaScript-rendered content is fully supported.' } },
        { '@type': 'Question', name: 'How is Search Toolbox different from Chrome DevTools?', acceptedAnswer: { '@type': 'Answer', text: 'DevTools is for developers. Search Toolbox is purpose-built for SEO workflows: schema validation, redirect chains, hreflang auditing, robots parsing, SERP VPN, PDF reports.' } },
        { '@type': 'Question', name: 'Is my browsing data private?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Search Toolbox runs entirely in your browser. No page content or URL data is ever sent to external servers.' } },
        { '@type': 'Question', name: 'Can I export SEO reports?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The Report tab generates a weighted SEO score. Download as PDF or share via a standalone URL.' } },
      ],
    })
  }, [])

  return null
}
