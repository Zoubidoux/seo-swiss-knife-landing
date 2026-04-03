export type Lang = "en" | "fr" | "de" | "it" | "es"

const en = {
  nav: {
    home: "Home",
    features: "Features",
    howItWorks: "How it works",
    faq: "FAQ",
    pricing: "Pricing",
    install: "Add to Chrome — Free",
    agent: "AI AGENT",
    langToggle: "EN",
    aiExpert: "AI Expert",
    aiAssistantBadge: "AI SEO Agent"
  },
  home: {
    meta: {
      title: "SEARCHTOOLBOX — The Last SEO Extension You'll Ever Install | 60+ Tools",
      description: "Audit schema, trace redirects, check hreflang, and geo-simulate rankings with one powerful sidebar. 60+ technical SEO tools in your browser. 100% free."
    }
  },
  hero: {
    eyebrow: "Native Chrome Extension · 100% Privacy · No API Key Required",
    headline: "SEARCHTOOLBOX",
    sub: "Stop juggling 10 extensions. One powerful sidebar to audit schema, trace redirects, check hreflang, analyze images, and geo-simulate rankings — instantly, on any page.",
    cta: "Add to Chrome — Free",
    ctaSub: "Immediate access · Works on localhost & dev sites",
    demoCta: "View Live Demo",
    badge: "Chrome Extension · Beta",
    featureCards: {
      audit: { title: "On-Page Audit", desc: "Identify critical errors in milliseconds." },
      redirect: { title: "Redirect Tracer", desc: "Trace the full chain, instantly." },
      schema: { title: "Schema Validator", desc: "JSON-LD validation made simple." }
    }
  },
  benefits: {
    eyebrow: "Complete Coverage",
    headline: "Every tool a technical SEO needs. Without exception.",
    sub: "60+ tools covering every SEO dimension — semantic, technical, netlinking, toolbox — inside a single Chrome panel.",
    groups: [
      { icon: '◉', label: 'Semantic', count: 15, items: ['Full Page Overview', 'Title & Meta Scoring', 'Canonical Checker', 'Robots Meta Parser', 'H1–H6 Hierarchy', 'JSON-LD Extractor', 'Hreflang Parser', 'Return Link Checker', 'Language Validator', 'URL Variants'] },
      { icon: '⊖', label: 'Technical', count: 14, items: ['Robots.txt Viewer', 'X-Robots-Tag Header', 'HTTPS Detection', 'Redirect Chain Tracer', 'Redirect Timing', 'Image Alt Audit', 'Image Format Check', 'Image ZIP Export', 'Image CSV Export', 'JS Render Diff'] },
      { icon: '⇄', label: 'Netlinking', count: 7, items: ['Full Link Listing', 'Nofollow Detection', 'Sponsored & UGC Tags', 'External Link Audit', 'Link CSV Export', 'Link Grabber', 'Text Grabber'] },
      { icon: '🌐', label: 'Toolbox', count: 16, items: ['SERP VPN Geo-Sim', 'Device Simulation', 'Google Dork Operators', 'Duplicate Content', 'Ahrefs / Semrush / Moz', 'Cookie Manager', 'User Agent Switcher', 'Weighted SEO Report', 'PDF Export', 'Viewport Screenshot'] },
      { icon: '⌨', label: 'Toolbar & UX', count: 9, items: ['JavaScript Toggle', 'Mobile Preview', 'Color Picker', 'Transparent Overlay', 'Dark / Light Theme', 'Keyboard Shortcuts', 'Configurable Sidebar', 'Chrome Side Panel', 'Context Menu (30+ actions)'] }
    ],
    shortcuts: {
      title: "Keyboard Shortcuts",
      body: "Every tab accessible with a configurable keyboard shortcut. Navigate Overview → Schema → Redirects without touching the mouse.",
      items: [
        { key: 'Alt+1', label: 'Overview' },
        { key: 'Alt+2', label: 'Headings' },
        { key: 'Alt+3', label: 'Schema' },
        { key: 'Alt+4', label: 'Redirects' },
        { key: 'Alt+R', label: 'Report' }
      ]
    },
    problem: {
      eyebrow: "The Problem",
      headline: "6 tabs open for a single audit.",
      items: [
        { icon: '🗂', text: 'Schema validator here, robots checker there, redirect tracer elsewhere — context-switching kills your flow.' },
        { icon: '🔍', text: 'Broken hreflang, missing canonical, malformed structured data — invisible until they cost you rankings.' },
        { icon: '📊', text: 'Every tool is a separate tab, separate account, different UI. No more.' }
      ]
    },
    solution: {
      eyebrow: "SEARCHTOOLBOX",
      sub: "One panel, everything else gone.",
      items: [
        '60+ tools in a single Chrome sidebar',
        'Every SEO category covered',
        '30+ shortcuts via right-click context menu',
        'Fully configurable keyboard shortcuts',
        'Zero account, zero API key',
        'Works on every page you visit'
      ],
      cta: "Install for Free →"
    },
    stats: [
      { value: '60+', label: 'Built-in tools' },
      { value: '30+', label: 'Context menu actions' },
      { value: '150+', label: 'SEO terms in glossary' },
      { value: '100%', label: 'Free — no account' },
    ]
  },
  comparison: {
    eyebrow: "Before · After",
    headline: "12 extensions or just 1?",
    sub: "Most SEOs have 10+ extensions installed. Search Toolbox replaces all of them.",
    currentSetup: "Your current setup",
    activeExtensions: "{count} extensions active",
    painPoints: [
      { icon: '⏱', text: '~2h per audit · juggling 12 tabs' },
      { icon: '💸', text: 'Several extensions cost money' },
      { icon: '🐌', text: 'Chrome slowed down by all these' }
    ],
    oneExtensionOnly: "1 extension only",
    gains: [
      { icon: '⚡', text: '~5 min per audit · everything in one panel' },
      { icon: '🆓', text: '100% free, no account needed' },
      { icon: '🚀', text: 'Faster Chrome, fewer extensions' }
    ],
    drag: "Drag",
    before: "Before",
    after: "After",
    footerNote: "✦ The last SEO extension you'll ever install ✦"
  },
  liveDemo: {
    eyebrow: "Live Demo",
    headline: "See it running on real sites",
    sub: "Pick a site and watch the extension analyse the page in real conditions.",
    lockNote: "🔒 To analyse your own site for real, install the free Chrome extension.",
    cta: "Install Free — Chrome Web Store →"
  },
  proof: {
    label: "Empowering SEO experts at the world's leading agencies",
  },
  problem: {
    eyebrow: "The Problem",
    headline: "Every SEO audit feels like assembling IKEA furniture without the manual",
    sub: "You know what needs checking. But your tools are scattered, your workflow is broken, and the clock is ticking.",
    pains: [
      {
        icon: "⏱",
        title: "Context-Switching Fatigue",
        body: "Opening 5 tabs just to check one page. Every switch breaks your flow and hides the big picture.",
      },
      {
        icon: "🔍",
        title: "The \"Invisible\" Errors",
        body: "Missing broken hreflang returns or malformed JSON-LD that costs your clients millions in organic traffic.",
      },
      {
        icon: "📉",
        title: "Report Generation Hell",
        body: "Manually building audits for clients. You should be fixing problems, not documenting them in spreadsheets.",
      },
    ],
  },
  solution: {
    eyebrow: "The Solution",
    headline: "One Sidebar.\nTotal SEO Mastery.",
    sub: "SearchToolbox lives where you work: the browser. It extracts every technical signal in real-time. No login, no complexity — just the insights you need to rank higher.",
    cta: "Add to Chrome — It's Free",
  },
  features: {
    eyebrow: "The Toolbox",
    headline: "60+ Pro Tools. One Click.",
    sub: "Engineered for technical SEOs who demand speed and precision.",
    items: [
      {
        icon: "◉", color: "#a78bfa", label: "Semantic",
        title: "Semantic Audit",
        desc: "Deep analysis of titles, meta descriptions, and semantic density. Real-time scoring and character count thresholds.",
      },
      {
        icon: "¶", color: "#a78bfa", label: "Technical",
        title: "Technical Audit",
        desc: "Inspect robots.txt, X-Robots-Tag, and canonical variants. Catch crawlability issues before they hit the index.",
      },
      {
        icon: "⬢", color: "#a78bfa", label: "UX",
        title: "Schema & Structured Data",
        desc: "Extract and validate JSON-LD, Microdata, and RDFa with syntax highlighting and property-level error flags.",
      },
      {
        icon: "⇄", color: "#a78bfa", label: "Navigation",
        title: "Redirect Chain Tracer",
        desc: "Trace 301/302 hops, measure response times, and detect loops. Perfectly follow every URL migration.",
      },
      {
        icon: "🌐", color: "#a78bfa", label: "Global",
        title: "Hreflang Deep Auditor",
        desc: "Verify return tags, language/region codes, and x-default. Crucial for international SEO success.",
      },
      {
        icon: "📋", color: "#a78bfa", label: "Reports",
        title: "Instant PDF Reports",
        desc: "Generate weighted SEO scores and export professional PDF audits for clients in under 10 seconds.",
      }
    ],
  },
  howItWorks: {
    eyebrow: "Fast Onboarding",
    headline: "From Install to Audit in 60s",
    steps: [
      {
        num: "01",
        title: "One-Click Install",
        body: "Get it from the Chrome Web Store. No account or credit card required to start using core tools.",
      },
      {
        num: "02",
        title: "Open the Sidebar",
        body: "Use our shortcut or click the icon. SearchToolbox instantly parses the current page state.",
      },
      {
        num: "03",
        title: "Ask the Expert",
        body: "Let the AI Agent guide your audit, or use manual tools for deep technical investigation.",
      },
    ],
  },
  aiAgent: {
    homepage: {
      eyebrow: "AI SEO Assistant",
      headline: "The Only AI That Actually Reads Your Page.",
      subheadline: "Most AI bots are blind to your code. SearchToolbox's agent analyzes your live DOM, source code, and technical headers to provide context-aware fixes that actually work.",
      features: [
        { title: "DOM-Aware", desc: "Doesn't just guess — it reads your actual HTML and Schema." },
        { title: "Technical Fixes", desc: "Get step-by-step code snippets to fix identified issues." },
        { title: "Expert Knowledge", desc: "Powered by the latest Google Search documentation." },
        { title: "Zero Latency", desc: "Instant page-level analysis directly in your sidebar." }
      ],
      primaryCta: "Try the AI Agent",
      secondaryCta: "Learn More",
      chat: {
        user: "Analyze my home page content for the keyword 'SEO Expert'.",
        scanning: "Scanning DOM... 73 tags analyzed.",
        response: "Your H1 contains the keyword, but your meta-description is too short. I recommend adding: 'Technical Audit'."
      }
    },
    page: {
      meta: {
        title: "Personal SEO AI Agent — Your On-Page Expert | SearchToolbox",
        description: "Meet the first context-aware AI SEO agent. It reads your page, identifies technical blockers, and provides expert-level recommendations instantly."
      },
      hero: {
        headline: "Stop Guessing. Start Prompting Your SEO.",
        subheadline: "SearchToolbox connects your browser to a world-class SEO expert. It knows your page, your schema, and your technical stack before you even ask.",
        cta: "Unlock the AI Expert — 10 Free Credits"
      },
      problem: {
        title: "Standard AI doesn't have your data.",
        body: "ChatGPT and Claude can't see your live dev environment, your private staging sites, or your malformed temporary schema. SearchToolbox can."
      },
      differentiation: {
        title: "The AI Built for Technical SEOs",
        items: [
          { title: "Context is Everything", desc: "We pipe the live DOM state directly into the LLM context." },
          { title: "No Copy-Paste", desc: "The agent already has the data. Just ask \"What's wrong with this page?\"." },
          { title: "Actionable Advice", desc: "It doesn't just list errors; it writes the fixes for you." }
        ]
      },
      modes: {
        title: "Adaptive Intelligence",
        items: [
          { title: "Beginner", desc: "Human-friendly explanations. Learn the \"why\" behind every SEO rule." },
          { title: "Intermediate", desc: "Best practices and scaling strategies for growing domains." },
          { title: "Expert SEO", desc: "Deep technical audits, schema nesting, and large-scale architectural fixes." }
        ]
      },
      benefits: {
        title: "Why Experts Choose SearchToolbox AI",
        items: [
          { title: "10x Faster Audits", desc: "Let the AI triage issues while you focus on strategy." },
          { title: "Local Awareness", desc: "Works on localhost, staging, and authenticated sessions." },
          { title: "Continuous Training", desc: "Our engine is updated weekly with the latest SEO trends." }
        ]
      },
      useCases: {
        title: "Real-World Scenarios",
        items: [
          { title: "Migration Audits", desc: "Ask the agent to compare live vs. staging during a sensitive move." },
          { title: "Schema Debugging", desc: "Instantly find why a nested JSON-LD block is failing validation." },
          { title: "Competitor Intel", desc: "Audit competitor landing pages to reverse-engineer their success." }
        ]
      },
      finalCta: {
        title: "Your Assistant is Waiting.",
        body: "Join 5,000+ SEOs who have stopped doing manual data extraction.",
        cta: "Install Extension Free"
      },
      faq: [
        { q: "Can it see password-protected pages?", a: "Yes. Since it runs inside your browser, it has access to anything you are currently viewing." },
        { q: "Does it share my source code?", a: "No. Page data is processed for the context of your chat and is never stored or used for model retraining." },
        { q: "What AI models do you use?", a: "We use a proprietary mix of frontier models (GPT-4o, Claude 3.5) fine-tuned on 10+ years of SEO data." }
      ]
    }
  },
  pricing: {
    meta: {
      title: "Simple, Transparent Pricing — SearchToolbox SEO",
      description: "Free forever for 60+ tools. Paid only for the AI Agent. Choose the plan that fits your audit volume."
    },
    headline: "Forever Free. Paid only for the AI.",
    subheadline: "60+ analysis tools, audits, PDF reports — all 100% free. The only paid part: an AI expert.",
    footer: "No card required for free tools · Cancel Pro anytime",
    trustHeadline: "Trusted by 5,000+ SEO Professionals",
    plans: [
      {
        name: "FREE",
        price: "0",
        period: "forever",
        features: [
          "10 AI credits to try",
          "All 60+ SEO analysis tools",
          "Schema & structured data audit",
          "Redirect chain tracing",
          "Hreflang audit",
          "PDF report generation"
        ],
        cta: "Install for free",
        popular: false
      },
      {
        name: "PRO",
        price: "9",
        period: "month",
        badge: "Most popular",
        features: [
          "AI SEO Expert — reads your actual page data",
          "Contextual answers: knows your audit results",
          "Adapts to your level (beginner → expert)",
          "GEO / AI search visibility analysis",
          "150 expert analyses per month",
          "Multilingual support (EN/FR/DE/IT)"
        ],
        cta: "Unlock the AI Expert",
        popular: true
      },
      {
        name: "PRO ANNUAL",
        price: "79",
        period: "year",
        badge: "Save 27%",
        features: [
          "Everything in Pro, billed annually",
          "1800 expert analyses per year",
          "Best value for daily SEO work",
          "Priority support"
        ],
        cta: "Start Annual",
        popular: false
      }
    ]
  },
  faq: {
    eyebrow: "Common Questions",
    headline: "Everything You Need to Know",
    items: [
      { q: "Is SearchToolbox free?", a: "Yes. Over 60 SEO analysis tools, audits, and PDF reports are completely free with no account required. The only paid feature is the AI SEO Expert." },
      { q: "How is the AI different from ChatGPT?", a: "Generic AI tools make educated guesses about your page. The AI Expert reads the real data (schema, meta tags, redirect chains, etc.) to give specific, actionable recommendations." },
      { q: "Which browsers are supported?", a: "It works on all Chromium-based browsers, including Chrome, Edge, Brave, and Arc." },
      { q: "Does it work on any website?", a: "Yes, including localhost, staging environments, and password-protected pages. It analyzes the live DOM, supporting JavaScript content." },
      { q: "How is it different from DevTools?", a: "SearchToolbox is purpose-built for SEO workflows, featuring structured data validation, redirect chain tracing, and instant PDF reports." },
      { q: "Is my data private?", a: "Yes. SearchToolbox runs entirely in your browser. No page content or URL data is sent to external servers; your audits are fully local." },
      { q: "Can I export or share reports?", a: "Yes. You can download reports as PDFs or open them in a standalone, shareable URL." },
      { q: "Can I hide tabs I don't use?", a: "Yes, the Settings panel allows you to hide any tab, set a default landing tab, and customize the context menu." },
      { q: "Does the SERP VPN route my real traffic?", a: "No. It spoofs browser headers and geolocation signals to simulate regional results without routing your network traffic." }
    ]
  },
  spotlight: [
    {
      eyebrow: "Semantic Mastery",
      title: "Analyze content like a search engine.",
      body: "Get a real-time semantic score. Check keyword density, title performance, and meta-tag optimization in one view.",
      bullets: ["Live scoring", "Character count alerts", "Keyword extraction"]
    },
    {
      eyebrow: "Technical Precision",
      title: "Catch silent errors before they rank.",
      body: "From robots.txt to canonical conflicts, SearchToolbox reveals the technical signals that search engines use to judge your site.",
      bullets: ["Robots.txt validator", "Canonical checker", "Indexability status"]
    },
    {
      eyebrow: "Schema Validation",
      title: "Rich snippets made easy.",
      body: "Extract and validate JSON-LD instantly. Find nesting errors and missing required properties without leaving the page.",
      bullets: ["JSON-LD extractor", "Schema validation", "Nesting visualizer"]
    }
  ],
  video: {
    eyebrow: "Watch it in action",
    headline: "The ultimate SEO companion",
    sub: "Analyze any page in seconds. From Dior to your local dev environment, SearchToolbox handles complex technical audits with ease."
  },
  contextMenu: {
    eyebrow: "Power at your fingertips",
    headline: "The right-click SEO toolkit",
    sub: "30+ professional actions available instantly from your browser menu. No need to toggle panels."
  },
  allFeatures: {
    eyebrow: "Deep Dive",
    headline: "Every tool you'll ever need",
    sub: "Engineered for technical SEOs, agencies, and performance marketers.",
    placeholder: "Search for a tool (e.g. \"schema\", \"redirect\")..."
  },
  cta: {
    quote: "\"The most powerful SEO extension I've ever used. It replaced 4 other tools and my audit speed doubled.\"",
    stats: [
      { value: "5k+", label: "Active Users" },
      { value: "60+", label: "Tech Tools" },
      { value: "100%", label: "Privacy" }
    ],
    headline: "Ready to dominate the SERPs?",
    cta: "Add to Chrome — It's Free",
    ctaSub: "No credit card · Instant access"
  },
  footer: {
    privacy: "Privacy Policy",
    store: "Chrome Web Store",
    rights: "© {year} SearchToolbox SEO. All rights reserved."
  },
  legal: {
    privacy: {
      title: "Privacy Policy",
      lastUpdated: "Last updated: March 26, 2026",
      introduction: "Welcome to SEO & GEO Toolkit. Your privacy is not a 'feature'—it is a core pillar of our product architecture. This policy describes how we collect, use, and protect your data across our website, Chrome Extension, and account system.",
      sections: [
        { title: "1. The 'Local-First' Architecture", content: "95% of our technical audits occur entirely within your local browser. We do not transmit page content to our servers for general analysis; it is discarded when you close the session." },
        { title: "2. Data We Collect", content: "We collect only what is necessary: Email and identity metadata (via Supabase), and Subscription status confirmation (via Stripe). We do not store credit card details." },
        { title: "3. AI Agent Data", content: "When using the AI SEO Expert, specific HTML fragments and your prompts are processed to generate recommendations. This data is never used to train base AI models." },
        { title: "4. Chrome Store Protection", content: "We strictly adhere to the Google Chrome Web Store User Data Policy. We do not sell data to third parties or use it for advertising purposes." },
        { title: "5. Data Security & Hosting", content: "All data is encrypted in transit (TLS 1.2+) and at rest (AES-256). We use trusted sub-processors like Supabase, Stripe, and Vercel." },
        { title: "6. Your Rights & Retention", content: "You have the right to access, export, or delete your account at any time via your Dashboard. We respect GDPR-style transparency for all users." },
        { title: "7. Contact", content: "For legal or privacy inquiries: devtool.genius@gmail.com" }
      ]
    },
    terms: {
      title: "Terms of Use",
      lastUpdated: "Last updated: March 26, 2026",
      introduction: "By accessing SEO & GEO Toolkit, installing our Chrome Extension, or creating an account, you enter into a legally binding agreement to comply with these Terms of Use.",
      sections: [
        { title: "1. Eligibility & Accounts", content: "One user per account. You are responsible for safeguarding your credentials and all activity occurring under your account." },
        { title: "2. Subscriptions & AI Credits", content: "Paid plans unlock the AI Agent. Credits expire at the end of each cycle and are non-refundable once consumed. Cancel anytime in Dashboard." },
        { title: "3. Acceptable Use Policy", content: "Lawful use only. No reverse engineering, scraping abuse, or automated credit exhaustion is permitted." },
        { title: "4. Intellectual Property", content: "The SEO & GEO Toolkit brand, mascots, algorithms, and UI are our exclusive property. We grant you a limited license for professional use." },
        { title: "5. Disclaimers & Results", content: "SEO is complex; we provide the tool 'AS IS' and do not guarantee ranking improvements or specific commercial outcomes." },
        { title: "6. Limitation of Liability", content: "We are not liable for indirect damages or loss of rankings. Total liability is limited to the amount paid in the last 12 months." },
        { title: "7. Governing Law", content: "These terms are governed by local laws where the service is registered. Contact: devtool.genius@gmail.com" }
      ]
    }
  },
  account: {
    signOut: "Sign out",
    currentPlan: "Current Plan",
    active: "Active",
    pastDue: "Past due",
    aiCredits: "AI Credits",
    remaining: "Remaining",
    upgradePro: "Upgrade to Pro",
    manageBilling: "Manage Billing",
    reactivate: "Reactivate",
    paymentFailed: "Payment failed",
    paymentFailedDesc: "Your last payment couldn't be processed. Update your card to keep your plan active.",
    fixNow: "Fix now",
    cancelled: "Subscription cancelled",
    cancelledDesc: "Your {plan} plan stays active until {date}, then reverts to Free.",
    memberSince: "Member since",
    chromeExtension: "Chrome Extension",
    synced: "SEO & GEO Toolkit · SYNCED",
    waiting: "SEO & GEO Toolkit · Waiting for handshake",
    linking: "Linking in progress...",
    linkFailed: "Sync Failed",
    linkSuccess: "Extension Linked Successfully!",
    linkSuccessDesc: "You can now close this window and return to the extension.",
    closeWindow: "Close Window",
    tryAgain: "Try Again",
    open: "Open",
    monthly: "Monthly",
    annual: "Annual",
    renews: "Renews",
    ends: "Ends",
    levelUp: "Level Up Your Toolkit",
    levelUpSub: "Save 27% with yearly billing. Unlimited generations, higher limits, and priority expert support.",
  }
}

