/**
 * Build First Site — pricing model.
 *
 * Single source of truth for every AUD figure on the site. If a price appears
 * anywhere else (homepage, service pages, blog posts, static HTML), it must
 * match what is here.
 *
 * ── THE MODEL (simplified Aug 2026) ──────────────────────────────────────
 * Price is set by SCOPE — page count or build type. Every package includes
 * every capability. There is no feature ladder, no "upgrade to get a CMS",
 * no drip-fed inclusions.
 *
 * This was a deliberate simplification. A tick/cross matrix makes a buyer
 * audit what they are missing; a scope-based list makes them pick a size.
 * The second conversation is much easier to have.
 *
 * ── POSITIONING (revised 2 Oct 2026) ─────────────────────────────────────
 * Aug 2026: priced at parity with established agencies.
 * Oct 2026: Aman chose a low-entry, free-first model for the ads test:
 *   1. FREE first: homepage design before any payment (FREE_DESIGN).
 *   2. LOW entry: a one-page Launch site at $490, so "from $490" is the
 *      first number a buyer sees. Starter ($800) stays the recommended tier.
 *   3. SMALL payments: Starter and up can be paid in 4 instalments.
 *   4. LOW monthly: Care at $79/month alongside Care + SEO at $250.
 * The core tiers did not move. Research (2 Oct 2026): AU freelancers
 * $1,000–$3,000, small studios $2,500–$6,000, Havealook $995 incl. GST.
 *
 * HONESTY GUARDRAILS for this model (Australian Consumer Law):
 *   - No strikethrough "was" prices we never charged.
 *   - No countdown timers or invented scarcity ("2 spots left").
 *   - "Recommended" is a recommendation, not "most popular" — we have no
 *     data that makes any tier the most popular.
 *
 * We still win on what is verifiable — modern stack, genuinely faster sites,
 * SEO built in, you own the code, direct access to the engineer. Never make
 * "cheaper than X" the headline.
 *
 * Prices are a starting point and negotiable on scope — see NEGOTIABLE_NOTE.
 *
 * HONESTY (CLAUDE.md §1): no invented testimonials, review counts or metrics.
 * Prices are AUD and exclude GST unless stated.
 */

/**
 * Competitor prices were last verified 2026-08-07 and informed the parity
 * decision. They are deliberately NOT rendered on /pricing/ — naming Aussify
 * and Havealook at the moment a buyer is ready to act just sends them off to
 * research the competition. That comparison lives in the blog post
 * /blog/best-web-design-agencies-australia/ where the intent is research.
 */
/**
 * Third-party platform prices, in AUD, verified 24 Sep 2026.
 *
 * WHY THIS EXISTS: these figures were hardcoded as prose across a dozen pages
 * and had drifted badly. A sweep on 24 Sep found Shopify quoted as "$39-$399"
 * on one page and "$52-$575" on another, Wix as "$20-$50", "around $32",
 * "$15 to $58" and "$21-$55" on four different pages. Publishing two different
 * numbers for the same competitor product undercuts the one thing this site
 * claims as its advantage — that our numbers are real and checkable.
 *
 * These are the verified figures. Quote from here. Re-verify on the date below
 * and bump it; platform pricing moves.
 */
export const PLATFORM_PRICES = {
    verifiedOn: '2026-09-24',
    wix:         { min: 21, max: 55,  note: 'business-capable plans; ecommerce Business ~$46' },
    squarespace: { min: 17, max: 62,  note: 'Business ~$40 monthly, ~$28 on annual billing' },
    shopify:     { min: 52, max: 575, note: 'Basic $52 monthly / $42 annual · Grow ~$149 · Advanced ~$575' },
    siteground:  { min: 27, max: 65,  note: 'advertised from ~$6.99 — RENEWS at $26.99-$64.99' },
    ventraip:    { min: 9,  max: 11,  note: 'AU-owned; renews close to advertised' },
    vercel:      { min: 0,  max: 0,   note: 'Hobby free; Pro US$20/seat' },
    cloudflare:  { min: 0,  max: 0,   note: 'Pages free — unlimited bandwidth, 500 builds/mo' },
}

export const COMPETITOR_PRICES_VERIFIED = '2026-08-07';

