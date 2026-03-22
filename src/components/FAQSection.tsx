import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/i18n/index'

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-black/5 last:border-none">
      <button
        className="w-full flex items-center justify-between gap-4 py-6 text-left bg-transparent border-none cursor-pointer group"
        onClick={() => setOpen((v) => !v)}
      >
        <h3 className="text-black font-bold text-lg group-hover:text-primary transition-colors tracking-tight">{q}</h3>
        <span
          className="flex-shrink-0 w-8 h-8 rounded-full border border-black/5 flex items-center justify-center text-xl transition-all duration-300 group-hover:border-primary/20 group-hover:bg-primary/5"
          style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)', color: open ? 'var(--primary)' : 'rgba(0,0,0,0.3)' }}
        >+</span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? '300px' : '0px', opacity: open ? 1 : 0 }}
      >
        <p className="text-black/50 text-base leading-relaxed pb-6 font-medium">{a}</p>
      </div>
    </div>
  )
}

export function FAQSection() {
  const { lang } = useLanguage()
  const t = translations[lang].faq

  return (
    <section id="faq" className="bg-white py-32 px-6 grain-bg">
      <div className="max-w-4xl mx-auto">
        <p className="text-center text-[10px] font-black tracking-[0.3em] uppercase text-black/40 mb-8">
           Common Questions
        </p>
        <h2 className="text-center text-4xl md:text-7xl font-black text-black mb-20 tracking-tighter">
          {t.headline}
        </h2>
        <div className="editorial-card rounded-3xl px-10 divide-y divide-black/5">
          {t.items.map((f) => <FAQItem key={f.q} q={f.q} a={f.a} />)}
        </div>
      </div>
    </section>
  )
}
