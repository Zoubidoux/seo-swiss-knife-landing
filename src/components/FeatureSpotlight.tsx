import { ExtensionMockup } from '@/components/ExtensionMockup'

const spotlights = [
  {
    tab: 'overview' as const,
    eyebrow: 'Page Analysis',
    title: 'Full page audit in under a second',
    body: 'Open the panel on any page and instantly see title length, meta description quality, canonical URL, robots directives, Open Graph tags, and your structured data — all scored and flagged.',
    bullets: [
      'Char count badges for title & description',
      'Indexed / noindex status at a glance',
      'Weighted SEO score with breakdown',
      'One-click copy for every field',
    ],
  },
  {
    tab: 'redirects' as const,
    eyebrow: 'Redirect Tracer',
    title: 'Follow every hop. Catch every issue.',
    body: 'Paste any URL and trace the full redirect chain with HTTP status codes, response times per hop, and the final destination. Spot redirect loops, unnecessary hops, and HTTPS migration problems instantly.',
    bullets: [
      'Supports 301, 302, 307, 308 and more',
      'Response time per hop',
      'Detects redirect loops',
      'Works on any URL — not just the current page',
    ],
  },
  {
    tab: 'schema' as const,
    eyebrow: 'Schema Inspector',
    title: 'Validate structured data without leaving the page',
    body: 'Extract every JSON-LD, Microdata, and RDFa block. Syntax-highlighted, fully expandable, with property-level validation. Know exactly what Google is reading before you publish.',
    bullets: [
      'JSON-LD, Microdata, RDFa support',
      'Syntax-highlighted diff view',
      'Property-level error flags',
      'Copy full block with one click',
    ],
  },
]

export function FeatureSpotlight() {
  return (
    <section className="bg-background py-24 px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-36">
        {spotlights.map((s, i) => (
          <div
            key={s.tab}
            className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-16`}
          >
            {/* Text */}
            <div className="flex-1 flex flex-col gap-5">
              <p
                className="text-sm font-semibold tracking-widest uppercase"
                style={{ color: i % 2 === 0 ? '#a78bfa' : '#39d3ff' }}
              >
                {s.eyebrow}
              </p>
              <h3 className="text-3xl md:text-4xl font-semibold text-foreground leading-snug tracking-tight">
                {s.title}
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed">{s.body}</p>
              <ul className="flex flex-col gap-2 mt-2">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-foreground/80">
                    <span
                      className="mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 text-[9px] font-bold"
                      style={{
                        background: i % 2 === 0 ? 'rgba(167,139,250,0.2)' : 'rgba(57,211,255,0.2)',
                        color: i % 2 === 0 ? '#a78bfa' : '#39d3ff',
                      }}
                    >
                      ✓
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Mockup */}
            <div className="flex-1 flex justify-center">
              <div className="relative">
                {/* Glow behind mockup */}
                <div
                  className="absolute inset-0 rounded-3xl blur-3xl opacity-30"
                  style={{
                    background:
                      i % 2 === 0
                        ? 'radial-gradient(circle, #7c3aed 0%, transparent 70%)'
                        : 'radial-gradient(circle, #0891b2 0%, transparent 70%)',
                    transform: 'scale(1.2)',
                  }}
                />
                <ExtensionMockup activeTab={s.tab} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