const fr: typeof en = {
  nav: {
    home: "Accueil",
    features: "Outils",
    howItWorks: "Comment ça marche",
    faq: "FAQ",
    pricing: "Tarifs",
    install: "Ajouter à Chrome",
    agent: "AGENT IA",
    langToggle: "FR",
    aiExpert: "Expert IA",
    aiAssistantBadge: "Agent SEO IA"
  },
  home: {
    meta: {
      title: "SEARCHTOOLBOX — La seule extension SEO qu'il vous faut | 60+ Outils",
      description: "Auditez vos schémas, tracez les redirections et vérifiez les hreflang avec une seule extension Chrome. Plus de 60 outils SEO techniques gratuits."
    }
  },
  hero: {
    eyebrow: "Extension Chrome Native · 100% Privé · Pas de clé API",
    headline: "SEARCHTOOLBOX",
    sub: "Arrêtez de jongler avec 10 extensions. Une barre latérale puissante pour auditer schema, tracer les redirections, vérifier hreflang et géo-simuler vos positions — instantanément.",
    cta: "Ajouter à Chrome — Gratuit",
    ctaSub: "Accès immédiat · Fonctionne en localhost & staging",
    demoCta: "Voir la démo",
    badge: "Extension Chrome · Bêta",
    featureCards: {
      audit: { title: "Audit On-Page", desc: "Identifiez les erreurs en millisecondes." },
      redirect: { title: "Traceur Redirect", desc: "Tracez toute la chaîne, instantanément." },
      schema: { title: "Validateur Schema", desc: "Validation JSON-LD simplifiée." }
    }
  },
  benefits: {
    eyebrow: "Couverture Complète",
    headline: "Chaque outil dont un SEO a besoin. Sans exception.",
    sub: "60+ outils couvrant chaque dimension du SEO — sémantique, technique, netlinking, toolbox — dans un seul panneau Chrome.",
    groups: [
      { icon: '◉', label: 'Sémantique', count: 15, items: ['Vue d\'ensemble', 'Score Titre & Meta', 'Vérif Canonique', 'Parser Robots Meta', 'Hiérarchie H1–H6', 'Extracteur JSON-LD', 'Parser Hreflang', 'Vérif Liens de Retour', 'Validateur Langue', 'Variantes d\'URL'] },
      { icon: '⊖', label: 'Technique', count: 14, items: ['Lecteur Robots.txt', 'Header X-Robots-Tag', 'Détection HTTPS', 'Traceur de Redirections', 'Timing Redirect', 'Audit Alt Images', 'Format Image (WebP)', 'Image ZIP Export', 'Image CSV Export', 'JS Render Diff'] },
      { icon: '⇄', label: 'Netlinking', count: 7, items: ['Liste des Liens', 'Détection Nofollow', 'Tags Spousored & UGC', 'Audit Liens Externes', 'Link CSV Export', 'Link Grabber', 'Text Grabber'] },
      { icon: '🌐', label: 'Boîte à Outils', count: 16, items: ['Géo-Sim SERP VPN', 'Simulation Device', 'Opérateurs Google Dork', 'Contenu Dupliqué', 'Lien PageSpeed', 'Test Résultats Enrichis', 'Ahrefs / Semrush / Moz', 'Gestionnaire Cookies', 'Switcher User Agent', 'Rapport SEO Pondéré', 'PDF Export', 'Viewport Screenshot'] },
      { icon: '⌨', label: 'Toolbar & UX', count: 9, items: ['Toggle JavaScript', 'Preview Mobile', 'Sélecteur Couleur', 'Overlay Transparent', 'Thème Sombre / Clair', 'Raccourcis Clavier', 'Sidebar Configurable', 'Chrome Side Panel', 'Menu Contextuel (30+ actions)'] }
    ],
    shortcuts: {
      title: "Raccourcis Clavier",
      body: "Chaque onglet accessible via un raccourci clavier configurable. Naviguez entre Overview, Schema, Redirects sans toucher la souris.",
      items: [
        { key: 'Alt+1', label: 'Overview' },
        { key: 'Alt+2', label: 'Balises H' },
        { key: 'Alt+3', label: 'Schema' },
        { key: 'Alt+4', label: 'Redirects' },
        { key: 'Alt+R', label: 'Rapport' }
      ]
    },
    problem: {
      eyebrow: "Le Problème",
      headline: "6 onglets ouverts pour un seul audit.",
      items: [
        { icon: '🗂', text: 'Sitemap ici, robots là, redirections ailleurs — le context-switching tue votre flow.' },
        { icon: '🔍', text: 'Hreflang cassé, canonical manquant, JSON-LD malformé — invisible jusqu\'à ce que ça coûte des positions.' },
        { icon: '📊', text: 'Chaque outil est un onglet, un compte, une interface. Terminé.' }
      ]
    },
    solution: {
      eyebrow: "SEARCHTOOLBOX",
      sub: "Un panneau, tout le reste disparaît.",
      items: [
        '60+ outils dans une seule sidebar Chrome',
        'Toutes les catégories SEO couvertes',
        '30+ raccourcis via clic-droit',
        'Raccourcis clavier configurables',
        'Zero compte, zero clé API',
        'Fonctionne sur chaque page'
      ],
      cta: "Installer Gratuitement →"
    },
    stats: [
      { value: '60+', label: 'Outils intégrés' },
      { value: '30+', label: 'Actions clic-droit' },
      { value: '150+', label: 'Termes au glossaire' },
      { value: '100%', label: 'Gratuit & Sans compte' },
    ]
  },
  comparison: {
    eyebrow: "Avant · Après",
    headline: "12 extensions ou 1 seule ?",
    sub: "La plupart des SEOs ont 10+ extensions installées. Search Toolbox remplace tout ça.",
    currentSetup: "Votre configuration actuelle",
    activeExtensions: "{count} extensions actives",
    painPoints: [
      { icon: '⏱', text: '~2h par audit · jongler entre 12 onglets' },
      { icon: '💸', text: 'Certaines extensions sont payantes' },
      { icon: '🐌', text: 'Chrome ralenti par ces extensions' }
    ],
    oneExtensionOnly: "1 seule extension",
    gains: [
      { icon: '⚡', text: '~5 min par audit · tout dans un seul panel' },
      { icon: '🆓', text: '100% gratuit, sans compte requis' },
      { icon: '🚀', text: 'Chrome plus rapide, moins d\'extensions' }
    ],
    drag: "Glissez",
    before: "Avant",
    after: "Après",
    footerNote: "✦ La dernière extension SEO que vous installerez jamais ✦"
  },
  liveDemo: {
    eyebrow: "Démo Interactive",
    headline: "Testez sur n'importe quel site",
    sub: "Sélectionnez un site et regardez l'extension analyser la page en conditions réelles.",
    lockNote: "🔒 Pour analyser votre propre site, installez l'extension Chrome gratuite.",
    cta: "Installer Gratuitement — Chrome →"
  },
  proof: {
    label: "Propulsé par les meilleurs experts SEO en agence",
  },
  problem: {
    eyebrow: "Le Problème",
    headline: "Chaque audit SEO ressemble à l'assemblage d'un meuble IKEA sans la notice",
    sub: "Vous savez ce qu'il faut vérifier. Mais vos outils sont éparpillés, votre flux est cassé, et l'horloge tourne.",
    pains: [
      {
        icon: "⏱",
        title: "Fatigue du changement de contexte",
        body: "Ouvrir 5 onglets pour une seule page. Chaque changement casse votre flux et masque l'essentiel.",
      },
      {
        icon: "🔍",
        title: "Les Erreurs Invisibles",
        body: "Passer à côté de tags hreflang cassés ou d'un JSON-LD malformé qui coûte des millions de visites.",
      },
      {
        icon: "📉",
        title: "L'Enfer des Rapports",
        body: "Construire des audits manuellement. Vous devriez corriger les problèmes, pas les documenter sur Excel.",
      },
    ],
  },
  solution: {
    eyebrow: "La Solution",
    headline: "Une Barre Latérale.\nMaîtrise SEO Totale.",
    sub: "SearchToolbox vit là où vous travaillez : le navigateur. Il extrait chaque signal technique en temps réel. Pas de login, pas de complexité.",
    cta: "Installer SearchToolbox Gratuitement",
  },
  features: {
    eyebrow: "La Boîte à Outils",
    headline: "60+ Outils Pro. Un Clic.",
    sub: "Conçu pour les SEO qui exigent vitesse et précision.",
    items: [
      {
        icon: "◉", color: "#a78bfa", label: "Sémantique",
        title: "Audit Sémantique",
        desc: "Analyse profonde des titres, méta descriptions et densité sémantique. Score en temps réel.",
      },
      {
        icon: "¶", color: "#a78bfa", label: "Technique",
        title: "Audit Technique",
        desc: "Inspectez robots.txt, X-Robots-Tag et variantes canoniques. Bloquez les erreurs d'indexation.",
      },
      {
        icon: "⬢", color: "#a78bfa", label: "UX",
        title: "Schema & Données Structurées",
        desc: "Extraction et validation JSON-LD, Microdata et RDFa avec surbrillance syntaxique.",
      },
      {
        icon: "⇄", color: "#a78bfa", label: "Navigation",
        title: "Traceur de Redirections",
        desc: "Suivez les sauts 301/302, mesurez le temps de réponse et détectez les boucles.",
      },
      {
        icon: "🌐", color: "#a78bfa", label: "Global",
        title: "Auditeur Hreflang",
        desc: "Vérifiez les tags de retour, les codes langue et le x-default. Crucial pour l'international.",
      },
      {
        icon: "📋", color: "#a78bfa", label: "Rapports",
        title: "Rapports PDF Instantanés",
        desc: "Générez des scores SEO et exportez des audits PDF pros en moins de 10 secondes.",
      }
    ],
  },
  howItWorks: {
    eyebrow: "Onboarding Rapide",
    headline: "De l'Installation à l'Audit en 60s",
    steps: [
      {
        num: "01",
        title: "Installation en 1 clic",
        body: "Disponible sur le Chrome Web Store. Aucun compte requis pour commencer.",
      },
      {
        num: "02",
        title: "Ouvrez la Sidebar",
        body: "Utilisez le raccourci ou cliquez sur l'icône. SearchToolbox analyse la page instantanément.",
      },
      {
        num: "03",
        title: "Demandez à l'Expert",
        body: "Laissez l'IA guider votre audit ou utilisez les outils manuels pour une analyse profonde.",
      },
    ],
  },
  aiAgent: {
    homepage: {
      eyebrow: "Assistant SEO IA",
      headline: "La Seule IA Qui Lit Vraiment Votre Page.",
      subheadline: "La plupart des bots sont aveugles à votre code. SearchToolbox analyse votre DOM live et votre code source pour donner des conseils qui fonctionnent vraiment.",
      features: [
        { title: "Conscience du DOM", desc: "Ne devine pas — lit votre HTML et vos Données Structurées." },
        { title: "Fixes Techniques", desc: "Obtenez des fragments de code pour corriger les erreurs." },
        { title: "Savoir Expert", desc: "Propulsé par la documentation Google Search la plus récente." },
        { title: "Zéro Latence", desc: "Analyse instantanée directement dans votre barre latérale." }
      ],
      primaryCta: "Tester l'Agent IA",
      secondaryCta: "En savoir plus",
      chat: {
        user: "Analysez le contenu de ma page d'accueil pour le mot-clé 'Expert SEO'.",
        scanning: "Lecture du DOM en cours... 73 balises analysées.",
        response: "Votre H1 contient le mot-clé, mais votre méta-description est trop courte. Je recommande d'ajouter : 'Audit Technique'."
      }
    },
    page: {
      meta: {
        title: "Agent IA SEO Personnel — Votre Expert On-Page | SearchToolbox",
        description: "Découvrez le premier agent IA SEO sensible au contexte. Il lit votre page, identifie les bloqueurs et donne des conseils experts instantanément."
      },
      hero: {
        headline: "Arrêtez de deviner. Pilotez votre SEO par IA.",
        subheadline: "SearchToolbox connecte votre navigateur à un expert SEO de classe mondiale. Il connaît votre page avant même que vous ne posiez la question.",
        cta: "Débloquer l'Expert IA — 10 Crédits Gratuits"
      },
      problem: {
        title: "L'IA standard n'a pas vos données.",
        body: "ChatGPT ne voit pas votre environnement dev, vos sites staging ou votre schema temporaire malformé. SearchToolbox, oui."
      },
      differentiation: {
        title: "L'IA conçue pour les SEO Techniques",
        items: [
          { title: "Le Contexte est Roi", desc: "Nous injectons le DOM live directement dans le contexte de l'IA." },
          { title: "Zéro Copier-Coller", desc: "L'agent a déjà les données. Demandez juste : \"C'est quoi le problème ici ?\"." },
          { title: "Conseils Actionnables", desc: "Il ne liste pas juste les erreurs ; il écrit les correctifs pour vous." }
        ]
      },
      modes: {
        title: "Intelligence Adaptative",
        items: [
          { title: "Débutant", desc: "Explications claires. Apprenez le \"pourquoi\" derrière chaque règle SEO." },
          { title: "Intermédiaire", desc: "Meilleures pratiques et stratégies de scaling pour sites en croissance." },
          { title: "Expert SEO", desc: "Audits techniques profonds, schema complexes et optimisation d'architecture." }
        ]
      },
      benefits: {
        title: "Pourquoi les Experts Choisissent SearchToolbox",
        items: [
          { title: "Audits 10x Plus Rapides", desc: "Laissez l'IA trier les problèmes pendant que vous gérez la stratégie." },
          { title: "Conscience Locale", desc: "Fonctionne sur localhost, staging et sessions authentifiées." },
          { title: "Mise à Jour Hebdomadaire", desc: "Notre moteur suit les dernières tendances de l'algorithme Google." }
        ]
      },
      useCases: {
        title: "Cas d'Usage Réels",
        items: [
          { title: "Audits de Migration", desc: "Demandez à l'agent de comparer le live et le staging pendant un move." },
          { title: "Débogage Schema", desc: "Trouvez instantanément pourquoi un bloc JSON-LD ne valide pas." },
          { title: "Analyse Concurrentielle", desc: "Auditez les pages concurrentes pour comprendre leur succès." }
        ]
      },
      finalCta: {
        title: "Votre Assistant vous attend.",
        body: "Rejoignez 5,000+ SEO qui ont arrêté l'extraction manuelle.",
        cta: "Installer l'Extension Gratuitement"
      },
      faq: [
        { q: "Peut-il voir les pages protégées ?", a: "Oui. Comme il tourne dans votre navigateur, il accède à tout ce que vous visualisez." },
        { q: "Partage-t-il mon code source ?", a: "Non. Les données sont traitées pour le contexte de votre chat et ne sont jamais stockées." },
        { q: "Quels modèles d'IA utilisez-vous ?", a: "Un mix de GPT-4o and Claude 3.5 optimisé pour les problématiques SEO." }
      ]
    }
  },
  pricing: {
    meta: {
      title: "Tarifs Simples et Transparents — SearchToolbox SEO",
      description: "60+ outils gratuits à vie. Payez uniquement pour l'Agent IA. Choisissez le forfait qui vous convient."
    },
    headline: "Gratuit à vie. Payez seulement pour l'IA.",
    subheadline: "60+ outils d'analyse, audits, rapports PDF — tout est 100% gratuit. La seule partie payante : un expert IA.",
    footer: "Pas de carte requise pour les outils gratuits · Annulez Pro quand vous voulez",
    trustHeadline: "Utilisé par +5 000 Pros du SEO",
    plans: [
      {
        name: "GRATUIT",
        price: "0",
        period: "à vie",
        features: [
          "10 crédits IA pour tester",
          "Tous les 60+ outils SEO",
          "Audit Schema & données structurées",
          "Traceur de chaînes de redirection",
          "Audit Hreflang complet",
          "Génération de rapports PDF"
        ],
        cta: "Installer gratuitement",
        popular: false
      },
      {
        name: "PRO",
        price: "9",
        period: "mois",
        badge: "Le plus populaire",
        features: [
          "Expert SEO IA — lit vos données réelles",
          "Réponses contextuelles liées à vos audits",
          "S'adapte à votre niveau (débutant → expert)",
          "Analyse de visibilité GEO / IA",
          "150 analyses expertes par mois",
          "Support multilingue (EN/FR/DE/IT)"
        ],
        cta: "Débloquer l'Expert IA",
        popular: true
      },
      {
        name: "PRO ANNUEL",
        price: "79",
        period: "an",
        badge: "Économisez 27%",
        features: [
          "Tout ce qui est en Pro, facturé annuellement",
          "1800 analyses expertes par an",
          "Meilleure offre pour le SEO quotidien",
          "Support prioritaire"
        ],
        cta: "Passer à l'Annuel",
        popular: false
      }
    ]
  },
  faq: {
    eyebrow: "Questions Fréquentes",
    headline: "Tout ce que vous devez savoir",
    items: [
      { q: "Est-ce que SearchToolbox est gratuit ?", a: "Oui. Plus de 60 outils, audits et rapports PDF sont gratuits sans compte. Seul l'Expert IA SEO est une fonctionnalité payante." },
      { q: "Quelle différence avec ChatGPT ?", a: "ChatGPT devine. L'Expert IA lit les données réelles de votre page (schema, meta tags, redirections) pour donner des conseils précis." },
      { q: "Quels navigateurs sont supportés ?", a: "Tous les navigateurs basés sur Chromium : Chrome, Edge, Brave, Arc." },
      { q: "Cela fonctionne-t-il sur n'importe quel site ?", a: "Oui, y compris localhost, staging et pages protégées. L'extension analyse le DOM en direct." },
      { q: "Quelle differenza avec les DevTools ?", a: "SearchToolbox est conçu pour le SEO : validation de données structurées, tracé de redirections et rapports PDF instantanés." },
      { q: "Mes données sont-elles privées ?", a: "Oui. L'extension tourne localement dans votre navigateur. Aucune donnée de page n'est envoyée vers des serveurs externes." },
      { q: "Puis-je exporter mes rapports ?", a: "Oui. Téléchargez vos audits en PDF ou via une URL de partage dédiée." },
      { q: "Puis-je masquer les onglets inutiles ?", a: "Oui, le panneau Paramètres permet de personnaliser l'interface et le menu contextuel." },
      { q: "Le VPN SERP route-t-il mon trafic ?", a: "Non. Il simule les signaux de géolocalisation pour les résultats Google sans utiliser de serveur VPN externe." }
    ]
  },
  spotlight: [
    {
      eyebrow: "Maîtrise Sémantique",
      title: "Analysez le contenu comme un moteur de recherche.",
      body: "Obtenez un score sémantique en temps réel. Vérifiez la densité des mots-clés et l'optimisation des balises en un clic.",
      bullets: ["Scoring en direct", "Alertes longueur de texte", "Extraction de mots-clés"]
    },
    {
      eyebrow: "Précision Technique",
      title: "Détectez les erreurs avant l'indexation.",
      body: "Du robots.txt aux conflits de canoniques, SearchToolbox révèle les signaux techniques que Google utilise.",
      bullets: ["Validateur robots.txt", "Vérif de canoniques", "Statut d'indexation"]
    },
    {
      eyebrow: "Validation Schema",
      title: "Les rich snippets simplifiés.",
      body: "Extrayez et validez le JSON-LD instantanément. Trouvez les erreurs de structure sans quitter la page.",
      bullets: ["JSON-LD extracteur", "Validation Schema", "Visualiseur de structure"]
    }
  ],
  video: {
    eyebrow: "Regardez l'extension en action",
    headline: "Le compagnon SEO ultime",
    sub: "Analysez n'importe quelle page en quelques secondes. De Dior à votre environnement local, SearchToolbox gère vos audits complexes."
  },
  contextMenu: {
    eyebrow: "La puissance au bout des doigts",
    headline: "Le toolkit SEO du clic droit",
    sub: "30+ actions professionnelles disponibles instantanément. Pas besoin d'ouvrir de panneau."
  },
  allFeatures: {
    eyebrow: "Analyse Profonde",
    headline: "Tous les outils dont vous avez besoin",
    sub: "Conçu pour les experts SEO, les agences et les marketeurs de performance.",
    placeholder: "Rechercher un outil (ex: \"schema\", \"redirect\")..."
  },
  cta: {
    quote: "\"L'extension SEO la plus puissante que j'ai jamais utilisée. Elle a remplacé 4 autres outils et ma vitesse d'audit a triplé.\"",
    stats: [
      { value: "5k+", label: "Utilisateurs" },
      { value: "60+", label: "Outils Pro" },
      { value: "100%", label: "Privé" }
    ],
    headline: "Prêt à dominer les SERPs ?",
    cta: "Ajouter à Chrome — Gratuit",
    ctaSub: "Pas de carte · Accès immédiat"
  },
  footer: {
    privacy: "Confidentialité",
    store: "Chrome Web Store",
    rights: "© {year} SearchToolbox SEO. Tous droits réservés."
  },
  legal: {
    privacy: {
      title: "Politique de Confidentialité",
      lastUpdated: "Dernière mise à jour : 26 mars 2026",
      introduction: "Bienvenue sur SEO & GEO Toolkit. Votre vie privée n'est pas une 'option'—c'est un pilier central de notre architecture. Cette politique décrit comment nous collectons, utilisons et protégeons vos données sur notre site, notre extension Chrome et nos services d'IA.",
      sections: [
        { title: "1. Architecture 'Local-First'", content: "95% de nos audits techniques se déroulent entièrement dans votre navigateur. Nous ne transmettons pas le contenu des pages pour analyse générale ; il est supprimé à la fermeture de la session." },
        { title: "2. Données Collectées", content: "Nous collectons uniquement le strict nécessaire : Email et métadonnées d'identité (via Supabase), et confirmation du statut d'abonnement (via Stripe). Nous ne stockons aucune coordonnée bancaire." },
        { title: "3. Données de l'Agent IA", content: "Lors de l'utilisation de l'Expert SEO IA, des fragments HTML spécifiques et vos questions sont traités pour générer des recommandations. Ces données ne sont jamais utilisées pour entraîner des modèles d'IA tiers." },
        { title: "4. Protection Chrome Store", content: "Nous respectons strictement la politique de données utilisateur du Chrome Web Store. Nous ne vendons aucune donnée à des tiers et ne les utilisons pas à des fins publicitaires." },
        { title: "5. Sécurité et Hébergement", content: "Toutes les données sont chiffrées en transit (TLS 1.2+) et au repos (AES-256). Nous utilisons des sous-traitants de confiance : Supabase, Stripe et Vercel." },
        { title: "6. Vos Droits et Rétention", content: "Vous avez le droit d'accéder, d'exporter ou de supprimer votre compte à tout moment via votre Tableau de Bord. Nous respectons la transparence RGPD pour tous nos utilisateurs." },
        { title: "7. Contact", content: "Pour toute question juridique ou relative à la vie privée : devtool.genius@gmail.com" }
      ]
    },
    terms: {
      title: "Conditions d'Utilisation",
      lastUpdated: "Dernière mise à jour : 26 mars 2026",
      introduction: "En accédant à SEO & GEO Toolkit, en installant notre extension Chrome ou en créant un compte, vous acceptez d'être lié par ces conditions d'utilisation.",
      sections: [
        { title: "1. Éligibilité et Comptes", content: "Un seul utilisateur par compte. Vous êtes responsable de la sécurité de vos identifiants et de toute activité effectuée sous votre compte." },
        { title: "2. Abonnements et Crédits IA", content: "Les forfaits payants débloquent l'Agent IA. Les crédits expirent à la fin de chaque cycle et ne sont pas remboursables une fois consommés. Annulation possible à tout moment." },
        { title: "3. Politique d'Usage Acceptable", content: "Usage licite uniquement. Toute tentative de rétro-ingénierie, de scraping abusif ou d'épuisement automatisé des crédits est strictement interdite." },
        { title: "4. Propriété Intellectuelle", content: "La marque SEO & GEO Toolkit, les mascottes, les algorithmes et l'interface sont notre propriété exclusive. Nous vous accordons une licence limitée pour un usage professionnel." },
        { title: "5. Limites et Résultats", content: "Le SEO est un domaine complexe ; nous fournissons l'outil 'EN L'ÉTAT' et ne garantissons aucune amélioration de classement ou résultat commercial spécifique." },
        { title: "6. Limitation de Responsabilité", content: "Nous ne sommes pas responsables des dommages indirects ou de la perte de positions. Notre responsabilité est limitée au montant payé au cours des 12 derniers mois." },
        { title: "7. Droit Applicable", content: "Ces conditions sont régies par les lois locales où le service est enregistré. Contact : devtool.genius@gmail.com" }
      ]
    }
  },
  account: {
    signOut: "Se déconnecter",
    currentPlan: "Forfait actuel",
    active: "Actif",
    pastDue: "Impayé",
    aiCredits: "Crédits IA",
    remaining: "Restants",
    upgradePro: "Passer à Pro",
    manageBilling: "Gérer l'abonnement",
    reactivate: "Réactiver",
    paymentFailed: "Paiement échoué",
    paymentFailedDesc: "Votre dernier paiement n'a pas pu être traité. Mettez à jour votre carte pour conserver votre abonnement.",
    fixNow: "Corriger",
    cancelled: "Abonnement annulé",
    cancelledDesc: "Votre forfait {plan} reste actif jusqu'au {date}, puis repasse en Gratuit.",
    memberSince: "Membre depuis",
    chromeExtension: "Extension Chrome",
    synced: "SEO & GEO Toolkit · SYNCHRONISÉ",
    waiting: "SEO & GEO Toolkit · En attente",
    linking: "Liaison en cours...",
    linkFailed: "Sync échoué",
    linkSuccess: "Extension liée avec succès !",
    linkSuccessDesc: "Vous pouvez fermer cette fenêtre et retourner à l'extension.",
    closeWindow: "Fermer",
    tryAgain: "Réessayer",
    open: "Ouvrir",
    monthly: "Mensuel",
    annual: "Annuel",
    renews: "Renouvèle",
    ends: "Expire",
    levelUp: "Améliorez votre boîte à outils",
    levelUpSub: "Économisez 27 % avec la facturation annuelle. Générations illimitées et support prioritaire.",
  }
}

