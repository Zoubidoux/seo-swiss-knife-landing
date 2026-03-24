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
import { ScrollToTop }        from '@/components/ScrollToTop'

function AppShell() {
  const location = useLocation()
  const isAccount = location.pathname === '/account'

  return (
    <>
      <ScrollToTop />
      <SchemaMarkup />
      {!isAccount && <PixelHeartsBackground />}
      {!isAccount && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ai-agent" element={<AiAgentPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/account" element={<AccountPage />} />
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
