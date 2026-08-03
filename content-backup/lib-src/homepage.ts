/**
 * Homepage content model — agency positioning.
 *
 * Structure follows: problem → outcome → proof → offer → objections → action.
 * See CLAUDE.md §1 for the honesty constraints that govern this file:
 *  - No invented testimonials, client names, review counts or metrics.
 *  - Concept builds must be labelled as concept builds.
 *  - "We" = two people (Aman in India, brother in Australia). Never imply more.
 */

export const HERO = {
  eyebrow: 'Web design & development · Australia',
  h1Lead: 'Websites that bring',
  h1Accent: 'Australian businesses',
  h1Trail: 'more enquiries.',
  sub:
    'A two-person studio: a senior engineer who builds everything, and a local contact in Australia. Fixed prices in AUD, published upfront. You own the code.',
  priceAnchor: 'Landing pages from $600 · Business sites from $2,000 · E-commerce from $4,000',
  primaryCta: { label: 'Get a free quote', href: '#contact' },
  secondaryCta: { label: 'Book a free call', href: 'https://calendly.com/amanpd0/30min' },
  /** Verifiable facts only — no résumé metrics, no unverifiable percentages. */
  facts: [
    { value: 'Fixed', label: 'AUD pricing, upfront' },
    { value: '2 wks', label: 'Typical business site' },
    { value: '100%', label: 'Code ownership' },
  ],
};

/** Real client sites only — every URL is publicly verifiable. */
export const REAL_CLIENTS = [
  { name: 'HS Race Gear', sector: 'Motorsport e-commerce', url: 'https://www.hsracegear.com', country: '🇦🇺' },
  { name: 'Mobile Armour', sector: 'AI-powered retail', url: 'https://mobilearmour.com.au', country: '🇦🇺' },
  { name: 'AutoZenlyAI', sector: 'AI SaaS', url: 'https://www.autozenlyai.com', country: '🌐' },
  { name: 'L&T Finance', sector: 'Enterprise fintech', url: 'https://planet.ltfinance.com', country: '🌐' },
];

export const PROBLEMS = {
  eyebrow: 'The problem',
  heading: 'Most small business websites quietly lose customers',
  intro:
    'Not dramatically. They just sit there — slow on a phone, invisible on Google, and impossible to update without paying someone.',
  items: [
    {
      title: 'Nobody can find it',
      body: 'It was built to look nice, not to be found. No structured data, no local SEO, no pages targeting what your customers actually search.',
    },
    {
      title: 'It is slow on a phone',
      body: 'About two thirds of Australian traffic is mobile. A site that takes five seconds to load on 4G loses most of those visitors before they see anything.',
    },
    {
      title: 'Enquiries go nowhere',
      body: 'A contact form buried at the bottom, no click-to-call, nothing that captures the person who visited at 9pm and moved on to the next result.',
    },
    {
      title: 'You are renting it',
      body: 'Monthly platform fees forever, a design locked to a template, and no way to move without starting again. You never actually owned it.',
    },
  ],
};

export interface ServiceCard {
  title: string;
  body: string;
  href: string;
  price?: string;
}

/** Homepage services grid — also the main internal-link hub to service pages. */
export const SERVICE_CARDS: ServiceCard[] = [
  {
    title: 'Business Websites',
    body: 'Multi-page sites for trades, professional services, clinics and retail — built to turn visitors into enquiries, with local SEO from day one.',
    href: '/hire-website-builder/',
    price: 'from $2,000',
  },
  {
    title: 'E-Commerce Stores',
    body: 'Custom Stripe-powered stores with real inventory and order management. No platform commission on every sale.',
    href: '/ecommerce-development/',
    price: 'from $4,000',
  },
  {
    title: 'AI Chatbots & Booking',
    body: 'Assistants that qualify enquiries and book jobs straight into your calendar — including the ones that arrive at 9pm.',
    href: '/ai-chatbot-development-australia/',
    price: 'from $2,500',
  },
  {
    title: 'App Development',
    body: 'Web apps, dashboards, booking systems and cross-platform mobile apps. Usually cheaper than you expect — we will tell you if you do not need native.',
    href: '/app-development-australia/',
    price: 'from $6,500',
  },
  {
    title: 'AI Web Development',
    body: 'OpenAI, Claude and Gemini built into production applications where they do a specific job — not bolted on as a gimmick.',
    href: '/ai-web-development/',
  },
  {
    title: 'Next.js Development',
    body: 'The modern React stack used by Vercel and OpenAI. Fast by default, excellent for SEO, and a genuine performance edge over page builders.',
    href: '/nextjs-development/',
  },
];

