import { useLanguage } from '@/contexts/LanguageContext'

export function BetaBanner() {
  const { lang } = useLanguage()

  return (
    <div
      className="w-full flex items-center justify-center gap-3 py-2 px-4 text-xs font-medium"
      style={{
        background: 'linear-gradient(90deg, rgba(124,58,237,0.25) 0%, rgba(57,211,255,0.15) 50%, rgba(124,58,237,0.25) 100%)',
        borderBottom: '1px solid rgba(167,139,250,0.2)',
        backdropFilter: 'blur(8px)',
      }}
    >
      <span
        className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest"
        style={{ background: 'rgba(167,139,250,0.25)', color: '#a78bfa', border: '1px solid rgba(167,139,250,0.4)' }}
      >
        BETA
      </span>
      <span style={{ color: 'rgba(255,255,255,0.75)' }}>
        {lang === 'fr'
          ? 'Version bêta publique — Des fonctionnalités IA puissantes arrivent très bientôt ✨'
          : 'Public beta — Powerful AI features are coming very soon ✨'}
      </span>
      <span
        className="hidden sm:flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px]"
        style={{ background: 'rgba(57,211,255,0.1)', color: '#39d3ff', border: '1px solid rgba(57,211,255,0.2)' }}
      >
        🤖 {lang === 'fr' ? 'IA à venir' : 'AI coming'}
      </span>
    </div>
  )
}
