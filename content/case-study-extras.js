/**
 * Extra sections for the redesigned case-study template (26 Sep 2026).
 * Keyed by case-study slug; rendered by app/work/[slug]/page.js alongside
 * content/case-studies.js. Everything here is optional per project.
 *
 * RULES (CLAUDE.md §1)
 * - `concept: true` → the template labels the page "Concept build, not client
 *   work" in the hero, facts, related cards and schema.
 * - `unverifiedResults` lists result LABELS that are hidden until someone can
 *   say how they were measured. Mobile Armour's +20% / −20% were published
 *   with no recorded source; the §7 open question on real before/after numbers
 *   is still open. Remove a label from this list only with the source noted.
 * - `useCases` and `flow` are written from each project's own challenge and
 *   approach text: they reframe what was built, they don't add facts.
 * - `contextImage` is an Unsplash photo (free licence), always captioned as
 *   illustrative so it can't be read as the client's own product or premises.
 *
 * TODO (Aman): real screenshots per build block — chatbot, recommendations,
 * PageSpeed, admin panel — go in `shots`: [{ src, alt, caption }].
 */

const U = (id, alt) => ({ src: `https://images.unsplash.com/${id}?w=1400&q=75&auto=format&fit=crop`, alt })

export const CASE_STUDY_EXTRAS = {
  'hs-race-gear': {
    summary: 'A premium motorsport store where shoppers can inspect race wear in 3D, order made-to-measure, and pay through a checkout the brand owns outright.',
    contextImage: U('photo-1758739956760-c51ceafe0fcd', 'Racing driver in helmet and race suit'),
    useCases: [
      { who: 'The careful buyer', title: '“Is this worth the money?”', body: 'Spending serious money on race wear and needs to see exactly what arrives.', fix: 'A 3D viewer to rotate and inspect gear from every angle.' },
      { who: 'The made-to-measure customer', title: '“Small, medium or large won’t fit me”', body: 'Race suits are cut to the body, so generic sizing loses the sale.', fix: 'Measurement forms attached directly to each order.' },
      { who: 'The store owner', title: '“I need to run this myself”', body: 'Products, stock and incoming orders spread across tools.', fix: 'A custom admin dashboard for day-to-day running.' },
    ],
    flow: [
      { t: 'Shopper', s: 'inspects in 3D' },
      { t: 'Store front end', s: 'Next.js · Three.js' },
      { t: 'Measurements', s: 'validated per order' },
      { t: 'Checkout', s: 'Stripe' },
      { t: 'Admin + orders', s: 'MongoDB' },
    ],
    relatedServices: [
      { href: '/ecommerce-development/', label: 'E-commerce development' },
      { href: '/services/web-development/', label: 'Web development' },
      { href: '/services/custom-software/', label: 'Custom admin dashboards' },
    ],
  },

  'mobile-armour': {
    summary: 'A large catalogue of phone accessories, rebuilt so shoppers find the right product for their exact device quickly and check out on their phone without friction.',
    contextImage: U('photo-1542219550-76864b1bc385', 'Assorted phone cases and accessories'),
    unverifiedResults: ['Engagement', 'Load time'],
    useCases: [
      { who: 'The unsure shopper', title: '“Will this fit my phone?”', body: 'Doesn’t know their exact model number and gives up on a long category list.', fix: 'A shopping assistant that answers compatibility questions in plain language.' },
      { who: 'The browser', title: '“Show me what goes with this”', body: 'Looking at a case and open to more, but the old “related items” were static.', fix: 'AI recommendations based on what they are actually viewing.' },
      { who: 'The on-the-go buyer', title: '“Just let me pay”', body: 'Shopping on a phone, on mobile data, with little patience for slow pages.', fix: 'A faster front end and a short Stripe checkout built for mobile.' },
    ],
    flow: [
      { t: 'Shopper’s phone', s: 'browses, asks, buys' },
      { t: 'Store front end', s: 'Next.js · Tailwind' },
      { t: 'AI layer', s: 'OpenAI recs + chat' },
      { t: 'Checkout', s: 'Stripe' },
      { t: 'Products + orders', s: 'MongoDB' },
    ],
    relatedServices: [
      { href: '/services/ai-automation/', label: 'AI and automation' },
      { href: '/ecommerce-development/', label: 'E-commerce development' },
      { href: '/ai-web-development/', label: 'AI web development' },
    ],
  },

  autozenlyai: {
    summary: 'A SaaS product that puts six AI providers behind one interface, schedules content across platforms and reports results in real time.',
    contextImage: U('photo-1562577309-4932fdd64cd1', 'Social media app icons on a sign'),
    useCases: [
      { who: 'The content writer', title: '“Which AI is best for this post?”', body: 'Each model has its own strengths and its own dashboard.', fix: 'Pick Claude, GPT-4, Gemini, Mistral, Cohere or Groq from one place.' },
      { who: 'The social manager', title: '“Did it actually go out?”', body: 'Scheduling across platforms breaks quietly.', fix: 'A visual scheduler backed by Redis so posts fire on time.' },
      { who: 'The team lead', title: '“What’s working?”', body: 'Results live in yet another tool.', fix: 'Real-time analytics in the same dashboard.' },
    ],
    flow: [
      { t: 'User', s: 'writes and schedules' },
      { t: 'Web app', s: 'Next.js' },
      { t: 'AI router', s: '6 providers, one API' },
      { t: 'Job queue', s: 'Redis' },
      { t: 'Backend', s: 'FastAPI' },
    ],
    relatedServices: [
      { href: '/services/custom-software/', label: 'Custom software' },
      { href: '/services/ai-automation/', label: 'AI and automation' },
      { href: '/ai-web-development/', label: 'AI web development' },
    ],
  },

  'aurelia-estates': {
    concept: true,
    summary: 'A concept build for a prestige real-estate brand: refined design, fast property search and viewing enquiries straight from each listing.',
    contextImage: U('photo-1613490493576-7fde63acd811', 'Modern luxury home exterior'),
    useCases: [
      { who: 'The prestige buyer', title: '“Does this agency feel premium?”', body: 'A template site undermines a high-end brand at first glance.', fix: 'Considered typography and motion that read as prestige.' },
      { who: 'The focused searcher', title: '“Only show me what fits”', body: 'Endless scrolling through a high-value portfolio.', fix: 'Advanced search and filters by the criteria that matter.' },
    ],
    relatedServices: [
      { href: '/real-estate-website-design/', label: 'Real estate website design' },
      { href: '/services/web-development/', label: 'Web development' },
    ],
  },

  'harbour-plumbing': {
    concept: true,
    summary: 'A concept build for a 24/7 emergency plumber, designed around one goal: turning local searchers into phone calls.',
    contextImage: U('photo-1676210134188-4c05dd172f89', 'Plumber working on a pipe in a wall'),
    unverifiedResults: ['Lighthouse'],
    useCases: [
      { who: 'The 2am emergency', title: '“I need someone now”', body: 'Nobody scrolls in an emergency; they call the first trustworthy plumber.', fix: 'Trust badges, a 24/7 promise and tap-to-call on every section.' },
      { who: 'The “near me” searcher', title: '“Plumber near me”', body: 'Most visitors arrive from a local Google search.', fix: 'LocalBusiness and FAQ schema plus a reviews strip.' },
    ],
    relatedServices: [
      { href: '/tradie-website-design/', label: 'Tradie website design' },
      { href: '/services/marketing-seo/', label: 'Local SEO' },
    ],
  },

  'marlow-vine': {
    concept: true,
    summary: 'A concept build for a café and wine bar: an editorial site with a readable menu and direct, commission-free table bookings.',
    contextImage: U('photo-1596411710034-7e373bf7438d', 'Wine bottles on a wooden shelf'),
    useCases: [
      { who: 'The phone browser', title: '“What’s on the menu?”', body: 'A menu PDF is slow and unreadable on a phone.', fix: 'A fast, tabbed menu that search engines can also index.' },
      { who: 'The venue owner', title: '“Why pay commission on our own diners?”', body: 'Booking marketplaces charge per cover.', fix: 'Direct table bookings that keep the full margin.' },
    ],
    relatedServices: [
      { href: '/restaurant-website-design/', label: 'Restaurant website design' },
      { href: '/services/web-development/', label: 'Web development' },
    ],
  },

  'banish-shoes': {
    summary: 'A WordPress store for made-to-order leather footwear, with ongoing maintenance since launch.',
    contextImage: U('photo-1614252235316-8c857d38b5f4', 'Brown leather lace-up shoes'),
    relatedServices: [
      { href: '/services/maintenance-support/', label: 'Maintenance and support' },
      { href: '/ecommerce-development/', label: 'E-commerce development' },
    ],
  },

  swarom: {
    summary: 'A Next.js storefront for made-to-order, personalised silver jewellery.',
    contextImage: U('photo-1590703160323-ac5d3fc14089', 'Silver ring on a white surface'),
    relatedServices: [
      { href: '/ecommerce-development/', label: 'E-commerce development' },
      { href: '/services/web-development/', label: 'Web development' },
    ],
  },

  'school-scout': {
    summary: 'A school discovery platform that lets parents search, compare side by side and shortlist with AI matching.',
    contextImage: U('photo-1721814055224-d7165bf5238b', 'School building with many windows'),
    unverifiedResults: ['Schools listed'],
    useCases: [
      { who: 'The overwhelmed parent', title: '“Too many tabs open”', body: 'Fees, boards and facilities scattered across dozens of sites.', fix: 'Side-by-side comparison in one view.' },
      { who: 'The undecided parent', title: '“Where do I even start?”', body: 'Thousands of listings and no way to narrow them.', fix: 'Filters by city, board and budget, plus AI matching.' },
    ],
    relatedServices: [
      { href: '/services/custom-software/', label: 'Custom software' },
      { href: '/services/ai-automation/', label: 'AI and automation' },
    ],
  },
}

export function getCaseStudyExtras(slug) { return CASE_STUDY_EXTRAS[slug] || {} }
