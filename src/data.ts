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
    liveUrl: "https://hsracegear.com.au",
    image: null,
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
    liveUrl: null,
    image: null,
    cover: { from: "#1d2026", to: "#3b4150", mark: "Az" }
  },
  {
    id: "04",
    title: "L&T Finance — Planet",
    subtitle: "Digital Lending Platform",
    description: "Lead developer on the Farm Loan Top-Up flow serving millions of users — KYC, UPI & e-NACH payments, strict BLoC architecture, Salesforce CRM. 600+ tickets resolved.",
    techStack: ["Flutter", "Dart", "BLoC", "Salesforce", "UPI"],
    metrics: "Millions of Users · 600+ Tickets Resolved",
    category: "Fintech · Mobile",
    filter: "Mobile",
    country: "🇮🇳",
    liveUrl: null,
    image: null,
    cover: { from: "#10231c", to: "#2e544a", mark: "L&T" }
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
  },
  {
    org: "HS Race Gear",
    role: "Freelance — Full-Stack Build",
    period: "2025",
    description: "End-to-end e-commerce for an Australian racing gear brand: 3D product viewer, Stripe checkout, inventory and admin dashboard.",
    tags: ["Next.js 15", "Three.js", "Stripe"],
    url: "https://hsracegear.com.au"
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
  }
];

// ─── About bullets ───────────────────────────────────────────────────────────
export const ABOUT_POINTS = [
  "Full-stack developer based in Bangalore with 2.5+ years across fintech at scale and freelance product builds.",
  "Day job: bulletproof code for a lending platform serving millions. Freelance: speed and conversion for US, UK & Australian clients.",
  "I start with the business goal, not the tech — then ship clean architecture, predictable state, and strict performance budgets.",
  "Specialised in Next.js & React web products, Flutter mobile apps, and AI integrations from chatbots to multi-provider SaaS.",
  "Fixed-price quotes, async-friendly communication, and a live staging link so you can watch progress in real time."
];

export const STATS = [
  { value: "2.5+", label: "Years Experience" },
  { value: "5", label: "Products Shipped" },
  { value: "600+", label: "Tickets Resolved" },
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
  { q: "How much does a project cost?", a: "Most projects fall between $300 and $12,000 depending on scope. A landing page starts at $300; a full e-commerce or SaaS product from $4,000. You always get a fixed quote upfront — never hourly billing." },
  { q: "What are the payment terms?", a: "50% upfront to begin, 50% on completion. Larger projects can split into three milestones. I accept Wise, Stripe, PayPal, and bank transfer — works for clients in the US, UK, and Australia." },
  { q: "Do you work with international clients?", a: "Yes — most of my freelance work is for businesses in Australia, the US, and the UK. I handle timezones with async communication and scheduled calls, and deliver on time regardless of location." },
  { q: "How long does a project take?", a: "Landing page: ~7 days. Business website: 2–3 weeks. E-commerce or SaaS: 4–6 weeks. You get a clear timeline with milestones in the proposal before we start." },
  { q: "Will I own the code?", a: "100%. The code is yours, hosted wherever you like — Vercel, AWS, your own server. No subscriptions, no lock-in. Full repo handed over on completion." },
  { q: "Do you offer ongoing support after launch?", a: "The first 30 days post-launch are free. After that, monthly retainers start at $500/month for ongoing development, updates, and support." },
];

// ─── Pricing ─────────────────────────────────────────────────────────────────
export const PRICING = [
  {
    tag: "One-Time Payment",
    title: "Fixed-Price Build",
    blurb: "For startups and businesses that need a product built right, on time, and on budget.",
    price: "$300",
    unit: "/project",
    cta: "Start a Project",
    featured: false,
    features: [
      "Custom landing page or multi-page website",
      "E-commerce with Stripe & payment integrations",
      "AI features, chatbots & API integrations",
      "Mobile-first, fully responsive build",
      "SEO-optimised structure & performance",
      "30 days free support · full code ownership",
    ],
  },
  {
    tag: "Monthly Retainer",
    title: "Ongoing Partnership",
    blurb: "Dedicated monthly engineering support for growing products that need continuous development.",
    price: "$500",
    unit: "/month",
    cta: "Book a Call",
    featured: true,
    features: [
      "Priority access & fast turnaround guarantee",
      "Unlimited revisions on active tasks",
      "Monthly feature deployments & updates",
      "Performance monitoring & optimisation",
      "Direct Slack / WhatsApp collaboration",
      "Scales with your roadmap — pause anytime",
    ],
  },
];

// ─── Contact ─────────────────────────────────────────────────────────────────
export const CONTACT = {
  email: "amansinghofficial9776@gmail.com",
  phone: "+91 9900604665",
  whatsapp: "https://wa.me/919900604665?text=Hi%20Aman!%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.",
  calendly: "https://calendly.com/amansinghofficial9776/30min",
  linkedin: "https://linkedin.com/in/aman-singh",
  github: "https://github.com/amansingh",
};
