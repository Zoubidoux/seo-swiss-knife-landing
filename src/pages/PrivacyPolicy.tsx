import { Mascot } from '@/components/Mascot'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/i18n/index'

export function PrivacyPolicy() {
  const { lang } = useLanguage()
  const t = translations[lang].legal.privacy

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
            <Mascot type="beginner" size={120} />
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-lg border border-black/10 bg-gray-50 text-[9px] font-black uppercase tracking-[0.3em] text-black/40 mb-8">
              <span className="w-1.5 h-1.5 bg-beginner rounded-full" />
              Legal & Compliance
            </div>

            <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter text-black leading-[0.9]">
              {t.title}
            </h1>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-black/30 mb-12">
              {t.lastUpdated}
            </p>

            <div className="prose prose-sm max-w-none prose-headings:font-black prose-headings:tracking-tighter prose-headings:text-black prose-p:text-black/70 prose-p:leading-relaxed prose-li:text-black/70">
              <p>{t.introduction}</p>

              {t.sections.map((section, idx) => (
                <div key={idx} className="mb-8">
                  <h2 className="text-xl font-black mb-4 tracking-tight text-black flex items-center gap-3">
                    {section.title}
                  </h2>
                  <p className="text-black/70 leading-relaxed font-medium">
                    {section.content}
                  </p>
                </div>
              ))}
              
              <div className="mt-12 pt-12 border-t border-black/5">
                <p className="text-[11px] font-bold text-black/40 italic">
                  Questions? devtool.genius@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
