import React from 'react'
import { cn } from '@/lib/utils'
import type { MascotVariety, MascotStatus } from '@/types/mascot'

interface MascotProps {
  type: MascotVariety
  state?: MascotStatus
  size?: number
  className?: string
}

const ASSET_BASE_URL = '/assets/mascots'

export function Mascot({ type, state = 'closed', size = 120, className }: MascotProps) {
  const fileName = `${type}-${state === 'closed' ? 'closed' : 'open-rainbow'}.png`
  const src = `${ASSET_BASE_URL}/${fileName}`

  return (
    <div 
      className={cn("relative flex items-center justify-center", className)}
      style={{ width: size, height: size }}
    >
      <img 
        src={src} 
        alt={`${type} mascot`}
        className="w-full h-full object-contain"
        loading="lazy"
      />
    </div>
  )
}
