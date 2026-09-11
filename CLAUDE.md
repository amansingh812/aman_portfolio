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

This section drifted once already: §3 and §4 carried $600/$2,000/$150 for weeks
after the pricing model changed, and a scheduled social-content run read those
numbers, published a week of posts quoting them, and stated "pricing matches
site" while it did not. Quoting a price the site does not honour is misleading
conduct, not a typo. **If you touch prices, update `content/pricing.js` and this
table in the same sitting.**

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
