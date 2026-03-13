import { Button } from '@/components/ui/button'

const stats = [
  { value: '20+', label: 'Built-in tools' },
  { value: '0s', label: 'Setup time' },
  { value: '100%', label: 'Local & private' },
]

export function CTASection() {
  return (
    <section className="relative bg-background py-32 px-6 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 100%, rgba(124,58,237,0.2) 0%, transparent 70%)',
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />

      <div className="relative max-w-3xl mx-auto text-center flex flex-col items-center gap-8">
        {/* Stars mock */}
        <div className="flex items-center gap-1 text-yellow-400 text-lg">
          {'★★★★★'}
        </div>
        <p className="text-foreground/70 text-base italic max-w-md">
          "It replaced 6 separate browser extensions for me. I open it on every client site before anything else."
        </p>

        <div className="flex gap-8 mt-4">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-1">
              <span
                className="text-3xl font-black bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(135deg, #e8e8e9 0%, #a78bfa 100%)' }}
              >
                {s.value}
              </span>
              <span className="text-xs text-muted-foreground uppercase tracking-widest font-medium">{s.label}</span>
            </div>
          ))}
        </div>

        <div className="mt-4 flex flex-col sm:flex-row gap-4 items-center">
          <Button variant="hero" className="px-8 py-4 text-base rounded-full">
            Add to Chrome — It's Free
          </Button>
          <Button variant="heroSecondary" className="px-8 py-4 text-base rounded-full">
            View on GitHub
          </Button>
        </div>

        <p className="text-muted-foreground text-xs mt-2">
          No account required · Works on Chrome, Edge, Brave &amp; Arc
        </p>
      </div>
    </section>
  )
}
