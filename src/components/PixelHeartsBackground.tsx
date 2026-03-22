import { useEffect, useState } from 'react'
import { PixelHeart } from '@/components/PixelHeart'

interface BackgroundElement {
  id: number
  type: 'heart' | 'pill'
  text?: string
  x: number
  y: number
  size: number
  opacity: number
  duration: number
  delay: number
  color: string
  radius: number
}

const COLORS = [
  '#22C55E', // Green
  '#F59E0B', // Orange
  '#8B5CF6', // Violet
  '#EF4444', // Red
  '#3B82F6', // Blue
]

const SEO_TERMS = ['H1', '301', 'ALT', 'JSON-LD', 'SSL', 'HTTPS', 'URL', 'GSC', 'GA4']

export function PixelHeartsBackground() {
  const [elements, setElements] = useState<BackgroundElement[]>([])

  useEffect(() => {
    const newElements: BackgroundElement[] = Array.from({ length: 45 }).map((_, i) => {
      const type = Math.random() > 0.7 ? 'pill' : 'heart'
      return {
        id: i,
        type,
        text: type === 'pill' ? SEO_TERMS[i % SEO_TERMS.length] : undefined,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: type === 'pill' ? Math.random() * 8 + 8 : Math.random() * 14 + 10,
        opacity: Math.random() * 0.2 + 0.1,
        duration: Math.random() * 40 + 20,
        delay: Math.random() * -50,
        color: COLORS[i % COLORS.length],
        radius: Math.random() * 60 + 30,
      }
    })
    setElements(newElements)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-white" style={{ willChange: 'transform' }}>
      <style>{`
        @keyframes circularOrbit {
          from { transform: rotate(0deg) translateX(var(--orbit-radius)) rotate(0deg); }
          to { transform: rotate(360deg) translateX(var(--orbit-radius)) rotate(-360deg); }
        }
        .animate-orbit {
          animation: circularOrbit var(--duration) linear infinite;
          animation-delay: var(--delay);
          will-change: transform;
          transform: translate3d(0,0,0);
        }
      `}</style>
      
      <div 
        className="absolute inset-0 z-0 opacity-40" 
        style={{ background: 'radial-gradient(circle at 50% 40%, #FAFAFA 0%, transparent 65%)' }} 
      />

      {elements.map(el => (
        <div
          key={el.id}
          className="absolute animate-orbit flex items-center justify-center"
          style={{
            left: `${el.x}%`,
            top: `${el.y}%`,
            '--orbit-radius': `${el.radius}px`,
            '--duration': `${el.duration}s`,
            '--delay': `${el.delay}s`,
            opacity: el.opacity,
          } as any}
        >
          {el.type === 'heart' ? (
            <PixelHeart 
              size={el.size} 
              style={{ color: el.color }}
              className="opacity-20"
            />
          ) : (
            <div 
              className="px-2 py-0.5 rounded border border-black/5 bg-white text-[8px] font-black tracking-widest uppercase opacity-30"
              style={{ color: el.color }}
            >
              {el.text}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
