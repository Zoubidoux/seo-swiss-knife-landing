export type Lang = 'en' | 'fr'

const en = {
  nav: {
    features: 'Features',
    howItWorks: 'How it works',
    faq: 'FAQ',
    install: 'Install Free',
    langToggle: 'FR',
  },
  hero: {
    eyebrow: 'Chrome Extension · 100% Free',
    headline: 'SEO Swiss Knife',
    sub: 'The most powerful on-page SEO toolkit ever built for Chrome. 20+ tools in one sidebar — audit, inspect, report.',
    cta: 'Add to Chrome — Free',
    ctaSub: 'No account required',
  },
  proof: {
    label: 'Relied on by SEO professionals across the globe',
  },
  problem: {
    eyebrow: 'The Problem',
    headline: 'Every SEO audit feels like assembling IKEA furniture without the manual',
    sub: 'You know what needs checking. But your tools are scattered, your workflow is broken, and the clock is ticking.',
    pains: [
      {
        icon: '⏱',
        title: '5+ tabs open just to audit one page',
        body: 'Schema validator here, robots checker there, redirect tracer somewhere else. Context-switching kills your focus and doubles your audit time.',
      },
      {
        icon: '🔍',
        title: 'Missing critical issues until it\'s too late',
        body: 'Broken hreflang tags, missing canonical, malformed structured data — small errors that cost rankings and take days to appear in Search Console.',
      },
      {
        icon: '📉',
        title: 'Clients want reports. You\'re still building them manually.',
        body: 'Copy-pasting meta tags and heading counts into spreadsheets. There\'s no time to fix real problems when manual reporting eats 2 hours per site.',
      },
    ],
  },
  solution: {
    eyebrow: 'The Solution',
    headline: 'One panel.\nEvery SEO tool you need.',
    sub: 'SEO Swiss Knife lives in your browser sidebar. Open a tab, get instant insights — no login, no API key, no context switching.',
    cta: 'Add to Chrome — It\'s Free',
  },
  features: {
    eyebrow: 'Features',
    headline: '20+ tools. One sidebar.',
    sub: 'Everything a technical SEO needs, grouped logically and accessible with a single click.',
    items: [
      {
        icon: '◉', color: '#a78bfa', label: 'Semantic',
        title: 'Full Page Overview',
        desc: 'Instant snapshot of title length & score, meta description quality, canonical URL, robots directives, Open Graph, Twitter Card, viewport, charset — all in one card with copy buttons and char-count badges.',
      },
      {
        icon: '¶', color: '#a78bfa', label: 'Semantic',
        title: 'Heading Hierarchy Audit',
        desc: 'Visual H1–H6 tree with depth analysis. Detects missing H1, multiple H1s, skipped heading levels (H2→H4), and nested hierarchy issues that confuse crawlers and screen readers.',
      },
      {
        icon: '⬡', color: '#a78bfa', label: 'Semantic',
        title: 'Social Media Preview',
        desc: 'See exactly how your page renders on Twitter/X, Facebook, LinkedIn, and WhatsApp. Live OG tag + Twitter Card preview with image, title, description, and domain label side by side.',
      },
      {
        icon: '{}', color: '#a78bfa', label: 'Semantic',
        title: 'Schema / Structured Data Inspector',
        desc: 'Extract and validate every JSON-LD, Microdata, and RDFa block on the page. Syntax-highlighted, expandable, with property-level error flags and one-click copy. Catch schema issues before Google does.',
      },
      {
        icon: '☸', color: '#a78bfa', label: 'Semantic',
        title: 'Hreflang Deep Auditor',
        desc: 'Parse all hreflang tags, validate return links, detect missing x-default, flag language/region format mismatches, and identify orphan alternate pages across your international SEO setup.',
      },
      {
        icon: '⬸', color: '#a78bfa', label: 'Semantic',
        title: 'URL Variants Checker',
        desc: 'Detect all canonical variants of a URL: www/non-www, HTTP/HTTPS, trailing slash, uppercase vs lowercase. Understand exactly which URL Google is consolidating signals to.',
      },
      {
        icon: '⊖', color: '#39d3ff', label: 'Technical',
        title: 'Robots & Crawl Directives',
        desc: 'Check robots.txt rules, X-Robots-Tag response headers, and meta robots in one view. Simulate Googlebot, Bingbot, and other crawlers to understand precisely what is and isn\'t allowed to be indexed.',
      },
      {
        icon: '⇕', color: '#39d3ff', label: 'Technical',
        title: 'Redirect Chain Tracer',
        desc: 'Follow every hop in a redirect chain — 301, 302, 307, 308 and beyond — with status codes, response times per hop, and final destination. Detect redirect loops and unnecessary hops in one click.',
      },
      {
        icon: '◇', color: '#39d3ff', label: 'Technical',
        title: 'Image SEO Audit',
        desc: 'Every image on the page: src, alt text, title, dimensions, format, file size, loading attribute. Highlight missing alt, oversized images, and bad formats. Export as CSV or download all images as a ZIP.',
      },
      {
        icon: '△', color: '#39d3ff', label: 'Technical',
        title: 'CSS / DevTools Inspector',
        desc: 'Click any element on the page and inspect its computed CSS properties directly in the panel. Find the styles responsible for layout issues without leaving SEO context.',
      },
      {
        icon: '</>', color: '#39d3ff', label: 'Technical',
        title: 'Source Code Viewer',
        desc: 'View the raw HTML source of the current page with syntax highlighting inside the panel. Compare the rendered DOM vs the original HTML to catch JavaScript-injected content issues.',
      },
      {
        icon: '⟨⟩', color: '#39d3ff', label: 'Technical',
        title: 'JS Render Comparison',
        desc: 'Compare the page before and after JavaScript execution. Spot content that only exists in the rendered DOM — invisible to crawlers that don\'t execute JS — and fix your indexability.',
      },
      {
        icon: '⇄', color: '#2dd4bf', label: 'Netlinking',
        title: 'Full Link Audit',
        desc: 'List every internal and external link on the page: URL, anchor text, rel attributes (nofollow, sponsored, ugc), status, and open-in-new-tab flag. Export as CSV. Filter by type, status, or attribute.',
      },
      {
        icon: '🌐', color: '#facc15', label: 'Toolbox',
        title: 'SERP VPN — Geo Simulation',
        desc: 'Simulate searches and page visits from 50+ countries and devices without routing your traffic through a real VPN. Check geo-specific SERP results, content variations, and CDN serving differences.',
      },
      {
        icon: '⌘', color: '#facc15', label: 'Toolbox',
        title: 'SERP Power Tools',
        desc: 'Pre-built Google search operators: site:, inurl:, intitle:, cache:, related: — plus duplicate content checker, indexed page count, and cached version viewer. Power-user SERP research in one click.',
      },
      {
        icon: '⚙', color: '#facc15', label: 'Toolbox',
        title: 'Google Dorks Launcher',
        desc: 'Fire precision Google dork queries to discover exposed files, indexed sensitive pages, competitor analysis, and indexability issues. Organized by category with custom dork input.',
      },
      {
        icon: '📱', color: '#facc15', label: 'Toolbox',
        title: 'Mobile / Desktop Preview',
        desc: 'Preview any page inside an accurate device frame: iPhone 17, iPad, Pixel, Galaxy, and more. Instantly see how your content, CTAs, and fonts behave on small screens without a real device.',
      },
      {
        icon: '🍪', color: '#facc15', label: 'Toolbox',
        title: 'Cookie Editor',
        desc: 'View, edit, add, or delete cookies for the current site. Export and import cookie sets. Useful for testing personalization, geolocation, and consent-based content variations.',
      },
      {
        icon: '♻', color: '#facc15', label: 'Toolbox',
        title: 'Cache & Storage Cleaner',
        desc: 'Clear browser cache, cookies, localStorage, and sessionStorage for the current site with a single click. Choose time ranges. Essential for testing cache headers and CDN behavior.',
      },
      {
        icon: '⬛', color: '#facc15', label: 'Toolbox',
        title: 'User Agent Switcher',
        desc: 'Instantly switch your browser\'s User Agent to Googlebot Desktop, Googlebot Mobile, Bingbot, or any custom UA string. See exactly what crawlers see when they visit your page.',
      },
      {
        icon: '≡', color: '#facc15', label: 'Toolbox',
        title: 'SEO Glossary / Lexique',
        desc: '150+ SEO terms defined in plain language. Canonical, Crawl Budget, E-E-A-T, Core Web Vitals, Hreflang, Canonicalization — look up any concept without leaving the extension.',
      },
      {
        icon: '📋', color: '#facc15', label: 'Toolbox',
        title: 'SEO Report & Export',
        desc: 'Generate a full weighted SEO audit score covering 8 categories (Indexability, On-Page, Structure, Technical, Speed signals, Social, Schema, Links). Export as PDF or open in a shareable standalone URL. Client-ready in under 10 seconds.',
      },
    ],
  },
  spotlight: [
    {
      eyebrow: 'Page Analysis',
      title: 'Complete page audit in under a second',
      body: 'Open the panel on any page and instantly see title length, meta description quality, canonical URL, robots directives, Open Graph tags, structured data count — all scored and flagged in real-time.',
      bullets: [
        'Char count badges with good/warn/bad thresholds',
        'Indexed / noindex status at a glance',
        'Weighted SEO score with per-category breakdown',
        'One-click copy for every meta field',
      ],
    },
    {
      eyebrow: 'Redirect Tracer',
      title: 'Follow every hop. Catch every issue.',
      body: 'Paste any URL and trace the full redirect chain with HTTP status codes, response times per hop, and the final destination. Spot redirect loops, unnecessary hops, and HTTPS migration problems in seconds.',
      bullets: [
        'Supports 301, 302, 307, 308 and all 3xx codes',
        'Response time measurement per hop',
        'Detects redirect loops automatically',
        'Works on any URL — not just the current page',
      ],
    },
    {
      eyebrow: 'Schema Inspector',
      title: 'Validate structured data without leaving the page',
      body: 'Extract every JSON-LD, Microdata, and RDFa block. Syntax-highlighted, fully expandable, with property-level validation. Know exactly what Google is reading before you publish.',
      bullets: [
        'JSON-LD, Microdata, RDFa all supported',
        'Syntax-highlighted expandable view',
        'Property-level error flags and warnings',
        'Copy full schema block with one click',
      ],
    },
  ],
  howItWorks: {
    eyebrow: 'How it works',
    headline: 'Up and running in 60 seconds',
    steps: [
      {
        num: '01',
        title: 'Install the extension',
        body: 'One click from the Chrome Web Store. No account, no credit card, no setup wizard. Works on Chrome, Edge, Brave and Arc.',
      },
      {
        num: '02',
        title: 'Open the side panel',
        body: 'Click the SEO Swiss Knife icon or use the keyboard shortcut. The panel opens on any page in under a second.',
      },
      {
        num: '03',
        title: 'Audit, fix, and export',
        body: 'Navigate 20+ tools in the sidebar. Run audits, trace redirects, validate schema, and export a weighted PDF report.',
      },
    ],
  },
  contextMenu: {
    eyebrow: 'Context Menu',
    headline: 'Every tool is one right-click away',
    sub: 'Access all key actions directly from the browser context menu — no need to open the panel first. Configurable from Settings.',
  },
  video: {
    eyebrow: 'Live Demo',
    headline: 'See it in action',
    sub: 'Watch a real audit on a live website — from meta tag inspection to schema validation, redirect tracing, and PDF report export.',
  },
  allFeatures: {
    eyebrow: 'Complete Feature List',
    headline: 'Everything you get',
    sub: 'Every tool, every shortcut, every capability. Search or filter by category.',
    placeholder: 'Search features...',
    all: 'All',
  },
  faq: {
    eyebrow: 'FAQ',
    headline: 'Questions you\'ll ask anyway',
    items: [
      { q: 'Is SEO Swiss Knife free?', a: 'Yes. The core extension is completely free — no account required, no credit card. Install directly from the Chrome Web Store and start auditing immediately.' },
      { q: 'Which browsers are supported?', a: 'SEO Swiss Knife works on all Chromium-based browsers: Chrome, Edge, Brave, and Arc. Firefox support is on the roadmap.' },
      { q: 'Does it work on any website?', a: 'It works on any public URL, staging environments, localhost, and password-protected pages when you\'re already authenticated. It analyses the live DOM so JavaScript-rendered content is fully supported.' },
      { q: 'How is it different from DevTools?', a: 'DevTools is built for developers. SEO Swiss Knife is purpose-built for SEO workflows — structured data validation, redirect chains, hreflang auditing, robots parsing, SERP VPN, PDF reports — things DevTools simply don\'t have.' },
      { q: 'Is my data private?', a: 'Yes. SEO Swiss Knife runs entirely in your browser. No page content or URL data is ever sent to external servers. Your audits are fully local.' },
      { q: 'Can I export or share reports?', a: 'Yes. The Report tab generates a full weighted SEO score broken down by category. Download as PDF or open in a standalone shareable URL — client-ready in under 10 seconds.' },
      { q: 'Can I hide tabs I don\'t use?', a: 'Absolutely. The Settings panel lets you hide any tab, set a default landing tab, configure keyboard shortcuts for every section, and customise the context menu.' },
      { q: 'Does the SERP VPN route my real traffic?', a: 'No. SERP VPN spoofs browser headers and geolocation signals to simulate how Google serves results in a given country. It does not route your actual network traffic through a VPN server.' },
    ],
  },
  cta: {
    quote: '"It replaced 6 separate browser extensions for me. I open it on every client site before anything else."',
    stats: [
      { value: '20+', label: 'Built-in tools' },
      { value: '0s', label: 'Setup time' },
      { value: '100%', label: 'Local & private' },
    ],
    headline: 'The last SEO extension\nyou\'ll ever install.',
    cta: 'Add to Chrome — It\'s Free',
    ctaSub: 'No account required · Chrome, Edge, Brave & Arc',
  },
  footer: {
    privacy: 'Privacy',
    store: 'Chrome Web Store',
    rights: '© {year} SEO Swiss Knife',
  },
}

