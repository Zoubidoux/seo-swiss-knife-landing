import { Link, useSearchParams } from 'react-router-dom'
import { SEO } from '@/components/SEO'
import { AlertCircle, ArrowRight, TrendingUp } from 'lucide-react'
import { Mascot } from '@/components/Mascot'

export function CheckoutCancelPage() {
  const [searchParams] = useSearchParams()
  const plan = searchParams.get('plan') || 'Pro'

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center pt-32 pb-64 relative overflow-hidden">
      <SEO title="Payment Cancelled — Search Toolbox" description="Your purchase was cancelled. No charges were made." />
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-50/20 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-xl mx-auto px-6 text-center relative z-10">
        <div className="mb-12 relative flex justify-center grayscale opacity-60">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white border-2 border-black rounded-full grid-bg opacity-10" />
           <div className="relative z-20">
              <Mascot type="beginner" size={120} />
           </div>
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-red-100 bg-red-50 text-red-600 mb-8">
           <AlertCircle className="w-5 h-5" />
           <span className="text-[10px] font-black uppercase tracking-[0.2em]">Payment Cancelled</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-black text-gray-950 tracking-tighter leading-[0.9] mb-8 text-balance">
          No worries, <br />
          <span className="text-red-500 italic">No charges.</span>
        </h1>

        <p className="text-lg text-gray-400 font-medium leading-relaxed mb-12">
           Your purchase of the <strong className="text-gray-950 font-black">{plan}</strong> plan was cancelled. You can pick it up again whenever you're ready.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <Link 
            to="/pricing" 
            className="w-full sm:w-auto h-16 px-10 rounded-2xl flex items-center justify-center gap-3 font-black text-xs uppercase tracking-[0.2em] transition-all bg-black text-white hover:bg-indigo-600 shadow-xl shadow-indigo-100 no-underline"
          >
            Review Plans
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link 
            to="/" 
            className="w-full sm:w-auto h-16 px-10 rounded-2xl flex items-center justify-center gap-3 font-black text-[10px] uppercase tracking-[0.2em] transition-all bg-white border-2 border-black text-black hover:bg-gray-50 no-underline"
          >
            Back to Home
          </Link>
        </div>

        {/* Reassurance */}
        <div className="mt-20 pt-12 border-t border-gray-100">
           <div className="flex items-center justify-center gap-4 text-xs font-black uppercase tracking-widest text-gray-400">
              <TrendingUp className="w-4 h-4" />
              <span>Expert SEO at your fingertips</span>
           </div>
        </div>
      </div>
    </div>
  )
}
