import { useLanguage } from '@/contexts/LanguageContext'
import { PricingSection } from '@/components/PricingSection'
import { SEO } from '@/components/SEO'
import { translations } from '@/i18n/index'

export function PricingPage() {
  const { lang } = useLanguage()
  const t = translations[lang].pricing

  return (
    <div className="min-h-screen bg-background pt-20">
      <SEO 
        title={t.meta.title}
        description={t.meta.description}
      />
      
      <PricingSection />

      {/* Trust section */}
      <div className="max-w-3xl mx-auto pb-24 px-6 text-center">
        <h4 className="font-bold mb-4 opacity-40 uppercase tracking-widest text-[10px]"> 
          {lang === 'fr' ? 'Utilisé par +5 000 Pros du SEO' : 'Trusted by 5,000+ SEO Professionals'}
        </h4>
        <div className="flex flex-wrap justify-center gap-8 opacity-20 grayscale filter brightness-200">
           <div className="font-black italic">AGENCY.IO</div>
           <div className="font-black italic">RANK.UP</div>
           <div className="font-black italic">SERP.MASTER</div>
        </div>
      </div>
    </div>
  )
}
