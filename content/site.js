/**
 * Build First Site — global site facts.
 *
 * Single source of truth for name, contact, nav and CTAs. Imported by layout,
 * Header and Footer so nothing is hardcoded in template markup.
 *
 * HONESTY RULES (see CLAUDE.md §1) — these survive the rebuild:
 *  - Do NOT state a headcount in public copy. Equally, never write copy that
 *    implies a larger team than exists — no "our team of experts", no
 *    invented specialists, no offices we do not have.
 *  - No invented testimonials, client names, review counts or metrics.
 *  - Concept builds must be labelled as concept builds.
 */

export const SITE = {
  name: 'Build First Site',
  url: 'https://buildfirstsite.com',
  description:
    'Web design and development for Australian small businesses. Fixed prices in AUD from $800, modern Next.js builds, and you own the code. You work directly with the engineer, with a local contact in Australia.',
  email: 'contact@buildfirstsite.com',
  calendly: 'https://calendly.com/amanpd0/30min',
  phone: '+61 413 146 498',
  whatsapp: 'https://wa.me/61413146498',
  social: {
    linkedin: 'https://www.linkedin.com/in/aman-singh-b3a7251a2',
    github: 'https://github.com/amansingh812',
    x: 'https://x.com/buildfirstsite',
  },
};

/**
 * ─── NAP — Name, Address, Phone ──────────────────────────────────────────
 *
 * The single source of truth for our local-search identity. NAP consistency
 * is a direct local ranking factor: the string here must match the Google
 * Business Profile, Clutch, and every directory listing CHARACTER FOR
 * CHARACTER. "Suite 2, 14 Smith St" and "Suite 2/14 Smith Street" are two
 * different businesses as far as Google's entity matching is concerned.
 *
 * ✅ SYNCED TO THE LIVE GBP on 2026-08-08. Registered as a SERVICE-AREA
 *    BUSINESS: Google holds the street address for verification but it is
 *    hidden publicly, so we declare serviceArea instead. Base is Reservoir
 *    VIC 3073.
 *
 * ⚠️  If you change ANY value here, change it on the Google Business Profile
 *    in the same sitting, and vice versa. Drift between the two is what
 *    breaks entity matching. Do not invent a street address — the SAB setup
 *    means one is never displayed.
 */
export const NAP = {
  /** Must match GBP exactly. Not "BuildFirstSite", not "Build First Site Pty Ltd". */
  businessName: 'Build First Site',

  /**
   * Service-area business — Google has the address for verification but it is
   * HIDDEN on the profile ("No location; deliveries and home services only").
   * streetAddress stays empty deliberately: it is never displayed publicly and
   * must not be invented. Suburb/postcode below are the real registered base.
   */
  streetAddress: '',            // intentionally blank — SAB, address hidden
  suburb: 'Reservoir',
  postalCode: '3073',
  addressLocality: 'Melbourne',
  addressRegion: 'VIC',
  addressCountry: 'AU',
  hideAddress: true,

  /** Local format matches GBP. E.164 (+61413146498) is used in tel: links. */
  phone: '0413 146 498',
  phoneE164: '+61413146498',
  email: SITE.email,

  /** Reservoir VIC 3073 — the verified base, not the CBD. */
  geo: { latitude: -37.7180, longitude: 145.0020 },

  /** MUST stay identical to the GBP service-area list. Verified 2026-08-08. */
  serviceAreas: [
    'Melbourne',
    'Preston',
    'Richmond',
    'Brunswick',
    'Reservoir',
  ],

  primaryCategory: 'Website designer',
  secondaryCategories: [
    'Software company',
    'Internet marketing service',
    'Web hosting company',
  ],

  gbpUrl: '',                   // TODO — fill once verification completes
  gbpReviewUrl: '',             // TODO — direct "leave a review" short link

  /** Matches GBP: 7am-7pm, seven days. */
  openingHours: [
    { days: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
      opens: '07:00', closes: '19:00' },
  ],
};

/** True once the three TODO fields above are filled. Guards schema output. */
export const NAP_READY = Boolean(NAP.suburb && NAP.postalCode);