export const INDUSTRIES = [
  { label: 'Tradies & home services', href: '/tradie-website-design/' },
  { label: 'Restaurants & cafés', href: '/restaurant-website-design/' },
  { label: 'Real estate', href: '/real-estate-website-design/' },
];

export const PROCESS = {
  eyebrow: 'How it works',
  heading: 'No surprises, at any point',
  steps: [
    {
      title: 'Free call',
      body: 'Thirty minutes to understand what you actually need. If a cheaper option would serve you better, we say so on this call.',
    },
    {
      title: 'Fixed quote in 24 hours',
      body: 'A written scope and a fixed price in AUD. Clear about what is included and what is not, so the number does not move later.',
    },
    {
      title: 'Build in the open',
      body: 'A live staging link from the first week. You watch it come together and give feedback as it happens — no month-long silence.',
    },
    {
      title: 'Launch & handover',
      body: 'We deploy, hand over the repository and every account, and support you for 30 days. No mandatory retainer afterwards.',
    },
  ],
};

/**
 * The two-person story. This is the trust section — it replaces the old
 * "About Us / studio" copy and the CV timeline. Accurate by design.
 */
export const TEAM = {
  eyebrow: 'Who you are working with',
  heading: 'Two people. You will know both of them.',
  intro:
    'Build First Site is not an agency with account managers. It is two brothers — one who writes every line of code, and one who is your point of contact in Australia. That is the whole company, and it is why the pricing works.',
  members: [
    {
      name: 'Aman',
      role: 'Engineer — builds everything',
      location: 'India',
      body: 'Seven years in software, including enterprise fintech at L&T Finance. Full-stack web, mobile, and AI integration. The person who writes your code is the person you talk to about it — there is nobody in between.',
    },
    {
      name: 'Your local contact',
      role: 'Client contact — calls, quotes, paperwork',
      location: 'Australia',
      body: 'Based in Australia, in your timezone, for calls, quotes and anything administrative. A real person on a real phone number when you need one.',
    },
  ],
  honestyNote:
    'We are upfront about this because plenty of offshore studios present themselves as local Australian agencies. We would rather tell you exactly how it works: the engineering happens in India, your contact is here, and the price reflects that.',
};

/** Objection-handling. These are the questions that actually block a sale. */
export const OBJECTIONS = [
  {
    q: 'You are based in India — how does that work for me?',
    a: 'Your contact is in Australia and works in your timezone for calls and quotes. The engineering happens in India, which is exactly why a business website costs $2,000 here rather than $10,000 at a Sydney agency. You get a live staging link from week one, so you can see progress at any time rather than taking anyone on trust.',
  },
  {
    q: 'What if I need changes after launch?',
    a: 'Thirty days of support is included. After that, changes are quoted per piece — there is no mandatory monthly retainer. Because you own the code outright, you can also take it to any other developer.',
  },
  {
    q: 'Do I really own the website?',
    a: 'Yes. The full repository and every account are transferred to you on completion. No platform lock-in, no subscription to us, no hostage situation if you want to move on.',
  },
  {
    q: 'How do I know the quote will not creep up?',
    a: 'The scope and price are agreed in writing before any work starts, and payment is split 50% to begin and 50% on launch. If you ask for something outside the agreed scope we re-quote it openly rather than quietly adding hours.',
  },
  {
    q: 'What if I only need something small?',
    a: 'A single landing page starts at $600. If what you need is genuinely simpler than a custom build — sometimes a DIY builder is the right answer for a brand-new business — we will tell you that rather than sell you something you do not need yet.',
  },
];

export const FINAL_CTA = {
  heading: 'Tell us what your business needs',
  body: 'A fixed-price quote within 24 hours, and an honest answer if we think there is a cheaper way to get you there.',
};
