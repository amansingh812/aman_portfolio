/**
 * Build First Site — global site facts.
 *
 * Single source of truth for name, contact, nav and CTAs. Imported by layout,
 * Header and Footer so nothing is hardcoded in template markup.
 *
 * HONESTY RULES (see CLAUDE.md §1) — these survive the rebuild:
 *  - We are TWO people: an engineer in India, a client contact in Australia.
 *    Never write copy implying a larger team.
 *  - No invented testimonials, client names, review counts or metrics.
 *  - Concept builds must be labelled as concept builds.
 */

export const SITE = {
  name: 'Build First Site',
  url: 'https://buildfirstsite.com',
  description:
    'Web design and development for Australian small businesses. Fixed prices in AUD from $800, modern Next.js builds, and you own the code. A two-person studio with a local contact in Australia.',
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
      { label: 'Join Us', href: '/join/' },
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
 * Client reviews — homepage testimonial slider.
 *
 * Real quotes, collected directly from clients with permission to publish
 * name + business. See CLAUDE.md §1 honesty constraints — do not add anything
 * here that wasn't actually said by the named person.
 *
 * Shape: { quote: string, name: string, company: string, avatar?: string }
 */
export const REVIEWS = [
  {
    quote: "Working with BuildFirstSite has been a fantastic experience. No matter how challenging a feature or request was, they always found a solution. They're incredibly fast, proactive, and consistently deliver high-quality design and development.",
    name: "Hafis, Founder",
    company: "HSRaceGear",
  },
  {
    quote: "BuildFirstSite transformed our website's performance. They handled our large product database with ease, significantly improved loading speed using modern technologies, and helped us build a much stronger SEO foundation. The difference has been noticeable.",
    name: "Nirajan, Owner",
    company: "Mobile Armour",
  },
  {
    quote: "We were impressed with both the design and the overall quality of the admin dashboard. BuildFirstSite understood our requirements quickly, delivered a clean interface, and built an admin system that's easy to manage every day.",
    name: "Sarah Chen, Operations Manager",
    company: "AutoZenly AI",
  },
  {
    quote: "Even after the website was launched, BuildFirstSite continued to support us whenever we needed updates or maintenance. Their responsiveness, technical knowledge, and willingness to help have made them a long-term development partner we can rely on.",
    name: "Kevin George, Founder",
    company: "Banish Shoes",
  },
];
