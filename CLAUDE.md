# CLAUDE.md — BuildFirstSite (buildfirstsite.com)

Project memory. Read this before doing any work in this repo.

---

## 0. Vision — the thing everything else serves

**Mission:** help Australian businesses grow through modern software.

We don't build websites. We build **digital products that generate leads, automate
workflows, improve customer experience, and become business assets.** Every project
should create measurable business value.

**Positioning:** *built with today's technology, not yesterday's templates.*

Most AU agencies still ship page builders, dated themes, and proprietary CMS
platforms. We build with Next.js, React, AI, automation, serverless, modern
databases and scalable cloud infrastructure. **We do not compete on being the
oldest agency. We compete on building the most modern, highest-performing product.**

**Where we're going:** recognised as one of Australia's most modern software
development studios for SMBs. When someone thinks *"I need software that actually
grows my business"* — they think of BuildFirstSite.

### Never sell technology

Clients don't buy Next.js. They buy: faster sites · better rankings · more
enquiries · higher conversion · lower maintenance cost · automation · AI ·
security · scalability.

**Every page states the business outcome before the technical detail.** If a
section opens with a framework name, rewrite it.

### The five principles

1. **Performance first.** Fastest in its industry. CWV green, always.
2. **SEO first.** Built in at development time, never bolted on — semantic HTML,
   structured data, accessibility, metadata, internal linking, clean architecture.
3. **Own your website.** Client owns the code. No lock-in, no proprietary CMS, no
   hidden platform restrictions. This is our sharpest weapon against Havealook.
4. **Build systems, not pages.** Dashboards, admin panels, booking systems, CRMs,
   AI assistants, portals, ecommerce, workflow automation, integrations.
5. **Long-term partnership.** Launch is the beginning — maintenance, SEO,
   optimisation, analytics, AI improvements, new features.

### Decision framework — ask before building anything

Does this help Australian businesses grow? · Does it showcase modern engineering? ·
Does it improve trust? · Does it create long-term value? · Would it still make
sense in five years?

**If no — don't build it.**

### Products, eventually

Client work surfaces recurring problems. Turn those into SaaS products, AI tools,
automation templates, reusable systems. *Services create experience. Products
create scale.* — Not a 2026 priority. Noted so we don't design ourselves out of it.

---

## 1. Who we actually are — read before writing any copy

The reality (internal — do not publish):

- **Aman** — the engineer. Based in **India**. Builds everything.
- **His brother** — based in **Australia**. Client contact, calls, paperwork.

### The headcount rule — changed Aug 2026

**Do not state a headcount in public copy.** "A two-person studio" has been
removed from every page. Aman's call: it invited the wrong conversation and
framed the business by its size rather than what it delivers.

**This is a decision to stop volunteering the number — not licence to invent a
bigger one.** The distinction matters and is not negotiable:

| Allowed | Not allowed |
|---|---|
| "a small studio" | "our team of experts" |
| "you deal directly with the engineer who writes your code" | "our developers" / "our designers" (as a department) |
| "your day-to-day contact is in Australia" | any implied office, headcount or specialist roster |
| saying nothing about size at all | anything implying an Australia-only operation |

Not stating your size is normal and every small studio does it. Claiming a size
you do not have is misleading conduct, and it is exactly what Aussify
("50–249 employees", 2 Clutch reviews, Bankstown mailbox) and Dev Story
(placeholder avatars, empty `tel:`, Pitt Street mailbox) do.
**Being verifiably real is still the differentiator.**

The arguments that used to lean on "two people" now lean on **direct access to
the builder** and **no agency overhead** — same persuasive force, no headcount
claim. If asked directly by a prospect, answer honestly.

**Never** write copy implying a larger team, an Australia-only operation, or
that hides the India side if someone asks.

### `/join/` — removed Aug 2026

The careers page was deleted and 301'd to `/about/`. Its copy ("we bring
contractors in project by project", "Freelance Frontend Developer · React /
Next.js") was being quoted verbatim in cold outreach from freelancers, it sat in
the sitewide footer, and it contradicted the direct-access positioning. Do not
recreate it without an explicit instruction.

### Prices — single source of truth

