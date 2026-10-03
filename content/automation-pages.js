/**
 * Dedicated automation pages (4 Oct 2026). One page per automation so each can
 * rank for its own search terms. Rendered by components/automation/AutomationPage.js
 * from thin route files at app/<slug>/page.js.
 *
 * KEYWORD MAP (AU Keyword Planner, 3 Oct 2026 — docs/AUTOMATION-KEYWORD-RESEARCH-2026-10.md).
 * One primary keyword per page; no two pages share a primary.
 *   /lead-follow-up-automation/         lead follow up automation · speed to lead · missed call text back
 *   /automated-business-reports/        automated reporting · automated sales report · google sheets automation
 *   /customer-reactivation-automation/  customer reactivation · win back campaign · sms/email automation
 *   /crm-integration-data-sync/         crm integration · data entry automation · crm automation
 *   /ai-chatbot-for-business/           ai chatbot for business · ai chatbot for website · ai receptionist (chat)
 * The hub (/services/ai-automation/) owns "ai automation agency".
 *
 * RULES
 *  - No prices (automation pricing is quote-only — see AUTOMATION_OFFERS).
 *  - No results, client counts or testimonials: we have no automation case
 *    study yet. "Example" scenarios are labelled as examples.
 *  - Tools: generic ones only until Aman confirms named platforms (D6).
 *  - No phone/voice AI claims (D7).
 *  - Outcome first, technology second (CLAUDE.md §0).
 */

