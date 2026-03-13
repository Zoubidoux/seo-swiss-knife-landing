import { useEffect, useRef } from 'react'

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260308_114720_3dabeb9e-2c39-4907-b747-bc3544e2d5b7.mp4'

const FADE_DURATION = 0.5 // seconds

const BRANDS = [
  'Vortex',
  'Nimbus',
  'Prysma',
  'Cirrus',
  'Kynder',
  'Halcyn',
]

function LogoItem({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-3 flex-shrink-0">
      <div className="liquid-glass w-6 h-6 rounded-lg flex items-center justify-center text-foreground text-xs font-bold">
        {name[0]}
      </div>
      <span className="text-base font-semibold text-foreground whitespace-nowrap">
        {name}
      </span>
    </div>
  )
}

export function SocialProofSection() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    let rafId: number

    function tick() {
      if (!video || video.paused || isNaN(video.duration)) {
        rafId = requestAnimationFrame(tick)
        return
      }

      const t = video.currentTime
      const d = video.duration

      let opacity = 1
      if (t < FADE_DURATION) {
        opacity = t / FADE_DURATION
      } else if (t > d - FADE_DURATION) {
        opacity = (d - t) / FADE_DURATION
      }

      video.style.opacity = String(Math.max(0, Math.min(1, opacity)))
      rafId = requestAnimationFrame(tick)
    }

    function handleEnded() {
      if (!video) return
      video.style.opacity = '0'
      setTimeout(() => {
        if (!video) return
        video.currentTime = 0
        video.play().catch(() => {/* autoplay may be blocked */})
      }, 100)
    }

    video.addEventListener('ended', handleEnded)
    rafId = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(rafId)
      video.removeEventListener('ended', handleEnded)
    }
  }, [])

  // Duplicate brands for seamless infinite loop
  const marqueeItems = [...BRANDS, ...BRANDS]

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0 }}
      >
        <source src={VIDEO_URL} type="video/mp4" />
      </video>

      {/* Top + bottom gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col items-center pt-16 pb-24 px-4 gap-20">
        {/* Spacer so video shows through */}
        <div className="h-40" />

        {/* Logo Marquee */}
        <div className="max-w-5xl w-full flex items-center gap-10 overflow-hidden">
          {/* Left label */}
          <p className="text-foreground/50 text-sm whitespace-nowrap shrink-0 leading-relaxed">
            Relied on by brands
            <br />
            across the globe
          </p>

          {/* Scrolling marquee track */}
          <div className="flex-1 overflow-hidden">
            <div className="flex gap-16 animate-marquee w-max">
              {marqueeItems.map((brand, i) => (
                <LogoItem key={`${brand}-${i}`} name={brand} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