const de: typeof en = {
  nav: {
    home: "Startseite",
    features: "Funktionen",
    howItWorks: "So funktioniert's",
    faq: "FAQ",
    pricing: "Preise",
    install: "Zu Chrome hinzufügen — Kostenlos",
    agent: "KI-AGENT",
    langToggle: "DE",
    aiExpert: "KI-Experte",
    aiAssistantBadge: "KI-SEO-Agent"
  },
  home: {
    meta: {
      title: "SEARCHTOOLBOX — Die letzte SEO-Erweiterung, die Sie brauchen | 60+ Tools",
      description: "Schema-Audits, Redirect-Tracking e Hreflang-Checks in einer Sidebar. Über 60 technische SEO-Tools direkt im Browser. 100% kostenlos."
    }
  },
  hero: {
    eyebrow: "Native Chrome-Erweiterung · 100% Datenschutz · Kein API-Key erforderlich",
    headline: "SEARCHTOOLBOX",
    sub: "Hören Sie auf, mit 10 Erweiterungen zu jonglieren. Eine leistungsstarke Sidebar zur Prüfung von Schema, Tracking von Weiterleitungen, Check von Hreflang und Analyse von Bildern — sofort auf jeder Seite.",
    cta: "Zu Chrome hinzufügen — Kostenlos",
    ctaSub: "Sofortiger Zugriff · Funktioniert auf Localhost & Dev-Sites",
    demoCta: "Demo ansehen",
    badge: "Chrome-Erweiterung · Beta",
    featureCards: {
      audit: { title: "On-Page Audit", desc: "Kritische Fehler in Millisekunden finden." },
      redirect: { title: "Redirect Tracer", desc: "Vollständige Kette sofort verfolgen." },
      schema: { title: "Schema Validator", desc: "JSON-LD-Validierung leicht gemacht." }
    }
  },
  benefits: {
    eyebrow: "Vollständige Abdeckung",
    headline: "Jedes Tool, das ein technischer SEO braucht. Ohne Ausnahme.",
    sub: "60+ Tools, die jede SEO-Dimension abdecken — Semantik, Technik, Netlinking, Toolbox — in einem einzigen Chrome-Panel.",
    groups: [
      { icon: '◉', label: 'Semantik', count: 15, items: ['Seitenübersicht', 'Titel & Meta Scoring', 'Canonical Check', 'Robots Meta Parser', 'H1–H6 Hierarchie', 'JSON-LD Extraktor', 'Hreflang Auditor', 'Return Link Check', 'Sprach-Validierung', 'URL-Varianten'] },
      { icon: '⊖', label: 'Technisch', count: 14, items: ['Robots.txt Viewer', 'X-Robots-Tag Header', 'HTTPS Erkennung', 'Weiterleitungs-Tracer', 'Redirect Timing', 'Bild-Alt-Audit', 'Bild-Format (WebP)', 'Bild ZIP Export', 'Bild CSV Export', 'JS Render Diff'] },
      { icon: '⇄', label: 'Netlinking', count: 7, items: ['Link-Auflistung', 'Nofollow Erkennung', 'Sponsored & UGC Tags', 'Externer Link Audit', 'Link CSV Export', 'Link Grabber', 'Text Grabber'] },
      { icon: '🌐', label: 'Toolbox', count: 16, items: ['SERP VPN Geo-Sim', 'Device Simulation', 'Google Dork Operatoren', 'Duplicate Content', 'PageSpeed Link', 'Rich Results Test', 'Ahrefs / Semrush / Moz', 'Cookie Manager', 'User Agent Switcher', 'Gewichteter SEO-Bericht', 'PDF Export', 'Viewport Screenshot'] },
      { icon: '⌨', label: 'Toolbar & UX', count: 9, items: ['JavaScript Toggle', 'Mobile Vorschau', 'Farbpipette', 'Transparentes Overlay', 'Dunkel / Hell Theme', 'Tastatur-Kürzel', 'Konfigurierbare Sidebar', 'Chrome Side Panel', 'Kontext-Menü (30+ Aktionen)'] }
    ],
    shortcuts: {
      title: "Tastatur-Kürzel",
      body: "Jeder Tab über ein konfigurierbares Tastatur-Kürzel erreichbar. Navigieren Sie zwischen Übersicht, Schema, Weiterleitungen, ohne die Maus zu berühren.",
      items: [
        { key: 'Alt+1', label: 'Übersicht' },
        { key: 'Alt+2', label: 'Überschriften' },
        { key: 'Alt+3', label: 'Schema' },
        { key: 'Alt+4', label: 'Redirects' },
        { key: 'Alt+R', label: 'Bericht' }
      ]
    },
    problem: {
      eyebrow: "Das Problem",
      headline: "6 geöffnete Tabs für ein einziges Audit.",
      items: [
        { icon: '🗂', text: 'Schema-Validator hier, Robots-Checker dort, Redirect-Tracer woanders — Kontextwechsel killt Ihren Flow.' },
        { icon: '🔍', text: 'Defekte Hreflang, fehlende Canonical, fehlerhaftes JSON-LD — unsichtbar, bis es Rankings kostet.' },
        { icon: '📊', text: 'Jedes Tool ist ein separater Tab, ein separates Konto, ein anderes UI. Schluss damit.' }
      ]
    },
    solution: {
      eyebrow: "SEARCHTOOLBOX",
      sub: "Ein Panel, alles andere ist weg.",
      items: [
        '60+ Tools in einer einzigen Chrome-Sidebar',
        'Jede SEO-Kategorie abgedeckt',
        '30+ Shortcuts über das Kontextmenü',
        'Voll konfigurierbare Tastatur-Kürzel',
        'Kein Konto, kein API-Key',
        'Funktioniert auf jeder besuchten Seite'
      ],
      cta: "Kostenlos installieren →"
    },
    stats: [
      { value: '60+', label: 'Integrierte Tools' },
      { value: '30+', label: 'Kontextmenü-Aktionen' },
      { value: '150+', label: 'SEO-Begriffe im Glossar' },
      { value: '100%', label: 'Kostenlos - kein Konto' },
    ]
  },
  comparison: {
    eyebrow: "Vorher · Nachher",
    headline: "12 Erweiterungen oder nur 1?",
    sub: "Die meisten SEOs haben 10+ Erweiterungen installiert. Search Toolbox ersetzt sie alle.",
    currentSetup: "Ihr aktuelles Setup",
    activeExtensions: "{count} aktive Erweiterungen",
    painPoints: [
      { icon: '⏱', text: '~2h pro Audit · Jonglieren mit 12 Tabs' },
      { icon: '💸', text: 'Einige Erweiterungen kosten Geld' },
      { icon: '🐌', text: 'Chrome durch Erweiterungen verlangsamt' }
    ],
    oneExtensionOnly: "Nur 1 Erweiterung",
    gains: [
      { icon: '⚡', text: '~5 Min pro Audit · alles in einem Panel' },
      { icon: '🆓', text: '100% kostenlos, kein Konto erforderlich' },
      { icon: '🚀', text: 'Schnelleres Chrome, weniger Erweiterungen' }
    ],
    drag: "Ziehen",
    before: "Vorher",
    after: "Nachher",
    footerNote: "✦ Die letzte SEO-Erweiterung, die Sie jemals installieren werden ✦"
  },
  liveDemo: {
    eyebrow: "Live-Demo",
    headline: "Sehen Sie es auf echten Websites in Aktion",
    sub: "Wählen Sie eine Website und sehen Sie, wie die Erweiterung die Seite unter realen Bedingungen analysiert.",
    lockNote: "🔒 Um Ihre eigene Website zu analysieren, installieren Sie die kostenlose Chrome-Erweiterung.",
    cta: "Kostenlos installieren — Chrome Store →"
  },
  proof: {
    label: "Unterstützt SEO-Experten der weltweit führenden Agenturen",
  },
  problem: {
    eyebrow: "Das Problem",
    headline: "Jedes SEO-Audit fühlt sich an wie das Zusammenbauen von IKEA-Möbeln ohne Anleitung",
    sub: "Sie wissen, was geprüft werden muss. Aber Ihre Tools sind verstreut, Ihr Workflow ist unterbrochen und die Zeit läuft davon.",
    pains: [
      {
        icon: "⏱",
        title: "Kontextwechsel-Ermüdung",
        body: "5 Tabs öffnen, nur um eine Seite zu prüfen. Jeder Wechsel unterbricht Ihren Fluss und verbirgt das Gesamtbild.",
      },
      {
        icon: "🔍",
        title: "Die \"unsichtbaren\" Fehler",
        body: "Fehlende Hreflang-Rückgabewerte oder fehlerhaftes JSON-LD, das Ihre Kunden Millionen an organischem Traffic kostet.",
      },
      {
        icon: "📉",
        title: "Bericht-Erstellungs-Hölle",
        body: "Manuelle Erstellung von Audits für Kunden. Sie sollten Probleme lösen, nicht sie in Tabellen dokumentieren.",
      },
    ],
  },
  solution: {
    eyebrow: "Die Lösung",
    headline: "Eine Sidebar.\nTotale SEO-Beherrschung.",
    sub: "SearchToolbox lebt dort, wo Sie arbeiten: im Browser. Es extrahiert jedes technische Signal in Echtzeit. Kein Login, keine Komplexität — nur die Erkenntnisse, die Sie benötigen.",
    cta: "Kostenlos installieren",
  },
  features: {
    eyebrow: "Die Toolbox",
    headline: "60+ Pro-Tools. Ein Klick.",
    sub: "Entwickelt für technische SEOs, die Geschwindigkeit und Präzision verlangen.",
    items: [
      {
        icon: "◉", color: "#a78bfa", label: "Semantik",
        title: "Semantisches Audit",
        desc: "Tiefenanalyse von Titeln, Meta-Beschreibungen und semantischer Dichte. Echtzeit-Scoring.",
      },
      {
        icon: "¶", color: "#a78bfa", label: "Technisch",
        title: "Technisches Audit",
        desc: "Prüfen Sie robots.txt, X-Robots-Tag und kanonische Varianten. Fangen Sie Crawling-Probleme ab.",
      },
      {
        icon: "⬢", color: "#a78bfa", label: "UX",
        title: "Schema & Strukturierte Daten",
        desc: "Extraktion und Validierung von JSON-LD, Microdata und RDFa mit Syntax-Highlighting.",
      },
      {
        icon: "⇄", color: "#a78bfa", label: "Navigation",
        title: "Weiterleitungs-Tracer",
        desc: "Verfolgen Sie 301/302-Hops, messen Sie Antwortzeiten und erkennen Sie Schleifen.",
      },
      {
        icon: "🌐", color: "#a78bfa", label: "Global",
        title: "Hreflang-Auditor",
        desc: "Verifizieren Sie Return-Tags, Sprach-/Regionscodes und x-default. Entscheidend für internationales SEO.",
      },
      {
        icon: "📋", color: "#a78bfa", label: "Berichte",
        title: "Sofortige PDF-Berichte",
        desc: "Generieren Sie gewichtete SEO-Scores und exportieren Sie professionelle PDF-Audits in Sekunden.",
      }
    ],
  },
  howItWorks: {
    eyebrow: "Schnelles Onboarding",
    headline: "Vom Installieren zum Audit in 60s",
    steps: [
      {
        num: "01",
        title: "Ein-Klick-Installation",
        body: "Holen Sie es sich aus dem Chrome Web Store. Kein Account erforderlich.",
      },
      {
        num: "02",
        title: "Sidebar öffnen",
        body: "Nutzen Sie unseren Shortcut oder klicken Sie auf das Icon. Wir analysieren die Seite sofort.",
      },
      {
        num: "03",
        title: "Fragen Sie den Experten",
        body: "Lassen Sie den KI-Agenten Ihr Audit leiten oder nutzen Sie manuelle Tools für tiefe Analysen.",
      },
    ],
  },
  aiAgent: {
    homepage: {
      eyebrow: "KI-SEO-Assistent",
      headline: "Die einzige KI, die Ihre Seite wirklich liest.",
      subheadline: "Die meisten KI-Bots sind blind für Ihren Code. Unser Agent analysiert das Live-DOM und den Quellcode für kontextbewusste Lösungen.",
      features: [
        { title: "DOM-Aware", desc: "Rät nicht nur — liest Ihr tatsächliches HTML und Schema." },
        { title: "Technische Fixes", desc: "Erhalten Sie Code-Snippets, um identifizierte Probleme zu lösen." },
        { title: "Expertenwissen", desc: "Basierend auf der neuesten Google Search Dokumentation." },
        { title: "Null Latenz", desc: "Sofortige Analyse auf Seitenebene direkt in Ihrer Sidebar." }
      ],
      primaryCta: "KI-Agent testen",
      secondaryCta: "Mehr erfahren",
      chat: {
        user: "Analysieren Sie den Inhalt meiner Homepage für das Keyword 'SEO Expert'.",
        scanning: "DOM-Scan läuft... 73 Tags analysiert.",
        response: "Ihre H1 enthält das Keyword, aber Ihre Meta-Beschreibung ist zu kurz. Ich empfehle das Hinzufügen von: 'Technisches Audit'."
      }
    },
    page: {
      meta: {
        title: "Persönlicher SEO KI-Agent — Ihr On-Page Experte | SearchToolbox",
        description: "Lernen Sie den ersten kontextbewussten KI-SEO-Agenten kennen. Er liest Ihre Seite und identifiziert technische Blockaden sofort."
      },
      hero: {
        headline: "Hören Sie auf zu raten. Prompten Sie Ihr SEO.",
        subheadline: "SearchToolbox verbindet Ihren Browser mit einem Weltklasse-SEO-Experten. Er kennt Ihre Seite, bevor Sie überhaupt fragen.",
        cta: "KI-Experten freischalten — 10 Gratis-Credits"
      },
      problem: {
        title: "Standard-KI hat Ihre Daten nicht.",
        body: "ChatGPT und Claude können Ihre Staging-Sites oder fehlerhaftes Schema nicht sehen. SearchToolbox kann es."
      },
      differentiation: {
        title: "Die KI für technische SEOs",
        items: [
          { title: "Kontext ist alles", desc: "Wir leiten den Live-DOM-Status direkt in den KI-Kontext." },
          { title: "Kein Copy-Paste", desc: "Der Agent hat bereits die Daten. Fragen Sie einfach: \"Was ist hier falsch?\"." },
          { title: "Handelbare Ratschläge", desc: "Listet nicht nur Fehler; schreibt die Fixes für Sie." }
        ]
      },
      modes: {
        title: "Adaptive Intelligenz",
        items: [
          { title: "Anfänger", desc: "Nutzerfreundliche Erklärungen. Lernen Sie das \"Warum\" hinter jeder SEO-Regel." },
          { title: "Fortgeschritten", desc: "Best Practices und Strategien für wachsende Domains." },
          { title: "Experte", desc: "Tiefe technische Audits und komplexe Architektur-Fixes." }
        ]
      },
      benefits: {
        title: "Warum Experten SearchToolbox wählen",
        items: [
          { title: "10x schnellere Audits", desc: "Überlassen Sie der KI die Triage, während Sie sich auf die Strategie konzentrieren." },
          { title: "Lokales Bewusstsein", desc: "Funktioniert auf Localhost, Staging und geschützten Sitzungen." },
          { title: "Wöchentliche Updates", desc: "Unsere Engine wird wöchentlich mit den neuesten SEO-Trends aktualisiert." }
        ]
      },
      useCases: {
        title: "Echte Szenarien",
        items: [
          { title: "Migrations-Audits", desc: "Vergleichen Sie Live vs. Staging während eines sensiblen Umzugs." },
          { title: "Schema-Debugging", desc: "Finden Sie sofort heraus, warum ein JSON-LD-Block ungültig ist." },
          { title: "Wettbewerber-Check", desc: "Auditieren Sie Wettbewerber-Seiten, um deren Erfolg zu kopieren." }
        ]
      },
      finalCta: {
        title: "Ihr Assistent wartet.",
        body: "Werden Sie Teil von 5.000+ SEOs, die aufgehört haben, Daten manuell zu extrahieren.",
        cta: "Kostenlos installieren"
      },
      faq: [
        { q: "Kann er passwortgeschützte Seiten sehen?", a: "Ja. Da er im Browser läuft, hat er Zugriff auf alles, was Sie sehen." },
        { q: "Wird mein Quellcode geteilt?", a: "Nein. Daten werden nur für den Kontext Ihres Chats verarbeitet und nie gespeichert." },
        { q: "Welche KI-Modelle nutzen Sie?", a: "Ein Mix aus GPT-4o und Claude 3.5, optimiert für SEO-Daten." }
      ]
    }
  },
  pricing: {
    meta: {
      title: "Einfache, transparente Preise — SearchToolbox SEO",
      description: "60+ Tools für immer kostenlos. Bezahlt wird nur für den KI-Agenten."
    },
    headline: "Für immer kostenlos. Bezahlt wird nur für die KI.",
    subheadline: "60+ Analyse-Tools, Audits, PDF-Berichte — alles 100% kostenlos. Der einzige bezahlte Teil: ein KI-Experte.",
    footer: "Keine Kreditkarte erforderlich für kostenlose Tools · Pro jederzeit kündbar",
    trustHeadline: "Wird von über 5.000 SEO-Profis genutzt",
    plans: [
      {
        name: "FREE",
        price: "0",
        period: "für immer",
        features: [
          "10 KI-Credits zum Testen",
          "Alle 60+ SEO-Analyse-Tools",
          "Schema & strukturierte Daten Audit",
          "Weiterleitungs-Tracking",
          "Hreflang-Audit",
          "PDF-Bericht Erstellung"
        ],
        cta: "Kostenlos installieren",
        popular: false
      },
      {
        name: "PRO",
        price: "9",
        period: "Monat",
        badge: "Am beliebtesten",
        features: [
          "KI-SEO-Experte — liest Ihre Live-Daten",
          "Kontextuelle Antworten auf Ihre Audits",
          "Analysen für GEO/KI-Sichtbarkeit",
          "150 Experten-Analysen pro Monat",
          "Mehrsprachiger Support (EN/FR/DE/IT)"
        ],
        cta: "KI-Experten freischalten",
        popular: true
      },
      {
        name: "PRO JÄHRLICH",
        price: "79",
        period: "Jahr",
        badge: "27% sparen",
        features: [
          "Alles in Pro, jährlich abgerechnet",
          "1800 Experten-Analysen pro Jahr",
          "Bester Wert für tägliche SEO-Arbeit",
          "Prioritäts-Support"
        ],
        cta: "Jährlich starten",
        popular: false
      }
    ]
  },
  faq: {
    eyebrow: "Häufige Fragen",
    headline: "Alles, was Sie wissen müssen",
    items: [
      { q: "Ist SearchToolbox kostenlos?", a: "Ja. Über 60 SEO-Analyse-Tools und PDF-Berichte sind völlig kostenlos ohne Account." },
      { q: "Wie unterscheidet sich die KI von ChatGPT?", a: "Standard-KI rät oft. Unser Experten-KI liest die realen Daten Ihrer Seite für präzise Empfehlungen." },
      { q: "Welche Browser werden unterstützt?", a: "Alle Chromium-basierten Browser wie Chrome, Edge, Brave und Arc." },
      { q: "Funktioniert es auf jeder Website?", a: "Ja, inklusive Localhost, Staging und geschützten Seiten." }
    ]
  },
  spotlight: [
    {
      eyebrow: "Semantische Meisterschaft",
      title: "Inhalte analysieren wie eine suchmaschine.",
      body: "Erhalten Sie einen Echtzeit-Score. Prüfen Sie Keyword-Dichte und Meta-Tag Optimierung in einer Ansicht.",
      bullets: ["Live-Scoring", "Zeichenlimit-Warnungen", "Keyword-Extraktion"]
    },
    {
      eyebrow: "Technische Präzision",
      title: "Fehler finden, bevor sie ranken.",
      body: "Von robots.txt bis zu kanonischen Konflikten — wir zeigen die technischen Signale auf.",
      bullets: ["Robots.txt Validierung", "Kanonik-Prüfer", "Indexierbarkeits-Status"]
    },
    {
      eyebrow: "Schema Validierung",
      title: "Rich Snippets leicht gemacht.",
      body: "JSON-LD sofort extrahieren und validieren. Finden Sie Strukturfehler ohne die Seite zu verlassen.",
      bullets: ["JSON-LD Extraktor", "Schema Validierung", "Struktur-Visualisierung"]
    }
  ],
  video: {
    eyebrow: "In Aktion sehen",
    headline: "Der ultimative SEO-Begleiter",
    sub: "Analysieren Sie jede Seite in Sekunden. Von Dior bis zu Ihrer lokalen Dev-Umgebung."
  },
  contextMenu: {
    eyebrow: "Power auf Knopfdruck",
    headline: "Das Rechtsklick-SEO-Toolkit",
    sub: "30+ Profi-Aktionen direkt aus Ihrem Browsermenü verfügbar."
  },
  allFeatures: {
    eyebrow: "Deep Dive",
    headline: "Jedes Tool, das Sie jemals brauchen werden",
    sub: "Entwickelt für technische SEOs, Agenturen und Marketer.",
    placeholder: "Suche nach einem Tool (z.B. \"Schema\", \"Redirect\")..."
  },
  cta: {
    quote: "\"Die leistungsstärkste SEO-Erweiterung, die ich je benutzt habe. Sie hat 4 andere Tools ersetzt.\"",
    stats: [
      { value: "5k+", label: "Aktive Nutzer" },
      { value: "60+", label: "Tech-Tools" },
      { value: "100%", label: "Privat" }
    ],
    headline: "Bereit, die SERPs zu dominieren?",
    cta: "Kostenlos installieren",
    ctaSub: "Keine Kreditkarte · Sofortiger Zugriff"
  },
  footer: {
    privacy: "Datenschutz",
    store: "Chrome Web Store",
    rights: "© {year} SearchToolbox SEO. Alle Rechte vorbehalten."
  },
  legal: {
    privacy: {
      title: "Datenschutzerklärung",
      lastUpdated: "Zuletzt aktualisiert: 26. März 2026",
      introduction: "Willkommen beim SEO & GEO Toolkit. Wir verpflichten uns, Ihre Privatsphäre zu schützen und Transparenz über Ihre Daten zu gewährleisten.",
      sections: [
        { title: "1. Datenerhebung", content: "Wir erheben nur das Notwendige: E-Mail, Kontodaten und technische Protokolle zur Sicherheit." },
        { title: "2. Chrome-Zugriff", content: "Wir halten uns an die Google-Richtlinien für eingeschränkte Nutzung. Kein Datenverkauf oder Werbung." },
        { title: "3. Datenweitergabe", content: "Weitergabe nur an wichtige Dienstleister wie Supabase und Stripe." },
        { title: "4. Ihre Rechte", content: "Sie haben das Recht auf Auskunft und Löschung gemäß DSGVO. Kontakt: devtool.genius@gmail.com" }
      ]
    },
    terms: {
      title: "Nutzungsbedingungen",
      lastUpdated: "Zuletzt aktualisiert: 26. März 2026",
      introduction: "Durch die Nutzung des SEO & GEO Toolkits erklären Sie sich mit diesen Bedingungen einverstanden.",
      sections: [
        { title: "1. Dienstleistung", content: "Professionelle SEO-Analyse-Tools über Web und Chrome-Erweiterung." },
        { title: "2. Nutzung", content: "Nur rechtmäßige Nutzung. Kein Reverse Engineering oder Scraping-Missbrauch." },
        { title: "3. Abrechnung", content: "Zahlungen über Stripe. Jederzeit in den Kontoeinstellungen kündbar." }
      ]
    }
  },
  account: {
    signOut: "Abmelden",
    currentPlan: "Aktueller Plan",
    active: "Aktiv",
    pastDue: "Überfällig",
    aiCredits: "KI-Guthaben",
    remaining: "Verbleibend",
    upgradePro: "Auf Pro upgraden",
    manageBilling: "Abrechnung verwalten",
    reactivate: "Reaktivieren",
    paymentFailed: "Zahlung fehlgeschlagen",
    paymentFailedDesc: "Ihre letzte Zahlung konnte nicht verarbeitet werden. Aktualisieren Sie Ihre Karte.",
    fixNow: "Jetzt beheben",
    cancelled: "Abonnement gekündigt",
    cancelledDesc: "Ihr {plan}-Plan bleibt bis {date} aktiv, danach wird auf Kostenlos zurückgestellt.",
    memberSince: "Mitglied seit",
    chromeExtension: "Chrome-Erweiterung",
    synced: "SEO & GEO Toolkit · SYNCHRONISIERT",
    waiting: "SEO & GEO Toolkit · Wartet",
    linking: "Verknüpfung läuft...",
    linkFailed: "Sync fehlgeschlagen",
    linkSuccess: "Erweiterung erfolgreich verknüpft!",
    linkSuccessDesc: "Sie können dieses Fenster schließen und zur Erweiterung zurückkehren.",
    closeWindow: "Schließen",
    tryAgain: "Erneut versuchen",
    open: "Öffnen",
    monthly: "Monatlich",
    annual: "Jährlich",
    renews: "Verlängert",
    ends: "Endet",
    levelUp: "Verbessern Sie Ihr Toolkit",
    levelUpSub: "Sparen Sie 27 % mit jährlicher Abrechnung. Unbegrenzte Generierungen und Prioritätssupport.",
  }
}