const fr: typeof en = {
  nav: {
    features: 'Fonctionnalités',
    howItWorks: 'Fonctionnement',
    faq: 'FAQ',
    install: 'Installer Gratuitement',
    langToggle: 'EN',
  },
  hero: {
    eyebrow: 'Extension Chrome · 100% Gratuit',
    headline: 'SEO Swiss Knife',
    sub: "La suite SEO on-page la plus puissante jamais créée pour Chrome. 20+ outils dans un seul panneau — audit, inspection, rapport.",
    cta: 'Ajouter à Chrome — Gratuit',
    ctaSub: 'Aucun compte requis',
  },
  proof: {
    label: "Utilisé par des professionnels SEO partout dans le monde",
  },
  problem: {
    eyebrow: 'Le Problème',
    headline: 'Chaque audit SEO ressemble à monter des meubles IKEA sans la notice',
    sub: 'Vous savez ce qu\'il faut vérifier. Mais vos outils sont éparpillés, votre workflow est cassé, et le temps tourne.',
    pains: [
      {
        icon: '⏱',
        title: '5+ onglets ouverts pour auditer une seule page',
        body: 'Validateur schema ici, vérificateur robots là, traceur de redirections ailleurs. Le changement de contexte tue votre concentration et double votre temps d\'audit.',
      },
      {
        icon: '🔍',
        title: 'Des problèmes critiques invisibles jusqu\'à ce qu\'il soit trop tard',
        body: 'Tags hreflang cassés, canonical manquant, données structurées malformées — de petites erreurs qui coûtent des positions et mettent des jours à remonter dans la Search Console.',
      },
      {
        icon: '📉',
        title: 'Les clients veulent des rapports. Vous les faites encore à la main.',
        body: 'Copier-coller des balises meta et des comptages de titres dans des tableurs. Impossible de corriger les vrais problèmes quand les rapports manuels prennent 2h par site.',
      },
    ],
  },
  solution: {
    eyebrow: 'La Solution',
    headline: 'Un seul panneau.\nTous vos outils SEO.',
    sub: 'SEO Swiss Knife vit dans la barre latérale de votre navigateur. Ouvrez un onglet, obtenez des insights instantanés — sans login, sans clé API, sans changer de contexte.',
    cta: 'Ajouter à Chrome — Gratuit',
  },
  features: {
    eyebrow: 'Fonctionnalités',
    headline: '20+ outils. Une seule barre latérale.',
    sub: 'Tout ce dont un SEO technique a besoin, organisé logiquement et accessible en un clic.',
    items: [
      {
        icon: '◉', color: '#a78bfa', label: 'Sémantique',
        title: 'Vue d\'ensemble complète',
        desc: 'Snapshot instantané : longueur & score du titre, qualité de la méta description, URL canonique, directives robots, Open Graph, Twitter Card, viewport, charset — en une carte avec boutons de copie et badges de comptage.',
      },
      {
        icon: '¶', color: '#a78bfa', label: 'Sémantique',
        title: 'Audit de Hiérarchie des Titres',
        desc: 'Arbre visuel H1–H6 avec analyse de profondeur. Détecte les H1 manquants, multiples H1, niveaux de titres sautés (H2→H4), et problèmes de hiérarchie imbriquée qui perturbent les crawlers.',
      },
      {
        icon: '⬡', color: '#a78bfa', label: 'Sémantique',
        title: 'Prévisualisation Réseaux Sociaux',
        desc: 'Voyez exactement comment votre page s\'affiche sur Twitter/X, Facebook, LinkedIn et WhatsApp. Prévisualisation live des balises OG + Twitter Card avec image, titre, description et libellé de domaine côte à côte.',
      },
      {
        icon: '{}', color: '#a78bfa', label: 'Sémantique',
        title: 'Inspecteur Schema / Données Structurées',
        desc: 'Extrayez et validez chaque bloc JSON-LD, Microdata et RDFa. Surbrillance syntaxique, extensible, avec indicateurs d\'erreur au niveau des propriétés. Détectez les problèmes schema avant Google.',
      },
      {
        icon: '☸', color: '#a78bfa', label: 'Sémantique',
        title: 'Auditeur Hreflang Avancé',
        desc: 'Parsez tous les tags hreflang, validez les liens de retour, détectez le x-default manquant, signalez les incompatibilités de format langue/région, et identifiez les pages alternatives orphelines dans votre SEO international.',
      },
      {
        icon: '⬸', color: '#a78bfa', label: 'Sémantique',
        title: 'Vérificateur de Variantes d\'URL',
        desc: 'Détectez toutes les variantes canoniques d\'une URL : www/non-www, HTTP/HTTPS, slash final, majuscules vs minuscules. Comprenez exactement quelle URL Google consolide comme référence.',
      },
      {
        icon: '⊖', color: '#39d3ff', label: 'Technique',
        title: 'Robots & Directives de Crawl',
        desc: 'Vérifiez les règles robots.txt, les en-têtes X-Robots-Tag et les meta robots en une vue. Simulez Googlebot, Bingbot et d\'autres crawlers pour comprendre précisément ce qui est ou non autorisé à l\'indexation.',
      },
      {
        icon: '⇕', color: '#39d3ff', label: 'Technique',
        title: 'Traceur de Chaîne de Redirections',
        desc: 'Suivez chaque saut dans une chaîne de redirections — 301, 302, 307, 308 et plus — avec codes de statut, temps de réponse par saut et destination finale. Détectez les boucles et sauts inutiles en un clic.',
      },
      {
        icon: '◇', color: '#39d3ff', label: 'Technique',
        title: 'Audit SEO des Images',
        desc: 'Toutes les images de la page : src, alt, title, dimensions, format, taille de fichier, attribut loading. Surlignez les alt manquants, images surdimensionnées et mauvais formats. Export CSV ou ZIP.',
      },
      {
        icon: '△', color: '#39d3ff', label: 'Technique',
        title: 'Inspecteur CSS / DevTools',
        desc: 'Cliquez sur n\'importe quel élément de la page et inspectez ses propriétés CSS calculées directement dans le panneau. Trouvez les styles responsables de problèmes de mise en page sans quitter le contexte SEO.',
      },
      {
        icon: '</>', color: '#39d3ff', label: 'Technique',
        title: 'Visualiseur de Code Source',
        desc: 'Voir le code HTML source brut de la page avec surbrillance syntaxique dans le panneau. Comparez le DOM rendu avec le HTML d\'origine pour détecter les problèmes de contenu injecté par JavaScript.',
      },
      {
        icon: '⟨⟩', color: '#39d3ff', label: 'Technique',
        title: 'Comparaison Rendu JS',
        desc: 'Comparez la page avant et après l\'exécution JavaScript. Repérez le contenu qui n\'existe que dans le DOM rendu — invisible pour les crawlers qui n\'exécutent pas le JS — et corrigez votre indexabilité.',
      },
      {
        icon: '⇄', color: '#2dd4bf', label: 'Netlinking',
        title: 'Audit Complet des Liens',
        desc: 'Listez tous les liens internes et externes : URL, ancre, attributs rel (nofollow, sponsored, ugc), statut, ouverture nouvel onglet. Export CSV. Filtrez par type, statut ou attribut.',
      },
      {
        icon: '🌐', color: '#facc15', label: 'Outils',
        title: 'SERP VPN — Simulation Géo',
        desc: 'Simulez des recherches depuis 50+ pays et appareils sans router votre trafic via un vrai VPN. Vérifiez les résultats SERP géo-spécifiques, variations de contenu et différences de serving CDN.',
      },
      {
        icon: '⌘', color: '#facc15', label: 'Outils',
        title: 'Outils SERP Avancés',
        desc: 'Opérateurs de recherche Google préconfiguréss : site:, inurl:, intitle:, cache:, related: — plus vérificateur de contenu dupliqué, comptage de pages indexées et visualiseur de version en cache.',
      },
      {
        icon: '⚙', color: '#facc15', label: 'Outils',
        title: 'Lanceur de Google Dorks',
        desc: 'Lancez des requêtes Google Dork précises pour découvrir des fichiers exposés, pages sensibles indexées, analyse concurrentielle et problèmes d\'indexabilité. Organisé par catégorie avec saisie de dork personnalisée.',
      },
      {
        icon: '📱', color: '#facc15', label: 'Outils',
        title: 'Prévisualisation Mobile / Desktop',
        desc: 'Prévisualisez n\'importe quelle page dans un cadre d\'appareil précis : iPhone 17, iPad, Pixel, Galaxy et plus. Voyez instantanément comment votre contenu, CTA et polices se comportent sur petit écran.',
      },
      {
        icon: '🍪', color: '#facc15', label: 'Outils',
        title: 'Éditeur de Cookies',
        desc: 'Affichez, modifiez, ajoutez ou supprimez les cookies du site courant. Exportez et importez des jeux de cookies. Utile pour tester la personnalisation, la géolocalisation et les variations de contenu basées sur le consentement.',
      },
      {
        icon: '♻', color: '#facc15', label: 'Outils',
        title: 'Nettoyeur de Cache & Stockage',
        desc: 'Effacez cache navigateur, cookies, localStorage et sessionStorage pour le site courant en un clic. Choisissez les plages horaires. Essentiel pour tester les en-têtes de cache et le comportement CDN.',
      },
      {
        icon: '⬛', color: '#facc15', label: 'Outils',
        title: 'Switcher de User Agent',
        desc: 'Changez instantanément votre User Agent vers Googlebot Desktop, Googlebot Mobile, Bingbot ou toute chaîne UA personnalisée. Voyez exactement ce que voient les crawlers quand ils visitent votre page.',
      },
      {
        icon: '≡', color: '#facc15', label: 'Outils',
        title: 'Glossaire SEO / Lexique',
        desc: '150+ termes SEO définis en langage clair. Canonical, Budget de Crawl, E-E-A-T, Core Web Vitals, Hreflang, Canonicalisation — consultez n\'importe quel concept sans quitter l\'extension.',
      },
      {
        icon: '📋', color: '#facc15', label: 'Outils',
        title: 'Rapport SEO & Export',
        desc: 'Générez un score d\'audit SEO pondéré couvrant 8 catégories. Export PDF ou URL partageable autonome — prêt pour les clients en moins de 10 secondes.',
      },
    ],
  },
  spotlight: [
    {
      eyebrow: 'Analyse de Page',
      title: 'Audit complet en moins d\'une seconde',
      body: 'Ouvrez le panneau sur n\'importe quelle page et voyez instantanément longueur du titre, qualité de la méta description, URL canonique, directives robots, balises Open Graph, nombre de données structurées — tout scoré et signalé en temps réel.',
      bullets: [
        'Badges de comptage avec seuils bon/avertissement/mauvais',
        'Statut indexé / noindex en un coup d\'œil',
        'Score SEO pondéré avec détail par catégorie',
        'Copie en un clic pour chaque champ meta',
      ],
    },
    {
      eyebrow: 'Traceur de Redirections',
      title: 'Suivez chaque saut. Détectez chaque problème.',
      body: 'Collez n\'importe quelle URL et tracez la chaîne de redirections complète avec codes de statut, temps de réponse par saut et destination finale. Détectez boucles, sauts inutiles et problèmes de migration HTTPS en secondes.',
      bullets: [
        'Supporte 301, 302, 307, 308 et tous les codes 3xx',
        'Mesure du temps de réponse par saut',
        'Détection automatique des boucles de redirection',
        'Fonctionne sur n\'importe quelle URL — pas seulement la page courante',
      ],
    },
    {
      eyebrow: 'Inspecteur Schema',
      title: 'Validez vos données structurées sans quitter la page',
      body: 'Extrayez chaque bloc JSON-LD, Microdata et RDFa. Avec surbrillance syntaxique, extensible, et indicateurs d\'erreur au niveau des propriétés. Sachez exactement ce que Google lit avant de publier.',
      bullets: [
        'JSON-LD, Microdata, RDFa tous supportés',
        'Vue extensible avec surbrillance syntaxique',
        'Indicateurs d\'erreur et avertissements par propriété',
        'Copiez le bloc schema complet en un clic',
      ],
    },
  ],
  howItWorks: {
    eyebrow: 'Comment ça marche',
    headline: 'Opérationnel en 60 secondes',
    steps: [
      {
        num: '01',
        title: 'Installez l\'extension',
        body: 'Un clic depuis le Chrome Web Store. Aucun compte, aucune carte bancaire, aucun assistant de configuration. Compatible Chrome, Edge, Brave et Arc.',
      },
      {
        num: '02',
        title: 'Ouvrez le panneau latéral',
        body: 'Cliquez sur l\'icône SEO Swiss Knife ou utilisez le raccourci clavier. Le panneau s\'ouvre sur n\'importe quelle page en moins d\'une seconde.',
      },
      {
        num: '03',
        title: 'Auditez, corrigez, exportez',
        body: 'Naviguez parmi 20+ outils dans la barre latérale. Lancez des audits, tracez des redirections, validez des schemas et exportez un rapport PDF pondéré.',
      },
    ],
  },
  contextMenu: {
    eyebrow: 'Menu Contextuel',
    headline: 'Chaque outil en un clic droit',
    sub: 'Accédez à toutes les actions clés directement depuis le menu contextuel du navigateur — sans ouvrir le panneau. Configurable depuis les Paramètres.',
  },
  video: {
    eyebrow: 'Démo Live',
    headline: 'Voyez-le en action',
    sub: 'Regardez un vrai audit sur un site live — inspection des balises meta, validation schema, tracé de redirections et export de rapport PDF.',
  },
  allFeatures: {
    eyebrow: 'Liste Complète des Fonctionnalités',
    headline: 'Tout ce que vous obtenez',
    sub: 'Chaque outil, chaque raccourci, chaque capacité. Recherchez ou filtrez par catégorie.',
    placeholder: 'Rechercher une fonctionnalité...',
    all: 'Tout',
  },
  faq: {
    eyebrow: 'FAQ',
    headline: 'Les questions que vous poserez de toute façon',
    items: [
      { q: 'SEO Swiss Knife est-il gratuit ?', a: 'Oui. L\'extension de base est entièrement gratuite — aucun compte requis, aucune carte bancaire. Installez directement depuis le Chrome Web Store et commencez à auditer immédiatement.' },
      { q: 'Quels navigateurs sont supportés ?', a: 'SEO Swiss Knife fonctionne sur tous les navigateurs basés sur Chromium : Chrome, Edge, Brave et Arc. Le support Firefox est en cours de développement.' },
      { q: 'Fonctionne-t-il sur tous les sites ?', a: 'Il fonctionne sur n\'importe quelle URL publique, environnements de staging, localhost et pages protégées par mot de passe quand vous êtes déjà authentifié. Il analyse le DOM live donc le contenu rendu par JavaScript est entièrement supporté.' },
      { q: 'En quoi est-il différent des DevTools ?', a: 'Les DevTools sont conçus pour les développeurs. SEO Swiss Knife est conçu spécifiquement pour les workflows SEO — validation des données structurées, chaînes de redirections, audit hreflang, parsing robots, SERP VPN, rapports PDF — des choses que les DevTools n\'ont tout simplement pas.' },
      { q: 'Mes données sont-elles privées ?', a: 'Oui. SEO Swiss Knife fonctionne entièrement dans votre navigateur. Aucun contenu de page ni donnée d\'URL n\'est jamais envoyé à des serveurs externes. Vos audits sont totalement locaux.' },
      { q: 'Puis-je exporter ou partager des rapports ?', a: 'Oui. L\'onglet Rapport génère un score SEO pondéré complet ventilé par catégorie. Téléchargez en PDF ou ouvrez dans une URL autonome partageable — prêt pour les clients en moins de 10 secondes.' },
      { q: 'Puis-je masquer les onglets que je n\'utilise pas ?', a: 'Absolument. Le panneau Paramètres vous permet de masquer n\'importe quel onglet, définir un onglet de démarrage par défaut, configurer des raccourcis clavier pour chaque section et personnaliser le menu contextuel.' },
      { q: 'Le SERP VPN route-t-il vraiment mon trafic ?', a: 'Non. Le SERP VPN falsifie les en-têtes du navigateur et les signaux de géolocalisation pour simuler comment Google sert les résultats dans un pays donné. Il ne route pas votre trafic réseau réel via un serveur VPN.' },
    ],
  },
  cta: {
    quote: '"Il a remplacé 6 extensions de navigateur séparées pour moi. Je l\'ouvre sur chaque site client avant toute chose."',
    stats: [
      { value: '20+', label: 'Outils intégrés' },
      { value: '0s', label: 'Temps de configuration' },
      { value: '100%', label: 'Local & privé' },
    ],
    headline: 'La dernière extension SEO\nque vous installerez jamais.',
    cta: 'Ajouter à Chrome — Gratuit',
    ctaSub: 'Aucun compte requis · Chrome, Edge, Brave & Arc',
  },
  footer: {
    privacy: 'Confidentialité',
    store: 'Chrome Web Store',
    rights: '© {year} SEO Swiss Knife',
  },
}

export const translations = { en, fr }
