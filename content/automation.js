/**
 * AI & Automation — content for the hub at /services/ai-automation/ and the
 * free audit at /free-automation-audit/ (Sprint 2, 4 Oct 2026).
 *
 * Layout modelled on the approved demo (docs/AUTOMATION-PAGE-DEMO.html).
 * Prices are NOT here: they come from AUTOMATION_OFFERS in content/pricing.js.
 *
 * HONESTY (CLAUDE.md §1):
 *  - No testimonials, results or stats for automation: we have no automation
 *    case study yet. The proof section is our own contact form, which really
 *    does send an instant reply + alert, plus real AI client work (Autozenly).
 *  - TOOLS lists generic tools every small business already has. Add named
 *    platforms (Zapier, Make, n8n, HubSpot, Xero, WhatsApp API) only once Aman
 *    confirms he has built on them (decision D6, docs/DEV-PLAN-2026-10.md).
 *  - No voice/phone AI claims (D7).
 *
 * Primary keyword: "ai automation agency" (100–1K/mo AU). Supporting:
 * "small business automation", "business automation services",
 * "automation consultant". See docs/AUTOMATION-KEYWORD-RESEARCH-2026-10.md.
 */

export const AUTOMATION_HUB = {
  path: '/services/ai-automation/',
  metaTitle: 'AI Automation Agency Australia for Small Business | Free Audit',
  metaDescription:
    'AI and business automation for Australian small businesses: instant lead replies, morning reports, win-back messages, data sync and AI chatbots on the tools you already use. Free automation audit, fixed price.',
  eyebrow: 'AI & business automation · Australia',
  h1: 'Every enquiry answered. Every report sent.',
  h1Accent: 'Without you.',
  lead:
    'We connect the tools you already use so leads get an instant reply, your numbers land in your inbox each morning, and nothing gets typed twice. You get the hours back.',
  assurances: ['Month to month', 'No tech skills needed', 'Built on tools you already pay for'],

  /* Hero feed: an illustration of what the automations do, labelled as an example.
   `icon` keys come from ICONS in components/landing/ServiceKit.js (no emoji). */
  feed: [
    { icon: 'list', bg: '#FEF0C7', title: 'New website enquiry', sub: 'Plumbing quote · Brunswick', tag: '0:00' },
    { icon: 'bell', bg: '#DCFAE6', title: 'Alert sent to your phone', sub: 'Name, job, suburb, phone', tag: '✓ 0:04' },
    { icon: 'chat', bg: '#E0F2FE', title: 'Customer gets a reply', sub: '"Thanks Sam, we\'ll call by 8am"', tag: '✓ 0:09' },
    { icon: 'grid', bg: '#F4F3FF', title: 'Added to your lead list', sub: 'No copy-paste', tag: '✓ 0:11' },
    { icon: 'chart', bg: '#F4FAFB', title: 'Tomorrow 7:00am', sub: 'Yesterday\'s leads and sales in your inbox', tag: 'Scheduled' },
  ],

  tools: ['Your website forms', 'Gmail', 'Outlook', 'Google Sheets', 'WhatsApp', 'SMS', 'Facebook lead forms', 'Your CRM'],

  pains: [
    { icon: 'chat', title: '"I reply to enquiries at 9pm."', body: 'The lead came in at 2pm while you were on a job. By the time you answer, they\'ve rung someone else.' },
    { icon: 'flow', title: '"Nothing talks to anything."', body: 'Form, inbox, spreadsheet, invoices. You are the copy-paste between every app you pay for.' },
    { icon: 'refresh', title: '"I tried doing it myself. Gave up."', body: 'It looked simple, then it broke quietly and nobody noticed for a month. So it\'s back to doing it by hand.' },
  ],

  steps: [
    { title: 'Tell us what eats your time', body: 'Four quick questions in plain English. No call needed unless you want one.' },
    { title: 'Get your automation map', body: 'A written list of what to automate first, ranked by time saved, with a fixed AUD price for each.' },
    { title: 'We build, test and watch it', body: 'Live in days on the tools you already use. We test it with you, launch together, and monitor it if you want us to.' },
  ],

  proof: {
    title: 'Don\'t take our word for it. Try it on us.',
    lead: 'Our own contact form runs the same lead-reply automation we build for clients. Send us a message and time the reply.',
    timeline: [
      { t: '0 sec', title: 'You press "Send"', body: 'Your message reaches our system.' },
      { t: 'Seconds', title: 'You get a branded reply', body: 'It confirms what you asked for and what happens next.' },
      { t: 'Seconds', title: 'We get an alert', body: 'Name, phone, the page you came from and the time in Melbourne.' },
      { t: '< 1 day', title: 'A person follows up', body: 'The automation buys time. It does not replace the conversation.' },
    ],
    clientWork: { label: 'Autozenly AI', href: '/work/autozenlyai/', note: 'an AI platform we built for a client, with several AI providers behind one product' },
  },

  faqs: [
    { q: 'What does an AI automation agency actually do?', a: 'We look at the steps you repeat every day (replying to enquiries, chasing quotes, building reports, copying data between apps) and build small systems that do them for you, on the tools you already use. You get the workflow documented and you own every account.' },
    { q: 'I\'m not technical. Can I still automate things?', a: 'Yes. You tell us what you do by hand; we build it, test it with you and hand it over. You don\'t need to log into anything new unless you want to.' },
    { q: 'How much does business automation cost?', a: 'It depends on how many tools are involved and what the automation needs to do, so we price each one after the free audit: you get a fixed written price before any work starts, with no hourly billing. Message or AI usage fees, if any, are paid directly to the provider.' },
    { q: 'What happens if a tool changes and the automation breaks?', a: 'That is the main reason do-it-yourself automations fail quietly. On the optional Care plan we monitor every workflow and fix it when a connected tool changes. Without Care, we fix it at a fixed price.' },
    { q: 'Is it legal to message past customers automatically?', a: 'In Australia, yes, if you follow the Spam Act 2003: you need consent, the message must identify your business, and it must include a working unsubscribe. We build all three in, and we will tell you if a list doesn\'t qualify.' },
    { q: 'Who owns the automations and the data?', a: 'You do. Accounts sit in your name, data stays in your tools, and you get documentation of every workflow. There is no platform subscription you have to keep paying us for.' },
    { q: 'Does AI answer my customers on its own?', a: 'Only if you want it to. An AI chatbot answers common questions from the information you give it and hands over to a person when it is unsure. For email, it can draft replies in your tone for you to approve before anything is sent.' },
  ],

  related: [
    { tag: 'Free', title: 'Free automation audit', href: '/free-automation-audit/' },
    { tag: 'AI', title: 'AI-powered websites', href: '/ai-web-development/' },
    { tag: 'Software', title: 'Custom software', href: '/services/custom-software/' },
    { tag: 'Pricing', title: 'Website and automation pricing', href: '/pricing/' },
  ],
}

