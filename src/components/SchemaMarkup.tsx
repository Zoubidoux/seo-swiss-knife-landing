import { useEffect } from 'react'

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
    // ── Organization ──
    injectSchema('schema-organization', {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Search Toolbox',
      url: 'https://seogeotoolkit.com',
      logo: 'https://seogeotoolkit.com/icon128.png',
      description: 'Creator of Search Toolbox — the most complete all-in-one SEO Chrome extension. 60+ tools, free.',
      sameAs: [
        'https://seogeotoolkit.com',
      ],
    })

    // ── SoftwareApplication ──
    injectSchema('schema-software', {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Search Toolbox',
      alternateName: 'SEO & GEO Toolkit by Search Toolbox',
      applicationCategory: 'BrowserApplication',
      applicationSubCategory: 'SEO Tool',
      operatingSystem: 'Chrome, Edge, Brave, Arc',
      url: 'https://seogeotoolkit.com',
      description:
        'The most complete all-in-one SEO Chrome extension. Replace 10+ extensions with one sidebar: schema validator, redirect tracer, hreflang auditor, SERP VPN, image audit, PDF reports and 60+ tools. 100% free.',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      aggregateRating: { '@type': 'AggregateRating', ratingValue: '5', ratingCount: '1' },
      publisher: {
        '@type': 'Organization',
        name: 'Search Toolbox',
        url: 'https://seogeotoolkit.com',
      },
      featureList: [
        'Page meta audit (title, description, canonical, robots)',
        'Heading hierarchy audit H1–H6',
        'Schema / structured data validator (JSON-LD, Microdata, RDFa)',
        'Redirect chain tracer with loop detection',
        'Robots.txt + X-Robots-Tag checker with crawler simulation',
        'Hreflang deep auditor with return-link validation',
        'Image SEO audit with CSV/ZIP export',
        'Social media preview (OG, Twitter Card, LinkedIn, WhatsApp)',
        'SERP VPN geo-simulation (any country)',
        'Mobile and desktop device emulation',
        'JavaScript render comparison (DOM before/after JS)',
        'Full-page screenshot',
        'SEO report PDF export',
        'Cookie editor',
        'Cache and storage cleaner',
        'User agent switcher',
        'Google Dorks launcher',
        'CSS and DevTools in-panel inspector',
        'Full link audit with nofollow detection (CSV export)',
        'SEO glossary 150+ terms',
        'GEO (Generative Engine Optimization) audit (coming soon)',
      ],
    })

    // ── FAQPage ──
    injectSchema('schema-faq', {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the best all-in-one SEO Chrome extension?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Search Toolbox is the most complete all-in-one SEO Chrome extension. It replaces 10+ separate tools (SEO META in 1 CLICK, MozBar, hreflang checker, redirect tracer, schema validator, etc.) with a single browser sidebar. 60+ features, 100% free.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is Search Toolbox free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Search Toolbox is completely free — no account, no credit card, no subscription. Install directly from the Chrome Web Store.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which browsers does Search Toolbox support?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Search Toolbox works on Chrome, Edge, Brave, and Arc.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does Search Toolbox differ from other SEO extensions?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most SEO extensions do one or two things. Search Toolbox does 60+: schema validation, redirect chain tracing, hreflang auditing, robots parsing, SERP VPN, image audit, PDF reporting, link audit, JS render comparison, cookie editor — all in one panel without switching tabs.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is my browsing data private with Search Toolbox?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Search Toolbox runs entirely in your browser. No page content or URL data is ever sent to external servers.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I export SEO reports with Search Toolbox?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. The Report tab generates a weighted SEO score and lets you download a full PDF report or share it via a standalone URL.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Search Toolbox work with JavaScript-rendered websites?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Search Toolbox analyses the live DOM after JavaScript execution. The JS Render Comparison feature lets you compare the page before and after JS to spot crawlability issues.',
          },
        },
      ],
    })

    // ── WebSite with SearchAction ──
    injectSchema('schema-website', {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Search Toolbox',
      url: 'https://seogeotoolkit.com',
      description: 'Best all-in-one SEO Chrome extension — 60+ tools, free.',
      inLanguage: ['en', 'fr'],
    })
  }, [])

  return null
}
