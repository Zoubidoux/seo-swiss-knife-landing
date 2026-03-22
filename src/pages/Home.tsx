import { HeroSection }        from '@/components/HeroSection'
import { SocialProofSection } from '@/components/SocialProofSection'
import { ProblemSection }     from '@/components/ProblemSection'
import { SolutionBanner }     from '@/components/SolutionBanner'
import { FeaturesSection }    from '@/components/FeaturesSection'
import { FeatureSpotlight }   from '@/components/FeatureSpotlight'
import { BenefitsSection }    from '@/components/BenefitsSection'
import { VideoSection }       from '@/components/VideoSection'
import { LiveDemoSection }    from '@/components/LiveDemoSection'
import { ContextMenuSection } from '@/components/ContextMenuSection'
import { AllFeaturesSection } from '@/components/AllFeaturesSection'
import { HowItWorks }         from '@/components/HowItWorks'
import { FAQSection }         from '@/components/FAQSection'
import { CTASection }         from '@/components/CTASection'
import { AiAgentHomeSection } from '@/components/AiAgentHomeSection'
import { ComparisonSlider }  from '@/components/ComparisonSlider'
import { PricingSection }     from '@/components/PricingSection'
import { useLanguage }     from '@/contexts/LanguageContext'
import { translations }    from '@/i18n/index'
import { SEO }             from '@/components/SEO'

export function Home() {
  const { lang } = useLanguage()
  const t = translations[lang].home

  return (
    <>
      <SEO 
        title={t.meta.title}
        description={t.meta.description}
      />
      <HeroSection />
      <SocialProofSection />
      <ProblemSection />
      <SolutionBanner />
      <ComparisonSlider />
      
      {/* New AI Agent Section */}
      <AiAgentHomeSection />

      <FeaturesSection />
      <FeatureSpotlight />
      <BenefitsSection />
      <VideoSection />
      <LiveDemoSection />
      <ContextMenuSection />
      <section id="all-features">
        <AllFeaturesSection />
      </section>
      <HowItWorks />
      <PricingSection />
      <FAQSection />
      <CTASection />
    </>
  )
}
