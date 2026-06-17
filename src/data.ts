import { Project, ExperienceItem, FaqItem } from "./types";

// ─── Projects ────────────────────────────────────────────────────────────────
export const PROJECT_LIST: Project[] = [
  {
    id: "01",
    title: "HS Race Gear",
    subtitle: "Premium Racing E-Commerce",
    description: "3D product viewer with Three.js, custom measurement forms, full Stripe checkout, inventory and admin dashboard — built from scratch for an Australian racing brand.",
    techStack: ["Next.js 15", "React 19", "Three.js", "MongoDB", "Stripe"],
    metrics: "3D Viewer · Full E-Commerce · Custom Admin",
    category: "Full Stack",
    filter: "Full Stack",
    country: "🇦🇺",
    liveUrl: "https://www.hsracegear.com",
    image: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fwww.hsracegear.com?w=1200",
    cover: { from: "#26100f", to: "#5c2420", mark: "HS" }
  },
  {
    id: "02",
    title: "Mobile Armour",
    subtitle: "AI-Powered Accessories Store",
    description: "E-commerce platform with OpenAI product recommendations, a conversational chatbot, and Stripe payments. +20% engagement, −20% load time vs the previous build.",
    techStack: ["Next.js", "OpenAI", "Stripe", "MongoDB", "Tailwind"],
    metrics: "+20% Engagement · −20% Load Time",
    category: "AI · E-Commerce",
    filter: "AI · SaaS",
    country: "🇦🇺",
    liveUrl: "https://mobilearmour.com.au",
    image: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fmobilearmour.com.au?w=1200"
  },
  {
    id: "03",
    title: "AutoZenlyAI",
    subtitle: "Multi-Provider Social Media SaaS",
    description: "SaaS automating social content creation and scheduling. Claude, GPT-4, Gemini, Mistral, Cohere and Groq behind one visual scheduler with real-time analytics.",
    techStack: ["Next.js 14", "FastAPI", "Redis", "Claude", "GPT-4"],
    metrics: "6 AI Providers · Multi-Platform Automation",
    category: "SaaS · AI",
    filter: "AI · SaaS",
    country: "🌐",
    liveUrl: "https://www.autozenlyai.com",
    image: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fwww.autozenlyai.com?w=1200",
    cover: { from: "#1d2026", to: "#3b4150", mark: "Az" }
  },
  {
    id: "04",
    title: "AURELIA Estates & Prestige",
    subtitle: "Premium Real Estate Platform",
    description: "A modern luxury real estate platform featuring high-end property listings, advanced property search, and seamless property viewing inquiries.",
    techStack: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    metrics: "Premium UI · Fast Load Times",
    category: "Real Estate",
    filter: "Full Stack",
    country: "🌐",
    liveUrl: "https://aurelia-real-estate-silk.vercel.app",
    image: "https://s0.wp.com/mshots/v1/https%3A%2F%2Faurelia-real-estate-silk.vercel.app?w=1200",
    cover: { from: "#1e1e1e", to: "#3a3a3a", mark: "AU" }
  },
  {
    id: "05",
    title: "Harbour Plumbing Co.",
    subtitle: "Tradie Business Website",
    description: "Conversion-first website for a Sydney 24/7 emergency plumber — trust-badge hero, quote-request form, click-to-call everywhere, Google reviews strip, and LocalBusiness + FAQ schema for local SEO. Built in one week.",
    techStack: ["React", "Tailwind", "Motion", "Formspree", "JSON-LD"],
    metrics: "Lighthouse 95+ · Local SEO Schema ",
    category: "Business Website",
    filter: "Full Stack",
    country: "🇦🇺",
    liveUrl: "https://harbour-plumbing-website.vercel.app",
    image: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fharbour-plumbing-website.vercel.app?w=1200"
  },
  {
    id: "06",
    title: "Marlow & Vine",
    subtitle: "Hospitality Website",
    description: "Editorial site for a Fitzroy brunch café & wine bar — full-bleed hero, tabbed menu (no PDFs), provider-agnostic table booking so the venue keeps zero-commission direct bookings, plus Restaurant & Menu schema.",
    techStack: ["React", "Tailwind", "Motion", "react-router", "JSON-LD"],
    metrics: "Direct Bookings · Restaurant Schema ",
    category: "Hospitality",
    filter: "Full Stack",
    country: "🇦🇺",
    liveUrl: "https://marlow-vine-restaurant.vercel.app",
    image: "https://s0.wp.com/mshots/v1/https%3A%2F%2Fmarlow-vine-restaurant.vercel.app?w=1200"
  }
];