const it: typeof en = {
  nav: {
    home: "Home",
    features: "Funzioni",
    howItWorks: "Come funziona",
    faq: "FAQ",
    pricing: "Prezzi",
    install: "Aggiungi a Chrome — Gratis",
    agent: "AGENTE IA",
    langToggle: "IT",
    aiExpert: "Esperto IA",
    aiAssistantBadge: "Agente SEO IA"
  },
  home: {
    meta: {
      title: "SEARCHTOOLBOX — L'ultima estensione SEO che installerai | 60+ Strumenti",
      description: "Audit schema, traccia redirect e verifica hreflang con un'unica sidebar potente. Oltre 60 strumenti SEO tecnici nel tuo browser. 100% gratis."
    }
  },
  hero: {
    eyebrow: "Estensione Chrome Nativa · 100% Privacy · Nessuna Chiave API",
    headline: "SEARCHTOOLBOX",
    sub: "Smetti di destreggiarti tra 10 estensioni. Una potente sidebar per audire schema, tracciare redirect, controllare hreflang e analizzare immagini — istantaneamente su ogni pagina.",
    cta: "Aggiungi a Chrome — Gratis",
    ctaSub: "Accesso immediato · Funziona su localhost e siti dev",
    demoCta: "Guarda la demo",
    badge: "Estensione Chrome · Beta",
    featureCards: {
      audit: { title: "Audit On-Page", desc: "Identifica errori critici in millisecondi." },
      redirect: { title: "Tracciatore Redirect", desc: "Traccia l'intera catena istantaneamente." },
      schema: { title: "Validatore Schema", desc: "Validazione JSON-LD semplificata." }
    }
  },
  benefits: {
    eyebrow: "Copertura Completa",
    headline: "Ogni strumento di cui un SEO tecnico ha bisogno. Senza eccezioni.",
    sub: "Oltre 60 strumenti che coprono ogni dimensione SEO — semantica, tecnica, netlinking, toolbox — in un unico pannello Chrome.",
    groups: [
      { icon: '◉', label: 'Semantica', count: 15, items: ['Panoramica Pagina', 'Punteggio Titolo & Meta', 'Verifica Canonical', 'Parser Robots Meta', 'Gerarchia H1–H6', 'Estrattore JSON-LD', 'Auditor Hreflang', 'Controllo Link Ritorno', 'Validatore Lingua', 'Varianti URL'] },
      { icon: '⊖', label: 'Tecnico', count: 14, items: ['Visualizzatore Robots.txt', 'Header X-Robots-Tag', 'Rilevamento HTTPS', 'Tracciatore Redirect', 'Timing Redirect', 'Audit Alt Immagini', 'Formato Immagine (WebP)', 'Esportazione ZIP Immagini', 'Esportazione CSV Immagini', 'JS Render Diff'] },
      { icon: '⇄', label: 'Netlinking', count: 7, items: ['Elenco Link', 'Rilevamento Nofollow', 'Tag Sponsored & UGC', 'Audit Link Esterni', 'Esportazione CSV Link', 'Link Grabber', 'Text Grabber'] },
      { icon: '🌐', label: 'Toolbox', count: 16, items: ['Géo-Sim SERP VPN', 'Simulazione Device', 'Operatori Google Dork', 'Contenuto Duplicato', 'Link PageSpeed', 'Test Risultati Avanzati', 'Ahrefs / Semrush / Moz', 'Gestore Cookie', 'Switcher User Agent', 'Report SEO Pesato', 'Esportazione PDF', 'Screenshot Viewport'] },
      { icon: '⌨', label: 'Toolbar & UX', count: 9, items: ['Toggle JavaScript', 'Anteprima Mobile', 'Selettore Colore', 'Overlay Trasparente', 'Tema Scuro / Chiaro', 'Scorciatoie Tastiera', 'Sidebar Configurabile', 'Pannello Laterale Chrome', 'Menu Contestuale (30+ azioni)'] }
    ],
    shortcuts: {
      title: "Scorciatoie Tastiera",
      body: "Ogni tab accessibile tramite una scorciatoia da tastiera configurabile. Naviga tra Panoramica, Schema, Redirect senza mai toccare il mouse.",
      items: [
        { key: 'Alt+1', label: 'Panoramica' },
        { key: 'Alt+2', label: 'Intestazioni' },
        { key: 'Alt+3', label: 'Schema' },
        { key: 'Alt+4', label: 'Redirect' },
        { key: 'Alt+R', label: 'Report' }
      ]
    },
    problem: {
      eyebrow: "Il Problema",
      headline: "6 schede aperte per un singolo audit.",
      items: [
        { icon: '🗂', text: 'Validatore schema qui, controllo robots lì, tracciatore redirect altrove — il cambio di contesto uccide il flusso.' },
        { icon: '🔍', text: 'Hreflang rotti, canonical mancanti, JSON-LD malformati — invisibili fino a quando non costano posizionamento.' },
        { icon: '📊', text: 'Ogni strumento è una scheda separata, un account separato, una UI diversa. Basta.' }
      ]
    },
    solution: {
      eyebrow: "SEARCHTOOLBOX",
      sub: "Un pannello, tutto il resto scompare.",
      items: [
        '60+ strumenti in un\'unica sidebar Chrome',
        'Ogni categoria SEO coperta',
        '30+ scorciatoie via tasto destro',
        'Scorciatoie tastiera configurabili',
        'Zero account, zero chiavi API',
        'Funziona su ogni pagina visitata'
      ],
      cta: "Installa Gratis →"
    },
    stats: [
      { value: '60+', label: 'Strumenti integrati' },
      { value: '30+', label: 'Azioni tasto destro' },
      { value: '150+', label: 'Termini nel glossario' },
      { value: '100%', label: 'Gratis — senza account' },
    ]
  },
  comparison: {
    eyebrow: "Prima · Dopo",
    headline: "12 estensioni o solo 1?",
    sub: "La maggior parte dei SEO ha più di 10 estensioni installate. Search Toolbox le sostituisce tutte.",
    currentSetup: "La tua configurazione attuale",
    activeExtensions: "{count} estensioni attive",
    painPoints: [
      { icon: '⏱', text: '~2 ore per audit · destreggiandosi tra 12 tab' },
      { icon: '💸', text: 'Diverse estensioni sono a pagamento' },
      { icon: '🐌', text: 'Chrome rallentato da tutte queste estensioni' }
    ],
    oneExtensionOnly: "Solo 1 estensione",
    gains: [
      { icon: '⚡', text: '~5 min per audit · tutto in un unico pannello' },
      { icon: '🆓', text: '100% gratis, nessun account richiesto' },
      { icon: '🚀', text: 'Chrome più veloce, meno estensioni' }
    ],
    drag: "Trascina",
    before: "Prima",
    after: "Dopo",
    footerNote: "✦ L'ultima estensione SEO che installerai mai ✦"
  },
  liveDemo: {
    eyebrow: "Demo Live",
    headline: "Vedila in azione su siti reali",
    sub: "Scegli un sito e guarda l'estensione analizzare la pagina in condizioni reali.",
    lockNote: "🔒 Per analizzare il tuo sito, installa l'estensione Chrome gratuita.",
    cta: "Installa Gratis — Chrome Store →"
  },
  proof: {
    label: "Scelto dagli esperti SEO delle migliori agenzie al mondo",
  },
  problem: {
    eyebrow: "Il Problema",
    headline: "Ogni audit SEO sembra di montare un mobile IKEA senza manuale",
    sub: "Sai cosa va controllato. Ma i tuoi strumenti sono sparsi, il tuo workflow è interrotto e il tempo stringe.",
    pains: [
      {
        icon: "⏱",
        title: "Fatica da Cambio Contesto",
        body: "Aprire 5 tab solo per controllare una pagina. Ogni cambio rompe il tuo flusso e nasconde il quadro generale.",
      },
      {
        icon: "🔍",
        title: "Gli Errori \"Invisibili\"",
        body: "Mancati ritorni hreflang o JSON-LD malformati che costano ai tuoi clienti milioni di traffico organico.",
      },
      {
        icon: "📉",
        title: "Inferno della Reportistica",
        body: "Creazione manuale di audit per i clienti. Dovresti risolvere i problemi, non documentarli in fogli Excel.",
      },
    ],
  },
  solution: {
    eyebrow: "La Soluzione",
    headline: "Una Sidebar.\nPadronanza SEO Totale.",
    sub: "SearchToolbox vive dove lavori: nel browser. Estrae ogni segnale tecnico in tempo reale. Nessun login, nessuna complessità.",
    cta: "Installa Gratis",
  },
  features: {
    eyebrow: "Il Toolbox",
    headline: "60+ Strumenti Pro. Un Clic.",
    sub: "Progettato per SEO tecnici che esigono velocità e precisione.",
    items: [
      {
        icon: "◉", color: "#a78bfa", label: "Semantica",
        title: "Audit Semantico",
        desc: "Analisi profonda di titoli, meta description e densità semantica. Punteggio in tempo reale.",
      },
      {
        icon: "¶", color: "#a78bfa", label: "Tecnico",
        title: "Audit Tecnico",
        desc: "Ispeziona robots.txt, X-Robots-Tag e varianti canonical. Intercetta i problemi di scansione.",
      },
      {
        icon: "⬢", color: "#a78bfa", label: "UX",
        title: "Schema & Dati Strutturati",
        desc: "Estrazione e validazione di JSON-LD, Microdata e RDFa con evidenziazione della sintassi.",
      },
      {
        icon: "⇄", color: "#a78bfa", label: "Navigazione",
        title: "Tracciatore Redirect",
        desc: "Traccia i salti 301/302, misura i tempi di risposta e rileva i loop.",
      },
      {
        icon: "🌐", color: "#a78bfa", label: "Globale",
        title: "Audit Hreflang",
        desc: "Verifica i tag di ritorno, i codici lingua/regione e x-default. Cruciale per l'internazionalizzazione.",
      },
      {
        icon: "📋", color: "#a78bfa", label: "Report",
        title: "Report PDF Istantanei",
        desc: "Genera punteggi SEO pesati ed esporta audit professionali in PDF in pochi secondi.",
      }
    ],
  },
  howItWorks: {
    eyebrow: "Onboarding Rapido",
    headline: "Dall'installazione all'audit in 60s",
    steps: [
      {
        num: "01",
        title: "Installazione 1-Click",
        body: "Scaricalo dal Chrome Web Store. Nessun account richiesto.",
      },
      {
        num: "02",
        title: "Apri la Sidebar",
        body: "Usa la scorciatoia o clicca sull'icona. Analizziamo la pagina istantaneamente.",
      },
      {
        num: "03",
        title: "Chiedi all'Esperto",
        body: "Lascia che l'Agente IA guidi il tuo audit o usa gli strumenti manuali per indagini profonde.",
      },
    ],
  },
  aiAgent: {
    homepage: {
      eyebrow: "Assistente SEO IA",
      headline: "L'unica IA che legge davvero la tua pagina.",
      subheadline: "La maggior parte dei bot IA sono ciechi di fronte al tuo codice. Il nostro agente analizza il DOM live e il codice sorgente per soluzioni contestuali.",
      features: [
        { title: "DOM-Aware", desc: "Non indovina — legge il tuo HTML e Schema reale." },
        { title: "Fix Tecnici", desc: "Ottieni snippet di codice per risolvere i problemi identificati." },
        { title: "Conoscenza Esperta", desc: "Basato sulla documentazione più recente di Google Search." },
        { title: "Zero Latenza", desc: "Analisi istantanea a livello di pagina direttamente nella sidebar." }
      ],
      primaryCta: "Prova l'Agente IA",
      secondaryCta: "Scopri di più",
      chat: {
        user: "Analizza il contenuto della mia home page per la parola chiave 'SEO Expert'.",
        scanning: "Scansione DOM in corso... 73 tag analizzati.",
        response: "Il tuo H1 contiene la parola chiave, ma la tua meta-description è troppo corta. Raccomando di aggiungere: 'Audit Tecnico'."
      }
    },
    page: {
      meta: {
        title: "Agente IA SEO Personale — Il tuo Esperto On-Page | SearchToolbox",
        description: "Incontra il primo agente IA SEO consapevole del contesto. Legge la tua pagina e identifica i blocchi tecnici istantaneamente."
      },
      hero: {
        headline: "Smetti di Indovinare. Dialoga con il tuo SEO.",
        subheadline: "SearchToolbox connette il tuo browser con un esperto SEO di fama mondiale. Conosce la tua pagina prima ancora che tu chieda.",
        cta: "Sblocca l'Esperto IA — 10 Crediti Gratis"
      },
      problem: {
        title: "L'IA standard non ha i tuoi dati.",
        body: "ChatGPT e Claude non possono vedere i tuoi siti staging o i tuoi schema temporanei. SearchToolbox può."
      },
      differentiation: {
        title: "L'IA costruita per i SEO Tecnici",
        items: [
          { title: "Il Contesto è tutto", desc: "Inviamo lo stato del DOM live direttamente nel contesto dell'IA." },
          { title: "Niente Copia-Incolla", desc: "L'agente ha già i dati. Chiedi solo: \"Cosa c'è che non va qui?\"." },
          { title: "Consigli Azionabili", desc: "Non elenca solo gli errori; scrive le correzioni per te." }
        ]
      },
      modes: {
        title: "Intelligenza Adattiva",
        items: [
          { title: "Principiante", desc: "Spiegazioni semplici. Impara il \"perché\" dietro ogni regola SEO." },
          { title: "Intermedio", desc: "Best practice e strategie di scaling per domini in crescita." },
          { title: "Esperto", desc: "Audit tecnici profondi e correzioni architetturali complesse." }
        ]
      },
      benefits: {
        title: "Perché gli esperti scelgono SearchToolbox",
        items: [
          { title: "Audit 10x più veloci", desc: "Lascia che l'IA faccia il triage mentre tu ti occupi della strategia." },
          { title: "Consapevolezza Locale", desc: "Funziona su localhost, staging e sessioni protette." },
          { title: "Aggiornamenti Settimanali", desc: "Il nostro motore viene aggiornato settimanalmente con gli ultimi trend SEO." }
        ]
      },
      useCases: {
        title: "Scenari Reali",
        items: [
          { title: "Audit di Migrazione", desc: "Chiedi all'agente di comparare live vs staging durante un trasloco sensibile." },
          { title: "Debugging Schema", desc: "Trova istantaneamente perché un blocco JSON-LD fallisce la validazione." },
          { title: "Analisi Competitor", desc: "Audita le pagine dei competitor per capire il loro successo." }
        ]
      },
      finalCta: {
        title: "Il tuo Assistente ti aspetta.",
        body: "Unisciti a 5.000+ SEO che hanno smesso di estrarre dati manualmente.",
        cta: "Installa Gratis"
      },
      faq: [
        { q: "Può vedere pagine protette da password?", a: "Sì. Poiché gira nel tuo browser, ha accesso a tutto ciò che stai visualizzando." },
        { q: "Condividete il mio codice sorgente?", a: "No. I dati vengono elaborati solo per il contesto della chat e non vengono mai salvati." },
        { q: "Quali modelli di IA utilizzate?", a: "Un mix di GPT-4o e Claude 3.5 ottimizzato per dati SEO." }
      ]
    }
  },
  pricing: {
    meta: {
      title: "Prezzi Semplici e Trasparenti — SearchToolbox SEO",
      description: "60+ strumenti gratis per sempre. Paghi solo per l'Agente IA."
    },
    headline: "Gratis per sempre. Paghi solo per l'IA.",
    subheadline: "60+ strumenti di analisi, audit, report PDF — tutto 100% gratis. L'unica parte a pagamento: un esperto IA.",
    footer: "Nessuna carta richiesta per i tool gratis · Cancella Pro quando vuoi",
    trustHeadline: "Scelto da oltre 5.000 professionisti SEO",
    plans: [
      {
        name: "FREE",
        price: "0",
        period: "per sempre",
        features: [
          "10 crediti IA per provare",
          "Tutti i 60+ strumenti SEO",
          "Audit Schema & dati strutturati",
          "Tracciamento redirect",
          "Audit Hreflang",
          "Generazione report PDF"
        ],
        cta: "Installa gratis",
        popular: false
      },
      {
        name: "PRO",
        price: "9",
        period: "mese",
        badge: "Il più popolare",
        features: [
          "Esperto SEO IA — legge i tuoi dati live",
          "Risposte contestuali ai tuoi audit",
          "Analisi visibilità GEO / IA",
          "150 analisi esperte al mese",
          "Supporto multilingue (EN/FR/DE/IT)"
        ],
        cta: "Sblocca l'Esperto IA",
        popular: true
      },
      {
        name: "PRO ANNUALE",
        price: "79",
        period: "anno",
        badge: "Risparmia 27%",
        features: [
          "Tutto in Pro, fatturato annualmente",
          "1800 analisi esperte all'anno",
          "Miglior valore per lavoro SEO quotidiano",
          "Supporto prioritario"
        ],
        cta: "Inizia Annuale",
        popular: false
      }
    ]
  },
  faq: {
    eyebrow: "Domande Frequenti",
    headline: "Tutto quello che devi sapere",
    items: [
      { q: "SearchToolbox è gratuito?", a: "Sì. Oltre 60 strumenti di analisi SEO e report PDF sono completamente gratuiti senza account." },
      { q: "In cosa differisce l'IA da ChatGPT?", a: "Le IA generiche spesso tirano a indovinare. La nostra IA legge i dati reali della pagina per consigli precisi." },
      { q: "Quali browser sono supportati?", a: "Tutti i browser basati su Chromium come Chrome, Edge, Brave e Arc." },
      { q: "Funziona su qualsiasi sito?", a: "Sì, inclusi localhost, ambienti di staging e pagine protette." }
    ]
  },
  spotlight: [
    {
      eyebrow: "Padronanza Semantica",
      title: "Analizza i contenuti come un motore di ricerca.",
      body: "Ottieni un punteggio semantico in tempo reale. Controlla la densità delle keyword e l'ottimizzazione dei meta tag.",
      bullets: ["Scoring live", "Avvisi limiti caratteri", "Estrazione keyword"]
    },
    {
      eyebrow: "Precisione Tecnica",
      title: "Trova gli errori prima che si posizionino.",
      body: "Dal robots.txt ai conflitti canonical — mostriamo ogni segnale tecnico.",
      bullets: ["Validazione robots.txt", "Controllo Canonical", "Stato indicizzabilità"]
    },
    {
      eyebrow: "Validazione Schema",
      title: "Rich Snippet resi facili.",
      body: "Estrai e valida JSON-LD istantaneamente. Trova errori di struttura senza lasciare la pagina.",
      bullets: ["Estrattore JSON-LD", "Validazione Schema", "Visualizzatore struttura"]
    }
  ],
  video: {
    eyebrow: "Guarda l'azione",
    headline: "Il compagno SEO definitivo",
    sub: "Analizza ogni pagina in pochi secondi. Da Dior al tuo ambiente locale."
  },
  contextMenu: {
    eyebrow: "Potenza a portata di click",
    headline: "Il toolkit SEO del tasto destro",
    sub: "30+ azioni professionali disponibili istantaneamente dal menu del browser."
  },
  allFeatures: {
    eyebrow: "Deep Dive",
    headline: "Ogni strumento di cui avrai mai bisogno",
    sub: "Progettato per SEO tecnici, agenzie e marketer.",
    placeholder: "Cerca uno strumento (es. \"schema\", \"redirect\")..."
  },
  cta: {
    quote: "\"L'estensione SEO più potente che abbia mai usato. Ha sostituito altri 4 strumenti.\"",
    stats: [
      { value: "5k+", label: "Utenti Attivi" },
      { value: "60+", label: "Strumenti Tech" },
      { value: "100%", label: "Privacy" }
    ],
    headline: "Pronto a dominare le SERP?",
    cta: "Installa Gratis",
    ctaSub: "Nessuna carta · Accesso immediato"
  },
  footer: {
    privacy: "Privacy",
    store: "Chrome Web Store",
    rights: "© {year} SearchToolbox SEO. Tutti i diritti riservati."
  },
  legal: {
    privacy: {
      title: "Informativa sulla Privacy",
      lastUpdated: "Ultimo aggiornamento: 26 marzo 2026",
      introduction: "Benvenuti in SEO & GEO Toolkit. Ci impegniamo a proteggere la vostra privacy e a fornire una panoramica trasparente di come gestiamo le vostre informazioni.",
      sections: [
        { title: "1. Informazioni raccolte", content: "Raccogliamo solo il necessario: email, dati dell'account e log tecnici per la sicurezza." },
        { title: "2. Accesso Chrome", content: "Rispettiamo la politica di utilizzo limitato di Google. L'accesso è limitato alle funzionalità descritte. Nessun uso pubblicitario." },
        { title: "3. Condivisione dei dati", content: "Condividiamo i dati solo con i responsabili del trattamento essenziali come Supabase (DB) e Stripe (Pagamenti)." },
        { title: "4. I vostri diritti", content: "Avete il diritto di accedere o cancellare i vostri dati ai sensi del GDPR. Contatto: devtool.genius@gmail.com" }
      ]
    },
    terms: {
      title: "Condizioni d'Uso",
      lastUpdated: "Ultimo aggiornamento: 26 marzo 2026",
      introduction: "Utilizzando SEO & GEO Toolkit, accetti i presenti termini. Ti preghiamo di leggerli attentamente.",
      sections: [
        { title: "1. Servizio", content: "Strumenti di analisi SEO professionale via web ed estensione Chrome." },
        { title: "2. Utilizzo", content: "Solo uso lecito. Nessun reverse engineering o abuso di scraping." },
        { title: "3. Fatturazione", content: "Pagamenti gestiti da Stripe. Annulla in qualsiasi momento nelle impostazioni dell'account." }
      ]
    }
  },
  account: {
    signOut: "Disconnetti",
    currentPlan: "Piano attuale",
    active: "Attivo",
    pastDue: "Scaduto",
    aiCredits: "Crediti IA",
    remaining: "Rimanenti",
    upgradePro: "Passa a Pro",
    manageBilling: "Gestisci abbonamento",
    reactivate: "Riattiva",
    paymentFailed: "Pagamento fallito",
    paymentFailedDesc: "L'ultimo pagamento non è andato a buon fine. Aggiorna la tua carta per mantenere il piano.",
    fixNow: "Risolvi ora",
    cancelled: "Abbonamento annullato",
    cancelledDesc: "Il piano {plan} rimane attivo fino al {date}, poi torna a Gratuito.",
    memberSince: "Membro dal",
    chromeExtension: "Estensione Chrome",
    synced: "SEO & GEO Toolkit · SINCRONIZZATO",
    waiting: "SEO & GEO Toolkit · In attesa",
    linking: "Collegamento in corso...",
    linkFailed: "Sync fallito",
    linkSuccess: "Estensione collegata con successo!",
    linkSuccessDesc: "Puoi chiudere questa finestra e tornare all'estensione.",
    closeWindow: "Chiudi",
    tryAgain: "Riprova",
    open: "Apri",
    monthly: "Mensile",
    annual: "Annuale",
    renews: "Rinnova",
    ends: "Scade",
    levelUp: "Potenzia il tuo toolkit",
    levelUpSub: "Risparmia il 27% con la fatturazione annuale. Generazioni illimitate e supporto prioritario.",
  }
}