/**
 * Market context shown next to our prices (27 Sep 2026, price-framing work).
 * A price with no reference point feels arbitrary; the same price next to
 * what the alternatives cost reads as fair. Keep these honest and generic:
 * no competitor names at the point of decision (see the note above).
 *
 * agencyCustomSite: the range the site already cites for a custom small-business
 * site from an Australian agency (/blog/average-cost-website-design-small-business/,
 * homepage FAQ). diyYears: horizon for the DIY-builder comparison, computed
 * from PLATFORM_PRICES.wix so it can't drift from the verified figures.
 */
export const MARKET_CONTEXT = {
    agencyCustomSite: { min: 5000, max: 15000, source: '/blog/average-cost-website-design-small-business/' },
    diyYears: 5,
};

/* ─────────────────────────────────────────────────────────────────────────
   INCLUDED IN EVERY PACKAGE

   Rendered in the left panel of the pricing selector. Every item here is
   included at every tier — if something is genuinely tier-specific it does
   NOT belong in this list.
   ───────────────────────────────────────────────────────────────────────── */

export const ALWAYS_INCLUDED = [
  'Custom design, never a template',
  'Works on every phone and screen',
  'Edit it yourself, no developer needed',
  'SEO built in from day one',
  'You own 100% of the code',
];

/**
 * The full inclusion list. Deliberately NOT in the pricing panel — eleven
 * items with words like "schema" and "Core Web Vitals" reads as a spec sheet
 * and stops being scannable. Use this on service pages or in proposals where
 * someone has already decided to read the detail.
 */
export const FULL_INCLUSIONS = [
  'Custom design — never a template',
  'Mobile responsive on every screen',
  'CMS so you can edit it yourself',
  'SEO built in, not sold separately',
  'Schema markup and structured data',
  'Core Web Vitals optimised',
  'Google Analytics + Search Console',
  'Contact and lead capture forms',
  'Hosting setup, SSL and domain',
  'Training session at handover',
  'You own 100% of the code',
];

/* ─────────────────────────────────────────────────────────────────────────
   PACKAGES — priced by scope
   ───────────────────────────────────────────────────────────────────────── */

export const BUILD_TIERS = [
  {
    id: 'launch',
    name: 'Launch',
    price: 490,
    priceLabel: '$490',
    scope: '1-page website',
    tagline: 'One page that gets the phone ringing.',
    delivery: '3–5 days',
    tag: 'Lowest entry',
    featured: false,
  },
  {
    id: 'starter',
    name: 'Starter',
    price: 800,
    priceLabel: '$800',
    scope: '3–5 pages',
    tagline: 'A credible presence, live in a week.',
    delivery: '5–7 days',
    tag: 'Recommended',
    featured: true,
    payments: 4,
  },
  {
    id: 'business',
    name: 'Business',
    price: 1900,
    priceLabel: '$1,900',
    scope: 'Up to 10 pages',
    tagline: 'Room to explain everything you do.',
    delivery: '2–3 weeks',
    featured: false,
    payments: 4,
  },
  {
    id: 'unlimited',
    name: 'Unlimited',
    price: 3500,
    priceLabel: '$3,500',
    scope: 'Unlimited pages',
    tagline: 'Multi-service, multi-location, no page cap.',
    delivery: '3–4 weeks',
    featured: false,
    payments: 4,
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce',
    price: 4500,
    priceLabel: '$4,500',
    scope: 'Online store',
    tagline: 'Sell online on a platform you control.',
    delivery: '4–6 weeks',
    featured: false,
    payments: 4,
  },
  {
    id: 'application',
    name: 'Application',
    price: 4500,
    priceLabel: '$4,500',
    scope: 'Web or mobile app',
    tagline: 'Dashboards, portals and booking systems.',
    delivery: '4–8 weeks',
    featured: false,
    payments: 4,
  },
  {
    id: 'custom-software',
    name: 'Custom Software',
    price: 5000,
    priceLabel: 'from $5,000',
    scope: 'Scoped per project',
    tagline: 'CRM, ERP, SaaS, AI platforms.',
    delivery: 'Scoped per project',
    featured: false,
  },
];

/** Lowest build price, for "Websites from $X" copy. Never hardcode it. */
export const ENTRY_TIER = BUILD_TIERS.reduce((a, b) => (b.price < a.price ? b : a));

/** "4 × $200" for tiers that can be paid in instalments, else null. */
export const instalmentLabel = (t) =>
  t && t.payments ? `${t.payments} × $${Math.ceil(t.price / t.payments).toLocaleString('en-AU')}` : null;

