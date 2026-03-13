import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/i18n/index'

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-border last:border-none">
      <button
        className="w-full flex items-center justify-between gap-4 py-5 text-left bg-transparent border-none cursor-pointer group"
        onClick={() => setOpen((v) => !v)}
      >
        <h3 className="text-foreground font-medium text-base group-hover:text-primary transition-colors">{q}</h3>
        <span
          className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm transition-transform duration-200"
          style={{ background: 'rgba(167,139,250,0.1)', color: '#a78bfa', transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}
        >+</span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? '300px' : '0px', opacity: open ? 1 : 0 }}
      >
        <p className="text-muted-foreground text-sm leading-relaxed pb-5">{a}</p>
      </div>
    </div>
  )
}

export function FAQSection() {
  const { lang } = useLanguage()
  const t = translations[lang].faq

  return (
    <section id="faq" className="bg-background py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-center text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-5">{t.eyebrow}</p>
        <h2
          className="text-center text-4xl md:text-5xl font-semibold bg-clip-text text-transparent mb-16 tracking-tight"
          style={{ backgroundImage: 'linear-gradient(135deg, #e8e8e9 0%, #a78bfa 100%)' }}
        >
          {t.headline}
        </h2>
        <div className="liquid-glass rounded-2xl px-8 divide-y divide-border">
          {t.items.map((f) => <FAQItem key={f.q} q={f.q} a={f.a} />)}
        </div>
      </div>
    </section>
  )
}
