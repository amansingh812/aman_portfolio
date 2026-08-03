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
  "sub": "A two-person studio: a senior engineer who builds everything, and a local contact in Australia. Fixed prices in AUD, published upfront. You own the code.",
  "priceAnchor": "Landing pages from $600 · Business sites from $2,000 · E-commerce from $4,000",
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
    "price": "from $2,000"
  },
  {
    "title": "E-Commerce Stores",
    "body": "Custom Stripe-powered stores with real inventory and order management. No platform commission on every sale.",
    "href": "/ecommerce-development/",
    "price": "from $4,000"
  },
  {
    "title": "AI Chatbots & Booking",
    "body": "Assistants that qualify enquiries and book jobs straight into your calendar — including the ones that arrive at 9pm.",
    "href": "/ai-chatbot-development-australia/",
    "price": "from $2,500"
  },
  {
    "title": "App Development",
    "body": "Web apps, dashboards, booking systems and cross-platform mobile apps. Usually cheaper than you expect — we will tell you if you do not need native.",
    "href": "/app-development-australia/",
    "price": "from $6,500"
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

/** Two people. Names intentionally omitted — Aman's call. */
export const TEAM = {
  "eyebrow": "Who you are working with",
  "heading": "Two people. You will know both of them.",
  "intro": "Build First Site is not an agency with account managers. It is two brothers — one who writes every line of code, and one who is your point of contact in Australia. That is the whole company, and it is why the pricing works.",
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
    "a": "Your contact is in Australia and works in your timezone for calls and quotes. The engineering happens in India, which is exactly why a business website costs $2,000 here rather than $10,000 at a Sydney agency. You get a live staging link from week one, so you can see progress at any time rather than taking anyone on trust."
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
    "a": "A single landing page starts at $600. If what you need is genuinely simpler than a custom build — sometimes a DIY builder is the right answer for a brand-new business — we will tell you that rather than sell you something you do not need yet."
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

export const PRICE_TIERS = [
  {
    "title": "Landing Page",
    "desc": "Conversion-focused single page — copy structure, SEO basics, analytics, deployed.",
    "price": "$600",
    "aud": "≈ AU$1,000",
    "timeline": "~2 week"
  },
  {
    "title": "Business Website",
    "desc": "Multi-page site with CMS, contact/quote forms, booking integration, local SEO.",
    "price": "$2,000",
    "aud": "≈ AU$3,800",
    "timeline": "2–3 weeks"
  },
  {
    "title": "E-Commerce Store",
    "desc": "Full store with Stripe checkout, inventory, admin dashboard, and order emails.",
    "price": "$4,000",
    "aud": "≈ AU$5,000",
    "timeline": "4–6 weeks"
  },
  {
    "title": "AI / SaaS MVP",
    "desc": "Product build from zero — auth, billing, AI integrations, dashboard, launch-ready.",
    "price": "$5,000",
    "aud": "≈ AU$6,500",
    "timeline": "6–8 weeks"
  }
];

export const RETAINER = {
  "tag": "Monthly Retainer",
  "title": "Ongoing Partnership",
  "blurb": "Dedicated monthly engineering support for growing products that need continuous development.",
  "price": "$600",
  "unit": "/month",
  "cta": "Book a Call",
  "features": [
    "Priority access & fast turnaround guarantee",
    "Unlimited revisions on active tasks",
    "Monthly feature deployments & updates",
    "Performance monitoring & optimisation",
    "Direct Slack / WhatsApp collaboration",
    "Scales with your roadmap — pause anytime"
  ]
};

export const FAQS = [
  {
    "q": "What services do you offer exactly?",
    "a": "I build websites, web apps, e-commerce platforms, and SaaS products — from design handoff to launch. Custom Next.js & React builds, Flutter mobile apps, AI integrations, Stripe & payment flows, admin dashboards, and performance audits."
  },
  {
    "q": "How much does a project cost?",
    "a": "Most projects fall between $800 and $15,000 USD depending on scope. A landing page starts at $800; a business website from $2,500; e-commerce from $4,500; an AI or SaaS MVP from $7,000. You always get a fixed quote upfront — never hourly billing."
  },
  {
    "q": "What are the payment terms?",
    "a": "50% upfront to begin, 50% on completion. Larger projects can split into three milestones. I accept Wise, Stripe, PayPal, and bank transfer — works for clients in the US, UK, and Australia."
  },
  {
    "q": "Do you work with international clients?",
    "a": "Yes — most of my freelance work is for businesses in Australia, the US, and the UK. I handle timezones with async communication and scheduled calls, and deliver on time regardless of location."
  },
  {
    "q": "How long does a project take?",
    "a": "Landing page: ~7 days. Business website: 2–3 weeks. E-commerce or SaaS: 4–6 weeks. You get a clear timeline with milestones in the proposal before we start."
  },
  {
    "q": "Will I own the code?",
    "a": "100%. The code is yours, hosted wherever you like — Vercel, AWS, your own server. No subscriptions, no lock-in. Full repo handed over on completion."
  },
  {
    "q": "Do you offer ongoing support after launch?",
    "a": "The first 30 days post-launch are free. After that, monthly retainers start at $800/month for ongoing development, updates, and support."
  }
];

/**
 * INTENTIONALLY EMPTY. The previous entries were not collected from real
 * clients. Australian Consumer Law treats fabricated testimonials as
 * misleading conduct. Populate only with real, attributable quotes.
 */
export const TESTIMONIALS = [];