/* ── Free automation audit (/free-automation-audit/) ── */
export const AUTOMATION_AUDIT = {
  path: '/free-automation-audit/',
  turnaround: '2 business days',
  questions: [
    {
      id: 'sources',
      title: 'Where do your leads come from?',
      hint: 'Pick all that apply.',
      options: ['Website form', 'Phone calls', 'Facebook / Instagram', 'WhatsApp', 'Google Business Profile', 'Email'],
    },
    {
      id: 'timeSink',
      title: 'What takes the most time each week?',
      hint: 'Pick up to two.',
      max: 2,
      options: ['Replying to enquiries', 'Making reports', 'Chasing quotes', 'Copying data between apps', 'Booking appointments', 'Invoicing / payments'],
    },
    {
      id: 'tools',
      title: 'Which tools do you use now?',
      hint: 'Pick all that apply.',
      options: ['Gmail / Google', 'Outlook / Microsoft', 'Xero or MYOB', 'A CRM', 'Spreadsheets', 'Not sure'],
    },
  ],
  faqs: [
    { q: 'What do I get from the audit?', a: 'A short written map of the three automations that would save you the most time, what each one would do, which of your tools it uses, and a fixed AUD price for each. If something isn\'t worth automating, we say so.' },
    { q: 'Is it really free?', a: 'Yes. No card, no obligation. Most people use it to decide whether automation is worth it before spending anything.' },
    { q: 'Do I need a call?', a: 'No. The four questions are enough for a first map. If you\'d rather talk it through, you can book a free call instead.' },
  ],
}