**`content/pricing.js` is the only place a price is defined.** Do not hardcode a
figure in a page, a doc, or this file without checking it there first.

Current (verify before quoting anywhere):

| Package | AUD |
|---|---|
| Starter — 3–5 pages | **$800** |
| Business — up to 10 pages | **$1,900** |
| Unlimited pages | **$3,500** |
| E-commerce / Application | **$4,500** |
| Custom software | **from $5,000** |
| Care + SEO retainer | **$250/month** |

Add-ons also live in `pricing.js` (`ADDONS`) and are published on the site:
logo $290 · brand kit $490 · copywriting $140/page · extra page $180 ·
AI chatbot from $900 · booking system from $700 · multi-language from $600 ·
migration from $400.

This section drifted once already: §3 and §4 carried $600/$2,000/$150 for weeks
after the pricing model changed, and a scheduled social-content run read those
numbers, published a week of posts quoting them, and stated "pricing matches
site" while it did not. Quoting a price the site does not honour is misleading
conduct, not a typo. **If you touch prices, update `content/pricing.js` and this
table in the same sitting.**

### Template demo pages — the Sep 2026 incident

**Before claiming the Agon template leftovers are gone, enumerate the routes.**

On 21 Sep 2026, nine demo routes were still live in production, eleven weeks
after a task marked "strip unused Agon demo pages" was closed as complete:
`/page-about-1/`, `/page-service-1/`, `/page-contact/`, `/page-faqs-1/`,
`/page-pricing-1/`, `/page-terms/`, `/blog-1/`, `/blog-2/`, `/blog-single/`.

They were not in any sitemap and not in the nav, which is why they went
unnoticed — and entirely reachable, which is why that did not matter. They
carried testimonials attributed to **Louis Vuitton, Nintendo, Starbucks and
Bank of America**, forty stock-photo staff profiles, "Countries / Offices" and
"Constant Clients" counters, a "Join Our Team" CTA, and lorem ipsum.

Worse, `/guides/` — linked from the footer Resources column on every page —
was a one-line re-export of the demo blog grid. Every visitor who clicked
"Guides" anywhere on the site got placeholder cards and a fictional author
dated August 25, 2022.

Two rules from this:

1. **A route that is not in the sitemap is still public.** Absence from the
   sitemap and nav hides a page from *us*, not from visitors, crawlers or
   anyone who is sent the URL. Audit `find app -name page.js`, not the sitemap.
2. **Never ship a template shell as a placeholder on a real route.** The
   `/guides/` re-export was meant to be temporary and survived the entire
   rebuild. If real content is not ready, the route does not go live.

Fabricated testimonials are the §1 misleading-conduct risk, not a cosmetic
defect — the fact that they arrived with a purchased template changes nothing
about how Australian Consumer Law reads them.

### llms.txt is generated, never hand-written

`public/llms.txt` and `public/llms-full.txt` are produced by
`npm run llms` (`scripts/generate-llms-txt.mjs`) from `pricing.js`,
`landing-pages.js`, `guides.js` and `site.js`. **Do not hand-edit them.**

They were hand-written on 8 Jul 2026 and never revisited. By 24 Sep they were
telling language models our landing pages cost **$600**, business sites
**$2,000** and e-commerce **$4,000** — when the real figures were $800, $1,900
and $4,500. They also listed three retired US city pages as live, and claimed we
serve the United States and the United Kingdom.

**Correction, same day.** When I fixed these I described llms.txt as "the
document we hand to models that then quote it to prospects". That overstated
it, and the repo should not carry the overstatement:

- Google's AI optimization guide (15 May 2026) says llms.txt is **not needed**
  for AI Overviews or AI Mode. Gary Illyes confirmed Google does not support it
  and has no plans to; John Mueller likened it to the keywords meta tag.
- No major provider — OpenAI, Anthropic, Google, Meta, Mistral — has committed
  to using it in production answer surfaces.
- Measured across ~515M LLM bot requests, traffic to `/llms.txt` is
  statistically negligible.

**So it is not an AI-visibility lever.** Keep it generated anyway, for one
reason that stands on its own: it is a **public URL on our domain that was
publishing prices the business does not charge** ($600 / $2,000 / $4,000
against $800 / $1,900 / $4,500). That is the §1 misleading-conduct problem
wherever it appears and whoever reads it. Fixing it was right; the reason I
gave for fixing it was wrong.

