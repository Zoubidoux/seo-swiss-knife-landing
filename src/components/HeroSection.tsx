import { useState, useEffect, useRef } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/i18n/index'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { ExtensionMockup } from '@/components/ExtensionMockup'
import { Mascot } from '@/components/Mascot'
import type { MascotVariety, MascotStatus } from '@/types/mascot'

interface PhysicalMascot {
  id: string
  type: MascotVariety
  state: MascotStatus
  size: number
  x: number
  y: number
  targetX: number
  targetY: number
  vx: number
  vy: number
  initialX: number
  initialY: number
  isDragging: boolean
  isActive: boolean
  lastActive: number
  rotation: number
  opacity: number
  mouthOpenUntil: number
  phase: number
  floatY: number
}

const BUBBLE_MESSAGES: Record<string, string[]> = {
  en: ["Throw me! 🎯", "I bounce! 🏀", "Catch me! 👐", "Wheee! 🎉", "Try again! 💫"],
  fr: ["Lance-moi ! 🎯", "Je rebondis ! 🏀", "Attrape-moi ! 👐", "Youhou ! 🎉", "Encore ! 💫"],
  de: ["Wirf mich! 🎯", "Ich bounce! 🏀", "Fang mich! 👐", "Wheee! 🎉", "Nochmal! 💫"],
  it: ["Lanciami! 🎯", "Rimbalzo! 🏀", "Prendimi! 👐", "Evviva! 🎉", "Ancora! 💫"],
  es: ["¡Lánzame! 🎯", "¡Reboto! 🏀", "¡Atrápame! 👐", "¡Yuhu! 🎉", "¡Otra vez! 💫"],
}

