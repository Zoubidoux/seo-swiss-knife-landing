/**
 * FloatingHearts — cœurs pixel qui dérivent lentement à travers la page entière.
 * Position fixe, pointer-events none, z-index bas → invisible en arrière-plan.
 */

const FLOAT_STYLE = `
@keyframes heartDrift1 {
  0%   { transform: translate(0px,   0px)   rotate(0deg);   opacity: var(--fh-op); }
  25%  { transform: translate(18px, -30px)  rotate(8deg);   }
  50%  { transform: translate(-10px,-55px)  rotate(-4deg);  }
  75%  { transform: translate(22px, -80px)  rotate(10deg);  }
  100% { transform: translate(0px,  -120px) rotate(0deg);   opacity: 0; }
}
@keyframes heartDrift2 {
  0%   { transform: translate(0px,   0px)   rotate(0deg);   opacity: var(--fh-op); }
  33%  { transform: translate(-22px,-40px)  rotate(-9deg);  }
  66%  { transform: translate(14px, -80px)  rotate(5deg);   }
  100% { transform: translate(-5px, -130px) rotate(-2deg);  opacity: 0; }
}
@keyframes heartDrift3 {
  0%   { transform: translate(0px,  0px)   rotate(0deg);   opacity: var(--fh-op); }
  50%  { transform: translate(30px,-60px)  rotate(12deg);  }
  100% { transform: translate(8px, -115px) rotate(6deg);   opacity: 0; }
}
`

// [left%, top%, size, animDuration, animDelay, driftAnim, color filter]
const HEARTS = [
  // Left side
  ['4%',   '12%', 10, 14, 0,    'heartDrift1', ''],
  ['8%',   '38%', 7,  19, -5,   'heartDrift2', 'hue-rotate(150deg) saturate(1.3)'],
  ['2%',   '62%', 11, 16, -8,   'heartDrift3', 'hue-rotate(60deg) saturate(1.4)'],
  ['12%',  '80%', 8,  22, -3,   'heartDrift1', 'hue-rotate(220deg) saturate(1.3)'],
  // Right side
  ['92%',  '18%', 9,  17, -7,   'heartDrift2', 'hue-rotate(150deg) saturate(1.3)'],
  ['96%',  '45%', 12, 13, -2,   'heartDrift3', ''],
  ['88%',  '70%', 7,  20, -9,   'heartDrift1', 'hue-rotate(60deg) saturate(1.4)'],
  ['94%',  '88%', 10, 25, -4,   'heartDrift2', 'hue-rotate(220deg) saturate(1.3)'],
  // Center / scattered
  ['25%',  '25%', 7,  18, -11,  'heartDrift3', 'hue-rotate(195deg) saturate(1.2)'],
  ['72%',  '32%', 8,  15, -6,   'heartDrift1', 'hue-rotate(150deg) saturate(1.3)'],
  ['48%',  '55%', 6,  23, -13,  'heartDrift2', ''],
  ['60%',  '72%', 9,  12, -1,   'heartDrift3', 'hue-rotate(60deg) saturate(1.4)'],
  ['35%',  '85%', 7,  21, -10,  'heartDrift1', 'hue-rotate(220deg) saturate(1.3)'],
  ['80%',  '90%', 11, 16, -4,   'heartDrift2', 'hue-rotate(195deg) saturate(1.2)'],
  ['16%',  '50%', 6,  19, -7,   'heartDrift3', ''],
  ['55%',  '15%', 8,  14, -9,   'heartDrift1', 'hue-rotate(60deg) saturate(1.4)'],
] as const

export function FloatingHearts() {
  return (
    <>
      <style>{FLOAT_STYLE}</style>
      <div
        aria-hidden="true"
        style={{
          position: 'fixed', inset: 0,
          pointerEvents: 'none',
          zIndex: 0,
          overflow: 'hidden',
        }}
      >
        {HEARTS.map(([left, top, size, dur, delay, anim, colorFilter], i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              left, top,
              width: size, height: size,
              ['--fh-op' as string]: '0.22',
              opacity: 0.22,
              filter: colorFilter || undefined,
              animation: `${anim} ${dur}s ease-in-out infinite`,
              animationDelay: `${delay}s`,
            }}
          >
            <img
              src="/icon128.png"
              width={size}
              height={size}
              style={{ imageRendering: 'pixelated', display: 'block' }}
              alt=""
            />
          </div>
        ))}
      </div>
    </>
  )
}
