import { Mascot } from '@/components/Mascot'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export function TermsOfUse() {
  return (
    <div className="min-h-screen bg-white grid-bg py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] grain-bg" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-black/40 hover:text-black transition-colors mb-12 group"
        >
          <ArrowLeft className="w-3 h-3 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>

        <div className="bg-white border-2 border-black rounded-[32px] p-8 md:p-16 shadow-[20px_20px_0_0_rgba(0,0,0,0.05)] relative overflow-hidden group mb-12">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
            <Mascot type="intermediate" size={120} />
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-lg border border-black/10 bg-gray-50 text-[9px] font-black uppercase tracking-[0.3em] text-black/40 mb-8">
              <span className="w-1.5 h-1.5 bg-intermediate rounded-full" />
              Legal & Compliance
            </div>

            <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter text-black leading-[0.9]">
              Terms of Use
            </h1>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-black/30 mb-12">
              Last updated: March 26, 2026
            </p>

            <div className="prose prose-sm max-w-none prose-headings:font-black prose-headings:tracking-tighter prose-headings:text-black prose-p:text-black/70 prose-p:leading-relaxed prose-li:text-black/70">
              <p>These Terms of Use ("Terms") govern your use of the <strong>SEO & GEO Toolkit</strong> website, Chrome extension, and related services (collectively, the "Service"). By accessing or using the Service, you agree to be bound by these Terms.</p>

              <h2>1. Description of Service</h2>
              <p>SEO & GEO Toolkit provides professional SEO and geographic analysis tools via a web dashboard and a browser extension. The Service includes both free and paid subscription plans.</p>

              <h2>2. Eligibility and Accounts</h2>
              <ul>
                <li><strong>Age</strong>: You must be at least 18 years old to use this Service.</li>
                <li><strong>Account Security</strong>: You are responsible for maintaining the confidentiality of your account credentials. You must provide accurate and complete information when creating an account.</li>
                <li><strong>Identity Linking</strong>: Your account, subscription benefits, and extension usage are tied to a single identity. Sharing accounts is prohibited.</li>
              </ul>

              <h2>3. Permitted and Prohibited Use</h2>
              <p>You agree to use the Service only for lawful purposes. You shall not:</p>
              <ul>
                <li>Reverse engineer, decompile, or attempt to extract the source code of the Service.</li>
                <li>Use the Service for scraping, automated data collection, or any activity that places an unreasonable load on our infrastructure.</li>
                <li>Attempt to circumvent any plan-based restrictions or usage limits.</li>
                <li>Use the Service to promote illegal activities or distribute harmful content.</li>
              </ul>

              <h2>4. Subscriptions and Billing</h2>
              <ul>
                <li><strong>Plans</strong>: Feature access is determined by your chosen plan (Free, Pro, Unlimited).</li>
                <li><strong>Billing</strong>: Payments are processed by <strong>Stripe</strong>. By subscribing, you authorize us to charge the applicable fees to your provided payment method.</li>
                <li><strong>Cancellations</strong>: You can cancel your subscription at any time via your account settings. Uninstalling the extension does not automatically cancel a paid subscription.</li>
                <li><strong>Refunds</strong>: Refund requests are handled on a case-by-case basis according to our current refund policy.</li>
              </ul>

              <h2>5. Intellectual Property</h2>
              <p>The Service, including its design, code, mascots, and original content, is protected by copyright and other intellectual property laws. You are granted a limited, non-exclusive license to use the Service for its intended purpose.</p>

              <h2>6. Termination</h2>
              <p>We reserve the right to suspend or terminate your account and access to the Service at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users or our business interests.</p>

              <h2>7. Disclaimers and Limitation of Liability</h2>
              <ul>
                <li><strong>"As Is"</strong>: The Service is provided on an "as is" and "as available" basis without warranties of any kind.</li>
                <li><strong>Limitation of Liability</strong>: To the maximum extent permitted by law, SEO & GEO Toolkit shall not be liable for any indirect, incidental, or consequential damages arising from your use of the Service.</li>
              </ul>

              <h2>8. Governing Law</h2>
              <p>These Terms shall be governed by and construed in accordance with the laws of <strong>[JURISDICTION]</strong>, without regard to its conflict of law provisions.</p>

              <h2>9. Changes to Terms</h2>
              <p>We may modify these Terms at any time. Your continued use of the Service after changes are posted constitutes your acceptance of the new Terms.</p>

              <h2>10. Contact Us</h2>
              <p>For any questions regarding these Terms, please contact:</p>
              <ul>
                <li><strong>Email</strong>: [CONTACT EMAIL]</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
