import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/i18n/index'
import { Button } from '@/components/ui/button'
import { PixelHeart } from '@/components/PixelHeart'
import { SEO } from '@/components/SEO'
import { useState, useRef, useEffect } from 'react'
import { useAiAgent } from '@/hooks/useAiAgent'
import { Send, Sparkles, User, Bot, Trash2, Check, ArrowRight, Shield, Zap, ChevronDown } from 'lucide-react'

export function AiAgentPage() {
  const { lang } = useLanguage()
  const t = translations[lang].aiAgent.page

  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <SEO 
        title={t.meta.title}
        description={t.meta.description}
        faq={t.faq}
      />

      {/* Premium Hero */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-600/20 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/20 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-black tracking-[0.2em] uppercase mb-8 border border-purple-500/30 bg-purple-500/10 text-purple-400">
            <Sparkles className="w-3.5 h-3.5" />
            AI SEO TECHNOLOGY V1
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.9] text-white">
            {lang === 'fr' ? 'L\'IA qui lit votre code, pas juste vos questions.' : 'The AI that reads your code, not just your questions.'}
          </h1>
          
          <p className="text-xl md:text-2xl text-white/50 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
            {t.hero.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button size="lg" className="h-16 px-10 rounded-2xl bg-white text-black font-black text-sm uppercase tracking-widest hover:bg-white/90 shadow-[0_20px_40px_rgba(255,255,255,0.1)]">
              {t.hero.cta}
            </Button>
            <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-widest text-white/30">
               <div className="flex items-center gap-2">
                 <Shield className="w-4 h-4 text-purple-500" /> 100% PRIVATE
               </div>
               <div className="flex items-center gap-2">
                 <Zap className="w-4 h-4 text-cyan-500" /> NO LATENCY
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Demo Interface - Highlighted center stage */}
      <section className="py-12 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
           <div className="p-1 rounded-[32px] bg-gradient-to-b from-white/10 to-transparent">
             <ChatInterface />
           </div>
        </div>
      </section>

      {/* Why Pixly Section */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
           <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight">
                  {t.problem.title}
                </h2>
                <p className="text-xl text-white/40 leading-relaxed mb-12">
                   {t.problem.body}
                </p>
                <div className="space-y-6">
                   {t.differentiation.items.map((item, i) => (
                     <div key={i} className="flex gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                           {i === 0 ? <Bot className="text-purple-400" /> : i === 1 ? <Zap className="text-cyan-400" /> : <Shield className="text-emerald-400" />}
                        </div>
                        <div>
                          <h4 className="font-bold mb-1 text-lg">{item.title}</h4>
                          <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                     </div>
                   ))}
                </div>
              </div>
              
              <div className="relative">
                 <div className="aspect-square rounded-[40px] bg-[#0A0A1F] border border-white/10 overflow-hidden relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                    <div className="p-10 h-full flex flex-col justify-center gap-8">
                       <div className="space-y-2">
                          <div className="h-2 w-1/3 bg-white/10 rounded-full" />
                          <div className="h-2 w-full bg-white/5 rounded-full" />
                          <div className="h-2 w-2/3 bg-white/5 rounded-full" />
                       </div>
                       <div className="p-6 rounded-2xl bg-purple-500/10 border border-purple-500/30 animate-pulse">
                          <div className="flex items-center gap-3 mb-4">
                             <Bot size={20} className="text-purple-400" />
                             <span className="text-[10px] font-black uppercase tracking-widest text-purple-400">Analysis Complete</span>
                          </div>
                          <div className="text-sm text-white/70 italic leading-relaxed">
                             "Found missing canonical tag on 3 alternate pages. Updating schema context for intermediate SEO level..."
                          </div>
                       </div>
                       <div className="space-y-2">
                          <div className="h-2 w-1/2 bg-white/10 rounded-full" />
                          <div className="h-2 w-full bg-white/5 rounded-full" />
                       </div>
                    </div>
                 </div>
                 {/* Decorative elements */}
                 <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/20 blur-[80px] rounded-full" />
                 <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-cyan-500/20 blur-[80px] rounded-full" />
              </div>
           </div>
        </div>
      </section>

      {/* Expertise Modes */}
      <section className="py-24 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black mb-4 tracking-tight">{t.modes.title}</h2>
            <p className="text-white/40">{lang === 'fr' ? 'L\'IA s\'adapte à votre expertise, pas l\'inverse.' : 'The AI adapts to your expertise, not the other way around.'}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {t.modes.items.map((item, i) => (
              <div key={i} className={`p-10 rounded-[40px] border transition-all duration-500 flex flex-col items-center text-center group ${
                i === 2 ? 'bg-purple-600 border-purple-500 scale-105 shadow-2xl' : 'bg-white/[0.03] border-white/10 hover:bg-white/[0.05]'
              }`}>
                <div className={`w-16 h-16 rounded-3xl mb-8 flex items-center justify-center text-2xl transition-transform group-hover:scale-110 ${
                  i === 2 ? 'bg-white/20' : 'bg-white/5'
                }`}>
                  {['🌱','🚀','💎'][i]}
                </div>
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">{item.title}</h3>
                <p className={`text-sm leading-relaxed ${i === 2 ? 'text-white/80' : 'text-white/40'}`}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & CTA */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
           <h2 className="text-4xl md:text-5xl font-black mb-8 leading-[1.1]">
             {t.finalCta.title}
           </h2>
           <p className="text-xl text-white/40 mb-12">
             {t.finalCta.body}
           </p>
           <Button size="lg" className="h-16 px-12 rounded-2xl bg-purple-600 hover:bg-purple-500 text-white font-black text-sm uppercase tracking-widest shadow-[0_20px_40px_rgba(139,92,246,0.3)]">
             {t.finalCta.cta}
           </Button>
           
           <div className="mt-24 grid sm:grid-cols-2 gap-12 text-left">
              <div>
                <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                   <Check className="text-purple-400" /> {t.benefits.title}
                </h4>
                <ul className="space-y-4">
                   {t.benefits.items.map((b, i) => (
                     <li key={i} className="text-white/40 text-sm flex gap-3">
                        <span className="text-purple-500 font-black">•</span>
                        {b.title}: {b.desc}
                     </li>
                   ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                   <Sparkles className="text-purple-400" size={18} /> {t.useCases.title}
                </h4>
                <div className="space-y-4">
                   {t.useCases.items.map((uc, i) => (
                     <div key={i} className="text-white/40 text-sm">
                        <span className="text-white/80 font-bold block mb-1">{uc.title}</span>
                        {uc.desc}
                     </div>
                   ))}
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-white/[0.01] border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-16 uppercase tracking-widest">{lang === 'fr' ? 'Questions fréquentes' : 'Frequently Asked Questions'}</h2>
          <div className="space-y-4">
            {t.faq.map((item, i) => (
              <div key={i} className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all">
                <h3 className="font-bold text-lg mb-3 flex items-center justify-between">
                   {item.q}
                   <ChevronDown className="w-4 h-4 opacity-20 group-hover:rotate-180 transition-transform" />
                </h3>
                <p className="text-white/40 leading-relaxed">{item.a}</p>
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
    <div className="w-full h-[650px] bg-[#080B14] rounded-[28px] border border-white/10 shadow-2xl overflow-hidden flex flex-col relative">
      {/* Glossy overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
      
      {/* Header */}
      <div className="px-8 py-6 border-b border-white/5 bg-white/[0.01] flex items-center justify-between relative z-10">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center shadow-lg relative">
            <PixelHeart size={24} />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-[#080B14] animate-pulse" />
          </div>
          <div>
            <div className="font-black text-xs uppercase tracking-[0.2em] text-white">PIXLY ENGINE V1.0</div>
            <div className="text-[10px] text-white/40 font-bold uppercase tracking-widest flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-purple-500" />
              Real-time DOM analysis active
            </div>
          </div>
        </div>
        <button 
          onClick={clearHistory}
          className="w-10 h-10 flex items-center justify-center transition-all hover:bg-white/5 rounded-xl text-white/20 hover:text-white/60 border border-white/5"
          title="Clear memory"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-8 scrollbar-hide relative z-10">
        {messages.length === 0 && (
          <div className="h-full flex flex-col items-center justify-center text-center px-12">
            <div className="w-20 h-20 rounded-[32px] bg-white/[0.03] flex items-center justify-center mb-8 border border-white/5">
              <Bot className="w-10 h-10 text-purple-400 opacity-80" />
            </div>
            <h4 className="text-2xl font-black mb-4 tracking-tight">
               {lang === 'fr' ? 'Prêt pour l\'audit ?' : 'Ready for the audit?'}
            </h4>
            <p className="text-sm text-white/40 max-w-sm leading-relaxed mb-10">
              {lang === 'fr' 
                ? 'Je suis connecté à votre page. Demandez-moi d\'analyser n\'importe quel aspect technique.' 
                : 'I am connected to your page. Ask me to analyze any technical aspect.'}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
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
                   className="text-[10px] font-black uppercase tracking-widest py-4 px-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-purple-600/20 hover:border-purple-500/50 transition-all text-left group"
                 >
                   <span className="flex items-center justify-between">
                     {lang === 'fr' ? p.fr : p.en}
                     <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" />
                   </span>
                 </button>
               ))}
            </div>
          </div>
        )}

        {messages.map((m, i) => (
          <div key={i} className={`flex gap-5 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 relative overflow-hidden ${
              m.role === 'user' ? 'bg-purple-600 shadow-lg shadow-purple-900/20' : 'bg-white/5 border border-white/10'
            }`}>
              {m.role === 'user' ? <User className="w-5 h-5 text-white" /> : <Bot className="w-5 h-5 text-purple-400" />}
              {m.role === 'assistant' && <div className="absolute inset-0 bg-purple-400/5 animate-pulse" />}
            </div>
            <div className={`max-w-[85%] p-5 rounded-3xl text-sm leading-relaxed shadow-xl ${
              m.role === 'user' 
                ? 'bg-purple-600/10 text-white/90 border border-purple-500/20 rounded-tr-none' 
                : 'bg-white/[0.05] text-white rounded-tl-none border border-white/10'
            }`}>
              {m.content}
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex gap-5">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
              <Bot className="w-5 h-5 text-purple-400" />
            </div>
            <div className="bg-white/[0.05] p-5 rounded-3xl rounded-tl-none border border-white/10 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: '0s' }} />
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: '0.2s' }} />
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: '0.4s' }} />
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="p-8 border-t border-white/5 bg-white/[0.01] relative z-10">
        <div className="relative flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={lang === 'fr' ? 'Demandez n\'importe quoi à Pixly Expert...' : 'Ask Pixly Expert anything...'}
            className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-6 py-5 text-sm focus:outline-none focus:border-purple-500/50 transition-all pr-16 placeholder:text-white/20 text-white font-medium"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="absolute right-4 w-10 h-10 flex items-center justify-center rounded-xl bg-purple-600 text-white disabled:opacity-50 disabled:bg-white/5 transition-all hover:bg-purple-500 shadow-lg"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
        <div className="flex items-center justify-center gap-4 mt-6">
           <div className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-[0.2em] text-white/20">
              <div className="w-1 h-1 rounded-full bg-green-500" /> Encrypted Session
           </div>
           <div className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-[0.2em] text-white/20">
              <div className="w-1 h-1 rounded-full bg-purple-500" /> GPT-4o Enhanced
           </div>
        </div>
      </form>
    </div>
  );
}
