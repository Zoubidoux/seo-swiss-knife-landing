import { useLanguage } from '@/contexts/LanguageContext'
import { PricingSection } from '@/components/PricingSection'
import { SEO } from '@/components/SEO'
import { translations } from '@/i18n/index'

export function PricingPage() {
  const { lang } = useLanguage()
  const t = translations[lang].pricing

  return (
    <div className="min-h-screen bg-white pt-20 grain-bg">
      <SEO 
        title={t.meta.title}
        description={t.meta.description}
      />
      
      <PricingSection />

      {/* Trust section */}
      <div className="max-w-3xl mx-auto pb-32 px-6 text-center">
        <h4 className="font-black mb-12 opacity-20 uppercase tracking-[0.3em] text-[10px] text-black"> 
          {t.trustHeadline}
        </h4>
        <div className="flex flex-wrap justify-center gap-12 opacity-30 grayscale contrast-125">
           <div className="font-black italic text-xl tracking-tighter text-black">AGENCY.IO</div>
           <div className="font-black italic text-xl tracking-tighter text-black">RANK.UP</div>
           <div className="font-black italic text-xl tracking-tighter text-black">SERP.MASTER</div>
        </div>
      </div>
    </div>
  )
}
