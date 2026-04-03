import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { AuthProvider } from '@/contexts/AuthContext'
import { SchemaMarkup }       from '@/components/SchemaMarkup'
import { PixelHeartsBackground } from '@/components/PixelHeartsBackground'
import { Navbar }             from '@/components/Navbar'
import { Footer }             from '@/components/Footer'
import { Home }               from '@/pages/Home'
import { AiAgentPage }        from '@/pages/AiAgentPage'
import { PricingPage }        from '@/pages/PricingPage'
import { AccountPage }        from '@/pages/AccountPage'
import { PrivacyPolicy }      from '@/pages/PrivacyPolicy'
import { TermsOfUse }        from '@/pages/TermsOfUse'
import { CheckoutContinuePage } from '@/pages/CheckoutContinuePage'
import { CheckoutSuccessPage } from '@/pages/CheckoutSuccessPage'
import { CheckoutCancelPage }  from '@/pages/CheckoutCancelPage'
import { ScrollToTop }        from '@/components/ScrollToTop'
import { RoamingMascot }      from '@/components/RoamingMascot'

function AppShell() {
  const location = useLocation()
  const isAccount = location.pathname === '/account'

  return (
    <>
      <ScrollToTop />
      <SchemaMarkup />
      {!isAccount && <PixelHeartsBackground />}
      {!isAccount && <RoamingMascot />}
      {!isAccount && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ai-agent" element={<AiAgentPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfUse />} />
        <Route path="/checkout/continue" element={<CheckoutContinuePage />} />
        <Route path="/checkout/success" element={<CheckoutSuccessPage />} />
        <Route path="/checkout/cancel" element={<CheckoutCancelPage />} />
      </Routes>

      {!isAccount && <Footer />}
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <AuthProvider>
          <AppShell />
        </AuthProvider>
      </LanguageProvider>
    </BrowserRouter>
  )
}

export default App
