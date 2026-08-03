# Build First Site — Agency Operating Plan

**Single source of truth.** Business strategy + website content + technical
standards + growth roadmap, in one document.

**Purpose.** Every decision the site depends on, every service line, every page,
every open question — in the same place. Nothing else gets built without an
edit here first.

**Scope.** Build First Site (buildfirstsite.com) is a modern software studio
serving Australian small businesses. Services: **web development, mobile & web
apps, AI integration, desktop / custom software, hosting & retainers.**

**Status.** Living document. Draft supersedes the two prior plans (content plan
+ agency strategy) — reconciled below.

---

# PART I — STRATEGY

## 1. Vision & mission

**Vision.** Become the most trusted modern software studio for Australian small
businesses — the shop they call for a website today and a custom AI-powered
system three years from now.

**Mission.** Deliver production-quality software with transparent AUD pricing,
full code ownership, and long-term partnerships. Compete on being *verifiably
real* in a market where most offshore competitors pretend to be local Australian
agencies.

## 2. Core principles (non-negotiable)

1. **Fixed AUD pricing where possible.** Published upfront, quoted in writing
   before work starts.
2. **Client owns the code.** Full repo + accounts handover on completion. No
   platform lock-in.
3. **No fake testimonials, fake stats, fake logos, fake reviews.** Australian
   Consumer Law treats these as misleading conduct. It is also the fastest way
   to lose the one edge we have — being verifiably real.
4. **Honest about trade-offs.** If a page builder would serve the client better,
   we say so. If we don't have the expertise, we say so. First-call losses are
   cheaper than mid-project ones.
5. **Performance first.** Core Web Vitals green. Every build.
6. **Security by default.** HTTPS, dependency updates, sensible auth, no client
   secrets in the browser.
7. **Long-term relationships over one-off projects.** The retainer is the
   business; the build is how it starts.

## 3. Positioning (the ground truth about who we are, today)

Build First Site is a **small, growing studio**:

- **Aman** — founder + lead engineer, based in India. Full-stack (Next.js,
  React, Node, AWS), mobile (React Native, Flutter), AI (OpenAI / Claude /
  Gemini). 7 years, including enterprise fintech at L&T Finance.