export const AUTOMATION_PAGES = [
  /* ───────────────────────────── LEAD FOLLOW-UP ───────────────────────────── */
  {
    slug: 'lead-follow-up-automation',
    offerId: 'lead-reply',
    metaTitle: 'Lead Follow-Up Automation | Instant Replies to Every Enquiry',
    metaDescription:
      'Automated lead follow-up for Australian small businesses: every enquiry gets an instant reply, you get an alert on your phone, and the lead is saved. Missed call text-back included. Free audit.',
    keywords: ['lead follow up automation', 'automated lead follow up', 'speed to lead', 'missed call text back', 'crm automation'],
    eyebrow: 'Lead follow-up automation',
    h1: 'Lead follow-up automation',
    h1Accent: 'so every enquiry gets an answer in seconds',
    lead: 'When someone fills in your form, messages you or calls while you are busy, they get a reply straight away, you get the details on your phone, and the lead is saved where you can find it. No more 9pm catch-ups.',
    heroPoints: ['Instant reply, day or night', 'Missed calls get a text back', 'Every lead saved in one list'],
    whatIs: {
      q: 'What is lead follow-up automation?',
      a: 'Lead follow-up automation is a small system that responds to a new enquiry the moment it arrives. It sends the customer a reply (by email or SMS), alerts you with their details, and records the lead in a spreadsheet or CRM, so nobody waits and nothing is lost. It does not replace your call; it buys you the time to make it.',
    },
    problem: {
      title: 'Why slow replies cost you jobs',
      body: 'Most people asking for a quote contact more than one business. The first one to respond usually gets the conversation. If you are on a job, with a patient or driving, your enquiry sits unanswered for hours, and by the time you call back they have booked someone else.',
      points: ['Enquiries arrive while you are working', 'Missed calls never leave a message', 'Leads live in five places: inbox, texts, Facebook, notebook, memory'],
    },
    flow: [
      { title: 'Someone enquires', body: 'Website form, Facebook lead form, or a call you could not answer.' },
      { title: 'They get a reply instantly', body: 'A friendly, branded message confirming you have it and when you will be in touch.' },
      { title: 'You get an alert', body: 'Name, what they need, suburb and phone number, straight to your phone.' },
      { title: 'The lead is saved', body: 'Added to your lead list or CRM, with where it came from, ready for follow-up.' },
    ],
    useCases: [
      { icon: 'phone', title: 'Missed call text-back', body: 'If you cannot pick up, the caller gets a text within a minute asking what they need, so the job does not go to the next number on Google.' },
      { icon: 'list', title: 'Website form replies', body: 'A real reply in seconds instead of "thanks for your message", with what happens next and when.' },
      { icon: 'bell', title: 'Instant alerts', body: 'The enquiry lands on your phone in a readable format, not buried in an inbox you check at night.' },
      { icon: 'calendar', title: 'Follow-up reminders', body: 'If a quote has not been answered in two days, you get a nudge, or the customer gets a polite check-in.' },
      { icon: 'filter', title: 'Basic qualifying', body: 'A couple of questions (suburb, job type, timing) so you know which leads to call first.' },
      { icon: 'grid', title: 'One lead list', body: 'Every enquiry from every source in one place, with dates and status, instead of scattered across apps.' },
    ],
    example: {
      label: 'Example scenario',
      title: 'A plumber on a job at 2pm',
      steps: [
        'A homeowner in Brunswick fills in the quote form about a leaking hot water system.',
        'Within seconds they get a text: "Thanks Sam, we\'ve got your request and will call you by 4pm today."',
        'The plumber\'s phone shows the job, suburb and number in one message.',
        'The lead is added to a Google Sheet marked "new", and turns "follow up" if nobody has called by 4pm.',
      ],
    },
    tools: ['Your website form', 'Facebook lead forms', 'Your phone line', 'SMS', 'Gmail or Outlook', 'Google Sheets', 'Your CRM'],
    faqs: [
      { q: 'How fast is the reply?', a: 'Usually within seconds of the enquiry arriving. Missed-call text-backs go out within about a minute of the missed call.' },
      { q: 'Will it sound like a robot?', a: 'No. We write the messages with you, in your words, and they can include the customer\'s name and what they asked about. Most customers simply see a prompt, friendly reply.' },
      { q: 'Do I need a CRM?', a: 'No. Many small businesses start with a Google Sheet. If you already use a CRM, we connect to it instead.' },
      { q: 'How does missed call text-back work?', a: 'When a call to your business number goes unanswered, the system sends the caller a short text asking how you can help. Their reply comes to you, so you can call back with context.' },
      { q: 'Is it allowed to text people automatically?', a: 'Replying to someone who has just contacted you is fine. We still identify your business in every message and never add people to marketing lists without consent, in line with the Spam Act 2003.' },
      { q: 'What does it cost?', a: 'It depends on how many lead sources you have and where the leads should go. You get a fixed written price after the free automation audit, before any work starts. Message fees, if any, are paid directly to the provider.' },
    ],
    related: ['crm-integration-data-sync', 'ai-chatbot-for-business', 'customer-reactivation-automation'],
  },

  /* ───────────────────────────── REPORTS ───────────────────────────── */
  {
    slug: 'automated-business-reports',
    offerId: 'report',
    metaTitle: 'Automated Business Reports | Daily Numbers in Your Inbox',
    metaDescription:
      'Automated reporting for Australian small businesses: yesterday\'s sales, leads and ad spend summarised and sent to your inbox or phone each morning. No more pulling numbers by hand. Free audit.',
    keywords: ['automated reporting', 'automated sales report', 'google sheets automation', 'daily sales report', 'automated business reports'],
    eyebrow: 'Automated reporting',
    h1: 'Automated business reports',
    h1Accent: 'your numbers, in your inbox before you start work',
    lead: 'Stop spending Monday morning copying figures into a spreadsheet. Yesterday\'s sales, enquiries and ad spend are pulled together, summarised in plain English and sent to your email or phone on a schedule you choose.',
    heroPoints: ['Daily or weekly, on autopilot', 'Plain English, not a data dump', 'Sent to email or phone'],
    whatIs: {
      q: 'What is automated reporting?',
      a: 'Automated reporting collects figures from the tools you already use (sales, bookings, enquiries, ad spend), combines them, and sends a short summary on a schedule. Instead of logging into four dashboards, you read one message that tells you what happened and what changed.',
    },
    problem: {
      title: 'Why owners stop looking at their numbers',
      body: 'The numbers exist, but they are spread across your till or online store, your inbox, your ad accounts and a spreadsheet. Pulling them together takes an hour, so it happens once a month at best, and problems show up late.',
      points: ['Figures in four different places', 'An hour of copy-paste each week', 'Problems spotted weeks after they start'],
    },
    flow: [
      { title: 'Data is collected', body: 'From your sales system, enquiry form, bookings or spreadsheet, overnight.' },
      { title: 'It is combined', body: 'Totals, comparisons with last week, and anything unusual flagged.' },
      { title: 'It is summarised', body: 'A few lines in plain English: what went up, what went down, what to look at.' },
      { title: 'It arrives', body: 'In your inbox or on your phone at the time you choose, every day or week.' },
    ],
    useCases: [
      { icon: 'chart', title: 'Daily sales summary', body: 'Yesterday\'s revenue, number of orders or jobs, and how it compares with the same day last week.' },
      { icon: 'list', title: 'Leads and enquiries', body: 'How many enquiries came in, from where, and how many are still waiting for a reply.' },
      { icon: 'bolt', title: 'Ad spend check', body: 'What you spent on ads and how many enquiries it produced, so you can see if it is paying off.' },
      { icon: 'bell', title: 'Exception alerts', body: 'A heads-up when something is off, like no orders by lunchtime or a spike in refunds.' },
      { icon: 'grid', title: 'Spreadsheet kept up to date', body: 'Figures written into your Google Sheet automatically, so the history builds itself.' },
      { icon: 'calendar', title: 'Weekly owner\'s brief', body: 'A Monday summary of the week for you or a business partner, with the key numbers only.' },
    ],
    example: {
      label: 'Example scenario',
      title: 'A café owner\'s 7am message',
      steps: [
        'Overnight, yesterday\'s sales and online orders are collected.',
        'At 7am a message arrives: "Yesterday: $2,340 (+8% on last Tuesday). 41 online orders. Best seller: breakfast wrap."',
        'It notes that online orders dropped after 2pm, which matches a delivery-app outage.',
        'The figures are also added to a Google Sheet that now holds the full history.',
      ],
    },
    tools: ['Google Sheets', 'Your online store or POS export', 'Your enquiry form', 'Gmail or Outlook', 'WhatsApp', 'Your ad accounts'],
    faqs: [
      { q: 'Which numbers can be included?', a: 'Anything we can read from a tool you use or a file it exports: sales, orders, bookings, enquiries, ad spend and similar. During the free audit we check what your systems allow.' },
      { q: 'Can it come to my phone?', a: 'Yes. Email is the simplest, and a phone message works too if that is where you read things first.' },
      { q: 'Do I need special software?', a: 'No. Most reports are built on what you already have. A Google Sheet is often enough to store the history.' },
      { q: 'Is this a dashboard?', a: 'No. A report comes to you on a schedule, so you do not have to remember to log in. If you also want a live dashboard, we can quote that separately.' },
      { q: 'How long does it take to set up?', a: 'A typical report is ready within a week, once we have access to the tools involved.' },
      { q: 'What does it cost?', a: 'It depends on how many sources the report pulls from. You get a fixed written price after the free automation audit, before any work starts.' },
    ],
    related: ['crm-integration-data-sync', 'lead-follow-up-automation', 'customer-reactivation-automation'],
  },

  /* ───────────────────────────── RE-ENGAGEMENT ───────────────────────────── */
  {
    slug: 'customer-reactivation-automation',
    offerId: 'win-back',
    metaTitle: 'Customer Reactivation & Win-Back Automation | Australia',
    metaDescription:
      'Win back customers who have gone quiet with well-timed, personal email or SMS messages, sent automatically with consent and an unsubscribe as the Spam Act requires. For Australian small businesses. Free audit.',
    keywords: ['customer reactivation', 'win back campaign', 'customer win back', 'sms marketing automation', 'email automation small business'],
    eyebrow: 'Customer reactivation',
    h1: 'Customer reactivation automation',
    h1Accent: 'bring quiet customers back without chasing them',
    lead: 'Your best new customers are often your old ones. When someone has not booked or bought in a while, they get a well-timed, personal message from you, automatically, with consent and an unsubscribe built in.',
    heroPoints: ['Triggered by time since last visit', 'Personal, not a newsletter blast', 'Spam Act compliant by design'],
    whatIs: {
      q: 'What is a win-back campaign?',
      a: 'A win-back campaign is a short series of messages sent to customers who have not returned for a set time, such as 90 days since their last booking. Each message is personal and useful (a reminder, a check-in, an offer if you choose), and it stops as soon as they book or unsubscribe.',
    },
    problem: {
      title: 'Why customers drift away',
      body: 'Most customers do not leave because they were unhappy. They get busy and forget. Following up by hand means remembering who is overdue, writing each message and keeping track, so it rarely happens.',
      points: ['No one tracks who is overdue', 'Generic newsletters get ignored', 'Messaging without consent risks Spam Act breaches'],
    },
    flow: [
      { title: 'Someone goes quiet', body: 'No booking or purchase for the period you choose, such as 60 or 90 days.' },
      { title: 'A personal message goes out', body: 'By email or SMS, in your voice, using their name and what they last had.' },
      { title: 'A follow-up if needed', body: 'Up to three messages, spaced out, and it stops the moment they respond.' },
      { title: 'Replies come to you', body: 'Bookings, questions and unsubscribes are handled automatically or sent your way.' },
    ],
    useCases: [
      { icon: 'calendar', title: 'Service reminders', body: 'Due-for-a-service messages for trades, car care, salons, clinics and pet services.' },
      { icon: 'refresh', title: '"We miss you" check-ins', body: 'A friendly note after a long gap, without a discount if you would rather not give one.' },
      { icon: 'cart', title: 'Lapsed buyers', body: 'For online stores: a message to customers who bought once and never came back.' },
      { icon: 'chat', title: 'Review requests', body: 'Ask happy customers for a Google review at the right moment, which also helps you rank locally.' },
      { icon: 'shield', title: 'Consent built in', body: 'Every message identifies your business and includes a working unsubscribe.' },
      { icon: 'filter', title: 'Smart exclusions', body: 'People who have just booked, complained or unsubscribed are left out automatically.' },
    ],
    example: {
      label: 'Example scenario',
      title: 'A dog groomer\'s 8-week reminder',
      steps: [
        'Eight weeks after Bella\'s last groom, her owner gets a text: "Hi Priya, Bella\'s due for a groom. Reply YES and we\'ll send times."',
        'No reply after five days: one gentle email with the booking link.',
        'Priya books online, so the sequence stops automatically.',
        'Anyone who replies STOP is removed from future messages straight away.',
      ],
    },
    tools: ['Your customer list or booking system', 'Email', 'SMS', 'Google Sheets', 'Your CRM'],
    faqs: [
      { q: 'Is this legal in Australia?', a: 'Yes, when it follows the Spam Act 2003: you need consent (which existing customers can often give through an ongoing relationship), every message must identify your business, and there must be a working unsubscribe. We build all three in and tell you if a list does not qualify.' },
      { q: 'Will my customers find it pushy?', a: 'Not if it is well timed and genuinely useful. We keep it to a few messages, written in your voice, and it stops as soon as someone books or opts out.' },
      { q: 'Do I have to offer discounts?', a: 'No. Reminders and check-ins often work on their own. Offers are your choice.' },
      { q: 'Email or SMS?', a: 'SMS is read more quickly; email costs less and suits longer messages. Many businesses use one of each in the sequence.' },
      { q: 'Where does the customer list come from?', a: 'From your booking system, online store, CRM or a spreadsheet. During the free audit we check what you have and whether consent is in place.' },
      { q: 'What does it cost?', a: 'It depends on the number of messages and where your customer data lives. You get a fixed written price after the free automation audit. SMS sending fees are paid directly to the provider.' },
    ],
    related: ['lead-follow-up-automation', 'automated-business-reports', 'ai-chatbot-for-business'],
  },

  /* ───────────────────────────── DATA SYNC ───────────────────────────── */
  {
    slug: 'crm-integration-data-sync',
    offerId: 'data-sync',
    metaTitle: 'CRM Integration & Data Sync for Small Business | Australia',
    metaDescription:
      'Connect your forms, spreadsheet, CRM and accounting so they stay in sync automatically. Stop typing the same details twice. CRM integration and data entry automation for Australian small businesses. Free audit.',
    keywords: ['crm integration', 'data entry automation', 'crm automation', 'data sync', 'integrate crm with website'],
    eyebrow: 'CRM integration & data sync',
    h1: 'CRM integration and data sync',
    h1Accent: 'enter it once, see it everywhere',
    lead: 'Your website form, spreadsheet, CRM and invoicing tool all hold the same customer details, typed in by hand, slightly differently each time. We connect them so one change updates everywhere and duplicates are cleaned up on the way in.',
    heroPoints: ['No more double entry', 'Duplicates cleaned automatically', 'Alerts if a sync ever fails'],
    whatIs: {
      q: 'What is CRM integration?',
      a: 'CRM integration connects your customer database to the other tools you use, such as your website form, email, calendar or accounting software. When something happens in one tool, like a new enquiry or a paid invoice, the others update automatically, so your records match without anyone retyping them.',
    },
    problem: {
      title: 'Why double entry costs more than time',
      body: 'Every time details are copied by hand, mistakes creep in: a wrong email, a missed phone digit, two records for the same person. Then follow-ups go to the wrong place, reports disagree, and nobody trusts the spreadsheet.',
      points: ['Same details typed into three tools', 'Duplicates and typos everywhere', 'Reports that never agree'],
    },
    flow: [
      { title: 'Something changes', body: 'A new enquiry, a booking, an updated phone number or a paid invoice.' },
      { title: 'It is checked', body: 'Formatting tidied, duplicates matched to the existing customer.' },
      { title: 'Every tool updates', body: 'CRM, spreadsheet and accounting all receive the same, correct record.' },
      { title: 'You are told if anything fails', body: 'An alert explains what did not sync, so nothing goes missing quietly.' },
    ],
    useCases: [
      { icon: 'list', title: 'Website form to CRM', body: 'Every enquiry becomes a CRM contact with source and notes, without copy-paste.' },
      { icon: 'grid', title: 'CRM to spreadsheet', body: 'A live sheet of customers or jobs for people who prefer spreadsheets.' },
      { icon: 'link', title: 'Jobs to invoicing', body: 'When a job is marked done, the customer details flow to your invoicing tool.' },
      { icon: 'filter', title: 'Duplicate clean-up', body: 'Matching on email or phone so the same person is not entered three times.' },
      { icon: 'calendar', title: 'Bookings to records', body: 'New bookings update the customer\'s record and history automatically.' },
      { icon: 'shield', title: 'Documented and owned', body: 'You get a written description of every connection, and every account stays in your name.' },
    ],
    example: {
      label: 'Example scenario',
      title: 'A small accounting practice',
      steps: [
        'A new client enquiry from the website creates a CRM contact, tagged "website".',
        'When the engagement is confirmed, the client is added to the practice\'s client spreadsheet.',
        'Their details are created in the invoicing tool, ready for the first invoice.',
        'If the same person enquires again, the system recognises them instead of creating a duplicate.',
      ],
    },
    tools: ['Your website forms', 'Your CRM', 'Google Sheets', 'Your accounting or invoicing tool', 'Your booking system', 'Gmail or Outlook'],
    faqs: [
      { q: 'Which tools can you connect?', a: 'Most tools small businesses use can exchange data, either directly or through their exports. We confirm exactly what your tools allow during the free audit, before quoting.' },
      { q: 'What happens to my existing data?', a: 'New data syncs from the day we switch on. Moving years of old records across is a separate job we can quote if you need it.' },
      { q: 'What if a sync breaks?', a: 'You get an alert explaining what failed. On the optional Care plan we monitor the connections and fix them when a tool changes.' },
      { q: 'Do I own the connections?', a: 'Yes. They run in accounts in your name, and you get documentation of each one, so another developer could maintain them if you ever wanted.' },
      { q: 'Is my data safe?', a: 'We only request the access each connection needs, use the tools\' official connection methods, and do not keep copies of your customer data.' },
      { q: 'What does it cost?', a: 'It depends on how many tools are connected and how they talk to each other. You get a fixed written price after the free automation audit, before any work starts.' },
    ],
    related: ['lead-follow-up-automation', 'automated-business-reports', 'ai-chatbot-for-business'],
  },

  /* ───────────────────────────── AI CHATBOT ───────────────────────────── */
  {
    slug: 'ai-chatbot-for-business',
    offerId: 'ai-replies',
    metaTitle: 'AI Chatbot for Business | Website Chatbot, Australia',
    metaDescription:
      'An AI chatbot for your business website, trained on your own services and FAQs. Answers common questions 24/7, captures enquiries and hands over to a person when needed. Plus AI-drafted email replies. Free audit.',
    keywords: ['ai chatbot for business', 'ai chatbot for website', 'website chatbot australia', 'ai customer service small business', 'ai receptionist'],
    eyebrow: 'AI chatbot for business',
    h1: 'AI chatbot for business',
    h1Accent: 'answers your customers 24/7, in your words',
    lead: 'A chatbot on your website that knows your services, prices, hours and policies, answers the questions you get every day, captures the enquiry and hands the conversation to you when it needs a person. It can also draft email replies for you to approve.',
    heroPoints: ['Trained on your own content', 'Hands over to a person', 'Every conversation logged'],
    whatIs: {
      q: 'What is an AI chatbot for business?',
      a: 'An AI chatbot is an assistant on your website that answers visitors\' questions in natural language, using information you provide: your services, prices, hours, service areas and FAQs. Unlike older scripted chatbots, it understands questions phrased in different ways, and a good one says when it does not know and passes the conversation to a person.',
    },
    problem: {
      title: 'Why the same questions eat your day',
      body: '"Do you service my suburb?", "How much is a…", "Are you open Saturday?" Each answer takes two minutes, but there are dozens, and the ones that arrive after hours wait until morning, by which point the visitor has moved on.',
      points: ['The same ten questions, every day', 'After-hours visitors leave unanswered', 'Old scripted chatbots frustrate people'],
    },
    flow: [
      { title: 'A visitor asks', body: 'In their own words, any time of day, on your website.' },
      { title: 'The AI answers', body: 'Using only the information you approved: services, prices, hours, policies.' },
      { title: 'It captures the enquiry', body: 'Name and contact details when they are ready to book or get a quote.' },
      { title: 'It hands over to you', body: 'When it is unsure or a person is needed, you get the full conversation.' },
    ],
    useCases: [
      { icon: 'chat', title: 'FAQ answering', body: 'Hours, service areas, what is included, how booking works: answered instantly.' },
      { icon: 'list', title: 'Enquiry capture', body: 'Turns a late-night visitor into a lead with details, instead of a lost tab.' },
      { icon: 'filter', title: 'Pre-qualifying', body: 'Asks the questions you would ask, so you know what the job is before you call.' },
      { icon: 'edit', title: 'AI-drafted email replies', body: 'Drafts replies to common emails in your tone for you to check and send.' },
      { icon: 'user', title: 'Handover to a person', body: 'Clear rules for when the AI stops and you take over, with the conversation attached.' },
      { icon: 'shield', title: 'Guardrails', body: 'It answers only from your content, does not make promises you have not approved, and every chat is logged.' },
    ],
    example: {
      label: 'Example scenario',
      title: 'A physio clinic at 10pm',
      steps: [
        'A visitor asks: "Do you do dry needling and can I claim on my health fund?"',
        'The chatbot answers from the clinic\'s own information and explains how claiming works there.',
        'The visitor asks for a Saturday appointment; the chatbot takes their details and preferred times.',
        'Reception sees the enquiry and the full chat first thing in the morning and confirms the booking.',
      ],
    },
    tools: ['Your website', 'Your FAQs and service information', 'Gmail or Outlook', 'Your booking or enquiry form', 'Your CRM'],
    faqs: [
      { q: 'Will it make things up?', a: 'It answers only from the information you supply and is instructed to say when it does not know, then hand over to a person. You can read every conversation.' },
      { q: 'How is this different from older chatbots?', a: 'Older chatbots follow fixed buttons and break when someone phrases a question differently. An AI chatbot understands normal language, while still sticking to your approved content.' },
      { q: 'Can it answer phone calls?', a: 'This service covers website chat and AI-drafted email replies. For missed calls, our lead follow-up automation can text callers straight back.' },
      { q: 'Which AI does it use?', a: 'We choose a reputable provider for the job (such as OpenAI, Anthropic or Google) and use their business services, which do not train their models on your data by default.' },
      { q: 'Are there ongoing costs?', a: 'You pay the AI provider directly for usage, which is usually a modest monthly amount for a small business website. Optional Care covers monitoring and updates.' },
      { q: 'What does it cost to set up?', a: 'It depends on how much information it needs to learn and where enquiries should go. You get a fixed written price after the free automation audit, before any work starts.' },
    ],
    related: ['lead-follow-up-automation', 'crm-integration-data-sync', 'customer-reactivation-automation'],
  },
]

export const getAutomationPage = (slug) => AUTOMATION_PAGES.find((p) => p.slug === slug)
