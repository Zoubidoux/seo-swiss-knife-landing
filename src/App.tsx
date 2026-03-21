import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { SchemaMarkup }       from '@/components/SchemaMarkup'
import { PixelHeartsBackground } from '@/components/PixelHeartsBackground'
import { Navbar }             from '@/components/Navbar'
import { Footer }             from '@/components/Footer'
import { Home }               from '@/pages/Home'
import { AiAgentPage }        from '@/pages/AiAgentPage'
import { PricingPage }        from '@/pages/PricingPage'
import { ScrollToTop }        from '@/components/ScrollToTop'

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <ScrollToTop />
        <SchemaMarkup />
        <PixelHeartsBackground />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ai-agent" element={<AiAgentPage />} />
          <Route path="/pricing" element={<PricingPage />} />
        </Routes>

        <Footer />
      </LanguageProvider>
    </BrowserRouter>
  )
}

export default App
