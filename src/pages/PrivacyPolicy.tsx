import { Mascot } from '@/components/Mascot'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export function PrivacyPolicy() {
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
            <Mascot type="beginner" size={120} />
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-lg border border-black/10 bg-gray-50 text-[9px] font-black uppercase tracking-[0.3em] text-black/40 mb-8">
              <span className="w-1.5 h-1.5 bg-beginner rounded-full" />
              Legal & Compliance
            </div>

            <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter text-black leading-[0.9]">
              Privacy Policy
            </h1>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-black/30 mb-12">
              Last updated: March 26, 2026
            </p>

            <div className="prose prose-sm max-w-none prose-headings:font-black prose-headings:tracking-tighter prose-headings:text-black prose-p:text-black/70 prose-p:leading-relaxed prose-li:text-black/70">
              <p>Welcome to <strong>SEO & GEO Toolkit</strong> (the "Product", "we", "us", or "our"). We are committed to protecting your privacy and providing a clear, transparent overview of how we handle your information. This Privacy Policy explains our data practices when you use our website (https://www.seogeotoolkit.com/), our Chrome extension, and our associated services.</p>

              <h2>1. Information We Collect</h2>
              <p>We only collect information that is necessary to provide you with the services of SEO & GEO Toolkit, including account management, subscription handling, and technical support.</p>

              <h3>1.1 Data Collected Directly from You</h3>
              <ul>
                <li><strong>Account Data</strong>: When you sign up, we collect your email address and authentication credentials (typically via third-party providers like Google).</li>
                <li><strong>Profile Data</strong>: Information you provide in your account profile.</li>
                <li><strong>Support Communications</strong>: If you contact us for support, we may collect the content of your message and any attachments.</li>
              </ul>

              <h3>1.2 Data Collected Automatically</h3>
              <ul>
                <li><strong>Technical Logs</strong>: We collect standard server logs, including IP addresses, browser types, and operating system information, for security, debugging, and abuse prevention.</li>
                <li><strong>Usage Metrics</strong>: We track basic interactions with our website and extension (e.g., feature usage, button clicks) to improve the product.</li>
              </ul>

              <h3>1.3 Chrome Extension Data</h3>
              <ul>
                <li><strong>Service Performance</strong>: The extension processes data related to the pages you analyze (SEO/GEO metadata) only when triggered by your action.</li>
                <li><strong>Limited Access</strong>: The extension requires certain browser permissions to function. We only access the data necessary to perform the specific analysis you request.</li>
              </ul>

              <h3>1.4 Billing and Payment Data</h3>
              <p>Payments are handled securely via <strong>Stripe</strong>. We do not store your full credit card details. We receive confirmation of payment and limited billing metadata to manage your subscription status.</p>

              <h2>2. Chrome Extension and Google Account Access</h2>
              <p>This section is included to meet Google API and Chrome Web Store transparency requirements.</p>
              <ul>
                <li><strong>Limited Use</strong>: Our use of information received from Google APIs will adhere to the Google API Services User Data Policy, including the Limited Use requirements.</li>
                <li><strong>Functionality Only</strong>: We only request access to the minimum necessary Google account information (typically your email and identity) required to provide account linking and authentication.</li>
                <li><strong>No Third-Party Advertising</strong>: We do not use data accessed via Google OAuth or Chrome Extension permissions for unrelated third-party advertising or profiling.</li>
                <li><strong>User Control</strong>: You can revoke access at any time via your Google Account security settings or by uninstalling the extension.</li>
              </ul>

              <h2>3. How We Use Your Data</h2>
              <p>We process your information for the following purposes:</p>
              <ul>
                <li>To provide and maintain the Product.</li>
                <li>To manage your account and subscriptions.</li>
                <li>To provide customer support.</li>
                <li>To detect, prevent, and address technical issues or abuse.</li>
                <li>To comply with legal obligations.</li>
              </ul>

              <h2>4. Legal Bases (EEA/UK Users)</h2>
              <p>If you are located in the European Economic Area (EEA) or UK, we process your data under the following legal bases:</p>
              <ul>
                <li><strong>Performance of a Contract</strong>: To provide the services you have signed up for.</li>
                <li><strong>Legitimate Interests</strong>: For security, product improvement, and troubleshooting.</li>
                <li><strong>Legal Obligation</strong>: Where required by law.</li>
              </ul>

              <h2>5. Sharing and Retention</h2>
              <ul>
                <li><strong>Service Providers</strong>: We share data with trusted processors (e.g., Supabase for hosting/DB, Stripe for payments, Vercel for hosting) solely to operate the service.</li>
                <li><strong>No Selling</strong>: We DO NOT sell your personal data to third parties.</li>
                <li><strong>Retention</strong>: We retain your data for as long as your account is active or as needed to provide you services and comply with legal requirements.</li>
              </ul>

              <h2>6. Your Rights</h2>
              <p>Depending on your location, you may have rights to access, correct, delete, or limit the use of your personal data. Users in the EEA and UK specifically have rights under the GDPR. Please contact us at <strong>[CONTACT EMAIL]</strong> to exercise these rights.</p>

              <h2>7. Changes to this Policy</h2>
              <p>We may update this policy periodically. We will notify you of any significant changes by posting the new policy on this page with a new "Last updated" date.</p>

              <h2>8. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at:</p>
              <ul>
                <li><strong>Email</strong>: [CONTACT EMAIL]</li>
                <li><strong>Address</strong>: [POSTAL ADDRESS PLACEHOLDER]</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
