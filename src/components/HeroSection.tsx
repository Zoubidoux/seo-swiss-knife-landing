import { Navbar } from '@/components/Navbar'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="bg-background relative overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Centered hero content */}
      <div className="flex flex-col items-center pt-20 px-4">
        {/* Giant headline */}
        <h1
          className="font-normal leading-[1.02] tracking-[-0.024em] bg-clip-text text-transparent select-none"
          style={{
            fontSize: 'clamp(80px, 18vw, 230px)',
            fontFamily: "'General Sans', 'Geist Sans', sans-serif",
            backgroundImage: 'linear-gradient(223deg, #E8E8E9 0%, #3A7BBF 104.15%)',
          }}
        >
          Grow
        </h1>

        {/* Subtext */}
        <p className="text-hero-sub text-center text-lg leading-8 max-w-md mt-4 opacity-80">
          The most powerful SEO toolkit ever built
          <br />
          for Chrome — analyze, audit, and dominate
        </p>

        {/* CTA */}
        <div className="mt-8 mb-[66px]">
          <Button
            variant="heroSecondary"
            className="px-[29px] py-[24px] text-base"
          >
            Get the Extension
          </Button>
        </div>
      </div>
    </section>
  )
}
