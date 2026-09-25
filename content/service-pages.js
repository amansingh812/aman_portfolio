/**
 * Individual service page data — rendered by app/services/[slug]/page.js.
 * Redesigned 26 Sep 2026 (spec: docs/SERVICE-PAGE-REDESIGN.md).
 *
 * RULES
 * - PRICES: never type a figure here. `pricing` lists references into
 *   content/pricing.js ({ tier: id } / { addon: name } / { retainer: true })
 *   and the template resolves them. Two figures that used to live here and
 *   nowhere else — "AU$500 SEO Audit" and "From AU$200 Pay Per Piece" — were
 *   dropped for that reason (CLAUDE.md §1). Add them to ADDONS if they are
 *   real offers and reference them here.
 * - PROOF: `heroShot` / `caseStudy` are case-study slugs. Only the four real
 *   clients (hs-race-gear, mobile-armour, autozenlyai; LT Finance has no case
 *   study) or a concept build that the template labels as one.
 * - Every capability ends in a link to the page that goes deeper. That is the
 *   point of the redesign: service pages were dead ends with 3 links out.
 * - Icons are names from the ICONS map in the template (inline SVG), never emoji.
 */

const CITY_LINKS = [
  { label: 'Sydney', href: '/web-design-sydney/' },
  { label: 'Melbourne', href: '/web-design-melbourne/' },
  { label: 'Brisbane', href: '/web-design-brisbane/' },
  { label: 'Perth', href: '/web-design-perth/' },
  { label: 'Adelaide', href: '/web-design-adelaide/' },
  { label: 'Canberra', href: '/web-design-canberra/' },
];

const WEB_PROCESS = [
  { title: 'Free call and fixed quote', body: 'We learn what the site has to achieve. You get a written scope and AUD price within 24 hours.' },
  { title: 'Homepage design, free', body: 'You see your homepage designed before you commit to the build.' },
  { title: 'Build', body: 'Custom code, mobile-first, with SEO and structured data built in rather than bolted on.' },
  { title: 'Test on every device', body: 'Speed, forms, accessibility and mobile layouts checked before anything goes live.' },
  { title: 'Launch and hand-over', body: 'Domain, hosting and code are transferred to you. Nothing is held back.' },
];

const SOFTWARE_PROCESS = [
  { title: 'Discovery call', body: 'We map the process the software has to replace: who uses it, what goes in, what comes out.' },
  { title: 'Written scope and fixed quote', body: 'A plain-English scope with screens, integrations and a fixed AUD price. No hourly billing.' },
  { title: 'Build in weekly slices', body: 'You see working software every week, not a big reveal at the end.' },
  { title: 'Test with real data', body: 'We run your actual cases through it before your team relies on it.' },
  { title: 'Launch, train and hand over', body: 'Your team is shown how it works, and the code and accounts are yours.' },
];

