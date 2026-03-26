import { Mascot } from '@/components/Mascot'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/i18n/index'

export function TermsOfUse() {
  const { lang } = useLanguage()
  const t = translations[lang].legal.terms

  return (
    <div className="min-h-screen bg-white grid-bg py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] grain-bg" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-black/40 hover:text-black transition-colors mb-12 group"
        >
          <ArrowLeft className="w-3 h-3 transition-transform group-hover:-translate-x-1" />
          {lang === 'fr' ? 'Retour à l\'accueil' : 'Back to Home'}
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
              {t.title}
            </h1>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-black/30 mb-12">
              {t.lastUpdated}
            </p>

            <div className="prose prose-sm max-w-none prose-headings:font-black prose-headings:tracking-tighter prose-headings:text-black prose-p:text-black/70 prose-p:leading-relaxed prose-li:text-black/70">
              <p className="text-lg font-medium text-black/80 mb-12">
                {t.introduction}
              </p>

              {/* In a Nutshell Block */}
              <div className="grid md:grid-cols-2 gap-4 mb-16">
                <div className="bg-intermediate/5 border border-intermediate/20 rounded-2xl p-6">
                  <h3 className="text-intermediate font-black uppercase tracking-widest text-[10px] mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-intermediate rounded-full" />
                    {lang === 'fr' ? 'Points clés' : 'Key points'}
                  </h3>
                  <ul className="space-y-3">
                    {[
                      lang === 'fr' 
                        ? 'Compte personnel et sécurisé' 
                        : 'Personal and secure account',
                      lang === 'fr'
                        ? 'Usage pro uniquement (pas de robot)'
                        : 'Professional use only (no bots)',
                      lang === 'fr'
                        ? 'Annulation Stripe en 1 clic'
                        : '1-click Stripe cancellation'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-[11px] font-bold text-black/60 leading-tight">
                        <span className="text-intermediate mt-0.5">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-black/[0.02] border border-black/5 rounded-2xl p-6">
                  <h3 className="text-black/40 font-black uppercase tracking-widest text-[10px] mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-black/20 rounded-full" />
                    {lang === 'fr' ? 'Ce qui est interdit' : 'What is prohibited'}
                  </h3>
                  <ul className="space-y-3">
                    {[
                      lang === 'fr'
                        ? 'Partager son compte avec des tiers'
                        : 'Sharing account with others',
                      lang === 'fr'
                        ? 'Automatiser l\'utilisation de l\'IA'
                        : 'Automating AI usage',
                      lang === 'fr'
                        ? 'Copier notre mascot Pixly'
                        : 'Copying our mascot Pixly'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-[11px] font-bold text-black/40 leading-tight line-through decoration-black/10">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-12">
                {t.sections.map((section, idx) => (
                  <div key={idx} className="relative group/section">
                    <div className="absolute -left-8 top-1 w-1 h-0 bg-black group-hover/section:h-6 transition-all duration-300" />
                    <h2 className="text-xl font-black mb-4 tracking-tight text-black flex items-center gap-3">
                      {section.title}
                    </h2>
                    <p className="text-black/70 leading-relaxed font-medium text-sm">
                      {section.content}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-24 pt-12 border-t border-black/5 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <p className="text-[11px] font-bold text-black/40 italic">
                  Questions? devtool.genius@gmail.com
                </p>
                <div className="flex items-center gap-4">
                  <span className="text-[9px] font-black uppercase tracking-widest text-black/20">Version 1.2.0</span>
                  <div className="w-8 h-px bg-black/5" />
                  <span className="text-[9px] font-black uppercase tracking-widest text-black/20 italic">Signed by Team SearchToolbox</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
