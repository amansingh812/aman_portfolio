export interface ComparisonRow {
  dimension: string;
  platform: string;
  custom: string;
}

export interface Comparison {
  slug: string;
  competitor: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  h1: string;
  intro: string[];
  verdict: string;
  bestForPlatform: string[];
  bestForCustom: string[];
  rows: ComparisonRow[];
  costNote: string;
  faqs: { q: string; a: string }[];
}

export const COMPARISONS: Comparison[] = [
  {
    slug: 'squarespace-vs-custom-website',
    competitor: 'Squarespace',
    metaTitle: 'Squarespace vs Custom Website (2026): Which Is Right for Your Business?',
    metaDescription:
      'An honest comparison of Squarespace vs a custom-built website — design flexibility, SEO, performance, cost, and ownership — to help you choose the right option for your business.',
    keywords: ['squarespace vs custom website', 'squarespace alternative', 'is squarespace good for business', 'custom website vs website builder'],
    h1: 'Squarespace vs a Custom Website',
    intro: [
      'Squarespace is one of the most popular all-in-one website builders, loved for its polished templates and simple editor. A custom website, by contrast, is designed and coded specifically for your business. Both can produce a good-looking site — the real difference is in flexibility, performance, ownership, and where the costs land over time.',
      'This is an honest breakdown of where each option wins, so you can pick based on your actual goals rather than marketing. There is no single right answer — only the right answer for your situation.',
    ],
    verdict:
      'Squarespace is an excellent choice if you want to get a clean, professional site live quickly and are happy to work within its templates and monthly subscription. A custom website makes more sense once you need unique functionality, top-tier performance and SEO, or you simply want to own your site outright with no recurring platform fee.',
    bestForPlatform: [
      'You need a professional site live fast and on a tight budget',
      'Your needs fit a standard template — a few pages, a blog, basic forms',
      'You are comfortable editing the site yourself and paying monthly',
      'You do not expect complex custom features any time soon',
    ],
    bestForCustom: [
      'You want a design that is genuinely yours, not a recognisable template',
      'You need custom features — bookings, calculators, integrations, dashboards',
      'Performance and technical SEO are a priority for competitive search terms',
      'You want to own the code with no ongoing platform subscription or lock-in',
    ],
    rows: [
      { dimension: 'Design flexibility', platform: 'Great templates, but you work within their structure', custom: 'Fully bespoke — anything you can design can be built' },
      { dimension: 'Performance', platform: 'Good, but shared platform overhead and extra scripts', custom: 'Optimised — typically faster Core Web Vitals scores' },
      { dimension: 'SEO control', platform: 'Solid basics, limited deep technical control', custom: 'Full control of markup, schema, speed and structure' },
      { dimension: 'Custom features', platform: 'Limited to what the platform and plugins allow', custom: 'Unlimited — booking systems, integrations, custom logic' },
      { dimension: 'Ongoing cost', platform: 'Monthly subscription, forever', custom: 'One-time build; you only pay for hosting (often minimal)' },
      { dimension: 'Ownership', platform: 'You rent the site on their platform', custom: 'You own 100% of the code and can host it anywhere' },
      { dimension: 'Time to launch', platform: 'Fast — days if you do it yourself', custom: 'Longer — usually 1–3 weeks with a developer' },
    ],
    costNote:
      'Squarespace costs less upfront but you pay every month for as long as the site is live. A custom site costs more to build once, then typically only inexpensive hosting after that — so over a few years the total cost often evens out, and you own the asset at the end.',
    faqs: [
      { q: 'Is Squarespace good for SEO?', a: 'Squarespace covers the SEO basics well — clean templates, mobile-friendly pages, and simple meta editing. For competitive keywords where speed and deep technical SEO matter, a custom build gives you more control over performance, structured data, and site architecture.' },
      { q: 'Can I move off Squarespace later?', a: 'You can export some content, but the design and any Squarespace-specific features do not transfer — you would rebuild the site elsewhere. This is why some businesses choose a custom, portable build from the start.' },
      { q: 'Is a custom website worth it over Squarespace?', a: 'It depends on your goals. If you need unique functionality, best-in-class performance, or full ownership with no monthly fee, a custom site is usually worth it. For a simple brochure site you plan to edit yourself, Squarespace can be the smarter, cheaper choice.' },
    ],
  },
  {
    slug: 'shopify-vs-custom-website',
    competitor: 'Shopify',
    metaTitle: 'Shopify vs Custom E-Commerce Website (2026): Which Should You Choose?',
    metaDescription:
      'Shopify vs a custom-built online store compared honestly — fees, flexibility, performance, ownership and total cost — so you can choose the right foundation for your e-commerce business.',
    keywords: ['shopify vs custom website', 'shopify alternative', 'custom ecommerce vs shopify', 'shopify transaction fees'],
    h1: 'Shopify vs a Custom E-Commerce Website',
    intro: [
      'Shopify is the default answer for many people starting an online store — and for good reason. It handles hosting, payments, inventory and security out of the box, so you can start selling quickly. A custom e-commerce build gives you a store designed and coded around your exact products and workflow, with no platform taking a slice of every sale.',
      'The right choice depends on your margins, your catalogue, and how unique your selling experience needs to be. Here is a fair comparison of both.',
    ],
    verdict:
      'Shopify is hard to beat for getting a reliable store live quickly, especially early on. A custom store becomes compelling once transaction fees and app subscriptions add up, when you need a bespoke buying experience, or when you want to stop renting your storefront and own it outright.',
    bestForPlatform: [
      'You are launching and want to start selling this week',
      'You value having hosting, security and payments handled for you',
      'A standard storefront and checkout flow suits your products',
      'You would rather pay monthly than invest upfront',
    ],
    bestForCustom: [
      'Your sales volume makes per-transaction and app fees expensive',
      'You need a unique buying experience (3D viewers, made-to-measure, custom flows)',
      'You want maximum performance and SEO for product and category pages',
      'You want to own the store and its data with no platform lock-in',
    ],
    rows: [
      { dimension: 'Setup speed', platform: 'Very fast — sell within days', custom: 'Longer — a full store is typically 4–6 weeks' },
      { dimension: 'Transaction fees', platform: 'Payment fees, plus extra unless using Shopify Payments', custom: 'Only your payment processor’s standard rate' },
      { dimension: 'Monthly cost', platform: 'Subscription plus paid apps for extra features', custom: 'Mainly hosting; features are built in, not rented' },
      { dimension: 'Custom experiences', platform: 'Constrained by themes and the app ecosystem', custom: 'Anything — bespoke viewers, configurators, checkouts' },
      { dimension: 'Performance', platform: 'Good, but themes and apps add weight', custom: 'Lean and fast; you control every asset' },
      { dimension: 'Ownership & data', platform: 'You operate within Shopify’s ecosystem', custom: 'Full ownership of code, data and customer relationships' },
      { dimension: 'Maintenance', platform: 'Handled by Shopify', custom: 'You (or a retainer) handle updates and hosting' },
    ],
    costNote:
      'Shopify’s costs scale with your success — more sales and more apps mean higher monthly bills and transaction fees. A custom store is a larger upfront investment but keeps ongoing costs low, which is why high-volume merchants often move to custom builds as they grow.',
    faqs: [
      { q: 'Does Shopify charge transaction fees?', a: 'Shopify charges standard payment processing fees, and adds an extra transaction fee if you use a third-party payment gateway instead of Shopify Payments. On a custom store you only pay your payment processor’s normal rate, with no platform surcharge.' },
      { q: 'Is a custom store better than Shopify for SEO?', a: 'A custom store gives you complete control over page speed, structured data, and URL structure, which helps for competitive product searches. Shopify’s SEO is solid for most stores, but heavier themes and apps can slow pages down.' },
      { q: 'When should I switch from Shopify to custom?', a: 'Common triggers are rising app and transaction fees, needing a buying experience Shopify themes cannot deliver, or wanting full ownership of your storefront and customer data. If any of those apply, a custom build is worth costing out.' },
    ],
  },
  {
    slug: 'webflow-vs-custom-website',
    competitor: 'Webflow',
    metaTitle: 'Webflow vs Custom Website (2026): An Honest Comparison',
    metaDescription:
      'Webflow vs a hand-coded custom website compared — design freedom, performance, scalability, cost and ownership — to help you decide which fits your business best.',
    keywords: ['webflow vs custom website', 'webflow vs coded website', 'is webflow good', 'webflow alternative developer'],
    h1: 'Webflow vs a Custom-Coded Website',
    intro: [
      'Webflow sits between a template builder and full custom development. It gives designers powerful visual control and produces cleaner output than most drag-and-drop builders. A custom-coded website goes one step further — no platform constraints at all, built in modern frameworks like Next.js and React.',
      'For many marketing sites, Webflow is genuinely excellent. The question is whether your project will eventually bump into its ceilings. Here is where each option shines.',
    ],
    verdict:
      'Webflow is a strong choice for design-led marketing sites where a visual tool is enough and a monthly subscription is acceptable. A custom build wins when you need advanced functionality, app-like interactivity, deep integrations, or the freedom and ownership that only having your own codebase provides.',
    bestForPlatform: [
      'You want strong visual design control without hand-coding',
      'Your site is primarily marketing pages, a blog and CMS content',
      'You are comfortable with Webflow’s subscription and hosting',
      'You do not need complex custom application logic',
    ],
    bestForCustom: [
      'You need app-like features, custom logic, or heavy integrations',
      'You want the absolute best performance and technical SEO',
      'You expect the product to grow beyond a marketing site',
      'You want to own the codebase and avoid platform lock-in',
    ],
    rows: [
      { dimension: 'Design control', platform: 'Excellent visual control within Webflow’s model', custom: 'Total — no constraints on design or interaction' },
      { dimension: 'Custom functionality', platform: 'Limited; complex logic needs workarounds', custom: 'Unlimited — any feature can be built properly' },
      { dimension: 'Performance', platform: 'Good, generally better than template builders', custom: 'Best-in-class with modern frameworks and tuning' },
      { dimension: 'Integrations', platform: 'Possible but can get awkward at scale', custom: 'Native — connect any API, service or database' },
      { dimension: 'Ongoing cost', platform: 'Monthly Webflow subscription and hosting', custom: 'One-time build; low-cost hosting afterwards' },
      { dimension: 'Ownership', platform: 'Hosted on Webflow’s platform', custom: 'You own and can host the code anywhere' },
      { dimension: 'Scalability', platform: 'Great for marketing sites; ceilings for apps', custom: 'Scales into full products and web apps' },
    ],
    costNote:
      'Webflow is cheaper to start and faster for pure marketing sites. A custom build costs more upfront but removes the subscription, unlocks unlimited functionality, and gives you an asset you fully own — which matters most when the site is central to your business.',
    faqs: [
      { q: 'Is Webflow better than a custom-coded site?', a: 'For design-led marketing sites, Webflow is often the pragmatic choice. For sites that need custom application features, complex integrations, or maximum performance, a custom-coded build in a framework like Next.js gives you more headroom and full ownership.' },
      { q: 'Can Webflow handle complex web apps?', a: 'Webflow is built primarily for marketing and content sites. Genuinely app-like functionality — dashboards, custom workflows, real-time features — is where a custom codebase is a far better fit.' },
      { q: 'Do I own my site on Webflow?', a: 'Your site lives on Webflow’s platform and you can export static code, but any Webflow CMS and interactions are tied to the platform. A custom build gives you a complete, portable codebase you own outright.' },
    ],
  },
];

export function getComparison(slug: string): Comparison | undefined {
  return COMPARISONS.find((c) => c.slug === slug);
}
