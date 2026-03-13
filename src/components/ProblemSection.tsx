const pains = [
  {
    icon: '⏱',
    title: '5+ tabs open just to audit one page',
    body: 'Schema validator here, robots checker there, redirect tracer somewhere else. Context-switching kills your focus and doubles your time.',
  },
  {
    icon: '🔍',
    title: 'Missing critical issues until it\'s too late',
    body: 'Broken hreflang tags, missing canonical, malformed structured data — small errors that cost rankings and take days to surface in Search Console.',
  },
  {
    icon: '📉',
    title: "Clients want reports. You're building them manually.",
    body: 'Copy-pasting meta tags and heading counts into spreadsheets. There\'s no time to fix the actual problems when reporting takes 2 hours per site.',
  },
]

export function ProblemSection() {
  return (
    <section className="relative bg-background py-32 px-6 overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative max-w-5xl mx-auto">
        {/* Eyebrow */}
        <p className="text-center text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-5">
          The Problem
        </p>

        {/* Headline */}
        <h2 className="text-center text-4xl md:text-5xl font-semibold text-foreground leading-tight mb-6 tracking-tight">
          Every SEO audit feels like<br />
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(135deg, #e8e8e9 0%, #a78bfa 100%)' }}
          >
            assembling IKEA furniture without instructions
          </span>
        </h2>

        <p className="text-center text-lg text-muted-foreground max-w-xl mx-auto mb-16 leading-relaxed">
          You know what you need to check. But the tools are scattered, the workflow is broken, and the clock is ticking.
        </p>

        {/* Pain point cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {pains.map((p) => (
            <div
              key={p.title}
              className="liquid-glass rounded-2xl p-7 flex flex-col gap-4 bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
            >
              <span className="text-3xl">{p.icon}</span>
              <h3 className="text-foreground font-semibold text-base leading-snug">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