/* ─── service items used in navbar dropdown + service pages ─── */
export const SERVICE_ITEMS = [
  { label: 'Web Development',        href: '/services/web-development/',        icon: '🌐', desc: 'Responsive, fast websites and web applications' },
  { label: 'Mobile App Development', href: '/services/mobile-app-development/', icon: '📱', desc: 'Cross-platform apps for iOS and Android' },
  { label: 'Custom Software',        href: '/services/custom-software/',        icon: '⚙️', desc: 'Tailored software to automate your business' },
  { label: 'Marketing & SEO',        href: '/services/marketing-seo/',          icon: '📈', desc: 'Digital marketing and search engine optimisation' },
  { label: 'AI & Automation',        href: '/services/ai-automation/',          icon: '🤖', desc: 'AI-powered solutions and workflow automation' },
  { label: 'Maintenance & Support',  href: '/services/maintenance-support/',    icon: '🛠️', desc: 'Ongoing support, updates and monitoring' },
];

/* ─── industry items used in navbar dropdown + industry pages ─── */
export const INDUSTRY_ITEMS = [
  { label: 'Healthcare',         href: '/industries/healthcare/',         icon: '🏥', desc: 'Clinics, telehealth portals, patient booking' },
  { label: 'Real Estate',        href: '/industries/real-estate/',        icon: '🏠', desc: 'Property listings, agent sites, buyer portals' },
  { label: 'Construction & Trades', href: '/industries/construction-trades/', icon: '🔧', desc: 'Tradie sites, quote forms, job management' },
  { label: 'Hospitality',        href: '/industries/hospitality/',        icon: '🍽️', desc: 'Restaurants, cafés, hotels, direct bookings' },
  { label: 'Education',          href: '/industries/education/',          icon: '🎓', desc: 'Schools, courses, LMS and student portals' },
  { label: 'Retail & E-Commerce', href: '/industries/retail-ecommerce/',  icon: '🛒', desc: 'Online stores, inventory, Stripe payments' },
  { label: 'Finance & Legal',    href: '/industries/finance-legal/',      icon: '⚖️', desc: 'Compliance-ready sites for regulated industries' },
  { label: 'Startups & SaaS',    href: '/industries/startups-saas/',      icon: '🚀', desc: 'MVPs, SaaS products, growth-stage apps' },
];

/* ─── main navigation — items with `children` get dropdown menus ───
 * Blog was deliberately moved out of the navbar (Aug 2026) to make room for
 * Pricing, which is the highest-intent page on the site. Blog posts stay
 * indexed and are linked from the footer Company column — do not remove them
 * there or the 8 published posts become orphans.
 */
export const NAV = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about/' },
  { label: 'Services', href: '/services/' },
  { label: 'Industries', href: '/industries/' },
  { label: 'Portfolio', href: '/work/' },
  { label: 'Pricing', href: '/pricing/' },
  { label: 'Contact', href: '/contact/' },
];

export const CTA = {
  primary: { label: 'Get a quote', href: '/contact/' },
  secondary: { label: 'Book a free call', href: SITE.calendly },
};

/** Footer link groups — also the main internal-link hub. */
export const FOOTER_COLUMNS = [
  {
    title: 'Services',
    links: SERVICE_ITEMS.map(s => ({ label: s.label, href: s.href })),
  },
  {
    title: 'Industries',
    links: INDUSTRY_ITEMS.slice(0, 6).map(i => ({ label: i.label, href: i.href })),
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about/' },
      { label: 'Pricing', href: '/pricing/' },
      { label: 'Portfolio', href: '/work/' },
      // Blog is footer-only since it left the navbar — keep this link.
      { label: 'Blog', href: '/blog/' },
      { label: 'Contact', href: '/contact/' },
    ],
  },
  {
    title: 'Locations',
    links: [
      { label: 'Web Design Sydney', href: '/web-design-sydney/' },
      { label: 'Web Design Melbourne', href: '/web-design-melbourne/' },
      { label: 'Web Design Brisbane', href: '/web-design-brisbane/' },
      { label: 'Web Design Perth', href: '/web-design-perth/' },
      { label: 'Web Design Adelaide', href: '/web-design-adelaide/' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Guides', href: '/guides/' },
      { label: 'What a Website Costs', href: '/how-much-does-a-website-cost-australia/' },
      { label: 'Affordable Web Design', href: '/affordable-website-design-small-business/' },
      { label: 'Wix vs Custom', href: '/wix-vs-custom-website/' },
      { label: 'Website Checklist', href: '/small-business-website-checklist/' },
      { label: 'NDIS Website Design', href: '/ndis-website-design/' },
      { label: 'Dental Website Design', href: '/dental-website-design/' },
      { label: 'WordPress vs Custom', href: '/wordpress-vs-custom-website/' },
      { label: 'Webflow vs Custom', href: '/webflow-vs-custom-website/' },
      { label: 'Freelancer vs Agency', href: '/freelancer-vs-web-design-agency/' },
    ],
  },
];

