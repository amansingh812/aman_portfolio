/**
 * Extra content for the service pages (12 Nov 2026), merged into SERVICE_PAGES
 * by getServicePage(). Keeps the long-form copy out of the main data file.
 *
 * Rules (CLAUDE.md §1): industries describe capability, never imply clients;
 * no headcount; no prices; no invented metrics; founder notes are first-person
 * from Aman and only claim what he can back.
 * Images are AI-generated photo-style scenes with no people (Higgsfield),
 * downloaded by scripts/fetch-service-images-2026-11-12.sh.
 */
const IMG = '/assets/imgs/page/services/x/'

const AU_COMMON = [
  { b: 'An Australian contact', t: 'Calls and paperwork with a local contact, in Australian hours, 7 days.' },
  { b: 'Priced in AUD', t: 'Written estimates in Australian dollars, phase by phase, with instalments available.' },
  { b: 'Built for local search', t: 'Google Business Profile, suburb and city pages, and Australian spelling throughout.' },
]

export const SERVICE_EXTRAS = {
  /* ───────────────────────── WEB DEVELOPMENT ───────────────────────── */
  'web-development': {
    metaTitle: 'Website Design & Development Australia | Custom, Fast Websites',
    heroImage: IMG + 'web-hero.png',
    heroAlt: 'A studio desk with a business website on a large monitor, layout previews on a laptop and the mobile version on a phone',
    answer: 'Build First Site designs and builds custom websites for small and medium businesses in Australia and worldwide. Each site is designed for your business, loads fast on phones, includes SEO from day one and can be edited by you. You see your homepage designed free first, get a written estimate after a short call, and own the code.',
    story: [
      {
        kicker: 'Why it matters',
        title: 'Your website is your best salesperson, or your quietest',
        image: IMG + 'web-story-1.png',
        alt: 'A laptop showing a high website speed score next to search results and SEO notes',
        text: [
          'Most people look at your website before they call, book or buy. If it is slow, hard to use on a phone or doesn’t answer their question, they go back to Google and pick the next business. They rarely tell you why.',
          'We build sites around one job: turning the people who find you into enquiries. That means a clear offer above the fold, fast loading on mobile data, an obvious next step on every page, and the technical groundwork Google needs to rank you.',
        ],
        points: ['Mobile-first design, tested on real phones', 'Pages that answer the questions buyers actually ask', 'Click-to-call, quote and booking forms that reach you'],
      },
      {
        kicker: 'How we are different',
        title: 'Custom-built, and yours to keep',
        image: IMG + 'web-hero.png',
        alt: 'A website design shown on desktop, laptop and phone screens',
        text: [
          'Many agencies build on page builders or their own platforms, which keeps you paying monthly and makes leaving expensive. We write the site in modern code and hand over everything at launch: the code, the domain and the hosting account, in your name.',
          'You can still edit text, images and blog posts yourself through a simple editor. If you ever want another developer, they can pick it up on day one. Read <a href="/affordable-website-design-small-business/">how a website’s five-year cost compares</a> before you decide.',
        ],
        points: ['No templates and no page-builder lock-in', 'Full code repository on launch day', 'Free hosting plans that allow business use suit most sites'],
      },
    ],
    industriesLead: 'The same principles, adapted to how each kind of business wins customers online.',
    industries: [
      { name: 'Trades and home services', text: 'Call-first sites with service areas, quote forms and suburb pages.', href: '/tradie-website-design/' },
      { name: 'Health, dental and allied health', text: 'Online booking, treatment pages and copy that follows health advertising rules.', href: '/dental-website-design/' },
      { name: 'NDIS providers', text: 'Accessible to WCAG 2.1 AA, plain English and easy referrals.', href: '/ndis-website-design/' },
      { name: 'Cafes and restaurants', text: 'Menus that load fast, direct bookings and local search.', href: '/restaurant-website-design/' },
      { name: 'Real estate', text: 'Listings, property search and appraisal enquiry forms.', href: '/real-estate-website-design/' },
      { name: 'Professional services', text: 'Accountants, lawyers and consultants: credibility, clear services and enquiry forms.', href: '/industries/finance-legal/' },
    ],
    australia: {
      title: 'Built for Australian businesses, open to the world',
      text: [
        'Most of our clients are Australian small businesses, and the sites are built for how Australians search and buy: local search, Australian spelling, AUD pricing and mobile-first design.',
        'We also work with businesses overseas. The process is the same everywhere: a short call, a free homepage design, a written estimate, and a live link to review as it is built. See <a href="/web-design-melbourne/">Melbourne</a>, <a href="/web-design-sydney/">Sydney</a> and our other city pages.',
      ],
      points: AU_COMMON,
    },
    founder: '“I started Build First Site because too many small businesses were paying every month for websites they didn’t own and couldn’t change. Every site we build is one I’d be happy to hand to another developer tomorrow: fast, clean, and fully yours. When you hire us, you talk to the person writing the code.”',
  },

  /* ───────────────────────── MOBILE APPS ───────────────────────── */
  'mobile-app-development': {
    heroImage: IMG + 'app-hero.png',
    heroAlt: 'Two smartphones side by side showing the same business app booking screen, with the app design on a tablet behind',
    answer: 'Build First Site builds iOS and Android apps from one codebase using Flutter or React Native, which usually costs much less than two separate native apps. We build the backend, logins and admin too, publish the app under your own developer accounts, and hand over the code. If a web app would do the job for less, we say so on the first call.',
    story: [
      {
        kicker: 'Start with the right question',
        title: 'Do you need an app, or a web app?',
        image: IMG + 'app-story-1.png',
        alt: 'A phone on a table showing a push notification from a business app',
        text: [
          'An app earns its place when people use it often: booking repeat appointments, tracking orders, field staff logging jobs, or members checking in. Push notifications, offline use, the camera and the home-screen icon are what an app adds.',
          'If people only visit occasionally, a fast website or a progressive web app (installable from the browser) usually gives the same result for a fraction of the cost. We will recommend whichever fits, even when it is the smaller job.',
        ],
        points: ['Native app, PWA or web app: an honest recommendation', 'Key screens mapped before any estimate', 'Weekly test builds you install on your own phone'],
      },
      {
        kicker: 'What is included',
        title: 'The whole product, not just the screens',
        image: IMG + 'app-hero.png',
        alt: 'Mobile app screens on iPhone and Android',
        text: [
          'Every app needs more than its front end: a secure backend, a database, logins, an admin panel for your team and, often, payments. We build all of it together so it works as one system.',
          'We handle App Store and Google Play submission under accounts in your name, so you own the listing, the reviews and the code. See also <a href="/services/custom-software/">custom software</a> for the systems behind your app.',
        ],
        points: ['Backend, API and admin panel', 'Push notifications and offline support', 'Store submission under your own accounts'],
      },
    ],
    industriesLead: 'Apps work best where people come back often or work away from a desk.',
    industries: [
      { name: 'Clinics and wellness', text: 'Repeat bookings, reminders and patient check-in.' },
      { name: 'Fitness and memberships', text: 'Class timetables, bookings and member passes.' },
      { name: 'Field services and trades', text: 'Job lists, photos, sign-offs and offline use on site.' },
      { name: 'Retail and loyalty', text: 'Order tracking, offers and loyalty programs.' },
      { name: 'Education and training', text: 'Course content, progress and notifications.' },
      { name: 'Startups', text: 'A first version to test with real users, built to grow.', href: '/lovable-prototype-to-production/' },
    ],
    australia: {
      title: 'App development for Australia and beyond',
      text: [
        'Apps for Australian businesses need to handle patchy regional coverage, Australian payment providers and local privacy expectations. We design for offline use and keep personal data handling simple and transparent.',
        'Clients outside Australia get the same process and weekly test builds, wherever they are.',
      ],
      points: [
        AU_COMMON[0],
        { b: 'Works with patchy coverage', t: 'Offline support and background sync for regional and field use.' },
        AU_COMMON[1],
      ],
    },
    founder: '“Before I start any app, I ask whether it needs to be an app at all. Half the time a fast web app does the job for far less. When an app is the right answer, I build the whole thing, backend included, and publish it under your name.”',
  },

  /* ───────────────────────── CUSTOM SOFTWARE ───────────────────────── */
  'custom-software': {
    heroImage: IMG + 'soft-hero.png',
    heroAlt: 'A monitor showing a custom business dashboard with charts, bookings and a customer list',
    answer: 'Build First Site builds custom software for growing businesses: client portals, booking systems, internal dashboards, workflow automation and integrations between the tools you already use. We scope it with you first, send a written estimate phase by phase, show working software every week, and hand over the code with no per-user fees.',
    story: [
      {
        kicker: 'The problem',
        title: 'When spreadsheets and copy-paste start costing you',
        image: IMG + 'soft-story-1.png',
        alt: 'A desk with paper forms and a spreadsheet beside a laptop showing a clean web portal',
        text: [
          'Most businesses run on a patchwork: a spreadsheet for jobs, an inbox for requests, an accounting tool and a calendar that don’t talk to each other. Someone re-types the same data three times, and mistakes slip through.',
          'Custom software replaces that patchwork with one system built around how you actually work. Off-the-shelf tools make you change your process; ours fit it.',
        ],
        points: ['One place for customers, jobs and data', 'Automatic emails, reminders and reports', 'Connected to your accounting, CRM and calendar'],
      },
      {
        kicker: 'How we work',
        title: 'Small, visible steps instead of a big reveal',
        image: IMG + 'soft-hero.png',
        alt: 'A dashboard on a monitor and a tablet showing the same portal',
        text: [
          'We start by mapping the process the software replaces: who uses it, what goes in and what comes out. Then you get a plain-English scope and a written estimate, phase by phase.',
          'You see working software every week and test it with real cases before your team relies on it. If you started with an AI-built prototype, we can <a href="/lovable-prototype-to-production/">turn it into a production app</a>.',
        ],
        points: ['Written scope before any code', 'Weekly demos of working software', 'Your code, your hosting, no per-seat fees'],
      },
    ],
    industriesLead: 'Typical systems we scope and build.',
    industries: [
      { name: 'Service businesses', text: 'Booking, scheduling, job tracking and invoicing in one place.' },
      { name: 'Professional firms', text: 'Client portals for documents, progress and approvals.' },
      { name: 'Retail and wholesale', text: 'Stock, orders and supplier dashboards linked to your store.', href: '/ecommerce-development/' },
      { name: 'Health and care providers', text: 'Intake forms, rostering and records with careful access control.' },
      { name: 'Education and training', text: 'Course portals, enrolments and progress tracking.' },
      { name: 'Startups and SaaS', text: 'MVPs with logins, subscriptions and admin panels.' },
    ],
    australia: {
      title: 'Software that fits Australian businesses',
      text: [
        'We integrate with tools common in Australia, such as Xero, MYOB, Square and Stripe, and build privacy notices and consent into anything that collects personal information.',
        'Overseas clients get the same scoping, weekly demos and code hand-over.',
      ],
      points: [
        AU_COMMON[0],
        { b: 'Works with local tools', t: 'Xero, MYOB, Square, Stripe and the systems you already pay for.' },
        AU_COMMON[1],
      ],
    },
    founder: '“My background is enterprise software, including fintech, where getting data and permissions right isn’t optional. I bring the same care to small-business systems, without the enterprise price tag or the lock-in.”',
  },

  /* ───────────────────────── MARKETING & SEO ───────────────────────── */
  'marketing-seo': {
    heroImage: IMG + 'seo-hero.png',
    heroAlt: 'A laptop showing search results and a rising traffic chart next to a notebook of keyword research',
    answer: 'Build First Site helps small businesses get found on Google and in AI search. We fix technical SEO, set up and maintain your Google Business Profile, build pages for what your customers search, and report results in plain English every month. Month to month, no lock-in contract, and no ranking guarantees, because nobody can honestly promise those.',
    story: [
      {
        kicker: 'What actually moves rankings',
        title: 'SEO is mostly doing the basics properly, every month',
        image: IMG + 'seo-story-1.png',
        alt: 'A phone showing a local business on a map listing with reviews and directions',
        text: [
          'For most small businesses, three things decide whether you show up: a complete Google Business Profile with reviews, a fast site that Google can read easily, and a page for each service and area you want to be found for.',
          'We handle all three, then keep improving: new pages for real searches, internal links, and fixing anything that slows the site down. Our own <a href="/small-business-website-checklist/">small business website checklist</a> shows the foundations.',
        ],
        points: ['Google Business Profile setup and posts', 'Technical fixes, speed and structured data', 'A page for each service and suburb that matters'],
      },
      {
        kicker: 'Search is changing',
        title: 'Being the answer in Google and AI search',
        image: IMG + 'seo-hero.png',
        alt: 'Search results and analytics on a laptop',
        text: [
          'More people now get answers from Google’s AI summaries and assistants like ChatGPT. These tools lean on the same signals as normal search: clear, specific pages that answer questions directly, from businesses with a visible reputation.',
          'We write pages that answer first and explain second, mark them up so machines understand them, and help you build the reviews and links that earn trust.',
        ],
        points: ['Answer-first pages and FAQs', 'Structured data for services and reviews', 'Plain-English monthly report'],
      },
    ],
    industriesLead: 'Local search matters most where customers pick a business nearby.',
    industries: [
      { name: 'Trades', text: 'Suburb pages and Maps visibility for emergency and local jobs.', href: '/blog/tradie-suburb-pages-seo/' },
      { name: 'Health and NDIS', text: 'Service pages, accessibility and referral-friendly content.', href: '/blog/seo-for-ndis-providers/' },
      { name: 'Hospitality', text: 'Maps, menus and reviews that bring in walk-ins and bookings.' },
      { name: 'Professional services', text: 'Content that answers the questions clients search before hiring.' },
      { name: 'Online stores', text: 'Product and category pages structured to rank.' },
      { name: 'Real estate', text: 'Suburb profiles and appraisal pages for sellers.' },
    ],
    australia: {
      title: 'SEO for Australian search results',
      text: [
        'Australian search results are local: Google weighs your suburb, your Business Profile and Australian sources heavily. We target the terms your customers type in your area, in Australian English.',
        'For businesses selling beyond Australia, we plan pages and structure for each market you want to reach.',
      ],
      points: [
        { b: 'Local first', t: 'Google Business Profile, suburb pages and Australian directories.' },
        AU_COMMON[0],
        { b: 'Month to month', t: 'No lock-in contract; cancel with 30 days’ notice.' },
      ],
    },
    founder: '“I won’t promise you position one. Nobody can. What I can promise is that the technical side will be right, the reports will be honest, and every month we’ll do the work that actually moves small-business rankings.”',
  },

  /* ───────────────────────── CARE & MAINTENANCE ───────────────────────── */
  'maintenance-support': {
    metaTitle: 'Website Care & Maintenance Australia | Hosting, Security, Updates',
    heroImage: IMG + 'care-hero.png',
    heroAlt: 'A laptop showing a website uptime monitor with green status checks and a backup completed message',
    answer: 'Build First Site’s care plans keep your website fast, secure and up to date: hosting, SSL, security and software updates, weekly backups, uptime monitoring and small content edits each month, with an SEO option that adds a new page or post monthly. Plans are month to month, cancel with 30 days’ notice, and you keep full ownership of your site.',
    story: [
      {
        kicker: 'Why care matters',
        title: 'Websites don’t break all at once. They drift.',
        image: IMG + 'care-story-1.png',
        alt: 'A phone and laptop showing a website with a security padlock and an update completed notification',
        text: [
          'Software goes out of date, a form stops sending, a page slows down, a certificate expires. None of it is dramatic, but each one quietly costs enquiries until someone notices.',
          'A care plan means someone is watching: updates applied safely, backups taken weekly, uptime monitored, and small fixes done without you having to raise a ticket.',
        ],
        points: ['Security and dependency updates', 'Weekly backups and uptime monitoring', 'Small edits included every month'],
      },
      {
        kicker: 'Grow, not just maintain',
        title: 'Care + SEO: a site that keeps improving',
        image: IMG + 'care-hero.png',
        alt: 'Website monitoring dashboard on a laptop',
        text: [
          'The Care + SEO plan adds a new page or blog post every month, technical SEO checks and speed monitoring, so your site keeps gaining ground in search rather than standing still.',
          'Both plans are optional. If you prefer to manage the site yourself, we show you how at hand-over. See plan details on the <a href="/pricing/#monthly">pricing page</a>.',
        ],
        points: ['A new page or post each month', 'Core Web Vitals and speed monitoring', 'Plain-English monthly summary'],
      },
    ],
    industriesLead: 'Care plans suit any business that relies on its site for enquiries or sales.',
    industries: [
      { name: 'Service businesses', text: 'Forms and click-to-call that must always work.' },
      { name: 'Online stores', text: 'Checkout, stock and payments monitored and updated.' },
      { name: 'Health and NDIS', text: 'Accessibility kept intact as content changes.' },
      { name: 'Hospitality', text: 'Menus, hours and specials updated quickly.' },
      { name: 'Professional services', text: 'Content, team and service pages kept current.' },
      { name: 'Sites we didn’t build', text: 'We can take over care of an existing site after a review.', href: '/small-business-website-redesign/' },
    ],
    australia: {
      title: 'Support in Australian hours',
      text: [
        'Requests are handled with an Australian contact during Australian hours, 7 days, and urgent problems such as a site being down are prioritised.',
        'Your hosting, domain and code stay in your name throughout, so you can leave any time without losing anything.',
      ],
      points: [
        AU_COMMON[0],
        { b: 'Month to month', t: 'Cancel with 30 days’ notice, no penalty.' },
        { b: 'You stay the owner', t: 'Hosting, domain and code remain in your name.' },
      ],
    },
    founder: '“Launch day is the start, not the finish. I’d rather keep a site healthy for years than build it and disappear, and I keep the plans month to month so you stay because it’s worth it, not because you’re locked in.”',
  },
}
