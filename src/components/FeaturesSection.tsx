const features = [
  {
    icon: '◉',
    color: '#a78bfa',
    label: 'Semantic',
    title: 'Page Overview',
    desc: 'Title, description, canonical, robots, viewport, charset — the full meta picture in one card. Char counts, status badges, copy buttons included.',
  },
  {
    icon: '¶',
    color: '#39d3ff',
    label: 'Semantic',
    title: 'Heading Hierarchy',
    desc: 'Visual heading tree with H1–H6 depth analysis. Detects missing H1, multiple H1s, and jumps in hierarchy that confuse crawlers.',
  },
  {
    icon: '{}',
    color: '#a78bfa',
    label: 'Semantic',
    title: 'Schema Inspector',
    desc: 'Extract and validate every JSON-LD, Microdata, and RDFa block. Syntax-highlighted preview with full expand view and one-click copy.',
  },
  {
    icon: '⇕',
    color: '#39d3ff',
    label: 'Technical',
    title: 'Redirect Tracer',
    desc: 'Follow every hop in a redirect chain with status codes, response times, and final destination. Paste any URL and trace it instantly.',
  },
  {
    icon: '⊖',
    color: '#39d3ff',
    label: 'Technical',
    title: 'Robots & Crawl',
    desc: "Check robots.txt directives, X-Robots-Tag headers, and meta robots in one view. Understand exactly what Googlebot is and isn't allowed to see.",
  },
  {
    icon: '◇',
    color: '#39d3ff',
    label: 'Technical',
    title: 'Image Audit',
    desc: 'Every image on the page: src, alt text, dimensions, format, file size. Export the full list as CSV or download all images as a ZIP.',
  },
  {
    icon: '☸',
    color: '#2dd4bf',
    label: 'Semantic',
    title: 'Hreflang Auditor',
    desc: 'Parse all hreflang tags, validate return links, detect missing x-default, and flag language/region mismatches across your international pages.',
  },
  {
    icon: '⬡',
    color: '#a78bfa',
    label: 'Semantic',
    title: 'Social Preview',
    desc: 'See exactly how your page renders on Twitter, Facebook, LinkedIn, and WhatsApp. OG tags, Twitter Card, and image preview side by side.',
  },
  {
    icon: '⌘',
    color: '#facc15',
    label: 'Toolbox',
    title: 'SERP Toolbox',
    desc: 'Google Dorks, cached page checker, indexed page count, site: operator shortcuts — all the power-user SERP queries you use daily, prebuilt.',
  },
  {
    icon: '🌐',
    color: '#facc15',
    label: 'Toolbox',
    title: 'SERP VPN',
    desc: 'Simulate searches from different countries and devices to check geo-specific rankings and content variations without a real VPN.',
  },
  {
    icon: '⬛',
    color: '#facc15',
    label: 'Toolbox',
    title: 'JS Toggle',
    desc: 'Disable JavaScript with one click to see your page as Googlebot sees it during crawl. Instantly reveals content hidden behind JS that harms indexing.',
  },
  {
    icon: '📋',
    color: '#facc15',
    label: 'Toolbox',
    title: 'SEO Report',
    desc: 'Generate a weighted SEO score with detailed findings for every category. Export as PDF or share as a standalone URL — client-ready in seconds.',
  },
]

const groupColors: Record<string, string> = {
  Semantic:   'rgba(167,139,250,0.15)',
  Technical:  'rgba(57,211,255,0.15)',
  Toolbox:    'rgba(250,204,21,0.15)',
}

export function FeaturesSection() {
  return (
    <section className="bg-background py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <p className="text-center text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-5">
          Features
        </p>
        <h2
          className="text-center text-4xl md:text-5xl font-semibold bg-clip-text text-transparent mb-4 tracking-tight"
          style={{ backgroundImage: 'linear-gradient(135deg, #e8e8e9 0%, #a78bfa 100%)' }}
        >
          20+ tools. One sidebar.
        </h2>
        <p className="text-center text-lg text-muted-foreground max-w-lg mx-auto mb-16">
          Everything a technical SEO needs — grouped logically, accessible instantly.
        </p>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="group liquid-glass rounded-2xl p-6 flex flex-col gap-3 hover:bg-white/[0.04] transition-all duration-200 cursor-default"
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-base font-bold flex-shrink-0"
                  style={{ background: groupColors[f.label] ?? 'rgba(255,255,255,0.07)', color: f.color }}
                >
                  {f.icon}
                </div>
                <div>
                  <p className="text-foreground font-semibold text-sm leading-tight">{f.title}</p>
                  <p className="text-xs mt-0.5 font-medium" style={{ color: f.color }}>{f.label}</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