export const PROJECT_FILTERS = ["All", "Full Stack", "AI · SaaS", "Mobile"];

// ─── Experience ──────────────────────────────────────────────────────────────
export const EXPERIENCE: ExperienceItem[] = [
  {
    org: "L&T Finance",
    role: "Software Engineer — Planet App",
    period: "2023 — Present",
    description: "Digital lending app serving millions of users. Lead developer on the Farm Loan Top-Up flow: KYC verification, UPI & e-NACH integrations, Salesforce CRM.",
    tags: ["Flutter", "BLoC", "Fintech"],
    url: "https://planet.ltfinance.com"
  },
  {
    org: "HS Race Gear",
    role: "Freelance — Full-Stack Build",
    period: "2025",
    description: "End-to-end e-commerce for an Australian racing gear brand: 3D product viewer, Stripe checkout, inventory and admin dashboard.",
    tags: ["Next.js 15", "Three.js", "Stripe"],
    url: "https://www.hsracegear.com"
  },
  {
    org: "Mobile Armour",
    role: "Freelance — AI E-Commerce",
    period: "2024 — 2025",
    description: "AI-powered accessories store with OpenAI recommendations and a conversational chatbot. +20% engagement, 20% faster loads.",
    tags: ["Next.js", "OpenAI", "Stripe"],
    url: "https://mobilearmour.com.au"
  },
  {
    org: "AutoZenlyAI",
    role: "Founder Build — SaaS Platform",
    period: "2024 — Present",
    description: "Multi-provider social media automation SaaS — six AI providers behind a single visual scheduler with analytics and team collaboration.",
    tags: ["FastAPI", "Redis", "6 AI Providers"],
    url: "https://www.autozenlyai.com"
  }
];

// ─── About bullets ───────────────────────────────────────────────────────────
export const ABOUT_POINTS = [
  "Build First Site is a web design & development studio — we build the website that becomes your customer's first impression of your business.",
  "Backed by 3+ years of engineering at scale: bulletproof code from fintech, paired with the speed and conversion focus growing businesses need.",
  "We start with your business goal, not the tech — then ship clean, fast, SEO-ready sites that turn visitors into enquiries.",
  "Custom Next.js & React builds, e-commerce, Flutter mobile apps, and AI integrations from chatbots to multi-provider SaaS.",
  "Fixed-price quotes, async-friendly communication, and a live staging link so you watch progress in real time — for clients across the US, UK & Australia."
];

export const STATS = [
  { value: "3+", label: "Years Experience" },
  { value: "10+", label: "Products Shipped" },
  { value: "5+", label: "AI Agents build" },
];

