import React from 'react'
import { Mascot } from '@/components/Mascot'
import { Check, ChevronRight, Layout, Terminal, Share2, Database, Globe, Zap, Settings, X } from 'lucide-react'

export type MockupTab =
  | 'overview' | 'headings' | 'social' | 'schema' | 'hreflang' | 'variants'
  | 'robots' | 'redirects' | 'images' | 'inspector' | 'source' | 'render'
  | 'links'
  | 'vpn' | 'tools' | 'dorks' | 'useragent' | 'cookies' | 'clearcache' | 'glossary' | 'report'

const GROUPS = [
    {
      label: 'Semantic',
      color: '#FF6B9D', // Beginner Pink
      tabs: [
        { id: 'overview', icon: <Layout size={14} />, label: 'Overview' },
        { id: 'headings', icon: <Terminal size={14} />, label: 'Headings' },
        { id: 'social', icon: <Share2 size={14} />, label: 'Social' },
        { id: 'schema', icon: <Database size={14} />, label: 'Schema' },
      ],
    },
    {
      label: 'Technical',
      color: '#3B82F6', // Expert Blue
      tabs: [
        { id: 'hreflang', icon: <Globe size={14} />, label: 'Hreflang' },
        { id: 'redirects', icon: <Zap size={14} />, label: 'Redirect' },
        { id: 'report', icon: <Check size={14} />, label: 'Report' },
      ],
    },
  ]

/* ── Panel content ── */
function OverviewPanel() {
  return (
    <div className="p-5 flex flex-col gap-4">
      {/* Score */}
      <div className="flex items-center justify-between border-2 border-black rounded-xl px-4 py-4 bg-white shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
        <span className="text-black/40 font-black uppercase tracking-[0.2em] text-[8px]">Audit Score</span>
        <div className="flex items-center gap-4">
          <div className="h-2 w-24 bg-black/5 rounded-full overflow-hidden border border-black/5">
            <div className="h-full w-[92%] bg-expert animate-pulse" />
          </div>
          <span className="font-black text-xl text-black tracking-tighter">92</span>
        </div>
      </div>

      {/* Grid Stats */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { l: 'H1', v: '1', c: 'bg-beginner text-white' },
          { l: 'IMG', v: '12', c: 'bg-white text-black border-2 border-black' },
          { l: 'LINK', v: '48', c: 'bg-white text-black border-2 border-black' }
        ].map((s) => (
          <div key={s.l} className={`${s.c} rounded-xl p-3 text-center transition-transform hover:scale-105`}>
            <div className="font-black text-lg leading-none mb-1">{s.v}</div>
            <div className="opacity-40 text-[7px] font-black uppercase tracking-widest">{s.l}</div>
          </div>
        ))}
      </div>

      {/* Audit Fields */}
      <div className="space-y-2">
        {[
          { label: 'Metadata', value: 'Perfect implementation', status: 'expert' },
          { label: 'Technical', value: '2 redirects found', status: 'intermediate' },
          { label: 'Semantic', value: 'Missing H1 tags', status: 'beginner' },
        ].map((f) => (
          <div key={f.label} className="bg-white border-2 border-black rounded-xl p-3 flex items-center justify-between group cursor-pointer hover:bg-black hover:text-white transition-all">
            <div className="flex items-center gap-3">
               <div className={`w-2 h-2 rounded-full ${
                 f.status === 'expert' ? 'bg-expert shadow-[0_0_8px_rgba(59,130,246,0.5)]' : 
                 f.status === 'intermediate' ? 'bg-intermediate' : 'bg-beginner'
               }`} />
               <div>
                  <div className="text-[7px] font-black uppercase tracking-widest opacity-40 group-hover:text-white/40">{f.label}</div>
                  <div className="text-[10px] font-bold tracking-tight">{f.value}</div>
               </div>
            </div>
            <ChevronRight size={14} className="opacity-20 group-hover:opacity-100" />
          </div>
        ))}
      </div>
    </div>
  )
}

function ReportPanel() {
  return (
    <div className="p-5 flex flex-col gap-5">
       <div className="bg-expert text-white rounded-xl p-6 border-2 border-black shadow-[4px_4px_0_0_rgba(59,130,246,1)]">
          <div className="text-[8px] font-black uppercase tracking-[0.3em] mb-2 opacity-60">Session Result</div>
          <div className="text-4xl font-black tracking-tighter mb-4">OPTIMIZED</div>
          <div className="flex gap-2">
             <div className="px-2 py-1 rounded bg-white/20 text-[7px] font-black uppercase tracking-widest">v1.2_STABLE</div>
             <div className="px-2 py-1 rounded bg-black/40 text-[7px] font-black uppercase tracking-widest">SEO_PASS_01</div>
          </div>
       </div>

       <div className="space-y-3">
          {['Content Strategy', 'Link Structure', 'Core Vitals'].map((n, i) => (
            <div key={n} className="flex flex-col gap-2">
               <div className="flex justify-between text-[8px] font-black uppercase tracking-widest">
                  <span className="text-black/40">{n}</span>
                  <span className="text-black">100%</span>
               </div>
               <div className="h-1.5 w-full bg-black/5 rounded-full overflow-hidden">
                  <div className="h-full bg-black rounded-full" style={{ width: i === 0 ? '100%' : i === 1 ? '85%' : '92%' }} />
               </div>
            </div>
          ))}
       </div>

       <button className="w-full h-14 bg-black text-white rounded-xl font-black text-[10px] uppercase tracking-[0.2em] shadow-[4px_4px_0_0_rgba(0,0,0,0.2)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_rgba(0,0,0,0.25)] transition-all mt-4 border-none">
          Generate Full Report
       </button>
    </div>
  )
}

