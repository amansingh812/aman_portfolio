import type { Metadata, Viewport } from 'next';
import './globals.css';

const SITE_URL = 'https://buildfirstsite.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Build First Site — Hire a Website Builder | Web Design Studio · AU · US · UK',
  description:
    'Build First Site is a professional website builder for hire — building high-converting business websites, e-commerce stores, and AI web apps for AU, US & UK businesses. Fixed-price, fast delivery, full code ownership.',
  keywords: [
    'build first site',
    'hire a website builder',
    'someone to build my website australia',
    'professional website builder',
    'web design studio',
    'web development agency',
    'business website australia',
    'ecommerce developer',
    'small business website',
    'Next.js developer',
    'custom website sydney',
    'AI web development',
  ],
  authors: [{ name: 'Build First Site' }],
  robots: { index: true, follow: true },
  alternates: {
    canonical: '/',
    languages: {
      'en-au': '/',
      'en-us': '/',
      'en-gb': '/',
      'x-default': '/',
    },
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    title: 'Build First Site — Web Design & Development Studio',
    description:
      'High-converting business websites, e-commerce & AI web apps for US, UK & Australian businesses. Fixed-price, fast delivery.',
    images: [{ url: '/og-image.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Build First Site — Web Design & Development Studio',
    description:
      'High-converting websites, e-commerce & AI web apps for US, UK & Australia. Fixed-price, fast delivery.',
    images: ['/og-image.png'],
    site: '@buildfirstsite',
  },
  icons: { icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }] },
};

export const viewport: Viewport = {
  themeColor: '#e2622d',
  width: 'device-width',
  initialScale: 1,
};

// ─── Structured data (JSON-LD) — mirrors the original index.html schema ──────
const schemaProfessionalService = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Build First Site',
  description:
    'Web design & development studio building high-converting business websites, e-commerce stores, and AI-powered web apps for clients in the US, UK, and Australia.',
  url: 'https://buildfirstsite.com/',
  image: 'https://buildfirstsite.com/og-image.png',
  logo: 'https://buildfirstsite.com/favicon.svg',
  email: 'contact@buildfirstsite.com',
  telephone: '+61413146498',
  founder: {
    '@type': 'Person',
    name: 'Aman Singh',
    url: 'https://www.linkedin.com/in/aman-singh-b3a7251a2',
    sameAs: [
      'https://www.linkedin.com/in/aman-singh-b3a7251a2',
      'https://github.com/amansingh812',
    ],
  },
  priceRange: '$$',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
  ],
  serviceType: [
    'Web Design',
    'Web Development',
    'E-Commerce Development',
    'AI Web Applications',
    'Next.js Development',
    'React Development',
  ],
  makesOffer: [
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Landing Page' }, price: '600', priceCurrency: 'USD', description: 'Conversion-focused single page with SEO basics, analytics, deployed in ~2 weeks.' },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Business Website' }, price: '2000', priceCurrency: 'USD', description: 'Multi-page site with CMS, contact forms, booking integration, local SEO.' },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'E-Commerce Store' }, price: '4000', priceCurrency: 'USD', description: 'Full store with Stripe checkout, inventory, admin dashboard, order emails.' },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI / SaaS MVP' }, price: '5000', priceCurrency: 'USD', description: 'Full product build — auth, billing, AI integrations, dashboard, launch-ready.' },
  ],
  sameAs: [
    'https://www.linkedin.com/in/aman-singh-b3a7251a2',
    'https://github.com/amansingh812',
  ],
};

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What web design and development services do you offer?', acceptedAnswer: { '@type': 'Answer', text: 'Build First Site builds websites, web apps, e-commerce platforms, and SaaS products — from design handoff to launch. Services include custom Next.js and React builds, Flutter mobile apps, AI integrations, Stripe payment flows, admin dashboards, and performance audits.' } },
    { '@type': 'Question', name: 'How much does a website cost?', acceptedAnswer: { '@type': 'Answer', text: 'Most projects fall between $600 and $15,000 USD depending on scope. A landing page starts at $600; a business website from $2,000; e-commerce from $4,000; an AI or SaaS MVP from $5,000. Fixed-price quotes upfront — never hourly billing.' } },
    { '@type': 'Question', name: 'What are the payment terms for web design projects?', acceptedAnswer: { '@type': 'Answer', text: '50% upfront to begin, 50% on completion. Larger projects can split into three milestones. We accept Wise, Stripe, PayPal, and bank transfer — works for clients in the US, UK, and Australia.' } },
    { '@type': 'Question', name: 'Do you work with international clients in Australia and the US?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — most freelance work is for businesses in Australia, the US, and the UK. We handle timezones with async communication and scheduled calls, delivering on time regardless of location.' } },
    { '@type': 'Question', name: 'How long does a website take to build?', acceptedAnswer: { '@type': 'Answer', text: 'Landing page: approximately 2 weeks. Business website: 2–3 weeks. E-commerce or SaaS: 4–6 weeks. You get a clear timeline with milestones in the proposal before we start.' } },
    { '@type': 'Question', name: 'Will I own the website code?', acceptedAnswer: { '@type': 'Answer', text: '100%. The code is yours, hosted wherever you like — Vercel, AWS, your own server. No subscriptions, no lock-in. Full GitHub repo handed over on completion.' } },
    { '@type': 'Question', name: 'Do you offer ongoing website support after launch?', acceptedAnswer: { '@type': 'Answer', text: 'The first 30 days post-launch are free. After that, monthly retainers start at $600/month for ongoing development, updates, and support.' } },
  ],
};

const schemaHowTo = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Get a Website Built with Build First Site',
  description: 'The fixed-price, async-friendly process for getting a custom website built for your business.',
  totalTime: 'P3W',
  step: [
    { '@type': 'HowToStep', position: '1', name: 'Book a free 30-minute discovery call', text: "Tell us about your business, goals, and timeline. We'll ask the right questions to scope the project accurately." },
    { '@type': 'HowToStep', position: '2', name: 'Receive a fixed-price proposal', text: "Within 24 hours you'll have a detailed proposal: scope, tech stack, timeline, and a locked price. No hourly billing." },
    { '@type': 'HowToStep', position: '3', name: 'Pay 50% and we start building', text: 'Once approved, pay the 50% deposit via Stripe, Wise, or bank transfer. Development begins immediately.' },
    { '@type': 'HowToStep', position: '4', name: 'Review on a live staging link', text: 'You get a live staging URL from day one. Review progress in real time, leave feedback directly in the browser.' },
    { '@type': 'HowToStep', position: '5', name: 'Launch and receive full ownership', text: 'Pay the remaining 50% on launch day. We hand over the full GitHub repo — the code is 100% yours with no lock-in.' },
  ],
};

const schemaWebSite = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Build First Site',
  url: 'https://buildfirstsite.com/',
  description: 'Web design & development studio for US, UK & Australian businesses.',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://buildfirstsite.com/?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Apply saved theme before paint to prevent a flash of the wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var t=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;if(t==='dark'||(!t&&d)){document.documentElement.classList.add('dark');}}catch(e){}})();",
          }}
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaProfessionalService) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaHowTo) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebSite) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
