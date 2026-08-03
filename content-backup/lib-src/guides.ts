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
  {
    slug: 'freelance-web-developer-rates-australia',
    title: 'Freelance Web Developer Rates in Australia: What You Should Expect to Pay',
    metaTitle: 'Freelance Web Developer Rates Australia 2026 | Hourly & Fixed Pricing',
    metaDescription:
      'What freelance web developers actually charge in Australia — hourly rates by experience level, fixed-price ranges by project type, and how to tell a fair quote from a bad one.',
    keywords: [
      'freelance web developer rates',
      'freelance web developer rates Australia',
      'web developer hourly rate Australia',
      'how much do web developers charge Australia',
      'website developer cost Australia',
    ],
    excerpt:
      'Hourly rates, fixed-price ranges, and the questions that tell you whether a quote is fair — written by someone who publishes their prices.',
    readingTime: '8 min read',
    datePublished: '2026-08-01',
    intro: [
      'Almost nobody in Australian web development publishes their rates. You get "contact us for a quote", then three wildly different numbers with no way to tell which one is reasonable. That opacity is not an accident — it makes comparison hard, and hard comparison protects margins.',
      'This guide lays out what freelance and small-studio web developers actually charge in Australia, why the ranges are so wide, and how to work out whether a quote in front of you is fair. We publish our own prices, so we have no particular reason to keep this vague.',
    ],
    sections: [
      {
        heading: 'Hourly rates by experience level',
        body: [
          'Australian freelance web developers broadly fall into three bands. Junior or newly freelancing developers typically charge somewhere around $40–70 per hour. Mid-level developers with a few years of commercial work behind them generally sit around $70–120. Senior specialists and established consultancies charge from roughly $120 up to $300 per hour at the premium end, where you are partly paying for strategy and risk reduction rather than typing.',
          'Offshore rates sit well below all of these, often $15–40 per hour. That gap is real, and so are the trade-offs: timezone friction, communication overhead, and highly variable quality control. Plenty of businesses use offshore developers successfully, but the ones who do it well usually have someone technical in-house to manage the work.',
          'Treat these as indicative ranges rather than measured survey data — rates move, and they vary by city and specialism. The point is the shape of the market, not the decimal place.',
        ],
      },
      {
        heading: 'Why hourly billing works against you',
        body: [
          'Hourly billing puts you and the developer on opposite sides. Every hour that the project runs long is revenue for them and cost for you, and you have almost no way to audit whether a task genuinely took nine hours. You also cannot budget: the number you are quoted is an estimate, and estimates in software have a well-earned reputation.',
          'The more useful question is not "what is your hourly rate" but "what will this project cost, in writing, before we start". A developer who can answer that has scoped the work properly and is carrying the estimation risk themselves. One who cannot may be planning to discover the scope on your budget.',
          'This is why we quote fixed prices in AUD. It is not generosity — it forces us to actually understand the project before committing, which is where most bad outcomes get prevented.',
        ],
      },
      {
        heading: 'Fixed-price ranges by project type',
        body: [
          'A single landing page — one page, a form, conversion-focused — generally runs from around $600 to $2,500 depending on design complexity and whether the copy is written for you. A standard small-business website of five to ten pages typically lands between $2,000 and $8,000. A custom e-commerce store usually starts around $4,000 and rises quickly with catalogue size and integrations. Web applications and SaaS products start around $6,500 for a genuine MVP and go up from there.',
          'Australian agencies quote considerably higher for comparable scope — commonly $10,000 and up for a business website, and $50,000-plus for app work. Some of that premium buys real things: account management, larger teams, redundancy if someone leaves. Some of it buys the overhead of those same things. Whether it is worth it depends on the size and risk of your project.',
          'For reference, our published starting points are $600 for a landing page, $2,000 for a business website, $4,000 for e-commerce, and $6,500 for a web app MVP.',
        ],
      },
      {
        heading: 'What should be included in the price',
        body: [
          'Before comparing two quotes, check they cover the same ground. A quote should be explicit about: the number of pages or screens, whether design is bespoke or template-based, who writes the copy, how many rounds of revisions are included, SEO fundamentals such as metadata and structured data, mobile responsiveness, forms and integrations, and what support you get after launch.',
          'The item people most often forget to check is ownership. Do you get the code and the accounts, or is the site rented on the developer\'s platform or a page-builder subscription? A cheaper quote that locks you into a monthly fee and cannot be moved to another developer is frequently the most expensive option over three years.',
          'Also ask what happens if you need a change in six months. "Quoted per piece, no retainer required" and "you must be on our $250/month plan" are very different businesses.',
        ],
      },
      {
        heading: 'How to tell a fair quote from a bad one',
        body: [
          'A fair quote is specific. It names deliverables, dates, and a number, and it is comfortable saying what is excluded. A bad quote is either vague — a single figure with no scope — or suspiciously cheap in a way that implies a template, an offshore subcontractor you were not told about, or a plan to recoup the difference through change requests.',
          'Watch how the person handles the scoping conversation. Someone who asks what the website is for, who your customers are, and what would count as success is going to build you something useful. Someone who quotes off a one-line brief is guessing, and you will pay for the guess later.',
          'Finally, price is a weak signal of quality in both directions. The most expensive quote is not automatically the best work, and the cheapest is not automatically bad. What correlates far better is clarity: whether they can explain what they will do, why, and what it costs, without hedging.',
        ],
      },
      {
        heading: 'Questions worth asking before you sign',
        body: [
          'Ask for a fixed price and timeline in writing. Ask who owns the code and the accounts on completion. Ask whether there is a mandatory ongoing fee. Ask to see live sites they built — then open those sites on your phone and check how fast they load. Ask what happens after launch and what support costs. Ask who you will actually be talking to day to day.',
          'The answers matter, but so does the manner. How someone handles the sales conversation is a reliable preview of how they will handle your project when something goes wrong.',
        ],
      },
    ],
    takeaways: [
      'Australian freelance rates broadly run $40–70/hr junior, $70–120/hr mid, $120–300/hr senior — treat as indicative, not measured.',
      'Ask for a fixed project price rather than an hourly rate; it shifts estimation risk off you.',
      'Compare quotes on scope and inclusions, not just the headline number.',
      'Always confirm you own the code and are not locked into a monthly fee.',
      'Clarity of scoping predicts quality far better than price does.',
    ],
  },
  {
    slug: 'seo-for-small-business-australia',
    title: 'SEO for Small Businesses in Australia: A Practical Starting Guide',
    metaTitle: 'SEO for Small Businesses Australia | Practical 2026 Guide',
    metaDescription:
      'A no-jargon SEO guide for Australian small businesses — local search, Google Business Profile, the pages worth building, and what actually moves rankings in 2026.',
    keywords: [
      'SEO for small businesses Australia',
      'small business SEO Australia',
      'local SEO Australia',
      'Google Business Profile Australia',
      'how to rank on Google Australia',
    ],
    excerpt:
      'What actually moves the needle for a small Australian business in search — and what is a waste of your money.',
    readingTime: '9 min read',
    datePublished: '2026-08-01',
    intro: [
      'Most SEO advice aimed at small businesses is either too abstract to act on or a thinly disguised pitch for a monthly retainer. This guide is the version we would give a client over a coffee: what matters for an Australian small business, roughly in the order it matters, and what you can safely ignore for now.',
      'One thing to set expectations on first. SEO is slow. Meaningful movement takes months, not weeks, and anyone promising page one by next quarter is either lucky, targeting a term nobody searches, or not being straight with you.',
    ],
    sections: [
      {
        heading: 'Start with Google Business Profile, not your website',
        body: [
          'If you serve customers in a specific area, your Google Business Profile is almost certainly worth more to you than any page on your website. It is what feeds the map pack — the three local results that sit above the normal listings — and it is free.',
          'Claim it, then fill in everything: categories, service areas, hours, photos, and a description. Keep your name, address and phone number identical everywhere they appear online, because inconsistency there genuinely confuses local ranking.',
          'Then ask for reviews, consistently. Review volume and recency are among the strongest local ranking factors, and they are the thing most small businesses neglect entirely. A competitor with 160 reviews will beat you on the strength of that alone, regardless of how good your website is. Asking every satisfied customer, every time, is unglamorous and effective.',
        ],
      },
      {
        heading: 'One page, one keyword',
        body: [
          'The most common structural mistake is trying to make the homepage rank for everything. Search engines match a query to a page, not a business, so a page that talks about six services vaguely will lose to six pages that each talk about one service properly.',
          'Pick one primary keyword per page and let the page genuinely be about that. If you are a plumber, "emergency plumber Brisbane" gets its own page rather than a paragraph on a services list. Two pages targeting the same keyword is worse than one — they compete with each other, which is called cannibalisation and it is entirely self-inflicted.',
          'Write the page for a person who has that specific problem. The keyword should appear in the page title, the single H1, and naturally in the text — but text stuffed with repetitions of a phrase reads badly to humans and has not helped rankings for many years.',
        ],
      },
      {
        heading: 'What Australian customers actually search',
        body: [
          'Australian search behaviour skews local and price-curious. "Near me" and city-qualified searches dominate service categories, and cost queries — "how much does X cost" — carry real commercial intent because people are shortlisting before they contact anyone.',
          'That makes pricing content unusually valuable here. A page that answers "what does this cost in Australia" honestly, in AUD, tends to attract people who are close to buying, and most competitors avoid the question. Answering it is both an SEO play and a trust play.',
          'Also note that roughly two thirds of Australian traffic is mobile. If your site is slow or awkward on a phone, you are losing the majority of your visitors regardless of where you rank.',
        ],
      },
      {
        heading: 'The technical basics that actually matter',
        body: [
          'You do not need to become technical, but a handful of things are worth checking. Your site should load fast on a phone — Google\'s PageSpeed Insights will tell you, free, in about a minute. Every page needs a unique title and description. Images need descriptive alt text. You need an XML sitemap submitted to Google Search Console, which is also free and is the only place you will see what people actually searched to find you.',
          'Structured data — a small block of code describing your business, services, and FAQs — helps search engines understand the page and can earn richer-looking results. For a local business, LocalBusiness schema with your address and hours is the one to have.',
          'Beyond that, most technical SEO advice you will read is aimed at large sites and is not where your next customer comes from.',
        ],
      },
      {
        heading: 'Links: the part nobody wants to hear',
        body: [
          'Links from other websites remain one of the strongest ranking signals, and they are the hardest thing to get. This is usually the real reason a well-built small-business site sits on page two while a mediocre competitor sits on page one — they have been around longer and more sites point at them.',
          'The realistic options for a small Australian business: get listed in legitimate directories, join your local chamber of commerce or industry association, sponsor a local club or event, ask suppliers and clients whose sites list partners, and publish something genuinely useful enough that people reference it. A free tool or a properly researched local guide earns more links than ten generic blog posts.',
          'Avoid buying links. It works until it does not, and the recovery is worse than never having ranked.',
        ],
      },
      {
        heading: 'What to ignore for now',
        body: [
          'Publishing thin blog posts on a weekly schedule because "content is king" is the most common way small businesses waste money on SEO. Ten shallow posts are worth less than one page that genuinely answers a question people search for.',
          'Similarly, chasing broad national keywords — "web design", "plumber", "accountant" — is usually futile for a small business. The competition has years of links and budget. You win on specific and local: the long-tail phrases with lower volume and far higher intent.',
          'And be sceptical of any agency selling a fixed monthly SEO retainer without telling you specifically what they will do each month. Ask for the deliverables. If the answer is vague, the work usually is too.',
        ],
      },
      {
        heading: 'A realistic first 90 days',
        body: [
          'Month one: claim and complete your Google Business Profile, set up Search Console and Analytics, run PageSpeed Insights and fix the obvious problems, and start asking every customer for a review.',
          'Month two: sort out your page structure. One page per service, one per location you genuinely serve, each with a unique title, a single clear H1, and honest AUD pricing where you can. Make sure every page is linked to from somewhere — orphan pages get discounted.',
          'Month three: build one genuinely useful thing — a local guide, a cost breakdown, a checklist — and tell people about it. Then start the unglamorous link work: directories, associations, suppliers, local sponsorship.',
          'After that it is repetition and patience. Check Search Console monthly to see which queries you are actually appearing for; that data is usually more useful than any keyword tool, because it is about your site specifically.',
        ],
      },
    ],
    takeaways: [
      'For local businesses, Google Business Profile and review volume beat almost any on-site work.',
      'One page, one primary keyword — two pages on the same term compete with each other.',
      'Australians search local and price-first; honest AUD pricing content attracts buyers.',
      'Links are the real bottleneck, and useful resources earn them better than thin blog posts.',
      'Expect months, not weeks. Anyone promising fast rankings is not being straight with you.',
    ],
  },
];

export function getGuide(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}