const DEFAULT_PANELS: Partial<Record<MockupTab, React.ReactNode>> = {
  overview: <OverviewPanel />,
  report: <ReportPanel />,
}

function GenericPanel({ tab }: { tab: MockupTab }) {
  return (
    <div className="flex flex-col items-center justify-center h-full p-10 bg-white grid-bg opacity-40 grayscale">
       <div className="w-16 h-16 rounded-2xl border-2 border-dashed border-black flex items-center justify-center text-black/20 text-3xl mb-4">?</div>
       <span className="text-[10px] font-black uppercase tracking-[0.3em] text-black/20">{tab}_MODE</span>
    </div>
  )
}

export function ExtensionMockup({ activeTab = 'overview' }: { activeTab?: MockupTab }) {
  return (
    <div
      className="rounded-2xl overflow-hidden border-2 border-black shadow-[32px_32px_0_0_rgba(0,0,0,0.05)] select-none flex-shrink-0 flex flex-col scale-[0.85] lg:scale-100 origin-top-left"
      style={{
        width: 380,
        height: 480,
        background: '#FFFFFF',
        fontFamily: "'Outfit', 'Inter', sans-serif",
      }}
    >
      {/* Search Toolbox Header */}
      <div className="flex items-center justify-between px-6 py-5 border-b-2 border-black bg-white relative z-20">
        <div className="flex items-center gap-4">
           <Mascot type="expert" size={32} />
           <div className="flex flex-col">
              <span className="font-black text-sm tracking-[-0.04em] uppercase text-black inline-flex items-center leading-none">
                SEARCHT<span className="flex items-center">O<span className="-ml-[0.2em] opacity-80">O</span></span>LBOX
              </span>
              <span className="text-[8px] font-black uppercase tracking-widest text-black/30 mt-1">v1.2 PRO ENGINE</span>
           </div>
        </div>
        <div className="flex items-center gap-2">
           <div className="w-8 h-8 rounded-lg bg-black/5 flex items-center justify-center group cursor-pointer hover:bg-black transition-all">
              <Settings size={14} className="group-hover:text-white" />
           </div>
           <div className="w-8 h-8 rounded-lg bg-black/5 flex items-center justify-center group cursor-pointer hover:bg-black transition-all">
              <X size={14} className="group-hover:text-white" />
           </div>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <div className="w-20 border-r-2 border-black bg-bone flex flex-col py-6 overflow-y-auto overflow-x-hidden scrollbar-none">
           {GROUPS.map((g) => (
             <div key={g.label} className="mb-8 last:mb-0">
                <div className="px-5 mb-4">
                   <div className="h-[2px] w-full bg-black/10 rounded-full" />
                </div>
                <div className="flex flex-col gap-2">
                   {g.tabs.map((t) => {
                     const isActive = t.id === activeTab
                     return (
                       <button
                         key={t.id}
                         className={`relative flex items-center justify-center py-3 transition-colors ${isActive ? 'text-black' : 'text-black/20 hover:text-black/40'}`}
                       >
                         {isActive && (
                           <div className="absolute left-0 w-1.5 h-6 bg-black rounded-r-full shadow-[2px_0_8px_rgba(0,0,0,0.1)]" />
                         )}
                         <div className={`p-2.5 rounded-xl transition-all ${isActive ? 'bg-white border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)]' : ''}`}>
                            {t.icon}
                         </div>
                       </button>
                     )
                   })}
                </div>
             </div>
           ))}
        </div>

        {/* Panel Content */}
        <div className="flex-1 overflow-y-auto bg-white relative">
           <div className="sticky top-0 right-0 p-4 pointer-events-none z-10 flex justify-end">
              <div className="bg-black text-white text-[8px] font-black px-2 py-1 rounded border border-black/10 shadow-lg">0x_ACTIVE_NODE</div>
           </div>
           {DEFAULT_PANELS[activeTab] ?? <GenericPanel tab={activeTab} />}
        </div>
      </div>

      {/* Footer Metrics */}
      <div className="px-6 py-4 border-t-2 border-black bg-bone flex items-center justify-between">
         <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-expert rounded-full animate-pulse" />
            <span className="text-[8px] font-black uppercase tracking-[0.3em] text-black/40 hover:text-black transition-colors cursor-help">Neural Engine Engaged</span>
         </div>
         <div className="flex gap-2">
            {[1, 2, 3].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-black/10" />)}
         </div>
      </div>
    </div>
  )
}
