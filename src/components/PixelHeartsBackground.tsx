import { useEffect, useState } from 'react'
import { PixelHeart } from '@/components/PixelHeart'

interface Heart {
  id: number
  x: number
  y: number
  size: number
  opacity: number
  duration: number
  delay: number
  color: string
  radius: number
}

const HEART_COLORS = [
  'hsl(262, 83%, 65%)', // Vibrant Purple
  'hsl(190, 100%, 60%)', // Vibrant Teal
  'hsl(330, 90%, 75%)',  // Vibrant Rose
  'hsl(140, 80%, 65%)',  // Vibrant Green
  'hsl(25, 100%, 65%)',  // Vibrant Orange
]

export function PixelHeartsBackground() {
  const [hearts, setHearts] = useState<Heart[]>([])

  useEffect(() => {
    // Generate static but randomly positioned hearts
    const newHearts: Heart[] = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 14 + 10,
      opacity: Math.random() * 0.3 + 0.15,
      duration: Math.random() * 40 + 20,
      delay: Math.random() * -50,
      color: HEART_COLORS[i % HEART_COLORS.length],
      radius: Math.random() * 60 + 30, // orbit radius in px
    }))
    setHearts(newHearts)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-[#020617]">
      <style>{`
        @keyframes circularOrbit {
          from { 
            transform: rotate(0deg) translateX(var(--orbit-radius)) rotate(0deg); 
          }
          to { 
            transform: rotate(360deg) translateX(var(--orbit-radius)) rotate(-360deg); 
          }
        }
        .animate-orbit {
          animation: circularOrbit var(--duration) linear infinite;
          animation-delay: var(--delay);
        }
      `}</style>
      
      {/* Background radial glow */}
      <div 
        className="absolute inset-0 z-0" 
        style={{ 
          background: 'radial-gradient(circle at 50% 40%, rgba(88, 28, 135, 0.25) 0%, transparent 65%)' 
        }} 
      />

      {/* Orbiting Hearts */}
      {hearts.map(h => (
        <div
          key={h.id}
          className="absolute animate-orbit flex items-center justify-center"
          style={{
            left: `${h.x}%`,
            top: `${h.y}%`,
            '--orbit-radius': `${h.radius}px`,
            '--duration': `${h.duration}s`,
            '--delay': `${h.delay}s`,
            opacity: h.opacity,
            filter: `drop-shadow(0 0 10px ${h.color}) saturate(2)`,
          } as any}
        >
          <PixelHeart 
            size={h.size} 
            style={{ 
              filter: `brightness(1.5)` 
            }} 
          />
        </div>
      ))}
    </div>
  )
}