**Run `npm run llms` after any price change or page add/remove.**

### What actually drives AI visibility

Per Google's own guidance, generative AI features are **rooted in core Search
ranking and quality systems** — the same fundamentals, not a separate
discipline. There is no "GEO" trick that bypasses ranking.

Primary sources, read these rather than agency blog posts:
- <https://developers.google.com/search/docs/fundamentals/ai-optimization-guide>
- <https://developers.google.com/search/docs/appearance/ai-features>

**Search Console now has Search Generative AI performance reports** (rolled out
to all sites 31 Aug 2026). AI visibility is measurable — check it rather than
guessing.

### Price audit — 24 Sep 2026

A full sweep of every price figure in the repo against `content/pricing.js`.

**Corrected:** I previously flagged the `from $900` AI & Automation figure in
`content/home.js` as a rogue second source. That was wrong — it comes from
`pricing.js` → `ADDONS` → *AI chatbot: from $900*. It is legitimate. It is
still a hardcoded **copy** rather than an import, so it can drift, but the
number is real.

**Deleted:** `content/services.js`. It was dead code — imported by nothing —
carrying an entirely different price model: *Web App MVP from AU$6,500, Full
Web App from AU$12,000, Cross-Platform Mobile from AU$18,000*, against a
published range of $800–$5,000. Harmless while unused and a live contradiction
the moment anyone wired it up.

**Still outside pricing.js and genuinely published** — `content/service-pages.js`
renders at `/services/<slug>/` and quotes two figures that exist nowhere else:

| Figure | Where | Status |
|---|---|---|
| `AU$500` SEO Audit | Marketing & SEO service page | Not in `pricing.js` |
| `From AU$200` Pay Per Piece | Maintenance service page | Not in `pricing.js` |

Both are live on the site. Either add them to `ADDONS` or remove them from the
service pages — right now they are prices a customer can read that the source
of truth does not know about.

### Third-party platform prices — `PLATFORM_PRICES`

Competitor and platform figures (Wix, Squarespace, Shopify, hosting) now live
in `content/pricing.js` as `PLATFORM_PRICES`, verified **24 Sep 2026**.
**Quote from there.**

A sweep that day found the same products quoted differently across pages:
Shopify as *"$39–$399"* on one page and *"$52–$575"* on another; Wix as
*"$20–$50"*, *"around $32"*, *"$15 to $58"* and *"$21–$55"* on four. Four direct
contradictions were corrected.

This matters more for us than for most sites. The entire positioning is *our
numbers are real and you can check them*. Publishing two different figures for
the same competitor product undercuts exactly that claim — and unlike our own
prices, nobody internally notices when a competitor changes theirs.

**Known debt:** the figures are still hardcoded as prose in page copy rather
than read from `PLATFORM_PRICES`. Wiring them up is a refactor nobody has asked
for yet. Until then, re-verify on the date in the export and grep before
quoting a platform price.

### The full published price list

`BUILD_TIERS` — Starter $800 · Business $1,900 · Unlimited $3,500 ·
E-Commerce $4,500 · Application $4,500 · Custom Software $5,000
`RETAINER` — Care + SEO $250/month
`ADDONS` — Logo design $290 · Brand kit $490 · Copywriting $140/page ·
Extra page $180 · AI chatbot from $900 · Booking system from $700 ·
Multi-language from $600 · Migration from Wix/WP from $400

### Honesty constraints (non-negotiable)

- **No invented testimonials, client names, review counts, or metrics.** Australian
  Consumer Law treats fabricated testimonials as misleading conduct.
- **No claimed expertise in a vertical we have no proof in.** An industry page may
  describe capability and approach; it may not imply clients we don't have. If
  there's no client and no labelled spec build, the page says so plainly.
- **Spec/concept builds must be labelled as such.** `harbour-plumbing`,
  `marlow-vine`, `aurelia-estates` are concept builds on `vercel.app`, not client
  work. Showing them is fine; presenting them as clients is not.
