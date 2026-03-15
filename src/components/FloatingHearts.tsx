const FLOAT_STYLE = `
@keyframes fhDrift1 {
  0%   { transform: translateY(0px) rotate(0deg);   opacity: var(--op); }
  50%  { transform: translateY(-55px) rotate(7deg);  opacity: calc(var(--op) * 0.55); }
  100% { transform: translateY(-110px) rotate(-3deg); opacity: 0; }
}
@keyframes fhDrift2 {
  0%   { transform: translateY(0px) rotate(0deg);   opacity: var(--op); }
  50%  { transform: translateY(-60px) rotate(-9deg); opacity: calc(var(--op) * 0.5); }
  100% { transform: translateY(-115px) rotate(5deg);  opacity: 0; }
}
@keyframes fhDrift3 {
  0%   { transform: translateY(0px) rotate(0deg);   opacity: var(--op); }
  40%  { transform: translateY(-42px) rotate(5deg);  opacity: calc(var(--op) * 0.65); }
  100% { transform: translateY(-100px) rotate(-6deg); opacity: 0; }
}
`

// hue-rotate pour teinter le pixel heart violet
const TINT: Record<string, string> = {
  purple: '',
  red:    'hue-rotate(220deg) saturate(1.4)',
  green:  'hue-rotate(145deg) saturate(1.3)',
  yellow: 'hue-rotate(58deg)  saturate(1.5) brightness(1.1)',
}

// [left%, top%, size(px), dur(s), delay(s), anim, opacity, color]
const HEARTS: [string, string, number, number, number, string, number, string][] = [
  ['3%',  '10%', 12, 16, -2,  'fhDrift1', 0.28, 'purple'],
  ['7%',  '35%', 10, 22, -8,  'fhDrift2', 0.22, 'red'   ],
  ['4%',  '62%', 14, 18, -5,  'fhDrift3', 0.26, 'green' ],
  ['9%',  '82%', 11, 25, -12, 'fhDrift1', 0.20, 'yellow'],
  ['14%', '48%',  9, 20, -7,  'fhDrift2', 0.18, 'purple'],
  ['92%', '18%', 11, 20, -3,  'fhDrift2', 0.24, 'yellow'],
  ['96%', '44%', 14, 15, -9,  'fhDrift3', 0.28, 'purple'],
  ['90%', '70%', 10, 23, -6,  'fhDrift1', 0.20, 'red'   ],
  ['94%', '88%', 12, 19, -14, 'fhDrift2', 0.22, 'green' ],
  ['86%', '55%',  9, 17, -4,  'fhDrift3', 0.18, 'yellow'],
  ['22%', '28%',  9, 21, -7,  'fhDrift3', 0.17, 'green' ],
  ['75%', '36%', 11, 17, -4,  'fhDrift1', 0.19, 'red'   ],
  ['46%', '58%', 10, 26, -11, 'fhDrift2', 0.15, 'yellow'],
  ['63%', '76%', 12, 14, -2,  'fhDrift3', 0.22, 'purple'],
  ['33%', '86%', 10, 20, -9,  'fhDrift1', 0.17, 'green' ],
  ['81%', '91%', 13, 18, -5,  'fhDrift2', 0.20, 'red'   ],
  ['55%', '14%', 11, 16, -7,  'fhDrift1', 0.19, 'yellow'],
  ['38%', '70%',  8, 24, -13, 'fhDrift3', 0.15, 'purple'],
]

export function FloatingHearts() {
  return (
    <>
      <style>{FLOAT_STYLE}</style>
      <div aria-hidden="true" style={{
        position: 'fixed', inset: 0,
        pointerEvents: 'none', zIndex: 0, overflow: 'hidden',
      }}>
        {HEARTS.map(([left, top, size, dur, delay, anim, op, color], i) => (
          <div key={i} style={{
            position: 'absolute', left, top,
            width: size, height: size,
            ['--op' as string]: String(op),
            opacity: op,
            filter: TINT[color] || undefined,
            animation: `${anim} ${dur}s ease-in-out infinite`,
            animationDelay: `${delay}s`,
          }}>
            <img src="/icon128.png" width={size} height={size}
              style={{ imageRendering: 'pixelated', display: 'block' }} alt="" />
          </div>
        ))}
      </div>
    </>
  )
}
