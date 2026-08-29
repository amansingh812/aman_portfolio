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
 * ── POSITIONING ──────────────────────────────────────────────────────────
 * We price at PARITY with the established Australian agencies, not below.
 * Undercutting was considered and rejected: at $810 against Havealook's $995
 * the buyer does not think "great value", they think "why is it cheaper?"
 *
 * We win on what is verifiable — modern stack, genuinely faster sites, SEO
 * built in at development time, you own the code, AI-ready, direct access to
 * the engineer. Never make "cheaper than X" the headline.
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
export const COMPETITOR_PRICES_VERIFIED = '2026-08-07';

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
    id: 'starter',
    name: 'Starter',
    price: 800,
    priceLabel: '$800',
    scope: '3–5 pages',
    tagline: 'A credible presence, live in a week.',
    delivery: '5–7 days',
    tag: 'Basic start plan',
    featured: false,
  },
  {
    id: 'business',
    name: 'Business',
    price: 1900,
    priceLabel: '$1,900',
    scope: 'Up to 10 pages',
    tagline: 'Room to explain everything you do.',
    delivery: '2–3 weeks',
    tag: 'Most popular',
    featured: true,
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

/* ─────────────────────────────────────────────────────────────────────────
   MONTHLY — one plan, not a ladder

   Competitors run three or four SEO tiers. We run one, because a small
   studio should promise one thing it can genuinely deliver every month
   rather than four it cannot.
   ───────────────────────────────────────────────────────────────────────── */

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
    a: 'Yes. You get a written scope and an AUD figure before any work begins, and that number does not change unless you ask for something outside the agreed scope — in which case we re-quote it openly rather than quietly adding hours. Payment is split 50% to start and 50% on launch.',
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
    a: 'No. Care + SEO is optional and cancels with 30 days notice. There is no lock-in and no penalty. Most clients take it because a site that is never updated stops ranking within months, but if you would rather manage it yourself we will show you how at handover.',
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