- Real client work (own domains): hsracegear.com · mobilearmour.com.au ·
  autozenlyai.com · planet.ltfinance.com
- NAP must be the brother's real Australian details, identical across site, GBP,
  Clutch and all directories.
- Don't claim a page "will rank." Don't say a build passed when only `tsc` ran.

---

## 2. Stack & architecture

- **Next.js 15 App Router + JavaScript + React** (`.js`, not `.tsx` — the Agon
  template rebuild dropped TypeScript). `jsconfig.json` provides the `@/*` alias.
- **Agon Bootstrap template** as the design base — use its existing CSS classes
  (`text-heading-3`, `color-gray-900`, `btn-black`, `section-box`, `card-*`).
  Don't introduce a parallel styling system.
- Deployed on **Vercel**. Framework preset Next.js, **Output Directory blank**.
  A stale `dist/` from the old Vite build still exists — ignore it.

### Two kinds of pages — know the difference

| Type | Location | Notes |
|---|---|---|
| **Legacy static SEO pages** (20 dirs) | `public/<slug>/index.html` | Hand-authored HTML. **These already rank — do not rewrite or convert to Next routes without an explicit instruction.** Edit HTML in place. |
| **Next.js routes** | `app/**/page.js` | All new pages. Statically prerendered. |

Static pages serve at clean URLs via `beforeFiles` rewrites in `next.config.mjs`,
generated by `collectStaticIndexRoutes()` scanning `public/` for `index.html`.
**New `public/<slug>/index.html` is picked up automatically — no config edit.**

### Key files

```
app/layout.js                 root metadata, JSON-LD blocks
app/page.js                   homepage
app/about/page.js             about
app/contact/page.js           contact
app/api/contact/route.js      Gmail SMTP — notification + branded auto-reply
components/layout/Layout.js   wraps Header / Sidebar / Footer / WhatsApp button
components/elements/BackToTop.js   ← actually the WhatsApp floating button
components/elements/Accordion.js   homepage FAQ content
components/elements/ContactPageForm.js / AboutContactForm.js  → POST /api/contact
content/site.js               SITE.email / phone / whatsapp / calendly
public/sitemap.xml            MUST be updated when adding any page
next.config.mjs               static-page rewrites (do not break this)
```

### Conventions

- Content lives in **data files rendered by a shared component**. Adding a case
  study / comparison / guide / industry page = add an object to an array.
- `trailingSlash: true` — **all internal links end in `/`**.
- Dynamic routes: `generateStaticParams()` + `export const dynamicParams = false`.
- Next 15: `params` is a **Promise**.
- Browser env vars need `NEXT_PUBLIC_`. Server-only secrets (`GMAIL_USER`,
  `GMAIL_APP_PASSWORD`) must NOT have it.
- Email: Gmail SMTP via nodemailer. Requires 2-Step Verification ON and an App
  Password on the Workspace account — Workspace 2FA is gated by Admin Console.

### Sandbox caveat

`next build` times out on the mounted filesystem in the Cowork sandbox. Verify
with **`npx tsc --noEmit`** / lint instead, and tell Aman to run `npm run build`
locally before deploying. Never claim the production build passed if it didn't run.

---

## 3. Competitive landscape (researched Aug 2026)

Full analysis: **`docs/COMPETITOR-DEEP-DIVE-AUG-2026.md`**. Summary:

| | **Us** | Havealook | Growth Digital | Aussify |
|---|---|---|---|---|
| Entry price | **$800** | $995 | undisclosed | $900 |
| Business site | **$1,900** | $1,995 | undisclosed | $2,300 |
| Stack | **Next.js / AI** | static HTML + own CMS | Shopify | WordPress |
| Own the code | **Yes** | No | No | Source files |
| Google reviews | **0** ⚠️ | **300 @ 4.8★** | 60+ | few |
| Indexed pages | ~34 | ~80 | **1** | ~32 |
| Monthly retainer | $250 Care+SEO | SEO (quote) | Ads | **$225–1,499 SEO** |

- **Havealook** is the real threat: 20 years, 300 reviews, $500/referral program,
  40 blog posts, named SEO case studies. Their wedge is *"Australian owned, not
  overseas"* — aimed at us. Their weakness: **clients can never leave** (their CMS,
  their hosting) and it's never disclosed.
