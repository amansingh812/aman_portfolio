/**
 * Landing pages — the migration target for the legacy static HTML pages.
 *
 * ── WHY THIS FILE EXISTS ─────────────────────────────────────────────────
 * Pages under public/<slug>/index.html are standalone HTML. They cannot use
 * components/layout/Layout.js, so each one hardcodes its own mini header and
 * footer, loads Tailwind from a CDN, and carries a COPY of the price table.
 * That is why they drift out of theme and why prices go stale in 19 places.
 *
 * Pages defined here render through components/landing/LandingPage.js, which
 * wraps Layout — so they get the real Header with NAV dropdowns, the real
 * Footer, and the Agon design system automatically. Prices are IMPORTED from
 * content/pricing.js rather than copied, so one edit updates everything.
 *
 * ── MIGRATING A PAGE (do these in order) ─────────────────────────────────
 *   1. Add an entry here
 *   2. Create app/<slug>/page.js re-exporting the renderer
 *   3. DELETE public/<slug>/index.html
 *
 * Step 3 is not optional. next.config.mjs rewrites use `beforeFiles`, so the
 * static file takes priority over the Next route and your new page will never
 * be served while it exists.
 *
 * The URL must not change. Same slug in, same slug out — that is what keeps
 * the existing rankings.
 *
 * ── CONTENT MODEL ────────────────────────────────────────────────────────
 * `body` uses the same block types as content/blog-content.js, rendered by
 * components/blog/BlogContent.js:
 *   h2 · h3 · p (html) · ul/ol (items) · table (headers, rows) · faq (q, a)
 * faq blocks also generate FAQPage schema automatically.
 */

