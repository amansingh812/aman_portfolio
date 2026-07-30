export interface GuideSection {
  heading: string;
  body: string[];
}

export interface Guide {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  excerpt: string;
  readingTime: string;
  datePublished: string;
  intro: string[];
  sections: GuideSection[];
  takeaways: string[];
}

export const GUIDES: Guide[] = [
  {
    slug: 'how-to-choose-a-web-developer',
    title: 'How to Choose a Web Developer for Your Small Business',
    metaTitle: 'How to Choose a Web Developer for Your Small Business (2026 Guide)',
    metaDescription:
      'A practical guide to hiring the right web developer for your small business — what to look for, the questions to ask, red flags to avoid, and how to compare quotes fairly.',
    keywords: ['how to choose a web developer', 'hire a web developer', 'find a web developer small business', 'questions to ask a web developer'],
    excerpt:
      'Hiring the right developer is the difference between a website that quietly earns you customers and one that becomes an expensive headache. Here is how to choose well.',
    readingTime: '6 min read',
    datePublished: '2026-07-31',
    intro: [
      'Your website is often the first real impression a customer gets of your business — and the developer you hire decides whether that impression works for you or against you. Yet most small business owners hire based on price alone, then discover too late that the cheapest quote cost them the most.',
      'This guide walks through how to choose a web developer the right way: what actually matters, the questions that separate professionals from amateurs, and the red flags worth walking away from.',
    ],
    sections: [
      {
        heading: 'Start with your goal, not the technology',
        body: [
          'Before you talk to anyone, get clear on what the website is for. Is it to generate enquiries, take bookings, sell products, or simply look credible? A good developer will ask about your business goal first and recommend an approach around it. Be cautious of anyone who leads with technology and buzzwords before understanding what you are trying to achieve.',
          'Writing down your goal in one sentence — "I want tradespeople in my area to call me from Google" — makes every later decision easier, from design to budget.',
        ],
      },
      {
        heading: 'Look at their actual work, not just their portfolio shots',
        body: [
          'Screenshots are easy to make look good. Visit the live sites a developer has built and use them like a customer would: open them on your phone, check how fast they load, try the contact form, click around. Speed and mobile experience are where corners get cut, and they directly affect how many customers you win.',
          'If a developer cannot show you live sites they have built, or only shows template demos, treat that as a warning sign.',
        ],
      },
      {
        heading: 'Ask who owns the finished website',
        body: [
          'This is the single most important question, and most owners forget to ask it. Will you own the code and be able to host it anywhere, or are you renting the site on the developer’s platform or a page builder subscription? Ownership means freedom — you can change developers, move hosts, and never be held hostage.',
          'A professional will happily hand over the full codebase and accounts on completion. If someone is evasive about ownership, you may be signing up for lock-in.',
        ],
      },
      {
        heading: 'The questions that reveal a professional',
        body: [
          'Ask how they handle SEO basics, page speed, and mobile. Ask what happens after launch — is there support, and what does it cost? Ask for a fixed price and a timeline in writing rather than an open-ended hourly arrangement. Clear, confident answers signal someone who has done this many times.',
          'Also ask how you will see progress. A developer who gives you a live staging link to watch the site come together is far easier to work with than one who disappears for weeks and reveals a finished product you cannot influence.',
        ],
      },
      {
        heading: 'How to compare quotes fairly',
        body: [
          'The cheapest quote is rarely the cheapest outcome. A low price often means a template, slow support, or a platform subscription you will pay forever. Compare what is actually included: design, number of pages, SEO setup, forms and integrations, revisions, post-launch support, and — crucially — ownership.',
          'A slightly higher fixed price with clear scope, fast performance, and full ownership almost always beats a bargain quote that leaves you paying monthly and unable to make changes.',
        ],
      },
      {
        heading: 'Red flags to walk away from',
        body: [
          'Be wary of no written scope or timeline, reluctance to share live examples, vague answers about ownership, communication that is already slow before you have paid, and prices that seem too good to be true. Trust how the sales conversation feels — it is a preview of the whole project.',
        ],
      },
    ],
    takeaways: [
      'Define your business goal before choosing any developer or technology.',
      'Test their live sites on mobile — speed and UX reveal quality.',
      'Always confirm you will own the code with no lock-in.',
      'Prefer a fixed price and timeline in writing over hourly, open-ended work.',
      'Compare total value and ownership, not just the headline price.',
    ],
  },
  {
    slug: 'website-builder-vs-web-developer',
    title: 'Website Builder vs Web Developer: Which Do You Actually Need?',
    metaTitle: 'Website Builder vs Web Developer: Which Do You Actually Need? (2026)',
    metaDescription:
      'DIY website builder or hire a web developer? An honest guide to the trade-offs in cost, time, performance, SEO and ownership — so you make the right call for your business.',
    keywords: ['website builder vs web developer', 'diy website vs hire developer', 'should i use a website builder', 'website builder or developer'],
    excerpt:
      'A DIY builder can get you online this weekend. A developer builds you an asset. Here is how to know which one your business actually needs right now.',
    readingTime: '7 min read',
    datePublished: '2026-07-31',
    intro: [
      'Every business owner eventually hits this fork: drag-and-drop your own site on a builder like Wix or Squarespace, or hire a developer to build it properly. Both are valid — the wrong choice just costs you either money or momentum.',
      'This guide lays out the real trade-offs so you can decide based on where your business is today, not on marketing from either side.',
    ],
    sections: [
      {
        heading: 'What a website builder is genuinely good at',
        body: [
          'DIY builders are fast, cheap to start, and require no technical skill. If you need a simple, presentable site online quickly — a few pages, a contact form, maybe a blog — a builder can absolutely do the job, and there is no shame in starting there.',
          'For a brand-new business testing an idea, or a side project with no budget, a builder is often the smart, pragmatic first step. You can always upgrade later.',
        ],
      },
      {
        heading: 'Where builders quietly cost you',
        body: [
          'The trade-offs show up over time. You pay a subscription every month for as long as the site exists. Performance and SEO are constrained by the platform, which matters enormously once you are competing for search traffic. And your design tends to look like a template because it is one.',
          'The biggest hidden cost is ownership: you are renting your website. If the platform raises prices, changes features, or you want to move, your site does not simply come with you.',
        ],
      },
      {
        heading: 'What hiring a developer gives you',
        body: [
          'A developer builds a site around your business rather than fitting your business into a template. You get a unique design, best-in-class speed and technical SEO, any custom feature you need, and — with the right developer — full ownership of the code with no ongoing platform fee.',
          'The cost is higher upfront and it takes longer to launch. In return you get an asset you own, one that can grow with you instead of hitting a ceiling.',
        ],
      },
      {
        heading: 'A simple way to decide',
        body: [
          'Choose a website builder if your needs are simple, your budget is tight, you are comfortable maintaining it yourself, and speed to launch matters more than long-term performance. Choose a developer if the website is central to how you win customers, you need custom functionality or serious SEO, or you want to own your site outright rather than rent it.',
          'A useful test: if your website going down for a week would genuinely hurt revenue, it is important enough to build properly.',
        ],
      },
      {
        heading: 'The middle path: start DIY, upgrade when it pays off',
        body: [
          'You do not have to get it perfect on day one. Plenty of businesses start on a builder to validate demand, then invest in a custom build once the website is clearly driving revenue and the monthly fees and limitations start to bite.',
          'The key is to make the move deliberately — before the platform’s ceilings cost you customers — rather than staying on a builder out of inertia.',
        ],
      },
    ],
    takeaways: [
      'Website builders win on speed, low upfront cost, and simplicity.',
      'Developers win on performance, SEO, custom features, and ownership.',
      'Rent (builder) vs own (custom) is the real long-term difference.',
      'If downtime would hurt your revenue, build the site properly.',
      'Starting DIY and upgrading later is a legitimate, low-risk strategy.',
    ],
  },
];

export function getGuide(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}
