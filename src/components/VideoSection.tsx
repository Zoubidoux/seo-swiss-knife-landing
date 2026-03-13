import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/i18n/index'

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260308_114720_3dabeb9e-2c39-4907-b747-bc3544e2d5b7.mp4'

export function VideoSection() {
  const { lang } = useLanguage()
  const t = translations[lang].video

  return (
    <section className="relative bg-background py-24 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />

      <div className="max-w-5xl mx-auto flex flex-col items-center gap-10">
        <div className="text-center flex flex-col gap-3">
          <p className="text-sm font-semibold tracking-widest uppercase text-primary">{t.eyebrow}</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight">{t.headline}</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">{t.sub}</p>
        </div>

        {/* Video container with browser frame */}
        <div className="w-full relative">
          {/* Glow */}
          <div
            className="absolute -inset-8 rounded-3xl blur-3xl opacity-20 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse, #7c3aed 0%, transparent 70%)' }}
          />

          <div
            className="relative rounded-2xl overflow-hidden"
            style={{ border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 32px 80px rgba(0,0,0,0.7)' }}
          >
            {/* Browser top bar */}
            <div
              className="flex items-center gap-2 px-4 py-3"
              style={{ background: '#0d1117', borderBottom: '1px solid rgba(255,255,255,0.08)' }}
            >
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <div className="flex-1 mx-3 bg-white/5 rounded px-3 py-1 text-[10px] text-white/30">
                https://example.com — SEO Swiss Knife
              </div>
              <div className="flex items-center gap-1">
                <div className="w-5 h-5 rounded flex items-center justify-center text-[8px]" style={{ background: 'rgba(167,139,250,0.2)', color: '#a78bfa' }}>
                  🔪
                </div>
              </div>
            </div>

            {/* Video */}
            <video
              autoPlay
              muted
              loop
              playsInline
              controls={false}
              className="w-full block"
              style={{ maxHeight: 480, objectFit: 'cover' }}
            >
              <source src={VIDEO_URL} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  )
}
