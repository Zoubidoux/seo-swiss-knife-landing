import { useState, useEffect, useRef, useCallback } from 'react'
import { Mascot } from '@/components/Mascot'
import { useLanguage } from '@/contexts/LanguageContext'
import type { MascotVariety, MascotStatus } from '@/types/mascot'

const MESSAGES: Record<string, string[]> = {
  en: [
    "Catch me if you can! 🎯",
    "I can fly ✈️",
    "Just passing through! 🚀",
    "Don't mind me! 👀",
    "Boo! 👻",
    "Free as a bird 🐦",
    "Wheee! 🎉",
    "Look ma, no hands! 🙌",
  ],
  fr: [
    "Attrape-moi si tu peux ! 🎯",
    "Je vole ! ✈️",
    "Je passe juste par là ! 🚀",
    "Ne faites pas attention ! 👀",
    "Bouh ! 👻",
    "Libre comme l'air 🐦",
    "Youhou ! 🎉",
    "Regardez, sans les mains ! 🙌",
  ],
  de: [
    "Fang mich wenn du kannst! 🎯",
    "Ich fliege! ✈️",
    "Nur durchfliegen! 🚀",
    "Nicht beachten! 👀",
    "Buh! 👻",
    "Wheee! 🎉",
  ],
  it: [
    "Prendimi se ci riesci! 🎯",
    "Volo! ✈️",
    "Solo di passaggio! 🚀",
    "Non farmi caso! 👀",
    "Boo! 👻",
    "Evviva! 🎉",
  ],
  es: [
    "¡Atrápame si puedes! 🎯",
    "¡Estoy volando! ✈️",
    "¡Solo paso por aquí! 🚀",
    "¡No me hagas caso! 👀",
    "¡Bu! 👻",
    "¡Yuhu! 🎉",
  ],
}

const TYPES: MascotVariety[] = ['beginner', 'intermediate', 'expert']

interface RoamState {
  type: MascotVariety
  state: MascotStatus
  x: number
  y: number
  targetX: number
  targetY: number
  vx: number
  vy: number
  rotation: number
  mouthOpenUntil: number
  message: string
  isDragging: boolean
}

