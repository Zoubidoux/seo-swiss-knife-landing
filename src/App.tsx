import { LanguageProvider } from '@/contexts/LanguageContext'
import { SchemaMarkup }       from '@/components/SchemaMarkup'
import { FloatingHearts }     from '@/components/FloatingHearts'
import { Navbar }             from '@/components/Navbar'
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
import { Footer }             from '@/components/Footer'
import { BetaBanner }        from '@/components/BetaBanner'
import { ComparisonSlider }  from '@/components/ComparisonSlider'

function App() {
  return (
    <LanguageProvider>
      <SchemaMarkup />
      <FloatingHearts />
      {/* Beta announcement banner */}
      <BetaBanner />
      {/* Sticky navbar with anchor links */}
      <Navbar />

      {/* H1 lives in HeroSection */}
      <HeroSection />

      {/* Social proof — video loop + marquee */}
      <SocialProofSection />

      {/* Problem → Solution narrative */}
      <ProblemSection />
      <SolutionBanner />

      {/* Before / after comparison slider */}
      <ComparisonSlider />

      {/* Feature sections — id="features" anchor */}
      <FeaturesSection />
      <FeatureSpotlight />

      {/* Benefits — before/after time savings */}
      <BenefitsSection />

      {/* Live demo video — Dior simulation */}
      <VideoSection />

      {/* Interactive live demo */}
      <LiveDemoSection />

      {/* Context menu quick-access */}
      <ContextMenuSection />

      {/* id="all-features" — complete searchable feature list */}
      <section id="all-features">
        <AllFeaturesSection />
      </section>

      {/* id="how-it-works" anchor */}
      <HowItWorks />

      {/* id="faq" anchor */}
      <FAQSection />

      {/* id="install" CTA */}
      <CTASection />

      <Footer />
    </LanguageProvider>
  )
}

export default App
