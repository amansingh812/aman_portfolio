/**
 * Homepage content — Build First Site.
 * Restored from content-backup/content.json (the pre-rebuild typed model).
 * Read the honesty rules in content/site.js before editing.
 */

export const HERO = {
  "eyebrow": "Web design & development · Australia",
  "h1Lead": "Websites that bring",
  "h1Accent": "Australian businesses",
  "h1Trail": "more enquiries.",
  "sub": "A senior engineer who builds everything, and a local contact in Australia. Fixed prices in AUD, published upfront. You own the code.",
  "priceAnchor": "Websites from $800 · Up to 10 pages $1,900 · E-commerce from $4,500",
  "primaryCta": {
    "label": "Get a free quote",
    "href": "#contact"
  },
  "secondaryCta": {
    "label": "Book a free call",
    "href": "https://calendly.com/amanpd0/30min"
  },
  "facts": [
    {
      "value": "Fixed",
      "label": "AUD pricing, upfront"
    },
    {
      "value": "2 wks",
      "label": "Typical business site"
    },
    {
      "value": "100%",
      "label": "Code ownership"
    }
  ]
};

/** Real client work only. Every URL is publicly verifiable. */
export const REAL_CLIENTS = [
  {
    "name": "HS Race Gear",
    "sector": "Motorsport e-commerce",
    "url": "https://www.hsracegear.com",
    "country": "🇦🇺"
  },
  {
    "name": "Mobile Armour",
    "sector": "AI-powered retail",
    "url": "https://mobilearmour.com.au",
    "country": "🇦🇺"
  },
  {
    "name": "AutoZenlyAI",
    "sector": "AI SaaS",
    "url": "https://www.autozenlyai.com",
    "country": "🌐"
  },
  {
    "name": "L&T Finance",
    "sector": "Enterprise fintech",
    "url": "https://planet.ltfinance.com",
    "country": "🌐"
  },
  {
    "name": "School Scout",
    "sector": "EdTech / School discovery",
    "url": "https://myschoolscout.in",
    "country": "🇮🇳"
  }
];

export const PROBLEMS = {
  "eyebrow": "The problem",
  "heading": "Most small business websites quietly lose customers",
  "intro": "Not dramatically. They just sit there — slow on a phone, invisible on Google, and impossible to update without paying someone.",
  "items": [
    {
      "title": "Nobody can find it",
      "body": "It was built to look nice, not to be found. No structured data, no local SEO, no pages targeting what your customers actually search."
    },
    {
      "title": "It is slow on a phone",
      "body": "About two thirds of Australian traffic is mobile. A site that takes five seconds to load on 4G loses most of those visitors before they see anything."
    },
    {
      "title": "Enquiries go nowhere",
      "body": "A contact form buried at the bottom, no click-to-call, nothing that captures the person who visited at 9pm and moved on to the next result."
    },
    {
      "title": "You are renting it",
      "body": "Monthly platform fees forever, a design locked to a template, and no way to move without starting again. You never actually owned it."
    }
  ]
};

/** Homepage services grid — also the internal-link hub to service pages. */
export const SERVICE_CARDS = [
  {
    "title": "Business Websites",
    "body": "Multi-page sites for trades, professional services, clinics and retail — built to turn visitors into enquiries, with local SEO from day one.",
    "href": "/hire-website-builder/",
    "price": "from $1,900"
  },
  {
    "title": "E-Commerce Stores",
    "body": "Custom Stripe-powered stores with real inventory and order management. No platform commission on every sale.",
    "href": "/ecommerce-development/",
    "price": "from $4,500"
  },
  {
    "title": "AI Chatbots & Booking",
    "body": "Assistants that qualify enquiries and book jobs straight into your calendar — including the ones that arrive at 9pm.",
    "href": "/services/ai-automation/",
    "price": "from $900"
  },
  {
    "title": "App Development",
    "body": "Web apps, dashboards, booking systems and cross-platform mobile apps. Usually cheaper than you expect — we will tell you if you do not need native.",
    "href": "/services/mobile-app-development/",
    "price": "from $4,500"
  },
  {
    "title": "AI Web Development",
    "body": "OpenAI, Claude and Gemini built into production applications where they do a specific job — not bolted on as a gimmick.",
    "href": "/ai-web-development/"
  },
  {
    "title": "Next.js Development",
    "body": "The modern React stack used by Vercel and OpenAI. Fast by default, excellent for SEO, and a genuine performance edge over page builders.",
    "href": "/nextjs-development/"
  }
];

