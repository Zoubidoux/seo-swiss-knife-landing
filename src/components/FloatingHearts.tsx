/**
 * FloatingHearts — cœurs pixel de marque qui dérivent lentement.
 * Monochrome violet uniquement, très subtils. DA cohérente, non arcade.
 */

const FLOAT_STYLE = `
@keyframes fhDrift1 {
  0%   { transform: translateY(0px)   rotate(0deg);  opacity: var(--fh-op); }
  50%  { transform: translateY(-45px) rotate(6deg);  opacity: calc(var(--fh-op) * 0.6); }
  100% { transform: translateY(-90px) rotate(-2deg); opacity: 0; }
}
@keyframes fhDrift2 {
  0%   { transform: translateY(0px)   rotate(0deg);  opacity: var(--fh-op); }
  50%  { transform: translateY(-50px) rotate(-8deg); opacity: calc(var(--fh-op) * 0.5); }
  100% { transform: translateY(-95px) rotate(4deg);  opacity: 0; }
}
@keyframes fhDrift3 {
  0%   { transform: translateY(0px)   rotate(0deg);  opacity: var(--fh-op); }
  40%  { transform: translateY(-35px) rotate(5deg);  opacity: calc(var(--fh-op) * 0.7); }
  100% { transform: translateY(-80px) rotate(-5deg); opacity: 0; }
}
`

// [left%, top%, size(px), duration(s), delay(s), anim, opacity]
const HEARTS: [string, string, number, number, number, string, number][] = [
  ['3%',  '15%',  8,  16, -2,  'fhDrift1', 0.14],
  ['6%',  '42%',  6,  22, -8,  'fhDrift2', 0.11],
  ['4%',  '68%',  9,  18, -5,  'fhDrift3', 0.13],
  ['9%',  '83%',  7,  25, -12, 'fhDrift1', 0.10],
  ['93%', '22%',  7,  20, -3,  'fhDrift2', 0.12],
  ['96%', '50%', 10,  15, -9,  'fhDrift3', 0.14],
  ['91%', '74%',  6,  23, -6,  'fhDrift1', 0.10],
  ['95%', '90%',  8,  19, -14, 'fhDrift2', 0.11],
  ['22%', '30%',  5,  21, -7,  'fhDrift3', 0.09],
  ['75%', '38%',  7,  17, -4,  'fhDrift1', 0.10],
  ['47%', '60%',  6,  26, -11, 'fhDrift2', 0.08],
  ['62%', '78%',  8,  14, -2,  'fhDrift3', 0.12],
  ['33%', '88%',  6,  20, -9,  'fhDrift1', 0.09],
  ['82%', '92%',  9,  18, -5,  'fhDrift2', 0.11],
  ['15%', '55%',  5,  24, -13, 'fhDrift3', 0.08],
  ['58%', '18%',  7,  16, -7,  'fhDrift1', 0.10],
]

export function FloatingHearts() {
  return (
    <>
      <style>{FLOAT_STYLE}</style>
      <div aria-hidden="true" style={{
        position: 'fixed', inset: 0,
        pointerEvents: 'none', zIndex: 0, overflow: 'hidden',
      }}>
        {HEARTS.map(([left, top, size, dur, delay, anim, op], i) => (
          <div key={i} style={{
            position: 'absolute', left, top,
            width: size, height: size,
            ['--fh-op' as string]: String(op),
            opacity: op,
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