export const SERVICE_PAGES = [
  /* ─────────────────────────── WEB DEVELOPMENT ─────────────────────────── */
  {
    slug: 'web-development',
    title: 'Web Development',
    metaTitle: 'Web Development Australia | Modern Websites from AU$800',
    metaDescription: 'Custom websites for Australian businesses that load fast, rank on Google and win enquiries. Fixed AUD pricing from $800, free homepage design, you own the code.',
    eyebrow: 'Web development · Australia',
    h1: 'Web development for Australian businesses',
    h1Accent: 'that need more enquiries',
    hero: 'Websites that load fast, rank well and turn visitors into customers. Custom-built, fixed AUD price, and you own every line of code.',
    chips: [
      { pre: 'From', value: { tier: 'starter', field: 'priceLabel' } },
      { pre: 'Starter live in', value: { tier: 'starter', field: 'delivery' } },
      { value: 'Free', post: 'homepage design first' },
      { pre: 'You', value: 'own the code' },
    ],
    heroShot: 'hs-race-gear',
    intro: 'We build responsive, high-performance websites for Australian businesses, optimised for speed, SEO and mobile from day one. No templates, no page-builder lock-in and no monthly platform fees: a custom site built around your business, which you own outright.',
    capabilities: [
      { icon: 'monitor', title: 'Business websites', body: '5–15 pages, custom design, contact forms, and SEO and structured data built in from day one.', href: '/pricing/', link: 'See packages and prices' },
      { icon: 'home', title: 'Website redesigns', body: 'Rebuild a slow or dated site without losing your Google rankings. Redirects mapped, content kept.', href: '/small-business-website-redesign/', link: 'Website redesign' },
      { icon: 'cart', title: 'E-commerce stores', body: 'Stripe payments, product search and inventory, with no per-sale platform fees.', href: '/ecommerce-development/', link: 'E-commerce development' },
      { icon: 'grid', title: 'Web applications', body: 'Dashboards, client portals and booking systems: software that replaces the spreadsheet.', href: '/services/custom-software/', link: 'Custom software' },
      { icon: 'edit', title: 'Easy content editing', body: 'Update text, images and blog posts yourself, without touching code or calling us.', href: '/nextjs-development/', link: 'Next.js development' },
      { icon: 'bolt', title: 'Speed and SEO', body: 'We target Lighthouse 90+ and green Core Web Vitals, and you can check any site yourself.', href: '/website-speed-checker/', link: 'Free speed checker' },
    ],
    processTitle: 'How your website gets built',
    processLead: 'Five steps, a fixed price at step one, and a design you can see before you pay for the build.',
    process: WEB_PROCESS,
    processLink: { href: '/how-long-does-it-take-to-build-a-website/', label: 'How long each step takes' },
    outcomes: [
      { title: 'Pages load fast', body: 'Visitors don’t wait, and Google rewards speed.', tech: 'Next.js · static pages · global CDN' },
      { title: 'Found on Google', body: 'Structure search engines read correctly from launch.', tech: 'Semantic HTML · schema · sitemap' },
      { title: 'No lock-in', body: 'Leave any time and take everything with you.', tech: 'Your repo · your hosting · your domain' },
      { title: 'Low running costs', body: 'No page-builder plugins or platform fees.', tech: 'Hosting from $0/month', href: '/website-hosting-cost-australia/', link: 'Hosting costs explained' },
    ],
    outcomeLinks: [
      { href: '/wordpress-vs-custom-website/', label: 'WordPress vs custom' },
      { href: '/wix-vs-custom-website/', label: 'Wix vs custom' },
      { href: '/webflow-vs-custom-website/', label: 'Webflow vs custom' },
    ],
    pricing: [{ tier: 'starter' }, { tier: 'business' }, { tier: 'ecommerce' }],
    pricingExtras: [{ tier: 'unlimited' }, { addon: 'Booking system' }, { addon: 'AI chatbot' }, { retainer: true }],
    pricingLinks: [
      { href: '/pricing/', label: 'All packages and add-ons' },
      { href: '/how-much-does-a-website-cost-australia/', label: 'What a website costs in Australia' },
    ],
    caseStudy: 'hs-race-gear',
    compare: {
      title: 'How we compare',
      lead: 'The three usual routes to a small-business website, side by side.',
      cols: ['Build First Site', 'DIY builder (Wix, Squarespace)', 'Typical agency'],
      rows: [
        ['Price', { tier: 'starter', field: 'priceLabel', prefix: 'From ', suffix: ' fixed' }, { platform: 'wix', suffix: '/month, ongoing' }, 'Often quoted per project'],
        ['Who builds it', 'The engineer you talk to', 'You', 'Often a team you don’t meet'],
        ['You own the code', 'Yes, all of it', 'No', 'Varies'],
        ['Speed and SEO', 'Built in from day one', 'Limited by the platform', 'Varies'],
      ],
      links: [
        { href: '/freelancer-vs-web-design-agency/', label: 'Freelancer vs agency' },
        { href: '/hire-website-builder/', label: 'Hire someone to build a website' },
        { href: '/blog/best-web-design-agencies-australia/', label: 'Best web design agencies in Australia' },
      ],
    },
    faqs: [
      { q: 'How much does a website cost in Australia?', a: 'Our fixed prices start at $800 for 3–5 pages, $1,900 for up to 10 pages and $4,500 for an online store. All prices are in AUD and every package includes SEO setup and full code ownership.', href: '/how-much-does-a-website-cost-australia/', link: 'Full cost guide' },
      { q: 'How long does a website take to build?', a: 'A Starter site takes 5–7 days, a Business site 2–3 weeks and an online store 4–6 weeks from the day we have your content.' },
      { q: 'Do I own the website?', a: 'Yes. The code repository, hosting account and domain are handed to you on completion. No lock-in.' },
      { q: 'Can you redesign my existing site without losing rankings?', a: 'Yes. We keep your URLs where possible and map 301 redirects where they change, so the rankings you have carry over.', href: '/small-business-website-redesign/', link: 'Website redesign' },
      { q: 'Can I update the content myself?', a: 'Yes. Text, images and blog posts are editable without code.' },
      { q: 'What does it cost to run after launch?', a: 'Hosting for a site like this is often $0–40 a month. Our Care + SEO plan is optional at $250 a month.', href: '/website-hosting-cost-australia/', link: 'Hosting cost guide' },
    ],
    guides: [
      { tag: 'Cost', title: 'How much a website costs in Australia', href: '/how-much-does-a-website-cost-australia/' },
      { tag: 'Timeline', title: 'How long it takes to build a website', href: '/how-long-does-it-take-to-build-a-website/' },
      { tag: 'Running costs', title: 'Website hosting cost in Australia', href: '/website-hosting-cost-australia/' },
      { tag: 'Checklist', title: 'Small business website checklist', href: '/small-business-website-checklist/' },
    ],
    cities: true,
  },

  /* ───────────────────────── MOBILE APP DEVELOPMENT ───────────────────────── */
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    metaTitle: 'Mobile App Development Australia | iOS & Android from AU$4,500',
    metaDescription: 'Cross-platform mobile apps for Australian businesses. Flutter or React Native, one codebase, both app stores. Fixed AUD pricing from $4,500, and you own the code.',
    eyebrow: 'Mobile apps · iOS and Android',
    h1: 'Mobile app development in Australia',
    h1Accent: 'one codebase, both app stores',
    hero: 'iOS and Android apps built once in Flutter or React Native, for roughly half the cost of two separate native builds. Fixed AUD price, and the code is yours.',
    chips: [
      { pre: 'Apps from', value: { tier: 'application', field: 'priceLabel' } },
      { pre: 'Typical build', value: { tier: 'application', field: 'delivery' } },
      { value: 'iOS + Android', post: 'from one build' },
      { pre: 'You', value: 'own the code' },
    ],
    heroShot: 'autozenlyai',
    intro: 'We build cross-platform mobile apps with Flutter or React Native: iOS and Android from a single codebase. Push notifications, offline support, camera access and app store submission are included. And if a web app or PWA would do the job for less, we will tell you on the first call.',
    capabilities: [
      { icon: 'phone', title: 'Cross-platform apps', body: 'Flutter or React Native ships to both iOS and Android from one codebase. One budget, two stores.', href: '/pricing/', link: 'See app pricing' },
      { icon: 'download', title: 'Progressive web apps', body: 'When you don’t need the app stores, a PWA installs to the home screen, works offline and costs less.', href: '/services/web-development/', link: 'Web development' },
      { icon: 'server', title: 'Backend and API', body: 'Every app needs a backend. We build the API, database and login alongside the app so it all works together.', href: '/services/custom-software/', link: 'Custom software' },
      { icon: 'bell', title: 'Push notifications', body: 'Bring users back with targeted notifications on both platforms.', href: '/contact/', link: 'Discuss your app' },
      { icon: 'wifi', title: 'Offline support', body: 'Apps that keep working without a connection: essential for field work, logistics and regional areas.', href: '/contact/', link: 'Discuss your app' },
      { icon: 'sparkle', title: 'AI features', body: 'Chat assistants, recommendations and smart search built into the app, not bolted on.', href: '/services/ai-automation/', link: 'AI and automation' },
    ],
    processTitle: 'How your app gets built',
    processLead: 'A fixed scope before we start, working builds on your phone every week, and store submission handled for you.',
    process: [
      { title: 'Discovery call', body: 'We work out whether you need a native app, a PWA or a web app, and say so plainly.' },
      { title: 'Screens and fixed quote', body: 'Key screens mapped out, with a written scope and fixed AUD price.' },
      { title: 'Build and weekly test builds', body: 'You install test builds on your own phone as the app takes shape.' },
      { title: 'Device testing', body: 'Checked on iPhone and Android devices across screen sizes.' },
      { title: 'Store submission and hand-over', body: 'Published under your own developer accounts, with the code transferred to you.' },
    ],
    outcomes: [
      { title: 'Half the build cost', body: 'One codebase instead of two separate apps.', tech: 'Flutter or React Native' },
      { title: 'Both stores at once', body: 'Launch on iPhone and Android on the same day.', tech: 'App Store · Google Play' },
      { title: 'Works offline', body: 'Your users aren’t stuck when signal drops.', tech: 'Local storage · background sync' },
      { title: 'Yours to keep', body: 'Your developer accounts, your code, no lock-in.', tech: 'Full repo hand-over' },
    ],
    pricing: [{ tier: 'application' }, { tier: 'custom-software' }],
    pricingExtras: [{ addon: 'AI chatbot' }, { addon: 'Booking system' }, { retainer: true }],
    pricingLinks: [{ href: '/pricing/', label: 'All packages and add-ons' }],
    caseStudy: 'mobile-armour',
    compare: {
      title: 'Cross-platform vs two native apps',
      lead: 'Why most Australian small businesses don’t need two separate apps.',
      cols: ['Cross-platform (our approach)', 'Two native apps', 'Web app / PWA'],
      rows: [
        ['Codebases to maintain', 'One', 'Two', 'One'],
        ['App store presence', 'Yes, both stores', 'Yes, both stores', 'No'],
        ['Build cost', 'Lower', 'Roughly double', 'Lowest'],
        ['Best for', 'Most business apps', 'Heavy games, deep hardware use', 'Tools that don’t need the stores'],
      ],
      links: [{ href: '/services/web-development/', label: 'Web development' }, { href: '/services/custom-software/', label: 'Custom software' }],
    },
    faqs: [
      { q: 'Do I need a native app or a web app?', a: 'Most small businesses need a web app or PWA, not a store app. If your users need push notifications, offline use or the app stores, a cross-platform app is the right fit. We tell you which on the first call.' },
      { q: 'How much does an app cost in Australia?', a: 'A standard application is $4,500. Anything larger is custom software from $5,000, quoted against your requirements. Fixed quotes either way.', href: '/pricing/', link: 'See pricing' },
      { q: 'How long does it take to build an app?', a: 'A standard application typically takes 4–8 weeks. Larger custom builds are scoped per project.' },
      { q: 'Do you build for both iOS and Android?', a: 'Yes. One Flutter or React Native codebase ships to both stores. One build, one price.' },
      { q: 'Flutter or React Native: which do you use?', a: 'Both. We pick per project: React Native when the app shares code with a React website, Flutter when you want pixel-identical design on both platforms.' },
      { q: 'What does it cost to keep an app in the stores?', a: 'Apple charges US$99 a year for a developer account and Google charges a one-off US$25. The accounts are in your name, so you pay them directly.' },
    ],
    guides: [
      { tag: 'Pricing', title: 'Every package and add-on', href: '/pricing/' },
      { tag: 'AI', title: 'AI web development', href: '/ai-web-development/' },
      { tag: 'Hiring', title: 'Freelancer vs agency', href: '/freelancer-vs-web-design-agency/' },
      { tag: 'Work', title: 'See our case studies', href: '/work/' },
    ],
  },

  /* ─────────────────────────── CUSTOM SOFTWARE ─────────────────────────── */
  {
    slug: 'custom-software',
    title: 'Custom Software Development',
    metaTitle: 'Custom Software Development Australia | From AU$5,000',
    metaDescription: 'Custom software for Australian businesses: internal tools, client portals, dashboards and workflow automation. Fixed AUD quote from $5,000, and you own the code.',
    eyebrow: 'Custom software · Australia',
    h1: 'Custom software development in Australia',
    h1Accent: 'built around how you work',
    hero: 'Internal tools, client portals and automation that replace spreadsheets and manual steps. Scoped up front, fixed AUD price, and the code is yours.',
    chips: [
      { pre: 'Projects', value: { tier: 'custom-software', field: 'priceLabel' } },
      { pre: 'Apps and portals', value: { tier: 'application', field: 'priceLabel' } },
      { value: 'Fixed quote', post: 'before we start' },
      { pre: 'You', value: 'own the code' },
    ],
    heroShot: 'autozenlyai',
    intro: 'Off-the-shelf tools make you work their way. Custom software works yours: it automates manual processes, connects systems that don’t talk to each other and gives your team one place to manage the work. We build internal tools, admin dashboards, client portals and automation workflows on a modern stack that you own.',
    capabilities: [
      { icon: 'grid', title: 'Internal tools', body: 'Admin panels, dashboards and back-office tools that replace spreadsheets and manual processes.', href: '/pricing/', link: 'See pricing' },
      { icon: 'user', title: 'Client portals', body: 'Give customers a login to view orders, track progress, upload documents or manage their account.', href: '/services/web-development/', link: 'Web applications' },
      { icon: 'flow', title: 'Workflow automation', body: 'Approvals, notifications, data entry and report generation that run by themselves.', href: '/services/ai-automation/', link: 'AI and automation' },
      { icon: 'link', title: 'System integration', body: 'Connect your CRM, accounting, email, calendar and payments so data flows without re-typing.', href: '/contact/', link: 'Ask about your stack' },
      { icon: 'chart', title: 'Data and reporting', body: 'Live dashboards so decisions use today’s numbers, not last month’s export.', href: '/work/autozenlyai/', link: 'See a live example' },
      { icon: 'phone', title: 'Mobile companion apps', body: 'Put the same system in your team’s pocket on iOS and Android.', href: '/services/mobile-app-development/', link: 'Mobile apps' },
    ],
    processTitle: 'How your software gets built',
    processLead: 'You see working software every week, and the price is fixed before any code is written.',
    process: SOFTWARE_PROCESS,
    outcomes: [
      { title: 'Hours back each week', body: 'Manual steps handled by the system instead of your team.', tech: 'Automation · scheduled jobs' },
      { title: 'One source of truth', body: 'No more copying data between tools.', tech: 'APIs · integrations' },
      { title: 'Fits how you work', body: 'Built around your process, not a vendor’s template.', tech: 'Custom data model' },
      { title: 'No per-seat fees', body: 'Add staff without paying per user.', tech: 'Your hosting · your code' },
    ],
    pricing: [{ tier: 'application' }, { tier: 'custom-software' }],
    pricingExtras: [{ addon: 'AI chatbot' }, { addon: 'Booking system' }, { retainer: true }],
    pricingLinks: [{ href: '/pricing/', label: 'All packages and add-ons' }],
    caseStudy: 'autozenlyai',
    faqs: [
      { q: 'What kind of software do you build?', a: 'Internal tools, admin dashboards, client portals, workflow automation and API integrations: anything that replaces a manual process.' },
      { q: 'How much does custom software cost?', a: 'Standard applications such as portals and booking systems are $4,500. Larger custom software starts from $5,000 and is quoted against a written scope.', href: '/pricing/', link: 'See pricing' },
      { q: 'Can it connect to our existing systems?', a: 'Usually, yes. We integrate with CRMs, accounting software, payment platforms, calendars and most tools that have an API.' },
      { q: 'Is custom software better than an off-the-shelf tool?', a: 'Not always. If an existing tool fits your process, use it. Custom software pays off when you’re working around a tool every day or paying per seat for features you don’t use.' },
      { q: 'Who owns the software?', a: 'You do. The code repository, database and hosting accounts are handed over on completion.' },
      { q: 'What happens after launch?', a: 'You can maintain it yourself, hire any developer, or keep us on the optional Care plan. Nothing ties you to us.', href: '/services/maintenance-support/', link: 'Maintenance and support' },
    ],
    guides: [
      { tag: 'AI', title: 'AI and automation services', href: '/services/ai-automation/' },
      { tag: 'Industries', title: 'Software for your industry', href: '/industries/' },
      { tag: 'Pricing', title: 'Every package and add-on', href: '/pricing/' },
      { tag: 'Work', title: 'See our case studies', href: '/work/' },
    ],
  },

  /* ─────────────────────────── MARKETING & SEO ─────────────────────────── */
  {
    slug: 'marketing-seo',
    title: 'Marketing & SEO',
    metaTitle: 'SEO Services Australia for Small Business | From $250/month',
    metaDescription: 'SEO, local search, Google Business Profile and content for Australian small businesses. Month-to-month Care + SEO from $250/month, no lock-in contract.',
    eyebrow: 'SEO and marketing · Australia',
    h1: 'SEO and marketing for Australian small businesses',
    h1Accent: 'get found by customers already searching',
    hero: 'Technical SEO, local search and content that targets what your customers actually type into Google. Month to month, plain-English reporting, no lock-in.',
    chips: [
      { pre: 'Care + SEO', value: { retainer: true } },
      { pre: 'Month to', value: 'month' },
      { value: 'Free', post: 'speed checker' },
      { value: 'No lock-in', post: 'contract' },
    ],
    heroShot: 'harbour-plumbing',
    intro: 'Most small business websites are invisible on Google because nobody set up the basics. We fix that with technical SEO, local search optimisation, Google Business Profile setup, and content that targets what your customers actually search for. No jargon-filled reports and no mandatory retainer.',
    capabilities: [
      { icon: 'bolt', title: 'Technical SEO', body: 'Site speed, structured data, sitemaps, meta tags and Core Web Vitals: the foundation everything else builds on.', href: '/website-speed-checker/', link: 'Check your site speed' },
      { icon: 'pin', title: 'Local SEO', body: 'Google Business Profile, local citations, review strategy and location pages so you show up in map results.', href: '/web-design-melbourne/', link: 'Example: Melbourne page' },
      { icon: 'edit', title: 'Content strategy', body: 'Pages that target what customers search, one topic per page, written for people and structured for Google.', href: '/blog/', link: 'Read our guides' },
      { icon: 'list', title: 'On-page optimisation', body: 'Titles, descriptions, headings, internal links and image alt text across every page.', href: '/small-business-website-checklist/', link: 'Website checklist' },
      { icon: 'chart', title: 'Analytics setup', body: 'Google Analytics 4 and Search Console configured so you can see what’s working.', href: '/contact/', link: 'Ask for a review' },
      { icon: 'monitor', title: 'SEO-ready rebuilds', body: 'When the site itself is the problem, we rebuild it fast and keep your rankings.', href: '/small-business-website-redesign/', link: 'Website redesign' },
    ],
    processTitle: 'How we work on your SEO',
    processLead: 'Fix the foundation first, then build the pages that bring in enquiries, and report on it in plain English.',
    process: [
      { title: 'Audit', body: 'Speed, indexing, structure and competitors reviewed against what your customers search.' },
      { title: 'Fix the foundations', body: 'Technical issues, metadata, schema and Google Business Profile sorted first.' },
      { title: 'Build the right pages', body: 'Service and location pages aimed at searches that lead to enquiries.' },
      { title: 'Earn trust signals', body: 'Reviews, citations and links from real Australian sources.' },
      { title: 'Monthly report', body: 'What moved, what didn’t and what we’re doing next, in plain English.' },
    ],
    processLink: { href: '/website-speed-checker/', label: 'Start with a free speed check' },
    outcomes: [
      { title: 'Show up in map results', body: 'Local customers find you first.', tech: 'Google Business Profile · citations' },
      { title: 'Rank for buying searches', body: 'Pages aimed at people ready to hire.', tech: 'Keyword research · service pages' },
      { title: 'A faster site', body: 'Speed is a ranking signal and a conversion one.', tech: 'Core Web Vitals' },
      { title: 'Know what works', body: 'Plain-English numbers every month.', tech: 'GA4 · Search Console' },
    ],
    pricing: [{ retainer: true }],
    pricingExtras: [{ tier: 'starter' }, { tier: 'business' }, { addon: 'Copywriting' }, { addon: 'Extra page' }],
    pricingNote: 'One-off SEO work is quoted to scope.',
    pricingLinks: [{ href: '/pricing/', label: 'All packages and add-ons' }],
    caseStudy: 'harbour-plumbing',
    faqs: [
      { q: 'How long does SEO take to work?', a: 'Expect meaningful movement in 3–6 months. Anyone promising page one by next quarter is either lucky or not being straight with you.' },
      { q: 'How much does SEO cost in Australia?', a: 'Our Care + SEO plan is $250 a month, month to month, cancel with 30 days’ notice. It includes technical SEO, on-page work, one new page or post a month and a monthly report.', href: '/pricing/', link: 'See what’s included' },
      { q: 'Do I need a new website for SEO?', a: 'Not always. We can optimise an existing site if it’s fast and mobile-friendly. If it isn’t, we’ll tell you.' },
      { q: 'Do you guarantee rankings?', a: 'No. Nobody controls Google’s results, and a guarantee is a warning sign. We commit to the work and report honestly on what moves.' },
      { q: 'Do I have to sign a contract?', a: 'No. The plan is month to month with 30 days’ notice.' },
      { q: 'Can you set up my Google Business Profile?', a: 'Yes, including service areas, categories, photos and a review-request process.' },
    ],
    guides: [
      { tag: 'Speed', title: 'Free website speed checker', href: '/website-speed-checker/' },
      { tag: 'Checklist', title: 'Small business website checklist', href: '/small-business-website-checklist/' },
      { tag: 'Redesign', title: 'Redesign without losing rankings', href: '/small-business-website-redesign/' },
      { tag: 'Blog', title: 'All our guides', href: '/blog/' },
    ],
    cities: true,
  },

  /* ─────────────────────────── AI & AUTOMATION ─────────────────────────── */
  {
    slug: 'ai-automation',
    title: 'AI & Automation',
    metaTitle: 'AI Chatbot & Automation Development Australia | From $900',
    metaDescription: 'AI chatbots, lead qualification, booking automation and workflow AI for Australian businesses, built on OpenAI, Claude or Gemini. Fixed AUD pricing from $900.',
    eyebrow: 'AI and automation · Australia',
    h1: 'AI chatbots and automation for Australian businesses',
    h1Accent: 'that do a specific job',
    hero: 'AI that qualifies leads at 9pm, books appointments without a phone call and answers the questions your team handles every day. Built into your site, owned by you.',
    chips: [
      { pre: 'AI chatbot', value: { addon: 'AI chatbot' } },
      { pre: 'Full AI apps', value: { tier: 'application', field: 'priceLabel' } },
      { value: 'OpenAI, Claude', post: 'or Gemini' },
      { pre: 'You', value: 'own it' },
    ],
    heroShot: 'mobile-armour',
    intro: 'We build AI into your business where it actually helps: qualifying leads, booking appointments, recommending products and answering the same questions your team handles every day. Custom-built on OpenAI, Claude or Gemini, integrated into your existing site, and owned by you.',
    capabilities: [
      { icon: 'chat', title: 'AI chatbots', body: 'Assistants trained on your business that answer questions, capture enquiries and hand over to a person when needed.', href: '/ai-web-development/', link: 'AI web development' },
      { icon: 'filter', title: 'Lead qualification', body: 'AI that asks the right questions and separates serious enquiries before they reach you.', href: '/contact/', link: 'Discuss your leads' },
      { icon: 'calendar', title: 'Booking automation', body: 'Calendar-connected AI that qualifies and books appointments inside the conversation.', href: '/pricing/', link: 'Booking system pricing' },
      { icon: 'sparkle', title: 'Product recommendations', body: 'Guide shoppers to the right product based on what they need.', href: '/work/mobile-armour/', link: 'See it live' },
      { icon: 'flow', title: 'Workflow automation', body: 'Approvals, data entry, notifications and reports that run without anyone pressing a button.', href: '/services/custom-software/', link: 'Custom software' },
      { icon: 'link', title: 'Multi-model integrations', body: 'Several AI providers behind one product, with fallbacks when one is down.', href: '/work/autozenlyai/', link: 'See a live example' },
    ],
    processTitle: 'How we build your AI',
    processLead: 'Start with one job the AI should do well, prove it on your real questions, then expand.',
    process: [
      { title: 'Pick the job', body: 'We choose the one task where AI saves the most time or wins the most leads.' },
      { title: 'Gather your knowledge', body: 'Your FAQs, services, prices and policies become what the AI answers from.' },
      { title: 'Build and test on real questions', body: 'We test it against questions your customers actually ask.' },
      { title: 'Launch with guardrails', body: 'It says when it doesn’t know, hands over to a person, and logs every conversation.' },
      { title: 'Review and improve', body: 'Transcripts show where it struggles, and we tune it.' },
    ],
    outcomes: [
      { title: 'Leads answered 24/7', body: 'Enquiries handled while you’re on the tools.', tech: 'Chat · lead capture' },
      { title: 'Fewer repeat questions', body: 'Your team stops answering the same five things.', tech: 'Trained on your content' },
      { title: 'Bookings without calls', body: 'Customers book inside the conversation.', tech: 'Calendar integration' },
      { title: 'No platform lock-in', body: 'You pay the AI provider directly.', tech: 'OpenAI · Claude · Gemini' },
    ],
    pricing: [{ addon: 'AI chatbot' }, { tier: 'application' }, { tier: 'custom-software' }],
    pricingExtras: [{ addon: 'Booking system' }, { retainer: true }],
    pricingLinks: [{ href: '/pricing/', label: 'All packages and add-ons' }],
    caseStudy: 'mobile-armour',
    faqs: [
      { q: 'How much does an AI chatbot cost?', a: 'An AI chatbot trained on your content starts from $900. Larger AI applications, such as qualify-and-book flows, start at $4,500, and custom AI platforms from $5,000.', href: '/pricing/', link: 'See pricing' },
      { q: 'Will it make things up?', a: 'It answers from the information you supply and is instructed to say when it doesn’t know. You get full transcripts.' },
      { q: 'Are there ongoing costs?', a: 'You pay the AI provider directly for usage, typically a modest monthly amount. There’s no ongoing fee to us after the build.' },
      { q: 'Which AI model do you use?', a: 'OpenAI, Claude or Gemini, chosen for the job. We can put more than one behind the same product.' },
      { q: 'Can it hand over to a person?', a: 'Yes. It can pass the conversation to you by email or notification when a question needs a human.' },
      { q: 'Is customer data safe?', a: 'We build on the providers’ business APIs, which don’t use your data to train their models by default, and we walk you through where conversations are stored before launch.' },
    ],
    guides: [
      { tag: 'AI', title: 'AI web development', href: '/ai-web-development/' },
      { tag: 'Software', title: 'Custom software development', href: '/services/custom-software/' },
      { tag: 'Pricing', title: 'Every package and add-on', href: '/pricing/' },
      { tag: 'Work', title: 'See our case studies', href: '/work/' },
    ],
  },

  /* ─────────────────────────── MAINTENANCE & SUPPORT ─────────────────────────── */
  {
    slug: 'maintenance-support',
    title: 'Maintenance & Support',
    metaTitle: 'Website Maintenance & Support Australia | $250/month',
    metaDescription: 'Website hosting, security, backups, updates and SEO for Australian businesses. Care + SEO at $250/month, month to month, cancel with 30 days’ notice.',
    eyebrow: 'Maintenance and support',
    h1: 'Website maintenance and support in Australia',
    h1Accent: 'so your site stays fast and safe',
    hero: 'Hosting, security updates, backups, speed monitoring and a new page every month, handled for one fixed monthly price. Month to month, no lock-in.',
    chips: [
      { pre: 'Care + SEO', value: { retainer: true } },
      { pre: 'Cancel with', value: '30 days’ notice' },
      { value: 'Weekly', post: 'backups' },
      { value: 'Priority', post: 'support' },
    ],
    heroShot: 'hs-race-gear',
    intro: 'A website doesn’t stop needing attention after launch. Security patches, dependency updates, performance monitoring and the occasional new feature: we handle all of it so you don’t have to. The plan is optional, and small one-off jobs are quoted individually.',
    capabilities: [
      { icon: 'shield', title: 'Security updates', body: 'Dependencies patched, vulnerabilities fixed and SSL managed. Your site stays secure without you thinking about it.', href: '/pricing/', link: 'See what’s included' },
      { icon: 'bolt', title: 'Speed monitoring', body: 'Uptime, speed and Core Web Vitals tracked, so we catch problems before customers do.', href: '/website-speed-checker/', link: 'Check your speed now' },
      { icon: 'edit', title: 'Content updates', body: 'Text changes, image swaps, new pages and blog posts, handled quickly.', href: '/contact/', link: 'Request an update' },
      { icon: 'server', title: 'Hosting', body: 'Fast, secure hosting included in the plan, with no surprise renewals.', href: '/website-hosting-cost-australia/', link: 'Hosting costs explained' },
      { icon: 'refresh', title: 'Backup and recovery', body: 'Weekly backups and a tested recovery process, so a bad day doesn’t mean starting over.', href: '/contact/', link: 'Ask a question' },
      { icon: 'chart', title: 'Monthly growth report', body: 'Traffic, enquiries and what’s working, in plain English.', href: '/services/marketing-seo/', link: 'Marketing and SEO' },
    ],
    processTitle: 'How the plan works',
    processLead: 'Simple, month to month, and you can leave with everything at any time.',
    process: [
      { title: 'Quick site review', body: 'We check speed, security and hosting before taking your site on.' },
      { title: 'Move or connect hosting', body: 'Your site moves to fast hosting, or we work with what you have.' },
      { title: 'Monthly care', body: 'Updates, backups, monitoring and one new page or post each month.' },
      { title: 'Ask anytime', body: 'Priority support when something needs changing.' },
      { title: 'Monthly report', body: 'Plain-English summary of what happened and what’s next.' },
    ],
    outcomes: [
      { title: 'Nothing breaks quietly', body: 'Problems are caught by monitoring, not customers.', tech: 'Uptime · error alerts' },
      { title: 'Always secure', body: 'Updates applied as they’re released.', tech: 'Dependency patching · SSL' },
      { title: 'Keeps climbing', body: 'Fresh content and SEO every month.', tech: 'One new page or post monthly' },
      { title: 'One predictable bill', body: 'Hosting, care and SEO in one price.', tech: 'Month to month' },
    ],
    pricing: [{ retainer: true }],
    pricingExtras: [{ addon: 'Extra page' }, { addon: 'Migration from Wix/WP' }],
    pricingNote: 'Small one-off jobs are quoted individually.',
    pricingLinks: [{ href: '/pricing/', label: 'All packages and add-ons' }],
    caseStudy: null,
    faqs: [
      { q: 'How much does website maintenance cost?', a: 'Our Care + SEO plan is $250 a month and covers hosting, security, backups, updates, SEO, one new page or post a month and a monthly report.', href: '/pricing/', link: 'See what’s included' },
      { q: 'Do I have to sign a contract?', a: 'No. The plan is month to month and you can cancel with 30 days’ notice.' },
      { q: 'What if I only need something small?', a: 'Small one-off jobs are quoted individually. A text change doesn’t need a monthly plan.' },
      { q: 'Can you look after a site you didn’t build?', a: 'Usually, yes. We review it first and tell you honestly if it needs work before we can maintain it.' },
      { q: 'Is hosting included?', a: 'Yes, hosting, security and uptime monitoring are part of the plan.', href: '/website-hosting-cost-australia/', link: 'Hosting cost guide' },
      { q: 'What happens if I cancel?', a: 'You keep everything: the code, the domain and the content. We help move hosting if you need it.' },
    ],
    guides: [
      { tag: 'Hosting', title: 'Website hosting cost in Australia', href: '/website-hosting-cost-australia/' },
      { tag: 'Redesign', title: 'When to redesign instead', href: '/small-business-website-redesign/' },
      { tag: 'Speed', title: 'Free website speed checker', href: '/website-speed-checker/' },
      { tag: 'Pricing', title: 'Every package and add-on', href: '/pricing/' },
    ],
  },
];

export { CITY_LINKS };
export function getServicePage(slug) { return SERVICE_PAGES.find((x) => x.slug === slug); }
