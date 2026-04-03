import { Link } from 'react-router-dom'
import { CheckCircle2, ArrowRight, Zap } from 'lucide-react'
import { SEO } from '@/components/SEO'
import { Mascot } from '@/components/Mascot'
import { useEffect, useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'

export function CheckoutSuccessPage() {
  const { refreshProfile } = useAuth()
  const [isSyncing, setIsSyncing] = useState(true)

  // Poll for plan update or just wait a few seconds
  useEffect(() => {
    const timer = setTimeout(async () => {
      await refreshProfile()
      setIsSyncing(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center pt-32 pb-64 relative overflow-hidden">
      <SEO title="Payment Successful — Search Toolbox" description="Your purchase is complete! Welcome to the Pro community." />
      
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-50/30 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-xl mx-auto px-6 text-center relative z-10">
        <div className="mb-12 relative flex justify-center">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white border-2 border-black rounded-full grid-bg opacity-10" />
           <div className="hover:scale-110 transition-transform cursor-pointer relative z-20">
              <Mascot type="expert" size={160} />
           </div>
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-green-100 bg-green-50 text-green-600 mb-8 animate-in zoom-in-50 duration-500">
           <CheckCircle2 className="w-5 h-5" />
           <span className="text-[10px] font-black uppercase tracking-[0.2em]">Payment Confirmed</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-black text-gray-950 tracking-tighter leading-[0.9] mb-8 text-balance">
          Welcome to the <br />
          <span className="text-indigo-600 italic">Expert community.</span>
        </h1>

        <p className="text-lg text-gray-400 font-medium leading-relaxed mb-12">
           Your account is being upgraded. This usually takes a few seconds to sync between the website and the Chrome extension.
        </p>

        <div className="flex flex-col gap-4">
          <Link 
            to="/account" 
            className="w-full h-16 rounded-2xl flex items-center justify-center gap-3 font-black text-xs uppercase tracking-[0.2em] transition-all bg-black text-white hover:bg-indigo-600 shadow-xl shadow-indigo-100 no-underline"
          >
            {isSyncing ? (
              <>
                <Zap className="w-5 h-5 animate-pulse text-amber-400" />
                Syncing Account...
              </>
            ) : (
              <>
                Open My Dashboard
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </Link>
          <a
            href="https://chromewebstore.google.com/detail/search-toolbox"
            target="_blank" rel="noopener noreferrer"
            className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-indigo-600 px-8 py-4 rounded-xl border border-gray-100 transition-colors"
          >
            Don't forget to Pin the Extension
          </a>
        </div>
      </div>
    </div>
  )
}
