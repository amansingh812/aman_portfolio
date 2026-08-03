export interface CaseStudy {
  slug: string;
  projectId: string;
  name: string;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  industry: string;
  location: string;
  liveUrl?: string | null;
  image?: string | null;
  cover?: { from: string; to: string; mark: string };
  timeline: string;
  services: string[];
  techStack: string[];
  challenge: string[];
  approach: { title: string; body: string }[];
  results: { label: string; value: string }[];
  outcome: string;
  keywords: string[];
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'hs-race-gear',
    projectId: '01',
    name: 'HS Race Gear',
    tagline: 'A premium racing e-commerce store, built from scratch',
    metaTitle: 'HS Race Gear — Racing E-Commerce Case Study | Build First Site',
    metaDescription:
      'How we built a premium motorsport e-commerce store for HS Race Gear: a Three.js 3D product viewer, custom made-to-measure forms, full Stripe checkout, and a bespoke admin dashboard.',
    industry: 'Motorsport / E-Commerce',
    location: 'Australia',
    liveUrl: 'https://www.hsracegear.com',
    image: 'https://s0.wp.com/mshots/v1/https%3A%2F%2Fwww.hsracegear.com?w=1200',
    cover: { from: '#26100f', to: '#5c2420', mark: 'HS' },
    timeline: '6 weeks',
    services: ['E-Commerce Build', '3D Product Viewer', 'Custom Admin Dashboard', 'Payments'],
    techStack: ['Next.js 15', 'React 19', 'Three.js', 'MongoDB', 'Stripe'],
    challenge: [
      'HS Race Gear sells high-end racing suits and gear where fit and finish matter enormously — customers spend serious money and need to trust exactly what they are buying. An off-the-shelf template store could not show the product the way the brand needed, and generic "small / medium / large" sizing does not work for made-to-measure race wear.',
      'The brand needed a store that felt as premium as the product, let buyers inspect gear in 3D, captured precise measurements at checkout, and gave the owner a real back office to manage inventory and orders — without paying a platform a cut of every sale.',
    ],
    approach: [
      {
        title: 'Interactive 3D product viewer',
        body: 'We built a real-time 3D viewer with Three.js so shoppers can rotate and inspect gear from every angle before buying. It loads progressively so the experience stays fast even on mobile connections, giving the confidence a flat photo never could.',
      },
      {
        title: 'Made-to-measure ordering',
        body: 'Custom measurement forms capture the exact sizing data the brand needs for made-to-order race wear, validated on the client side and attached directly to each order so nothing gets lost between checkout and production.',
      },
      {
        title: 'Full Stripe checkout — zero platform fees',
        body: 'A complete Stripe checkout handles payments, taxes, and order confirmation emails. Because the store is custom-built rather than rented from a SaaS platform, the brand keeps 100% of every sale beyond standard payment processing.',
      },
      {
        title: 'Bespoke admin dashboard',
        body: 'We shipped a custom admin panel for managing products, inventory levels, and incoming orders — a single place for the team to run the store day to day, with no monthly subscription and full ownership of the data.',
      },
    ],
    results: [
      { label: 'Product experience', value: '3D viewer' },
      { label: 'Checkout', value: 'Full Stripe' },
      { label: 'Back office', value: 'Custom admin' },
      { label: 'Platform fees', value: '$0 / sale' },
    ],
    outcome:
      'The result is a store that matches the quality of the product it sells — fast, ownable, and free of per-sale platform fees. HS Race Gear now controls its own catalogue, checkout, and customer data end to end.',
    keywords: ['racing e-commerce', 'custom online store', 'three.js product viewer', 'stripe checkout developer'],
  },
  {
    slug: 'mobile-armour',
    projectId: '02',
    name: 'Mobile Armour',
    tagline: 'An AI-powered accessories store that sells smarter',
    metaTitle: 'Mobile Armour — AI E-Commerce Case Study | Build First Site',
    metaDescription:
      'How we rebuilt Mobile Armour as an AI-powered e-commerce store with OpenAI product recommendations and a conversational shopping assistant — lifting engagement 20% and cutting load time 20%.',
    industry: 'Retail / E-Commerce',
    location: 'Australia',
    liveUrl: 'https://mobilearmour.com.au',
    image: 'https://s0.wp.com/mshots/v1/https%3A%2F%2Fmobilearmour.com.au?w=1200',
    cover: { from: '#141414', to: '#2f2f33', mark: 'MA' },
    timeline: '4 weeks',
    services: ['E-Commerce Rebuild', 'AI Recommendations', 'Conversational Chatbot', 'Performance'],
    techStack: ['Next.js', 'OpenAI', 'Stripe', 'MongoDB', 'Tailwind'],
    challenge: [
      'Mobile Armour had a working store, but a slow one — and a catalogue big enough that shoppers struggled to find the right accessory for their exact device. Every extra second of load time and every dead-end search was a lost sale.',
      'The brief was to make the store both faster and smarter: help customers find the right product instantly, and rebuild the front end so it felt quick on the mobile devices its customers actually shop from.',
    ],
    approach: [
      {
        title: 'AI product recommendations',
        body: 'We integrated OpenAI to power contextual product recommendations, surfacing the right accessories for a shopper based on what they are browsing rather than static "related items" lists.',
      },
      {
        title: 'Conversational shopping assistant',
        body: 'A built-in chatbot answers compatibility and product questions in natural language, guiding customers to the right item without them needing to know exact model numbers.',
      },
      {
        title: 'Rebuilt for speed',
        body: 'Migrating to a modern Next.js front end with optimised images and code-splitting cut load time by around 20% versus the previous build — a direct win for both conversion and SEO.',
      },
      {
        title: 'Stripe payments',
        body: 'A streamlined Stripe checkout keeps the path from product to purchase short, with mobile-first UX for the store’s primarily on-phone audience.',
      },
    ],
    results: [
      { label: 'Engagement', value: '+20%' },
      { label: 'Load time', value: '−20%' },
      { label: 'Recommendations', value: 'AI-driven' },
      { label: 'Support', value: 'AI chatbot' },
    ],
    outcome:
      'The rebuilt store engages more shoppers and loads noticeably faster on mobile, with AI doing the heavy lifting of matching customers to the right product — turning a big catalogue from a liability into an advantage.',
    keywords: ['ai e-commerce', 'openai product recommendations', 'shopping chatbot', 'ecommerce developer australia'],
  },
  {
    slug: 'autozenlyai',
    projectId: '03',
    name: 'AutoZenlyAI',
    tagline: 'Six AI providers behind one social-media scheduler',
    metaTitle: 'AutoZenlyAI — Multi-Provider AI SaaS Case Study | Build First Site',
    metaDescription:
      'How we designed and built AutoZenlyAI, a social-media automation SaaS that unifies Claude, GPT-4, Gemini, Mistral, Cohere and Groq behind a single visual scheduler with real-time analytics.',
    industry: 'SaaS / AI',
    location: 'Global',
    liveUrl: 'https://www.autozenlyai.com',
    image: 'https://s0.wp.com/mshots/v1/https%3A%2F%2Fwww.autozenlyai.com?w=1200',
    cover: { from: '#1d2026', to: '#3b4150', mark: 'Az' },
    timeline: '8+ weeks',
    services: ['SaaS Product Build', 'Multi-LLM Integration', 'Scheduling Engine', 'Analytics'],
    techStack: ['Next.js 14', 'FastAPI', 'Redis', 'Claude', 'GPT-4', 'Gemini'],
    challenge: [
      'Content teams juggle a dozen tools: one for writing, another for scheduling, another for analytics — and each AI model has its own strengths and its own dashboard. AutoZenlyAI’s vision was to collapse all of that into one product.',
      'That meant a genuinely hard engineering problem: put six different AI providers behind a single, consistent interface, schedule content reliably across multiple platforms, and show it all working in real time — as a product strangers could sign up for and trust.',
    ],
    approach: [
      {
        title: 'One interface, six AI providers',
        body: 'We built an abstraction layer that routes requests to Claude, GPT-4, Gemini, Mistral, Cohere or Groq behind a single API — so users pick the model that fits the task without ever leaving the app or learning six dashboards.',
      },
      {
        title: 'Visual scheduling engine',
        body: 'A drag-and-friendly visual scheduler plans and queues content across platforms, backed by Redis for fast, reliable job handling so posts fire when they are supposed to.',
      },
      {
        title: 'Real-time analytics',
        body: 'Performance data streams back into the dashboard so users can see what is working and adjust — closing the loop from generation to scheduling to results in one place.',
      },
      {
        title: 'Production SaaS foundations',
        body: 'A FastAPI backend, authentication, and team collaboration turn the concept into a real product with the reliability and structure a paying user base expects.',
      },
    ],
    results: [
      { label: 'AI providers', value: '6 unified' },
      { label: 'Scheduling', value: 'Multi-platform' },
      { label: 'Analytics', value: 'Real-time' },
      { label: 'Backend', value: 'FastAPI + Redis' },
    ],
    outcome:
      'AutoZenlyAI turned a complex, multi-model idea into a single working SaaS — proof that ambitious AI products can be shipped end to end, from architecture to a live app people can sign up for.',
    keywords: ['ai saas development', 'multi-llm platform', 'social media automation saas', 'saas mvp developer'],
  },
  {
    slug: 'aurelia-estates',
    projectId: '04',
    name: 'AURELIA Estates & Prestige',
    tagline: 'A luxury real-estate platform that feels the part',
    metaTitle: 'AURELIA Estates — Luxury Real Estate Platform Case Study | Build First Site',
    metaDescription:
      'How we built AURELIA Estates & Prestige, a premium real-estate platform with high-end listings, advanced property search, and fast, polished UI that matches the properties it showcases.',
    industry: 'Real Estate',
    location: 'Global',
    liveUrl: 'https://aurelia-real-estate-silk.vercel.app',
    image: 'https://s0.wp.com/mshots/v1/https%3A%2F%2Faurelia-real-estate-silk.vercel.app?w=1200',
    cover: { from: '#1e1e1e', to: '#3a3a3a', mark: 'AU' },
    timeline: '3 weeks',
    services: ['Real Estate Platform', 'Advanced Search', 'Enquiry Flows', 'UI / Motion'],
    techStack: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
    challenge: [
      'In luxury real estate, the website is the shopfront — and a template that looks like every other agency site actively undermines a premium brand. AURELIA needed a platform whose design signalled the calibre of the properties it lists.',
      'It also had to be genuinely useful: buyers needed to filter a high-end portfolio quickly and enquire about viewings without friction, all while the interface stayed fast and refined.',
    ],
    approach: [
      {
        title: 'Design that matches the portfolio',
        body: 'We built a restrained, high-end interface with considered typography and Framer Motion transitions that feel expensive — so the site reads as prestige from the first scroll.',
      },
      {
        title: 'Advanced property search',
        body: 'Buyers can filter and search the listings by the criteria that matter for high-value property, getting to relevant homes in a few clicks rather than endless scrolling.',
      },
      {
        title: 'Frictionless viewing enquiries',
        body: 'Property enquiry flows make requesting a viewing effortless, capturing qualified leads directly from each listing page.',
      },
      {
        title: 'Fast by default',
        body: 'A modern React/Next.js build keeps load times low and interactions smooth, so the polish never comes at the cost of speed.',
      },
    ],
    results: [
      { label: 'Design', value: 'Premium UI' },
      { label: 'Search', value: 'Advanced filters' },
      { label: 'Leads', value: 'Per-listing enquiries' },
      { label: 'Performance', value: 'Fast load' },
    ],
    outcome:
      'AURELIA now has a platform that looks and performs like the properties it represents — a credible digital shopfront that turns browsers into viewing enquiries.',
    keywords: ['real estate website design', 'property platform developer', 'luxury real estate website', 'next.js real estate'],
  },
  {
    slug: 'harbour-plumbing',
    projectId: '05',
    name: 'Harbour Plumbing Co.',
    tagline: 'A tradie website built to win jobs, not awards',
    metaTitle: 'Harbour Plumbing — Tradie Website Case Study | Build First Site',
    metaDescription:
      'How we built a conversion-first website for a Sydney 24/7 emergency plumber in one week: trust-badge hero, quote-request form, click-to-call, and LocalBusiness + FAQ schema for local SEO.',
    industry: 'Trades / Home Services',
    location: 'Sydney, Australia',
    liveUrl: 'https://harbour-plumbing-website.vercel.app',
    image: 'https://s0.wp.com/mshots/v1/https%3A%2F%2Fharbour-plumbing-website.vercel.app?w=1200',
    cover: { from: '#0f2233', to: '#1d4e6b', mark: 'HP' },
    timeline: '1 week',
    services: ['Business Website', 'Local SEO', 'Lead Capture', 'Schema'],
    techStack: ['React', 'Tailwind', 'Motion', 'Formspree', 'JSON-LD'],
    challenge: [
      'When a pipe bursts at 2am, nobody scrolls — they call the first plumber who looks trustworthy and reachable. Harbour Plumbing needed a site that converts panicked, high-intent visitors into calls and quote requests immediately.',
      'It also needed to show up in local search, because most of those visitors arrive from a "plumber near me" Google search rather than a bookmark.',
    ],
    approach: [
      {
        title: 'Trust-first hero',
        body: 'The hero leads with trust badges and a clear 24/7 promise, so a stressed visitor instantly knows they are in the right place — with the phone number and quote button impossible to miss.',
      },
      {
        title: 'Click-to-call everywhere',
        body: 'Every section keeps a tap-to-call button within reach, matched with a short quote-request form for people who would rather type than talk. Both routes capture the lead.',
      },
      {
        title: 'Local SEO built in',
        body: 'LocalBusiness and FAQ schema (JSON-LD) plus a Google reviews strip give the site the structured signals search engines reward for local queries — helping it surface for "emergency plumber Sydney" searches.',
      },
      {
        title: 'Fast enough to keep the visitor',
        body: 'A lean build scores Lighthouse 95+, so the page loads before an impatient, in-emergency visitor bounces to a competitor.',
      },
    ],
    results: [
      { label: 'Build time', value: '1 week' },
      { label: 'Lighthouse', value: '95+' },
      { label: 'Local SEO', value: 'Schema + reviews' },
      { label: 'Lead capture', value: 'Call + form' },
    ],
    outcome:
      'Harbour Plumbing went from no real web presence to a fast, trustworthy site engineered around a single goal — turning local searchers into phone calls — delivered in a week.',
    keywords: ['tradie website design', 'plumber website', 'local seo website', 'emergency plumber sydney website'],
  },
  {
    slug: 'marlow-vine',
    projectId: '06',
    name: 'Marlow & Vine',
    tagline: 'A hospitality site that keeps bookings commission-free',
    metaTitle: 'Marlow & Vine — Restaurant Website Case Study | Build First Site',
    metaDescription:
      'How we built an editorial website for a Fitzroy café and wine bar with a tabbed menu (no PDFs), provider-agnostic direct table bookings, and Restaurant + Menu schema for local discovery.',
    industry: 'Hospitality',
    location: 'Fitzroy, Australia',
    liveUrl: 'https://marlow-vine-restaurant.vercel.app',
    image: 'https://s0.wp.com/mshots/v1/https%3A%2F%2Fmarlow-vine-restaurant.vercel.app?w=1200',
    cover: { from: '#2a2016', to: '#4d3a24', mark: 'MV' },
    timeline: '1.5 weeks',
    services: ['Hospitality Website', 'Menu System', 'Direct Bookings', 'Schema'],
    techStack: ['React', 'Tailwind', 'Motion', 'react-router', 'JSON-LD'],
    challenge: [
      'Marlow & Vine, a Fitzroy brunch café and wine bar, wanted a site that looked as considered as the venue — and, crucially, one that kept table bookings direct instead of handing a commission to a third-party platform on every cover.',
      'The old habit of uploading a menu PDF also had to go: PDFs are slow, unreadable on phones, and invisible to search engines.',
    ],
    approach: [
      {
        title: 'Editorial, full-bleed design',
        body: 'A full-bleed hero and considered layout give the site the editorial feel of a good food magazine, matching the atmosphere of the venue itself.',
      },
      {
        title: 'Real, tabbed menu — no PDFs',
        body: 'The menu is built as fast, mobile-friendly tabbed content that customers can actually read on a phone — and that search engines can index, unlike a buried PDF.',
      },
      {
        title: 'Provider-agnostic direct bookings',
        body: 'Table booking is wired so the venue keeps zero-commission direct reservations, rather than paying per-cover fees to a booking marketplace on bookings it earned itself.',
      },
      {
        title: 'Restaurant & Menu schema',
        body: 'Restaurant and Menu JSON-LD helps the venue appear correctly in local search and rich results, so nearby diners find it when they search.',
      },
    ],
    results: [
      { label: 'Bookings', value: 'Direct, 0% commission' },
      { label: 'Menu', value: 'Indexable, no PDF' },
      { label: 'Schema', value: 'Restaurant + Menu' },
      { label: 'Design', value: 'Editorial' },
    ],
    outcome:
      'Marlow & Vine got a site as polished as the room — and one that protects its margins by keeping bookings direct and its menu discoverable in search.',
    keywords: ['restaurant website design', 'cafe website', 'direct table booking website', 'hospitality web design'],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug);
}
