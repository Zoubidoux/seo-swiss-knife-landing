export type Lang = "en" | "fr"

const en = {
  nav: {
    home: "Home",
    features: "Features",
    howItWorks: "How it works",
    faq: "FAQ",
    pricing: "Pricing",
    install: "Add to Chrome — Free",
    agent: "AI AGENT",
    langToggle: "FR",
  },
  hero: {
    eyebrow: "Native Chrome Extension · 100% Privacy · No API Key Required",
    headline: "Search Toolbox",
    sub: "Stop juggling 10 extensions. One powerful sidebar to audit schema, trace redirects, check hreflang, analyze images, and geo-simulate rankings — instantly, on any page.",
    cta: "Add to Chrome — Free",
    ctaSub: "Immediate access · Works on localhost & dev sites",
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
    sub: "Pixly lives where you work: the browser. It extracts every technical signal in real-time. No login, no complexity — just the insights you need to rank higher.",
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
        body: "Use our shortcut or click the icon. Pixly instantly parses the current page state.",
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
      subheadline: "Most AI bots are blind to your code. Pixly's agent analyzes your live DOM, source code, and technical headers to provide context-aware fixes that actually work.",
      features: [
        { title: "DOM-Aware", desc: "Doesn't just guess — it reads your actual HTML and Schema." },
        { title: "Technical Fixes", desc: "Get step-by-step code snippets to fix identified issues." },
        { title: "Expert Knowledge", desc: "Powered by the latest Google Search documentation." },
        { title: "Zero Latency", desc: "Instant page-level analysis directly in your sidebar." }
      ],
      primaryCta: "Try the AI Agent",
      secondaryCta: "Learn More"
    },
    page: {
      meta: {
        title: "Personal SEO AI Agent — Your On-Page Expert | Pixly",
        description: "Meet the first context-aware AI SEO agent. It reads your page, identifies technical blockers, and provides expert-level recommendations instantly."
      },
      hero: {
        headline: "Stop Guessing. Start Prompting Your SEO.",
        subheadline: "Pixly connects your browser to a world-class SEO expert. It knows your page, your schema, and your technical stack before you even ask.",
        cta: "Unlock the AI Expert — 10 Free Credits"
      },
      problem: {
        title: "Standard AI doesn't have your data.",
        body: "ChatGPT and Claude can't see your live dev environment, your private staging sites, or your malformed temporary schema. Pixly can."
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
        title: "Why Experts Choose Pixly AI",
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
      title: "Simple, Transparent Pricing — Pixly SEO",
      description: "Free forever for 60+ tools. Paid only for the AI Agent. Choose the plan that fits your audit volume."
    },
    headline: "Free forever. Paid only for the AI.",
    subheadline: "60+ analysis tools, audits, PDF reports — all 100% free. The only paid part: an AI expert that reads your page and tells you exactly what to fix.",
    footer: "No credit card required for free tools · Cancel Pro anytime · Works on Chrome, Edge, Brave, Arc",
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
      { q: "Is Search Toolbox free?", a: "Yes. Over 60 SEO analysis tools, audits, and PDF reports are completely free with no account required. The only paid feature is the AI SEO Expert." },
      { q: "How is the AI different from ChatGPT?", a: "Generic AI tools make educated guesses about your page. The AI Expert reads the real data (schema, meta tags, redirect chains, etc.) to give specific, actionable recommendations." },
      { q: "Which browsers are supported?", a: "It works on all Chromium-based browsers, including Chrome, Edge, Brave, and Arc." },
      { q: "Does it work on any website?", a: "Yes, including localhost, staging environments, and password-protected pages. It analyzes the live DOM, supporting JavaScript content." },
      { q: "How is it different from DevTools?", a: "Search Toolbox is purpose-built for SEO workflows, featuring structured data validation, redirect chain tracing, and instant PDF reports." },
      { q: "Is my data private?", a: "Yes. Search Toolbox runs entirely in your browser. No page content or URL data is sent to external servers; your audits are fully local." },
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
      body: "From robots.txt to canonical conflicts, Pixly reveals the technical signals that search engines use to judge your site.",
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
    sub: "Analyze any page in seconds. From Dior to your local dev environment, Pixly handles complex technical audits with ease."
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
    rights: "© {year} Pixly SEO. All rights reserved."
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
    langToggle: "EN",
  },
  hero: {
    eyebrow: "Extension Chrome Native · 100% Privé · Pas de clé API",
    headline: "Votre Centre de Contrôle SEO Tout-en-Un",
    sub: "Arrêtez de jongler avec 10 extensions. Une barre latérale puissante pour auditer schema, tracer les redirections, vérifier hreflang et géo-simuler vos positions — instantanément.",
    cta: "Ajouter à Chrome — Gratuit",
    ctaSub: "Accès immédiat · Fonctionne en localhost & staging",
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
    sub: "Pixly vit là où vous travaillez : le navigateur. Il extrait chaque signal technique en temps réel. Pas de login, pas de complexité.",
    cta: "Installer Pixly Gratuitement",
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
        body: "Utilisez le raccourci ou cliquez sur l'icône. Pixly analyse la page instantanément.",
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
      subheadline: "La plupart des bots sont aveugles à votre code. Pixly analyse votre DOM live et votre code source pour donner des conseils qui fonctionnent vraiment.",
      features: [
        { title: "Conscience du DOM", desc: "Ne devine pas — lit votre HTML et vos Données Structurées." },
        { title: "Fixes Techniques", desc: "Obtenez des fragments de code pour corriger les erreurs." },
        { title: "Savoir Expert", desc: "Propulsé par la documentation Google Search la plus récente." },
        { title: "Zéro Latence", desc: "Analyse instantanée directement dans votre barre latérale." }
      ],
      primaryCta: "Tester l'Agent IA",
      secondaryCta: "En savoir plus"
    },
    page: {
      meta: {
        title: "Agent IA SEO Personnel — Votre Expert On-Page | Pixly",
        description: "Découvrez le premier agent IA SEO sensible au contexte. Il lit votre page, identifie les bloqueurs et donne des conseils experts instantanément."
      },
      hero: {
        headline: "Arrêtez de deviner. Pilotez votre SEO par IA.",
        subheadline: "Pixly connecte votre navigateur à un expert SEO de classe mondiale. Il connaît votre page avant même que vous ne posiez la question.",
        cta: "Débloquer l'Expert IA — 10 Crédits Gratuits"
      },
      problem: {
        title: "L'IA standard n'a pas vos données.",
        body: "ChatGPT ne voit pas votre environnement dev, vos sites staging ou votre schema temporaire malformé. Pixly, oui."
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
        title: "Pourquoi les Experts Choisissent Pixly",
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
      title: "Tarifs Simples et Transparents — Pixly SEO",
      description: "60+ outils gratuits à vie. Payez uniquement pour l'Agent IA. Choisissez le forfait qui vous convient."
    },
    headline: "Gratuit à vie. Payant uniquement pour l'IA.",
    subheadline: "60+ outils d'analyse, audits, rapports PDF — tout est 100% gratuit. La seule partie payante : un expert IA qui lit votre page et vous dit exactement quoi corriger.",
    footer: "Aucune carte bancaire requise · Annulez Pro à tout moment · Chrome, Edge, Brave, Arc",
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
      { q: "Est-ce que Search Toolbox est gratuit ?", a: "Oui. Plus de 60 outils, audits et rapports PDF sont gratuits sans compte. Seul l'Expert IA SEO est une fonctionnalité payante." },
      { q: "Quelle différence avec ChatGPT ?", a: "ChatGPT devine. L'Expert IA lit les données réelles de votre page (schema, meta tags, redirections) pour donner des conseils précis." },
      { q: "Quels navigateurs sont supportés ?", a: "Tous les navigateurs basés sur Chromium : Chrome, Edge, Brave, Arc." },
      { q: "Cela fonctionne-t-il sur n'importe quel site ?", a: "Oui, y compris localhost, staging et pages protégées. L'extension analyse le DOM en direct." },
      { q: "Quelle différence avec les DevTools ?", a: "Search Toolbox est conçu pour le SEO : validation de données structurées, tracé de redirections et rapports PDF instantanés." },
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
      body: "Du robots.txt aux conflits de canoniques, Pixly révèle les signaux techniques que Google utilise.",
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
    sub: "Analysez n'importe quelle page en quelques secondes. De Dior à votre environnement local, Pixly gère vos audits complexes."
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
    rights: "© {year} Pixly SEO. Tous droits réservés."
  }
}

export const translations = { en, fr }
