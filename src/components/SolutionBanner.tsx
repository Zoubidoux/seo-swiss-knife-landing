import { Button } from '@/components/ui/button'

export function SolutionBanner() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Purple glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(124,58,237,0.15) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-3xl mx-auto text-center">
        <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-5">
          The Solution
        </p>
        <h2
          className="text-5xl md:text-6xl font-semibold bg-clip-text text-transparent mb-6 leading-tight tracking-tight"
          style={{
            backgroundImage: 'linear-gradient(180deg, #f8f8f9 0%, #a78bfa 100%)',
          }}
        >
          One panel.<br />Every SEO tool you need.
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto">
          SEO Swiss Knife lives in your browser sidebar. Open a tab, get instant
          insights — no login, no API key, no context switching.
        </p>
        <Button variant="hero" className="px-8 py-4 text-base rounded-full">
          Add to Chrome — It's Free
        </Button>
      </div>
    </section>
  )
}