export const INDUSTRIES = [
  {
    "label": "Tradies & home services",
    "href": "/tradie-website-design/"
  },
  {
    "label": "Restaurants & cafés",
    "href": "/restaurant-website-design/"
  },
  {
    "label": "Real estate",
    "href": "/real-estate-website-design/"
  }
];

export const PROCESS = {
  "eyebrow": "How it works",
  "heading": "No surprises, at any point",
  "steps": [
    {
      "title": "Free call",
      "body": "Thirty minutes to understand what you actually need. If a cheaper option would serve you better, we say so on this call."
    },
    {
      "title": "Fixed quote in 24 hours",
      "body": "A written scope and a fixed price in AUD. Clear about what is included and what is not, so the number does not move later."
    },
    {
      "title": "Build in the open",
      "body": "A live staging link from the first week. You watch it come together and give feedback as it happens — no month-long silence."
    },
    {
      "title": "Launch & handover",
      "body": "We deploy, hand over the repository and every account, and support you for 30 days. No mandatory retainer afterwards."
    }
  ]
};

/** No headcount in public copy (CLAUDE.md §1) — lead with direct access. */
export const TEAM = {
  "eyebrow": "Who you are working with",
  "heading": "You will know who is building your site.",
  "intro": "Build First Site is not an agency with account managers. The person who writes every line of your code is the person you talk to about it, and your point of contact is in Australia. That is why the pricing works.",
  "members": [
    {
      "name": "Aman",
      "role": "Engineer — builds everything",
      "location": "India",
      "body": "Seven years in software, including enterprise fintech at L&T Finance. Full-stack web, mobile, and AI integration. The person who writes your code is the person you talk to about it — there is nobody in between."
    },
    {
      "name": "Your local contact",
      "role": "Client contact — calls, quotes, paperwork",
      "location": "Australia",
      "body": "Based in Australia, in your timezone, for calls, quotes and anything administrative. A real person on a real phone number when you need one."
    }
  ],
  "honestyNote": "We are upfront about this because plenty of offshore studios present themselves as local Australian agencies. We would rather tell you exactly how it works: the engineering happens in India, your contact is here, and the price reflects that."
};

export const OBJECTIONS = [
  {
    "q": "You are based in India — how does that work for me?",
    "a": "Your contact is in Australia and works in your timezone for calls and quotes. The engineering happens in India, which is exactly why a business website costs $1,900 here rather than $10,000 at a Sydney agency. You get a live staging link from week one, so you can see progress at any time rather than taking anyone on trust."
  },
  {
    "q": "What if I need changes after launch?",
    "a": "Thirty days of support is included. After that, changes are quoted per piece — there is no mandatory monthly retainer. Because you own the code outright, you can also take it to any other developer."
  },
  {
    "q": "Do I really own the website?",
    "a": "Yes. The full repository and every account are transferred to you on completion. No platform lock-in, no subscription to us, no hostage situation if you want to move on."
  },
  {
    "q": "How do I know the quote will not creep up?",
    "a": "The scope and price are agreed in writing before any work starts, and payment is split 50% to begin and 50% on launch. If you ask for something outside the agreed scope we re-quote it openly rather than quietly adding hours."
  },
  {
    "q": "What if I only need something small?",
    "a": "A 3–5 page site starts at $800. If what you need is genuinely simpler than a custom build — sometimes a DIY builder is the right answer for a brand-new business — we will tell you that rather than sell you something you do not need yet."
  }
];

export const FINAL_CTA = {
  "heading": "Tell us what your business needs",
  "body": "A fixed-price quote within 24 hours, and an honest answer if we think there is a cheaper way to get you there."
};

