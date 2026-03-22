import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/i18n/index'

export function FeaturesSection() {
  const { lang } = useLanguage()
  const t = translations[lang].features
  const [selected, setSelected] = useState<number | null>(null)
  const [paused, setPaused] = useState(false)

  // Duplicate items for seamless loop
  const doubled = [...t.items, ...t.items]

  return (
    <section id="features" className="bg-white py-32 overflow-hidden grain-bg">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-[10px] font-black tracking-[0.3em] uppercase text-black/40 mb-8">
           Features
        </p>
        <h2 className="text-center text-4xl md:text-7xl font-black text-black mb-6 tracking-tighter leading-[0.95]">
          {t.headline}
        </h2>
        <p className="text-center text-xl text-black/50 max-w-lg mx-auto mb-20 font-medium text-balance">{t.sub}</p>
      </div>

      <div
        className="relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => { setPaused(false); setSelected(null) }}
      >
        <div className="absolute left-0 top-0 bottom-0 w-40 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />

        <div
          className="flex gap-6 w-max"
          style={{
            paddingLeft: 24,
            paddingRight: 24,
            animation: 'carousel-scroll 60s linear infinite',
            animationPlayState: paused ? 'paused' : 'running',
          }}
        >
          {doubled.map((f, idx) => {
            const isSelected = selected === idx
            return (
              <div
                key={`${f.title}-${idx}`}
                onClick={() => setSelected(isSelected ? null : idx)}
                className="flex-shrink-0 editorial-card rounded-2xl cursor-pointer transition-all duration-300 bg-white"
                style={{
                  width: isSelected ? 320 : 260,
                  padding: 24,
                }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center text-lg grayscale">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="text-black font-bold text-sm leading-tight tracking-tight uppercase">{f.title}</h4>
                    <p className="text-[10px] mt-1 font-black uppercase tracking-widest text-black/30">{f.label}</p>
                  </div>
                </div>
                <p
                  className="text-black/50 text-xs font-medium leading-relaxed overflow-hidden transition-all duration-300"
                  style={{ maxHeight: isSelected ? 120 : 44, WebkitLineClamp: isSelected ? undefined : 2, display: '-webkit-box', WebkitBoxOrient: 'vertical' }}
                >
                  {f.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>

      <style>{`
        @keyframes carousel-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