export function HeroSection() {
  const { lang } = useLanguage()
  const t = translations[lang].hero
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const sectionRef = useRef<HTMLElement>(null)
  const timeRef = useRef(0)

  const [bubble, setBubble] = useState<{ mascotId: string; message: string } | null>(null)

  const [mascots, setMascots] = useState<PhysicalMascot[]>([
    { id: 'm1', type: 'intermediate', state: 'closed', size: 62, x: 18, y: 46, targetX: 18, targetY: 46, vx: 0, vy: 0, initialX: 18, initialY: 46, isDragging: false, isActive: false, lastActive: Date.now(), rotation:  10, opacity: 0.85, mouthOpenUntil: 0, phase: 0,   floatY: 0 },
    { id: 'm2', type: 'expert',       state: 'closed', size: 66, x: 82, y: 43, targetX: 82, targetY: 43, vx: 0, vy: 0, initialX: 82, initialY: 43, isDragging: false, isActive: false, lastActive: Date.now(), rotation: -12, opacity: 0.85, mouthOpenUntil: 0, phase: 2.1, floatY: 0 },
    { id: 'm3', type: 'beginner',     state: 'closed', size: 58, x: 80, y: 55, targetX: 80, targetY: 55, vx: 0, vy: 0, initialX: 80, initialY: 55, isDragging: false, isActive: false, lastActive: Date.now(), rotation:   6, opacity: 0.85, mouthOpenUntil: 0, phase: 4.2, floatY: 0 },
  ])

  const dragRef = useRef<{ id: string } | null>(null)

  // Preload open-rainbow images so tongue appears instantly on throw
  useEffect(() => {
    ['beginner', 'intermediate', 'expert'].forEach(t => {
      const img = new Image()
      img.src = `/assets/mascots/${t}-open-rainbow.png`
    })
  }, [])

  // ── Speech bubble timing ──
  useEffect(() => {
    const ids = ['m1', 'm2', 'm3']
    let msgIdx = 0
    let mascotIdx = 0
    let intervalId: ReturnType<typeof setInterval>

    const showBubble = () => {
      const msgs = BUBBLE_MESSAGES[lang] ?? BUBBLE_MESSAGES.en
      setBubble({ mascotId: ids[mascotIdx % 3], message: msgs[msgIdx % msgs.length] })
      msgIdx++
      mascotIdx++
      setTimeout(() => setBubble(null), 5000)
    }

    const timerId = setTimeout(() => {
      showBubble()
      intervalId = setInterval(showBubble, 35000)
    }, 12000)

    return () => { clearTimeout(timerId); clearInterval(intervalId) }
  }, [])

  const toPercent = (clientX: number, clientY: number) => {
    const r = sectionRef.current?.getBoundingClientRect()
    if (!r) return { px: 0, py: 0 }
    return { px: (clientX - r.left) / r.width * 100, py: (clientY - r.top) / r.height * 100 }
  }

  // ── Mouse / drag events ──
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return
      const { left, top, width, height } = sectionRef.current.getBoundingClientRect()
      setMousePos({ x: (e.clientX - left) / width - 0.5, y: (e.clientY - top) / height - 0.5 })

      if (dragRef.current) {
        const { px, py } = toPercent(e.clientX, e.clientY)
        setMascots(prev => prev.map(m =>
          m.id === dragRef.current?.id
            ? { ...m, targetX: px, targetY: py, isActive: true, lastActive: Date.now(), opacity: 1 }
            : m
        ))
      }
    }

    const handleMouseUp = () => {
      if (dragRef.current) {
        setMascots(prev => prev.map(m => {
          if (m.id !== dragRef.current?.id) return m
          const speed = Math.sqrt(m.vx * m.vx + m.vy * m.vy)
          return {
            ...m,
            isDragging: false,
            lastActive: Date.now(),
            state: speed > 0.6 ? 'open' : 'closed',
            mouthOpenUntil: speed > 0.6 ? Date.now() + 1800 : 0,
          }
        }))
        dragRef.current = null
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  // ── Physics loop ──
  useEffect(() => {
    let frameId: number
    const update = () => {
      const now = Date.now()
      timeRef.current += 0.022

      setMascots(prev => prev.map(m => {
        // Auto-reset after 10s inactivity
        if (m.isActive && !m.isDragging && now - m.lastActive > 10000) {
          if (m.opacity > 0.02) return { ...m, opacity: m.opacity * 0.94, vx: m.vx * 0.85, vy: m.vy * 0.85 }
          return { ...m, x: m.initialX, y: m.initialY, targetX: m.initialX, targetY: m.initialY, vx: 0, vy: 0, isActive: false, state: 'closed', opacity: 0.6, mouthOpenUntil: 0, floatY: 0 }
        }

        // Idle float
        if (!m.isActive && !m.isDragging) {
          const floatY = Math.sin(timeRef.current + m.phase) * 1.4
          const newRotation = m.rotation + Math.sin(timeRef.current * 0.6 + m.phase) * 0.04
          return { ...m, floatY, rotation: newRotation }
        }

        // Spring drag with lag
        if (m.isDragging) {
          const lerp = 0.2
          const newX = m.x + (m.targetX - m.x) * lerp
          const newY = m.y + (m.targetY - m.y) * lerp
          const vx = newX - m.x
          const vy = newY - m.y
          return { ...m, x: newX, y: newY, vx, vy, floatY: 0, rotation: m.rotation + vx * 3 }
        }

        // Flying with gravity + bounce
        let nextVx = m.vx * 0.994
        let nextVy = m.vy * 0.994 + 0.006
        let nextX = m.x + nextVx
        let nextY = m.y + nextVy

        // Always bounce on all 4 walls
        if (nextX <= 3)  { nextVx =  Math.abs(nextVx) * 0.78; nextX = 3 }
        if (nextX >= 97) { nextVx = -Math.abs(nextVx) * 0.78; nextX = 97 }
        if (nextY <= 3)  { nextVy =  Math.abs(nextVy) * 0.78; nextY = 3 }
        if (nextY >= 97) { nextVy = -Math.abs(nextVy) * 0.78; nextY = 97 }

        const speed = Math.sqrt(nextVx * nextVx + nextVy * nextVy)
        const mouthOpen = now < m.mouthOpenUntil || speed > 0.5
        const nextState: MascotStatus = mouthOpen ? 'open' : 'closed'

        return { ...m, x: nextX, y: nextY, vx: nextVx, vy: nextVy, rotation: m.rotation + nextVx * 2.5, state: nextState, floatY: 0 }
      }))
      frameId = requestAnimationFrame(update)
    }
    frameId = requestAnimationFrame(update)
    return () => cancelAnimationFrame(frameId)
  }, [mousePos])

  const handleMascotDown = (id: string, e: React.MouseEvent) => {
    e.preventDefault()
    const { px, py } = toPercent(e.clientX, e.clientY)
    setMascots(prev => prev.map(m =>
      m.id === id ? { ...m, isDragging: true, isActive: true, lastActive: Date.now(), targetX: px, targetY: py, vx: 0, vy: 0, opacity: 1, mouthOpenUntil: 0 } : m
    ))
    dragRef.current = { id }
  }

  const pupilX = mousePos.x * 85
  const pupilY = mousePos.y * 85

  return (
    <section ref={sectionRef} className="relative min-h-[95vh] flex flex-col items-center justify-center pt-32 pb-32 px-6 overflow-hidden grid-bg bg-white select-none">
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] grain-bg" />
      <div className="absolute top-40 left-0 w-full h-[1px] bg-steel/40 pointer-events-none" />
      <div className="absolute top-0 right-[20%] w-[1px] h-full bg-steel/40 pointer-events-none" />

      {/* ── Physics Mascots ── */}
      {mascots.map((mascot) => (
        <div
          key={mascot.id}
          onMouseDown={(e) => handleMascotDown(mascot.id, e)}
          className="absolute z-30 cursor-grab active:cursor-grabbing pointer-events-auto"
          style={{
            left: `${mascot.x}%`,
            top: `${mascot.y + mascot.floatY}%`,
            transform: `translate(-50%, -50%) rotate(${mascot.rotation}deg)`,
            opacity: mascot.opacity,
            transition: mascot.isDragging ? 'none' : 'opacity 0.4s',
            willChange: 'transform, left, top',
          }}
        >
          <Mascot type={mascot.type} state={mascot.state} size={mascot.size} className="pointer-events-none" />

          {/* Speech bubble */}
          {bubble?.mascotId === mascot.id && (
            <div
              className="absolute -top-14 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white border-2 border-black rounded-xl px-3 py-1.5 text-[11px] font-black text-black shadow-[3px_3px_0_0_rgba(0,0,0,1)] animate-in fade-in zoom-in duration-300 pointer-events-none"
              style={{ rotate: `${-mascot.rotation}deg` }}
            >
              {bubble.message}
              {/* Arrow */}
              <div className="absolute -bottom-[9px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[9px] border-t-black" />
              <div className="absolute -bottom-[6px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-t-[7px] border-t-white" />
            </div>
          )}
        </div>
      ))}

      {/* ── Content ── */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center text-center gap-10 pointer-events-none">

        {/* Badge */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 pointer-events-auto">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-lg border-2 border-black bg-white offset-expert text-[10px] font-black uppercase tracking-[0.2em] text-black">
            <span className="w-2 h-2 bg-expert animate-pulse" />
            {t.badge}
          </div>
        </div>

        {/* Headline with mouse-tracking eyes */}
        <div className="relative group/title px-4 pointer-events-auto">
          <div className="absolute -top-12 -left-12 technical-marker before:content-[''] after:content-['+'] after:opacity-20 hidden md:block" />
          <h1 className="text-4xl md:text-7xl lg:text-[5.5rem] font-black text-black tracking-[-0.08em] leading-none animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100 uppercase relative z-10 flex items-center justify-center flex-nowrap">
            <span>SEARCHT</span>
            <div className="relative flex items-center justify-center w-[1.1em] h-[1em] overflow-visible select-none mx-[-0.05em]">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ transform: 'translateY(28%) scale(1.35)', opacity: 0.18 }}>
                <img src="/assets/mascots/beginner-closed.png" alt="" className="w-full h-full object-contain" />
              </div>
              <div className="relative flex items-center gap-[0.02em] translate-y-[-2%]">
                <div className="w-[0.52em] h-[0.52em] rounded-full bg-white border-[0.082em] border-black flex items-center justify-center shadow-inner overflow-hidden">
                  <div className="w-[45%] h-[45%] bg-black rounded-full transition-transform duration-75" style={{ transform: `translate(${pupilX}%, ${pupilY}%)` }} />
                </div>
                <div className="w-[0.52em] h-[0.52em] rounded-full bg-white border-[0.082em] border-black flex items-center justify-center shadow-inner overflow-hidden">
                  <div className="w-[45%] h-[45%] bg-black rounded-full transition-transform duration-75" style={{ transform: `translate(${pupilX}%, ${pupilY}%)` }} />
                </div>
              </div>
            </div>
            <span>LBOX</span>
          </h1>
          <div className="absolute -bottom-12 -right-12 technical-marker after:content-['+'] after:opacity-20 hidden md:block" />
        </div>

        {/* Sub-headline */}
        <p className="max-w-2xl text-lg md:text-2xl text-black/80 font-medium leading-relaxed px-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 text-balance pointer-events-auto">
          {t.sub}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-6 mt-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 pointer-events-auto">
          <Button size="lg" className="rounded-xl px-12 h-20 text-[11px] uppercase tracking-[0.2em] font-black bg-black text-white hover:bg-black/90 hover-offset-expert shadow-[8px_8px_0_0_rgba(59,130,246,0.15)] transition-all border-none">
            {t.cta}<ArrowRight className="ml-3 w-5 h-5" />
          </Button>
          <Button variant="outline" size="lg" className="rounded-xl px-12 h-20 text-[11px] uppercase tracking-[0.2em] font-black border-2 border-black bg-white text-black hover:bg-black/5 hover-offset-intermediate shadow-[8px_8px_0_0_rgba(45,212,191,0.05)] transition-all">
            {t.demoCta}
          </Button>
        </div>

        {/* Feature Showcase */}
        <div className="relative w-full max-w-6xl mt-24 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-700 pointer-events-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-4 rounded-3xl border-2 border-black bg-bone/50 offset-expert group">
            <div className="md:col-span-8 editorial-card rounded-2xl p-6 bg-white overflow-hidden relative">
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-black/5">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-beginner" />
                  <div className="w-2.5 h-2.5 rounded-full bg-intermediate" />
                  <div className="w-2.5 h-2.5 rounded-full bg-expert" />
                </div>
                <div className="mx-auto text-[8px] font-black tracking-widest uppercase opacity-20">SEO Audit Interface v2.5.4</div>
              </div>
              <ExtensionMockup activeTab="overview" />
              <div className="absolute bottom-4 right-4 animate-bounce duration-3000">
                <Mascot type="expert" size={60} state="open" />
              </div>
            </div>
            <div className="md:col-span-4 flex flex-col gap-6">
              <div className="editorial-card rounded-2xl p-6 h-full flex flex-col justify-between items-start bg-expert text-white border-none shadow-none">
                <p className="text-[10px] font-black uppercase tracking-widest opacity-60">System Coverage</p>
                <p className="text-4xl font-black mt-2">100%</p>
                <p className="text-xs font-medium mt-auto opacity-80">Full site analysis enabled across all 5 languages.</p>
              </div>
              <div className="editorial-card rounded-2xl p-6 h-full bg-white offset-beginner">
                <ExtensionMockup activeTab="schema" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent pointer-events-none z-20" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-black opacity-10" />
    </section>
  )
}