export const LANDING_PAGES = [
  {
    slug: 'ai-web-development',
    metaTitle: 'AI Web Development Australia | From $5,000',
    metaDescription:
      'AI web development in Australia — chatbots, SaaS platforms and automation built on OpenAI, Claude and Gemini. Fixed AUD pricing from $5,000.',
    eyebrow: 'AI & Automation',
    h1: 'AI web development for Australian businesses',
    lead:
      'Most "AI features" are a chatbot bolted onto a website that nobody uses. We build AI that does a specific job — qualifying enquiries, automating a workflow, answering questions your team answers fifty times a week.',
    /** Which pricing tiers to surface. Empty array hides the table. */
    priceTiers: ['application', 'custom-software'],
    schemaType: 'Service',
    breadcrumb: 'AI Web Development',
    related: [
      { href: '/services/ai-automation/', label: 'AI & Automation service' },
      { href: '/pricing/', label: 'All pricing' },
      { href: '/blog/website-cost-australia/', label: 'What a website costs' },
    ],
    body: [
      { type: 'h2', text: 'What we actually build with AI' },
      { type: 'p', html: 'The business outcome first, the technology second. Every one of these exists to save hours or capture enquiries you are currently losing.' },
      { type: 'ul', items: [
        '<strong>Enquiry qualification.</strong> A chatbot that asks the questions you would ask, then hands you a qualified lead with the answers attached instead of a name and an email address.',
        '<strong>Internal knowledge assistants.</strong> Trained on your own documents so staff stop asking the same question, and new staff get productive faster.',
        '<strong>Document and data extraction.</strong> Invoices, forms, applications — pulled into structured data instead of retyped by a person.',
        '<strong>Content automation.</strong> Product descriptions, service pages and summaries generated from data you already hold.',
        '<strong>Workflow automation.</strong> The chain of copy-paste steps between your systems, replaced by something that runs itself.',
      ]},

      { type: 'h2', text: 'Where AI is the wrong answer' },
      { type: 'p', html: 'Worth saying plainly, because most agencies selling AI will not. AI is a poor fit when the task needs to be exactly right every time, when you have too little data for the model to be useful, or when a simple rule would do the job more cheaply and more predictably.' },
      { type: 'p', html: 'If a form with conditional logic solves your problem, we will build that instead and charge you less. A chatbot that hallucinates your refund policy costs more than it saves.' },

      { type: 'h2', text: 'What it costs' },
      { type: 'p', html: 'A focused AI feature added to an existing site — a trained chatbot, a single automation — starts at <strong>$900</strong>. A full application with AI at its centre is <strong>$4,500</strong>. Custom platforms are scoped per project from <strong>$5,000</strong>.' },
      { type: 'p', html: 'Ongoing model costs are separate and belong to you: expect roughly $20 to $200 a month in API usage depending on volume. We set it up in your own account so you control the spend and can see exactly what it costs.' },

      { type: 'h2', text: 'How we build it' },
      { type: 'ul', items: [
        'Model choice driven by the task, not by fashion — often a smaller cheaper model beats the flagship for a narrow job',
        'Your data stays in your infrastructure where the use case allows',
        'Guardrails and fallbacks, so a failed AI call degrades to something sensible rather than breaking the page',
        'Usage logging from day one so you can see what it costs and what people actually ask',
        'Built on Next.js, deployed to Vercel — you own the code and the accounts',
      ]},

      { type: 'h2', text: 'Common questions' },
      { type: 'faq', q: 'How much does AI web development cost in Australia?',
        a: 'A focused AI feature on an existing site starts at AU$900 — a trained chatbot or a single automation. A full application built around AI is AU$4,500. Custom AI platforms are scoped per project from AU$5,000. Model API usage is separate, typically AU$20 to $200 a month depending on volume, and runs in your own account so you control it.' },
      { type: 'faq', q: 'Which AI models do you use?',
        a: 'Whichever fits the job. OpenAI, Claude and Gemini all have strengths, and for narrow tasks a smaller cheaper model often outperforms a flagship on both cost and speed. We pick based on the task and your budget rather than defaulting to one vendor, and we build so the model can be swapped later.' },
      { type: 'faq', q: 'Will an AI chatbot make things up about my business?',
        a: 'It can, which is why how it is built matters. We ground responses in your actual content rather than letting the model answer freely, add guardrails around topics like pricing and policy, and log every conversation so you can see what it is saying. For high-risk answers we route to a human instead of guessing.' },
      { type: 'faq', q: 'Do I own the AI system you build?',
        a: 'Completely — source code, repository and hosting in your name, with the model API keys in your own account. You can change providers or developers without a rebuild.' },
    ],
  },
  {
    slug: 'ecommerce-development',
    metaTitle: 'Ecommerce Development Australia | From $4,500',
    metaDescription:
      'Custom ecommerce development in Australia — Stripe checkout, your own inventory, zero platform commission. Fixed AUD pricing from $4,500, you own the store.',
    eyebrow: 'Ecommerce',
    h1: 'Ecommerce development for Australian businesses',
    lead:
      'A Shopify store is rented. You pay a monthly subscription, a transaction fee on every sale, and you are one plugin update away from something breaking. We build the store into your own codebase — real inventory, real Stripe checkout, and nobody taking a cut of your sales.',
    priceTiers: ['ecommerce', 'custom-software'],
    schemaType: 'Service',
    breadcrumb: 'Ecommerce Development',
    related: [
      { href: '/nextjs-development/', label: 'Next.js development' },
      { href: '/pricing/', label: 'All pricing' },
      { href: '/blog/website-cost-australia/', label: 'What a website costs' },
    ],
    body: [
      { type: 'h2', text: 'What a custom store gets you that Shopify does not' },
      { type: 'p', html: 'The business outcome first: more of every sale in your account, a store that looks like your brand instead of a theme, and no subscription that keeps running whether you sell anything or not.' },
      { type: 'ul', items: [
        '<strong>No platform commission.</strong> Shopify and similar platforms take a percentage of every transaction on top of your monthly plan. A custom build has no platform in the middle — Stripe\'s processing fee is the only cut, and that goes to Stripe, not us.',
        '<strong>Your inventory, your rules.</strong> Products, variants, stock levels and pricing live in a database you control, not inside a third party\'s data model that you lose access to the day you stop paying.',
        '<strong>Checkout that matches your brand.</strong> Stripe handles the payment securely, but the page around it is built to your design — not a templated checkout flow that looks like every other store on the platform.',
        '<strong>An admin dashboard built for how you actually work.</strong> Add products, see orders, update stock — screens built around your catalogue, not a generic admin meant to fit every merchant on the platform.',
        '<strong>Order automation.</strong> Confirmation emails, stock updates and order handoffs wired together so nothing needs to be typed twice.',
      ]},

      { type: 'h2', text: 'Where Shopify is the right answer' },
      { type: 'p', html: 'Said plainly, because most developers pitching a custom build will not. If you are validating a product idea with a handful of SKUs and no development budget, a $30-a-month Shopify plan gets you selling this week — a custom build cannot compete with that speed at the very beginning.' },
      { type: 'p', html: 'Custom development earns its cost once you have real product volume, a workflow the templates cannot express, or the transaction fees are large enough that removing them pays for the build within a year or two. If you are not there yet, we will tell you honestly and point you at the cheaper option.' },

      { type: 'h2', text: 'What it costs' },
      { type: 'p', html: 'A standard store — up to around 100 products, Stripe checkout, inventory management, order emails and an admin dashboard — is <strong>$4,500</strong>, delivered in 4–6 weeks. Stores with heavier requirements — unlimited products, multi-currency, custom configurators, AI-driven recommendations — are scoped per project from <strong>$5,000</strong>.' },
      { type: 'p', html: 'Ongoing costs after launch are Stripe\'s processing fee (roughly 1.7–2.9% + a fixed fee per transaction, paid to Stripe directly) and hosting, typically under $50 a month on Vercel for most stores. No platform subscription, because there is no platform.' },

      { type: 'h2', text: 'How we build it' },
      { type: 'ul', items: [
        'Next.js 15 storefront with server-rendered product pages — fast, and indexed by Google without waiting on client-side JavaScript',
        'Stripe for payment processing — PCI compliance and card handling stay with Stripe, not with code we write',
        'A database built around your actual product structure, not a generic schema stretched to fit',
        'Admin screens for the day-to-day tasks your team actually does — adding stock, checking orders, issuing refunds',
        'Deployed to Vercel, repository in your name — you can hand it to another developer at any point',
      ]},

      { type: 'h2', text: 'Ecommerce builds we have shipped' },
      { type: 'p', html: '<a href="https://www.hsracegear.com" target="_blank" rel="noopener noreferrer" class="color-green-900">HS Race Gear</a> — a full custom store for an Australian racing gear brand, with a 3D product viewer, custom measurement forms, Stripe checkout and an admin dashboard built from scratch. <a href="https://mobilearmour.com.au" target="_blank" rel="noopener noreferrer" class="color-green-900">Mobile Armour</a> — an AI-enhanced accessories store with OpenAI-driven product recommendations and Stripe payments.' },

      { type: 'h2', text: 'Common questions' },
      { type: 'faq', q: 'How much does custom ecommerce development cost in Australia?',
        a: 'A standard store — up to roughly 100 products, Stripe checkout, inventory management and an admin dashboard — is AU$4,500, delivered in 4 to 6 weeks. Stores needing unlimited products, multi-currency support or custom features like AI recommendations are scoped per project from AU$5,000.' },
      { type: 'faq', q: 'Do I pay a transaction fee on every sale?',
        a: 'No platform fee. Stripe\'s own processing fee still applies to every card transaction — roughly 1.7–2.9% plus a fixed amount, depending on card type — but that goes to Stripe for handling the payment, not to us or to a platform sitting in between.' },
      { type: 'faq', q: 'Is a custom store better than Shopify?',
        a: 'It depends on where the business is. Shopify is faster and cheaper to start with a small catalogue and no development budget. A custom build earns its cost once you have real product volume, want a checkout and admin that fit your actual workflow, or the transaction fees you are paying would cover a build within a year or two.' },
      { type: 'faq', q: 'Can you migrate my existing Shopify or WooCommerce store?',
        a: 'Yes. Product data, images and order history can be exported and imported into the new store. We scope the migration alongside the build so nothing gets lost and the store can go live with your existing catalogue in place.' },
      { type: 'faq', q: 'Do I own the store you build?',
        a: 'Completely — source code, repository, database and hosting in your name. There is no platform subscription to cancel because there is no platform; you can move the code to any developer or hosting provider at any time.' },
    ],
  },
  {
    slug: 'nextjs-development',
    metaTitle: 'Next.js Development Australia | From $1,900',
    metaDescription:
      'Next.js development for Australian businesses — faster sites, better rankings, no plugin tax. Fixed AUD pricing from $1,900, full code ownership.',
    eyebrow: 'Web Development',
    h1: 'Next.js development for Australian businesses',
    lead:
      'The business case for Next.js is not the framework — it is what the framework does for you. Pages that load faster, rank better on Google, and never send you a plugin-update email at 2am. We build every site on it, including this one.',
    priceTiers: ['business', 'unlimited', 'custom-software'],
    schemaType: 'Service',
    breadcrumb: 'Next.js Development',
    related: [
      { href: '/ecommerce-development/', label: 'Ecommerce development' },
      { href: '/ai-web-development/', label: 'AI web development' },
      { href: '/pricing/', label: 'All pricing' },
    ],
    body: [
      { type: 'h2', text: 'What Next.js actually changes for your business' },
      { type: 'p', html: 'Business outcome before framework name, always. Here is what each technical property of Next.js turns into once your site is live.' },
      { type: 'ul', items: [
        '<strong>Faster pages, fewer people leaving.</strong> Next.js renders pages on the server, so a visitor sees content immediately instead of waiting for JavaScript to build the page in their browser. Slow sites lose visitors before they read a word — Core Web Vitals measures exactly this, and it is a Google ranking factor.',
        '<strong>Better rankings without extra SEO work.</strong> Google indexes server-rendered HTML directly. WordPress and page-builder sites often need plugins bolted on to fix what Next.js does correctly out of the box.',
        '<strong>No plugin tax.</strong> WordPress sites accumulate a stack of paid plugins — SEO, forms, caching, security — each with its own subscription and its own way of breaking on the next update. A Next.js site has none of that because the functionality is built into the codebase, not bolted on top of it.',
        '<strong>Scales without a re-platform.</strong> The same codebase that handles ten visitors a day handles a product launch without you needing to migrate to different infrastructure.',
        '<strong>No lock-in.</strong> Next.js is open source. It deploys to Vercel, AWS, or your own server, and the code is yours — nothing about the framework ties you to us as the developer.',
      ]},

      { type: 'h2', text: 'Where Next.js is not the right call' },
      { type: 'p', html: 'Worth saying plainly. If your team needs to edit content daily without touching code — a busy blog, a large content-marketing operation with multiple non-technical writers — a headless CMS on top of Next.js or, in some cases, a well-run WordPress install can be the more practical choice. We will tell you if that is a better fit before we quote a build.' },

      { type: 'h2', text: 'What it costs' },
      { type: 'p', html: 'A business site of up to 10 pages is <strong>$1,900</strong>, delivered in 2–3 weeks. Multi-service or multi-location sites with no page cap are <strong>$3,500</strong>. Applications — dashboards, portals, booking systems, custom platforms — are scoped per project from <strong>$5,000</strong>.' },
      { type: 'p', html: 'Hosting on Vercel is typically free to low-cost for a business site, scaling with traffic. No CMS licence, no plugin subscriptions, no page-builder fee.' },

      { type: 'h2', text: 'How we build it' },
      { type: 'ul', items: [
        'Next.js 15 App Router with server-rendered pages by default',
        'Automatic image optimisation, font loading and code splitting — Core Web Vitals handled by the framework, not bolted on after launch',
        'API routes and server actions for anything dynamic — forms, bookings, integrations — in the same codebase, no separate backend to maintain',
        'Structured data and semantic HTML built in at development time, not added afterwards',
        'Deployed to Vercel, repository in your name — you own the code from day one',
      ]},

      { type: 'h2', text: 'Next.js builds we have shipped' },
      { type: 'p', html: '<a href="https://www.hsracegear.com" target="_blank" rel="noopener noreferrer" class="color-green-900">HS Race Gear</a> — a full ecommerce build on Next.js 15 with a 3D product viewer and Stripe checkout. <a href="https://mobilearmour.com.au" target="_blank" rel="noopener noreferrer" class="color-green-900">Mobile Armour</a> — an AI-powered accessories store with OpenAI recommendations, also on Next.js.' },

      { type: 'h2', text: 'Common questions' },
      { type: 'faq', q: 'How much does Next.js development cost in Australia?',
        a: 'A business site of up to 10 pages is AU$1,900, delivered in 2 to 3 weeks. Multi-service or multi-location sites with no page cap are AU$3,500. Applications like dashboards, portals or booking systems are scoped per project from AU$5,000.' },
      { type: 'faq', q: 'Is Next.js actually better for SEO than WordPress?',
        a: 'Next.js renders pages on the server, so Google indexes the full HTML immediately without relying on JavaScript execution, and Core Web Vitals scores are strong by default. WordPress can be made to perform well too, but usually needs several plugins layered on to get there — each one a maintenance cost and a possible failure point.' },
      { type: 'faq', q: 'Can you migrate my existing WordPress or Wix site to Next.js?',
        a: 'Yes. Content, images and page structure can be carried across, and URLs are kept the same or properly redirected so search rankings are not lost in the move. We scope the migration as part of the build.' },
      { type: 'faq', q: 'Will I be able to update content myself?',
        a: 'Yes — depending on the build, either through a connected headless CMS or through simple data files we set up for you, with a handover session showing you exactly how. You are not dependent on us for every text change.' },
      { type: 'faq', q: 'Do I own the code?',
        a: 'Completely — full source code and repository access in your name, deployed under your own Vercel account where possible. No proprietary platform, no lock-in.' },
    ],
  },
]

export function getLandingPage(slug) {
  return LANDING_PAGES.find((p) => p.slug === slug)
}
