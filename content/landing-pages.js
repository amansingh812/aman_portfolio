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
    image: '/assets/imgs/page/landing/ai-web-development.webp',
    imageAlt: 'AI chatbot connected to a website automating customer enquiries',
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
      { type: 'p', html: 'A focused AI feature added to an existing site — a trained chatbot, a single automation — starts at <strong>$900</strong> (<a href="/pricing/" class="color-green-900">all packages</a>). A full application with AI at its centre is <strong>$4,500</strong>. Custom platforms are scoped per project from <strong>$5,000</strong>.' },
      { type: 'p', html: 'Ongoing model costs are separate and belong to you: expect roughly $20 to $200 a month in API usage depending on volume. We set it up in your own account so you control the spend and can see exactly what it costs.' },

      { type: 'h2', text: 'How we build it' },
      { type: 'ul', items: [
        'Model choice driven by the task, not by fashion — often a smaller cheaper model beats the flagship for a narrow job',
        'Your data stays in your infrastructure where the use case allows',
        'Guardrails and fallbacks, so a failed AI call degrades to something sensible rather than breaking the page',
        'Usage logging from day one so you can see what it costs and what people actually ask',
        'Built on Next.js, deployed to Vercel — you own the code and the accounts',
      ]},

      { type: 'h2', text: 'Further reading' },
      { type: 'p', html: 'If you are still weighing up the build itself: <a href="/nextjs-development/" class="color-green-900">how we build</a>, <a href="/ecommerce-development/" class="color-green-900">ecommerce builds</a>, <a href="/pricing/" class="color-green-900">fixed prices</a>.' },

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
    image: '/assets/imgs/page/landing/ecommerce-development.webp',
    imageAlt: 'Online store product grid with cart and secure payment checkout',
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
      { type: 'p', html: 'Custom development earns its cost once you have real product volume, a workflow the templates cannot express (we compare the platforms in <a href="/wix-vs-custom-website/" class="color-green-900">Wix vs a custom website</a> and <a href="/squarespace-vs-custom-website/" class="color-green-900">Squarespace vs custom</a>), or the transaction fees are large enough that removing them pays for the build within a year or two. If you are not there yet, we will tell you honestly and point you at the cheaper option.' },

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

      { type: 'h2', text: 'Further reading' },
      { type: 'p', html: 'Related reading before you commit: <a href="/how-much-does-a-website-cost-australia/" class="color-green-900">what a website costs in Australia</a>, <a href="/pricing/" class="color-green-900">fixed prices</a>.' },

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
    image: '/assets/imgs/page/landing/nextjs-development.webp',
    imageAlt: 'Modular Next.js page architecture delivering fast load performance',
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
      { type: 'p', html: 'Worth saying plainly. If your team needs to edit content daily without touching code — a busy blog, a large content-marketing operation with multiple non-technical writers — a headless CMS on top of Next.js or, in some cases, a well-run <a href="/wordpress-vs-custom-website/" class="color-green-900">WordPress</a> install can be the more practical choice. We will tell you if that is a better fit before we quote a build.' },

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

      { type: 'h2', text: 'Further reading' },
      { type: 'p', html: 'Deciding between platforms: <a href="/wix-vs-custom-website/" class="color-green-900">Wix vs custom</a>, <a href="/squarespace-vs-custom-website/" class="color-green-900">Squarespace vs custom</a>, <a href="/how-much-does-a-website-cost-australia/" class="color-green-900">what a website costs</a>.' },

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
    image: '/assets/imgs/page/landing/tradie-website-design.webp',
    imageAlt: 'Mobile-first tradie website with click-to-call beside a suburb service map',
    metaTitle: 'Tradie Websites Australia 2026 | From $800',
    metaDescription:
      'Tradie websites Australia from $800. Tap-to-call, quote forms and suburb service pages for plumbers, electricians, builders. 2026 prices, you own the code.',
    eyebrow: 'Tradie',
    h1: 'Tradie Websites Australia — Built to Win You Jobs',
    lead:
      'Most tradie websites are built to look nice. Yours needs to turn someone standing in a flooded laundry into a phone call. This page explains what actually works — and what a tradie website costs in Australia in 2026.',
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
      { type: 'h2', text: 'Why tradie websites are different from regular business sites' },
      { type: 'p', html: 'Over 70% of tradie searches in Australia happen on mobile, and a lot of them happen mid-emergency — someone with a burst pipe, a power fault, or a leak they found at 7am. That visitor is not browsing. They are about to call the first number that appears and works. Your website has about three seconds and one clear button to make that happen.' },
      { type: 'p', html: 'That means a tradie website is not a brochure. It is a phone call trigger. Every design decision should be evaluated against one question: does this make someone more likely to call?' },

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

      { type: 'h2', text: 'Local SEO for tradies: suburb pages beat broad terms' },
      { type: 'p', html: 'Ranking for \"electrician Melbourne\" is nearly impossible for a small business — see <a href="/web-design-melbourne/" class="color-green-900">our Melbourne page</a> for that market. Ranking for \"electrician Preston\" or \"electrician Reservoir\" is very achievable — and those searches convert at a higher rate because the person typing them already knows where they want you to come from.' },
      { type: 'p', html: 'We build a service-area page for each suburb you actually cover — the full reasoning is in <a href="/blog/tradie-suburb-pages-seo/" class="color-green-900">why tradie websites need suburb pages</a>. Instead of one page fighting the biggest agencies for broad terms, you have ten pages ranking for specific suburbs with almost no competition. This is how small trades compete against franchise brands.' },
      { type: 'ul', items: [
        'One page per suburb you service — written specifically for that area',
        'Suburb name in the page title, H1 and URL',
        'Local landmarks and context so it reads as genuine, not templated',
        'Linked back to your main service page and Google Business Profile',
      ]},

      { type: 'h2', text: 'What types of tradies we build for' },
      { type: 'p', html: 'Plumbers, electricians, builders, plasterers, painters, tilers, carpenters, roofers, HVAC technicians, pest controllers, cleaners and landscapers. The website structure is similar across trades — the service-area pages, the emergency CTA, the licence display — but the content is written for your specific trade, not repurposed from a template.' },

      { type: 'h2', text: 'When you probably do not need us yet' },
      { type: 'p', html: 'If you have just started and have no Google Business Profile, set that up first. It is free, it puts you on Maps, and for a lot of trades it generates more calls in month one than a website will. We would rather tell you that than sell you something you do not need yet. Come back when you are competing for jobs people compare before calling.' },

      { type: 'h2', text: 'What it costs' },
      { type: 'p', html: 'A three to five page tradie site is <strong>$800</strong>, up to ten pages with service-area pages is <strong>$1,900</strong>, and unlimited pages is <strong>$3,500</strong>. A booking system adds from $700. Every quote is fixed in writing before work starts.' },

      { type: 'h2', text: 'Common questions' },
      { type: 'faq', q: 'How much does a tradie website cost?',
        a: 'A three to five page tradie site is $800, up to ten pages with service-area pages is $1,900, and unlimited pages is $3,500 (<a href="/pricing/" class="color-green-900">all packages</a>). Add a booking system from $700. Every quote is fixed in writing before work starts.' },
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
    image: '/assets/imgs/page/landing/restaurant-website-design.webp',
    imageAlt: 'Restaurant website showing a digital menu and table booking on mobile',
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

      { type: 'h2', text: 'Further reading' },
      { type: 'p', html: 'Related reading for hospitality operators: <a href="/how-much-does-a-website-cost-australia/" class="color-green-900">what a website costs in Australia</a>, <a href="/how-long-does-it-take-to-build-a-website/" class="color-green-900">how long a build takes</a>, <a href="/small-business-website-checklist/" class="color-green-900">small business website checklist</a>.' },

      { type: 'h2', text: 'Common questions' },
      { type: 'faq', q: 'How much does a restaurant website cost in Australia?',
        a: 'A three to five page café site is $800, and up to ten pages with a booking system is $1,900 (<a href="/pricing/" class="color-green-900">see all pricing</a>). Online ordering with payments is $4,500. Every quote is fixed in writing before work starts.' },
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
    image: '/assets/imgs/page/landing/real-estate-website-design.webp',
    imageAlt: 'Real estate website showing property listings and a location map',
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

      { type: 'h2', text: 'Further reading' },
      { type: 'p', html: 'Related reading for agents: <a href="/web-design-sydney/" class="color-green-900">web design Sydney</a>, <a href="/how-much-does-a-website-cost-australia/" class="color-green-900">what a website costs in Australia</a>, <a href="/small-business-website-checklist/" class="color-green-900">website checklist</a>.' },

      { type: 'h2', text: 'Common questions' },
      { type: 'faq', q: 'How much does a real estate website cost in Australia?',
        a: 'A three to five page agent site is $800, up to ten pages with suburb pages and appraisal forms is $1,900, and unlimited pages is $3,500 (<a href="/pricing/" class="color-green-900">all packages</a>). CRM integration for live listings is quoted as a custom build from $4,500.' },
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
    image: '/assets/imgs/page/landing/web-design-melbourne.webp',
    imageAlt: 'Melbourne skyline behind a local business website built for the local market',
    metaTitle: 'Web Design Melbourne 2026 | From $800',
    metaDescription:
      'Web design Melbourne from $800 AUD. Modern Next.js builds, local SEO included, code ownership, no lock-in. Fixed price — quote in one business day.',
    eyebrow: 'MELBOURNE, VICTORIA',
    h1: 'Web Design Melbourne — Modern Websites From $800',
    lead:
      'Most Melbourne web design agencies gate their pricing behind a discovery call. Ours starts at $800 and is published right here. Modern Next.js builds, local SEO included, and the source code is yours on launch day — no retainer, no lock-in.',
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
      { type: 'p', html: 'Ask five Melbourne agencies for a five-page business website and you will get quotes between $2,000 and $20,000 (<a href="/how-much-does-a-website-cost-australia/" class="color-green-900">why the range is that wide</a>) for work that is functionally identical. The spread is not about quality. It is about overheads — a Collins Street office, an account manager, a sales team and a project coordinator all sit inside that number before a single line of code is written.' },
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

      { type: 'h2', text: 'Further reading' },
      { type: 'p', html: 'Also useful if you are comparing options: <a href="/pricing/" class="color-green-900">our fixed prices</a>, <a href="/tradie-website-design/" class="color-green-900">tradie websites</a>, <a href="/wordpress-vs-custom-website/" class="color-green-900">WordPress vs custom</a>.' },

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
    image: '/assets/imgs/page/landing/web-design-sydney.webp',
    imageAlt: 'Sydney skyline behind a local business website built for the Sydney market',
    metaTitle: 'Web Design Sydney 2026 | From $800',
    metaDescription:
      'Web design Sydney from $800 AUD. Modern Next.js builds, local SEO included, you own the code. No discovery call needed — fixed price, quote in one business day.',
    eyebrow: 'SYDNEY, NSW',
    h1: 'Web Design Sydney — Modern Websites From $800',
    lead:
      'Most Sydney web design agencies make you sit through a discovery call before revealing a price. Ours starts at $800, everything is published, and you receive a fixed written quote in one business day. Modern Next.js builds, SEO included, code is yours.',
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
      { type: 'p', html: 'That overhead buys you a meeting room. It does not make the website faster, rank better or convert more visitors — the <a href="/freelancer-vs-web-design-agency/" class="color-green-900">freelancer vs agency comparison</a> breaks down where the money actually goes. We work remotely from Melbourne, which is why our prices are published and start at $800.' },
      { type: 'p', html: 'Sydney is also the most crowded market for web designers in Australia, which is genuinely good news for you — you can compare our <a href="/pricing/" class="color-green-900">published prices</a> against any quote you receive: it means you can compare several published quotes before committing. Ask every one of them for a fixed price in writing, and ask whether you own the code.' },

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

      { type: 'h2', text: 'Further reading' },
      { type: 'p', html: 'Also useful if you are comparing options: <a href="/pricing/" class="color-green-900">our fixed prices</a>, <a href="/web-design-melbourne/" class="color-green-900">web design Melbourne</a>, <a href="/how-much-does-a-website-cost-australia/" class="color-green-900">what a website costs</a>.' },

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
    image: '/assets/imgs/page/landing/web-design-brisbane.webp',
    imageAlt: 'Brisbane skyline behind a local business website built for the Brisbane market',
    metaTitle: 'Web Design Brisbane 2026 | From $800',
    metaDescription:
      'Web design Brisbane from $800 AUD. Modern Next.js builds, local SEO included, you own the code. Fixed price, no discovery call — quote in one business day.',
    eyebrow: 'BRISBANE, QLD',
    h1: 'Web Design Brisbane — Fast, Modern Websites From $800',
    lead:
      'Most Brisbane web design agencies won\'t show a price until after a discovery call. Ours starts at $800 and everything is published upfront. Modern Next.js builds, local SEO included, and the source code is yours the day you launch.',
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
      { type: 'p', html: 'Brisbane agency pricing sits below <a href="/web-design-sydney/" class="color-green-900">Sydney</a> but above <a href="/web-design-adelaide/" class="color-green-900">Adelaide</a>, typically $4,000 to $10,000 for a business website. Ours is published and starts at $800 because we work remotely from Melbourne and there is no office overhead in the quote.' },

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

      { type: 'h2', text: 'Further reading' },
      { type: 'p', html: 'Also useful if you are comparing options: <a href="/pricing/" class="color-green-900">our fixed prices</a>, <a href="/tradie-website-design/" class="color-green-900">tradie websites</a>.' },

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
    image: '/assets/imgs/page/landing/web-design-perth.webp',
    imageAlt: 'Perth skyline behind a local business website built for the Perth market',
    metaTitle: 'Web Design Perth WA 2026 | From $800',
    metaDescription:
      'Web design Perth WA from $800 AUD. Next.js builds, local SEO included, you own the code. Fixed AUD price, no discovery call needed. Quote in one business day.',
    eyebrow: 'PERTH, WA',
    h1: 'Web Design Perth WA — Modern Websites From $800',
    lead:
      'Most Perth web design agencies make you wait through a discovery call before giving a price. Ours starts at $800 and everything is published. Modern Next.js builds, local SEO included, and the source code is yours on the day you launch.',
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
      { type: 'h2', text: 'What a website costs in Perth in 2026' },
      { type: 'p', html: 'Perth web design pricing is less competitive than the east coast because the market is smaller — with fewer studios bidding on each project, quotes are less disciplined. Local agency rates typically run $3,000 to $8,000 for a business website.' },
      { type: 'p', html: 'Our prices are published and fixed: <strong>$800</strong> for a three to five page site, <strong>$1,900</strong> for up to ten pages, <strong>$3,500</strong> for unlimited pages, and <strong>$4,500</strong> for e-commerce. Every quote is in writing before work starts.' },
      { type: 'p', html: 'Perth is also the most isolated capital city in the world, which has an SEO upside: less competition for local search terms. A well-built Perth website with proper local schema and suburb pages can rank significantly faster than the same site would in Sydney or Melbourne.' },

      { type: 'h2', text: 'Perth industries we build for' },
      { type: 'ul', items: [
        '<strong>Mining services and resources.</strong> Perth is the commercial hub of Australia\'s resources sector. Contractors, METS companies and professional services firms need websites that read as credible to procurement teams at major miners — not consumer-grade templates.',
        '<strong>Construction and trades.</strong> Perth trades compete across one of the most sprawling metro areas in the world. Service-area pages for Joondalup, Rockingham, Mandurah and Midland are not optional — they are how you appear in suburb-specific searches.',
        '<strong>FIFO and fly-in businesses.</strong> Suppliers and services catering to FIFO workers have a unique audience. We build sites that convert from mobile during roster changeovers.',
        '<strong>Hospitality and tourism.</strong> Fremantle, Northbridge and the Swan Valley visitor economy, booking direct without commission.',
        '<strong>Health and allied health.</strong> Perth\'s growing northern suburbs (Joondalup, Wanneroo, Alkimos) have significant demand for accessible, bookable clinic websites.',
      ]},

      { type: 'h2', text: 'Why Perth websites rank differently' },
      { type: 'p', html: 'The keyword \"web designers perth wa\" alone receives 5,000 searches per month — and competition is classified as Low by Google. Compare that to Sydney or Melbourne where competition is Medium to High for the equivalent term. This means a properly built Perth website with correct local SEO can reach page one faster and stay there with less effort than in the eastern capitals.' },
      { type: 'p', html: 'We include Google Business Profile setup and local schema markup in every Perth project — the same groundwork covered in our <a href="/small-business-website-checklist/" class="color-green-900">small business website checklist</a> — the two elements that have the largest impact on appearing in the Google Maps pack for WA searches.' },

      { type: 'h2', text: 'Perth suburbs and regions we work across' },
      { type: 'p', html: 'We work with businesses across <strong>Perth CBD, Fremantle, Joondalup, Subiaco, Cannington, Midland, Rockingham, Mandurah, Osborne Park, Cockburn, Wanneroo, Stirling, Armadale, Kalamunda and the Swan Valley</strong> and the wider Western Australia metro and regional area.' },
      { type: 'p', html: 'Remote delivery means your location within WA makes no difference to what we build or what we charge — <a href="/about/" class="color-green-900">who we are</a> is on the record, and you can <a href="/contact/" class="color-green-900">get a fixed quote</a> without a discovery call. We have worked with Perth-based businesses from Broome to Bunbury and everything in between.' },

      { type: 'h2', text: 'The timezone question' },
      { type: 'p', html: 'Perth runs two to three hours behind Melbourne depending on daylight saving. In practice: we are working while Perth is starting the day, so questions sent in the Perth morning are answered before your lunch. We schedule calls for the Perth morning specifically.' },

      { type: 'h2', text: 'Further reading' },
      { type: 'p', html: 'Also useful if you are comparing options: <a href="/pricing/" class="color-green-900">our fixed prices</a>, <a href="/web-design-adelaide/" class="color-green-900">web design Adelaide</a>, <a href="/tradie-website-design/" class="color-green-900">tradie websites</a>.' },

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
    image: '/assets/imgs/page/landing/web-design-adelaide.webp',
    imageAlt: 'Adelaide skyline behind a local business website built for the Adelaide market',
    metaTitle: 'Web Design Adelaide 2026 | From $800',
    metaDescription:
      'Web design Adelaide from $800 AUD. Next.js builds, local SEO included, you own the code. Trusted by Australian small businesses. Fixed quote in one day.',
    eyebrow: 'ADELAIDE, SA',
    h1: 'Web Design Adelaide — Fast, Modern Websites From $800',
    lead:
      'Most Adelaide web design agencies make you wait through a discovery call before revealing their price. Ours starts at $800 and everything is published upfront. Modern Next.js builds, local SEO included, and you own the source code outright.',
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
      { type: 'h2', text: 'What a website costs in Adelaide in 2026' },
      { type: 'p', html: 'Adelaide agency pricing typically runs $2,500 to $6,000 for a business website — below the eastern capitals, but still variable depending on what is actually inside the quote. The cheaper end is usually a template with your logo dropped in, hosting you do not control, and SEO sold separately as a monthly retainer.' },
      { type: 'p', html: 'Our prices are published and fixed: <strong>$800</strong> for a three to five page site, <strong>$1,900</strong> for up to ten pages, <strong>$3,500</strong> for unlimited pages, and <strong>$4,500</strong> for e-commerce. Every quote is in writing before work starts. No surprises at handover.' },
      { type: 'p', html: 'A cheap website that nobody finds is not cheap — it is a smaller amount of money that produces nothing. We set out the real numbers in <a href="/how-much-does-a-website-cost-australia/" class="color-green-900">what a website costs in Australia</a>. The measure is not what you spend, it is what you get back.' },

      { type: 'h2', text: 'Adelaide industries we build for' },
      { type: 'ul', items: [
        '<strong>Defence and AUKUS supply chain.</strong> Adelaide is home to the most significant defence shipbuilding program in Australian history. Suppliers and contractors need websites that read as professional to procurement teams, with credentials clearly visible.',
        '<strong>Health and allied health.</strong> Clinics, physiotherapy, psychology, dental and specialist practices needing accessible, bookable websites that comply with accessibility standards.',
        '<strong>Wine, food and agribusiness.</strong> Barossa Valley, McLaren Vale and Eden Valley producers selling cellar door, direct-to-consumer and export. Photography-forward builds with direct checkout.',
        '<strong>Trades and home services.</strong> Builders, plumbers, electricians and landscapers competing across the metro area from Salisbury to Marion to Glenelg.',
        '<strong>Professional services.</strong> Legal, accounting and consulting firms needing credibility with mid-market clients.',
      ]},

      { type: 'h2', text: 'Why Adelaide websites rank differently' },
      { type: 'p', html: 'Adelaide has less online competition than Sydney or Melbourne for most local search terms. Our <a href="/pricing/" class="color-green-900">published pricing</a> and <a href="/about/" class="color-green-900">how we work</a> are both stated plainly before you talk to anyone. A well-built site with proper local SEO — correct Google Business Profile, suburb-specific service pages, structured data — can rank on the first page within three to six months in most Adelaide business categories. The same effort in Sydney takes longer because you are competing against more established players.' },
      { type: 'p', html: 'The keyword \"web design adelaide\" alone receives 5,000 searches per month in Australia. With published prices and a transparent approach, we aim to be the result people click when they are ready to spend — not after a discovery call, not after a proposal that takes a week.' },

      { type: 'h2', text: 'Adelaide suburbs we work across' },
      { type: 'p', html: 'We work with businesses across <strong>Adelaide CBD, North Adelaide, Glenelg, Norwood, Prospect, Marion, Salisbury, Port Adelaide, Unley, Modbury, Mawson Lakes, Burnside, Tea Tree Gully, Morphett Vale and Mount Barker</strong> and the wider South Australia metro area. Remote delivery means your location within SA does not change what we can build or the price we charge.' },

      { type: 'h2', text: 'How we work with Adelaide businesses' },
      { type: 'p', html: 'We are based in Melbourne and work with Adelaide businesses remotely — we say that plainly rather than implying an Adelaide office. In practice it changes very little: you get a live staging link from the first week, calls whenever you want them, and the same fixed price a local studio would charge more for (without the overheads).' },
      { type: 'p', html: 'Every project starts with a written scope. You approve the price, we build, you review on a live staging environment, and we launch. Post-launch support is included for the period stated in your quote. If you want ongoing SEO and maintenance, our Care + SEO plan is $250/month with 30 days cancel anytime.' },

      { type: 'h2', text: 'Further reading' },
      { type: 'p', html: 'Also useful if you are comparing options: <a href="/pricing/" class="color-green-900">our fixed prices</a>, <a href="/web-design-perth/" class="color-green-900">web design Perth</a>, <a href="/small-business-website-checklist/" class="color-green-900">website checklist</a>.' },

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
    image: '/assets/imgs/page/landing/how-much-does-a-website-cost-australia.webp',
    imageAlt: 'Three Australian website pricing tiers compared side by side in AUD',
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
      { type: 'p', html: 'At Build First Site, small business websites start at $1,900 AUD and are delivered in 2–3 weeks. That includes schema markup, a sitemap, a fast <a href="/nextjs-development/" class="color-green-900">Next.js</a> build, and 30 days of free post-launch support.' },
      { type: 'p', html: 'Web agencies in Sydney and Melbourne typically charge $5,000–$15,000 for the same scope — the difference is overhead costs. As an independent studio, we pass that saving directly to you.' },

      { type: 'h2', text: 'E-commerce website cost in Australia: $4,500 – $10,000 AUD' },
      { type: 'p', html: 'A custom e-commerce build includes product listings, a cart, Stripe checkout, order management, and an admin dashboard for managing your inventory. It is built to your exact business logic — not a template.' },
      { type: 'p', html: 'Shopify starts at $39/month (~$470/year) and charges 0.5–2% transaction fees on top of Stripe\'s fees. On $200,000 annual revenue, that is $1,000–$4,500/year going to Shopify forever. A custom-built store has no platform fees beyond hosting.' },
      { type: 'p', html: 'Build First Site\'s e-commerce stores start at $4,500 AUD. They use Stripe for payments (around 1.75% in Australia, no additional platform fee), with full code ownership on delivery.' },

      { type: 'h2', text: 'DIY vs hiring a professional in Australia' },
      { type: 'p', html: '<a href="/wix-vs-custom-website/" class="color-green-900">Wix</a>, <a href="/squarespace-vs-custom-website/" class="color-green-900">Squarespace</a>, and <a href="/webflow-vs-custom-website/" class="color-green-900">Webflow</a> are great tools — but they are not free. Wix Business costs around $32/month ($384/year). Over 5 years that is $1,920 AUD in platform fees, and you never own the site.' },
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
    image: '/assets/imgs/page/landing/wix-vs-custom-website.webp',
    imageAlt: 'Wix locked template compared with an open custom website build',
    metaTitle: 'Wix vs Custom Website Australia | 5-Year Cost',
    metaDescription:
      'Wix vs custom website Australia 2026 — real AUD cost over 5 years, SEO comparison, speed, and code ownership. No platform bias, no upsell.',
    eyebrow: 'Guide · Australia · 2026',
    h1: 'Wix vs Custom Website Australia (2026) — The Honest Comparison',
    lead:
      'The honest answer is: it depends on your stage. This guide breaks down the real AUD cost over five years, SEO performance, and long-term trade-offs of Wix vs a custom-built website — so you can decide without a sales pitch.',
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
      { type: 'p', html: '<strong>The bottom line:</strong> a custom website from $1,900 AUD breaks even with <a href="/squarespace-vs-custom-website/" class="color-green-900">Squarespace</a> by year 5. But a landing page from $800 AUD is cheaper than Wix within 2 years — and you own the code. If you are on Wix right now and you have been paying for 18+ months, you have probably already spent enough to have a better custom site.' },

      { type: 'h2', text: 'SEO: where Wix really falls behind' },
      { type: 'p', html: 'Page speed is a confirmed Google ranking factor. Here is how the platforms compare on real speed tests.' },
      { type: 'table', headers: ['', 'Wix', 'Squarespace', 'Custom (Next.js)'], rows: [
        ['Mobile speed score', '40–65', '55–70', '90–100'],
        ['JavaScript rendering', 'Client-side only — Google struggles', 'Mixed', 'Server-side rendered — Google indexes it directly'],
        ['Schema markup', 'Limited, no custom JSON-LD', 'Limited', 'Full custom schema — FAQPage, LocalBusiness, Article etc.'],
        ['Sitemap control', 'Auto-generated, limited control', 'Auto-generated', 'Full control'],
        ['URL structure', 'Often messy — hard to customise', 'Decent', 'Fully controlled'],
      ]},
      { type: 'p', html: 'Google confirmed in 2021 that page speed is a ranking factor (<a href="/blog/wordpress-vs-nextjs-speed-australia/" class="color-green-900">Core Web Vitals</a>). A site scoring 40 on mobile is penalised in rankings compared to a site scoring 95. Wix has improved over the years, but it is still significantly behind well-built custom sites.' },

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

      { type: 'h2', text: 'Further reading' },
      { type: 'p', html: 'The other platform comparisons: <a href="/wordpress-vs-custom-website/" class="color-green-900">WordPress vs custom</a>, <a href="/webflow-vs-custom-website/" class="color-green-900">Webflow vs custom</a>.' },

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
    image: '/assets/imgs/page/landing/small-business-website-checklist.webp',
    imageAlt: 'Small business website checklist completed beside a launched website',
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
      { type: 'p', html: 'For custom-built sites: Vercel is free and fast (recommended). For <a href="/wordpress-vs-custom-website/" class="color-green-900">WordPress</a>: Siteground or Kinsta. For e-commerce: hosting is usually bundled in your build. See our <a href="/how-much-does-a-website-cost-australia/" class="color-green-900">hosting costs guide</a> for full pricing.' },
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
      { type: 'p', html: 'Google\'s official performance metrics. LCP (largest content loads fast), CLS (no layout shifts), INP (responsive to user input). Check in Google Search Console under Experience → <a href="/blog/wordpress-vs-nextjs-speed-australia/" class="color-green-900">Core Web Vitals</a>.' },
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
    image: '/assets/imgs/page/landing/hire-website-builder.webp',
    imageAlt: 'Working directly with a website builder reviewing a design together',
    metaTitle: 'Hire a Website Builder',
    metaDescription:
      'Need someone to build your website? Fixed-price, custom Next.js builds for Australian businesses. No templates, no monthly fees, full code ownership.',
    eyebrow: 'Australia · Professional Website Builder',
    h1: 'Need someone to build your website?',
    lead:
      'Build First Site builds websites for Australian businesses — no templates, no page builders, no monthly fees. Fixed price, fast delivery, full ownership of your code.',
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
      { type: 'p', html: '<a href="/wix-vs-custom-website/" class="color-green-900">Wix</a> and <a href="/squarespace-vs-custom-website/" class="color-green-900">Squarespace</a> look easy — until you need something they can\'t do. Here is what you actually get when you hire a professional website builder instead.' },
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

      { type: 'h2', text: 'Further reading' },
      { type: 'p', html: 'Before you hire anyone: <a href="/freelancer-vs-web-design-agency/" class="color-green-900">freelancer vs agency</a>, <a href="/how-much-does-a-website-cost-australia/" class="color-green-900">what a website costs</a>.' },

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
    image: '/assets/imgs/page/landing/how-long-does-it-take-to-build-a-website.webp',
    imageAlt: 'Website build timeline from initial brief through to launch',
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
      { type: 'p', html: '<strong>Typical 2-week timeline:</strong> Days 1–2 — brief, scope and design direction agreed. Days 3–7 — design and build in <a href="/nextjs-development/" class="color-green-900">Next.js</a> and Tailwind. Days 8–10 — client review on a staging link, revisions. Days 11–14 — final checks, domain setup, launch.' },
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
  },
  {
    "slug": "squarespace-vs-custom-website",
    "image": "/assets/imgs/page/landing/squarespace-vs-custom-website.webp",
    "imageAlt": "Squarespace fixed template compared with a flexible custom build",
    "metaTitle": "Squarespace vs Custom Website Australia (2026)",
    "metaDescription": "Squarespace or a custom-built website? Real AUD costs over five years, where Squarespace genuinely wins, and the ownership question that decides it.",
    "eyebrow": "Comparison",
    "h1": "Squarespace vs a Custom Website in Australia (2026)",
    "lead": "Squarespace looks cheap until you do the five-year maths. For some Australian businesses it genuinely is the right call. This page works out whether yours is one of them — with real AUD numbers, a plain feature comparison, and no sales pitch in either direction.",
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
        "html": "The crossover lands somewhere around year three — the same pattern holds in <a href=\"/wix-vs-custom-website/\" class=\"color-green-900\">Wix vs custom</a> and <a href=\"/webflow-vs-custom-website/\" class=\"color-green-900\">Webflow vs custom</a>. Before that Squarespace is cheaper. After that it is not, and the gap keeps widening because a subscription never stops."
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
        "html": "Business outcomes first. The technology is only interesting because of what it produces — more detail on the stack is on our <a href=\"/nextjs-development/\" class=\"color-green-900\">Next.js development page</a>."
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
        "text": "At a glance: Squarespace vs custom, compared"
      },
      {
        "type": "table",
        "headers": ["Feature", "Squarespace", "Custom (Build First Site)"],
        "rows": [
          ["Setup time", "Days (DIY)", "5–14 business days"],
          ["Upfront cost (AUD)", "$0", "From $800"],
          ["Ongoing cost (AUD)", "~$49/month forever", "$0, or $250/mo with Care + SEO"],
          ["5-year total (AUD)", "~$2,940+", "From $800 (one-off)"],
          ["SEO control", "Good basics only", "Full — schema, CWV, structure"],
          ["Speed (Core Web Vitals)", "Platform-limited", "Green on every build"],
          ["Customisation", "Template ceiling", "No ceiling"],
          ["You own the site", "No — platform owns it", "Yes — source code is yours"],
          ["Can take it elsewhere", "No — must rebuild", "Yes — any developer"],
          ["eCommerce transaction fee", "Up to 3%", "$0 (Stripe rate only)"],
          ["Works without internet", "No — goes offline if you stop paying", "Yes — hosted in your name"]
        ]
      },
      {
        "type": "h2",
        "text": "Which is right for your business right now?"
      },
      {
        "type": "p",
        "html": "The right platform changes depending on where your business is. Here is the honest breakdown."
      },
      {
        "type": "ul",
        "items": [
          "<strong>Use Squarespace if you are just starting out.</strong> Under $49/month, live in days, no developer needed. Perfect for testing whether the business idea works before committing to a proper build.",
          "<strong>Use a custom website if your site is a primary source of enquiries.</strong> If organic Google traffic matters, if you need any integration beyond the basics, or if you have been in business more than two years — you have outgrown templates.",
          "<strong>Not sure?</strong> Ask yourself one question: will this website still matter to your business in three years? If yes, build. The cost curve and the ownership argument both point the same way."
        ]
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
      },
      {
        "type": "faq",
        "q": "What about WordPress — where does that fit?",
        "a": "WordPress sits between Squarespace and a fully custom build. It is free and flexible, but you manage hosting, security updates and plugin compatibility yourself — or pay someone to. A WordPress build typically costs AU $3,000–$8,500 with ongoing hosting and maintenance on top. A custom Next.js build from us costs from $800, includes hosting setup, and has no platform dependency to maintain. For most Australian small businesses, the choice is Squarespace (quick and cheap) or custom (own it and rank with it) — WordPress makes the most sense when you need a specific plugin ecosystem."
      }
    ]
  },

  {
    slug: 'ndis-website-design',
    image: '/assets/imgs/page/landing/ndis-website-design.webp',
    imageAlt: 'NDIS provider website passing WCAG 2.1 AA contrast and keyboard tests',
    metaTitle: 'NDIS Website Design Australia | WCAG 2.1 AA | $1,900',
    metaDescription:
      'NDIS provider website design Australia — WCAG 2.1 AA compliant, fast, participant-friendly. Fixed AUD pricing from $1,900. Build First Site.',
    eyebrow: 'NDIS & Disability Services',
    h1: 'NDIS Website Design — Accessible, Fast, Compliant',
    lead:
      'NDIS provider websites have a higher standard than a typical business site. Accessibility compliance is a legal requirement under the Disability Discrimination Act. We build NDIS websites that meet WCAG 2.1 AA, load fast on mobile, and convert participants and support coordinators into enquiries.',
    priceTiers: ['business', 'unlimited'],
    schemaType: 'Service',
    breadcrumb: 'NDIS Website Design',
    related: [
      { href: '/web-design-melbourne/', label: 'Web design Melbourne' },
      { href: '/web-design-sydney/', label: 'Web design Sydney' },
      { href: '/dental-website-design/', label: 'Dental website design' },
      { href: '/blog/ndis-website-cost/', label: 'NDIS website cost guide' },
      { href: '/blog/ndis-website-accessibility-checklist/', label: 'WCAG 2.1 AA checklist' },
    ],
    body: [
      { type: 'h2', text: 'What makes an NDIS website different' },
      { type: 'p', html: 'NDIS providers serve participants who may have physical, cognitive, sensory, or communication disabilities. A website that works fine for an able-bodied user can be completely inaccessible to your actual audience — small font, low colour contrast, keyboard-only navigation that breaks, or video without captions.' },
      { type: 'p', html: 'Beyond your participants, the Disability Discrimination Act 1992 creates a legal obligation for service providers to make digital services accessible. <a href="/blog/wcag-audit-process-ndis-websites/" class="color-green-900">WCAG 2.1 AA</a> is the benchmark the Australian Human Rights Commission refers to. A non-compliant website is a liability, not just a missed opportunity.' },

      { type: 'h2', text: 'What WCAG 2.1 AA compliance means in practice' },
      { type: 'ul', items: [
        '<strong>Colour contrast ratio of 4.5:1 minimum</strong> for body text — critical for participants with low vision.',
        '<strong>Full keyboard navigability</strong> — every page can be used without a mouse, meaning screen reader users are not blocked.',
        '<strong>Alt text on every image</strong> — descriptive, not just filenames. "A support worker helping a participant with daily living tasks" not "img-hero.jpg".',
        '<strong>Captions on video</strong> — any video content needs accurate captions. Auto-generated YouTube captions do not meet WCAG.',
        '<strong>Clear, plain-language content</strong> — NDIS documentation is already complex; your website should be the opposite.',
        '<strong>Resizable text without breaking layout</strong> — pages must work at 200% zoom.',
        '<strong>No content that flashes more than 3 times per second</strong> — seizure safety.',
      ]},

      { type: 'h2', text: 'What NDIS provider websites need to convert' },
      { type: 'p', html: 'Accessibility is table stakes. Conversion is the other half of the job. The participants and coordinators visiting your site are making a real decision about support services — trust signals matter more here than on a typical business website.' },
      { type: 'ul', items: [
        '<strong>Service pages, not a services list.</strong> One page per support category — Supported Independent Living, Community Participation, Daily Activities, etc. Each page targets the search terms participants and coordinators actually use.',
        '<strong>NDIS registration number visible.</strong> If you are a Registered Provider, display your number. Unregistered providers should state that clearly too — coordinator referrals depend on knowing this.',
        '<strong>Intake process explained step by step.</strong> What happens after someone contacts you? How long does onboarding take? Uncertainty is the biggest drop-off point on NDIS provider websites.',
        '<strong>Service area map or suburb list.</strong> Google indexes suburb-specific pages and coordinators search by location.',
        '<strong>Testimonials from participants or families</strong> (with permission). Third-party trust is critical in this sector.',
      ]},

      { type: 'h2', text: 'NDIS website cost in Australia (2026)' },
      { type: 'p', html: 'Our Business package at <strong>$1,900</strong> covers up to ten pages — enough for a home page, about, contact, and six service category pages. Our Unlimited package at <strong>$3,500</strong> is the right choice if you need a page per suburb, a participant portal, or more than ten service types.' },
      { type: 'p', html: 'We include WCAG 2.1 AA compliance, Google Business Profile setup, local schema markup, structured data for each service, and a Lighthouse mobile score above 90 in every NDIS build.' },

      { type: 'h2', text: 'SEO for NDIS providers' },
      { type: 'p', html: 'NDIS provider SEO is different from general local SEO. Participants and coordinators search by service type and location: "SIL providers Melbourne", "community participation NDIS Parramatta", "speech therapy NDIS Canberra". These are high-intent searches with low competition because most NDIS providers still rely on the NDIS provider finder and word of mouth.' },
      { type: 'p', html: 'We build NDIS websites with the right page structure from day one — one URL per service, suburb-specific content where relevant, FAQPage schema for participant questions, and internal links between related services. Our guide on <a href="/blog/seo-for-ndis-providers/">SEO for NDIS providers</a> covers the full strategy.' },

      { type: 'h2', text: 'Further reading' },
      { type: 'p', html: 'Related reading for NDIS providers: <a href="/blog/ndis-website-cost/" class="color-green-900">NDIS website cost guide</a>, <a href="/dental-website-design/" class="color-green-900">dental website design</a>.' },

      { type: 'h2', text: 'NDIS website design questions' },
      { type: 'faq', q: 'Does my NDIS website legally have to be accessible?',
        a: 'WCAG 2.1 AA is not a legal mandate written explicitly into Australian law, but the Disability Discrimination Act 1992 prohibits discriminating against people with disabilities in the provision of services — and a non-accessible website does exactly that. The Australian Human Rights Commission has investigated digital accessibility complaints. NDIS providers who receive Commonwealth funding have additional obligations. The safe answer: build to WCAG 2.1 AA from the start.' },
      { type: 'faq', q: 'How much does an NDIS website cost?',
        a: 'Our Business package is $1,900 AUD for up to ten pages, which covers a standard NDIS provider site with one page per service type. The Unlimited package at $3,500 covers suburb pages, more service categories, and no page limit. See our detailed breakdown at /blog/ndis-website-cost/.' },
      { type: 'faq', q: 'Can you help me rank for NDIS-related searches?',
        a: 'Yes. We build NDIS websites with the page structure, local schema, and service-specific content that search engines reward. We also have a full guide to SEO for NDIS providers on our blog covering the specific keywords and page types that generate participant enquiries.' },
      { type: 'faq', q: 'Do I need to be a Registered Provider to get a website from you?',
        a: 'No. We work with both Registered and unregistered NDIS providers. We will mark your registration status accurately on the site — this is important information for participants and coordinators making referrals.' },
      { type: 'faq', q: 'How long does it take to build an NDIS provider website?',
        a: 'Typically two to four weeks for a Business package site, depending on how quickly you can provide content and photos. We start with a staging URL so you can review and request changes before the site goes live.' },
    ],
  },

  {
    slug: 'dental-website-design',
    image: '/assets/imgs/page/landing/dental-website-design.webp',
    imageAlt: 'Dental clinic website with online appointment booking on a tablet',
    metaTitle: 'Dental Website Design Australia 2026 | From $1,900',
    metaDescription:
      'Dental practice website design Australia — appointment booking integrations, AHPRA-compliant copy, fast mobile pages. Fixed AUD price from $1,900.',
    eyebrow: 'Healthcare · Dental',
    h1: 'Dental Website Design Australia — Built to Book More Patients',
    lead:
      'A dental practice website has one job: convert searchers into booked appointments. We build fast, AHPRA-compliant dental websites with appointment booking integrations, local SEO, and a Lighthouse score above 90 — so your practice appears in local search and converts when it does.',
    priceTiers: ['business', 'unlimited'],
    schemaType: 'Service',
    breadcrumb: 'Dental Website Design',
    related: [
      { href: '/web-design-melbourne/', label: 'Web design Melbourne' },
      { href: '/web-design-sydney/', label: 'Web design Sydney' },
      { href: '/ndis-website-design/', label: 'NDIS website design' },
      { href: '/pricing/', label: 'View all pricing' },
    ],
    body: [
      { type: 'h2', text: 'What a dental website needs to do in 2026' },
      { type: 'p', html: 'Most dental practice websites fall into one of two categories: a 2018-era <a href="/wordpress-vs-custom-website/" class="color-green-900">WordPress</a> theme that loads slowly and looks dated, or a website built by a dental marketing agency that locks you into a proprietary system and a monthly retainer you can never leave.' },
      { type: 'p', html: 'Neither serves your patients well. A patient searching for a dentist on their phone at 9pm needs a fast page, an obvious phone number, and a booking link — not a slow-loading slider and a generic stock photo of someone smiling. That is what we build.' },

      { type: 'h2', text: 'Dental website cost in Australia (2026)' },
      { type: 'p', html: 'Dental marketing agencies typically charge $3,000–$8,000 for a practice website, plus $200–$500/month for hosting and a CMS licence they own. Our prices are fixed and published: <strong>$1,900</strong> for a Business package (up to ten pages — home, about, services, contact, and individual treatment pages), or <strong>$3,500</strong> for unlimited pages.' },
      { type: 'p', html: 'You own the source code. Hosting on Vercel is free. No ongoing platform fee, no proprietary CMS, no lock-in. The $0 hosting situation means you will be ahead on total cost within 12 months of a typical dental agency quote.' },

      { type: 'h2', text: 'AHPRA compliance on dental websites' },
      { type: 'p', html: 'AHPRA guidelines restrict health practitioners from using patient testimonials in marketing materials — a blanket "we have 200 five-star reviews" widget is a compliance issue if it displays individual patient testimonials on the page. We build dental websites with this in mind: aggregate review stars from Google Business Profile are fine, individual testimonials require care.' },
      { type: 'p', html: 'We do not write clinical claims we cannot substantiate. Any copy about treatments includes appropriate caveats ("results may vary"), and we do not use before/after treatment photos without appropriate context. AHPRA audits practices for digital advertising — we make sure your website is not the thing that triggers one.' },

      { type: 'h2', text: 'Features every dental website should have' },
      { type: 'ul', items: [
        '<strong>Online appointment booking.</strong> HotDoc, Cliniko, or any booking system you already use. We integrate it so patients can book without calling — the single biggest conversion improvement for most dental sites.',
        '<strong>Individual treatment pages.</strong> One page per treatment — general dentistry, cosmetic, orthodontics, implants, emergency. Each page targets the specific search term patients use and provides the depth Google rewards.',
        '<strong>Google Business Profile integration.</strong> Your star rating and review count displayed correctly — aggregate stars are AHPRA-compliant; individual testimonials require more care.',
        '<strong>DentalMark or practice accreditation badges.</strong> Third-party trust signals that patients recognise.',
        '<strong>Team pages with photos and qualifications.</strong> Patients choose dentists based on who they will be treated by. A real photo and a list of qualifications converts better than a stock photo.',
        '<strong>Clear fee guides.</strong> Dental pricing anxiety is real. Practices that publish fee guides or Medicare/Child Dental Benefits Schedule information on the page reduce enquiry friction.',
        '<strong>Emergency dental landing page.</strong> "Emergency dentist [suburb]" is one of the highest-intent searches in dental. A dedicated emergency page targeting your suburb captures this traffic.',
      ]},

      { type: 'h2', text: 'Local SEO for dental practices' },
      { type: 'p', html: '"Dentist near me" and "[suburb] dentist" are the two highest-volume dental searches in Australia. Ranking in the Google Maps pack for those terms is determined primarily by Google Business Profile completeness, distance from the searcher, and website authority.' },
      { type: 'p', html: 'We set up Google Business Profile correctly for every dental project — service area, practice hours, treatment categories, photo uploads. We also build suburb-specific content into the site architecture where appropriate (a clinic in Parramatta should rank for "dentist Parramatta", "dentist North Parramatta", and "dentist Westmead").' },

      { type: 'h2', text: 'Further reading' },
      { type: 'p', html: 'Related reading for healthcare practices: <a href="/ndis-website-design/" class="color-green-900">NDIS website design</a>, <a href="/how-much-does-a-website-cost-australia/" class="color-green-900">what a website costs</a>, <a href="/pricing/" class="color-green-900">fixed prices</a>.' },

      { type: 'h2', text: 'Dental website design questions' },
      { type: 'faq', q: 'How much does a dental website cost in Australia?',
        a: 'Our Business package is $1,900 AUD for up to ten pages — home, about, services overview, individual treatment pages, and contact. Unlimited pages are $3,500. Hosting is free on Vercel. Dental marketing agencies typically charge $3,000–$8,000 plus a monthly retainer. We publish the price before any conversation.' },
      { type: 'faq', q: 'Can you integrate online booking into our dental website?',
        a: 'Yes. We integrate with HotDoc, Cliniko, Dental4Windows, and any booking system that provides an embed code or API. Online booking is the single biggest conversion improvement for most dental websites — patients who cannot book immediately often do not call back.' },
      { type: 'faq', q: 'Are patient testimonials allowed on dental websites under AHPRA guidelines?',
        a: 'AHPRA guidelines prohibit the use of patient testimonials in advertising. Displaying individual patient reviews on your practice website falls within advertising and needs to be handled carefully. Aggregate star ratings (e.g. "4.9 stars on Google") are generally acceptable. We build dental websites with AHPRA compliance in mind and can advise on what is and is not permissible.' },
      { type: 'faq', q: 'How long does it take to build a dental website?',
        a: 'Typically two to four weeks for a Business package site. We start with a private staging link so you can review, request edits, and sign off before going live. The most common delay is waiting for professional team photos — we recommend organising these early in the project.' },
      { type: 'faq', q: 'Do you build websites for specialist dental practices?',
        a: 'Yes — we work with general practices, specialists (orthodontists, periodontists, oral surgeons, endodontists), and multi-location group practices. Specialist websites have different keyword strategies and referral-network trust signals; we tailor the content and structure accordingly.' },
    ],
  }
  ,
  {
    slug: 'wordpress-vs-custom-website',
    image: '/assets/imgs/page/landing/wordpress-vs-custom-website.webp',
    imageAlt: 'WordPress plugin overhead compared with a fast custom Next.js build',
    metaTitle: 'WordPress vs Custom Website Australia | 5-Year Cost',
    metaDescription:
      'WordPress vs a custom website in Australia. Real 5-year AUD costs, PageSpeed data, plugin and maintenance risk, and who each option actually suits.',
    eyebrow: 'Comparison',
    h1: 'WordPress vs a Custom Website in Australia',
    lead:
      'WordPress powers around 43% of the web, so the question is fair: why build custom? This page gives the honest answer, including the cases where WordPress is genuinely the better choice for you.',
    priceTiers: ['starter', 'business', 'unlimited'],
    schemaType: 'Service',
    breadcrumb: 'WordPress vs Custom',
    related: [
      { href: '/wix-vs-custom-website/', label: 'Wix vs custom website' },
      { href: '/squarespace-vs-custom-website/', label: 'Squarespace vs custom' },
      { href: '/webflow-vs-custom-website/', label: 'Webflow vs custom' },
      { href: '/how-much-does-a-website-cost-australia/', label: 'What a website costs in Australia' },
      { href: '/blog/wordpress-vs-nextjs-speed-australia/', label: 'WordPress vs Next.js speed data' },
    ],
    body: [
      { type: 'h2', text: 'The short version' },
      { type: 'p', html: 'WordPress is a content management system built in 2003 for blogging. It is enormously capable and enormously popular. It is also, in its typical small-business configuration — a page builder plus twenty plugins on shared hosting — slow, fragile, and expensive to keep running. A custom build on <a href="/nextjs-development/" class="color-green-900">Next.js</a> costs about the same up front and materially less over five years.' },
      { type: 'p', html: 'We will say plainly where WordPress wins, because it does win in some cases. Skip to the last section if that is what you are here for.' },

      { type: 'h2', text: 'Side by side' },
      { type: 'table',
        headers: ['', 'WordPress (typical SMB setup)', 'Custom (Next.js)'],
        rows: [
          ['Mobile PageSpeed', '40–70', '88–98'],
          ['Time to first byte', '400–800ms (shared hosting)', 'Under 100ms (edge)'],
          ['Ongoing plugin updates', 'Weekly, breakage risk', 'None — no plugins'],
          ['Security surface', 'Core + every plugin', 'Static pages, minimal surface'],
          ['Hosting cost', '$15–60/month', '$0 on Vercel free tier'],
          ['Content editing', 'Excellent — built for it', 'Needs a CMS layer added'],
          ['Who owns the code', 'You (open source)', 'You (full repo access)'],
          ['Developer availability', 'Very high', 'High and growing'],
        ]
      },

      { type: 'h2', text: 'The five-year cost, in AUD' },
      { type: 'p', html: 'Up-front price is the number everyone compares. It is the wrong number. Here is what each option actually costs over five years for a typical ten-page Australian small business site.' },
      { type: 'table',
        headers: ['Cost', 'WordPress', 'Custom (our Business package)'],
        rows: [
          ['Initial build', '$2,000–4,000', '$1,900'],
          ['Hosting (5 yrs)', '$1,200–3,600', '$0 (Vercel free tier)'],
          ['Premium plugins (5 yrs)', '$500–1,500', '$0'],
          ['Maintenance (5 yrs)', '$3,000–9,000', '$0–9,000 (optional retainer)'],
          ['Five-year total', '$6,700–18,100', '$1,900–10,900'],
        ]
      },
      { type: 'p', html: 'The maintenance line is the one that surprises people. WordPress maintenance is not optional — an unpatched plugin is how most small-business sites get compromised. A static custom build has no plugin layer to patch, so maintenance is a choice rather than a requirement.' },

      { type: 'h2', text: 'Why the speed gap exists' },
      { type: 'ul', items: [
        '<strong>Page builder CSS.</strong> Elementor and Divi load their full stylesheet on every page, including styles for elements that page never uses.',
        '<strong>Plugin JavaScript.</strong> The average WordPress site runs 20+ plugins, many adding render-blocking scripts.',
        '<strong>Server-side rendering on every request.</strong> WordPress executes PHP and queries a database for each visitor. A static build sends finished HTML.',
        '<strong>Shared hosting latency.</strong> Most SMB WordPress sites sit on shared hosting several hundred milliseconds away from the visitor.',
      ]},
      { type: 'p', html: 'We measured this rather than assuming it — see <a href="/blog/wordpress-vs-nextjs-speed-australia/" class="color-green-900">our PageSpeed comparison of real Australian sites</a>. Since <a href="/blog/wordpress-vs-nextjs-speed-australia/" class="color-green-900">Core Web Vitals</a> became a ranking factor in 2021, that gap is a ranking gap too.' },

      { type: 'h2', text: 'When WordPress is the better choice' },
      { type: 'p', html: 'Honestly: if several non-technical people need to publish content daily, WordPress is hard to beat. Its editing experience has had twenty years of refinement. If you are running a serious content-marketing operation with multiple writers, or you need a specific plugin ecosystem (complex membership tiers, LMS, certain booking systems), WordPress is the pragmatic answer.' },
      { type: 'p', html: 'We will tell you that before quoting, rather than after. If a headless CMS on top of a custom build is overkill for your situation, we say so.' },

      { type: 'h2', text: 'When custom is the better choice' },
      { type: 'ul', items: [
        'Your site is largely stable — services, pricing, contact, a handful of landing pages.',
        'Speed and search ranking matter to your lead flow.',
        'You are tired of plugin updates breaking your site.',
        'You want predictable costs with no platform fees.',
        'You want to own and move the code without asking anyone.',
      ]},
      { type: 'p', html: 'Our fixed prices for a custom build are on the <a href="/pricing/" class="color-green-900">pricing page</a>, and the wider market context is in <a href="/how-much-does-a-website-cost-australia/" class="color-green-900">what a website actually costs in Australia</a>.' },

      { type: 'h2', text: 'Common questions' },
      { type: 'faq', q: 'Is WordPress bad?',
        a: 'No. WordPress is excellent software and powers a large share of the web. The problem is the typical small-business configuration — a page builder plus many plugins on shared hosting — which is slow and needs constant maintenance. A well-run, lightweight WordPress install can perform well; it just takes deliberate effort that most SMB builds never receive.' },
      { type: 'faq', q: 'Can I edit a custom website myself?',
        a: 'Yes, if we add a CMS layer. For a site where content changes occasionally we usually recommend sending edits to us, which is included in the maintenance retainer. If you need daily self-service publishing we will add a headless CMS or recommend WordPress — whichever genuinely fits.' },
      { type: 'faq', q: 'Can you migrate my existing WordPress site?',
        a: 'Yes. We keep your URLs so existing search rankings carry over, set up redirects for anything that changes, and preserve your content. Migration is quoted as part of the build rather than as a separate surprise cost.' },
      { type: 'faq', q: 'What happens to my site if I stop working with you?',
        a: 'Nothing. You have full source code and repository access in your name, deployed to your own Vercel account where possible. Any developer can pick it up. There is no proprietary platform to be locked into.' },
      { type: 'faq', q: 'Is WordPress cheaper than a custom website?',
        a: 'Cheaper up front sometimes, more expensive over five years almost always. Hosting, premium plugins and mandatory maintenance add up, while a static custom build has no plugin fees and free hosting on Vercel. The five-year table above shows the difference.' },
    ],
  },
  {
    slug: 'webflow-vs-custom-website',
    image: '/assets/imgs/page/landing/webflow-vs-custom-website.webp',
    imageAlt: 'Webflow visual builder compared with a hand-built custom codebase',
    metaTitle: 'Webflow vs Custom Website Australia | 5-Year Cost',
    metaDescription:
      'Webflow vs a custom website in Australia. Real 5-year AUD costs, platform fees, code ownership and export limits explained honestly.',
    eyebrow: 'Comparison',
    h1: 'Webflow vs a Custom Website in Australia',
    lead:
      'Webflow is the best visual website builder available, and it produces genuinely good output. The trade-off is a monthly fee that never stops and a ceiling you eventually hit. This page explains where that ceiling sits.',
    priceTiers: ['starter', 'business', 'unlimited'],
    schemaType: 'Service',
    breadcrumb: 'Webflow vs Custom',
    related: [
      { href: '/wix-vs-custom-website/', label: 'Wix vs custom website' },
      { href: '/squarespace-vs-custom-website/', label: 'Squarespace vs custom' },
      { href: '/wordpress-vs-custom-website/', label: 'WordPress vs custom' },
      { href: '/how-much-does-a-website-cost-australia/', label: 'What a website costs in Australia' },
      { href: '/nextjs-development/', label: 'Next.js development' },
    ],
    body: [
      { type: 'h2', text: 'Credit where it is due' },
      { type: 'p', html: 'Webflow is a serious tool. It outputs clean semantic HTML, its hosting is fast, and a skilled Webflow designer can build something that performs well and looks excellent. Compared with <a href="/wix-vs-custom-website/" class="color-green-900">Wix</a>, it is a different class of product. If someone tells you Webflow is a toy, they have not used it.' },
      { type: 'p', html: 'So the comparison here is not about quality. It is about cost structure, ownership, and what happens when you need something Webflow does not do.' },

      { type: 'h2', text: 'Side by side' },
      { type: 'table',
        headers: ['', 'Webflow', 'Custom (Next.js)'],
        rows: [
          ['Mobile PageSpeed', '75–90', '88–98'],
          ['Monthly platform fee', '$23–49 AUD, forever', '$0'],
          ['Hosting', 'Bundled, required', 'Free on Vercel'],
          ['Code export', 'Partial — no CMS or logic', 'Full repository, yours'],
          ['Custom backend logic', 'Very limited', 'Unlimited'],
          ['Visual editing', 'Excellent', 'Needs a CMS layer added'],
          ['Third-party integrations', 'Good, within their ecosystem', 'Anything with an API'],
          ['Leaving the platform', 'Rebuild required', 'Move the repo, done'],
        ]
      },

      { type: 'h2', text: 'The five-year cost, in AUD' },
      { type: 'table',
        headers: ['Cost', 'Webflow', 'Custom (our Business package)'],
        rows: [
          ['Initial build', '$2,000–5,000', '$1,900'],
          ['Platform fees (5 yrs)', '$1,380–2,940', '$0'],
          ['Hosting (5 yrs)', 'Included above', '$0 (Vercel free tier)'],
          ['Five-year total', '$3,380–7,940', '$1,900'],
        ]
      },
      { type: 'p', html: 'The platform fee is the whole argument. It is modest monthly and substantial over five years, and it buys you nothing permanent — stop paying and the site goes offline.' },

      { type: 'h2', text: 'The export limitation people discover late' },
      { type: 'p', html: 'Webflow lets you export your code, which sounds like it solves the ownership problem. It does not, quite. The export gives you static HTML and CSS. It does not include the CMS, form handling, memberships, ecommerce, or any dynamic functionality. If your site uses Webflow CMS collections — and most do — an export leaves you with a shell.' },
      { type: 'p', html: 'This matters at exactly the moment it is most inconvenient: when you have outgrown the platform and want to move.' },

      { type: 'h2', text: 'Where Webflow hits its ceiling' },
      { type: 'ul', items: [
        '<strong>Custom backend logic.</strong> Anything requiring server-side processing, complex calculations, or a real database beyond CMS collections.',
        '<strong>Integrations outside the ecosystem.</strong> Connecting to an industry-specific booking system, an ERP, or a bespoke API usually means workarounds.',
        '<strong>Ecommerce at scale.</strong> Webflow Ecommerce is capable but limited on product variants, tax logic and fulfilment integrations.',
        '<strong>User accounts and dashboards.</strong> Memberships exist but are shallow. Anything resembling a real application belongs elsewhere.',
      ]},
      { type: 'p', html: 'If your website will only ever be a website, none of that matters. If it is heading toward being a <a href="/ecommerce-development/" class="color-green-900">store</a> or an <a href="/ai-web-development/" class="color-green-900">application</a>, the ceiling arrives sooner than expected.' },

      { type: 'h2', text: 'When Webflow is the right call' },
      { type: 'p', html: 'If you want to edit your own site visually, your needs are presentational rather than functional, and a monthly fee is acceptable to you — Webflow is a good choice and we will say so. Design-led businesses that redesign often get real value from it.' },

      { type: 'h2', text: 'When custom is the right call' },
      { type: 'p', html: 'If you want the fees to stop, you want the actual code, or you can see functionality on the horizon that a visual builder will not reach — build custom. Our fixed prices are on the <a href="/pricing/" class="color-green-900">pricing page</a>.' },

      { type: 'h2', text: 'Common questions' },
      { type: 'faq', q: 'Is Webflow good for SEO?',
        a: 'Yes — genuinely. Webflow outputs clean semantic HTML, lets you control meta tags and canonical URLs, and generates a sitemap. It is one of the better builders for SEO. A custom build gives you more control over structured data and page-level performance, but Webflow is not an SEO problem the way some builders are.' },
      { type: 'faq', q: 'Can I export my Webflow site and host it elsewhere?',
        a: 'Partially. You can export static HTML and CSS, but the export excludes CMS collections, forms, memberships and ecommerce. For a purely static brochure site the export is usable. For anything using Webflow CMS, you are effectively rebuilding.' },
      { type: 'faq', q: 'How much does Webflow cost in Australia?',
        a: 'Site plans run roughly $23–49 AUD per month depending on tier, with ecommerce plans higher. Over five years that is approximately $1,380–2,940 in platform fees on top of whatever the initial build cost, and the fee never ends.' },
      { type: 'faq', q: 'Can you migrate a Webflow site to a custom build?',
        a: 'Yes. We rebuild the design faithfully, keep your URL structure so rankings carry over, set up redirects for anything that changes, and hand you the full repository. Most migrations take two to four weeks.' },
    ],
  },
  {
    slug: 'freelancer-vs-web-design-agency',
    image: '/assets/imgs/page/landing/freelancer-vs-web-design-agency.webp',
    imageAlt: 'Solo freelancer compared with a small web design studio team',
    metaTitle: 'Freelancer vs Web Design Agency Australia 2026',
    metaDescription:
      'Freelancer vs agency for your Australian website. Real AUD rates, the risks of each, and how to tell which one your project actually needs.',
    eyebrow: 'Comparison',
    h1: 'Freelancer vs Web Design Agency in Australia',
    lead:
      'A freelancer costs less and disappears more often. An agency costs more and you may never meet the person building your site. Here is the honest version of both, including where we sit.',
    priceTiers: ['starter', 'business', 'unlimited'],
    schemaType: 'Service',
    breadcrumb: 'Freelancer vs Agency',
    related: [
      { href: '/hire-website-builder/', label: 'Hire a website builder' },
      { href: '/how-much-does-a-website-cost-australia/', label: 'What a website costs in Australia' },
      { href: '/wordpress-vs-custom-website/', label: 'WordPress vs custom' },
      { href: '/pricing/', label: 'All pricing' },
    ],
    body: [
      { type: 'h2', text: 'What each actually costs in Australia' },
      { type: 'table',
        headers: ['', 'Freelancer', 'Agency', 'Small studio'],
        rows: [
          ['Hourly rate (AUD)', '$50–120', '$120–250', '$60–140'],
          ['Typical 10-page site', '$1,500–4,000', '$5,000–15,000', '$1,900–3,500'],
          ['Who you talk to', 'The builder', 'An account manager', 'The builder'],
          ['Who builds it', 'The person you hired', 'Often a junior or offshore team', 'The person you hired'],
          ['Availability after launch', 'Variable', 'Contracted', 'Depends on the studio'],
          ['Project management', 'Usually none', 'Formal', 'Light'],
        ]
      },
      { type: 'p', html: 'Agency pricing is not markup for its own sake — it covers project management, account handling, offices and staff. Whether that overhead buys you anything depends entirely on your project.' },

      { type: 'h2', text: 'The real risk with freelancers' },
      { type: 'p', html: 'It is not skill. Plenty of freelancers are excellent engineers. The risk is continuity: they take a full-time job, get busy with a larger client, or simply stop replying. If your website needs a change and the only person who understands it has vanished, you are rebuilding.' },
      { type: 'ul', items: [
        'No cover if they are sick, travelling, or between contracts.',
        'Code and hosting sometimes sit in accounts you do not control.',
        'Documentation is frequently thin, so the next person starts from scratch.',
        'Post-launch support depends on goodwill rather than an agreement.',
      ]},
      { type: 'p', html: 'This is manageable if you insist on the right things up front — repository access in your name, hosting under your account, and a written scope. Ask for those before you pay a deposit.' },

      { type: 'h2', text: 'The real risk with agencies' },
      { type: 'p', html: 'You are quoted by a salesperson, managed by an account manager, and built for by someone you never speak to — often a junior, often offshore, without that being disclosed. The cost of relaying every decision through a third party shows up as slow revisions and details lost in translation.' },
      { type: 'ul', items: [
        'The person who sold the project rarely builds it.',
        'Small changes go through a formal process and take a week.',
        'Some agencies host on proprietary platforms you cannot leave.',
        'Headcount and location claims are not always accurate.',
      ]},
      { type: 'p', html: 'Check who is actually building. Ask directly: who writes the code, and where are they? An agency that answers plainly is a good sign.' },

      { type: 'h2', text: 'Where we sit' },
      { type: 'p', html: 'Build First Site is a small studio. You deal directly with the engineer who writes your code, and your day-to-day contact is in Australia on Australian hours. There is no account manager relaying messages and no junior you never meet.' },
      { type: 'p', html: 'That structure is why our prices are lower than an agency quoting the same scope — there is no office, no sales layer and no overhead to recover. If you need formal project management across a large programme of work, we are not the right fit and will say so early rather than take the job.' },
      { type: 'p', html: 'More on how we work is on the <a href="/about/" class="color-green-900">about page</a>, and our fixed prices are published on the <a href="/pricing/" class="color-green-900">pricing page</a> rather than quoted after a discovery call.' },

      { type: 'h2', text: 'Which one your project needs' },
      { type: 'ul', items: [
        '<strong>Freelancer</strong> — small budget, simple scope, you can manage the project yourself and you have vetted them properly.',
        '<strong>Agency</strong> — large budget, many stakeholders, formal process and contracted availability genuinely matter.',
        '<strong>Small studio</strong> — you want direct access to the builder and agency-grade output without agency overhead.',
      ]},

      { type: 'h2', text: 'Questions to ask before you hire anyone' },
      { type: 'ul', items: [
        'Who writes the code, and where are they based?',
        'Will the repository and hosting be in my name?',
        'What is the fixed price, and what specifically triggers a variation?',
        'What happens if I want to work with someone else in two years?',
        'Can I see live sites you built, on their own domains?',
      ]},
      { type: 'p', html: 'A straight answer to all five is the strongest signal you will get, whichever option you choose.' },

      { type: 'h2', text: 'Further reading' },
      { type: 'p', html: 'The platform comparisons, if that is your next question: <a href="/wordpress-vs-custom-website/" class="color-green-900">WordPress vs custom</a>, <a href="/wix-vs-custom-website/" class="color-green-900">Wix vs custom</a>.' },

      { type: 'h2', text: 'Common questions' },
      { type: 'faq', q: 'Is a freelancer cheaper than an agency?',
        a: 'Usually, yes — roughly $1,500–4,000 for a ten-page site versus $5,000–15,000 from an agency in Australia. The saving is real, but so is the continuity risk. Protect yourself by insisting on repository and hosting access in your own name from day one.' },
      { type: 'faq', q: 'How do I know if a web design agency is actually Australian?',
        a: 'Ask directly who writes the code and where they are based. Check whether the phone number connects to a real person, whether the address is an office or a mailbox, and whether team photos are real rather than stock. Plenty of agencies presenting as local build offshore without disclosing it — the problem is the lack of disclosure, not the arrangement itself.' },
      { type: 'faq', q: 'What should I get at the end of a website project?',
        a: 'Full source code in a repository in your name, hosting under your own account, admin access to every service, and documentation of anything non-obvious. If any of that is withheld, you do not own your website — you are renting it.' },
      { type: 'faq', q: 'Is a small studio riskier than an agency?',
        a: 'It is a fair question. A smaller studio carries some of the same continuity risk as a freelancer, and pretending otherwise would be dishonest. What reduces it is that you get full code ownership and standard tooling — Next.js, a normal Git repository, your own Vercel account — so any competent developer can pick the project up tomorrow. Lock-in, not team size, is what actually strands people: a large agency that builds on its own proprietary CMS is far harder to leave.' },
    ],
  }

]

export function getLandingPage(slug) {
  return LANDING_PAGES.find((p) => p.slug === slug)
}
