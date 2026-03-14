import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/i18n/index'

const groupColors: Record<string, string> = {
  Semantic:   'rgba(167,139,250,0.15)',
  Sémantique: 'rgba(167,139,250,0.15)',
  Technical:  'rgba(57,211,255,0.15)',
  Technique:  'rgba(57,211,255,0.15)',
  Netlinking: 'rgba(45,212,191,0.15)',
  Toolbox:    'rgba(250,204,21,0.15)',
  Outils:     'rgba(250,204,21,0.15)',
}

export function FeaturesSection() {
  const { lang } = useLanguage()
  const t = translations[lang].features
  const [selected, setSelected] = useState<number | null>(null)
  const [paused, setPaused] = useState(false)

  // Duplicate items for seamless loop
  const doubled = [...t.items, ...t.items]

  return (
    <section id="features" className="bg-background py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-5">{t.eyebrow}</p>
        <h2
          className="text-center text-4xl md:text-5xl font-semibold bg-clip-text text-transparent mb-4 tracking-tight"
          style={{ backgroundImage: 'linear-gradient(135deg, #e8e8e9 0%, #a78bfa 100%)' }}
        >
          {t.headline}
        </h2>
        <p className="text-center text-lg text-muted-foreground max-w-lg mx-auto mb-14">{t.sub}</p>
      </div>

      {/* Carousel track — full bleed */}
      <div
        className="relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => { setPaused(false); setSelected(null) }}
      >
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none" style={{ background: 'linear-gradient(90deg, hsl(var(--background)) 0%, transparent 100%)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none" style={{ background: 'linear-gradient(270deg, hsl(var(--background)) 0%, transparent 100%)' }} />

        <div
          className="flex gap-4 w-max"
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
                className="flex-shrink-0 liquid-glass rounded-2xl cursor-pointer transition-all duration-300"
                style={{
                  width: isSelected ? 300 : 240,
                  padding: isSelected ? 20 : 16,
                  border: isSelected ? `1px solid ${f.color}40` : '1px solid rgba(255,255,255,0.07)',
                  boxShadow: isSelected ? `0 0 32px ${f.color}20` : 'none',
                }}
              >
                <div className="flex items-center gap-3 mb-2">
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
                <p
                  className="text-muted-foreground text-xs leading-relaxed overflow-hidden transition-all duration-300"
                  style={{ maxHeight: isSelected ? 120 : 44, WebkitLineClamp: isSelected ? undefined : 2, display: '-webkit-box', WebkitBoxOrient: 'vertical' }}
                >
                  {f.desc}
                </p>
                {isSelected && (
                  <div className="mt-3 flex items-center gap-1.5">
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full" style={{ background: `${f.color}18`, color: f.color }}>
                      {f.label}
                    </span>
                    <span className="text-[10px] text-muted-foreground">— click to collapse</span>
                  </div>
                )}
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
