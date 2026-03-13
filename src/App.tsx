import { HeroSection }      from '@/components/HeroSection'
import { SocialProofSection } from '@/components/SocialProofSection'
import { ProblemSection }    from '@/components/ProblemSection'
import { SolutionBanner }    from '@/components/SolutionBanner'
import { FeaturesSection }   from '@/components/FeaturesSection'
import { FeatureSpotlight }  from '@/components/FeatureSpotlight'
import { HowItWorks }        from '@/components/HowItWorks'
import { FAQSection }        from '@/components/FAQSection'
import { CTASection }        from '@/components/CTASection'
import { Footer }            from '@/components/Footer'

function App() {
  return (
    <>
      <HeroSection />
      <SocialProofSection />
      <ProblemSection />
      <SolutionBanner />
      <FeaturesSection />
      <FeatureSpotlight />
      <HowItWorks />
      <FAQSection />
      <CTASection />
      <Footer />
    </>
  )
}

export default App
