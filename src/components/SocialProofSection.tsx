import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/i18n/index'

const BRANDS = ['Vortex', 'Nimbus', 'Prysma', 'Cirrus', 'Kynder', 'Halcyn']

function LogoItem({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-4 flex-shrink-0 opacity-20 hover:opacity-100 transition-all cursor-crosshair">
      <div className="w-10 h-10 rounded-lg border-2 border-black flex items-center justify-center text-black text-sm font-black uppercase bg-white">
        {name[0]}
      </div>
      <span className="text-[11px] font-black text-black uppercase tracking-[0.3em] whitespace-nowrap">{name}</span>
    </div>
  )
}

export function SocialProofSection() {
  const { lang } = useLanguage()
  const t = translations[lang].proof

  const marqueeItems = [...BRANDS, ...BRANDS, ...BRANDS]

  return (
    <section className="relative w-full bg-white border-y-2 border-black py-16 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] grain-bg" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex items-center gap-4 shrink-0">
             <div className="w-2 h-2 bg-beginner rounded-full" />
             <p className="text-black/40 text-[10px] font-black uppercase tracking-[0.4em] whitespace-nowrap">
               {t.label}
             </p>
          </div>
          
          <div className="flex-1 overflow-hidden relative">
            {/* Sharper Fade Edges */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />
            
            <div className="flex gap-24 animate-marquee w-max py-4">
              {marqueeItems.map((brand, i) => <LogoItem key={`${brand}-${i}`} name={brand} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