- **Local contact in Australia** — for calls, quotes, paperwork, and being on
  the phone during AU hours. *(Publicly unnamed at Aman's request.)*
- **Contractors and collaborators** are brought in as scope requires, and
  credited by name in project docs. **We do not invent them.**

**We are honest that this is a small team.** In copy we use *"we"* and
*"our"* because more than one person is involved — and as we hire real
contractors, we can say *"our team"* accurately. What we never do:

- Publish stock photos of people who aren't real
- Claim numbers we can't defend ("500+ clients", "98% satisfaction")
- Invent testimonials, review counts, or client logos
- Present as an all-Australian operation when the engineering happens in India

The India-in-engineering / Australia-in-contact structure is a feature, not
something to hide. It's why the pricing works. Say it plainly.

## 4. The wedge — differentiators to lean on constantly

| Wedge | Why competitors lose here |
|---|---|
| Published AUD pricing | Almost every AU competitor hides behind "contact us" |
| Modern stack (Next.js / React / AI) | WordPress-plus-plugin agencies can't match performance or SEO baseline |
| Fast delivery, direct developer access | Larger agencies insert account managers; work stalls |
| Full code ownership | Wix/Squarespace/Shopify/Webflow lock you in forever |
| Real AU local contact + real engineer you talk to | Dev Story, SOTATEK, SDLC Corp, CODECLOUDS all present as "Sydney" while operating from India/Vietnam with empty phone fields |

## 5. Where we lose (right now) and how to close it

| Gap | Cost | How we close it |
|---|---|---|
| Zero reviews | Blocks Clutch listing, GBP local pack, buyer shortlisting | Ask hsracegear + mobilearmour + autozenlyai for 1 review each. 2 gets us listed. |
| Zero backlinks | Slows every ranking effort | Guest posts, directories, useful free tools, client site backlinks |
| Thin case study depth | Buyers skim and leave | 1 deep case study per real client, with real numbers where available |
| No published cadence | Google reads a dead site as low-priority | 1 guide/month, non-negotiable |

## 6. Business pillars

Three revenue streams, in strategic order:

1. **Agency (services)** — 60–70% of revenue: websites, apps, AI systems,
   custom software, retainers. This funds everything.
2. **Media (audience)** — no direct revenue: SEO content, case studies,
   guides, LinkedIn, free tools. Builds inbound flow.
3. **Products (IP)** — later: SaaS, internal tools, AI products spun out of
   agency work. Year 3+.

## 7. Target market

**Primary — Australian SMBs.** Trades, restaurants & cafés, real estate,
professional services (dentists, lawyers, accountants), retail & e-commerce,
early-stage startups.

**Secondary — opportunistic.** UK and US work when it comes through the
network. Do not chase.

**We are NOT for:** enterprise procurement (they need account managers we
don't have), lowest-bid template shoppers (they'll never be happy), or clients
who can't tell us what success looks like.

## 8. Service ladder

Five product categories, priced in AUD, published upfront. Everything we do
fits into one of these.

| Ladder | Products | Starting AUD | Typical duration |
|---|---|---|---|
| **Grow** — attract customers | Landing pages, business websites, local SEO setup | $1,000 → $3,800 → | 1–3 weeks |
| **Sell** — take money online | E-commerce stores, booking systems, payment integration | $5,000 → | 4–6 weeks |
| **Build** — real products | Web apps, mobile apps (React Native), dashboards, SaaS MVPs | $6,500 → | 6–12 weeks |
| **Automate** — do less manual work | AI chatbots, lead qualification, appointment booking, CRM & workflow automation, AI voice agents | $2,500 → | 2–8 weeks |
| **Own** — custom software | Internal tools, admin portals, desktop / cross-platform apps (Electron / Tauri), custom back-office systems | $8,000 → | 8+ weeks, scoped per job |
| **Scale** — keep it running | Hosting, monitoring, backups, incremental features, security & dependency upkeep | Retainer from AU$/mo | Monthly |

*(Prices are the current v1 anchors — some are estimates. See §26 open
decision 1 for the reconciliation Aman needs to sign off.)*

## 9. Technical standards

**Baseline stack.** Next.js (App Router), React, TypeScript, Node.js,
PostgreSQL, Docker, deployed to Vercel or AWS. CI/CD on GitHub Actions.

**Mobile.** React Native (cross-platform default), Flutter where the client
already has a Flutter codebase.

**AI.** OpenAI, Claude, Gemini — chosen per use case. Not one vendor
religiously.

**Non-negotiable per build:**

- Core Web Vitals green (LCP, CLS, INP)
- Mobile-first responsive (~68% of AU traffic is mobile)
- Semantic HTML, WCAG 2.2 AA accessibility
- HTTPS, sensible auth, no secrets in the browser
- Structured data (JSON-LD) for local business, articles, FAQs, products
- Sitemap + robots.txt, submitted to Search Console
- Analytics + error monitoring wired before launch
- Backup + restore plan documented for anything stateful

## 10. Marketing (channels, in order)

1. **Organic SEO** — the primary channel. Cluster around service + industry +
   city keywords. Publish 1 guide/month.
2. **Referrals** — every happy client is asked (once) for one intro to someone
   who could use the same work.
3. **Google Business Profile** — service-area business, real AU address,
   consistent NAP everywhere.
4. **Directories** — Clutch, business.gov.au, industry associations.
5. **LinkedIn** — Aman's account, one post per week showing work-in-progress
   or lessons learned. Not sales content.
6. **Selective Google Ads** — only for high-intent commercial terms once we
   have >5 case studies to convert on.
7. **Cold outreach** — last, and only for specific referable industries. No
   spray-and-pray.

## 11. Sales process

Lead → Discovery call (free, 30 min) → Written fixed AUD proposal in 24h →
Contract + 50% deposit → Kickoff + staging link within 3 days → Weekly
demos → QA + client sign-off → Launch → 30-day support → Case study + review
request → Retainer conversation → Referral ask.

**Response SLA:** first reply within 24h business hours. Missing this kills
early-stage trust more than anything else.

## 12. Operations

- **Reusable templates** — one canonical starter for landing pages, business
  sites, e-commerce, web apps.
- **Coding standards** — enforced by ESLint + Prettier + TypeScript strict.
- **Documentation** — every project ships a README with local setup, deploy
  procedure, env var list, and known caveats.
- **AI-assisted workflows** — Claude / Codex for boilerplate; every line still
  reviewed. Never ship code the human hasn't read.
- **Checklists** — pre-launch, post-launch, monthly retainer, incident
  response. See `docs/SEO-PLAYBOOK.md` for the SEO one.

## 13. Learning roadmap (2026–2028)

Skills we invest in deliberately, because they compound:

- **Infra:** AWS, Docker, Linux, Nginx, CI/CD, IaC (Terraform)
- **Data:** PostgreSQL optimisation, Redis, background jobs
- **Reliability:** monitoring, alerting, incident response, system design
- **AI engineering:** RAG patterns, evals, guardrails, cost management
- **Business:** sales, positioning, client management, financial modelling

Rule: pick one item per quarter, ship a real project using it, write a guide
about it. Learning-by-writing is faster than learning-by-course.

## 14. KPIs (reviewed monthly)

| Metric | Target Y1 |
|---|---|
| Organic sessions | 100 → 2,000/mo |
| Qualified leads | 2 → 8/mo |
| Booked discovery calls | 1 → 4/mo |
| Proposal → contract rate | ≥ 40% |
| Projects delivered | 8–12 |
| Retainers active | 3+ by month 12 |
| Referring domains | 0 → 25 |
| Real client testimonials | 0 → 6 |
| Case studies published | 3 → 8 |
| Core Web Vitals green on all pages | 100% |

Numbers are ranges/directions, not commitments. Reviewed and adjusted at each
month-end.

## 15. Five-year roadmap

| Year | Focus | Signals |
|---|---|---|
| **1** | Foundation. Rebuild site. Reviews + GBP. Ship first 12 clients. First retainer. | 100 pages, 25 referring domains, first monthly income floor |
| **2** | Authority. 250+ pages. Regular referrals. First contractor hired. | Predictable inbound. Retainer income covers Aman's costs. |
| **3** | Team. 2–3 contractors + AU project lead. First productised service. | Aman stops selling own time; runs sales + architecture. |
| **4** | Products. Spin one internal tool into a SaaS beta. Agency continues to fund it. | Two revenue lines. |
| **5** | Boutique + product. Small team, high-value projects, recurring product revenue. | Boring, profitable, sustainable. |

## 16. Immediate execution (next 30 days)

Numbered so we can tick them off:

1. Finalise pricing per §26 open decision 1.
2. Rebuild the homepage per Part II §21.
3. Ship /services, /work, /pricing, /about, /contact, /guides pages (already
   wired to Agon templates; content swap next).
4. Publish 3 case studies with real (not invented) numbers.
5. Set up Google Business Profile — service-area, AU address, real NAP.
6. Create Clutch profile. Request 3 real reviews from hsracegear /
   mobilearmour / autozenlyai.
7. Set up a reusable AWS-ready Next.js starter (internal template).
8. Publish 1 guide (already written — port from `content/guides.js`).
9. Verify all sitemaps in Search Console.
10. Track KPIs baseline before any promotion begins.

---

# PART II — WEBSITE CONTENT PLAN

## 17. Site voice

- Plain, direct. No superlatives, no exclamation marks.
- Trade honesty for trust. "We can't do that well" beats "Yes."
- Never "team of experts" unless we can name each expert.
- Never a number without a source.
- Would a Brisbane plumber understand this? — the sniff test.

## 18. Nav architecture

**Main nav — flat, 6 items, dropdown only where it earns its keep:**

| Nav item | Href | Notes |
|---|---|---|
| Services | `/services/` | Hub + dropdown to individual service pages |
| Work | `/work/` | Case study grid |
| Pricing | `/pricing/` | AUD, published |
| About | `/about/` | Who we are, honestly |
| Guides | `/guides/` | Long-form articles |
| Contact | `/contact/` | Form + call link + AU phone |

**Right-side CTA:** *Book a call* → Calendly. Every page.

**Services dropdown:**

- Business Websites → `/hire-website-builder/`
- E-Commerce Development → `/ecommerce-development/`
- AI Chatbots & Booking → `/ai-chatbot-development-australia/`
- App Development → `/app-development-australia/`
- Custom Software → `/custom-software-development-australia/` *(P1, to write)*
- AI Web Development → `/ai-web-development/`
- Next.js Development → `/nextjs-development/`
- *(divider)*
- All services → `/services/`

**Footer — 5 columns:**

| Column | Links |
|---|---|
| Services | 7 service pages |
| Industries | Tradies · Restaurants · Real Estate |
| Compare | Wix · Squarespace · Shopify · Webflow vs custom |
| Locations | Sydney · Melbourne · Brisbane · Perth · Adelaide |
| Learn | Case Studies · Guides · Blog · Cost guide · Rates guide |

**Mobile:** full-screen overlay, same 6 items expanded flat, CTA at bottom.

## 19. Site structure — every page

| Page | Slug | Status | Priority |
|---|---|---|---|
| Home | `/` | Rebuild in Agon | P0 |
| Services hub | `/services/` | New wrapper live, needs content | P0 |
| Business Websites | `/hire-website-builder/` | Static, ranks | P0 |
| E-Commerce Development | `/ecommerce-development/` | Static, ranks | P0 |
| AI Web Development | `/ai-web-development/` | Static, ranks | P0 |
| Next.js Development | `/nextjs-development/` | Static, ranks | P0 |
| AI Chatbots & Booking | `/ai-chatbot-development-australia/` | Written, port to Agon | P0 |
| App Development | `/app-development-australia/` | Written, port to Agon | P0 |
| Custom Software | `/custom-software-development-australia/` | **To write** | P1 |
| Work hub | `/work/` | Wrapper live, needs content | P0 |
| Case study × 6 | `/work/[slug]/` | Data in `content/case-studies.js` | P0 |
| Pricing | `/pricing/` | Wrapper live, needs content | P0 |
| About | `/about/` | Wrapper live, needs content | P0 |
| Contact | `/contact/` | Wrapper live, needs content | P0 |
| Guides hub | `/guides/` | Wrapper live, needs content | P1 |
| Guides × 4 | `/guides/[slug]/` | Data in `content/guides.js` | P1 |
| Blog hub + posts × 7 | `/blog/` + subpaths | Static, keep untouched | P1 |
| Cost guide | `/how-much-does-a-website-cost-australia/` | Static, keep | P0 |
| Small business checklist | `/small-business-website-checklist/` | Static, keep | P1 |
| Timeline guide | `/how-long-does-it-take-to-build-a-website/` | Static, keep | P1 |
| Tradie / Restaurant / Real Estate | `/*-website-design/` | Static, keep | P0 / P1 / P1 |
| Web Design Sydney/Melbourne/Brisbane/Perth/Adelaide | `/web-design-<city>/` | Static, keep | P0 |
| Web Design Denver/Nashville/Phoenix | `/web-design-<city>/` | Static, **decide** | P2 |
| Wix / Squarespace / Shopify / Webflow vs Custom | Various | Wix static, other 3 Next | P1 |
| 404 | `not-found` | Custom useful page | P2 |
| Privacy Policy | `/privacy/` | New, needs ABN | P2 |
| Terms of Service | `/terms/` | New, needs ABN | P2 |

**Total live pages after build: ~42.** Every page is reachable from home,
hubs or footer. No orphans.

## 20. HOME (`/`)

**Goal.** Land → understand who it's for → see it's real → drill into service
or book a call.

**Section order — do not change without editing this doc:**

| # | Section | Source in `content/home.js` |
|---|---|---|
| 1 | Hero — outcome + AUD price anchor + dual CTA | `HERO` |
| 2 | Real client links — 4 verifiable production URLs | `REAL_CLIENTS` |
| 3 | Problem — 4 problems your site quietly has | `PROBLEMS` |
| 4 | Services grid — 6 cards + industry pill row | `SERVICE_CARDS`, `INDUSTRIES` |
| 5 | Selected work — 6 project cards, concept-labelled | `PROJECTS` |
| 6 | Process — 4 steps, sticky sidebar heading | `PROCESS` |
| 7 | Pricing — 4 AUD tiers + guarantees strip | `PRICE_TIERS` |
| 8 | Who we are — small studio, unnamed AU contact | `TEAM` |
| 9 | Testimonials — renders nothing until real ones exist | `TESTIMONIALS` |
| 10 | Objections — 5 accordion FAQs incl. the India question | `OBJECTIONS` |
| 11 | Final CTA — repeat quote + call, "Fixed quote in 24h" | `FINAL_CTA` |

**Never on the homepage:** invented client logo strip, stat counters,
"awards & accolades", auto-playing intro video.

## 21. SERVICES HUB (`/services/`)

Short page. Routes visitors to the six service pages; does not sell any of
them itself.

| Section | Content |
|---|---|
| Hero | *"Six things we build for Australian businesses."* |
| Six cards | `SERVICE_CARDS`, full-width with more per-card copy |
| Industries strip | Tradies / Restaurants / Real Estate |
| CTA | *"Not sure which fits? Book a 30-minute call."* |

**Individual service pages.** Four rank as static. Two written this session,
ready to port from `content/services.js`. **One new to write:** Custom
Software (`/custom-software-development-australia/`) — internal tools, admin
portals, desktop / cross-platform (Electron / Tauri). Needs pricing anchor and
Aman's decision on scope.

## 22. WORK (`/work/`) + case studies

Hub: grid of 6 cards, filterable. Concept builds carry a visible label.

**Real client work** (verifiable):

| Slug | Live | Sector |
|---|---|---|
| hs-race-gear | hsracegear.com | Motorsport e-commerce |
| mobile-armour | mobilearmour.com.au | AI-powered accessories |
| autozenlyai | autozenlyai.com | Multi-LLM social SaaS |

**Concept builds** — MUST be labelled *"Concept build"* wherever they appear:

| Slug | Deployed to | What it demonstrates |
|---|---|---|
| aurelia-estates | vercel.app | Real estate design fluency |
| harbour-plumbing | vercel.app | Tradie conversion + local SEO schema |
| marlow-vine | vercel.app | Hospitality direct-booking flow |

**L&T Finance** (planet.ltfinance.com) — Aman's enterprise fintech work.
Belongs on About as background credibility, not in `/work/` as a Build First
Site project.

⚠ **Unverifiable metrics to strip:** Mobile Armour "+20% engagement / −20%
load time", Harbour Plumbing "Lighthouse 95+ / 1-week build". Real → keep.
Not measured → remove.

## 23. PRICING (`/pricing/`)

One page. Consolidates what's currently scattered.

⚠ **Currency inconsistency — the biggest single content bug on the site.**
Homepage displays USD without labels; Sydney page shows AUD. **Recommended:
publish AUD only.** See §26 open decision 1.

**Sections:**

1. Hero — *"Published, fixed, in AUD. No 'contact us' games."*
2. Six tiers — table format for clarity, one row per ladder rung from §8
3. Always included — code ownership, 30 days support, live staging, no retainer
4. Retainer / care plan — separate section, `RETAINER` in `content/home.js`
5. Not included — copy, photography, ongoing hosting fees. Explicit protects us.
6. Payment terms — 50/50 split, methods accepted
7. FAQ — five pricing questions, `FAQS` in `content/home.js`
8. CTA

## 24. ABOUT (`/about/`)

The trust page.

| Section | Content |
|---|---|
| Hero | *"A small studio. We answer the phone."* + one-paragraph intro |
| Who's here | Aman (named, engineer, India). Local AU contact (unnamed). Contractors credited by name when involved. |
| Why this works | The India-engineer / AU-contact / lower-price mechanism, said plainly. |
| How we work | 4-step process expanded — paragraph per step, not cards |
| Who we work with best | AU SMBs — trades, hospitality, retail, professional services, early-stage SaaS. Also **who we're not the right fit for.** |
| Aman's background | 7 years, ex-L&T Finance enterprise fintech, full-stack. Third-person. |
| Trust note | Australians have been burned by offshore studios pretending to be local. We're upfront: engineering in India, contact in Australia. |
| CTA | *"Talk to us. If a page builder would serve you better, we'll tell you."* |

**Not on About:** placeholder / AI-generated photos, invented team grid,
stat counters, awards.

## 25. CONTACT (`/contact/`)

| Section | Content |
|---|---|
| Hero | *"Tell us what you're trying to build."* + "Fixed quote in 24h" |
| Two options | Quote form + Book a call (Calendly), same visual weight |
| Form fields | Name, business name, email, phone (optional), budget selector ($2k–5k / $5k–10k / $10k–25k / $25k+), what you need (short textarea) |
| Contact details | Real AU phone, email, response promise |
| Location / hours | AU timezone for calls, note that Aman is async-available India timezone |
| What happens next | 3-step: reply in 24h → 30-min scoping call → written fixed quote |

**Stack:** Web3Forms. Env var: `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`.

## 26. GUIDES & BLOG

**Guides hub** — 4 articles ready in `content/guides.js`:
- How to Choose a Web Developer for Your Small Business
- Website Builder vs Web Developer
- Freelance Web Developer Rates in Australia
- SEO for Small Businesses in Australia

**Cadence going forward: 1/month.** Not more. Thin volume loses to thick pages.

**Blog** — 7 static posts under `/blog/`. All rank. Do not touch without
per-post permission. Guide format is the going-forward pattern.

**Comparison pages** — 4 exist (Wix static + Squarespace/Shopify/Webflow Next
routes). Do not add more until existing four earn impressions.

## 27. LOCATION & INDUSTRY PAGES

**AU locations (P0):** Sydney, Melbourne, Brisbane, Perth, Adelaide — keep,
promote.

**US locations (P2, decide):** Denver, Nashville, Phoenix — live as static.
Australia-primary strategy. Decision needed.

**Industries (P0/P1):** Tradies, Restaurants, Real Estate — all rank.

**Do NOT build a programmatic city × industry matrix** ("Dentist Website
Melbourne" style). Google's helpful-content and scaled-content-abuse systems
target that exact pattern, and a demotion takes working pages down with it.
30–50 hand-written pages in one niche beats 300 templated ones.

**Candidate additions** — only if we get real client work in the vertical:
Dentists, Cafés, Salons, Gyms, Lawyers, Accountants, Builders.

---

# PART III — DECISIONS, ASSETS, GUARDRAILS

## 28. Open decisions — needed from Aman before build

Reply "1: X, 2: Y…":

1. **Pricing reconciliation.** Publish AUD only? Homepage disagrees with
   Sydney page. Confirm the AUD number for each of the 6 ladder rungs.
2. **Invented service prices.**
   - App Dev tiers $6,500 / $12,000 / $18,000 AUD — extrapolated, not confirmed.
   - AI Chatbots tiers $2,500 / $4,500 / $6,500 AUD — same.
3. **Case study metrics.** Mobile Armour "+20% engagement / −20% load time",
   Harbour Plumbing "Lighthouse 95+ / 1-week build" — real or claimed?
4. **AU phone number.** Sydney page publishes +61 413 146 498. Correct for
   public listing?
5. **AU business entity / ABN** for privacy, terms, invoicing, GST.
6. **AU physical address** for GBP (service-area business, radius set).
7. **US location pages** (Denver / Nashville / Phoenix) — keep quietly,
   delist, or expand?
8. **Photos.** Aman's photo on About? *(Recommended: yes.)* AU contact photo?
9. **Testimonials.** Should we draft the ask to hsracegear / mobilearmour /
   autozenlyai?
10. **Clutch profile** — go ahead and create it? *(Recommended: yes.)*
11. **Retainer pricing** — current numbers in `content/home.js` accurate? What
    does the plan actually include?
12. **AI services we ship today.** Confirm the three: chatbot, booking
    automation, product recommendations. Anything to add or drop?
13. **Splash screen** — keep or drop for Agon build? Adds delay, worse on
    mobile conversion.
14. **Custom Software service** — should `/custom-software-development-australia/`
    ship in v2? What starting price? What examples? (Desktop apps via Electron
    or Tauri fit here.)
15. **"Team" language** — comfortable with *"we"* and *"our"* now, and *"our
    team"* once contractors are onboarded? Or hold at *"two of us"* language
    until then?

## 29. Content assets to gather (not code — actual files)

| Asset | Needed by | Source |
|---|---|---|
| Aman headshot | About | Aman |
| AU contact headshot (if agreed) | About | Contact |
| Real screenshots — HS Race Gear, Mobile Armour, AutoZenlyAI | Home + case studies | Live sites |
| L&T Finance mention/screenshot | About | Aman (confirm what's shareable) |
| Favicon + OG image | Every page | Existing likely fine, review |
| Testimonial × 3 | Home, About, case studies | Aman (email clients) |
| Real client logos | Home + case studies (once ≥6) | Clients (with permission) |

⚠ **Every image the Agon template ships (~98 MB) is licensed for demo only
and must be replaced before launch.**

## 30. Deliberate omissions — recorded so they don't drift back

- Fake testimonials, invented quotes, stock-photo faces
- Stat counters we can't defend ("500+ clients", "98% satisfaction", "$50M
  raised" etc.)
- Client logo strip until we have at least 6 real ones
- Awards & accolades section
- Auto-playing hero video
- Live chat widget (until we can support it well)
- Multi-language / hreflang beyond AU/US/UK EN
- Currency toggles
- Meaningless trust badges (Framer/GoodFirms style)
- Programmatic city × service page generation
- The Agon template's Latin placeholder text
- "AI-powered" as a claim without a specific working feature behind it

## 31. Voice cheat-sheet

If unsure whether a line fits:

1. Would this line embarrass me if a client asked me to prove it?
2. Is there a number in this sentence that isn't measured?
3. Am I saying "team" without being able to name each person?
4. Would a Brisbane plumber understand this? — "proprietary tech stack" no;
   "faster than a WordPress site" yes.

## 32. Sign-off

Once §28 is decided, this becomes the build spec. No new sections, no new
copy, no new services shipped without editing this file first.

Reply with answers to §28, plus anything you want to change in §1–27.
