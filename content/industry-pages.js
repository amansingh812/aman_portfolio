/**
 * Industry page data — rendered by app/industries/[slug]/page.js.
 * Redesigned 26 Sep 2026 on the same system as the service pages.
 *
 * RULES (CLAUDE.md §1)
 * - No unsourced statistics. Every page used to carry a `stat` line
 *   ("70%+ of healthcare searches happen on mobile", "92% of property buyers…",
 *   "'Near me' searches grew 150% in AU", "72% of startups fail…") with no
 *   source anywhere. All removed. Add one back only with a citation.
 * - `proof.kind`:
 *     'client'  → real client work in this vertical (case-study slugs)
 *     'concept' → a labelled spec build; the page says "concept build"
 *     'none'    → no client and no spec build; the page says so plainly
 * - Prices are references into content/pricing.js, resolved by the template.
 * - "HIPAA" removed: it is US law. Australian clinics are covered by the
 *   Privacy Act 1988 and the Australian Privacy Principles.
 */

const U = (id, alt) => ({ src: `https://images.unsplash.com/${id}?w=1400&q=75&auto=format&fit=crop`, alt })

export const INDUSTRY_PAGES = [
  /* ─────────────────────────── HEALTHCARE ─────────────────────────── */
  {
    slug: 'healthcare',
    title: 'Healthcare',
    metaTitle: 'Healthcare Website Design Australia | Clinics, Booking, Telehealth',
    metaDescription: 'Websites for Australian clinics and allied health: online booking, telehealth pages, privacy-aware forms and local SEO. Fixed AUD pricing from $1,900.',
    eyebrow: 'Healthcare · Australia',
    h1: 'Healthcare website design',
    h1Accent: 'that earns trust and fills appointments',
    hero: 'Clinic and allied-health websites built around the patient journey: find you, trust you, book. Fast on a phone, privacy-aware, and yours to own.',
    chips: [
      { pre: 'From', value: { tier: 'business', field: 'priceLabel' } },
      { pre: 'Booking', value: { addon: 'Booking system' } },
      { value: 'Privacy Act', post: 'aware builds' },
      { pre: 'You', value: 'own the code' },
    ],
    contextImage: U('photo-1629909614456-6b1c5c94cecc', 'Calm clinic waiting area with a couch and plant'),
    intro: 'Patients choose a clinic the way they choose any service: they search, glance at reviews and book with whoever makes it easiest. A fast, mobile-friendly site with online booking does more for a practice than a beautiful site with a buried phone number.',
    needs: [
      { icon: 'calendar', title: 'Online booking', body: 'Patients book directly from your site, connected to your calendar or practice software where it has an API.', href: '/pricing/', link: 'Booking system pricing' },
      { icon: 'monitor', title: 'Telehealth pages', body: 'Clear pages explaining how remote consults work, linking to the video platform you already use.', href: '/services/web-development/', link: 'Web development' },
      { icon: 'shield', title: 'Privacy-aware forms', body: 'Encrypted forms, clear consent wording and minimal data collection, aligned with the Australian Privacy Principles.', href: '/contact/', link: 'Ask about your forms' },
      { icon: 'pin', title: 'Local search', body: 'Google Business Profile, practitioner and service pages so you appear for “near me” searches.', href: '/services/marketing-seo/', link: 'Local SEO' },
      { icon: 'user', title: 'Practitioner profiles', body: 'A page per practitioner with qualifications, services and booking links.', href: '/services/web-development/', link: 'Web development' },
      { icon: 'chat', title: 'After-hours answers', body: 'An AI assistant for common questions (hours, fees, what to bring), with no clinical advice.', href: '/services/ai-automation/', link: 'AI and automation' },
    ],
    journey: [
      { t: 'Finds you', s: 'Search, maps, reviews' },
      { t: 'Checks you out', s: 'Services, practitioners, fees' },
      { t: 'Books', s: 'Online, on a phone' },
      { t: 'Comes back', s: 'Reminders and follow-up' },
    ],
    proof: { kind: 'none', note: 'We haven’t built a healthcare site for a paying client yet, and we won’t pretend otherwise. What we bring is the build itself: booking systems, secure forms and fast mobile pages, which we have shipped for clients in other industries.' },
    pricing: [{ tier: 'business' }, { tier: 'unlimited' }],
    pricingExtras: [{ addon: 'Booking system' }, { addon: 'AI chatbot' }, { retainer: true }],
    faqs: [
      { q: 'How much does a clinic website cost?', a: 'A clinic site with up to 10 pages is $1,900, and larger multi-practitioner sites with no page cap are $3,500. Online booking is an add-on from $700.', href: '/pricing/', link: 'See pricing' },
      { q: 'Can patients book online?', a: 'Yes. We connect to your practice software if it offers an API, or add a standalone booking system with reminders.' },
      { q: 'Is patient data handled securely?', a: 'Forms are encrypted in transit, collect only what you need, and send to accounts you control. We explain where every form submission goes before launch.' },
      { q: 'Do you build NDIS or dental sites?', a: 'Yes, those have their own pages with the specific requirements.', href: '/ndis-website-design/', link: 'NDIS website design' },
    ],
    guides: [
      { tag: 'NDIS', title: 'NDIS website design', href: '/ndis-website-design/' },
      { tag: 'Dental', title: 'Dental website design', href: '/dental-website-design/' },
      { tag: 'Accessibility', title: 'NDIS website accessibility checklist', href: '/blog/ndis-website-accessibility-checklist/' },
      { tag: 'Cost', title: 'How much a website costs in Australia', href: '/how-much-does-a-website-cost-australia/' },
    ],
  },

  /* ─────────────────────────── REAL ESTATE ─────────────────────────── */
  {
    slug: 'real-estate',
    canonicalTo: '/real-estate-website-design/',
    title: 'Real Estate',
    metaTitle: 'Real Estate Web Development Australia | Agent Sites, Property Platforms',
    metaDescription: 'Property listing websites, agent profiles and enquiry flows for Australian real estate. Fast search, mobile-first, fixed AUD pricing.',
    eyebrow: 'Real estate · Australia',
    h1: 'Real estate web development',
    h1Accent: 'that sells the listing, not just shows it',
    hero: 'Property search, listing galleries and enquiry flows that capture serious buyers, so your site works as hard as your agents do.',
    chips: [
      { pre: 'From', value: { tier: 'business', field: 'priceLabel' } },
      { pre: 'Platforms', value: { tier: 'application', field: 'priceLabel' } },
      { value: 'Fast', post: 'property search' },
      { pre: 'You', value: 'own the code' },
    ],
    contextImage: U('photo-1613490493576-7fde63acd811', 'Modern luxury home exterior'),
    intro: 'Buyers search online before they speak to an agent. Your website is the first inspection, so it has to load fast, look the part and make enquiring effortless.',
    needs: [
      { icon: 'grid', title: 'Property listings', body: 'Searchable, filterable listings with galleries, maps and floor plans.', href: '/real-estate-website-design/', link: 'Real estate website design' },
      { icon: 'user', title: 'Agent profiles', body: 'A page per agent with their listings, bio and direct contact.', href: '/services/web-development/', link: 'Web development' },
      { icon: 'filter', title: 'Lead capture', body: 'Per-property enquiries, open-home RSVPs and appraisal requests.', href: '/contact/', link: 'Discuss your leads' },
      { icon: 'link', title: 'Listing feeds', body: 'Connect to your property data feed so listings update automatically, where the provider allows it.', href: '/services/custom-software/', link: 'Custom software' },
      { icon: 'sparkle', title: 'Premium design', body: 'A site that signals the quality of the properties it represents.', href: '/work/aurelia-estates/', link: 'See the concept build' },
      { icon: 'pin', title: 'Suburb pages', body: 'Area guides and local schema so you appear for suburb searches.', href: '/services/marketing-seo/', link: 'Local SEO' },
    ],
    journey: [
      { t: 'Searches', s: 'Suburb, price, beds' },
      { t: 'Shortlists', s: 'Galleries and floor plans' },
      { t: 'Enquires', s: 'One tap per listing' },
      { t: 'Inspects', s: 'Open-home RSVP' },
    ],
    proof: { kind: 'concept', slugs: ['aurelia-estates'], note: 'We haven’t built for a real estate client yet. AURELIA is a concept build that shows how we would approach a prestige agency site.' },
    pricing: [{ tier: 'business' }, { tier: 'application' }],
    pricingExtras: [{ tier: 'unlimited' }, { retainer: true }],
    faqs: [
      { q: 'How much does a real estate website cost?', a: 'An agency site with up to 10 pages is $1,900. A listing platform with search and agent logins is an application build at $4,500.', href: '/pricing/', link: 'See pricing' },
      { q: 'Can listings update automatically?', a: 'Where your listing provider offers a feed or API, yes. We confirm what your provider supports before quoting.' },
      { q: 'Have you built for real estate before?', a: 'Not for a paying client yet. Our AURELIA concept build shows the approach, and the underlying search and enquiry features are ones we’ve shipped elsewhere.', href: '/work/aurelia-estates/', link: 'See the concept' },
      { q: 'Do I own the site?', a: 'Yes. Code, hosting and domain are handed over on completion.' },
    ],
    guides: [
      { tag: 'Real estate', title: 'Real estate website design', href: '/real-estate-website-design/' },
      { tag: 'Concept', title: 'AURELIA concept build', href: '/work/aurelia-estates/' },
      { tag: 'Cost', title: 'How much a website costs in Australia', href: '/how-much-does-a-website-cost-australia/' },
      { tag: 'Pricing', title: 'Every package and add-on', href: '/pricing/' },
    ],
  },

  /* ─────────────────────── CONSTRUCTION & TRADES ─────────────────────── */
  {
    slug: 'construction-trades',
    title: 'Construction & Trades',
    metaTitle: 'Tradie Website Design Australia | Plumber, Electrician, Builder Sites',
    metaDescription: 'Websites for Australian tradies: plumbers, electricians, builders, landscapers. Click-to-call, quote forms, local SEO. Fixed pricing from AU$800.',
    eyebrow: 'Trades · Australia',
    h1: 'Tradie website design',
    h1Accent: 'built to win jobs, not awards',
    hero: 'Trust up front, click-to-call everywhere, quote forms that work on a phone, and local SEO so you show up when someone searches “near me”.',
    chips: [
      { pre: 'From', value: { tier: 'starter', field: 'priceLabel' } },
      { pre: 'Live in', value: { tier: 'starter', field: 'delivery' } },
      { value: 'Click-to-call', post: 'on every section' },
      { pre: 'You', value: 'own the code' },
    ],
    contextImage: U('photo-1676210134188-4c05dd172f89', 'Tradie working on a pipe in a wall'),
    intro: 'When a pipe bursts at 2am, nobody scrolls. They call the first tradie who looks trustworthy and reachable. We build tradie sites around that moment.',
    needs: [
      { icon: 'phone', title: 'Click-to-call', body: 'A tap-to-call button in every section. Your customer is on their phone.', href: '/tradie-website-design/', link: 'Tradie website design' },
      { icon: 'list', title: 'Quote forms', body: 'Short, mobile-friendly forms that capture the job details you need.', href: '/contact/', link: 'Get a quote' },
      { icon: 'shield', title: 'Trust signals', body: 'Licence numbers, insurance and Google reviews visible immediately, not buried in the footer.', href: '/blog/tradie-website-cost/', link: 'Tradie website cost' },
      { icon: 'pin', title: 'Local SEO', body: 'LocalBusiness schema and Google Business Profile so you rank in your service area.', href: '/services/marketing-seo/', link: 'Local SEO' },
      { icon: 'bolt', title: 'Fast on 4G', body: 'A slow site loses emergency callers. We build light pages that load quickly on mobile data.', href: '/website-speed-checker/', link: 'Check your speed' },
      { icon: 'grid', title: 'Service-area pages', body: 'A useful page per region you cover, not a copy-paste page per suburb.', href: '/blog/tradie-suburb-pages-seo/', link: 'Suburb pages done right' },
    ],
    journey: [
      { t: 'Searches', s: '“plumber near me”' },
      { t: 'Trusts', s: 'Licence, reviews, 24/7' },
      { t: 'Calls or quotes', s: 'One tap' },
      { t: 'Books the job', s: 'You get the details' },
    ],
    proof: { kind: 'concept', slugs: ['harbour-plumbing'], note: 'Harbour Plumbing is a concept build that shows our tradie approach. We haven’t published a tradie client case study yet.' },
    pricing: [{ tier: 'starter' }, { tier: 'business' }],
    pricingExtras: [{ addon: 'Booking system' }, { addon: 'Copywriting' }, { retainer: true }],
    faqs: [
      { q: 'How much does a tradie website cost?', a: 'A 3–5 page tradie site is $800 and live in 5–7 days. Up to 10 pages is $1,900.', href: '/blog/tradie-website-cost/', link: 'Tradie website cost guide' },
      { q: 'Will I show up on Google Maps?', a: 'The website helps, but the map pack mostly depends on your Google Business Profile and reviews. We set both up properly.' },
      { q: 'Should I have a page for every suburb?', a: 'No. Thin copy-paste suburb pages can hurt you. A few genuinely useful service-area pages work better.', href: '/blog/tradie-suburb-pages-seo/', link: 'Why' },
      { q: 'Can I update it from my phone?', a: 'Yes, text, photos and job gallery updates can be done without code.' },
    ],
    guides: [
      { tag: 'Trades', title: 'Tradie website design', href: '/tradie-website-design/' },
      { tag: 'Cost', title: 'Tradie website cost', href: '/blog/tradie-website-cost/' },
      { tag: 'SEO', title: 'Suburb pages that rank', href: '/blog/tradie-suburb-pages-seo/' },
      { tag: 'Concept', title: 'Harbour Plumbing concept build', href: '/work/harbour-plumbing/' },
    ],
  },

  /* ─────────────────────────── HOSPITALITY ─────────────────────────── */
  {
    slug: 'hospitality',
    title: 'Hospitality',
    metaTitle: 'Restaurant & Hospitality Web Development Australia | Menus, Bookings',
    metaDescription: 'Websites for Australian restaurants, cafés, bars and hotels. Direct bookings, readable menus, event pages. No PDF menus. Fixed AUD pricing.',
    eyebrow: 'Hospitality · Australia',
    h1: 'Restaurant and hospitality websites',
    h1Accent: 'with direct bookings and a menu people can read',
    hero: 'Keep bookings direct, put the menu on a real page instead of a PDF, and give events their own pages that bring people in.',
    chips: [
      { pre: 'From', value: { tier: 'starter', field: 'priceLabel' } },
      { pre: 'Booking', value: { addon: 'Booking system' } },
      { value: 'No PDF', post: 'menus' },
      { pre: 'You', value: 'own the code' },
    ],
    contextImage: U('photo-1596411710034-7e373bf7438d', 'Wine bottles on a wooden bar shelf'),
    intro: 'Every booking through a marketplace can cost you commission on a guest you earned yourself. A site with direct booking, a searchable menu and event pages keeps more of that margin.',
    needs: [
      { icon: 'calendar', title: 'Direct bookings', body: 'Guests reserve through your own site, with the booking provider of your choice.', href: '/restaurant-website-design/', link: 'Restaurant website design' },
      { icon: 'list', title: 'Real menu pages', body: 'Mobile-friendly menus that search engines can read, replacing slow PDFs.', href: '/work/marlow-vine/', link: 'See the concept build' },
      { icon: 'sparkle', title: 'Event pages', body: 'Dedicated pages for events, set menus and seasonal specials.', href: '/services/web-development/', link: 'Web development' },
      { icon: 'monitor', title: 'Photography-led design', body: 'Full-bleed imagery that captures the feel of the venue.', href: '/services/web-development/', link: 'Web development' },
      { icon: 'pin', title: 'Maps and reviews', body: 'Restaurant schema, hours and location so you appear in local search.', href: '/services/marketing-seo/', link: 'Local SEO' },
      { icon: 'cart', title: 'Online ordering', body: 'Takeaway ordering connected to your site rather than a marketplace, where it makes sense.', href: '/ecommerce-development/', link: 'E-commerce development' },
    ],
    journey: [
      { t: 'Searches', s: '“brunch near me”' },
      { t: 'Reads the menu', s: 'On a phone, not a PDF' },
      { t: 'Books direct', s: 'No marketplace' },
      { t: 'Returns', s: 'Events and specials' },
    ],
    proof: { kind: 'concept', slugs: ['marlow-vine'], note: 'Marlow & Vine is a concept build showing our hospitality approach. We haven’t published a hospitality client case study yet.' },
    pricing: [{ tier: 'starter' }, { tier: 'business' }],
    pricingExtras: [{ addon: 'Booking system' }, { addon: 'Multi-language' }, { retainer: true }],
    faqs: [
      { q: 'How much does a restaurant website cost?', a: 'A 3–5 page site is $800; up to 10 pages with events and multiple menus is $1,900. A booking system is an add-on from $700.', href: '/pricing/', link: 'See pricing' },
      { q: 'Why not just upload a PDF menu?', a: 'PDFs are slow and hard to read on phones, and search engines struggle to index them. A menu page fixes all three.' },
      { q: 'Can I keep my current booking provider?', a: 'Yes. We embed or link the provider you use, or add a direct booking system if you want to leave it.' },
      { q: 'Can staff update specials themselves?', a: 'Yes, menus, specials and events are editable without code.' },
    ],
    guides: [
      { tag: 'Hospitality', title: 'Restaurant website design', href: '/restaurant-website-design/' },
      { tag: 'Concept', title: 'Marlow & Vine concept build', href: '/work/marlow-vine/' },
      { tag: 'Pricing', title: 'Every package and add-on', href: '/pricing/' },
      { tag: 'Checklist', title: 'Small business website checklist', href: '/small-business-website-checklist/' },
    ],
  },

  /* ─────────────────────────── EDUCATION ─────────────────────────── */
  {
    slug: 'education',
    title: 'Education',
    metaTitle: 'Education Web Development Australia | Schools, Courses, Student Portals',
    metaDescription: 'Websites and platforms for Australian schools, training providers and course creators: course catalogues, enrolment forms, student portals. Fixed AUD pricing.',
    eyebrow: 'Education · Australia',
    h1: 'Education web development',
    h1Accent: 'platforms students and parents actually use',
    hero: 'Course discovery, enrolment forms and student portals designed for the people who use them, not just the admin who approves them.',
    chips: [
      { pre: 'Sites from', value: { tier: 'business', field: 'priceLabel' } },
      { pre: 'Portals', value: { tier: 'application', field: 'priceLabel' } },
      { value: 'WCAG', post: 'accessibility built in' },
      { pre: 'You', value: 'own the code' },
    ],
    contextImage: U('photo-1515378791036-0648a3ef77b2', 'Student studying on a laptop'),
    intro: 'Whether you run a school, a training organisation or online courses, your website is how students find you and often how they learn. It needs clear course discovery, simple enrolment and portals that work on a phone.',
    needs: [
      { icon: 'grid', title: 'Course catalogues', body: 'Searchable courses with intake dates, fees and apply buttons.', href: '/services/web-development/', link: 'Web development' },
      { icon: 'user', title: 'Student portals', body: 'Secure logins for materials, schedules and messages.', href: '/services/custom-software/', link: 'Custom software' },
      { icon: 'link', title: 'LMS connections', body: 'Link to Moodle or Canvas, or build a simpler custom learning area.', href: '/services/custom-software/', link: 'Custom software' },
      { icon: 'list', title: 'Enrolment forms', body: 'Multi-step applications with document upload and payment.', href: '/contact/', link: 'Discuss enrolments' },
      { icon: 'shield', title: 'Accessibility', body: 'Built to WCAG 2.1 AA so every student can use it.', href: '/blog/ndis-website-accessibility-checklist/', link: 'Accessibility checklist' },
      { icon: 'filter', title: 'Comparison and matching', body: 'Tools that help families compare options side by side.', href: '/work/school-scout/', link: 'See School Scout' },
    ],
    journey: [
      { t: 'Discovers', s: 'Search and compare' },
      { t: 'Checks details', s: 'Fees, intakes, outcomes' },
      { t: 'Enrols', s: 'Online, with documents' },
      { t: 'Learns', s: 'Portal on any device' },
    ],
    proof: { kind: 'client', slugs: ['school-scout'], note: 'School Scout is a school discovery platform we built for parents in India, with search, side-by-side comparison and AI matching.' },
    pricing: [{ tier: 'business' }, { tier: 'application' }, { tier: 'custom-software' }],
    pricingExtras: [{ addon: 'Multi-language' }, { retainer: true }],
    faqs: [
      { q: 'How much does an education website cost?', a: 'An informational site with up to 10 pages is $1,900. Portals and enrolment systems are application builds at $4,500, and larger platforms start from $5,000.', href: '/pricing/', link: 'See pricing' },
      { q: 'Can you connect to our LMS?', a: 'Usually, yes, where the LMS offers an API or single sign-on. We confirm what yours supports before quoting.' },
      { q: 'Is it accessible?', a: 'We build to WCAG 2.1 AA: keyboard navigation, contrast, alt text and screen-reader-friendly forms.' },
      { q: 'Have you built education platforms before?', a: 'Yes, School Scout, a school discovery and comparison platform.', href: '/work/school-scout/', link: 'Read the case study' },
    ],
    guides: [
      { tag: 'Work', title: 'School Scout case study', href: '/work/school-scout/' },
      { tag: 'Software', title: 'Custom software development', href: '/services/custom-software/' },
      { tag: 'Accessibility', title: 'Accessibility checklist', href: '/blog/ndis-website-accessibility-checklist/' },
      { tag: 'Pricing', title: 'Every package and add-on', href: '/pricing/' },
    ],
  },

  /* ─────────────────────── RETAIL & E-COMMERCE ─────────────────────── */
  {
    slug: 'retail-ecommerce',
    title: 'Retail & E-Commerce',
    metaTitle: 'E-Commerce Development Australia | Custom Online Stores from $4,500',
    metaDescription: 'Custom online stores for Australian retailers: Stripe checkout, inventory, product search, no per-sale platform fees. Fixed AUD pricing from $4,500.',
    eyebrow: 'Retail and e-commerce · Australia',
    h1: 'E-commerce development',
    h1Accent: 'stores you own, with no per-sale platform fees',
    hero: 'Custom product pages, Stripe checkout, inventory and search, on a store you own outright. You keep control of your margins and your customer data.',
    chips: [
      { pre: 'Stores from', value: { tier: 'ecommerce', field: 'priceLabel' } },
      { pre: 'Built in', value: { tier: 'ecommerce', field: 'delivery' } },
      { value: '$0', post: 'per-sale platform fee' },
      { pre: 'You', value: 'own the code' },
    ],
    contextImage: U('photo-1768987439370-bd60d3d0b28b', 'Person shopping online on a phone'),
    intro: 'Hosted store platforms charge a monthly fee and often a cut of each sale. A custom store costs more up front but you own it outright, and the only ongoing costs are hosting and Stripe’s card fees.',
    needs: [
      { icon: 'cart', title: 'Stripe checkout', body: 'Cards, Apple Pay and Google Pay, with no platform fee on top of Stripe’s own.', href: '/ecommerce-development/', link: 'E-commerce development' },
      { icon: 'grid', title: 'Product management', body: 'An admin dashboard for products, variants, stock and pricing.', href: '/work/hs-race-gear/', link: 'See HS Race Gear' },
      { icon: 'filter', title: 'Search and filters', body: 'Fast search by category, price and attributes.', href: '/services/web-development/', link: 'Web development' },
      { icon: 'phone', title: 'Mobile shopping', body: 'Designed for thumbs first, since that’s how most shoppers browse.', href: '/website-speed-checker/', link: 'Check your store’s speed' },
      { icon: 'sparkle', title: 'AI recommendations', body: 'Suggestions based on what a shopper is viewing, and a shopping assistant for product questions.', href: '/work/mobile-armour/', link: 'See Mobile Armour' },
      { icon: 'refresh', title: 'Platform migration', body: 'Move from Wix, WordPress or another platform with SEO and redirects preserved.', href: '/pricing/', link: 'Migration pricing' },
    ],
    journey: [
      { t: 'Finds a product', s: 'Search or recommendation' },
      { t: 'Checks fit', s: 'Details, 3D, assistant' },
      { t: 'Pays', s: 'Stripe, Apple Pay' },
      { t: 'You fulfil', s: 'Orders in your admin' },
    ],
    proof: { kind: 'client', slugs: ['hs-race-gear', 'mobile-armour'], note: 'Two live client stores: HS Race Gear (3D product viewer, made-to-measure orders, custom admin) and Mobile Armour (AI recommendations and a shopping assistant).' },
    pricing: [{ tier: 'ecommerce' }, { tier: 'custom-software' }],
    pricingExtras: [{ addon: 'AI chatbot' }, { addon: 'Migration from Wix/WP' }, { retainer: true }],
    faqs: [
      { q: 'How much does an online store cost?', a: 'A custom store is $4,500 and typically takes 4–6 weeks. Larger builds with custom integrations start from $5,000.', href: '/pricing/', link: 'See pricing' },
      { q: 'Why not use Shopify?', a: 'Shopify is a good fit for many stores. A custom build makes sense when you want no monthly platform fee, full control of checkout, or features Shopify apps handle poorly.', href: '/ecommerce-development/', link: 'Compare options' },
      { q: 'What are the ongoing costs?', a: 'Hosting and Stripe’s card processing fees. There’s no platform subscription and no per-sale fee from us.' },
      { q: 'Can you move my existing store?', a: 'Yes. Products, content and URLs are migrated, with redirects so you keep your rankings. Migration is from $400.' },
    ],
    guides: [
      { tag: 'Work', title: 'HS Race Gear case study', href: '/work/hs-race-gear/' },
      { tag: 'Work', title: 'Mobile Armour case study', href: '/work/mobile-armour/' },
      { tag: 'E-commerce', title: 'E-commerce development', href: '/ecommerce-development/' },
      { tag: 'AI', title: 'AI and automation', href: '/services/ai-automation/' },
    ],
  },

  /* ─────────────────────────── FINANCE & LEGAL ─────────────────────────── */
  {
    slug: 'finance-legal',
    title: 'Finance & Legal',
    metaTitle: 'Finance & Legal Web Development Australia | Secure, Compliant Sites',
    metaDescription: 'Websites for Australian financial advisers, accountants and law firms: secure intake forms, client portals, practitioner profiles. Fixed AUD pricing.',
    eyebrow: 'Finance and legal · Australia',
    h1: 'Websites for finance and legal firms',
    h1Accent: 'professional, secure and built to generate enquiries',
    hero: 'Sites that look the part, handle sensitive information carefully, and bring in qualified enquiries, with the disclaimers and privacy wording your industry expects.',
    chips: [
      { pre: 'Sites from', value: { tier: 'business', field: 'priceLabel' } },
      { pre: 'Client portals', value: { tier: 'application', field: 'priceLabel' } },
      { value: 'Encrypted', post: 'intake forms' },
      { pre: 'You', value: 'own the code' },
    ],
    contextImage: U('photo-1778873750399-338b94f7feda', 'Hand signing a document at a desk'),
    intro: 'Advisers, accountants and law firms work under strict rules on what they say and how they handle client information. The site has to build trust fast without making claims you can’t make.',
    needs: [
      { icon: 'shield', title: 'Careful by default', body: 'Space for your disclaimers, licence details and privacy policy, placed where they belong. Your compliance adviser signs off the wording.', href: '/contact/', link: 'Discuss your requirements' },
      { icon: 'user', title: 'Client portals', body: 'Secure areas for sharing documents and tracking matters.', href: '/services/custom-software/', link: 'Custom software' },
      { icon: 'filter', title: 'Qualified intake', body: 'Intake forms that capture the right details before an enquiry reaches you.', href: '/services/ai-automation/', link: 'AI and automation' },
      { icon: 'edit', title: 'Expert content', body: 'Guides and FAQs that answer what clients search for.', href: '/services/marketing-seo/', link: 'Content and SEO' },
      { icon: 'list', title: 'Practitioner profiles', body: 'A page per adviser or lawyer with specialisations and contact.', href: '/services/web-development/', link: 'Web development' },
      { icon: 'server', title: 'Secure hosting', body: 'HTTPS, encrypted forms, backups and security updates as standard.', href: '/services/maintenance-support/', link: 'Maintenance and support' },
    ],
    journey: [
      { t: 'Researches', s: 'Guides and FAQs' },
      { t: 'Checks credentials', s: 'Practitioner profiles' },
      { t: 'Enquires', s: 'Secure intake form' },
      { t: 'Becomes a client', s: 'Portal access' },
    ],
    proof: { kind: 'none', note: 'We haven’t published a finance or legal case study yet. What we bring are the pieces: secure forms, portals and fast, professional sites we’ve built for clients in other industries.' },
    pricing: [{ tier: 'business' }, { tier: 'application' }, { tier: 'custom-software' }],
    pricingExtras: [{ addon: 'Copywriting' }, { retainer: true }],
    faqs: [
      { q: 'How much does a law firm or accounting website cost?', a: 'A professional site with up to 10 pages is $1,900. Client portals are application builds at $4,500.', href: '/pricing/', link: 'See pricing' },
      { q: 'Do you write compliant copy?', a: 'We write clear, plain-English copy and leave room for required disclaimers, but your compliance adviser or legal team should approve regulated wording.' },
      { q: 'How is client information protected?', a: 'Forms are encrypted in transit and go to accounts you control. Portals use secure logins, and we explain where data is stored before launch.' },
      { q: 'Can clients upload documents?', a: 'Yes, through a secure portal or an upload form with restricted access.' },
    ],
    guides: [
      { tag: 'Software', title: 'Custom software development', href: '/services/custom-software/' },
      { tag: 'Support', title: 'Maintenance and support', href: '/services/maintenance-support/' },
      { tag: 'Cost', title: 'How much a website costs in Australia', href: '/how-much-does-a-website-cost-australia/' },
      { tag: 'Pricing', title: 'Every package and add-on', href: '/pricing/' },
    ],
  },

  /* ─────────────────────────── STARTUPS & SAAS ─────────────────────────── */
  {
    slug: 'startups-saas',
    title: 'Startups & SaaS',
    metaTitle: 'Startup & SaaS Development Australia | MVPs from $5,000',
    metaDescription: 'MVP and SaaS development for Australian startups: auth, billing, dashboards and AI features on a modern stack. Fixed AUD pricing from $5,000, full code ownership.',
    eyebrow: 'Startups and SaaS',
    h1: 'MVP and SaaS development',
    h1Accent: 'ship it, learn, iterate',
    hero: 'We build MVPs and early-stage SaaS products properly, so you can get in front of real users and learn before you run out of runway. Fixed price, full code ownership.',
    chips: [
      { pre: 'Products', value: { tier: 'custom-software', field: 'priceLabel' } },
      { pre: 'Simple apps', value: { tier: 'application', field: 'priceLabel' } },
      { value: 'AI-ready', post: 'from day one' },
      { pre: 'You', value: 'own the code' },
    ],
    contextImage: U('photo-1598520106830-8c45c2035460', 'Product diagrams on a glass whiteboard'),
    intro: 'Most startup ideas are tested too slowly and too expensively. We build the core workflow as a real product, with login, billing and admin, so you learn from real users rather than a demo.',
    needs: [
      { icon: 'bolt', title: 'MVP builds', body: 'The core workflow, built properly, in front of users quickly. A product, not a demo.', href: '/services/custom-software/', link: 'Custom software' },
      { icon: 'server', title: 'SaaS foundations', body: 'Login, teams, subscription billing and admin dashboards, ready for paying users.', href: '/work/autozenlyai/', link: 'See AutoZenlyAI' },
      { icon: 'sparkle', title: 'AI features', body: 'LLM-powered features and multi-model setups built into the product.', href: '/services/ai-automation/', link: 'AI and automation' },
      { icon: 'flow', title: 'Architecture that grows', body: 'Clean APIs and infrastructure that scale with users.', href: '/nextjs-development/', link: 'Next.js development' },
      { icon: 'monitor', title: 'Launch pages', body: 'Pre-launch landing pages to test demand and collect sign-ups.', href: '/services/web-development/', link: 'Web development' },
      { icon: 'phone', title: 'Mobile apps', body: 'iOS and Android from one codebase when the product needs the stores.', href: '/services/mobile-app-development/', link: 'Mobile apps' },
    ],
    journey: [
      { t: 'Scope', s: 'One core workflow' },
      { t: 'Build', s: 'Weekly working releases' },
      { t: 'Launch', s: 'Real users, real data' },
      { t: 'Iterate', s: 'Build what they use' },
    ],
    proof: { kind: 'client', slugs: ['autozenlyai'], note: 'AutoZenlyAI is a live SaaS product we built: six AI providers behind one interface, a Redis-backed scheduler and real-time analytics.' },
    pricing: [{ tier: 'application' }, { tier: 'custom-software' }],
    pricingExtras: [{ tier: 'business' }, { addon: 'AI chatbot' }, { retainer: true }],
    faqs: [
      { q: 'How much does an MVP cost?', a: 'Simple applications are $4,500. Most SaaS MVPs are custom software from $5,000, quoted against a written scope.', href: '/pricing/', link: 'See pricing' },
      { q: 'Do I own the code and IP?', a: 'Yes. The repository, infrastructure accounts and all code are yours on completion.' },
      { q: 'Can you add AI features?', a: 'Yes, we’ve shipped multi-provider AI in production, including Claude, GPT-4 and Gemini behind one interface.', href: '/work/autozenlyai/', link: 'See AutoZenlyAI' },
      { q: 'What happens after launch?', a: 'You can continue with us, hire your own team, or hand it to any developer. Nothing ties you to us.' },
    ],
    guides: [
      { tag: 'Work', title: 'AutoZenlyAI case study', href: '/work/autozenlyai/' },
      { tag: 'Software', title: 'Custom software development', href: '/services/custom-software/' },
      { tag: 'AI', title: 'AI web development', href: '/ai-web-development/' },
      { tag: 'Mobile', title: 'Mobile app development', href: '/services/mobile-app-development/' },
    ],
  },
];

export function getIndustryPage(slug) { return INDUSTRY_PAGES.find((x) => x.slug === slug); }