// ─── Skills ──────────────────────────────────────────────────────────────────
export const TECH_CATEGORIES = [
  { label: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js", "Redux"] },
  { label: "Backend", items: ["FastAPI", "Node.js", "Express", "Python", "REST APIs", "WebSockets"] },
  { label: "Mobile", items: ["Flutter", "Dart", "BLoC", "Provider", "React Native"] },
  { label: "Database", items: ["MongoDB", "PostgreSQL", "Redis", "FAISS", "Supabase"] },
  { label: "AI / LLMs", items: ["OpenAI", "Claude", "Gemini", "Groq", "Mistral", "LangChain"] },
  { label: "Payments & DevOps", items: ["Stripe", "Razorpay", "UPI", "Vercel", "AWS", "Docker", "GitHub Actions"] },
];

// ─── FAQ ─────────────────────────────────────────────────────────────────────
export const FAQS: FaqItem[] = [
  { q: "What services do you offer exactly?", a: "I build websites, web apps, e-commerce platforms, and SaaS products — from design handoff to launch. Custom Next.js & React builds, Flutter mobile apps, AI integrations, Stripe & payment flows, admin dashboards, and performance audits." },
  { q: "How much does a project cost?", a: "Most projects fall between $800 and $15,000 USD depending on scope. A landing page starts at $800; a business website from $2,500; e-commerce from $4,500; an AI or SaaS MVP from $7,000. You always get a fixed quote upfront — never hourly billing." },
  { q: "What are the payment terms?", a: "50% upfront to begin, 50% on completion. Larger projects can split into three milestones. I accept Wise, Stripe, PayPal, and bank transfer — works for clients in the US, UK, and Australia." },
  { q: "Do you work with international clients?", a: "Yes — most of my freelance work is for businesses in Australia, the US, and the UK. I handle timezones with async communication and scheduled calls, and deliver on time regardless of location." },
  { q: "How long does a project take?", a: "Landing page: ~7 days. Business website: 2–3 weeks. E-commerce or SaaS: 4–6 weeks. You get a clear timeline with milestones in the proposal before we start." },
  { q: "Will I own the code?", a: "100%. The code is yours, hosted wherever you like — Vercel, AWS, your own server. No subscriptions, no lock-in. Full repo handed over on completion." },
  { q: "Do you offer ongoing support after launch?", a: "The first 30 days post-launch are free. After that, monthly retainers start at $800/month for ongoing development, updates, and support." },
];

// ─── Pricing ─────────────────────────────────────────────────────────────────
// Fixed-price tiers, priced for US & Australian markets (USD).
export const PRICE_TIERS = [
  {
    title: "Landing Page",
    desc: "Conversion-focused single page — copy structure, SEO basics, analytics, deployed.",
    price: "$600",
    aud: "≈ AU$1,000",
    timeline: "~2 week",
  },
  {
    title: "Business Website",
    desc: "Multi-page site with CMS, contact/quote forms, booking integration, local SEO.",
    price: "$2,000",
    aud: "≈ AU$3,800",
    timeline: "2–3 weeks",
  },
  {
    title: "E-Commerce Store",
    desc: "Full store with Stripe checkout, inventory, admin dashboard, and order emails.",
    price: "$4,000",
    aud: "≈ AU$5,000",
    timeline: "4–6 weeks",
  },
  {
    title: "AI / SaaS MVP",
    desc: "Product build from zero — auth, billing, AI integrations, dashboard, launch-ready.",
    price: "$5,000",
    aud: "≈ AU$6,500",
    timeline: "6–8 weeks",
  },
];

export const RETAINER = {
  tag: "Monthly Retainer",
  title: "Ongoing Partnership",
  blurb: "Dedicated monthly engineering support for growing products that need continuous development.",
  price: "$600",
  unit: "/month",
  cta: "Book a Call",
  features: [
    "Priority access & fast turnaround guarantee",
    "Unlimited revisions on active tasks",
    "Monthly feature deployments & updates",
    "Performance monitoring & optimisation",
    "Direct Slack / WhatsApp collaboration",
    "Scales with your roadmap — pause anytime",
  ],
};

// ─── Contact ─────────────────────────────────────────────────────────────────
export const CONTACT = {
  email: "amanpd0@gmail.com",
  phone: "+61-413146498",
  whatsapp: "https://wa.me/61413146498?text=Hi%20Aman!%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.",
  calendly: "https://calendly.com/amanpd0/30min",
  linkedin: "https://www.linkedin.com/in/aman-singh-b3a7251a2",
  github: "https://github.com/amansingh812",
};
