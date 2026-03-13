import { useEffect, useRef } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/i18n/index'

const VIDEO_URL = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260308_114720_3dabeb9e-2c39-4907-b747-bc3544e2d5b7.mp4'
const FADE_DURATION = 0.5
const BRANDS = ['Vortex', 'Nimbus', 'Prysma', 'Cirrus', 'Kynder', 'Halcyn']

function LogoItem({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-3 flex-shrink-0">
      <div className="liquid-glass w-6 h-6 rounded-lg flex items-center justify-center text-foreground text-xs font-bold">{name[0]}</div>
      <span className="text-base font-semibold text-foreground whitespace-nowrap">{name}</span>
    </div>
  )
}

export function SocialProofSection() {
  const { lang } = useLanguage()
  const t = translations[lang].proof
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    let rafId: number
    function tick() {
      if (!video || video.paused || isNaN(video.duration)) { rafId = requestAnimationFrame(tick); return }
      const t = video.currentTime, d = video.duration
      let opacity = 1
      if (t < FADE_DURATION) opacity = t / FADE_DURATION
      else if (t > d - FADE_DURATION) opacity = (d - t) / FADE_DURATION
      video.style.opacity = String(Math.max(0, Math.min(1, opacity)))
      rafId = requestAnimationFrame(tick)
    }
    function handleEnded() {
      if (!video) return
      video.style.opacity = '0'
      setTimeout(() => { if (!video) return; video.currentTime = 0; video.play().catch(() => {}) }, 100)
    }
    video.addEventListener('ended', handleEnded)
    rafId = requestAnimationFrame(tick)
    return () => { cancelAnimationFrame(rafId); video.removeEventListener('ended', handleEnded) }
  }, [])

  const marqueeItems = [...BRANDS, ...BRANDS]

  return (
    <section className="relative w-full overflow-hidden">
      <video ref={videoRef} autoPlay muted playsInline className="absolute inset-0 w-full h-full object-cover" style={{ opacity: 0 }}>
        <source src={VIDEO_URL} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
      <div className="relative z-10 flex flex-col items-center pt-16 pb-24 px-4 gap-20">
        <div className="h-40" />
        <div className="max-w-5xl w-full flex items-center gap-10 overflow-hidden">
          <p className="text-foreground/50 text-sm whitespace-nowrap shrink-0 leading-relaxed">{t.label.split('\n').map((l, i) => <span key={i}>{l}{i === 0 && <br />}</span>)}</p>
          <div className="flex-1 overflow-hidden">
            <div className="flex gap-16 animate-marquee w-max">
              {marqueeItems.map((brand, i) => <LogoItem key={`${brand}-${i}`} name={brand} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
