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
 *  - The Agon template ships stat counters and "our team of experts" copy.
 *    Do not populate them with numbers we cannot support.
 */

export const SITE = {
  name: 'Build First Site',
  url: 'https://buildfirstsite.com',
  description:
    'Web design and development for Australian small businesses. Fixed prices in AUD from $600, modern Next.js builds, and you own the code. A two-person studio with a local contact in Australia.',
  email: 'contact@buildfirstsite.com',
  calendly: 'https://calendly.com/amanpd0/30min',
  // TODO: confirm the AU contact number that should be public.
  phone: '+61 413 146 498',
  social: {
    linkedin: 'https://www.linkedin.com/in/aman-singh-b3a7251a2',
    github: 'https://github.com/amansingh812',
    x: 'https://x.com/buildfirstsite',
  },
};

export const NAV = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services/' },
  { label: 'Work', href: '/work/' },
  { label: 'Pricing', href: '/pricing/' },
  { label: 'About', href: '/about/' },
  { label: 'Guides', href: '/guides/' },
  { label: 'Contact', href: '/contact/' },
];

export const CTA = {
  primary: { label: 'Get a free quote', href: '/contact/' },
  secondary: { label: 'Book a free call', href: SITE.calendly },
};

/** Footer link groups — also the main internal-link hub. */
export const FOOTER_COLUMNS = [
  {
    title: 'Services',
    links: [
      { label: 'Business Websites', href: '/hire-website-builder/' },
      { label: 'E-Commerce Development', href: '/ecommerce-development/' },
      { label: 'AI Chatbots & Booking', href: '/ai-chatbot-development-australia/' },
      { label: 'App Development', href: '/app-development-australia/' },
      { label: 'AI Web Development', href: '/ai-web-development/' },
      { label: 'Next.js Development', href: '/nextjs-development/' },
    ],
  },
  {
    title: 'Industries',
    links: [
      { label: 'Tradie Websites', href: '/tradie-website-design/' },
      { label: 'Restaurant Websites', href: '/restaurant-website-design/' },
      { label: 'Real Estate Websites', href: '/real-estate-website-design/' },
    ],
  },
  {
    title: 'Compare',
    links: [
      { label: 'Wix vs Custom', href: '/wix-vs-custom-website/' },
      { label: 'Squarespace vs Custom', href: '/squarespace-vs-custom-website/' },
      { label: 'Shopify vs Custom', href: '/shopify-vs-custom-website/' },
      { label: 'Webflow vs Custom', href: '/webflow-vs-custom-website/' },
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
    title: 'Learn',
    links: [
      { label: 'Case Studies', href: '/work/' },
      { label: 'Guides', href: '/guides/' },
      { label: 'Blog', href: '/blog/' },
      { label: 'What a Website Costs', href: '/how-much-does-a-website-cost-australia/' },
      { label: 'Developer Rates in Australia', href: '/guides/freelance-web-developer-rates-australia/' },
    ],
  },
];
