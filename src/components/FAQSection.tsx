import { useState } from 'react'

const faqs = [
  {
    q: 'Is SEO Swiss Knife free?',
    a: 'Yes, the core extension is completely free. Install it from the Chrome Web Store with no account required. Advanced features and team collaboration tools are available in the Pro plan.',
  },
  {
    q: 'What browsers are supported?',
    a: 'SEO Swiss Knife is built for Chromium-based browsers: Chrome, Edge, Brave, and Arc. Firefox support is on the roadmap.',
  },
  {
    q: 'Does it work on any website?',
    a: 'It works on any public URL including staging environments, localhost, and password-protected pages when you\'re already logged in. It analyzes the live DOM so JavaScript-rendered content is fully supported.',
  },
  {
    q: 'How is it different from the Chrome DevTools?',
    a: 'DevTools is built for developers. SEO Swiss Knife is purpose-built for SEO workflows — structured data validation, redirect chains, hreflang auditing, robots parsing, SERP VPN — things DevTools simply don\'t have.',
  },
  {
    q: 'Does it share my data with anyone?',
    a: 'No. SEO Swiss Knife runs entirely in your browser. It does not send any page content or URL data to external servers. Your audits stay local.',
  },
  {
    q: 'Can I export or share reports?',
    a: 'Yes. The Report tab generates a full weighted SEO score with a breakdown by category. You can download it as PDF or open it in a standalone tab to share with clients.',
  },
  {
    q: 'Can I disable features I don\'t use?',
    a: 'Absolutely. The Settings panel lets you hide any tab from the sidebar, set a default landing tab, and configure keyboard shortcuts for every section.',
  },
  {
    q: 'Does the SERP VPN actually route my traffic?',
    a: 'No. SERP VPN spoofs browser headers and geolocation signals to simulate how Google serves results in a given country — it does not route your real network traffic through a VPN server.',
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-border last:border-none">
      <button
        className="w-full flex items-center justify-between gap-4 py-5 text-left bg-transparent border-none cursor-pointer group"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="text-foreground font-medium text-base group-hover:text-primary transition-colors">
          {q}
        </span>
        <span
          className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm transition-transform duration-200"
          style={{
            background: 'rgba(167,139,250,0.1)',
            color: '#a78bfa',
            transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
          }}
        >
          +
        </span>
      </button>

      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? '200px' : '0px', opacity: open ? 1 : 0 }}
      >
        <p className="text-muted-foreground text-sm leading-relaxed pb-5">{a}</p>
      </div>
    </div>
  )
}

export function FAQSection() {
  return (
    <section className="bg-background py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-center text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-5">
          FAQ
        </p>
        <h2
          className="text-center text-4xl md:text-5xl font-semibold bg-clip-text text-transparent mb-16 tracking-tight"
          style={{ backgroundImage: 'linear-gradient(135deg, #e8e8e9 0%, #a78bfa 100%)' }}
        >
          Questions you'll ask anyway
        </h2>

        <div className="liquid-glass rounded-2xl px-8 divide-y divide-border">
          {faqs.map((f) => (
            <FAQItem key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  )
}
