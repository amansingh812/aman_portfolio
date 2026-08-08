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
  {
    slug: 'tradie-website-design',
    metaTitle: 'Tradie Website Design Australia | From $800',
    metaDescription:
      'Tradie website design from $800. Tap-to-call, quote forms and service-area pages for plumbers, electricians and builders. Fixed AUD prices, you own the code.',
    eyebrow: 'Tradie',
    h1: 'Websites for Australian tradies, from $800',
    lead:
      'Most tradie websites are built to look nice. Yours needs to turn someone standing in a flooded laundry into a phone call — everything else is decoration.',
    priceTiers: ['starter', 'business', 'unlimited'],
    schemaType: 'Service',
    breadcrumb: 'Tradie Website Design',
    related: [
      { href: '/blog/tradie-website-cost/', label: 'Tradie website cost guide' },
      { href: '/web-design-melbourne/', label: 'Web design Melbourne' },
      { href: '/real-estate-website-design/', label: 'Real estate website design' },
      { href: '/pricing/', label: 'All pricing' },
    ],
    body: [
      { type: 'h2', text: 'What most tradie websites get wrong' },
      { type: 'ul', items: [
        '<strong>The number is hard to find.</strong> Your visitor is on a phone, one-handed, in a hurry. If the phone number is not tappable and visible without scrolling, you have lost the job to whoever ranked below you.',
        '<strong>It is slow on mobile data.</strong> A site that takes six seconds on 4G loses roughly half its visitors before anything appears. Emergency trades lose more.',
        '<strong>No service area stated.</strong> "We cover Melbourne\'s northern suburbs — Preston, Reservoir, Coburg" beats a vague map graphic. People want to know you come to them before they call.',
        '<strong>Stock photos of someone else\'s van.</strong> Twelve real job photos from your phone out-convert professional stock every time. People are checking whether you do work like theirs.',
      ]},

      { type: 'h2', text: 'What we build into every tradie site' },
      { type: 'ul', items: [
        'Tap-to-call button fixed in the header on mobile',
        'Service-area pages for the suburbs you actually cover',
        'Quote form that asks job type, suburb, urgency and photos',
        'Before-and-after gallery from your own jobs',
        'Licence and insurance numbers displayed, not buried',
        'Google reviews pulled onto the page and linked so they verify',
        'Loads in under three seconds on 4G',
        'Google Business Profile setup, which for trades often out-earns the website itself',
      ]},

      { type: 'h2', text: 'When you probably do not need us yet' },
      { type: 'p', html: 'If you have just started and have no Google Business Profile, set that up first. It is free, it puts you on Maps, and for a lot of trades it generates more calls in month one than a website will. We would rather tell you that than sell you something you do not need yet. Come back when you are competing for jobs people compare before calling.' },

      { type: 'h2', text: 'What it costs' },
      { type: 'p', html: 'A three to five page tradie site is <strong>$800</strong>, up to ten pages with service-area pages is <strong>$1,900</strong>, and unlimited pages is <strong>$3,500</strong>. A booking system adds from $700. Every quote is fixed in writing before work starts.' },

      { type: 'h2', text: 'Common questions' },
      { type: 'faq', q: 'How much does a tradie website cost?',
        a: 'A three to five page tradie site is $800, up to ten pages with service-area pages is $1,900, and unlimited pages is $3,500. Add a booking system from $700. Every quote is fixed in writing before work starts.' },
      { type: 'faq', q: 'Do tradies actually need a website?',
        a: 'Not always, and not first. A free Google Business Profile should come before a website for a brand new sole trader. A website earns its keep once you are competing for jobs where people compare two or three tradies, quoting work over $5,000, or paying for ads and sending that traffic to a Facebook page.' },
      { type: 'faq', q: 'How long does a tradie website take?',
        a: 'Five to seven business days for a three to five page site, two to three weeks for a larger one. The usual delay is waiting on job photos and service descriptions, not development.' },
      { type: 'faq', q: 'Will it get me on the first page of Google?',
        a: 'A website alone will not. Ranking depends on your Google Business Profile, reviews and links, and takes months. Anyone guaranteeing page one is guessing. What we can do is remove the technical reasons Google might ignore you — speed, structure, schema and mobile usability are included in every build.' },
      { type: 'faq', q: 'Do I own the site?',
        a: 'Completely — source code, repository and hosting account in your name. Several Australian agencies build on their own systems you cannot leave without a rebuild. Ask any agency you approach whether you take the site with you if you go.' },
    ],
  },
  {
    slug: 'restaurant-website-design',
    metaTitle: 'Restaurant Website Design Australia | From $800',
    metaDescription:
      'Restaurant and café website design from $800. Readable mobile menus, direct bookings that skip the commission, and you own the code. Fixed AUD prices.',
    eyebrow: 'Restaurant',
    h1: 'Websites for cafés and restaurants, from $800',
    lead:
      'Every booking taken through your own website is a booking you did not pay commission on. That is the whole business case, and most venue websites are not set up to capture it.',
    priceTiers: ['starter', 'business', 'ecommerce'],
    schemaType: 'Service',
    breadcrumb: 'Restaurant Website Design',
    related: [
      { href: '/web-design-melbourne/', label: 'Web design Melbourne' },
      { href: '/tradie-website-design/', label: 'Tradie website design' },
      { href: '/blog/website-cost-australia/', label: 'What a website costs' },
      { href: '/pricing/', label: 'All pricing' },
    ],
    body: [
      { type: 'h2', text: 'What most café and restaurant sites get wrong' },
      { type: 'ul', items: [
        '<strong>The menu is a PDF.</strong> A PDF menu on a phone means pinching and zooming. People give up and check the platform listing instead — where a competitor is one tap away. Menus should be real web pages.',
        '<strong>Bookings go through a platform.</strong> Every booking through a third party carries a fee, and the customer relationship belongs to them. A direct booking on your own site costs nothing per cover.',
        '<strong>Opening hours are wrong or missing.</strong> The single most-searched thing about a venue. If Google and your site disagree, people arrive to a closed door and leave a review about it.',
        '<strong>No photos of the actual food.</strong> Stock imagery of generic plated food reads as dishonest. Real photos of your dishes, even from a phone, convert better.',
      ]},

      { type: 'h2', text: 'What we build into every venue site' },
      { type: 'ul', items: [
        'Menu as real web pages, readable on a phone without zooming',
        'Direct booking that skips per-cover commission',
        'Opening hours synced with your Google Business Profile',
        'Tap-to-call and one-tap directions',
        'Real photos of your food and room',
        'Function and event enquiry form',
        'Dietary and allergen information that is easy to find',
        'Schema markup so menus and hours appear in Google results',
      ]},

      { type: 'h2', text: 'Being straight about booking platforms' },
      { type: 'p', html: 'A direct booking system does not mean you should leave the platforms. They bring genuine discovery traffic, particularly for new venues. What it means is that regulars who already know you should be able to book on your own site rather than costing you a fee every visit. Most venues do best running both and gradually shifting repeat customers to direct.' },

      { type: 'h2', text: 'What it costs' },
      { type: 'p', html: 'A three to five page café site is <strong>$800</strong>, and up to ten pages with a booking system is <strong>$1,900</strong>. Online ordering with payments is <strong>$4,500</strong>. Every quote is fixed in writing before work starts.' },

      { type: 'h2', text: 'Common questions' },
      { type: 'faq', q: 'How much does a restaurant website cost in Australia?',
        a: 'A three to five page café site is $800, and up to ten pages with a booking system is $1,900. Online ordering with payments is $4,500. Every quote is fixed in writing before work starts.' },
      { type: 'faq', q: 'Can I take bookings without paying commission?',
        a: 'Yes. A direct booking system on your own site has no per-cover fee. Most venues keep the platforms for discovery and move repeat customers to direct booking, which is where the savings compound.' },
      { type: 'faq', q: 'Should my menu be a PDF?',
        a: 'No. PDF menus require pinching and zooming on a phone, are often unreadable by screen readers, and cannot show in Google results. Menus should be real web pages with proper markup so dishes and prices can be indexed.' },
      { type: 'faq', q: 'How long does a restaurant website take?',
        a: 'Five to seven business days for a simple café site, two to three weeks with booking integration. Food photography is the usual delay — if you already have photos it moves faster.' },
      { type: 'faq', q: 'Do I own the website?',
        a: 'Completely — source code, repository and hosting account in your name. You can move to another developer at any time and nothing breaks.' },
    ],
  },
  {
    slug: 'real-estate-website-design',
    metaTitle: 'Real Estate Website Design Australia | From $800',
    metaDescription:
      'Real estate website design from $800. Property listings, agent profiles and appraisal forms that generate leads. Fixed AUD prices, you own the code.',
    eyebrow: 'Real Estate',
    h1: 'Websites for agents and agencies, from $800',
    lead:
      'Your listings already appear on the major portals. Your website has a different job: convincing a vendor that you are the agent to hand the listing to in the first place.',
    priceTiers: ['starter', 'business', 'unlimited'],
    schemaType: 'Service',
    breadcrumb: 'Real Estate Website Design',
    related: [
      { href: '/web-design-melbourne/', label: 'Web design Melbourne' },
      { href: '/restaurant-website-design/', label: 'Restaurant website design' },
      { href: '/blog/website-cost-australia/', label: 'What a website costs' },
      { href: '/pricing/', label: 'All pricing' },
    ],
    body: [
      { type: 'h2', text: 'What most agent websites get wrong' },
      { type: 'ul', items: [
        '<strong>They compete with the portals.</strong> Trying to out-search realestate.com.au is a losing fight. Your site should win the vendor, not the buyer — buyers are already on the portals.',
        '<strong>No appraisal capture.</strong> The highest-value action on an agent website is a vendor requesting an appraisal. Most sites bury it or do not offer it at all.',
        '<strong>Franchise template with no local proof.</strong> If your site looks identical to every other office in the network, nothing tells a vendor why you specifically.',
        '<strong>Sold results not shown.</strong> Vendors want evidence you sell in their street. Recent sold listings with real numbers do more than any amount of copy.',
      ]},

      { type: 'h2', text: 'What we build into every agent site' },
      { type: 'ul', items: [
        'Appraisal request form as the primary action',
        'Recent sold results with suburb and outcome',
        'Agent profiles that read like people, not directory entries',
        'Suburb pages for the areas you genuinely work',
        'Property listings synced from your CRM where possible',
        'Testimonials from real vendors, verifiable',
        'Fast mobile pages — most property browsing is on a phone',
        'Schema markup for listings and agent profiles',
      ]},

      { type: 'h2', text: 'Where a website will not help' },
      { type: 'p', html: 'If your problem is buyer volume, a website is the wrong tool — the portals own that traffic and always will. A website earns its keep on the vendor side, where the decision is about trust rather than inventory. If you are winning plenty of listings and just need more buyers, spend the money on the portals instead. We would rather say that than take the project.' },

      { type: 'h2', text: 'What it costs' },
      { type: 'p', html: 'A three to five page agent site is <strong>$800</strong>, up to ten pages with suburb pages and appraisal forms is <strong>$1,900</strong>, and unlimited pages is <strong>$3,500</strong>. CRM integration for live listings is quoted as a custom build from $4,500.' },

      { type: 'h2', text: 'Common questions' },
      { type: 'faq', q: 'How much does a real estate website cost in Australia?',
        a: 'A three to five page agent site is $800, up to ten pages with suburb pages and appraisal forms is $1,900, and unlimited pages is $3,500. CRM integration for live listings is quoted as a custom build from $4,500.' },
      { type: 'faq', q: 'Can my listings sync automatically from my CRM?',
        a: 'Usually yes, depending on your CRM and whether it exposes an API or feed. This is quoted as a custom build because the work depends entirely on the system you already use. We will tell you upfront if your CRM makes it impractical.' },
      { type: 'faq', q: 'Should I build suburb pages for every area I cover?',
        a: 'Only for suburbs where you genuinely work and have sold. Thirty near-identical suburb pages is the scaled-content pattern Google penalises, and a site-wide demotion would take your good pages with it. Fewer, better pages win.' },
      { type: 'faq', q: 'How long does an agent website take?',
        a: 'Five to seven business days for a simple site, two to three weeks with suburb pages and forms. CRM integration adds time depending on the system.' },
      { type: 'faq', q: 'Do I own the website?',
        a: 'Completely — source code, repository and hosting account in your name, independent of your franchise or CRM provider.' },
    ],
  },
  {
    slug: 'web-design-melbourne',
    metaTitle: 'Web Design Melbourne | Prices From $800',
    metaDescription:
      'Melbourne web design with prices published upfront — from $800. Fast Next.js builds, SEO included, and you own the code. Fixed quote in one business day.',
    eyebrow: 'MELBOURNE, VICTORIA',
    h1: 'Web design in Melbourne, with the price on the page.',
    lead:
      'Most Melbourne agencies make you sit through a discovery call before they tell you what it costs. Ours starts at $800 and every figure is published. Fast Next.js builds, SEO included, and you own the code.',
    priceTiers: ['starter', 'business', 'unlimited', 'ecommerce', 'application', 'custom-software'],
    schemaType: 'Service',
    breadcrumb: 'Web Design Melbourne',
    /* Only this page carries the verified GBP entity — see LandingPage.js. */
    localBusiness: true,
    areaServed: { '@type': 'City', name: 'Melbourne', containedInPlace: { '@type': 'State', name: 'Victoria' } },
    geo: { region: 'AU-VIC', placename: 'Melbourne', latitude: -37.7180, longitude: 145.0020 },
    related: [
      { href: '/tradie-website-design/', label: 'Tradie websites' },
      { href: '/restaurant-website-design/', label: 'Restaurant websites' },
      { href: '/pricing/', label: 'All pricing' },
    ],
    body: [
      { type: 'h2', text: 'Why Melbourne quotes vary so wildly' },
      { type: 'p', html: 'Ask five Melbourne agencies for a five-page business website and you will get quotes between $2,000 and $20,000 for work that is functionally identical. The spread is not about quality. It is about overheads — a Collins Street office, an account manager, a sales team and a project coordinator all sit inside that number before a single line of code is written.' },
      { type: 'ul', items: [
        '<strong>You are quoted, not told.</strong> Prices hidden behind a discovery call, so you cannot compare without spending three hours on Zoom. We publish every figure.',
        '<strong>The site is slow.</strong> Most Melbourne sites still run on WordPress with a page builder. About two thirds of your traffic is on a phone, and a five-second load loses most of it before anything appears.',
        '<strong>You cannot leave.</strong> Several Australian agencies build on their own CMS and hosting. Moving means rebuilding from scratch. It is almost never disclosed upfront.',
      ]},

      { type: 'h2', text: 'What we build for Melbourne businesses' },
      { type: 'ul', items: [
        '<strong>Trades and home services.</strong> Click-to-call, quote forms and service-area pages for plumbers, electricians and builders across the Melbourne metro.',
        '<strong>Cafés, restaurants and hospitality.</strong> Menus that are actually readable on a phone, direct bookings that skip the commission, and Google Maps integration.',
        '<strong>Clinics and professional services.</strong> Booking systems, accessible builds and the compliance-aware structure that medical, legal and accounting practices need.',
        '<strong>Retail and e-commerce.</strong> Stripe checkout, real inventory and order management — without paying a platform commission on every sale you make.',
      ]},

      { type: 'h2', text: 'Working across Melbourne' },
      { type: 'p', html: 'Your contact is Melbourne-based, so a first meeting in person is easy whether you are in the CBD, out past Box Hill or down the peninsula. We work with businesses in <strong>Melbourne CBD, Southbank, Docklands, Richmond, South Yarra, St Kilda, Brunswick, Fitzroy and Carlton</strong> through to <strong>Hawthorn, Box Hill, Footscray, Preston, Dandenong, Frankston</strong> and out to <strong>Geelong</strong>. After the first meeting most projects run over calls and a live staging link, which tends to suit everyone better than driving across town.' },

      { type: 'h2', text: 'Sites we have actually shipped' },
      { type: 'p', html: 'Real client work on their own domains. Open any of them and run a speed test — we would rather you checked than took our word for it. <a href="https://www.hsracegear.com" target="_blank" rel="noopener noreferrer" class="color-green-900">HS Race Gear</a> — motorsport e-commerce, large product catalogue. <a href="https://mobilearmour.com.au" target="_blank" rel="noopener noreferrer" class="color-green-900">Mobile Armour</a> — Australian retail, speed and SEO rebuild. <a href="https://www.autozenlyai.com" target="_blank" rel="noopener noreferrer" class="color-green-900">Autozenly AI</a> — AI SaaS, admin dashboard and platform. <a href="https://planet.ltfinance.com" target="_blank" rel="noopener noreferrer" class="color-green-900">LT Finance</a> — enterprise fintech platform.' },

      { type: 'h2', text: 'Melbourne web design questions' },
      { type: 'faq', q: 'How much does a website cost in Melbourne?',
        a: 'Our prices are published: $800 for a three to five page site, $1,900 for up to ten pages, $3,500 for unlimited pages, and $4,500 for e-commerce or an application. Melbourne agencies commonly quote $5,000 to $15,000 for the same scope. Every quote is fixed in writing before work starts.' },
      { type: 'faq', q: 'Do you meet clients in person in Melbourne?',
        a: 'Yes. Your contact is based in Melbourne and can meet anywhere across the metro area, or run the project over calls if that suits you better. Most clients prefer one meeting at the start and calls after that.' },
      { type: 'faq', q: 'How long does a Melbourne website take to build?',
        a: 'Five to seven business days for a three to five page site, two to three weeks for up to ten pages, and four to six weeks for e-commerce. The biggest variable is how quickly you supply content — builds that run long are almost always waiting on copy or photos.' },
      { type: 'faq', q: 'Will my Melbourne business rank on Google?',
        a: 'We build SEO into the site rather than selling it separately — semantic HTML, structured data, local schema and Google Business Profile setup are all included. We cannot promise a specific ranking, and anyone who does is guessing. What we can promise is that the technical foundation will not be what holds you back.' },
      { type: 'faq', q: 'Do I own the website?',
        a: 'Completely. You get the source code, the repository and the hosting account in your name. You can move to another developer at any time and nothing breaks. Several Australian agencies build on their own CMS and hosting, which means leaving them requires a rebuild — that is rarely disclosed upfront.' },
    ],
  },
  {
    slug: 'web-design-sydney',
    metaTitle: 'Web Design Sydney | Prices From $800',
    metaDescription:
      'Sydney web design with prices published upfront — from $800. Fast Next.js builds, SEO included, and you own the code. Fixed quote in one business day.',
    eyebrow: 'SYDNEY, NSW',
    h1: 'Web design in Sydney, with the price on the page.',
    lead:
      'Most Sydney agencies make you sit through a discovery call before telling you what it costs. Ours starts at $800 and every figure is published. Fast Next.js builds, SEO included, and you own the code.',
    priceTiers: ['starter', 'business', 'unlimited', 'ecommerce', 'application', 'custom-software'],
    schemaType: 'Service',
    breadcrumb: 'Web Design Sydney',
    areaServed: { '@type': 'City', name: 'Sydney', containedInPlace: { '@type': 'State', name: 'New South Wales' } },
    geo: { region: 'AU-NSW', placename: 'Sydney', latitude: -33.8688, longitude: 151.2093 },
    related: [
      { href: '/web-design-melbourne/', label: 'Web design Melbourne' },
      { href: '/tradie-website-design/', label: 'Tradie websites' },
      { href: '/pricing/', label: 'All pricing' },
    ],
    body: [
      { type: 'h2', text: 'Why Sydney web design quotes are the highest in Australia' },
      { type: 'p', html: 'Sydney has the most expensive commercial rents in the country, and agency pricing reflects it. A five-page business website that costs $2,000 in Adelaide is routinely quoted at $8,000 to $15,000 in the Sydney CBD. The build is the same. What differs is the overhead sitting behind it — office space in Surry Hills or North Sydney, an account manager, a project coordinator and a sales team all get costed into your quote before anyone writes a line of code.' },
      { type: 'p', html: 'That overhead buys you a meeting room. It does not make the website faster, rank better or convert more visitors. We work remotely from Melbourne, which is why our prices are published and start at $800.' },
      { type: 'p', html: 'Sydney is also the most crowded market for web designers in Australia, which is genuinely good news for you: it means you can compare several published quotes before committing. Ask every one of them for a fixed price in writing, and ask whether you own the code.' },

      { type: 'h2', text: 'What we build for Sydney businesses' },
      { type: 'ul', items: [
        '<strong>Trades and home services.</strong> Plumbers, electricians and builders across Western Sydney and the Northern Beaches — click-to-call, quote forms and service-area pages.',
        '<strong>Professional services.</strong> Legal, accounting and consulting practices in the CBD and North Sydney that need credibility before a first meeting.',
        '<strong>Hospitality.</strong> Cafés and restaurants in Surry Hills, Newtown and Bondi — direct bookings that skip the commission.',
        '<strong>Retail and e-commerce.</strong> Stripe checkout with real inventory, without paying a platform commission on every sale.',
      ]},

      { type: 'h2', text: 'Working with Sydney businesses' },
      { type: 'p', html: 'We are based in Melbourne and work with Sydney businesses remotely. That is worth stating plainly rather than implying an office we do not have. In practice it changes very little: you get a live staging link from the first week, calls whenever you want them, and the same fixed price a local agency would charge more for.' },
      { type: 'p', html: 'We work with businesses across <strong>Sydney CBD, Parramatta, North Sydney, Chatswood, Bondi, Surry Hills, Newtown, Manly, Liverpool, Penrith, Blacktown and Bankstown</strong> and the wider New South Wales metro area.' },

      { type: 'h2', text: 'Sydney web design questions' },
      { type: 'faq', q: 'How much does a website cost in Sydney?',
        a: 'Our prices are published: $800 for a three to five page site, $1,900 for up to ten pages, $3,500 for unlimited pages, and $4,500 for e-commerce or an application. Sydney agencies commonly quote several times that for the same scope. Every quote is fixed in writing before work starts.' },
      { type: 'faq', q: 'Are you based in Sydney?',
        a: 'No. Build First Site is based in Melbourne and works with Sydney businesses remotely. We say that plainly rather than implying a local office. You get a live staging link from the first week and calls whenever you want them, and the price is lower than a local agency with premises to pay for.' },
      { type: 'faq', q: 'How long does a Sydney website take to build?',
        a: 'Five to seven business days for a three to five page site, two to three weeks for up to ten pages, and four to six weeks for e-commerce. The biggest variable is how quickly you supply content — builds that run long are almost always waiting on copy or images, not development.' },
      { type: 'faq', q: 'Will my Sydney business rank on Google?',
        a: 'We build SEO into the site rather than selling it separately — semantic HTML, structured data, local schema and Google Business Profile setup are all included. We cannot promise a specific ranking, and anyone who does is guessing. What we can promise is that the technical foundation will not be what holds you back.' },
      { type: 'faq', q: 'Do I own the website?',
        a: 'Completely. You get the source code, the repository and the hosting account in your name. You can move to another developer at any time and nothing breaks. Several Australian agencies build on their own CMS and hosting, which means leaving them requires a rebuild — that is rarely disclosed upfront.' },
    ],
  },
  {
    slug: 'web-design-brisbane',
    metaTitle: 'Web Design Brisbane | Prices From $800',
    metaDescription:
      'Brisbane web design with prices published upfront — from $800. Fast Next.js builds, SEO included, and you own the code. Fixed quote in one business day.',
    eyebrow: 'BRISBANE, QLD',
    h1: 'Web design in Brisbane, with the price on the page.',
    lead:
      'Most Brisbane agencies make you sit through a discovery call before telling you what it costs. Ours starts at $800 and every figure is published. Fast Next.js builds, SEO included, and you own the code.',
    priceTiers: ['starter', 'business', 'unlimited', 'ecommerce', 'application', 'custom-software'],
    schemaType: 'Service',
    breadcrumb: 'Web Design Brisbane',
    areaServed: { '@type': 'City', name: 'Brisbane', containedInPlace: { '@type': 'State', name: 'Queensland' } },
    geo: { region: 'AU-QLD', placename: 'Brisbane', latitude: -27.4698, longitude: 153.0251 },
    related: [
      { href: '/web-design-melbourne/', label: 'Web design Melbourne' },
      { href: '/restaurant-website-design/', label: 'Restaurant websites' },
      { href: '/pricing/', label: 'All pricing' },
    ],
    body: [
      { type: 'h2', text: 'Brisbane is growing, and your competitors are already online' },
      { type: 'p', html: 'Brisbane and South East Queensland are in a sustained growth phase, with major infrastructure work running through to the 2032 Olympics. More residents means more customers, but it also means more competitors — including newcomers from Sydney and Melbourne who arrive with a marketing budget already in place.' },
      { type: 'p', html: 'For an established Brisbane business, the risk is being outranked in your own suburb by a company that opened last year with a faster website. Local reputation does not transfer to Google automatically.' },
      { type: 'p', html: 'Brisbane agency pricing sits below Sydney but above Adelaide, typically $4,000 to $10,000 for a business website. Ours is published and starts at $800 because we work remotely from Melbourne and there is no office overhead in the quote.' },

      { type: 'h2', text: 'What we build for Brisbane businesses' },
      { type: 'ul', items: [
        '<strong>Trades and construction.</strong> With SEQ construction demand high, tradies competing for renovation and commercial work need more than a Facebook page.',
        '<strong>Hospitality and tourism.</strong> Restaurants and operators across the Valley, West End and out toward the Bay — bookings direct rather than through a platform.',
        '<strong>Health and allied health.</strong> Clinics needing accessible, compliant sites with online booking.',
        '<strong>Retail and e-commerce.</strong> Selling beyond Queensland with real inventory and order management.',
      ]},

      { type: 'h2', text: 'Working with Brisbane businesses' },
      { type: 'p', html: 'We are based in Melbourne and work with Brisbane businesses remotely. That is worth stating plainly rather than implying an office we do not have. In practice it changes very little: you get a live staging link from the first week, calls whenever you want them, and the same fixed price a local agency would charge more for.' },
      { type: 'p', html: 'We work with businesses across <strong>Brisbane CBD, Fortitude Valley, South Brisbane, West End, Chermside, Toowong, Ipswich, Logan, Redcliffe, Carindale and Springfield</strong> and the wider Queensland metro area.' },

      { type: 'h2', text: 'Brisbane web design questions' },
      { type: 'faq', q: 'How much does a website cost in Brisbane?',
        a: 'Our prices are published: $800 for a three to five page site, $1,900 for up to ten pages, $3,500 for unlimited pages, and $4,500 for e-commerce or an application. Brisbane agencies commonly quote several times that for the same scope. Every quote is fixed in writing before work starts.' },
      { type: 'faq', q: 'Are you based in Brisbane?',
        a: 'No. Build First Site is based in Melbourne and works with Brisbane businesses remotely. We say that plainly rather than implying a local office. You get a live staging link from the first week and calls whenever you want them, and the price is lower than a local agency with premises to pay for.' },
      { type: 'faq', q: 'How long does a Brisbane website take to build?',
        a: 'Five to seven business days for a three to five page site, two to three weeks for up to ten pages, and four to six weeks for e-commerce. The biggest variable is how quickly you supply content — builds that run long are almost always waiting on copy or images, not development.' },
      { type: 'faq', q: 'Will my Brisbane business rank on Google?',
        a: 'We build SEO into the site rather than selling it separately — semantic HTML, structured data, local schema and Google Business Profile setup are all included. We cannot promise a specific ranking, and anyone who does is guessing. What we can promise is that the technical foundation will not be what holds you back.' },
      { type: 'faq', q: 'Do I own the website?',
        a: 'Completely. You get the source code, the repository and the hosting account in your name. You can move to another developer at any time and nothing breaks. Several Australian agencies build on their own CMS and hosting, which means leaving them requires a rebuild — that is rarely disclosed upfront.' },
    ],
  },
  {
    slug: 'web-design-perth',
    metaTitle: 'Web Design Perth | Prices From $800',
    metaDescription:
      'Perth web design with prices published upfront — from $800. Fast Next.js builds, SEO included, and you own the code. Fixed quote in one business day.',
    eyebrow: 'PERTH, WA',
    h1: 'Web design in Perth, with the price on the page.',
    lead:
      'Most Perth agencies make you sit through a discovery call before telling you what it costs. Ours starts at $800 and every figure is published. Fast Next.js builds, SEO included, and you own the code.',
    priceTiers: ['starter', 'business', 'unlimited', 'ecommerce', 'application', 'custom-software'],
    schemaType: 'Service',
    breadcrumb: 'Web Design Perth',
    areaServed: { '@type': 'City', name: 'Perth', containedInPlace: { '@type': 'State', name: 'Western Australia' } },
    geo: { region: 'AU-WA', placename: 'Perth', latitude: -31.9523, longitude: 115.8613 },
    related: [
      { href: '/web-design-melbourne/', label: 'Web design Melbourne' },
      { href: '/tradie-website-design/', label: 'Tradie websites' },
      { href: '/pricing/', label: 'All pricing' },
    ],
    body: [
      { type: 'h2', text: 'Perth has fewer web designers — which cuts both ways' },
      { type: 'p', html: 'Perth is the most isolated capital city in the world, and its web design market is smaller than the east coast equivalent. That has an obvious upside: less competition for local search terms, so a well-built Perth website can rank faster than the same site would in Sydney.' },
      { type: 'p', html: 'The downside is less price competition. With fewer studios bidding, quotes are less disciplined and the gap between the cheapest and most expensive can be enormous for identical scope.' },
      { type: 'p', html: 'The timezone question comes up in Perth more than anywhere else. We work remotely and our contact is in Melbourne, which is two to three hours ahead of Perth depending on daylight saving. In practice that means we are working while you are starting your day, and calls are scheduled in the Perth morning.' },

      { type: 'h2', text: 'What we build for Perth businesses' },
      { type: 'ul', items: [
        '<strong>Mining services and industrial.</strong> Contractors and suppliers who need to look credible to procurement teams, not just to consumers.',
        '<strong>Trades and home services.</strong> Perth trades competing across a sprawling metro area where service-area pages matter more than in a compact city.',
        '<strong>Hospitality.</strong> Fremantle and Northbridge venues taking bookings direct.',
        '<strong>Retail and e-commerce.</strong> Selling to the east coast and beyond without a platform commission.',
      ]},

      { type: 'h2', text: 'Working with Perth businesses' },
      { type: 'p', html: 'We are based in Melbourne and work with Perth businesses remotely. That is worth stating plainly rather than implying an office we do not have. In practice it changes very little: you get a live staging link from the first week, calls scheduled for the Perth morning, and the same fixed price a local agency would charge more for.' },
      { type: 'p', html: 'We work with businesses across <strong>Perth CBD, Fremantle, Joondalup, Subiaco, Cannington, Midland, Rockingham, Mandurah, Osborne Park and Cockburn</strong> and the wider Western Australia metro area.' },

      { type: 'h2', text: 'Perth web design questions' },
      { type: 'faq', q: 'How much does a website cost in Perth?',
        a: 'Our prices are published: $800 for a three to five page site, $1,900 for up to ten pages, $3,500 for unlimited pages, and $4,500 for e-commerce or an application. Perth agencies commonly quote several times that for the same scope. Every quote is fixed in writing before work starts.' },
      { type: 'faq', q: 'Are you based in Perth?',
        a: 'No. Build First Site is based in Melbourne and works with Perth businesses remotely. We say that plainly rather than implying a local office. You get a live staging link from the first week and calls scheduled for the Perth morning, and the price is lower than a local agency with premises to pay for.' },
      { type: 'faq', q: 'How long does a Perth website take to build?',
        a: 'Five to seven business days for a three to five page site, two to three weeks for up to ten pages, and four to six weeks for e-commerce. The biggest variable is how quickly you supply content — builds that run long are almost always waiting on copy or images, not development.' },
      { type: 'faq', q: 'Will my Perth business rank on Google?',
        a: 'We build SEO into the site rather than selling it separately — semantic HTML, structured data, local schema and Google Business Profile setup are all included. We cannot promise a specific ranking, and anyone who does is guessing. What we can promise is that the technical foundation will not be what holds you back.' },
      { type: 'faq', q: 'Do I own the website?',
        a: 'Completely. You get the source code, the repository and the hosting account in your name. You can move to another developer at any time and nothing breaks. Several Australian agencies build on their own CMS and hosting, which means leaving them requires a rebuild — that is rarely disclosed upfront.' },
    ],
  },
  {
    slug: 'web-design-adelaide',
    metaTitle: 'Web Design Adelaide | Prices From $800',
    metaDescription:
      'Adelaide web design with prices published upfront — from $800. Fast Next.js builds, SEO included, and you own the code. Fixed quote in one business day.',
    eyebrow: 'ADELAIDE, SA',
    h1: 'Web design in Adelaide, with the price on the page.',
    lead:
      'Most Adelaide agencies make you sit through a discovery call before telling you what it costs. Ours starts at $800 and every figure is published. Fast Next.js builds, SEO included, and you own the code.',
    priceTiers: ['starter', 'business', 'unlimited', 'ecommerce', 'application', 'custom-software'],
    schemaType: 'Service',
    breadcrumb: 'Web Design Adelaide',
    areaServed: { '@type': 'City', name: 'Adelaide', containedInPlace: { '@type': 'State', name: 'South Australia' } },
    geo: { region: 'AU-SA', placename: 'Adelaide', latitude: -34.9285, longitude: 138.6007 },
    related: [
      { href: '/web-design-melbourne/', label: 'Web design Melbourne' },
      { href: '/restaurant-website-design/', label: 'Restaurant websites' },
      { href: '/pricing/', label: 'All pricing' },
    ],
    body: [
      { type: 'h2', text: 'Adelaide businesses get quoted less — and often get less' },
      { type: 'p', html: 'Adelaide agency pricing runs below the eastern capitals, typically $2,500 to $6,000 for a business website. That sounds like good news until you look at what is inside the cheaper quotes: a template with your logo dropped in, hosting you do not control, and SEO sold separately as a monthly add-on.' },
      { type: 'p', html: 'A cheap website that nobody finds is not cheap. It is a smaller amount of money that produces nothing, which is more expensive than a good site that brings in work.' },
      { type: 'p', html: 'Adelaide\'s defence, health and wine sectors have raised the standard of what local buyers expect from a business online. A site that looked fine in 2020 now reads as dated to the people you are trying to win work from.' },

      { type: 'h2', text: 'What we build for Adelaide businesses' },
      { type: 'ul', items: [
        '<strong>Trades and home services.</strong> Adelaide trades competing for renovation and maintenance work across the metro area.',
        '<strong>Health and allied health.</strong> Clinics and practitioners needing accessible, bookable sites.',
        '<strong>Food, wine and hospitality.</strong> Cellar doors, venues and producers selling direct.',
        '<strong>Professional and defence services.</strong> Firms needing credibility with procurement and enterprise buyers.',
      ]},

      { type: 'h2', text: 'Working with Adelaide businesses' },
      { type: 'p', html: 'We are based in Melbourne and work with Adelaide businesses remotely. That is worth stating plainly rather than implying an office we do not have. In practice it changes very little: you get a live staging link from the first week, calls whenever you want them, and the same fixed price a local agency would charge more for.' },
      { type: 'p', html: 'We work with businesses across <strong>Adelaide CBD, North Adelaide, Glenelg, Norwood, Prospect, Marion, Salisbury, Port Adelaide, Unley and Modbury</strong> and the wider South Australia metro area.' },

      { type: 'h2', text: 'Adelaide web design questions' },
      { type: 'faq', q: 'How much does a website cost in Adelaide?',
        a: 'Our prices are published: $800 for a three to five page site, $1,900 for up to ten pages, $3,500 for unlimited pages, and $4,500 for e-commerce or an application. Adelaide agencies commonly quote several times that for the same scope. Every quote is fixed in writing before work starts.' },
      { type: 'faq', q: 'Are you based in Adelaide?',
        a: 'No. Build First Site is based in Melbourne and works with Adelaide businesses remotely. We say that plainly rather than implying a local office. You get a live staging link from the first week and calls whenever you want them, and the price is lower than a local agency with premises to pay for.' },
      { type: 'faq', q: 'How long does an Adelaide website take to build?',
        a: 'Five to seven business days for a three to five page site, two to three weeks for up to ten pages, and four to six weeks for e-commerce. The biggest variable is how quickly you supply content — builds that run long are almost always waiting on copy or images, not development.' },
      { type: 'faq', q: 'Will my Adelaide business rank on Google?',
        a: 'We build SEO into the site rather than selling it separately — semantic HTML, structured data, local schema and Google Business Profile setup are all included. We cannot promise a specific ranking, and anyone who does is guessing. What we can promise is that the technical foundation will not be what holds you back.' },
      { type: 'faq', q: 'Do I own the website?',
        a: 'Completely. You get the source code, the repository and the hosting account in your name. You can move to another developer at any time and nothing breaks. Several Australian agencies build on their own CMS and hosting, which means leaving them requires a rebuild — that is rarely disclosed upfront.' },
    ],
  },
  {
    slug: 'how-much-does-a-website-cost-australia',
    metaTitle: 'How Much Does a Website Cost in Australia? (2026)',
    metaDescription:
      'Website cost Australia 2026: landing page from $800, business website from $1,900, e-commerce from $4,500. Real AUD prices, no hidden fees.',
    eyebrow: 'Australia · 2026 Pricing Guide',
    h1: 'How much does a website cost in Australia?',
    lead:
      'Short answer: a landing page starts at $800 AUD, a business website at $1,900 AUD, and a custom e-commerce store at $4,500 AUD. But there is a lot more to the picture.',
    priceTiers: [],
    schemaType: 'Article',
    breadcrumb: 'How Much Does a Website Cost in Australia?',
    related: [
      { href: '/small-business-website-checklist/', label: 'Small business website checklist' },
      { href: '/hire-website-builder/', label: 'Hire a website builder' },
      { href: '/pricing/', label: 'All pricing' },
    ],
    body: [
      { type: 'h2', text: 'Website cost summary — Australia 2026' },
      { type: 'table', headers: ['Website type', 'Price range (AUD)', 'Timeline'], rows: [
        ['Landing page (1 page)', '$800 – $1,500', '~2 weeks'],
        ['Small business website (3–5 pages)', '$1,900 – $5,000', '2–3 weeks'],
        ['Corporate website (5–10 pages)', '$5,000 – $12,000', '4–6 weeks'],
        ['E-commerce store (custom)', '$4,500 – $10,000', '4–6 weeks'],
        ['AI / SaaS web application', '$5,000 – $20,000+', '6–12 weeks'],
        ['DIY builder (Wix/Squarespace)', '$20–50/month', 'Your time to learn'],
      ]},

      { type: 'h2', text: 'Landing page cost in Australia: $800 – $1,500 AUD' },
      { type: 'p', html: 'A landing page is a single-page website designed to do one thing — convert visitors into leads or customers. Common uses include Google Ads campaign pages, product launch pages, waitlist sign-ups, and event registrations.' },
      { type: 'p', html: 'At Build First Site, landing pages start at $800 AUD and are typically delivered in around 2 weeks. They include responsive design, a contact form, basic SEO setup, and hosting on Vercel (free for most business sites).' },
      { type: 'p', html: 'Freelancers on Upwork or Fiverr can go lower ($200–$400), but quality varies significantly and SEO is rarely included.' },

      { type: 'h2', text: 'Small business website cost in Australia: $1,900 – $5,000 AUD' },
      { type: 'p', html: 'A professional small business website typically includes 3–7 pages (Home, About, Services, Contact, FAQ), is fully mobile-responsive, and comes with on-page SEO, a contact form, and Google Maps integration if applicable.' },
      { type: 'p', html: 'At Build First Site, small business websites start at $1,900 AUD and are delivered in 2–3 weeks. That includes schema markup, a sitemap, a fast Next.js build, and 30 days of free post-launch support.' },
      { type: 'p', html: 'Web agencies in Sydney and Melbourne typically charge $5,000–$15,000 for the same scope — the difference is overhead costs. As an independent studio, we pass that saving directly to you.' },

      { type: 'h2', text: 'E-commerce website cost in Australia: $4,500 – $10,000 AUD' },
      { type: 'p', html: 'A custom e-commerce build includes product listings, a cart, Stripe checkout, order management, and an admin dashboard for managing your inventory. It is built to your exact business logic — not a template.' },
      { type: 'p', html: 'Shopify starts at $39/month (~$470/year) and charges 0.5–2% transaction fees on top of Stripe\'s fees. On $200,000 annual revenue, that is $1,000–$4,500/year going to Shopify forever. A custom-built store has no platform fees beyond hosting.' },
      { type: 'p', html: 'Build First Site\'s e-commerce stores start at $4,500 AUD. They use Stripe for payments (around 1.75% in Australia, no additional platform fee), with full code ownership on delivery.' },

      { type: 'h2', text: 'DIY vs hiring a professional in Australia' },
      { type: 'p', html: 'Wix, Squarespace, and Webflow are great tools — but they are not free. Wix Business costs around $32/month ($384/year). Over 5 years that is $1,920 AUD in platform fees, and you never own the site.' },
      { type: 'p', html: 'A $1,900 custom-built website hosted on Vercel\'s free tier costs $0/month in perpetuity. Over 5 years you are ahead by $2,920 — and you own everything.' },
      { type: 'p', html: 'The bigger cost with DIY builders is your time. Building a professional website on Wix from scratch takes 40–100 hours for most business owners. At even $50/hour of your time, that is $1,900–$5,000 of opportunity cost.' },

      { type: 'h2', text: 'What makes a website cost more in Australia?' },
      { type: 'ul', items: [
        '<strong>Number of pages and features</strong> — more pages means more design and development time.',
        '<strong>Custom design vs template</strong> — a fully custom design costs more but looks unique.',
        '<strong>E-commerce complexity</strong> — variants, subscriptions and custom checkout flows add time.',
        '<strong>Integrations</strong> — CRM, booking systems, APIs, payment gateways beyond Stripe.',
        '<strong>Who you hire</strong> — a large Sydney agency charges 3–5x more than an independent developer for the same quality work.',
        '<strong>Ongoing maintenance</strong> — some providers bundle monthly retainers; Build First Site includes 30 days free and then offers an optional Care + SEO retainer from $250/month.',
      ]},

      { type: 'h2', text: 'Website hosting costs in Australia: $0 – $100/month' },
      { type: 'p', html: 'Hosting is the ongoing cost to keep your website live on the internet. The good news: for most small business websites, hosting can be completely free.' },
      { type: 'table', headers: ['Hosting option', 'Monthly cost (AUD)', 'Best for'], rows: [
        ['Vercel (free tier)', '$0', 'Custom-built sites (Next.js, React)'],
        ['Cloudflare Pages', '$0', 'Static sites, fast global CDN'],
        ['Siteground (WordPress)', '$8 – $25', 'WordPress small business sites'],
        ['Wix / Squarespace', '$20 – $50', 'DIY builder (hosting included)'],
        ['Shopify', '$39 – $399', 'E-commerce (hosting + platform)'],
        ['AWS / managed VPS', '$50 – $200+', 'High-traffic or complex apps'],
      ]},
      { type: 'p', html: 'All sites built by Build First Site are deployed on Vercel\'s free tier by default — $0/month in hosting for most small business sites. You can always migrate to a paid plan or different host later; you own the code.' },

      { type: 'h2', text: 'Common questions' },
      { type: 'faq', q: 'How much does a website cost in Australia in 2026?',
        a: 'A basic landing page costs $800–$1,500 AUD. A business website (3–7 pages) costs $1,900–$5,000 AUD. A custom e-commerce store costs $4,500–$10,000 AUD. DIY builders like Wix cost $20–$50/month but have limitations. Prices vary based on design complexity, number of pages, and custom features needed.' },
      { type: 'faq', q: 'How much does a small business website cost in Australia?',
        a: 'A professional small business website in Australia typically costs between $1,900 and $5,000 AUD for a custom-built solution. This includes design, development, mobile responsiveness, basic SEO, and 30 days of post-launch support.' },
      { type: 'faq', q: 'How much does an e-commerce website cost in Australia?',
        a: 'A custom e-commerce website in Australia costs $4,500–$10,000 AUD depending on the number of products, payment integrations, and custom features. Shopify plans cost $39–$399/month with additional transaction fees. A custom-built e-commerce store has no monthly platform fees beyond hosting.' },
      { type: 'faq', q: 'Is it cheaper to use Wix or hire a web developer in Australia?',
        a: 'Wix costs $20–50/month ($240–$800/year) with template limitations and no code ownership. A professional web developer costs $1,900+ upfront but you own the site forever with no monthly fees. Over 3 years, the total cost is often comparable — but the custom site performs significantly better in SEO and conversions.' },
    ],
  },
  {
    slug: 'wix-vs-custom-website',
    metaTitle: 'Wix vs Custom Website: 5-Year Cost Compared',
    metaDescription:
      'Wix vs custom website — an honest comparison covering cost over 5 years, SEO, speed and ownership. Real AUD numbers, no platform bias.',
    eyebrow: 'Guide · Australia · 2026',
    h1: 'Wix vs custom website: which is actually better?',
    lead:
      'The honest answer? It depends on your business — but not in the way most web designers will tell you. This guide breaks down the real cost, SEO performance, and long-term trade-offs of Wix (and Squarespace) vs a custom-built website.',
    priceTiers: [],
    schemaType: 'Article',
    breadcrumb: 'Wix vs Custom Website',
    related: [
      { href: '/how-much-does-a-website-cost-australia/', label: 'Website cost guide' },
      { href: '/how-long-does-it-take-to-build-a-website/', label: 'How long a website takes' },
      { href: '/hire-website-builder/', label: 'Hire a website builder' },
    ],
    body: [
      { type: 'h2', text: 'The short answer' },
      { type: 'p', html: '<strong>Use Wix if:</strong> you are testing an idea with no confirmed customers yet, your site is purely informational with no SEO goals, you genuinely enjoy building and maintaining it yourself, or you have under $800 to spend on anything digital right now.' },
      { type: 'p', html: '<strong>Use a custom website if:</strong> you want to rank on Google and get organic traffic, you are running a business that depends on your website, you want to own your code rather than rent a platform, or you have been on Wix for 6+ months and it has not grown.' },

      { type: 'h2', text: 'The real cost over 5 years' },
      { type: 'p', html: 'Wix looks cheap until you do the maths. Here is a straight comparison.' },
      { type: 'table', headers: ['', 'Wix Business Plan', 'Squarespace Business', 'Custom (Build First Site)'], rows: [
        ['Upfront cost', '$0', '$0', '$1,900 AUD'],
        ['Monthly fee', '~$28 AUD/mo', '~$35 AUD/mo', '$0/mo (Vercel free)'],
        ['Cost at 1 year', '$336', '$420', '$1,900'],
        ['Cost at 3 years', '$1,008', '$1,260', '$1,900'],
        ['Cost at 5 years', '$1,680', '$2,100', '$1,900 ← cheaper than Squarespace'],
        ['E-commerce transaction fee', 'Up to 2.9% + $0.30', 'Up to 3% platform fee', 'Stripe only: ~1.7% + $0.30'],
        ['Code ownership', 'None — Wix owns it', 'None — Squarespace owns it', 'Full GitHub repo'],
      ]},
      { type: 'p', html: '<strong>The bottom line:</strong> a custom website from $1,900 AUD breaks even with Squarespace by year 5. But a landing page from $800 AUD is cheaper than Wix within 2 years — and you own the code. If you are on Wix right now and you have been paying for 18+ months, you have probably already spent enough to have a better custom site.' },

      { type: 'h2', text: 'SEO: where Wix really falls behind' },
      { type: 'p', html: 'Page speed is a confirmed Google ranking factor. Here is how the platforms compare on real speed tests.' },
      { type: 'table', headers: ['', 'Wix', 'Squarespace', 'Custom (Next.js)'], rows: [
        ['Mobile speed score', '40–65', '55–70', '90–100'],
        ['JavaScript rendering', 'Client-side only — Google struggles', 'Mixed', 'Server-side rendered — Google indexes it directly'],
        ['Schema markup', 'Limited, no custom JSON-LD', 'Limited', 'Full custom schema — FAQPage, LocalBusiness, Article etc.'],
        ['Sitemap control', 'Auto-generated, limited control', 'Auto-generated', 'Full control'],
        ['URL structure', 'Often messy — hard to customise', 'Decent', 'Fully controlled'],
      ]},
      { type: 'p', html: 'Google confirmed in 2021 that page speed is a ranking factor (Core Web Vitals). A site scoring 40 on mobile is penalised in rankings compared to a site scoring 95. Wix has improved over the years, but it is still significantly behind well-built custom sites.' },

      { type: 'h2', text: 'When Wix actually makes sense' },
      { type: 'p', html: 'Wix is not always the wrong choice. Here is when it genuinely works.' },
      { type: 'ul', items: [
        '<strong>You are validating a business idea.</strong> If you have not confirmed anyone will pay you yet, spend $0 on Wix\'s free tier and test your idea. Don\'t invest in a custom site until you have customers. Once you do — upgrade.',
        '<strong>You need something live in 48 hours.</strong> Custom websites take 2–6 weeks. If you need something before an event or media appearance and you are comfortable maintaining it, Wix is fine short-term. Plan the migration to custom within 3–6 months.',
        '<strong>You are a hobbyist or personal project.</strong> For personal portfolios, hobby blogs, and non-commercial projects where SEO doesn\'t matter much, Wix or Squarespace are totally fine. Custom websites are built for businesses that depend on their site to get clients.',
      ]},

      { type: 'h2', text: 'Design, flexibility and features' },
      { type: 'table', headers: ['', 'Wix / Squarespace', 'Custom website'], rows: [
        ['Design', 'Template-based. You can modify within limits.', 'Fully custom — built for your brand, not a template'],
        ['Custom features', 'Limited to what the platform offers (or expensive apps)', 'Anything — AI features, custom databases, integrations'],
        ['Third-party integrations', 'App marketplace — but some cost extra monthly', 'Direct API integrations — Stripe, OpenAI, Zapier, CRMs'],
        ['Scalability', 'Hit the ceiling fast — you will outgrow it', 'Grows with your business — add features anytime'],
        ['If you leave the platform', 'Start over — no export, no code', 'Take your code anywhere — no rebuild needed'],
      ]},

      { type: 'h2', text: 'The real question to ask yourself' },
      { type: 'p', html: 'Not "Wix or custom?" — but this: <strong>what is my website supposed to do for my business?</strong>' },
      { type: 'p', html: 'If the answer is "rank on Google and get me customers" — a custom website will do this significantly better than Wix. If the answer is "I just need something so people can look me up" — Wix is fine.' },
      { type: 'p', html: 'Most businesses that have been on Wix for 12+ months have a website that ranks for nothing, converts few visitors, and costs them more per year than a Build First Site landing page. The honest move is to switch — and we can do it from $800 AUD fixed price.' },

      { type: 'h2', text: 'Common questions' },
      { type: 'faq', q: 'Is Wix good enough for a small business website?',
        a: 'For a new business testing an idea? Possibly. For an established business that wants Google traffic and customers from their website? No — Wix\'s slow speed and limited SEO control will hold you back. A custom website built with Next.js will outrank a Wix site on the same keywords almost every time.' },
      { type: 'faq', q: 'Is Wix cheaper than a custom website?',
        a: 'Short term, yes. Wix starts at around $20–30 AUD/month. But over 5 years, that is $1,200–$1,800 — plus the cost of any apps or upgrades. A custom website from Build First Site starts at $800 AUD (landing page) or $1,900 AUD (business site) with zero ongoing monthly fees. After 2–3 years, a custom site is typically cheaper.' },
      { type: 'faq', q: 'Does Wix rank on Google as well as a custom website?',
        a: 'No. Wix sites typically score 40–65 on Google\'s mobile speed test (PageSpeed Insights). A custom-built Next.js website typically scores 90–100. Page speed is a confirmed Google ranking factor. Wix has also historically had issues with JavaScript rendering that makes pages harder for Google to index fully.' },
      { type: 'faq', q: 'Is Squarespace better than Wix for SEO?',
        a: 'Squarespace has slightly better mobile speed scores than Wix, but both trail well-built custom websites significantly. Neither gives you full control over schema markup, URL structure, or server-side rendering — all of which matter for ranking.' },
      { type: 'faq', q: 'Can I switch from Wix to a custom website later?',
        a: 'Yes, but you can\'t export your Wix content easily — Wix locks your content to their platform. You\'ll need to rebuild the pages from scratch. The sooner you move, the less content there is to migrate. We help businesses migrate from Wix to custom websites regularly.' },
    ],
  },
  {
    slug: 'small-business-website-checklist',
    metaTitle: 'Small Business Website Checklist (Australia 2026)',
    metaDescription:
      'The complete small business website checklist for 2026 — 27 things every business site needs before launch, from domain to analytics.',
    eyebrow: 'Free Guide · Australia 2026',
    h1: 'Small business website checklist (27 things)',
    lead:
      'Everything your small business website needs before it goes live — from domain and hosting through to SEO, speed, legal pages, and analytics. Work through each section and you will have a site that actually works for your business.',
    priceTiers: [],
    schemaType: 'Article',
    breadcrumb: 'Small Business Website Checklist',
    related: [
      { href: '/how-much-does-a-website-cost-australia/', label: 'Website cost guide' },
      { href: '/hire-website-builder/', label: 'Hire a website builder' },
      { href: '/pricing/', label: 'All pricing' },
    ],
    body: [
      { type: 'h2', text: '1. Domain & hosting' },
      { type: 'p', html: 'Your foundation. Get these right before anything else.' },
      { type: 'h3', text: 'Custom domain name registered' },
      { type: 'p', html: 'Buy <code>.com.au</code> for Australian businesses (signals local trust to Google), plus the <code>.com</code> version. Costs $15–30/year from Namecheap, GoDaddy, or VentraIP. Avoid free subdomains like <code>yourbusiness.wixsite.com</code> — they look unprofessional and hurt SEO.' },
      { type: 'h3', text: 'Hosting chosen and configured' },
      { type: 'p', html: 'For custom-built sites: Vercel is free and fast (recommended). For WordPress: Siteground or Kinsta. For e-commerce: hosting is usually bundled in your build. See our <a href="/how-much-does-a-website-cost-australia/" class="color-green-900">hosting costs guide</a> for full pricing.' },
      { type: 'h3', text: 'SSL certificate active (HTTPS padlock)' },
      { type: 'p', html: 'Google marks HTTP sites as "Not Secure" and ranks them lower. Vercel, Netlify, and most modern hosts provide free SSL automatically. Check that your site loads without warnings.' },
      { type: 'h3', text: 'Professional email address set up' },
      { type: 'p', html: '<code>hello@yourbusiness.com.au</code> looks far more credible than <code>yourbusiness@gmail.com</code>. Google Workspace costs around $9/month. Zoho Mail is free for one domain.' },

      { type: 'h2', text: '2. Must-have pages' },
      { type: 'p', html: 'Every small business website needs these pages — missing any of them costs you leads.' },
      { type: 'h3', text: 'Homepage with a clear value proposition' },
      { type: 'p', html: 'Your homepage should answer three questions within 3 seconds: What do you do? Who is it for? How do they get started? If a visitor has to scroll to find out what your business does, you will lose them.' },
      { type: 'h3', text: 'About page (builds trust)' },
      { type: 'p', html: 'The About page is often the second most-visited page on small business sites. Include who you are, how long you have been in business, why clients choose you, and a photo. Faceless businesses convert poorly.' },
      { type: 'h3', text: 'Services or products page with pricing' },
      { type: 'p', html: 'List what you offer clearly. Even a "prices from $X" range helps — hiding prices makes visitors bounce to find a competitor who shows them. Each service should have its own section (or page) for SEO.' },
      { type: 'h3', text: 'Contact page with multiple contact methods' },
      { type: 'p', html: 'Phone, email, contact form, and address (even if service-area only). Include your operating hours. A Google Maps embed helps for local SEO. Make your Contact page easy to find — in the main nav and footer.' },
      { type: 'h3', text: 'Testimonials or case studies' },
      { type: 'p', html: 'Social proof is one of the highest-converting elements on any website. 3–5 genuine client quotes with names and business names outperform generic reviews.' },
      { type: 'h3', text: 'FAQ page' },
      { type: 'p', html: 'Answers common objections before the visitor has to ask. Also earns a "People Also Ask" rich result in Google when properly marked up with FAQPage schema — free real estate in search results.' },

      { type: 'h2', text: '3. Design & mobile' },
      { type: 'p', html: 'Over 60% of Australian small business web traffic is mobile. If your site breaks on a phone, you are losing more than half your visitors.' },
      { type: 'h3', text: 'Fully mobile-responsive design' },
      { type: 'p', html: 'Test on iPhone and Android. Buttons need to be at least 44px tall. Text must be readable without zooming. Navigation should collapse into a hamburger menu on small screens.' },
      { type: 'h3', text: 'Clear call-to-action on every page' },
      { type: 'p', html: 'Every page should tell visitors what to do next: "Book a Call", "Get a Quote", "Shop Now". One primary CTA per page. Don\'t make visitors guess what the next step is.' },
      { type: 'h3', text: 'Working contact form (and it sends emails)' },
      { type: 'p', html: 'Test your contact form from a different email address. Check that submissions arrive in your inbox and not spam. Many sites have broken forms and their owners have no idea.' },
      { type: 'h3', text: 'High-quality images (optimised for web)' },
      { type: 'p', html: 'Images over 500KB slow your site down. Use WebP format. Compress images with Squoosh or TinyPNG before uploading. Every image needs descriptive alt text for SEO and accessibility.' },

      { type: 'h2', text: '4. SEO basics' },
      { type: 'p', html: 'You don\'t need to be an SEO expert. These basics ensure Google can find and understand your site.' },
      { type: 'h3', text: 'Unique title tags on every page' },
      { type: 'p', html: 'Each page needs a unique title tag (50–60 characters) that includes your target keyword. Example: "Plumber in Parramatta | 24h Emergency Service | Sydney Pipes Co".' },
      { type: 'h3', text: 'Meta descriptions written for every page' },
      { type: 'p', html: '150–160 characters. Include the primary keyword and a clear reason to click. Google doesn\'t always use your meta description, but when it does, it\'s what drives CTR from search results.' },
      { type: 'h3', text: 'One H1 heading per page' },
      { type: 'p', html: 'Each page should have exactly one H1 — the main heading. It should include your primary keyword naturally. Use H2s for subheadings and H3s for sub-subheadings.' },
      { type: 'h3', text: 'XML sitemap submitted to Google Search Console' },
      { type: 'p', html: 'A sitemap tells Google every page on your site. Submit it in Google Search Console under Sitemaps. Without this, Google might take weeks to find new pages.' },
      { type: 'h3', text: 'Google Business Profile set up' },
      { type: 'p', html: 'Free from Google. Even service-area businesses (no shopfront) should have one. It\'s what makes you appear in Google Maps and the local 3-pack in search results. Get 5+ reviews and your visibility jumps significantly.' },
      { type: 'h3', text: 'robots.txt and canonical tags correct' },
      { type: 'p', html: 'Make sure robots.txt isn\'t accidentally blocking Google. Every page should have a self-referencing canonical tag to prevent duplicate content issues.' },

      { type: 'h2', text: '5. Speed & performance' },
      { type: 'p', html: 'Google uses page speed as a ranking signal. A 1-second delay in load time reduces conversions by around 7%.' },
      { type: 'h3', text: 'Google PageSpeed score above 80 on mobile' },
      { type: 'p', html: 'Test at pagespeed.web.dev. Mobile score matters more than desktop. The biggest wins: compress images, remove unused CSS/JS, enable text compression.' },
      { type: 'h3', text: 'Core Web Vitals passing (LCP, CLS, INP)' },
      { type: 'p', html: 'Google\'s official performance metrics. LCP (largest content loads fast), CLS (no layout shifts), INP (responsive to user input). Check in Google Search Console under Experience → Core Web Vitals.' },
      { type: 'h3', text: 'All images use a modern format (WebP) and have dimensions set' },
      { type: 'p', html: 'WebP images are 25–35% smaller than JPEGs at the same quality. Setting explicit width/height on images prevents layout shifts (improves CLS score).' },

      { type: 'h2', text: '6. Legal pages' },
      { type: 'p', html: 'Required under Australian law for any business collecting personal data (contact forms, email sign-ups, purchases).' },
      { type: 'h3', text: 'Privacy Policy page' },
      { type: 'p', html: 'Required under the Australian Privacy Act 1988 if you collect personal information (contact forms, emails, analytics). Link it in your footer.' },
      { type: 'h3', text: 'Terms & Conditions (if selling products or services)' },
      { type: 'p', html: 'Protects you legally. Outlines what you deliver, payment terms, refund policy, and limitations of liability. Use a lawyer or a reputable generator specific to Australian law.' },
      { type: 'h3', text: 'ABN displayed (for Australian businesses)' },
      { type: 'p', html: 'Displaying your ABN in your footer builds trust and is expected by Australian B2B clients. For e-commerce, it\'s often legally required on invoices and receipts.' },

      { type: 'h2', text: '7. Analytics & tracking' },
      { type: 'p', html: 'You can\'t improve what you don\'t measure. These take 30 minutes to set up and pay dividends forever.' },
      { type: 'h3', text: 'Google Analytics 4 installed' },
      { type: 'p', html: 'Free from Google. Shows you how many people visit, where they come from, what pages they view, and how long they stay. Set up key events: contact form submission, phone link click, calendar booking.' },
      { type: 'h3', text: 'Google Search Console verified' },
      { type: 'p', html: 'Free from Google. Shows you exactly which Google searches are bringing people to your site. Submit your sitemap here. Essential for monitoring indexing issues.' },
      { type: 'h3', text: 'Bing Webmaster Tools set up' },
      { type: 'p', html: 'Bing powers Microsoft Copilot and other AI web search. Import from Google Search Console in one click. Takes 5 minutes, gives you another traffic source.' },

      { type: 'h2', text: 'Don\'t want to do this yourself?' },
      { type: 'p', html: 'Build First Site builds small business websites with every item on this checklist handled — domain setup, SEO, speed optimisation, legal pages, Google Analytics, and Google Search Console. Fixed price, delivered in 2–3 weeks. <a href="/hire-website-builder/" class="color-green-900">See how we build websites →</a>' },

      { type: 'h2', text: 'Common questions' },
      { type: 'faq', q: 'What does a small business website need?',
        a: 'A small business website needs: a custom domain name, reliable hosting, a mobile-responsive design, a clear homepage with your value proposition, an About page, a Services or Products page, a Contact page, an SSL certificate (HTTPS), Google Analytics, Google Search Console, basic SEO (title tags, meta descriptions, sitemap), fast page load speed, and a privacy policy.' },
      { type: 'faq', q: 'How much does it cost to set up a small business website in Australia?',
        a: 'A professional custom-built small business website in Australia costs $1,900–$5,000 AUD. A DIY website using Wix or Squarespace costs $20–50/month. A domain name costs $15–30/year. Hosting on Vercel is free for most small business sites.' },
      { type: 'faq', q: 'What pages does a small business website need?',
        a: 'Every small business website should have at minimum: a Homepage, About page, Services/Products page, Contact page, and Privacy Policy. Most benefit from adding a FAQ page, Testimonials/Reviews section, and a Blog or Resources section for SEO.' },
    ],
  },
  {
    slug: 'hire-website-builder',
    metaTitle: 'Hire a Website Builder | Build First Site',
    metaDescription:
      'Need someone to build your website? Fixed-price, custom Next.js builds for Australian businesses. No templates, no monthly fees, full code ownership.',
    eyebrow: 'Australia · Professional Website Builder',
    h1: 'Need someone to build your website?',
    lead:
      'Build First Site is a two-person studio building websites for Australian businesses — no templates, no page builders, no monthly fees. Fixed price, fast delivery, full ownership of your code.',
    priceTiers: ['starter', 'business', 'ecommerce', 'custom-software'],
    schemaType: 'Service',
    breadcrumb: 'Hire a Website Builder',
    related: [
      { href: '/how-much-does-a-website-cost-australia/', label: 'Website cost guide' },
      { href: '/nextjs-development/', label: 'Next.js development' },
      { href: '/ecommerce-development/', label: 'E-commerce development' },
    ],
    body: [
      { type: 'h2', text: 'Why hire a website builder instead of doing it yourself?' },
      { type: 'p', html: 'Wix and Squarespace look easy — until you need something they can\'t do. Here is what you actually get when you hire a professional website builder instead.' },
      { type: 'table', headers: ['', 'Hire Build First Site', 'DIY (Wix / Squarespace)'], rows: [
        ['Design', '✓ Custom-built for your brand', 'Template — looks like thousands of other sites'],
        ['Page speed', '✓ 90–100 Lighthouse score', 'Often 40–60 on mobile'],
        ['SEO', '✓ Schema, sitemap, semantic HTML included', 'Basic — limited structured data'],
        ['Monthly cost', '✓ $0/mo — host on Vercel free tier', '$20–50/mo forever'],
        ['Code ownership', '✓ Full GitHub repo on launch day', 'Platform owns everything'],
        ['E-commerce fees', '✓ Only Stripe\'s processing fee — nothing to us', 'Up to 3% platform fee + monthly plan'],
        ['Custom features', '✓ Anything is possible', 'Limited to what the platform offers'],
        ['Time you spend', '✓ A brief and a couple of review sessions', '40–100 hours learning and building'],
      ]},

      { type: 'h2', text: 'Every type of website, built right' },
      { type: 'ul', items: [
        '<strong>Landing pages</strong> — from $800 AUD, ~2 weeks. Single-page sites for product launches, Google Ads campaigns, or service promos. Conversion-focused, fast, mobile-first.',
        '<strong>Business websites</strong> — from $1,900 AUD, 2–3 weeks. Multi-page websites for services, professional firms, trades, hospitality, and local businesses. SEO-optimised from day one.',
        '<strong>E-commerce stores</strong> — from $4,500 AUD, 4–6 weeks. Custom online stores with Stripe checkout, product management, and admin dashboard. No Shopify monthly fees.',
        '<strong>AI web applications</strong> — from $5,000 AUD, scoped per project. SaaS products, AI chatbots, automation tools. Integrated with OpenAI, Claude and Gemini — production-ready, not demos.',
      ]},

      { type: 'h2', text: 'Getting your website built — five steps' },
      { type: 'ol', items: [
        '<strong>Tell us about your project.</strong> Fill in the contact form or book a free 30-minute call. Tell us what you need, your timeline, and your budget.',
        '<strong>Receive a fixed-price proposal.</strong> You get a detailed proposal with scope, price, and timeline within 24 hours. No hourly rates, no scope creep.',
        '<strong>50% deposit to start.</strong> Once you approve, pay 50% upfront. Work begins immediately.',
        '<strong>Review your site on a live staging link.</strong> You watch your site take shape in real time, with revisions included and feedback handled directly.',
        '<strong>Launch and full code handover.</strong> Pay the final 50%, your site goes live, and you receive the full GitHub repo. It is yours — forever.',
      ]},

      { type: 'h2', text: 'Common questions' },
      { type: 'faq', q: 'How much does it cost to hire a website builder in Australia?',
        a: 'At Build First Site, a landing page starts from $800 AUD, a full business website from $1,900 AUD, and a custom e-commerce store from $4,500 AUD. All prices are fixed upfront — no hourly billing, no hidden extras.' },
      { type: 'faq', q: 'How long does it take to get a website built?',
        a: 'Landing pages: around 2 weeks. Business websites: 2–3 weeks. E-commerce stores: 4–6 weeks. Custom applications: scoped per project. Timelines are locked in your proposal before work starts.' },
      { type: 'faq', q: 'Will I own the website after it is built?',
        a: 'Yes, completely. You receive the full GitHub repository on your launch day. Host it on Vercel (free tier covers most business sites), AWS, or your own server. No ongoing fees to us.' },
      { type: 'faq', q: 'Do I need to know anything about websites?',
        a: 'Not at all. You bring your business — we handle everything else. Design, development, domain setup, hosting, SEO basics, and a support window after launch.' },
      { type: 'faq', q: 'Why hire a professional website builder instead of using Wix or Squarespace?',
        a: 'DIY builders like Wix and Squarespace give you a template. A professional website builder gives you a custom, fast-loading site built specifically for your business — with better SEO, better performance, and no monthly platform fees eating into your revenue.' },
    ],
  },
  {
    slug: 'how-long-does-it-take-to-build-a-website',
    metaTitle: 'How Long Does It Take to Build a Website? (2026)',
    metaDescription:
      'Real website build timelines for 2026 — landing pages, business sites, e-commerce stores, and web apps. What actually delays a project, and how to avoid it.',
    eyebrow: 'Guide · 2026',
    h1: 'How long does it take to build a website?',
    lead:
      'The honest answer: 2–3 weeks for most business websites, 4–6 weeks for e-commerce, and longer for complex web apps. Here is what those timelines actually look like — and what makes projects run long.',
    priceTiers: [],
    schemaType: 'Article',
    breadcrumb: 'How Long Does It Take to Build a Website?',
    related: [
      { href: '/how-much-does-a-website-cost-australia/', label: 'Website cost guide' },
      { href: '/wix-vs-custom-website/', label: 'Wix vs custom website' },
      { href: '/hire-website-builder/', label: 'Hire a website builder' },
    ],
    body: [
      { type: 'h2', text: 'At a glance' },
      { type: 'table', headers: ['Website type', 'Build time', 'Starting price (AUD)'], rows: [
        ['Landing page', '1–2 weeks', 'From $800'],
        ['Business website (multi-page)', '2–3 weeks', 'From $1,900'],
        ['E-commerce store', '4–6 weeks', 'From $4,500'],
        ['AI / SaaS web application', '6–12 weeks', 'From $5,000'],
      ]},

      { type: 'h2', text: 'Timeline by website type' },
      { type: 'h3', text: 'Landing page — 1–2 weeks' },
      { type: 'p', html: 'A landing page is a single-page website. It covers one topic — a service, a product, a promotion — and drives visitors to one action (call, book, buy). It is the fastest type of professional website to build.' },
      { type: 'p', html: '<strong>Typical 2-week timeline:</strong> Days 1–2 — brief, scope and design direction agreed. Days 3–7 — design and build in Next.js and Tailwind. Days 8–10 — client review on a staging link, revisions. Days 11–14 — final checks, domain setup, launch.' },
      { type: 'p', html: 'Best for: tradies, service businesses, Google Ads campaigns, product launches, event pages. <a href="/tradie-website-design/" class="color-green-900">Tradie landing pages from $800 AUD →</a>' },

      { type: 'h3', text: 'Business website (multi-page) — 2–3 weeks' },
      { type: 'p', html: 'The most common type of website for established businesses. Usually 5–10 pages: Home, About, Services (sometimes one page per service), Portfolio/Gallery, and Contact. Built for SEO and long-term growth.' },
      { type: 'p', html: '<strong>Typical 3-week timeline:</strong> Week 1 — discovery, sitemap agreed, content collected from client, design started. Week 2 — full build in Next.js, all pages coded, mobile-tested, SEO setup. Week 3 — client reviews staging site, revisions, domain connected, launch.' },
      { type: 'p', html: 'Best for: restaurants, real estate agents, tradies with multiple services, professional firms, small agencies. <a href="/hire-website-builder/" class="color-green-900">Business websites from $1,900 AUD →</a>' },

      { type: 'h3', text: 'E-commerce store — 4–6 weeks' },
      { type: 'p', html: 'An online store has many moving parts: product catalogue, cart, checkout, payment processing, order confirmation emails, inventory tracking, and usually an admin dashboard. 4–6 weeks is realistic for a clean, functional e-commerce build.' },
      { type: 'p', html: '<strong>What adds time in e-commerce:</strong> number of products (10 vs 500 is a big difference), variants (sizes, colours, custom options), shipping rules (flat rate vs weight-based vs location-based), product photos (must be provided before the build can finish), and third-party integrations (accounting software, shipping labels, review apps).' },
      { type: 'p', html: 'Best for: retail brands, fashion, motorsport, specialty goods, anything you sell online. <a href="/ecommerce-development/" class="color-green-900">E-commerce from $4,500 AUD →</a>' },

      { type: 'h3', text: 'Web application / SaaS — 6–12 weeks' },
      { type: 'p', html: 'Web apps — SaaS products, AI tools, booking systems, dashboards, member portals — are significantly more complex. They involve user authentication, databases, APIs, and custom logic. Six weeks is the minimum for a simple app; complex products can take longer.' },
      { type: 'p', html: '<strong>Rough app timeline:</strong> Weeks 1–2 — product scoping, database design, architecture decisions. Weeks 3–5 — core feature build (auth, data model, main workflows). Weeks 6–8 — front-end polish, mobile, edge case handling. Weeks 9–12 — testing, billing setup, deployment, soft launch.' },
      { type: 'p', html: 'Best for: SaaS products, AI-powered tools, booking platforms, internal tools, marketplaces. <a href="/ai-web-development/" class="color-green-900">AI web apps from $5,000 AUD →</a>' },

      { type: 'h2', text: 'What actually delays a website build' },
      { type: 'p', html: 'In our experience, the website build itself rarely causes delays. Almost every overrun comes from one of these five things.' },
      { type: 'ul', items: [
        '<strong>Waiting for content.</strong> The #1 cause of delays. A website can\'t launch without text, photos, and a logo. The client provides these, not the developer. If you haven\'t written your "About" page or taken photos of your work, the build stalls. Gather all your content before you sign a proposal.',
        '<strong>Scope changes mid-build.</strong> "Can we also add a booking system?" mid-build adds weeks. This is why scope is locked in a written proposal before starting. Changes after sign-off are quoted separately and extend the timeline.',
        '<strong>Slow client feedback.</strong> We send a staging link. If it takes two weeks to review, the project is two weeks longer. We ask clients to give feedback within a few business days, and build that expectation into the proposal timeline.',
        '<strong>Third-party integrations.</strong> Connecting to your CRM, booking system, or inventory software adds time. Sometimes the third-party API is slow to approve, or their documentation is unclear. We flag all integrations upfront and add buffer time to account for this.',
        '<strong>Domain and DNS access.</strong> Connecting your domain is the final step — but if you\'ve forgotten your registrar login or your domain is still with an old web developer, this can delay launch by days. Locate your domain access early.',
      ]},

      { type: 'h2', text: 'How to get your website built faster' },
      { type: 'p', html: 'Three things you can do before signing a proposal that will cut your build time by one to two weeks.' },
      { type: 'ol', items: [
        '<strong>Write your content first.</strong> Services, about, contact details, any testimonials you have. It doesn\'t have to be perfect — we refine it. But having a first draft means we can start building immediately after sign-off.',
        '<strong>Get your photos ready.</strong> For a tradie: photos of your work. For a restaurant: food photos. For a service business: a headshot and any relevant visuals. Good phone photos are fine. This alone removes the #1 source of delays.',
        '<strong>Know your domain login.</strong> Log into your domain registrar (GoDaddy, Cloudflare, Namecheap, etc.) before we start. If you\'ve lost access, get it back now — not the day before launch.',
      ]},

      { type: 'h2', text: 'Common questions' },
      { type: 'faq', q: 'How long does it take to build a website?',
        a: 'It depends on the type of site. A landing page takes 1–2 weeks. A business website (multi-page) takes 2–3 weeks. An e-commerce store takes 4–6 weeks. A custom web application takes 6–12 weeks or more. These are realistic timelines for a professional website builder — DIY tools like Wix can be faster but produce a very different result.' },
      { type: 'faq', q: 'What causes a website to take longer to build?',
        a: 'The biggest delays are: waiting for content from the client (text, photos, logos), unclear scope or changing requirements, slow feedback on designs, and complex custom features like booking systems or CRM integrations. Providing all your content upfront is the single biggest thing a client can do to speed up their website build.' },
      { type: 'faq', q: 'How long does it take to build an e-commerce website?',
        a: 'A custom e-commerce website typically takes 4–6 weeks. This includes product catalogue setup, Stripe payment integration, cart and checkout, mobile-optimised design, and an admin dashboard. Shopify stores can be set up in days, but come with ongoing monthly fees and platform limitations.' },
      { type: 'faq', q: 'How quickly can I get a website built?',
        a: 'The fastest we can deliver is around 1 week for a simple landing page, assuming you provide all content upfront (text, logo, photos). For business websites, the minimum realistic timeline is 2 weeks. Rush delivery is possible with a surcharge for projects with a firm deadline.' },
    ],
  },,
  {
    "slug": "squarespace-vs-custom-website",
    "metaTitle": "Squarespace vs Custom Website: 5-Year Cost",
    "metaDescription": "Squarespace or a custom-built website? Real AUD costs over five years, where Squarespace genuinely wins, and the ownership question that decides it.",
    "eyebrow": "Comparison",
    "h1": "Squarespace vs a custom website",
    "lead": "Squarespace is a genuinely good product, and for some businesses it is the right answer. This page is about working out whether yours is one of them — with real five-year AUD numbers rather than a sales pitch either way.",
    "priceTiers": [
      "starter",
      "business",
      "unlimited"
    ],
    "schemaType": "Service",
    "breadcrumb": "Squarespace vs Custom",
    "related": [
      {
        "href": "/wix-vs-custom-website/",
        "label": "Wix vs custom"
      },
      {
        "href": "/how-much-does-a-website-cost-australia/",
        "label": "What a website costs"
      },
      {
        "href": "/pricing/",
        "label": "All pricing"
      }
    ],
    "body": [
      {
        "type": "h2",
        "text": "The five-year cost, in real numbers"
      },
      {
        "type": "p",
        "html": "Website comparisons usually stop at the sticker price. That is the least useful number, because one option is a subscription and the other is a one-off. Here is the same decision over five years."
      },
      {
        "type": "table",
        "headers": [
          "",
          "Squarespace Business",
          "Custom (Build First Site)"
        ],
        "rows": [
          [
            "Upfront",
            "$0",
            "$1,900"
          ],
          [
            "Monthly",
            "~$49 AUD",
            "$0, or $250 with Care + SEO"
          ],
          [
            "Year 1",
            "~$588",
            "$1,900"
          ],
          [
            "Year 3",
            "~$1,764",
            "$1,900"
          ],
          [
            "Year 5",
            "~$2,940",
            "$1,900"
          ],
          [
            "Transaction fee (commerce)",
            "Up to 3% on lower plans",
            "$0 beyond Stripe's own rate"
          ],
          [
            "If you stop paying",
            "Site goes offline",
            "Site stays online"
          ]
        ]
      },
      {
        "type": "p",
        "html": "The crossover lands somewhere around year three. Before that Squarespace is cheaper. After that it is not, and the gap keeps widening because a subscription never stops."
      },
      {
        "type": "p",
        "html": "Squarespace pricing changes and varies by plan and billing cycle — check their current AUD pricing rather than taking these figures as fixed. The shape of the curve is the point, not the exact cent."
      },
      {
        "type": "h2",
        "text": "Where Squarespace genuinely wins"
      },
      {
        "type": "p",
        "html": "We build custom websites, so treat this section as the one where we argue against ourselves. Squarespace is the better choice when:"
      },
      {
        "type": "ul",
        "items": [
          "<strong>You need it live this week and the budget is near zero.</strong> A weekend of your own time and $49 a month beats waiting for anyone.",
          "<strong>It is a portfolio, a personal brand, or a simple brochure site</strong> that will not grow much. Squarespace's templates are genuinely well designed and you will get a better-looking result than a cheap custom job.",
          "<strong>You want to change things yourself, constantly, with no developer involved.</strong> Their editor is the best in the category. Nothing we build makes design changes as easy as dragging a block.",
          "<strong>You are testing an idea.</strong> Do not spend $1,900 validating whether a business works. Spend $49 a month, find out, then build properly."
        ]
      },
      {
        "type": "p",
        "html": "If two or more of those describe you, use Squarespace. We would rather tell you that than take a project you will regret."
      },
      {
        "type": "h2",
        "text": "Where it starts to hurt"
      },
      {
        "type": "p",
        "html": "The problems show up later, which is why people rarely see them coming."
      },
      {
        "type": "ul",
        "items": [
          "<strong>Speed.</strong> Squarespace sites carry a lot of JavaScript you did not ask for. On a mid-range Android over 4G, that is the difference between a page appearing in two seconds and five. Core Web Vitals is a ranking factor and about two thirds of Australian traffic is mobile.",
          "<strong>SEO ceiling.</strong> The basics are fine — titles, descriptions, sitemaps. What you cannot do is control page structure, add arbitrary schema, or fix a Core Web Vitals problem that originates in their platform code.",
          "<strong>You cannot leave with the site.</strong> This is the big one. Your content is exportable in a limited way. The design, the layout and the functionality are not. Moving means rebuilding.",
          "<strong>Custom functionality hits a wall.</strong> A booking flow that talks to your CRM, a quoting calculator, an inventory sync — these are either impossible or bolted on through a third-party embed that slows the site further.",
          "<strong>The subscription never ends.</strong> Stop paying and the site disappears. You are renting your business's front door."
        ]
      },
      {
        "type": "h2",
        "text": "What a custom build actually gets you"
      },
      {
        "type": "p",
        "html": "Business outcomes first. The technology is only interesting because of what it produces."
      },
      {
        "type": "ul",
        "items": [
          "<strong>A faster site,</strong> which ranks better and converts better. Built on Next.js and served from an edge network rather than a shared platform.",
          "<strong>No ceiling on SEO.</strong> Page structure, schema, internal linking and performance are all ours to control, so the platform is never the reason you cannot rank.",
          "<strong>You own it.</strong> Source code, repository and hosting account in your name. Move to any developer at any time and nothing breaks.",
          "<strong>Functionality without limits.</strong> If it can be built, it can be built into your site rather than embedded from someone else's.",
          "<strong>No per-sale commission.</strong> On ecommerce you pay Stripe's processing rate and nothing else."
        ]
      },
      {
        "type": "h2",
        "text": "How to actually decide"
      },
      {
        "type": "p",
        "html": "Two questions settle it for most people."
      },
      {
        "type": "p",
        "html": "<strong>Will this website still matter to your business in three years?</strong> If yes, the cost curve and the ownership question both favour building. If you are not sure, that is a legitimate reason to start on Squarespace and move later."
      },
      {
        "type": "p",
        "html": "<strong>Does the website need to do anything, or just say something?</strong> Saying something — who you are, what you do, how to reach you — is exactly what Squarespace is for. Doing something — booking, quoting, syncing, calculating — is where it runs out of room."
      },
      {
        "type": "h2",
        "text": "Common questions"
      },
      {
        "type": "faq",
        "q": "Is Squarespace cheaper than a custom website?",
        "a": "For roughly the first three years, yes. Squarespace Business is around AU$49 a month with no upfront cost, so year one is about $588 against $1,900 for a custom build. By year three the totals are close to level, and after that the custom site is cheaper because a subscription never stops. If the website matters to your business beyond three years, building is the cheaper option."
      },
      {
        "type": "faq",
        "q": "Can I move my Squarespace site to a custom website later?",
        "a": "You can move the content, but not the site. Squarespace lets you export pages and blog posts in a limited format. The design, layout and any functionality stay behind, so a move is effectively a rebuild. That is worth knowing before you invest years of content into it, not after."
      },
      {
        "type": "faq",
        "q": "Is Squarespace bad for SEO?",
        "a": "No, but it has a ceiling. The fundamentals are handled — titles, meta descriptions, sitemaps, clean URLs. What you cannot control is page structure, arbitrary schema markup, or performance problems originating in Squarespace's own code. For most small brochure sites that ceiling is high enough. For a business competing on organic search it becomes the limiting factor."
      },
      {
        "type": "faq",
        "q": "When should I choose Squarespace over a custom build?",
        "a": "Choose Squarespace if you need something live this week on a near-zero budget, if it is a portfolio or simple brochure site that will not grow much, if you want to make design changes yourself constantly without a developer, or if you are still testing whether the business idea works. Do not spend $1,900 validating an idea — spend $49 a month, find out, then build properly."
      }
    ]
  }
]

export function getLandingPage(slug) {
  return LANDING_PAGES.find((p) => p.slug === slug)
}
