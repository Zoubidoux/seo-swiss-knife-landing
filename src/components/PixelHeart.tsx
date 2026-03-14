import icon from '@/assets/icon128.png'

interface PixelHeartProps {
  size?: number
  className?: string
  style?: React.CSSProperties
}

export function PixelHeart({ size = 20, className, style }: PixelHeartProps) {
  return (
    <img
      src={icon}
      alt="Search Toolbox"
      width={size}
      height={size}
      className={className}
      style={{ imageRendering: 'pixelated', flexShrink: 0, display: 'inline-block', ...style }}
    />
  )
}