/**
 * The free homepage design: the first thing every ad and CTA offers.
 * It is a visual design, not a working site; say "design", never "demo site".
 */
export const FREE_DESIGN = {
  turnaround: '2 business days',
  promise: 'See your homepage designed free. Pay only if you love it.',
  short: 'Free homepage design before you pay',
};

/* ─────────────────────────────────────────────────────────────────────────
   MONTHLY — two plans (Oct 2026)

   Care ($79) is the low-friction default: hosting, updates, backups and small
   edits. Care + SEO ($250) adds the monthly growth work. Two plans, not four:
   a small studio should promise only what it can deliver every month.
   ───────────────────────────────────────────────────────────────────────── */

export const CARE_PLAN = {
  id: 'care',
  name: 'Care',
  price: 79,
  priceLabel: '$79',
  period: '/month',
  tagline: 'Hosting, updates and small edits, handled.',
  features: [
    'Hosting, SSL and uptime monitoring',
    'Weekly backups',
    'Security and dependency updates',
    'Up to 30 minutes of small edits a month',
  ],
  note: 'Optional. Month to month, cancel with 30 days notice.',
};

export const RETAINER = {
  id: 'care-seo',
  name: 'Care + SEO',
  price: 250,
  priceLabel: '$250',
  period: '/month',
  tagline: 'Your site stays fast, secure and climbing.',
  features: [
    'Hosting, security and uptime monitoring',
    'Weekly backups',
    'Dependency updates and bug fixes',
    'Technical SEO and on-page optimisation',
    'One new page or blog post monthly',
    'Speed and Core Web Vitals monitoring',
    'Analytics and Search Console review',
    'Monthly growth report',
    'Priority support',
  ],
  note: 'Optional. Month to month, cancel with 30 days notice, no lock-in.',
};

/** Both monthly plans, cheapest first, for rendering. */
export const MONTHLY_PLANS = [CARE_PLAN, RETAINER];

/* ─────────────────────────────────────────────────────────────────────────
   ADD-ONS
   ───────────────────────────────────────────────────────────────────────── */

/**
 * NOT rendered on /pricing/ — the add-on grid was removed to keep that page
 * focused on the price. Available for service pages, proposals and quotes.
 */
export const ADDONS = [
  { name: 'Logo design',           price: '$290',      note: '5 concepts, unlimited revisions, full file set' },
  { name: 'Brand kit',             price: '$490',      note: 'Logo suite, colours, typography, usage guide' },
  { name: 'Copywriting',           price: '$140/page', note: 'Researched, SEO-aware, written to convert' },
  { name: 'Extra page',            price: '$180',      note: 'Added to any package' },
  { name: 'AI chatbot',            price: 'from $900', note: 'Trained on your content, embedded on your site' },
  { name: 'Booking system',        price: 'from $700', note: 'Calendar, reminders, payment capture' },
  { name: 'Multi-language',        price: 'from $600', note: 'Per additional language, with hreflang' },
  { name: 'Migration from Wix/WP', price: 'from $400', note: 'Content and SEO preserved, redirects mapped' },
];

/* ─────────────────────────────────────────────────────────────────────────
   POSITIONING
   ───────────────────────────────────────────────────────────────────────── */

export const NEGOTIABLE_NOTE =
  'These are starting prices for the scope described. If your project sits ' +
  'between two packages, or you only need part of one, tell us — we would ' +
  'rather quote the job you actually have than sell you a package that ' +
  'does not fit.';

/**
 * NOT rendered on /pricing/ — the "why us" grid was removed so the page
 * argues price and scope only. These arguments belong on the homepage,
 * /about/ and /services/ where someone is still deciding.
 */
