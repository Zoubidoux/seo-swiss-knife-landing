import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/i18n/index'
import { Button } from '@/components/ui/button'
import { Mascot } from '@/components/Mascot'
import { SEO } from '@/components/SEO'
import { useState, useRef, useEffect } from 'react'
import { useAiAgent } from '@/hooks/useAiAgent'
import { Send, User, Bot, Trash2, Check, ArrowRight, Shield, Zap, ChevronDown } from 'lucide-react'

export function AiAgentPage() {
  const { lang } = useLanguage()
  const t = translations[lang].aiAgent.page

  return (
    <div className="min-h-screen bg-white text-black font-sans scroll-smooth">
      <SEO 
        title={t.meta.title}
        description={t.meta.description}
        faq={t.faq}
      />

      {/* Premium Hero */}
      <section className="relative pt-48 pb-32 px-6 overflow-hidden grid-bg border-b-2 border-black">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] grain-bg" />
        
        {/* Technical Markers */}
        <div className="absolute top-32 left-12 technical-marker after:content-['[0x_SYST]']" />
        <div className="absolute top-32 right-12 technical-marker after:content-['[0x_STBL]']" />

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-xl text-[10px] font-black tracking-[0.4em] uppercase mb-12 border-2 border-black bg-white shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
             <div className="w-2 h-2 bg-expert rounded-full animate-pulse" />
             AI SEO TECHNOLOGY V1
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black mb-12 tracking-tighter leading-[0.9] text-black text-balance">
            {t.hero.headline}
          </h1>
          
          <p className="text-xl md:text-2xl text-black/40 mb-16 max-w-3xl mx-auto leading-relaxed font-medium text-balance">
            {t.hero.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-12">
            <Button size="lg" className="h-20 px-16 rounded-xl bg-black text-white font-black text-xs uppercase tracking-[0.3em] hover-offset-expert transition-all border-none">
              {t.hero.cta}
            </Button>
            <div className="flex items-center gap-8 text-[10px] font-black uppercase tracking-[0.4em] text-black/20">
               <div className="flex items-center gap-2">
                 <Shield size={16} /> 100% PRIVATE
               </div>
               <div className="flex items-center gap-2">
                 <Zap size={16} /> NO LATENCY
               </div>
            </div>
          </div>
        </div>

        {/* Mascot Guides */}
        <div className="absolute -bottom-10 left-10 opacity-20 hidden lg:block">
           <Mascot type="beginner" size={240} className="rotate-[-12deg]" />
        </div>
        <div className="absolute -bottom-20 right-10 opacity-20 hidden lg:block">
           <Mascot type="expert" size={320} className="rotate-[12deg]" />
        </div>
      </section>

      {/* The Demo Interface */}
      <section className="py-24 px-6 relative z-10 bg-bone border-b-2 border-black overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.02] grid-bg" />
        <div className="max-w-5xl mx-auto relative z-10">
           <div className="p-1 rounded-[32px] bg-white border-2 border-black shadow-[32px_32px_0_0_rgba(0,0,0,0.05)] overflow-hidden">
             <ChatInterface />
           </div>
        </div>
      </section>

      {/* Why SEARCHTOOLBOX Section */}
      <section className="py-40 px-6 bg-white overflow-hidden relative border-b-2 border-black">
        <div className="max-w-6xl mx-auto">
           <div className="grid lg:grid-cols-2 gap-32 items-center">
              <div>
                <p className="text-[10px] font-black tracking-[0.4em] uppercase mb-8 text-black/20">THE PHILOSOPHY</p>
                <h2 className="text-4xl md:text-7xl font-black mb-12 tracking-tighter leading-[0.95] text-balance">
                  {t.problem.title}
                </h2>
                <p className="text-xl text-black/40 font-medium leading-relaxed mb-16 text-balance">
                   {t.problem.body}
                </p>
                <div className="space-y-10">
                   {t.differentiation.items.map((item, i) => (
                     <div key={i} className="flex gap-8 group">
                        <div className={`w-16 h-16 rounded-2xl border-2 border-black flex items-center justify-center shrink-0 transition-all shadow-[6px_6px_0_0_rgba(0,0,0,0.05)] group-hover:translate-y-[-2px] group-hover:shadow-[8px_8px_0_0_rgba(0,0,0,0.1)] ${
                          i === 0 ? 'bg-beginner text-white' : i === 1 ? 'bg-intermediate text-white' : 'bg-expert text-white'
                        }`}>
                           {i === 0 ? <Bot size={28} /> : i === 1 ? <Zap size={28} /> : <Shield size={28} />}
                        </div>
                        <div>
                          <h4 className="font-black text-xs uppercase tracking-widest mb-2">{item.title}</h4>
                          <p className="text-black/40 text-sm font-medium leading-relaxed">{item.desc}</p>
                        </div>
                     </div>
                   ))}
                </div>
              </div>
              
              <div className="relative">
                 <div className="aspect-square rounded-[48px] bg-bone border-2 border-black overflow-hidden relative group shadow-[40px_40px_0_0_rgba(0,0,0,0.02)]">
                    <div className="absolute inset-0 opacity-[0.03] grid-bg" />
                    <div className="p-16 h-full flex flex-col justify-center gap-16 relative z-10">
                       <div className="space-y-6">
                          <div className="h-4 w-1/3 bg-black/10 rounded-full" />
                          <div className="h-4 w-full bg-black/5 rounded-full" />
                          <div className="h-4 w-2/3 bg-black/5 rounded-full" />
                       </div>
                       <div className="p-10 rounded-3xl bg-white border-2 border-black shadow-[16px_16px_0_0_rgba(59,130,246,0.1)] animate-in fade-in slide-in-from-bottom-5">
                          <div className="flex items-center justify-between mb-8">
                             <div className="flex items-center gap-4">
                                <Mascot type="expert" size={32} />
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-black">Analysis Result</span>
                             </div>
                             <div className="w-2 h-2 bg-expert rounded-full animate-ping" />
                          </div>
                          <div className="text-base text-black font-bold italic leading-relaxed tracking-tight">
                             "Found missing canonical tag on 3 alternate pages. Updating schema context for expert SEO level..."
                          </div>
                       </div>
                       <div className="space-y-6">
                          <div className="h-4 w-1/2 bg-black/10 rounded-full" />
                          <div className="h-4 w-full bg-black/5 rounded-full" />
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Expertise Modes */}
      <section className="py-40 px-6 bg-bone border-b-2 border-black overflow-hidden relative font-sans">
        <div className="absolute bottom-0 right-0 w-full h-full opacity-[0.02] grid-bg" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-28">
            <p className="text-[10px] font-black tracking-[0.4em] uppercase mb-8 text-black/20">FLEXIBILITY</p>
            <h2 className="text-5xl md:text-8xl font-black mb-12 tracking-tighter leading-[0.9]">{t.modes.title}</h2>
            <p className="text-2xl text-black/40 font-medium text-balance max-w-3xl mx-auto">{lang === 'fr' ? 'L\'IA s\'adapte à votre expertise, pas l\'inverse.' : 'The AI adapts to your expertise, not the other way around.'}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {t.modes.items.map((item, i) => (
              <div key={i} className={`p-12 rounded-[40px] border-2 transition-all duration-500 flex flex-col items-center text-center group ${
                i === 0 ? 'bg-white border-black hover:border-beginner hover:translate-y-[-8px]' : 
                i === 1 ? 'bg-white border-black hover:border-intermediate hover:translate-y-[-8px]' : 
                'bg-black border-black text-white hover:translate-y-[-8px] shadow-[24px_24px_0_0_rgba(59,130,246,0.1)]'
              }`}>
                <div className="mb-12 relative">
                   <Mascot type={i === 0 ? 'beginner' : i === 1 ? 'intermediate' : 'expert'} size={120} />
                   <div className={`absolute -bottom-4 -right-4 w-8 h-8 rounded-lg border-2 border-current flex items-center justify-center font-black text-xs ${
                     i === 2 ? 'bg-white text-black' : 'bg-black text-white'
                   }`}>
                      {i + 1}
                   </div>
                </div>
                <h3 className="text-sm font-black mb-6 uppercase tracking-[0.4em]">{item.title}</h3>
                <p className={`text-xs font-semibold leading-[2] uppercase tracking-widest ${i === 2 ? 'text-white/40' : 'text-black/20'}`}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & CTA */}
      <section className="py-40 px-6 bg-white overflow-hidden border-b-2 border-black">
        <div className="max-w-4xl mx-auto text-center">
           <h2 className="text-4xl md:text-8xl font-black mb-16 leading-[0.9] tracking-tighter text-balance">
             {t.finalCta.title}
           </h2>
           <p className="text-xl text-black/40 mb-24 font-medium text-balance leading-relaxed">
             {t.finalCta.body}
           </p>
           <Button size="lg" className="h-24 px-20 rounded-xl bg-black text-white font-black text-sm uppercase tracking-[0.4em] hover-offset-expert shadow-2xl transition-all border-none">
             {t.finalCta.cta}
           </Button>
           
           <div className="mt-40 grid sm:grid-cols-2 gap-20 text-left border-t-2 border-black pt-40">
              <div>
                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-16 flex items-center gap-4">
                   <div className="w-8 h-8 rounded-xl bg-black flex items-center justify-center flex-shrink-0">
                     <Check className="text-white w-4 h-4" strokeWidth={4} />
                   </div>
                   {t.benefits.title}
                </h4>
                <ul className="space-y-8">
                   {t.benefits.items.map((b, i) => (
                     <li key={i} className="text-xs font-black uppercase tracking-widest text-black/40 flex gap-6 group">
                        <span className="text-black inline-block mt-0.5 group-hover:scale-150 transition-transform">•</span>
                        <span>
                          <span className="text-black font-black uppercase mr-3">{b.title}:</span>
                          {b.desc}
                        </span>
                     </li>
                   ))}
                </ul>
              </div>
              <div>
                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-16 flex items-center gap-4">
                   <div className="w-8 h-8 rounded-xl bg-expert flex items-center justify-center flex-shrink-0 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                     <Zap className="text-white w-4 h-4 fill-white" />
                   </div>
                   {t.useCases.title}
                </h4>
                <div className="space-y-12">
                   {t.useCases.items.map((uc, i) => (
                     <div key={i} className="group cursor-crosshair">
                        <span className="text-black text-xs font-black uppercase tracking-[0.3em] block mb-2 group-hover:text-expert transition-colors">{uc.title}</span>
                        <p className="text-[11px] font-semibold leading-relaxed uppercase tracking-widest text-black/30 group-hover:text-black/50 transition-colors">{uc.desc}</p>
                     </div>
                   ))}
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-40 px-6 bg-white grain-bg">
        <div className="max-w-4xl mx-auto">
          <p className="text-[10px] font-black tracking-[0.4em] uppercase mb-8 text-black/20 text-center">ANSWERS</p>
          <h2 className="text-4xl md:text-7xl font-black text-center mb-32 tracking-tighter leading-[0.9]">
            {lang === 'en' ? 'Frequently Asked Questions' : lang === 'fr' ? 'Questions fréquentes' : lang === 'de' ? 'Häufige Fragen' : 'Domande Frequenti'}
          </h2>
          <div className="space-y-8">
            {t.faq.map((item, i) => (
              <div key={i} className="group p-12 rounded-[32px] bg-white border-2 border-black hover:bg-bone transition-all cursor-pointer shadow-[8px_8px_0_0_rgba(0,0,0,0.05)] hover:shadow-[12px_12px_0_0_rgba(0,0,0,0.1)]">
                <h3 className="font-black text-sm uppercase tracking-widest mb-8 flex items-center justify-between">
                   {item.q}
                   <ChevronDown className="w-5 h-5 opacity-20 group-hover:rotate-180 group-hover:opacity-100 transition-all" />
                </h3>
                <p className="text-xs font-semibold leading-[2] text-black/40 uppercase tracking-widest">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function ChatInterface() {
  const { lang } = useLanguage();
  const { messages, sendMessage, isLoading, clearHistory } = useAiAgent({ lang });
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !isLoading) {
      sendMessage(input);
      setInput('');
    }
  };

  return (
    <div className="w-full h-[800px] bg-black rounded-[28px] overflow-hidden flex flex-col relative font-sans shadow-2xl">
      {/* Terminal Header */}
      <div className="px-10 py-8 border-b border-white/10 bg-[#0A0A0A] flex items-center justify-between relative z-10 shrink-0">
        <div className="flex items-center gap-6">
          <div className="relative group">
            <div className="absolute inset-0 bg-expert/20 blur-xl group-hover:bg-expert/40 transition-all" />
            <Mascot type="expert" size={48} className="relative z-10" />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-black animate-pulse" />
          </div>
          <div>
            <div className="font-black text-xs uppercase tracking-[0.4em] text-white">SEARCHTOOLBOX ENGINE_PRO</div>
            <div className="text-[10px] text-white/30 font-black uppercase tracking-[0.2em] flex items-center gap-3 mt-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
              SYSTEM_READY_0xFA2
            </div>
          </div>
        </div>
        <button 
          onClick={clearHistory}
          className="w-12 h-12 flex items-center justify-center transition-all hover:bg-white/5 rounded-xl text-white/20 hover:text-white/60 border border-white/10"
          title="Clear memory"
        >
          <Trash2 size={16} />
        </button>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-12 space-y-12 scrollbar-hide relative z-10">
        {messages.length === 0 && (
          <div className="h-full flex flex-col items-center justify-center text-center px-12 pb-20">
             <div className="w-24 h-24 mb-12 opacity-40">
                <Mascot type="expert" size={96} />
             </div>
             <h4 className="text-5xl font-black mb-8 tracking-tighter uppercase text-white leading-none">
                {lang === 'fr' ? 'PRÊT POUR L\'AUDIT ?' : 'READY FOR THE AUDIT?'}
             </h4>
             <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 max-w-sm leading-relaxed mb-16">
               {lang === 'fr' 
                 ? 'SYSTÈME CONNECTÉ À VOTRE DOMAINE. ANALYSE EN TEMPS RÉEL ACTIVÉE.' 
                 : 'SYSTEM CONNECTED TO YOUR DOMAIN. REAL-TIME ANALYSIS ENABLED.'}
             </p>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl">
                {[
                  {en: 'Identify technical errors', fr: 'Identifier les erreurs techniques'},
                  {en: 'Audit title & meta tags', fr: 'Audit titre et méta tags'},
                  {en: 'Extract all JSON-LD', fr: 'Extraire tout le JSON-LD'},
                  {en: 'Compare internal links', fr: 'Comparer les liens internes'}
                ].map((p, i) => (
                  <button 
                    key={i}
                    type="button"
                    onClick={() => sendMessage(lang === 'fr' ? p.fr : p.en)}
                    className="text-[10px] font-black uppercase tracking-[0.3em] py-6 px-10 rounded-xl bg-white/5 border border-white/10 hover:bg-white hover:text-black hover:border-white transition-all text-left group flex items-center justify-between text-white/60"
                  >
                    <span>{lang === 'fr' ? p.fr : p.en}</span>
                    <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all translate-x-[-12px] group-hover:translate-x-0" />
                  </button>
                ))}
             </div>
          </div>
        )}

        {messages.map((m, i) => (
          <div key={i} className={`flex gap-8 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 shrink-0 border-2 ${
              m.role === 'user' ? 'bg-white text-black border-white' : 'bg-black text-white border-white/10'
            }`}>
              {m.role === 'user' ? <User size={24} /> : <Mascot type="expert" size={32} />}
            </div>
            <div className={`max-w-[85%] p-8 rounded-3xl text-sm font-semibold leading-[1.8] uppercase tracking-widest shadow-2xl relative ${
              m.role === 'user' 
                ? 'bg-white text-black rounded-tr-none' 
                : 'bg-[#121212] text-white/90 rounded-tl-none border-2 border-white/10 shadow-[8px_8px_0_0_rgba(255,255,255,0.05)]'
            }`}>
              {m.content}
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex gap-8">
            <div className="w-14 h-14 rounded-xl bg-black border-2 border-white/10 flex items-center justify-center shrink-0">
               <Mascot type="expert" size={32} />
            </div>
            <div className="bg-[#121212] p-8 rounded-3xl rounded-tl-none border-2 border-white/10 flex items-center gap-4">
              <span className="w-2.5 h-2.5 rounded-full bg-white/20 animate-bounce shadow-[0_0_8px_rgba(255,255,255,0.5)]" style={{ animationDelay: '0s' }} />
              <span className="w-2.5 h-2.5 rounded-full bg-white/20 animate-bounce shadow-[0_0_8px_rgba(255,255,255,0.5)]" style={{ animationDelay: '0.2s' }} />
              <span className="w-2.5 h-2.5 rounded-full bg-white/20 animate-bounce shadow-[0_0_8px_rgba(255,255,255,0.5)]" style={{ animationDelay: '0.4s' }} />
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="p-12 border-t border-white/10 bg-[#0A0A0A] relative z-20 shrink-0">
        <div className="relative flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={lang === 'fr' ? 'DEMANDEZ N\'IMPORTE QUOI À L\'EXPERT...' : 'ASK THE EXPERT ANYTHING...'}
            className="w-full bg-[#121212] border-2 border-white/10 rounded-2xl px-10 py-8 text-sm font-bold focus:outline-none focus:border-expert transition-all pr-24 placeholder:text-white/10 text-white shadow-2xl uppercase tracking-widest"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="absolute right-5 w-16 h-16 flex items-center justify-center rounded-xl bg-white text-black disabled:opacity-20 disabled:bg-white/10 transition-all hover:scale-105 shadow-xl group"
          >
            <Send className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={24} />
          </button>
        </div>
        <div className="flex items-center justify-center gap-12 mt-10">
           <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-white/20">
              <div className="w-2 h-2 bg-expert rounded-full" /> ENCRYPTED_TUNNEL
           </div>
           <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-white/20">
              <div className="w-2 h-2 bg-white/10 rounded-full" /> GPT-4o_NEURAL_LAYER
           </div>
        </div>
      </form>
    </div>
  );
}
