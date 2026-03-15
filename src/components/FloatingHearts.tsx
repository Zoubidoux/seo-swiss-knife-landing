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
  ['3%',  '10%', 18, 16, -2,  'fhDrift1', 0.32, 'purple'],
  ['7%',  '35%', 16, 22, -8,  'fhDrift2', 0.26, 'red'   ],
  ['4%',  '62%', 20, 18, -5,  'fhDrift3', 0.30, 'green' ],
  ['9%',  '82%', 16, 25, -12, 'fhDrift1', 0.24, 'yellow'],
  ['14%', '48%', 14, 20, -7,  'fhDrift2', 0.22, 'purple'],
  ['92%', '18%', 16, 20, -3,  'fhDrift2', 0.28, 'yellow'],
  ['96%', '44%', 20, 15, -9,  'fhDrift3', 0.32, 'purple'],
  ['90%', '70%', 16, 23, -6,  'fhDrift1', 0.24, 'red'   ],
  ['94%', '88%', 18, 19, -14, 'fhDrift2', 0.26, 'green' ],
  ['86%', '55%', 14, 17, -4,  'fhDrift3', 0.22, 'yellow'],
  ['22%', '28%', 14, 21, -7,  'fhDrift3', 0.20, 'green' ],
  ['75%', '36%', 16, 17, -4,  'fhDrift1', 0.23, 'red'   ],
  ['46%', '58%', 16, 26, -11, 'fhDrift2', 0.18, 'yellow'],
  ['63%', '76%', 18, 14, -2,  'fhDrift3', 0.26, 'purple'],
  ['33%', '86%', 16, 20, -9,  'fhDrift1', 0.21, 'green' ],
  ['81%', '91%', 18, 18, -5,  'fhDrift2', 0.24, 'red'   ],
  ['55%', '14%', 16, 16, -7,  'fhDrift1', 0.23, 'yellow'],
  ['38%', '70%', 14, 24, -13, 'fhDrift3', 0.19, 'purple'],
  ['18%', '68%', 14, 19, -6,  'fhDrift2', 0.20, 'red'   ],
  ['68%', '22%', 16, 23, -10, 'fhDrift1', 0.22, 'green' ],
  ['50%', '42%', 12, 28, -3,  'fhDrift3', 0.15, 'yellow'],
  ['27%', '15%', 14, 15, -8,  'fhDrift2', 0.19, 'purple'],
  ['83%', '74%', 16, 21, -11, 'fhDrift1', 0.21, 'red'   ],
  ['11%', '94%', 14, 17, -4,  'fhDrift3', 0.18, 'green' ],
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