export function RoamingMascot() {
  const { lang } = useLanguage()
  const langRef = useRef(lang)
  useEffect(() => { langRef.current = lang }, [lang])

  const [m, setM] = useState<RoamState | null>(null)
  const isDraggingRef = useRef(false)
  const animRef = useRef<number>(0)
  const disappearRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const spawn = useCallback(() => {
    const vw = window.innerWidth
    const vh = window.innerHeight
    const edge = Math.floor(Math.random() * 4)
    const type = TYPES[Math.floor(Math.random() * 3)]
    const msgs = MESSAGES[langRef.current] ?? MESSAGES.en
    const message = msgs[Math.floor(Math.random() * msgs.length)]
    const speed = 3.5 + Math.random() * 2

    let x: number, y: number, vx: number, vy: number
    switch (edge) {
      case 0: x = -80;     y = 80 + Math.random() * (vh - 160); vx =  speed; vy = (Math.random() - 0.5) * 2.5; break
      case 1: x = vw + 80; y = 80 + Math.random() * (vh - 160); vx = -speed; vy = (Math.random() - 0.5) * 2.5; break
      case 2: x = 80 + Math.random() * (vw - 160); y = -80;     vx = (Math.random() - 0.5) * 2.5; vy =  speed; break
      default:x = 80 + Math.random() * (vw - 160); y = vh + 80; vx = (Math.random() - 0.5) * 2.5; vy = -speed; break
    }

    setM({ type, state: 'closed', x, y, targetX: x, targetY: y, vx, vy, rotation: Math.random() * 20 - 10, mouthOpenUntil: 0, message, isDragging: false })

    if (disappearRef.current) clearTimeout(disappearRef.current)
    disappearRef.current = setTimeout(() => {
      if (!isDraggingRef.current) setM(null)
    }, 12000)
  }, [])

  // Random spawn: first at 25-50s, then every 60-120s
  useEffect(() => {
    let spawnTimer: ReturnType<typeof setTimeout>
    const scheduleNext = () => {
      const delay = 60000 + Math.random() * 60000
      spawnTimer = setTimeout(() => { spawn(); scheduleNext() }, delay)
    }
    const firstDelay = 25000 + Math.random() * 25000
    spawnTimer = setTimeout(() => { spawn(); scheduleNext() }, firstDelay)
    return () => clearTimeout(spawnTimer)
  }, [spawn])

  // Mouse events
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return
      setM(prev => prev ? { ...prev, targetX: e.clientX, targetY: e.clientY, isDragging: true } : prev)
    }
    const onUp = () => {
      if (!isDraggingRef.current) return
      isDraggingRef.current = false
      setM(prev => {
        if (!prev) return prev
        const speed = Math.sqrt(prev.vx * prev.vx + prev.vy * prev.vy)
        return { ...prev, isDragging: false, state: speed > 0.6 ? 'open' : 'closed', mouthOpenUntil: speed > 0.6 ? Date.now() + 1800 : 0 }
      })
      // Restart disappear timer after throw
      if (disappearRef.current) clearTimeout(disappearRef.current)
      disappearRef.current = setTimeout(() => setM(null), 10000)
    }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
    return () => { window.removeEventListener('mousemove', onMove); window.removeEventListener('mouseup', onUp) }
  }, [])

  // Physics loop — only runs when mascot is visible
  useEffect(() => {
    if (!m) return
    const update = () => {
      const now = Date.now()
      setM(prev => {
        if (!prev) return null

        // Spring drag
        if (prev.isDragging) {
          const lerp = 0.2
          const nx = prev.x + (prev.targetX - prev.x) * lerp
          const ny = prev.y + (prev.targetY - prev.y) * lerp
          return { ...prev, x: nx, y: ny, vx: nx - prev.x, vy: ny - prev.y, rotation: prev.rotation + (nx - prev.x) * 3 }
        }

        let nvx = prev.vx * 0.994
        let nvy = prev.vy * 0.994 + 0.055
        let nx = prev.x + nvx
        let ny = prev.y + nvy

        // Bounce on viewport edges when thrown by user
        if (prev.mouthOpenUntil > 0) {
          const vw = window.innerWidth
          const vh = window.innerHeight
          if (nx < 40)       { nvx =  Math.abs(nvx) * 0.7; nx = 40 }
          if (nx > vw - 40)  { nvx = -Math.abs(nvx) * 0.7; nx = vw - 40 }
          if (ny < 40)       { nvy =  Math.abs(nvy) * 0.7; ny = 40 }
          if (ny > vh - 40)  { nvy = -Math.abs(nvy) * 0.7; ny = vh - 40 }
        } else {
          // Natural path: disappear off-screen
          const vw = window.innerWidth
          const vh = window.innerHeight
          if (nx < -150 || nx > vw + 150 || ny < -150 || ny > vh + 150) return null
        }

        const speed = Math.sqrt(nvx * nvx + nvy * nvy)
        const mouthOpen = now < prev.mouthOpenUntil || speed > 1.2
        return { ...prev, x: nx, y: ny, vx: nvx, vy: nvy, rotation: prev.rotation + nvx * 2.2, state: mouthOpen ? 'open' : 'closed' }
      })
      animRef.current = requestAnimationFrame(update)
    }
    animRef.current = requestAnimationFrame(update)
    return () => cancelAnimationFrame(animRef.current)
  }, [!!m]) // eslint-disable-line react-hooks/exhaustive-deps

  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    isDraggingRef.current = true
    if (disappearRef.current) clearTimeout(disappearRef.current)
    setM(prev => prev ? { ...prev, isDragging: true, vx: 0, vy: 0 } : prev)
  }

  if (!m) return null

  return (
    <div
      onMouseDown={onMouseDown}
      className="fixed z-[999] cursor-grab active:cursor-grabbing pointer-events-auto select-none"
      style={{ left: m.x, top: m.y, transform: `translate(-50%, -50%) rotate(${m.rotation}deg)`, willChange: 'left, top, transform' }}
    >
      <Mascot type={m.type} state={m.state} size={72} className="pointer-events-none drop-shadow-xl" />

      {/* Speech bubble — counter-rotated to stay readable */}
      <div
        className="absolute -top-14 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white border-2 border-black rounded-xl px-3 py-1.5 text-[11px] font-black text-black shadow-[3px_3px_0_0_rgba(0,0,0,1)] pointer-events-none"
        style={{ rotate: `${-m.rotation}deg` }}
      >
        {m.message}
        <div className="absolute -bottom-[9px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[9px] border-t-black" />
        <div className="absolute -bottom-[6px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-t-[7px] border-t-white" />
      </div>
    </div>
  )
}
