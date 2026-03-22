import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/i18n/index'
import { Mascot } from '@/components/Mascot'

export function Footer() {
  const { lang } = useLanguage()
  const t = translations[lang].footer

  return (
    <footer className="border-t-2 border-black py-16 px-6 bg-white grid-bg">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] grain-bg" />
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 text-sm text-black/40 font-medium relative z-10">
        <div className="flex items-center gap-4">
          <Mascot type="beginner" size={24} className="opacity-40 group-hover:opacity-100 transition-opacity" />
          <span className="font-black text-lg tracking-[-0.05em] uppercase text-black inline-flex items-center relative">
            SEARCHT
            <span className="relative flex items-center">
              O<span className="-ml-[0.15em]">O</span>
              <div className="absolute inset-0 flex items-center justify-center gap-[0.1em] pointer-events-none opacity-40">
                 <div className="w-[0.15em] h-[0.15em] bg-black rounded-full" />
                 <div className="w-[0.15em] h-[0.15em] bg-black rounded-full" />
              </div>
            </span>
            LBOX
          </span>
        </div>
        
        <div className="flex gap-10">
          <a href="#" className="hover:text-black transition-colors uppercase tracking-[0.3em] text-[10px] font-black">{t.privacy}</a>
          <a href="#" className="hover:text-black transition-colors uppercase tracking-[0.3em] text-[10px] font-black">{t.store}</a>
        </div>

        <div className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">
           {t.rights.replace('{year}', new Date().getFullYear().toString())}
        </div>
      </div>
    </footer>
  )
}