- **Growth Digital** is a GoHighLevel funnel page, not a website. One URL, all
  `#anchor` nav. They buy traffic. Steal the offer mechanics, ignore their SEO.
- **Aussify** owns NDIS / medical / dental / healthcare with thin pages, plus
  *"Best X Agencies in Australia 2026"* listicles — the smartest tactic any of them
  runs. Their trust layer is weak (3.7 Trustpilot, inflated headcount).

**Where we win:** published fixed prices, modern stack, code ownership, direct
access to the builder, verifiable honesty.
**Where they beat us:** reviews, backlinks, case-study depth, blog cadence.

---

## 4. The plan (agreed Aug 2026)

The site's design, portfolio, pricing section, services, FAQ and CTAs are **done**.
The next six months are **not** a redesign. They are **authority**.

### Sequencing — tools before pages, trust before both

**Wave 1 — get on the board (weeks 1–8)**
1. **Google Business Profile** (service-area business, brother's real AU address)
   + **Clutch profile**.
2. **Reviews from all four real clients** — HS Race Gear, Mobile Armour, Autozenly,
   LT Finance. *Aman is asking all four.* This is the #1 blocker; nothing else moves
   the needle as much. Bar is low: Aussify ranks with 2 Clutch reviews.
3. ~~**`/website-pricing-australia/`**~~ — **DONE.** Shipped as `/pricing/`
   (title now leads with "Small Business Website Design Packages | From $800")
   plus `/affordable-website-design-small-business/` and
   `/how-much-does-a-website-cost-australia/`. Price is in the title on all three.
4. **Trust-layer audit** — relabel concept builds, remove unverifiable metrics.

**Wave 2 — the moat (weeks 6–16)**
Free tools. **This is the priority over more content pages** — tools are the only
asset that earns the backlinks we lack, and they prove the engineering positioning
better than any copy can. Agencies don't build them because they're hard; that's
exactly why they're a moat.

Build order: **AUD Website Cost Calculator** → **Core Web Vitals / Speed Checker**
(PageSpeed Insights API) → **JSON-LD Schema Generator** → then SEO audit tool,
meta description generator, robots.txt generator, sitemap validator,
accessibility checker.

Each tool: own URL, `SoftwareApplication` schema, no signup wall, shareable result
URLs, a soft CTA at the bottom.

**Wave 3 — case studies (weeks 10–20)**
Portfolio cards → **real, deep case studies**. Problem · solution · architecture ·
SEO · performance · screenshots · timeline · **real measured results**. Start with
HS Race Gear and Mobile Armour. Long-form (2,000–5,000 words) — business owners
skim, Google reads all of it. **Requires real numbers and client permission.**

**Wave 4 — industry clusters (month 4 onward)**
Aman chose **broad coverage across popular verticals**. Ship them in waves of 3–4,
each as a real cluster, never as a batch of templated pages:

*Wave 4a:* Healthcare · Dental · NDIS *(the gap Aussify owns with thin pages;
WCAG 2.1 AA is a legal requirement for NDIS providers and we can genuinely deliver it)*
*Wave 4b:* Legal · Accounting · Construction
*Wave 4c:* Fitness · Vet · Travel · Hospitality
*(Real estate, restaurant, tradie pages already exist — deepen, don't duplicate.)*

Each industry page: unique screenshots, AUD pricing, industry-specific problems,
FAQs, schema, ≥3 internal links, clear CTA. A cluster = hub page + supporting
articles (e.g. Healthcare → medical SEO → doctor websites → healthcare
accessibility → booking systems → healthcare AI chatbots → case study).

**Wave 5 — comparison + buying-intent content (ongoing)**
`Next.js vs WordPress` · `Best Website Builders Australia` ·
`Best Web Design Agencies Australia (honest pricing compared)` ·
`Best Website Platform for Medical Clinics` · `Why Your Website Isn't Ranking`.
Every article targets someone close to hiring. **Never** write "What is SEO?" or
"Why websites matter" — nobody searches that.

**Wave 6 — recurring revenue**
Productise the retainer: maintenance · SEO · hosting · AI updates · analytics ·
speed optimisation. Aussify runs $225–$1,499/mo against our single $250 Care + SEO plan.
Even 30% attach rate creates predictable income and keeps us improving the work.

**Also worth doing:** a **referral program** (Havealook pays $500/conversion — the
cheapest link-and-lead channel that exists, and we have nothing).

### Guardrails on the broad-vertical plan

Aman chose breadth over depth. Two rules keep that from backfiring:

1. **No industry × city matrix.** 12 industries × 7 cities = 84 near-duplicate
   pages, which is exactly the pattern Google's scaled-content-abuse and
   helpful-content systems target. A site-wide demotion would take the pages that
   already rank with it. Industry pages are national; city pages are separate and
   few.
2. **Ship in waves of 3–4, and only when each page has real substance.** Target
   ~60–70 pages that rank, not 100 that don't. If a page can't clear the honesty
   constraints in §1, it doesn't ship.

### Google Ads

**Not yet.** Only once we have 10+ case studies, 10–20 reviews, and a
conversion-optimised landing page. Until then that budget buys content and tools
that keep working for years. (Growth Digital is the cautionary example: one funnel
page, zero organic asset, permanent ad spend.)

### KPIs

Organic sessions ↑ MoM · target keywords onto page 1 · **new referring domains**
(the real bottleneck) · quote-form submissions from organic · GBP views/clicks ·
**10+ reviews at 4.5★** · tool usage + tool-driven backlinks · PSI ≥ 90.

---

## 5. Content rules for every new page

1. One primary keyword + 2–3 supporting long-tails. Cannibalisation check first.
2. Unique `title` (keyword first, brand last) and `description` with benefit + CTA.
3. One `<h1>` containing the primary keyword; keyword-relevant `<h2>`s.
4. **Business outcome before technical detail.** Always.
5. **Schema** — `BreadcrumbList` + the right type (`Article` for guides,
   `CreativeWork` for case studies, `FAQPage` for Q&A, `LocalBusiness` /
   `ProfessionalService` for location pages, `HowTo` for process,
   `SoftwareApplication` for tools).
6. **AUD pricing stated explicitly** where relevant.
7. **Minimum 3 internal links out** + linked from the footer and sitemap. No
   orphans, ever.
8. Descriptive `alt` on every image.
9. Dual CTA: "Get a quote" → contact, and "Book a free call" → Calendly.
10. Canonical via `alternates: { canonical: '/path/' }`.
11. **Add the URL to `public/sitemap.xml`; bump `sitemap-index.xml` lastmod.**

### Technical SEO baseline

Lighthouse ≥ 90 mobile · CWV green · mobile-first (~68% of AU traffic) · HTTPS ·
valid structured data (Rich Results Test) · sitemap in GSC · no broken links ·
compressed images (webp/avif, lazy-loaded).

### Backlinks (prioritise `.au` domains)

Free tools (primary channel) · GBP with consistent NAP + review requests ·
directories (business.gov.au, Yellow Pages, Hotfrog) · guest posts on AU tech/design
blogs · "Best agencies" listicles that other agencies link to · downloadable
resources · client backlinks · broken-link building on "website cost" posts ·
referral program.

---

## 6. Default workflow for "add a page"

Full procedure: **`docs/SEO-PLAYBOOK.md`**. Short version:

1. Pick the keyword; confirm no existing page owns it.
2. Check it against the §0 decision framework and the §1 honesty constraints.
3. Add the entry to the relevant data file, or create a new data file + shared
   renderer if it's a new page *type*.
4. Write `metadata` (title, description, keywords, canonical, openGraph).
5. Add schema (`BreadcrumbList` + type-specific).
6. Internal links **in and out**, including the footer.
7. Update `public/sitemap.xml` + `sitemap-index.xml`.
8. Type-check/lint, then tell Aman to run `npm run build` locally.

---

## 7. Open questions

- Which tool ships first — cost calculator or speed checker?
- Do we have real measured before/after numbers for HS Race Gear and Mobile Armour?
  (Needed for the deep case studies.)
- Retainer pricing tiers — what can we actually deliver monthly?
- Markets beyond AU + USA (e.g. UK)?
