export interface ServiceTier {
  name: string;
  price: string;
  timeline: string;
  summary: string;
  includes: string[];
}

export interface ServiceSection {
  heading: string;
  body: string[];
}

export interface ServiceCapability {
  title: string;
  body: string;
}

export interface Service {
  slug: string;
  eyebrow: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  intro: string[];
  /** Short, scannable proof points shown under the hero. */
  highlights: { label: string; value: string }[];
  capabilities: ServiceCapability[];
  tiers: ServiceTier[];
  pricingNote: string;
  process: { step: string; body: string }[];
  sections: ServiceSection[];
  faqs: { q: string; a: string }[];
  /** Internal links out — required, minimum 3. See docs/SEO-PLAYBOOK.md */
  related: { href: string; label: string }[];
}

export const SERVICES: Service[] = [
  {
    slug: 'app-development-australia',
    eyebrow: 'App Development',
    h1: 'App Development Company in Australia',
    metaTitle: 'App Development Company Australia | Fixed-Price Web & Mobile Apps',
    metaDescription:
      'Australian app development company building web and mobile apps on a modern stack. Fixed AUD pricing from $6,500, direct access to the developer, and you own the code.',
    keywords: [
      'app development company Australia',
      'app developers Australia',
      'mobile app developer Melbourne',
      'mobile app developer Sydney',
      'custom app development Australia',
      'web app development Australia',
    ],
    intro: [
      'Most Australian businesses that come to us for an app do not actually need a native iOS and Android build. They need something their customers can use on a phone, that works offline-ish, sends notifications, and connects to the systems they already run. That is usually a web app or a progressive web app — and it costs a fraction of a native build.',
      'We start by working out which one you actually need, then quote a fixed price in AUD before any work begins. You get a live staging link from week one, direct access to the person writing the code, and the full repository on handover.',
    ],
    highlights: [
      { label: 'Pricing', value: 'Fixed, in AUD' },
      { label: 'Typical build', value: '6–10 weeks' },
      { label: 'Stack', value: 'Next.js · React Native' },
      { label: 'On handover', value: 'You own the code' },
    ],
    capabilities: [
      {
        title: 'Web apps and dashboards',
        body: 'Internal tools, client portals, booking systems, and admin dashboards — the kind of software that replaces a tangle of spreadsheets. Built as a fast web app that works on any device with no app-store approval to wait on.',
      },
      {
        title: 'Progressive web apps (PWA)',
        body: 'Installs to the home screen, works on a patchy connection, and sends push notifications — without the cost and release cycle of a native build. For most small-business use cases this is the honest answer.',
      },
      {
        title: 'Cross-platform mobile apps',
        body: 'When you genuinely need the app stores — camera, background location, offline-first field work — we build with React Native so one codebase ships to both iOS and Android.',
      },
      {
        title: 'SaaS products and MVPs',
        body: 'Multi-tenant accounts, subscription billing through Stripe, usage limits, and an admin back office. Enough to put a real product in front of real users and charge for it.',
      },
      {
        title: 'AI features',
        body: 'Chat and lead qualification, appointment booking, and product recommendations built on OpenAI, Claude, or Gemini — added to an app where they do a specific job, not bolted on for the sake of it.',
      },
      {
        title: 'Integrations',
        body: 'Payments, calendars, CRMs, accounting, and messaging. An app that does not talk to the tools you already use creates more admin than it removes.',
      },
    ],
    tiers: [
      {
        name: 'Web App MVP',
        price: 'from AU$6,500',
        timeline: '6–8 weeks',
        summary: 'A focused first version — the core workflow, built properly, in front of users.',
        includes: [
          'Accounts and authentication',
          'The one workflow that matters, done well',
          'Admin back office',
          'Responsive on phone, tablet and desktop',
          'Deployed and live',
        ],
      },
      {
        name: 'Full Web App',
        price: 'from AU$12,000',
        timeline: '8–12 weeks',
        summary: 'A production application with multiple user roles and real integrations.',
        includes: [
          'Everything in the MVP tier',
          'Multiple roles and permissions',
          'Payments and subscription billing',
          'Third-party integrations',
          'Reporting and analytics',
        ],
      },
      {
        name: 'Cross-Platform Mobile',
        price: 'from AU$18,000',
        timeline: '10–16 weeks',
        summary: 'One React Native codebase shipped to both the App Store and Google Play.',
        includes: [
          'iOS and Android from one codebase',
          'Push notifications',
          'Offline support',
          'Store submission handled',
          'Backend API included',
        ],
      },
    ],
    pricingNote:
      'These are honest starting points, not a bait price. The final number depends on how many screens, how many integrations, and how much of the logic is genuinely custom — and you get that number in writing before we start. Payment is split 50% to begin and 50% on launch. If scope changes mid-project, we re-quote rather than quietly billing more hours.',
    process: [
      {
        step: 'Scoping call',
        body: 'A free 30-minute call to work out what you are actually trying to achieve, and whether an app is the right way to get there. Sometimes the answer is no, and we will tell you.',
      },
      {
        step: 'Fixed quote',
        body: 'A written scope and a fixed AUD price within 24 hours. Clear about what is included and, just as importantly, what is not.',
      },
      {
        step: 'Build in the open',
        body: 'You get a live staging link from the first week and see progress as it happens. No four-week silences followed by a reveal you cannot influence.',
      },
      {
        step: 'Launch',
        body: 'We deploy, submit to the app stores if relevant, and hand over the repository and every account. Thirty days of support included.',
      },
      {
        step: 'After',
        body: 'Ongoing work is quoted per piece. There is no mandatory retainer and no subscription to us — if you want to take the code to another developer, you can.',
      },
    ],
    sections: [
      {
        heading: 'Do you need a native app, or a web app?',
        body: [
          'This is the question that decides most of your budget, so it is worth getting right. A native mobile app needs to be built, reviewed, and released through the App Store and Google Play, which adds cost and turns every update into a submission. A web app is a URL — it works on every device immediately and updates the moment you deploy.',
          'You genuinely need native when you depend on deep device features: background location tracking, Bluetooth hardware, heavy offline use in the field, or being discoverable in the app stores as a distribution channel. If your app is fundamentally forms, dashboards, bookings, or content, a web app or PWA does the same job for a lot less.',
          'We would rather talk you into the cheaper option that fits than sell you a native build you did not need.',
        ],
      },
      {
        heading: 'What app development actually costs in Australia',
        body: [
          'Australian agencies commonly quote app projects from around $50,000, and enterprise consultancies run well past that — a lot of which goes on account managers, project managers, and layers between you and the person writing the code.',
          'We publish our starting prices because the guesswork helps nobody. A focused web app MVP starts at AU$6,500, a full production web app at AU$12,000, and a cross-platform mobile app at AU$18,000. Where you land inside that depends on scope, and you get a fixed number before committing.',
          'The other cost people forget is what happens after launch. Ask any developer whether you own the code and whether you are locked into a monthly fee. With us the answer is that you own it outright and there is no mandatory retainer.',
        ],
      },
      {
        heading: 'Working with us from anywhere in Australia',
        body: [
          'We work with businesses in Sydney, Melbourne, Brisbane, Perth and Adelaide, and remotely across the rest of the country. App projects do not require someone in the room — they require someone who replies, shows progress, and hits the dates.',
          'You deal directly with the developer building your app. There is no account manager relaying messages, which in practice is the single biggest difference clients notice.',
        ],
      },
    ],
    faqs: [
      {
        q: 'How much does app development cost in Australia?',
        a: 'Our web app MVPs start at AU$6,500, full production web apps at AU$12,000, and cross-platform mobile apps at AU$18,000. Many Australian agencies start around $50,000 for comparable work. You get a fixed quote in writing before any work begins, so the number does not move unless the scope does.',
      },
      {
        q: 'How long does it take to build an app?',
        a: 'A focused web app MVP takes 6–8 weeks. A full production web app runs 8–12 weeks. A cross-platform mobile app is typically 10–16 weeks including app store submission. The timeline is agreed upfront alongside the price.',
      },
      {
        q: 'Do I own the app when it is finished?',
        a: 'Yes — completely. You get the full repository and every account on handover. There is no platform lock-in, no mandatory subscription to us, and you are free to take the code to another developer at any time.',
      },
      {
        q: 'Can you add AI features to my app?',
        a: 'Yes. The three we are asked for most are chat that qualifies leads, automated appointment booking, and product recommendations. We build these on OpenAI, Claude, or Gemini, and we will be straight with you about whether AI actually improves the app or just adds cost.',
      },
      {
        q: 'Do you build native iOS and Android apps?',
        a: 'We build cross-platform apps with React Native, which ships to both iOS and Android from one codebase and covers the large majority of real requirements at roughly half the cost of two separate native builds. If your project genuinely needs fully native, we will say so rather than take the work.',
      },
      {
        q: 'Do I need to be in Sydney or Melbourne to work with you?',
        a: 'No. We work with businesses across Australia and communicate async with a live staging link, so you can see progress whenever you like rather than waiting for a status meeting.',
      },
    ],
    related: [
      { href: '/ai-chatbot-development-australia/', label: 'AI chatbots & booking automation' },
      { href: '/nextjs-development/', label: 'Next.js development' },
      { href: '/ecommerce-development/', label: 'E-commerce development' },
      { href: '/work/autozenlyai/', label: 'Case study: AutoZenlyAI SaaS' },
      { href: '/how-much-does-a-website-cost-australia/', label: 'What a website costs in Australia' },
    ],
  },
  {
    slug: 'ai-chatbot-development-australia',
    eyebrow: 'AI Development',
    h1: 'AI Chatbot & Booking Automation for Australian Businesses',
    metaTitle: 'AI Chatbot Development Australia | Lead Qualification & Booking',
    metaDescription:
      'Custom AI chatbots for Australian businesses — qualify leads, answer questions and book jobs 24/7. Fixed AUD pricing from $2,500, built into your own site. You own it.',
    keywords: [
      'AI chatbot development Australia',
      'AI chatbot for small business Australia',
      'AI booking system Australia',
      'AI lead qualification',
      'custom AI chatbot developer',
      'AI web developer Australia',
    ],
    intro: [
      'The enquiries you lose are rarely the ones you turned down. They are the ones that came in at 9pm, or while you were on a job, and went to whoever answered first. For a tradie, a clinic, or a restaurant, that is the difference between a booked week and a quiet one.',
      'We build AI assistants into your existing website that answer questions in your own words, work out whether an enquiry is worth your time, and put the good ones straight into your calendar — at any hour. Not a generic widget you rent by the month: a custom build, on your site, that you own.',
    ],
    highlights: [
      { label: 'Starting at', value: 'AU$2,500' },
      { label: 'Typical build', value: '2–4 weeks' },
      { label: 'Models', value: 'OpenAI · Claude · Gemini' },
      { label: 'Ongoing fee to us', value: 'None' },
    ],
    capabilities: [
      {
        title: 'Lead qualification',
        body: 'The assistant asks the questions you would ask — job type, location, timeframe, budget range — and separates real enquiries from tyre-kickers before they reach you. Qualified leads land in your inbox or CRM with the answers already attached.',
      },
      {
        title: 'Booking and appointments',
        body: 'Connects to your calendar so a visitor can go from question to confirmed booking without a phone call. This is where most of the value sits for service businesses: the enquiry converts while the interest is still there.',
      },
      {
        title: 'After-hours enquiry capture',
        body: 'Most enquiries arrive outside business hours. Rather than a contact form that sits unread until morning, the assistant responds immediately, captures the detail, and flags anything urgent.',
      },
      {
        title: 'Answers from your own content',
        body: 'Grounded in your actual pricing, service areas, policies and FAQs — so it answers like your business rather than inventing something plausible. If it does not know, it says so and hands over.',
      },
      {
        title: 'Product recommendations',
        body: 'For online stores: an assistant that asks what the customer is trying to do and points them at the right product, instead of leaving them to filter through a category page.',
      },
      {
        title: 'Handover to a human',
        body: 'Clear escalation when a conversation needs you — with the full transcript, so the customer never has to repeat themselves. Automation that knows its limits beats automation that bluffs.',
      },
    ],
    tiers: [
      {
        name: 'Assistant',
        price: 'from AU$2,500',
        timeline: '2 weeks',
        summary: 'A trained assistant on your existing site that answers questions and captures enquiries.',
        includes: [
          'Trained on your content and pricing',
          'Enquiry capture to email',
          'Branded to match your site',
          'Conversation history',
          'Escalation to a human',
        ],
      },
      {
        name: 'Qualify & Book',
        price: 'from AU$4,500',
        timeline: '3–4 weeks',
        summary: 'Adds qualification logic and live calendar booking — the version most service businesses want.',
        includes: [
          'Everything in Assistant',
          'Custom qualification questions',
          'Calendar booking integration',
          'Lead scoring and routing',
          'CRM or email delivery',
        ],
      },
      {
        name: 'Custom AI Build',
        price: 'from AU$6,500',
        timeline: '4–8 weeks',
        summary: 'Multi-step workflows, product recommendations, or AI built into a larger application.',
        includes: [
          'Everything in Qualify & Book',
          'Product recommendation engine',
          'Multi-step automated workflows',
          'Custom integrations',
          'Admin dashboard and analytics',
        ],
      },
    ],
    pricingNote:
      'One fixed build cost in AUD, and no monthly fee to us afterwards. You will pay the AI provider directly for usage — for a typical small business that is usually a modest monthly amount, and we will estimate it honestly for your expected volume before you commit rather than after. Because the assistant is built into your own site on your own account, you can keep running it if you stop working with us.',
    process: [
      {
        step: 'Work out if it is worth it',
        body: 'A free call to look at how many enquiries you get, when they arrive, and what happens to them now. If an AI assistant will not move the needle for you, we will say so.',
      },
      {
        step: 'Fixed quote',
        body: 'A written scope and fixed AUD price, plus an honest estimate of your ongoing AI usage cost.',
      },
      {
        step: 'Train it on your business',
        body: 'We feed it your real pricing, service areas, policies and the questions you get asked constantly — then test it against conversations you have actually had.',
      },
      {
        step: 'Test and tune',
        body: 'You try to break it before your customers do. We tighten the answers, set the escalation rules, and agree what it should never attempt to handle.',
      },
      {
        step: 'Launch and hand over',
        body: 'Live on your site, with the accounts and code in your name. Thirty days of support to refine it against real conversations.',
      },
    ],
    sections: [
      {
        heading: 'Where an AI assistant actually pays for itself',
        body: [
          'The clearest case is a service business that misses enquiries because the work happens away from a desk. Trades, mobile services, clinics, and hospitality all lose bookings to whoever replies first, and the enquiry that arrives at 9pm is the one most likely to go elsewhere.',
          'The second clear case is repetitive questions. If you answer the same five questions about pricing, service area, availability and lead time every day, that is time you can get back with no loss to the customer experience — provided the answers are grounded in your real information.',
          'It pays for itself less often when your enquiry volume is low, when every job needs a genuine expert conversation up front, or when your customers strongly prefer to phone. We would rather tell you that on the first call than sell you something that sits unused.',
        ],
      },
      {
        heading: 'Custom build versus a subscription widget',
        body: [
          'You can add a chatbot to your site this afternoon for a monthly fee, and for some businesses that is a perfectly reasonable place to start. The trade-offs are the same as any rented platform: your conversation data lives with them, your customisation stops where their product stops, and the fee continues for as long as the bot does.',
          'A custom build costs more upfront and nothing per month to us. It behaves exactly the way your business works, connects to whatever you already use, and the code and accounts are yours. Over a few years the economics usually favour owning it — but if your needs are simple, a subscription tool may genuinely be the smarter call, and we will say so.',
        ],
      },
      {
        heading: 'Being honest about what AI gets wrong',
        body: [
          'An AI assistant will occasionally be asked something it has no good answer for. The failure mode that damages your business is one that invents an answer — quoting a price you do not offer or promising a timeframe you cannot meet.',
          'We build to fail the other way. The assistant answers from your supplied information, is instructed to say when it does not know, and escalates rather than guesses on anything involving a firm quote, a commitment, or a complaint. You also get the transcripts, so you can see exactly what it is telling your customers.',
          'It is also worth being clear that an assistant does not replace judgement on complex or sensitive jobs. It handles the front door so the conversations that need you actually reach you.',
        ],
      },
    ],
    faqs: [
      {
        q: 'How much does an AI chatbot cost in Australia?',
        a: 'Our builds start at AU$2,500 for a trained assistant that answers questions and captures enquiries, AU$4,500 with qualification and calendar booking, and AU$6,500 for custom AI workflows or product recommendations. That is a one-off fixed cost — there is no monthly fee to us.',
      },
      {
        q: 'Are there ongoing costs?',
        a: 'You pay the AI provider directly for usage, which for a typical small business is usually a modest monthly amount that scales with conversation volume. We estimate it for your expected traffic before you commit. There is no mandatory retainer or subscription to us.',
      },
      {
        q: 'Can it book jobs into my calendar?',
        a: 'Yes — that is the most requested feature and where most of the value sits. The assistant qualifies the enquiry, then offers real available times from your calendar and confirms the booking inside the conversation, so the lead converts while the interest is still live.',
      },
      {
        q: 'Will it make things up about my business?',
        a: 'It answers from the pricing, service areas and policies you supply, and is instructed to say when it does not know and hand over to you. We deliberately restrict it from committing to firm quotes or timeframes on your behalf, and you get full transcripts so you can see what it tells customers.',
      },
      {
        q: 'How long does it take to build?',
        a: 'A trained assistant takes about 2 weeks. Adding qualification logic and calendar booking takes 3–4 weeks. Custom AI workflows run 4–8 weeks depending on how many systems they touch.',
      },
      {
        q: 'Do I own it?',
        a: 'Yes. It is built into your own website on your own accounts, and the code is yours on handover. If you stop working with us, the assistant keeps running.',
      },
      {
        q: 'Will it work with my existing website?',
        a: 'Usually, yes — including sites on WordPress, Shopify, Squarespace and Wix, as well as custom builds. We will confirm on the first call, since a few older or heavily locked-down platforms make integration harder than it is worth.',
      },
    ],
    related: [
      { href: '/ai-web-development/', label: 'AI web development' },
      { href: '/app-development-australia/', label: 'App development Australia' },
      { href: '/tradie-website-design/', label: 'Tradie websites' },
      { href: '/restaurant-website-design/', label: 'Restaurant websites' },
      { href: '/work/mobile-armour/', label: 'Case study: AI product recommendations' },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
