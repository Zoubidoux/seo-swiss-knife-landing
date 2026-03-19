import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { SchemaMarkup }       from '@/components/SchemaMarkup'
import { FloatingHearts }     from '@/components/FloatingHearts'
import { Navbar }             from '@/components/Navbar'
import { Footer }             from '@/components/Footer'
import { BetaBanner }        from '@/components/BetaBanner'
import { Home }              from '@/pages/Home'
import { AiAgentPage }       from '@/pages/AiAgentPage'
import { ScrollToTop }       from '@/components/ScrollToTop'

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <ScrollToTop />
        <SchemaMarkup />
        <FloatingHearts />
        <BetaBanner />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ai-agent" element={<AiAgentPage />} />
        </Routes>

        <Footer />
      </LanguageProvider>
    </BrowserRouter>
  )
}

export default App
