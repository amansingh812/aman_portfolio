/**
 * Individual service page data.
 * Each entry matches a slug from SERVICE_ITEMS in site.js.
 */

export const SERVICE_PAGES = [
  {
    slug: "web-development",
    title: "Web Development",
    metaTitle: "Web Development Australia | Modern Websites from AU$800 | Build First Site",
    metaDescription: "Custom websites for Australian businesses. Next.js, React, full SEO, fixed AUD pricing from $800. You own the code.",
    hero: "Websites that load fast, rank well and convert visitors into customers.",
    intro: "We build responsive, high-performance websites on a modern stack — Next.js, React, Tailwind — optimised for speed, SEO and mobile from day one. No templates, no page builder lock-in, no monthly platform fees. You get a custom site, built around your business, that you own outright.",
    capabilities: [
      { title: "Business websites", body: "Five to fifteen pages, professionally designed, with forms, SEO setup, and structured data. Built to rank and convert." },
      { title: "Landing pages", body: "Conversion-focused single pages for campaigns, launches or lead capture. Fast turnaround from AU$800." },
      { title: "E-commerce", body: "Online stores with Stripe payments, inventory management, and product search. No per-sale platform fees." },
      { title: "Web applications", body: "Dashboards, client portals, booking systems and internal tools. The kind of software that replaces a spreadsheet." },
      { title: "CMS integration", body: "Content management so you can update text, images and blog posts without touching code." },
      { title: "Performance & SEO", body: "Lighthouse 90+, Core Web Vitals green, structured data, sitemap, and mobile-first by default." },
    ],
    pricing: [
      { tier: "Starter (3–5 pages)", price: "AU$800", timeline: "5–7 days" },
      { tier: "Business (up to 10 pages)", price: "AU$1,900", timeline: "2–3 weeks" },
      { tier: "E-Commerce Store", price: "AU$4,500", timeline: "4–6 weeks" },
    ],
    faqs: [
      { q: "What stack do you use?", a: "Next.js 15, React 19, Tailwind CSS, deployed on Vercel or your preferred host. Modern, fast, and future-proof." },
      { q: "Do I own the website?", a: "Yes — full code repository and all accounts handed over on completion. No lock-in." },
      { q: "Can you redesign my existing site?", a: "Absolutely. We rebuild on a modern stack so you get speed and SEO improvements alongside the new design." },
      { q: "How long does a website take?", a: "A landing page in about a week, a business website in 2–4 weeks, an e-commerce store in 4–6 weeks." },
    ],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    metaTitle: "Mobile App Development Australia | iOS & Android from AU$4,500 | Build First Site",
    metaDescription: "Cross-platform mobile apps for Australian businesses. React Native, one codebase, both app stores. Fixed AUD pricing from $4,500.",
    hero: "One codebase. Both app stores. A fraction of the cost.",
    intro: "We build cross-platform mobile apps with React Native — iOS and Android from a single codebase, at roughly half the cost of two separate native builds. Push notifications, offline support, camera access, and app store submission included. You own the code.",
    capabilities: [
      { title: "Cross-platform apps", body: "React Native ships to both iOS and Android from one codebase. One team, one budget, two stores." },
      { title: "Progressive web apps", body: "When you do not need the app stores — PWAs install to the home screen, work offline, and cost less to build." },
      { title: "Backend & API", body: "Every app needs a backend. We build the API, database and auth alongside the app so everything works together." },
      { title: "Push notifications", body: "Re-engage users with targeted push notifications on both platforms." },
      { title: "Offline support", body: "Apps that work without a connection — essential for field work, logistics and remote areas." },
      { title: "App store submission", body: "We handle the submission process for both the App Store and Google Play." },
    ],
    pricing: [
      { tier: "Application", price: "AU$4,500", timeline: "4–8 weeks" },
      { tier: "Custom Software", price: "From AU$5,000", timeline: "8–12 weeks" },
      { tier: "Cross-Platform Mobile", price: "AU$4,500", timeline: "10–16 weeks" },
    ],
    faqs: [
      { q: "Do I need a native app or a web app?", a: "Most small businesses need a web app or PWA, not a native app. We will tell you which one fits on the first call." },
      { q: "How much does an app cost?", a: "Applications are AU$4,500 for a standard build. Anything larger is custom software from AU$5,000, quoted against your requirements. Fixed quotes either way." },
      { q: "Do you build for both iOS and Android?", a: "Yes — one React Native codebase ships to both stores. One build, one price." },
    ],
  },
  {
    slug: "custom-software",
    title: "Custom Software Development",
    metaTitle: "Custom Software Development Australia | Tailored Solutions | Build First Site",
    metaDescription: "Custom software for Australian businesses — internal tools, dashboards, workflow automation. Fixed AUD pricing, you own the code.",
    hero: "Software built around how your business actually works.",
    intro: "Off-the-shelf tools force you to work their way. Custom software does it yours — automating manual processes, connecting systems that do not talk to each other, and giving your team a single place to manage their work. We build internal tools, admin dashboards, client portals and automation workflows, all on a modern stack you own.",
    capabilities: [
      { title: "Internal tools", body: "Admin panels, dashboards and back-office tools that replace spreadsheets and manual processes." },
      { title: "Client portals", body: "Give your customers a login to view orders, track progress, upload documents or manage their account." },
      { title: "Workflow automation", body: "Automate repetitive tasks — approvals, notifications, data entry, report generation." },
      { title: "System integration", body: "Connect your CRM, accounting, email, calendar and payment systems so data flows automatically." },
      { title: "Data & reporting", body: "Real-time dashboards and automated reports so decisions are based on current numbers, not last month's export." },
      { title: "API development", body: "Custom APIs that let your systems, partners and third-party tools communicate reliably." },
    ],
    pricing: [
      { tier: "Internal Tool", price: "From AU$5,000", timeline: "4–6 weeks" },
      { tier: "Full Platform", price: "From AU$5,000", timeline: "8–12 weeks" },
    ],
    faqs: [
      { q: "What kind of software do you build?", a: "Internal tools, admin dashboards, client portals, workflow automation and API integrations. Anything that replaces a manual process." },
      { q: "Can it connect to our existing systems?", a: "Usually, yes. We integrate with CRMs, accounting software, payment platforms, calendars and most tools with an API." },
    ],
  },
  {
    slug: "marketing-seo",
    title: "Marketing & SEO",
    metaTitle: "Marketing & SEO Services Australia | Search & Growth | Build First Site",
    metaDescription: "SEO, local search, Google Business Profile, content strategy and digital marketing for Australian small businesses. Results-focused, transparent pricing.",
    hero: "Get found by the customers already looking for you.",
    intro: "Most small business websites sit invisible on Google because nobody set up the basics. We fix that — with technical SEO, local search optimisation, Google Business Profile setup, and content that targets what your customers actually search for. No jargon-filled monthly reports, no mandatory retainers.",
    capabilities: [
      { title: "Technical SEO", body: "Site speed, structured data, sitemaps, meta tags, Core Web Vitals — the foundation that everything else builds on." },
      { title: "Local SEO", body: "Google Business Profile, local citations, review strategy and location pages so you show up in map results." },
      { title: "Content strategy", body: "Pages that target what your customers actually search. One keyword per page, written for humans, optimised for Google." },
      { title: "On-page optimisation", body: "Title tags, meta descriptions, heading structure, internal linking and image alt text — across every page." },
      { title: "Google Ads management", body: "Paid search campaigns that complement your organic strategy while rankings build." },
      { title: "Analytics setup", body: "Google Analytics 4 and Search Console configured so you can see what is working and what is not." },
    ],
    pricing: [
      { tier: "SEO Audit", price: "AU$500", timeline: "1 week" },
      { tier: "Care + SEO", price: "AU$250/month", timeline: "Ongoing" },
    ],
    faqs: [
      { q: "How long does SEO take?", a: "Expect meaningful movement in 3–6 months. Anyone promising page one by next quarter is either lucky or not being straight with you." },
      { q: "Do I need a new website for SEO?", a: "Not always. We can optimise an existing site if it is fast and mobile-friendly. If it is not, we will tell you." },
    ],
  },
  {
    slug: "ai-automation",
    title: "AI & Automation",
    metaTitle: "AI & Automation Development Australia | Chatbots, AI Tools | Build First Site",
    metaDescription: "AI chatbots, lead qualification, booking automation and workflow AI for Australian businesses. Built on OpenAI, Claude, Gemini. Fixed AUD pricing from $900.",
    hero: "AI that does a specific job, not AI for the sake of it.",
    intro: "We build AI into your business where it actually helps — qualifying leads at 9pm, booking appointments without a phone call, recommending products, answering the same five questions your team handles daily. Custom-built on OpenAI, Claude or Gemini, integrated into your existing site, and owned by you.",
    capabilities: [
      { title: "AI chatbots", body: "Assistants trained on your business that answer questions, capture enquiries and escalate when needed — 24/7." },
      { title: "Lead qualification", body: "AI that asks the right questions and separates serious enquiries from tyre-kickers before they reach you." },
      { title: "Booking automation", body: "Calendar-connected AI that qualifies and books appointments inside the conversation." },
      { title: "Product recommendations", body: "AI that guides shoppers to the right product based on what they need, not just what is popular." },
      { title: "Workflow automation", body: "Automated processes that handle repetitive tasks — approvals, data entry, notifications, report generation." },
      { title: "Custom AI integrations", body: "Multi-step AI workflows built into your existing systems. Not a plugin — a proper integration." },
    ],
    pricing: [
      { tier: "AI Chatbot", price: "From AU$900", timeline: "2 weeks" },
      { tier: "Qualify & Book", price: "From AU$4,500", timeline: "3–4 weeks" },
      { tier: "Custom AI Build", price: "From AU$5,000", timeline: "4–8 weeks" },
    ],
    faqs: [
      { q: "Will it make things up?", a: "It answers from your supplied information and is instructed to say when it does not know. You get full transcripts." },
      { q: "Are there ongoing costs?", a: "You pay the AI provider directly for usage — typically a modest monthly amount. No fee to us after the build." },
    ],
  },
  {
    slug: "maintenance-support",
    title: "Maintenance & Support",
    metaTitle: "Website Maintenance & Support Australia | Ongoing Care | Build First Site",
    metaDescription: "Ongoing website and app maintenance for Australian businesses. Security updates, performance monitoring, feature additions. No mandatory retainer.",
    hero: "Keep it running. Keep it safe. Keep it growing.",
    intro: "A website or app does not stop needing attention after launch. Security patches, dependency updates, performance monitoring, and the occasional new feature — we handle all of it so you do not have to. No mandatory retainer: pick a plan or pay per piece.",
    capabilities: [
      { title: "Security updates", body: "Dependencies patched, vulnerabilities fixed, SSL certificates managed. Your site stays secure without you thinking about it." },
      { title: "Performance monitoring", body: "Uptime monitoring, speed checks and Core Web Vitals tracking. We catch problems before your customers do." },
      { title: "Content updates", body: "Text changes, image swaps, new pages, blog posts — anything you need updated, handled quickly." },
      { title: "Feature additions", body: "New functionality quoted per piece. No need to commit to a monthly plan for occasional work." },
      { title: "Backup & recovery", body: "Regular backups and a tested recovery process, so a bad day does not mean starting over." },
      { title: "Analytics reporting", body: "Monthly summary of traffic, conversions and what is working — in plain English, not jargon." },
    ],
    pricing: [
      { tier: "Care + SEO", price: "AU$250/month", timeline: "Ongoing" },
      { tier: "Pay Per Piece", price: "From AU$200", timeline: "As needed" },
    ],
    faqs: [
      { q: "Do I have to sign a contract?", a: "No. Monthly plans are month-to-month. Pay-per-piece work is quoted individually. No lock-in either way." },
      { q: "What if I only need something small?", a: "That is what pay-per-piece is for. A text change or image swap does not need a monthly plan." },
    ],
  },
];

export function getServicePage(slug) { return SERVICE_PAGES.find(x => x.slug === slug); }