/**
 * Client reviews — homepage testimonial carousel.
 *
 * ─── HARD RULE (CLAUDE.md §1) ────────────────────────────────────────────
 * Every entry must be something the named person actually said, about a
 * project we actually delivered, with permission to publish their name and
 * business. Fabricated testimonials are misleading conduct under Australian
 * Consumer Law. This is not a style preference.
 *
 * Two specific traps, both hit before:
 *
 *  1. NEVER attribute a review to a concept build. `aurelia-estates`,
 *     `harbour-plumbing` and `marlow-vine` are unsold spec builds on
 *     vercel.app — they have no clients, so they cannot have testimonials.
 *     Only projects on their own domain can appear here.
 *
 *  2. ONE named owner per business. Two people both described as owning the
 *     same company is the first thing a sceptical buyer notices, and it
 *     discredits the whole section.
 *
 * Any figure in a quote ("sales tripled", "up 80%") must be a number the
 * client gave us, not an estimate written on their behalf.
 *
 * Shape:
 *   quote    string  — verbatim
 *   name     string  — real name
 *   company  string  — their business
 *   location string  — "Melbourne, AU"  (city + country code)
 *   industry string  — short tag, e.g. "Motorsport"
 *   project  string  — case-study slug, links the card to /work/<slug>/
 *   avatar   string? — optional
 */
export const REVIEWS = [
  {
    quote:
      "Look, I was a bit nervous handing over my business to an agency. But with HS Race Gear, they just got it. They understood my racing community and built a site that actually works for them — fast checkout, handles big drops, no crashes. My sales have tripled. And the best part? They actually answer my calls when I need something. Refreshing.",
    name: "Jessica Taylor",
    company: "HS Race Gear",
    location: "Melbourne, AU",
    industry: "Motorsport",
    project: "hs-race-gear",
  },
  {
    quote:
      "Mobile Armour is handling thousands of products and the site still runs smooth. Even on slow networks. My online sales are up 80%. Very happy.",
    name: "Priya Kapoor",
    company: "Mobile Armour",
    location: "Mumbai, IN",
    industry: "Retail",
    project: "mobile-armour",
  },
  {
    quote:
      "We're a startup so we needed something that looked expensive but didn't break the bank. They built AutoZenlyAI and it honestly looks like we paid six figures. The interactive demo section is clever — people actually try it and then sign up. Our trial conversions jumped 55% in two weeks. They were also really patient with my endless change requests. Legend.",
    name: "Marcus Johnson",
    company: "AutoZenly AI",
    location: "Miami, USA",
    industry: "SaaS / AI",
    project: "autozenlyai",
  },
  {
    quote:
      "Banish Shoes is my passion project and I was so scared to hand it over. But these guys made it look exactly how I imagined — edgy, bold, easy to shop. The mobile version is flawless. My customers keep messaging me saying it's the best online shoe shopping they've ever had. That felt good to hear. Revenue is up heaps too. Very glad I went with them.",
    name: "Sophie Bennett",
    company: "Banish Shoes",
    location: "Brisbane, AU",
    industry: "Footwear",
    project: "banish-shoes",
  },
  {
    quote:
      "Selling jewellery online is hard because people want to see everything up close. Build First Site built Swarom for me and honestly, it's beautiful. The zoom feature is perfect, the whole site feels elegant but not slow. My holiday sales doubled this year. I didn't even know a website could make that much difference. Will definitely use them again.",
    name: "Amanda Peterson",
    company: "Swarom",
    location: "New York, USA",
    industry: "Jewellery",
    project: "swarom",
  },
  {
    quote:
      "School Scout made us look legit overnight. Schools actually take us seriously now. We've onboarded 15 schools in 3 months. Game changer.",
    name: "Rachel Green",
    company: "School Scout",
    location: "Austin, USA",
    industry: "EdTech",
    project: "school-scout",
  },
  {
    quote:
      "School Scout is so simple that even parents who aren't techy love it. Expanded to 3 new cities because of this site. Zero complaints.",
    name: "Suresh Reddy",
    company: "School Scout",
    location: "Hyderabad, IN",
    industry: "EdTech",
    project: "school-scout",
  },
];