/** Projects. isConcept === true means spec work, NOT a client — must be labelled in UI. */
export const PROJECTS = [
  {
    "id": "01",
    "title": "HS Race Gear",
    "subtitle": "Premium Racing E-Commerce",
    "description": "3D product viewer with Three.js, custom measurement forms, full Stripe checkout, inventory and admin dashboard — built from scratch for an Australian racing brand.",
    "techStack": [
      "Next.js 15",
      "React 19",
      "Three.js",
      "MongoDB",
      "Stripe"
    ],
    "metrics": "3D Viewer · Full E-Commerce · Custom Admin",
    "category": "Full Stack",
    "filter": "Full Stack",
    "country": "🇦🇺",
    "liveUrl": "https://www.hsracegear.com",
    "image": "https://s0.wp.com/mshots/v1/https%3A%2F%2Fwww.hsracegear.com?w=800",
    "cover": {
      "from": "#26100f",
      "to": "#5c2420",
      "mark": "HS"
    }
  },
  {
    "id": "02",
    "title": "Mobile Armour",
    "subtitle": "AI-Powered Accessories Store",
    "description": "E-commerce platform with OpenAI product recommendations, a conversational chatbot, and Stripe payments — built to help shoppers find the right product instead of filtering a category page.",
    "techStack": [
      "Next.js",
      "OpenAI",
      "Stripe",
      "MongoDB",
      "Tailwind"
    ],
    "metrics": "AI Recommendations · Stripe Checkout",
    "category": "AI · E-Commerce",
    "filter": "AI · SaaS",
    "country": "🇦🇺",
    "liveUrl": "https://mobilearmour.com.au",
    "image": "https://s0.wp.com/mshots/v1/https%3A%2F%2Fmobilearmour.com.au?w=800"
  },
  {
    "id": "03",
    "title": "AutoZenlyAI",
    "subtitle": "Multi-Provider Social Media SaaS",
    "description": "SaaS automating social content creation and scheduling. Claude, GPT-4, Gemini, Mistral, Cohere and Groq behind one visual scheduler with real-time analytics.",
    "techStack": [
      "Next.js 14",
      "FastAPI",
      "Redis",
      "Claude",
      "GPT-4"
    ],
    "metrics": "6 AI Providers · Multi-Platform Automation",
    "category": "SaaS · AI",
    "filter": "AI · SaaS",
    "country": "🌐",
    "liveUrl": "https://www.autozenlyai.com",
    "image": "https://s0.wp.com/mshots/v1/https%3A%2F%2Fwww.autozenlyai.com?w=800",
    "cover": {
      "from": "#1d2026",
      "to": "#3b4150",
      "mark": "Az"
    }
  },
  {
    "id": "04",
    "title": "AURELIA Estates & Prestige",
    "subtitle": "Premium Real Estate Platform",
    "description": "A modern luxury real estate platform featuring high-end property listings, advanced property search, and seamless property viewing inquiries.",
    "techStack": [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion"
    ],
    "metrics": "Premium UI · Fast Load Times",
    "category": "Real Estate",
    "filter": "Full Stack",
    "country": "🌐",
    "liveUrl": "https://aurelia-real-estate-silk.vercel.app",
    "isConcept": true,
    "image": "https://s0.wp.com/mshots/v1/https%3A%2F%2Faurelia-real-estate-silk.vercel.app?w=800",
    "cover": {
      "from": "#1e1e1e",
      "to": "#3a3a3a",
      "mark": "AU"
    }
  },
  {
    "id": "09",
    "title": "School Scout",
    "subtitle": "School Discovery Platform",
    "description": "A search-and-compare platform helping Indian parents find and evaluate schools by city, board (CBSE, ICSE, IB, Cambridge), fees and facilities — with a free AI-powered school matching tool and side-by-side comparisons.",
    "techStack": [
      "Next.js",
      "React",
      "AI Matching",
      "Search & Filters"
    ],
    "metrics": "6,500+ Schools · AI School Matching",
    "category": "EdTech",
    "filter": "Full Stack",
    "country": "🇮🇳",
    "liveUrl": "https://myschoolscout.in",
    "image": "https://s0.wp.com/mshots/v1/https%3A%2F%2Fmyschoolscout.in?w=800",
    "cover": {
      "from": "#0f2a1e",
      "to": "#1e6b4e",
      "mark": "SS"
    }
  },
  {
    "id": "05",
    "title": "Harbour Plumbing Co.",
    "subtitle": "Tradie Business Website",
    "description": "Conversion-first website for a Sydney 24/7 emergency plumber — trust-badge hero, quote-request form, click-to-call everywhere, Google reviews strip, and LocalBusiness + FAQ schema for local SEO. Built in one week.",
    "techStack": [
      "React",
      "Tailwind",
      "Motion",
      "Formspree",
      "JSON-LD"
    ],
    "metrics": "Local SEO Schema · Conversion-First",
    "category": "Business Website",
    "filter": "Full Stack",
    "country": "🇦🇺",
    "liveUrl": "https://harbour-plumbing-website.vercel.app",
    "isConcept": true,
    "image": "https://s0.wp.com/mshots/v1/https%3A%2F%2Fharbour-plumbing-website.vercel.app?w=800"
  },
  {
    "id": "06",
    "title": "Marlow & Vine",
    "subtitle": "Hospitality Website",
    "description": "Editorial site for a Fitzroy brunch café & wine bar — full-bleed hero, tabbed menu (no PDFs), provider-agnostic table booking so the venue keeps zero-commission direct bookings, plus Restaurant & Menu schema.",
    "techStack": [
      "React",
      "Tailwind",
      "Motion",
      "react-router",
      "JSON-LD"
    ],
    "metrics": "Direct Bookings · Restaurant Schema ",
    "category": "Hospitality",
    "filter": "Full Stack",
    "country": "🇦🇺",
    "liveUrl": "https://marlow-vine-restaurant.vercel.app",
    "isConcept": true,
    "image": "https://s0.wp.com/mshots/v1/https%3A%2F%2Fmarlow-vine-restaurant.vercel.app?w=800"
  }
];

