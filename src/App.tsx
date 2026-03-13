import { LanguageProvider } from '@/contexts/LanguageContext'
import { SchemaMarkup }       from '@/components/SchemaMarkup'
import { Navbar }             from '@/components/Navbar'
import { HeroSection }        from '@/components/HeroSection'
import { SocialProofSection } from '@/components/SocialProofSection'
import { ProblemSection }     from '@/components/ProblemSection'
import { SolutionBanner }     from '@/components/SolutionBanner'
import { FeaturesSection }    from '@/components/FeaturesSection'
import { FeatureSpotlight }   from '@/components/FeatureSpotlight'
import { VideoSection }       from '@/components/VideoSection'
import { ContextMenuSection } from '@/components/ContextMenuSection'
import { AllFeaturesSection } from '@/components/AllFeaturesSection'
import { HowItWorks }         from '@/components/HowItWorks'
import { FAQSection }         from '@/components/FAQSection'
import { CTASection }         from '@/components/CTASection'
import { Footer }             from '@/components/Footer'

function App() {
  return (
    <LanguageProvider>
      <SchemaMarkup />
      {/* Sticky navbar with anchor links */}
      <Navbar />

      {/* H1 lives in HeroSection */}
      <HeroSection />

      {/* Social proof — video loop + marquee */}
      <SocialProofSection />

      {/* Problem → Solution narrative */}
      <ProblemSection />
      <SolutionBanner />

      {/* Feature sections — id="features" anchor */}
      <FeaturesSection />
      <FeatureSpotlight />

      {/* Live demo video */}
      <VideoSection />

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