const es: typeof en = {
  nav: {
    home: "Inicio",
    features: "Funciones",
    howItWorks: "Cómo funciona",
    faq: "FAQ",
    pricing: "Precios",
    install: "Añadir a Chrome — Gratis",
    agent: "AGENTE IA",
    langToggle: "ES",
    aiExpert: "Experto IA",
    aiAssistantBadge: "Agente SEO IA"
  },
  home: {
    meta: {
      title: "SEARCHTOOLBOX — La última extensión SEO que instalarás | 60+ Herramientas",
      description: "Audita esquemas, rastrea redirecciones y verifica hreflang con una potente barra lateral. Más de 60 herramientas SEO técnicas en tu navegador. 100% gratis."
    }
  },
  hero: {
    eyebrow: "Extensión nativa de Chrome · 100% privacidad · Sin clave API",
    headline: "SEARCHTOOLBOX",
    sub: "Deja de hacer malabares con 10 extensiones. Una potente barra lateral para auditar esquemas, rastrear redirecciones, verificar hreflang, analizar imágenes y simular rankings — al instante, en cualquier página.",
    cta: "Añadir a Chrome — Gratis",
    ctaSub: "Acceso inmediato · Funciona en localhost y sitios de desarrollo",
    demoCta: "Ver demostración en vivo",
    badge: "Extensión de Chrome · Beta",
    featureCards: {
      audit: { title: "Audit On-Page", desc: "Identifica errores críticos en milisegundos." },
      redirect: { title: "Rastreador Direct", desc: "Rastrea toda la cadena al instante." },
      schema: { title: "Validador de Esquema", desc: "Validación JSON-LD simplificada." }
    }
  },
  benefits: {
    eyebrow: "Cobertura Completa",
    headline: "Cada herramienta que un SEO técnico necesita. Sin excepción.",
    sub: "Más de 60 herramientas que cubren cada dimensión SEO — semántica, técnica, netlinking, caja de herramientas — dentro de un único panel de Chrome.",
    groups: [
      { icon: '◉', label: 'Semántica', count: 15, items: ['Visión general', 'Puntuación Título/Meta', 'Verificador Canónico', 'Parser Robots Meta', 'Jerarquía H1–H6', 'Extractor JSON-LD', 'Parser Hreflang', 'Verificador Return Link', 'Validador de Idioma', 'Variantes de URL'] },
      { icon: '⊖', label: 'Técnico', count: 14, items: ['Visor Robots.txt', 'Header X-Robots-Tag', 'Detección HTTPS', 'Rastreador Redirecciones', 'Timing de Redirección', 'Audit Alt Imágenes', 'Formato Imagen (WebP)', 'Exportar imágenes ZIP', 'Exportar imágenes CSV', 'JS Render Diff'] },
      { icon: '⇄', label: 'Netlinking', count: 7, items: ['Listado de enlaces', 'Detección Nofollow', 'Tags Sponsored/UGC', 'Audit enlaces externos', 'Exportar enlaces CSV', 'Link Grabber', 'Text Grabber'] },
      { icon: '🌐', label: 'Herramientas', count: 16, items: ['Geo-Sim SERP VPN', 'Simulación de Dispositivo', 'Operadores Google Dork', 'Contenido Duplicado', 'Enlace PageSpeed', 'Test Rich Results', 'Ahrefs / Semrush / Moz', 'Gestión de Cookies', 'Switcher User Agent', 'Informe SEO ponderado', 'Exportar PDF', 'Captura de pantalla'] },
      { icon: '⌨', label: 'Barra y UX', count: 9, items: ['Toggle JavaScript', 'Vista móvil', 'Selector de color', 'Overlay transparente', 'Tema Oscuro/Claro', 'Atajos de teclado', 'Sidebar configurable', 'Chrome Side Panel', 'Menú contextual (30+ acciones)'] }
    ],
    shortcuts: {
      title: "Atajos de Teclado",
      body: "Cada pestaña accesible con un atajo de teclado configurable. Navega entre Overview → Schema → Redirects sin tocar el ratón.",
      items: [
        { key: 'Alt+1', label: 'Overview' },
        { key: 'Alt+2', label: 'Encabezados' },
        { key: 'Alt+3', label: 'Schema' },
        { key: 'Alt+4', label: 'Redirects' },
        { key: 'Alt+R', label: 'Informe' }
      ]
    },
    problem: {
      eyebrow: "El Problema",
      headline: "6 pestañas abiertas para una sola auditoría.",
      items: [
        { icon: '🗂', text: 'Validador de esquemas aquí, comprobador de robots allá, rastreador de redirecciones en otro lugar — el cambio de contexto mata tu flujo.' },
        { icon: '🔍', text: 'Hreflang roto, canónico faltante, datos estructurados mal formados — invisibles hasta que cuestan rankings.' },
        { icon: '📊', text: 'Cada herramienta es una pestaña, cuenta e interfaz distinta. Se acabó.' }
      ]
    },
    solution: {
      eyebrow: "SEARCHTOOLBOX",
      sub: "Un panel, todo lo demás desaparece.",
      items: [
        '60+ herramientas en una barra lateral de Chrome',
        'Cada categoría SEO cubierta',
        '30+ atajos vía menú contextual',
        'Atajos de teclado configurables',
        'Cero cuentas, cero claves API',
        'Funciona en cada página que visitas'
      ],
      cta: "Instalar gratis →"
    },
    stats: [
      { value: '60+', label: 'Herramientas' },
      { value: '30+', label: 'Acciones menú' },
      { value: '150+', label: 'Términos glosario' },
      { value: '100%', label: 'Gratis — sin cuenta' },
    ]
  },
  comparison: {
    eyebrow: "Antes · Después",
    headline: "¿12 extensiones o solo 1?",
    sub: "La mayoría de los SEOs tienen más de 10 extensiones instaladas. Search Toolbox las reemplaza todas.",
    currentSetup: "Tu configuración actual",
    activeExtensions: "{count} extensiones activas",
    painPoints: [
      { icon: '⏱', text: '~2h por auditoría · 12 pestañas' },
      { icon: '💸', text: 'Varias extensiones cuestan dinero' },
      { icon: '🐌', text: 'Chrome ralentizado por tantas apps' }
    ],
    oneExtensionOnly: "Solo 1 extensión",
    gains: [
      { icon: '⚡', text: '~5 min por auditoría · todo en un panel' },
      { icon: '🆓', text: '100% gratis, sin cuenta' },
      { icon: '🚀', text: 'Chrome más rápido, menos extensiones' }
    ],
    drag: "Arrastrar",
    before: "Antes",
    after: "Después",
    footerNote: "✦ La última extensión SEO que instalarás ✦"
  },
  liveDemo: {
    eyebrow: "Demo en vivo",
    headline: "Ritmo real en sitios reales",
    sub: "Elige un sitio y observa cómo la extensión analiza la página en condiciones reales.",
    lockNote: "🔒 Para analizar tu propio sitio, instala la extensión gratuita de Chrome.",
    cta: "Instalar gratis — Chrome Web Store →"
  },
  proof: {
    label: "Impulsando a expertos SEO en las agencias líderes del mundo",
  },
  problem: {
    eyebrow: "El Problema",
    headline: "Auditar un SEO es como montar muebles de IKEA sin instrucciones",
    sub: "Sabes lo que hay que revisar. Pero tus herramientas están dispersas, tu flujo de trabajo roto y el reloj corre.",
    pains: [
      {
        icon: "⏱",
        title: "Fatiga por cambio de contexto",
        body: "Abrir 5 pestañas para revisar una página. Cada cambio rompe tu foco y oculta la visión general.",
      },
      {
        icon: "🔍",
        title: "Los errores \"invisibles\"",
        body: "Hreflang rotos o JSON-LD mal formados que cuestan millones en tráfico orgánico a tus clientes.",
      },
      {
        icon: "📉",
        title: "El infierno de los informes",
        body: "Construir informes manualmente. Deberías arreglar problemas, no documentarlos en Excels.",
      },
    ],
  },
  solution: {
    eyebrow: "La Solución",
    headline: "Una barra lateral.\nMaestría SEO total.",
    sub: "SearchToolbox vive donde trabajas: el navegador. Extrae cada señal técnica en tiempo real. Sin login, sin complejidad.",
    cta: "Añadir a Chrome — Es Gratis",
  },
  features: {
    eyebrow: "La Caja de Herramientas",
    headline: "60+ herramientas Pro. Un clic.",
    sub: "Diseñado para SEOs técnicos que exigen velocidad y precisión.",
    items: [
      {
        icon: "◉", color: "#a78bfa", label: "Semántica",
        title: "Audit Semántico",
        desc: "Análisis profundo de títulos, metas y densidad semántica. Puntuación en tiempo real.",
      },
      {
        icon: "¶", color: "#a78bfa", label: "Técnico",
        title: "Audit Técnico",
        desc: "Inspecciona robots.txt, X-Robots-Tag y variantes canónicas. Evita errores de indexación.",
      },
      {
        icon: "⬢", color: "#a78bfa", label: "UX",
        title: "Schema y Datos Estructurados",
        desc: "Extracción y validación de JSON-LD, Microdata y RDFa con resaltado de sintaxis.",
      },
      {
        icon: "⇄", color: "#a78bfa", label: "Navegación",
        title: "Rastreador de Redirecciones",
        desc: "Sigue saltos 301/302, mide tiempos de respuesta y detecta bucles.",
      },
      {
        icon: "🌐", color: "#a78bfa", label: "Global",
        title: "Auditor Hreflang",
        desc: "Verifica etiquetas de retorno, códigos de región y x-default. Vital para SEO internacional.",
      },
      {
        icon: "📋", color: "#a78bfa", label: "Informes",
        title: "Informes PDF instantáneos",
        desc: "Genera puntuaciones SEO y exporta auditorías en PDF profesionales en segundos.",
      }
    ],
  },
  howItWorks: {
    eyebrow: "Onboarding Rápido",
    headline: "De la instalación a la auditoría en 60s",
    steps: [
      {
        num: "01",
        title: "Instalación en un clic",
        body: "Consíguelo en la Chrome Web Store. Sin registros para empezar.",
      },
      {
        num: "02",
        title: "Abre la barra lateral",
        body: "Usa nuestro atajo o haz clic en el icono. Analizamos la página al instante.",
      },
      {
        num: "03",
        title: "Pregunta al experto",
        body: "Deja que el agente IA guíe tu auditoría o usa herramientas manuales para análisis profundos.",
      },
    ],
  },
  aiAgent: {
    homepage: {
      eyebrow: "Asistente SEO IA",
      headline: "La única IA que realmente lee tu página.",
      subheadline: "La mayoría de los bots no ven tu código. Nuestro agente analiza el DOM en vivo para dar soluciones con contexto.",
      features: [
        { title: "DOM-Aware", desc: "No adivina — lee tu HTML real y los datos estructurados." },
        { title: "Fixes Técnicos", desc: "Obtén snippets de código para resolver problemas identificados." },
        { title: "Saber Experto", desc: "Basado en la documentación más reciente de Google Search." },
        { title: "Cero Latencia", desc: "Análisis instantáneo directamente en tu barra lateral." }
      ],
      primaryCta: "Probar Agente IA",
      secondaryCta: "Saber más",
      chat: {
        user: "¿Puedes analizar mi home para la keyword 'Experto SEO'?",
        scanning: "Escaneando DOM... 73 etiquetas encontradas.",
        response: "Tu H1 tiene la keyword, pero tu meta descripción es corta. Recomiendo añadir 'Audit Técnico'."
      }
    },
    page: {
      meta: {
        title: "Agente IA SEO Personal — Tu experto on-page | SearchToolbox",
        description: "Conoce al primer agente IA SEO con contexto. Lee tu página, identifica bloqueos y da consejos expertos al instante."
      },
      hero: {
        headline: "Deja de adivinar. Dirige tu SEO con IA.",
        subheadline: "SearchToolbox conecta tu navegador con un experto SEO de clase mundial. Conoce tu sitio antes de que preguntes.",
        cta: "Desbloquear Experto IA — 10 créditos gratis"
      },
      problem: {
        title: "La IA estándar no tiene tus datos.",
        body: "ChatGPT no puede ver tus sitios locales, de staging o errores temporales. SearchToolbox sí."
      },
      differentiation: {
        title: "La IA para SEOs técnicos",
        items: [
          { title: "El contexto lo es todo", desc: "Pasamos el estado del DOM en vivo directamente al agente." },
          { title: "Sin copy-paste", desc: "El agente ya tiene los datos. Solo pregunta: \"¿Qué está mal aquí?\"" },
          { title: "Consejos accionables", desc: "No solo lista errores; escribe las correcciones por ti." }
        ]
      },
      modes: {
        title: "Inteligencia Adaptativa",
        items: [
          { title: "Principiante", desc: "Explicaciones amigables. Aprende el porqué de cada regla SEO." },
          { title: "Avanzado", desc: "Mejores prácticas y estrategias para dominios en crecimiento." },
          { title: "Experto", desc: "Auditorías técnicas profundas y correcciones arquitectónicas complejas." }
        ]
      },
      benefits: {
        title: "Por qué los expertos eligen SearchToolbox",
        items: [
          { title: "Auditorías 10x más rápidas", desc: "Deja que la IA haga el triaje mientras tú te enfocas en la estrategia." },
          { title: "Conciencia local", desc: "Funciona en localhost, staging y sesiones protegidas." },
          { title: "Actualizaciones semanales", desc: "Nuestro motor se actualiza cada semana con tendencias SEO." }
        ]
      },
      useCases: {
        title: "Escenarios reales",
        items: [
          { title: "Auditorías de migración", desc: "Compara producción vs staging durante un movimiento sensible." },
          { title: "Depuración de Schema", desc: "Descubre al instante por qué falla un bloque JSON-LD." },
          { title: "Check de competidores", desc: "Audita sitios de la competencia para replicar su éxito." }
        ]
      },
      finalCta: {
        title: "Tu asistente te espera.",
        body: "Únete a más de 5.000 SEOs que dejaron de extraer datos manualmente.",
        cta: "Instalar gratis ahora"
      },
      faq: [
        { q: "¿Puede ver páginas protegidas?", a: "Sí. Como corre en tu navegador, tiene acceso a lo que tú ves." },
        { q: "¿Se comparten mis datos?", a: "No. Los datos solo se procesan para el contexto de tu chat y nunca se guardan." },
        { q: "¿Qué modelos usáis?", a: "Un mix de GPT-4o y Claude 3.5, optimizado para datos SEO." }
      ]
    }
  },
  pricing: {
    meta: {
      title: "Precios simples y transparentes — SearchToolbox SEO",
      description: "Más de 60 herramientas gratis para siempre. Solo pagas por el Agente IA."
    },
    headline: "Gratis para siempre. Paga solo por la IA.",
    subheadline: "60+ herramientas de análisis, auditorías, informes PDF — todo 100% gratis. La única parte de pago: el experto IA.",
    footer: "Sin tarjeta para herramientas gratis · Cancela Pro cuando quieras",
    trustHeadline: "Usado por más de 5.000 profesionales SEO",
    plans: [
      {
        name: "GRATIS",
        price: "0",
        period: "siempre",
        features: [
          "10 créditos IA de prueba",
          "Todas las 60+ herramientas SEO",
          "Audit Schema y datos estructurados",
          "Rastreador de redirecciones",
          "Auditor Hreflang",
          "Exportar informe PDF"
        ],
        cta: "Añadir a Chrome",
        popular: false
      },
      {
        name: "PRO",
        price: "9",
        period: "mes",
        badge: "Más popular",
        features: [
          "Experto SEO IA — lee tus datos live",
          "Respuestas con contexto de auditoría",
          "Análisis de visibilidad GEO/IA",
          "150 análisis de experto al mes",
          "Soporte multiidioma (EN/FR/DE/IT/ES)"
        ],
        cta: "Desbloquear Experto IA",
        popular: true
      },
      {
        name: "PRO ANUAL",
        price: "79",
        period: "año",
        badge: "Ahorra 27%",
        features: [
          "Todo lo de Pro, facturado anualmente",
          "1800 análisis de experto al año",
          "El mejor valor para uso diario",
          "Soporte prioritario"
        ],
        cta: "Empezar anual",
        popular: false
      }
    ]
  },
  faq: {
    eyebrow: "Preguntas Frecuentes",
    headline: "Todo lo que necesitas saber",
    items: [
      { q: "¿Es SearchToolbox gratis?", a: "Sí. Más de 60 herramientas de análisis y exportación PDF son gratuitas sin cuenta." },
      { q: "¿En qué se diferencia de ChatGPT?", a: "La IA estándar adivina. Nuestra IA lee los datos reales de tu página para dar consejos precisos." },
      { q: "¿Qué navegadores soporta?", a: "Cualquier navegador Chromium: Chrome, Edge, Brave y Arc." },
      { q: "¿Funciona en cualquier sitio?", a: "Sí, incluyendo localhost, staging y páginas protegidas." },
      { q: "¿Es privada mi información?", a: "Sí. La extensión corre localmente. No enviamos el contenido de tus páginas a servidores externos." }
    ]
  },
  spotlight: [
    {
      eyebrow: "Maestría Semántica",
      title: "Analiza el contenido como un buscador.",
      body: "Obtén una puntuación semántica real. Revisa la densidad de las keywords y optimización de metas.",
      bullets: ["Puntuación en vivo", "Alertas de longitud", "Extracción de keywords"]
    },
    {
      eyebrow: "Precisión Técnica",
      title: "Caza errores antes de que rankeen.",
      body: "De robots.txt a conflictos de canónicos — revelamos las señales que Google usa.",
      bullets: ["Validación robots.txt", "Comprobador canónico", "Estado de indexabilidad"]
    },
    {
      eyebrow: "Validación de Schema",
      title: "Rich Snippets sin esfuerzo.",
      body: "Extrae y valida JSON-LD al instante. Encuentra errores estructurales sin salir de la página.",
      bullets: ["Extractor JSON-LD", "Validación Schema", "Visualizador estructural"]
    }
  ],
  video: {
    eyebrow: "Míralo en acción",
    headline: "El compañero SEO definitivo",
    sub: "Analiza cualquier página en segundos. Desde Dior a tu entorno de desarrollo local."
  },
  contextMenu: {
    eyebrow: "Potencia al alcance",
    headline: "El toolkit SEO del clic derecho",
    sub: "30+ acciones profesionales disponibles al instante sin abrir el panel."
  },
  allFeatures: {
    eyebrow: "Análisis Profundo",
    headline: "Cada herramienta que necesitarás",
    sub: "Diseñado para SEOs técnicos, agencias y marketers.",
    placeholder: "Busca una herramienta (ej: \"schema\", \"redirect\")..."
  },
  cta: {
    quote: "\"La extensión SEO más potente que he usado jamás. Sustituyó a otras 4 herramientas y mi velocidad se duplicó.\"",
    stats: [
      { value: "5k+", label: "Usuarios activos" },
      { value: "60+", label: "Herramientas" },
      { value: "100%", label: "Privacidad" }
    ],
    headline: "¿Listo para dominar las SERPs?",
    cta: "Instalar gratis",
    ctaSub: "Sin tarjeta · Acceso inmediato"
  },
  footer: {
    privacy: "Privacidad",
    store: "Chrome Web Store",
    rights: "© {year} SearchToolbox SEO. Todos los derechos reservados."
  },
  legal: {
    privacy: {
      title: "Política de Privacidad",
      lastUpdated: "Última actualización: 26 de marzo de 2026",
      introduction: "Bienvenido a SEO & GEO Toolkit. Nos comprometemos a proteger su privacidad y a ofrecer una visión transparente de cómo manejamos su información.",
      sections: [
        { title: "1. Información recopilada", content: "Solo recopilamos lo necesario: correo electrónico, datos de la cuenta y registros técnicos para seguridad." },
        { title: "2. Acceso a Chrome", content: "Cumplimos con la política de uso limitado de Google. El acceso está restringido a las funciones indicadas. Sin uso publicitario." },
        { title: "3. Intercambio de datos", content: "Compartimos datos solo con procesadores esenciales como Supabase (Base de datos) e Stripe (Pagos)." },
        { title: "4. Sus derechos", content: "Tiene derecho a acceder o eliminar sus datos según el RGPD. Contacto: devtool.genius@gmail.com" }
      ]
    },
    terms: {
      title: "Términos de Uso",
      lastUpdated: "Última actualización: 26 de marzo de 2026",
      introduction: "Al utilizar SEO & GEO Toolkit, usted acepta estos términos. Por favor, léalos detenidamente.",
      sections: [
        { title: "1. Servicio", content: "Herramientas de análisis SEO profesional vía web y extensión de Chrome." },
        { title: "2. Uso", content: "Solo uso legal. Sin ingeniería inversa ni abuso de scraping." },
        { title: "3. Facturación", content: "Pagos gestionados por Stripe. Cancele en cualquier momento en la configuración de la cuenta." }
      ]
    }
  },
  account: {
    signOut: "Cerrar sesión",
    currentPlan: "Plan actual",
    active: "Activo",
    pastDue: "Vencido",
    aiCredits: "Créditos IA",
    remaining: "Restantes",
    upgradePro: "Actualizar a Pro",
    manageBilling: "Gestionar facturación",
    reactivate: "Reactivar",
    paymentFailed: "Pago fallido",
    paymentFailedDesc: "Su último pago no pudo procesarse. Actualice su tarjeta para mantener su plan activo.",
    fixNow: "Solucionar",
    cancelled: "Suscripción cancelada",
    cancelledDesc: "Su plan {plan} permanece activo hasta el {date}, luego vuelve a Gratis.",
    memberSince: "Miembro desde",
    chromeExtension: "Extensión de Chrome",
    synced: "SEO & GEO Toolkit · SINCRONIZADO",
    waiting: "SEO & GEO Toolkit · Esperando",
    linking: "Vinculando...",
    linkFailed: "Sync fallido",
    linkSuccess: "¡Extensión vinculada con éxito!",
    linkSuccessDesc: "Puede cerrar esta ventana y volver a la extensión.",
    closeWindow: "Cerrar",
    tryAgain: "Intentar de nuevo",
    open: "Abrir",
    monthly: "Mensual",
    annual: "Anual",
    renews: "Renueva",
    ends: "Expira",
    levelUp: "Mejora tu toolkit",
    levelUpSub: "Ahorra un 27% con facturación anual. Generaciones ilimitadas y soporte prioritario.",
  }
}

export const translations: Record<Lang, typeof en> = { en, fr, de, it, es }
