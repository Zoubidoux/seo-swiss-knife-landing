const steps = [
  {
    num: '01',
    title: 'Install the extension',
    body: 'One click from the Chrome Web Store. No account, no credit card, no setup wizard.',
    color: '#a78bfa',
  },
  {
    num: '02',
    title: 'Open the side panel',
    body: 'Click the SEO Swiss Knife icon or press the keyboard shortcut. The panel opens on any page, instantly.',
    color: '#39d3ff',
  },
  {
    num: '03',
    title: 'Audit, fix, and export',
    body: 'Navigate between 20+ tools in the sidebar. Generate a weighted SEO report, export as PDF, and share with clients.',
    color: '#2dd4bf',
  },
]

export function HowItWorks() {
  return (
    <section className="relative bg-background py-28 px-6 overflow-hidden">
      {/* Thin horizontal dividers */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />

      <div className="max-w-5xl mx-auto">
        <p className="text-center text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-5">
          How it works
        </p>
        <h2
          className="text-center text-4xl md:text-5xl font-semibold bg-clip-text text-transparent mb-16 tracking-tight"
          style={{ backgroundImage: 'linear-gradient(135deg, #e8e8e9 0%, #a78bfa 100%)' }}
        >
          Up and running in 60 seconds
        </h2>

        {/* Steps */}
        <div className="relative grid md:grid-cols-3 gap-8">
          {/* Connector line */}
          <div className="hidden md:block absolute top-10 left-[16.6%] right-[16.6%] h-px bg-gradient-to-r from-[#a78bfa] via-[#39d3ff] to-[#2dd4bf] opacity-30" />

          {steps.map((s) => (
            <div key={s.num} className="flex flex-col items-center text-center gap-5 relative">
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-black z-10"
                style={{
                  background: `linear-gradient(135deg, ${s.color}22 0%, ${s.color}08 100%)`,
                  border: `1px solid ${s.color}30`,
                  color: s.color,
                  boxShadow: `0 0 32px ${s.color}20`,
                }}
              >
                {s.num}
              </div>
              <h3 className="text-foreground font-semibold text-lg">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