export const VALUE_PILLARS = [
  {
    icon: '⚡',
    title: 'Genuinely faster',
    body: 'Built on Next.js and deployed to a global edge network. Core Web Vitals green at launch, not after a paid optimisation round. Speed is a ranking factor and a conversion factor.',
  },
  {
    icon: '🔍',
    title: 'SEO built in, not bolted on',
    body: 'Semantic HTML, structured data, clean architecture and internal linking are part of the build. Most agencies sell SEO separately because their platform makes it necessary.',
  },
  {
    icon: '🔑',
    title: 'You own everything',
    body: 'Full source code, the repository, and every account in your name. No proprietary CMS, no hosting you cannot leave. Ask any agency you are considering whether you can take your site elsewhere.',
  },
  {
    icon: '🤖',
    title: 'AI-ready from day one',
    body: 'Chatbots, workflow automation and AI features are things we actually build, not a line on a services page. Your site can grow into software without starting again.',
  },
  {
    icon: '👤',
    title: 'The engineer is on the call',
    body: 'You talk to the person who builds it. Nobody translates your requirement through an account manager, and nothing gets lost between the brief and the build.',
  },
  {
    icon: '📈',
    title: 'Built to make money',
    body: 'If the site brings in one extra job a month it has paid for itself. That is the number that matters, not whether it cost $1,700 or $1,900.',
  },
];

/* ─────────────────────────────────────────────────────────────────────────
   FAQ — rendered on /pricing/ and used for FAQPage schema
   ───────────────────────────────────────────────────────────────────────── */

export const PRICING_FAQS = [
  {
    q: 'Are these prices negotiable?',
    a: 'They are starting prices for the scope described, and yes — we are happy to talk. If your project sits between two packages, or you need most of one but not all of it, tell us on the call and we will quote the job you actually have. What we will not do is quote a low number and then discover extra costs halfway through.',
  },
  {
    q: 'Why is every feature included in every package?',
    a: 'Because withholding a CMS or basic SEO to make a cheaper tier look worse is a sales tactic, not an engineering decision. The work of building those things properly is largely the same regardless of site size. What genuinely changes the cost is scope — how many pages, how much custom functionality — so that is what we price on.',
  },
  {
    q: 'Is the price fixed once we start?',
    a: 'Yes. You get a written scope and an AUD figure before any work begins, and that number does not change unless you ask for something outside the agreed scope — in which case we re-quote it openly rather than quietly adding hours. Payment is split 50% to start and 50% on launch, or on Starter and above you can pay in 4 equal monthly instalments (Starter is 4 × $200).',
  },
  {
    q: 'Can I see the design before I pay anything?',
    a: 'Yes. We design your homepage free, using your real business name, services and photos, usually within 2 business days. If you do not love it, you walk away and pay nothing. It is a design rather than a working site; the build starts only if you decide to go ahead.',
  },
  {
    q: 'Why is the one-page Launch site only $490?',
    a: 'Because a single, well-built page is often all a new business or a tradie needs to start getting calls: what you do, where you work, proof, and a quote form or call button. It is the same custom build and you still own the code, so when you outgrow it we add pages rather than start again.',
  },
  {
    q: 'Do I actually own the website?',
    a: 'Completely. You get the full source code, the repository, and the hosting account in your name. You can move to another developer at any time and nothing breaks. This matters more than it sounds: several Australian agencies build on their own proprietary CMS and hosting, which means leaving them requires rebuilding from scratch. That is rarely disclosed upfront.',
  },
  {
    q: 'What is not included in the price?',
    a: 'Domain registration (roughly $15–20/year), premium stock imagery or paid fonts you specifically request, and third-party subscriptions such as an email marketing platform. Hosting is included for your first year on every package. We tell you about these before you commit rather than after.',
  },
  {
    q: 'Do I have to take the monthly plan?',
    a: 'No. Both monthly plans are optional and cancel with 30 days notice, with no lock-in and no penalty. Care ($79/month) covers hosting, updates, backups and small edits. Care + SEO ($250/month) adds a new page or post every month and ongoing SEO work. If you would rather manage the site yourself, we will show you how at handover.',
  },
  {
    q: 'How does the timezone work if the engineer is in India?',
    a: 'Your day-to-day contact is in Australia and works Australian hours. The practical effect of the time difference is usually positive — work happens overnight your time, so you often wake up to progress. For anything that needs the engineer directly, we schedule calls in the AEST morning.',
  },
  {
    q: 'You have no Google reviews. Why should I trust you?',
    a: 'A fair question, and we are not going to pretend otherwise — the established agencies have hundreds of reviews and we have none yet, because we are new. What we can offer instead is verifiable work: hsracegear.com, mobilearmour.com.au, autozenlyai.com and planet.ltfinance.com are all live sites we built, and you can inspect their speed and code yourself. You can also talk directly to the engineer before committing to anything.',
  },
];