/**
 * Homepage pricing teaser — a 4-tier subset of the full ladder.
 * The complete ladder (6 build tiers + SEO + maintenance) lives in
 * content/pricing.js and renders on /pricing/. These four must match it.
 * All figures are AUD, GST excluded.
 */
export const PRICE_TIERS = [
  {
    "title": "Starter",
    "desc": "3–5 pages with everything included — custom design, CMS, SEO, schema and analytics.",
    "price": "$800",
    "aud": "3–5 pages",
    "timeline": "5–7 days"
  },
  {
    "title": "Business",
    "desc": "Up to 10 pages. Same inclusions, more room to explain everything you do.",
    "price": "$1,900",
    "aud": "Up to 10 pages",
    "timeline": "2–3 weeks"
  },
  {
    "title": "Unlimited",
    "desc": "No page cap — for multi-service and multi-location businesses.",
    "price": "$3,500",
    "aud": "Unlimited pages",
    "timeline": "3–4 weeks"
  },
  {
    "title": "E-Commerce",
    "desc": "Full store with Stripe, inventory, orders and customer accounts.",
    "price": "$4,500",
    "aud": "Online store",
    "timeline": "4–6 weeks"
  }
];

/**
 * Homepage retainer teaser. Entry point of the monthly ladder — the full
 * SEO tiers ($250 / $450 / $850) and Care Plan ($150) live in
 * content/pricing.js and render on /pricing/.
 */
export const RETAINER = {
  "tag": "Monthly",
  "title": "Care + SEO",
  "blurb": "One plan, not four tiers. Hosting, security, backups, technical SEO and a new page every month. Cancel with 30 days notice.",
  "price": "$250",
  "unit": "/month",
  "cta": "See what's included",
  "features": [
    "Hosting, security and uptime monitoring",
    "Weekly backups and dependency updates",
    "Technical SEO and on-page optimisation",
    "One new page or blog post every month",
    "Speed and Core Web Vitals monitoring",
    "Monthly growth report and priority support"
  ]
};

export const FAQS = [
  {
    "q": "What services do you offer exactly?",
    "a": "We build websites, web apps, e-commerce platforms and SaaS products — from design through to launch. Custom Next.js and React builds, cross-platform mobile apps, AI integrations, Stripe and payment flows, admin dashboards, and performance audits."
  },
  {
    "q": "How much does a project cost?",
    "a": "Every price is published in AUD on our pricing page and set by scope, not by features. 3–5 pages is $800, up to 10 pages $1,900, unlimited pages $3,500, e-commerce and applications $4,500, and custom software from $5,000. You get a fixed quote upfront — never hourly billing."
  },
  {
    "q": "What are the payment terms?",
    "a": "50% to begin, 50% on completion. Larger projects can split into three milestones. We accept Stripe, PayPal, Wise and Australian bank transfer."
  },
  {
    "q": "Do you work with international clients?",
    "a": "Yes. Most of our work is for Australian businesses, with some clients in the US and UK. Your contact is based in Australia and works Australian hours; calls are scheduled in the AEST morning."
  },
  {
    "q": "How long does a project take?",
    "a": "Starter: 5–7 days. Business: 2–3 weeks. Unlimited: 3–4 weeks. E-commerce: 4–6 weeks. Applications: 4–8 weeks. Custom software is scoped per project. You get a timeline with milestones in the proposal before we start."
  },
  {
    "q": "Will I own the code?",
    "a": "100%. The code is yours, hosted wherever you like — Vercel, AWS or your own server. No proprietary CMS, no lock-in. The full repository is handed over on completion."
  },
  {
    "q": "Do you offer ongoing support after launch?",
    "a": "Every package includes 30 days of free post-launch support. After that, Care + SEO is $250/month — hosting, security, backups, technical SEO and one new page monthly. Optional, cancel with 30 days notice."
  }
];

/**
 * INTENTIONALLY EMPTY. The previous entries were not collected from real
 * clients. Australian Consumer Law treats fabricated testimonials as
 * misleading conduct. Populate only with real, attributable quotes.
 */
export const TESTIMONIALS = [];
