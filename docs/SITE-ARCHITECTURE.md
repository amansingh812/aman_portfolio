# Build First Site — Site Architecture Document

**Reference site:** [code-lab-au.online](https://code-lab-au.online/)
**Our template:** Agon Next.js 14 (purchased, licensed)
**Date:** 5 Aug 2026

---

## 1. Reference site analysis

### Tech stack (Codelab)

- **Next.js** (App Router, Turbopack) — confirmed via `_next/static/chunks/turbopack-*.js`
- **Tailwind CSS** — utility classes throughout
- **Fonts:** Inter (body), Space Grotesk (headings), JetBrains Mono (code/mono elements)
- **Dark mode:** class-based toggle (dark by default, light toggle available)
- **WhatsApp floating button** — bottom-right corner
- **No Framer Motion detected** — animations are CSS-based (scroll-triggered reveals)

### Design language

- **Dark-first palette:** navy/slate background (#0B1121-ish), white text, blue accent (#4F6AFF-ish)
- **Card style:** subtle rounded corners, dark bg cards with lighter borders
- **Typography:** clean sans-serif, all-caps eyebrow labels (`SERVICES`, `PORTFOLIO`, `PROCESS`), large display headings
- **Consistent section pattern:** Eyebrow label → Large heading → Subtitle → Content grid → CTA
- **Hero pattern:** full-width dark bg, left-aligned text, animated code editor + dashboard mockup on right
- **Breadcrumbs** on all inner pages

### What works well (and we should replicate the pattern, not the content)

1. **Two-column mega-dropdown** for Services and Industries — clean, descriptive
2. **Portfolio cards** with live-site links, project type badge, key stat callout
3. **Process timeline** — horizontal 6-step with icons connected by lines
4. **Contact form** with service-type chips and budget range selector
5. **Testimonials** mixing custom cards + verified Upwork reviews with ratings
6. **Stats counter row** — but theirs shows "0+" everywhere (clearly placeholder)
7. **Footer** — 5-column (brand+social, Quick Links, Services, Industries, Contact with address/phone/email)
8. **Dark/light mode** toggle in header
9. **Consistent CTA pair** on every page: "Get a Free Quote" (filled) + "Book a Meeting" (outline with WhatsApp icon)
10. **404 page** styled as a terminal/zsh window — clever branding touch

---

## 2. Full page inventory (Codelab → Build First Site mapping)

### Navigation structure

**Codelab nav:** Home · About Us · Services ▾ · Industries ▾ · Portfolio · Blog · Join Us · Contact Us · [Get a Free Quote]

**Our nav (proposed):**

```
Home · About · Services ▾ · Industries ▾ · Work · Pricing · Blog · Contact · [Get a Free Quote]
```

Changes from current (`content/site.js` NAV):
- **Add:** Industries dropdown (new)
- **Rename:** "Work" stays (their "Portfolio")
- **Keep:** Pricing (they don't have one — this is our differentiator)
- **Drop:** "Guides" from top nav (merge into Blog)
- **Drop:** "Join Us" (they have it but it 404s; we don't need it)

### Page-by-page breakdown

---

### PAGE 1: Homepage `/`

**Codelab sections (in order):**

| # | Section | Description |
|---|---------|-------------|
| 1 | **Hero** | Dark bg, "Accepting new projects — Q3 2026" pill badge, H1 headline, subtitle, dual CTA (Get Quote / See Work), trust badges ("Sydney-based · Fixed-price quotes · iOS + Android"), animated code-editor mockup + dashboard card on right |
| 2 | **Logo strip** | "BUILD PRODUCTS LIKE THE BRANDS BELOW" — scrolling logo marquee (6 logos, duplicated for infinite scroll) |
| 3 | **Growth value prop** | "How Can You Grow With Us?" — 4 checkmark bullets, dual CTA (See Your Growth Path / Find My Biggest Growth Leak) |
| 4 | **Connected Journey** | "From first click to next sale" — 4-step vertical timeline (Be found → Be chosen → Run smoother → Stay remembered), each with service tags |
| 5 | **Services grid** | Eyebrow + heading + 6 service cards (2×3 grid), each with icon, title, description, "Learn more →" link. Mini illustration per card |
| 6 | **Portfolio** | "Recent work" — 5 project cards, each full-width alternating layout (image left/right), with domain, "Visit live site" link, type badge, title, description, key stat, "View project →" |
| 7 | **Process** | "How we work" — horizontal 6-step timeline with circle icons connected by lines (Discovery → Planning → Design → Development → Testing → Deployment) |
| 8 | **Stats counter** | 6 counters in a row (Projects / Clients / Years / Retention / Support / Australia-based) — all showing "0+" |
| 9 | **Testimonials** | "What our clients say" — 4 custom testimonial cards + 3 verified Upwork reviews with star ratings and "see" links |
| 10 | **Final CTA** | "Let's build yours." — subtitle + dual CTA (Get a Free Quote / Book a Meeting) |

**Our version (Build First Site):**

| # | Section | Agon component | Notes |
|---|---------|----------------|-------|
| 1 | **Hero** | Custom build | Dark bg, "Accepting new projects — Q3 2026" pill. H1: "Websites that sell. Apps that scale." Subtitle about AU businesses. Dual CTA. Trust line: "Australia-based · Fixed AUD pricing · You own the code". Right side: code-editor mockup (CSS-only, no image needed) |
| 2 | **Logo strip** | `components/slider/Offer.js` (adapt) or custom marquee | Only show when we have ≥4 real client logos. Until then: skip or show "Trusted by Australian businesses" without logos |
| 3 | **Problem/Value** | Custom section | "How Can We Help You Grow?" — rewrite the 4 bullets for our positioning. Keep dual CTA |
| 4 | **Growth Journey** | Custom section | 4-step vertical timeline. Map to our service ladder: Get Found → Get Chosen → Run Smoother → Keep Customers |
| 5 | **Services grid** | `page-service-1` grid pattern | 6 cards matching our services: Web Dev, App Dev, Custom Software, AI & Automation, Marketing/SEO, Maintenance. Each with icon + description + "Learn more →" |
| 6 | **Portfolio/Work** | Custom cards | Show our 4 real clients (hsracegear, mobilearmour, autozenlyai, planet.ltfinance) + labelled concept builds. Alternating full-width layout like Codelab |
| 7 | **Process** | Agon has step/process sections | 6-step horizontal timeline. Same steps work for us |
| 8 | **Stats counter** | `components/elements/CounterUp.js` | **ONLY show real numbers.** E.g. "4+ Projects Delivered · 3+ Happy Clients · 2 Years Experience · 24/7 Support · 100% Code Ownership". Do NOT inflate |
| 9 | **Testimonials** | `components/slider/Testimonial.js` | **Empty until we collect real ones.** Show Upwork reviews if we have them. Otherwise skip entirely |
| 10 | **Final CTA** | Custom section | "Let's build yours." — dual CTA |

---

### PAGE 2: About `/about/`

**Codelab sections:**

| # | Section |
|---|---------|
| 1 | Breadcrumb (Home > About Us) |
| 2 | Hero: "An Experienced Australian Freelance Collective" |
| 3 | "Who We Are" — 2-column: left text block + right "Why choose Codelab" 4-bullet list |
| 4 | "Values" — 4 value cards (Quality First, True Partnership, Built to Scale, Proven Results) |
| 5 | Stats counter row (same as homepage) |
| 6 | Process timeline (same as homepage) |
| 7 | Final CTA |

**Our version:**

| # | Section | Agon component |
|---|---------|----------------|
| 1 | Breadcrumb | Built into Layout |
| 2 | Hero: "A Two-Person Studio. Seriously." | Custom |
| 3 | "Who We Are" — honest story: engineer in India + local contact in Australia. Why this model works (pricing, speed, direct access). "Why choose us" bullets | `page-about-1` text blocks |
| 4 | Values — 4 cards: Transparent Pricing, Code Ownership, Direct Communication, Quality Over Scale | Custom grid |
| 5 | Stats (real numbers only) | `CounterUp.js` |
| 6 | Process timeline (reuse from homepage) | Shared component |
| 7 | CTA | Shared component |

---

### PAGE 3: Services Hub `/services/`

**Codelab sections:**

| # | Section |
|---|---------|
| 1 | Breadcrumb |
| 2 | Hero: "End-to-end software services" |
| 3 | 6 service cards — numbered (01-06), each with title, description, 3 tech tags, "Learn more →" |
| 4 | "Not sure which service?" CTA |

**Our version:**

| # | Section | Agon component |
|---|---------|----------------|
| 1 | Breadcrumb | Layout |
| 2 | Hero: "End-to-end development services" | Custom |
| 3 | 6 service cards with tech tags | `page-service-1` grid |
| 4 | "Not sure?" CTA | Custom |

---

### PAGE 3a-f: Individual Service Pages `/services/[slug]/`

**Codelab structure (e.g. /services/web-development/):**

| # | Section |
|---|---------|
| 1 | Breadcrumb (Home > Services > Web Development) |
| 2 | Hero with title + dual CTA |
| 3 | Description paragraph |
| 4 | "What's included" — bullet list |
| 5 | "What you get" — bullet list |
| 6 | "Tech we use" — tag pills |
| 7 | FAQ accordion (2 questions) |
| 8 | "Related services" — 2 cards |
| 9 | CTA |

**Our service pages (6 total):**

| Slug | Title |
|------|-------|
| `/services/web-development/` | Web Development |
| `/services/app-development/` | Mobile App Development |
| `/services/custom-software/` | Custom Software Development |
| `/services/ai-automation/` | AI & Automation |
| `/services/marketing-seo/` | Marketing & SEO |
| `/services/maintenance/` | Maintenance & Support |

**Implementation:** Data-driven from `content/services.js` → shared `ServicePage` component. Each entry has: title, slug, description, included[], deliverables[], techTags[], faqs[], relatedSlugs[].

**Agon mapping:** Use `page-service-1` as the grid hub. Individual pages are new — build a `app/services/[slug]/page.js` with `generateStaticParams()`.

---

### PAGE 4: Industries Hub (NEW — no current equivalent)

**Codelab has:** Dropdown only (no hub page). 6 industry pages.

**Our version:** Create an `/industries/` hub with a grid of industry cards, plus individual pages.

**Industries (6):**

| Slug | Title | One-liner |
|------|-------|-----------|
| `/industries/tradies/` | Tradies & Construction | Websites, quoting tools and job management for builders, plumbers and sparkies |
| `/industries/real-estate/` | Real Estate | Property listings, agent portals and CRM for agencies |
| `/industries/restaurants/` | Restaurants & Hospitality | Online ordering, booking systems and menu sites |
| `/industries/healthcare/` | Healthcare | Patient portals, telehealth and practice management |
| `/industries/retail/` | Retail & E-Commerce | Online stores, POS integration and inventory |
| `/industries/professional-services/` | Professional Services | Websites and client portals for lawyers, accountants, consultants |

**Codelab industry page structure:**

| # | Section |
|---|---------|
| 1 | Breadcrumb |
| 2 | Title + one-liner |
| 3 | Description paragraph |
| 4 | "Common challenges" — 3 bullets |
| 5 | "How we help" — 3 bullets |
| 6 | "Relevant services" — 3-4 linked service names |
| 7 | CTA |

**Implementation:** Data-driven from `content/industries.js` → shared `IndustryPage` component. `app/industries/[slug]/page.js` with `generateStaticParams()`.

**Agon mapping:** No direct template page for this — build from scratch using Agon's CSS utility classes (`section-box`, `container`, `color-gray-*`, `text-heading-*`).

**Note on existing static pages:** We already have `public/tradie-website-design/`, `public/restaurant-website-design/`, `public/real-estate-website-design/` as static HTML. These **stay as-is** (they already rank). The new `/industries/tradies/` etc. are the Next.js route equivalents with a different angle — industry-focused rather than keyword-focused. Add canonical + cross-links to avoid cannibalisation.

---

### PAGE 5: Work/Portfolio Hub `/work/`

**Codelab structure:**

| # | Section |
|---|---------|
| 1 | Breadcrumb |
| 2 | Hero: "Work We're Proud Of" |
| 3 | Filter tabs (All / Web App / Desktop App / E-commerce / Mobile App) |
| 4 | Project cards — each with type badge, title, description, "View project →" |
| 5 | CTA |

**Our version:**

Same structure. Filter by: All · Websites · Apps · E-Commerce · AI.

Show real clients first, concept builds after (with "Concept build" badge).

**Implementation:** Already have `content/case-studies.js` with `isConcept` flag. Build filter tabs as client-side state.

**Agon mapping:** `blog-1/page.js` grid layout works as the base. Swap blog cards for project cards.

**Individual case study pages** (`/work/[slug]/`): Codelab's individual project pages 404 — they haven't built them yet. We should. Structure: hero with screenshot, client name + URL, challenge/solution/result, tech stack tags, "View live site" button, related projects.

---

### PAGE 6: Pricing `/pricing/` (OUR DIFFERENTIATOR — Codelab doesn't have this)

**Keep our existing pricing page** with the 6-tier cards from the homepage (Grow·Landing, Grow·Business, Sell·E-Commerce, Build·App, Automate·AI, Own·Custom Software).

This is our biggest competitive edge — Codelab hides pricing behind "Get a Free Quote". We publish it.

**Agon mapping:** `page-pricing-1/page.js` — already wired.

---

### PAGE 7: Blog `/blog/`

**Codelab structure:**

| # | Section |
|---|---------|
| 1 | Breadcrumb |
| 2 | Hero: "Insights & Ideas" |
| 3 | Blog cards — numbered (01, 02, 03), each with category tag, title, description, date, read time, "Read article →" |
| 4 | CTA |

Blog post pages 404 on Codelab — not built yet.

**Our version:** Merge current `/guides/` and `/blog/` into one `/blog/` hub. Existing static blog posts (7 in `public/blog/`) continue to serve via static rewrites. New posts go into `content/blog.js` → `app/blog/[slug]/page.js`.

**Agon mapping:** `blog-1/page.js` for the hub, `blog-single/page.js` for individual posts.

---

### PAGE 8: Contact `/contact/`

**Codelab structure:**

| # | Section |
|---|---------|
| 1 | Breadcrumb |
| 2 | Hero: "Let's talk about your project" |
| 3 | Left column: phone, email, address |
| 4 | Right column: contact form with fields — Name, Email, Service type chips (Web/Mobile/Custom/Marketing/AI/Support), Budget selector (Under $1k/$1k-$5k/$5k-$10k/$10k+), Message textarea, Send button |

**Our version:**

Same layout. Key differences:
- **Phone:** brother's AU number (from `content/site.js`)
- **Email:** contact@buildfirstsite.com
- **Address:** brother's AU address (TODO: confirm)
- **Service chips:** Web · App · E-Commerce · AI · Custom Software · Maintenance
- **Budget in AUD:** Under AU$1k · AU$1k–5k · AU$5k–10k · AU$10k+
- **Form submission:** Web3Forms (env: `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`)
- **Add Calendly embed** for "Book a Meeting"

**Agon mapping:** `page-contact/page.js` — already wired. Needs significant rework for the chip-selector and budget range.

---

### PAGE 9: 404 Page

**Codelab:** Styled as a terminal window — very on-brand for a dev studio.

**Our version:** Same concept. Terminal-style 404 with links to Home, Services, Work, Contact. Already have `app/404/page.js` — restyle it.

---

### PAGE 10: Privacy Policy & Terms `/privacy/`, `/terms/`

Codelab has these in footer. We need them too. Currently `app/page-terms/page.js` exists (Agon default). Needs real content.

---

## 3. Shared components needed

### New components to build

| Component | Purpose | Used on |
|-----------|---------|---------|
| `Breadcrumb.js` | Home > Page > Subpage trail | All inner pages |
| `SectionHeader.js` | Eyebrow + H2 + subtitle pattern | Every section |
| `ServiceCard.js` | Icon + title + description + tech tags + link | Homepage, Services hub |
| `ProjectCard.js` | Screenshot + type badge + title + description + stat + link | Homepage, Work hub |
| `IndustryCard.js` | Title + description + link | Industries hub |
| `ProcessTimeline.js` | 6-step horizontal timeline with icons | Homepage, About |
| `StatsCounter.js` | Animated counter row (wraps existing CounterUp.js) | Homepage, About |
| `CTASection.js` | "Let's build yours" — dual CTA | Every page bottom |
| `ContactForm.js` | Full form with service chips + budget selector | Contact page |
| `ServiceChips.js` | Clickable service-type pill selector | Contact form |
| `BlogCard.js` | Category tag + title + description + date + read time | Blog hub |
| `TestimonialCard.js` | Quote + name + role + company (or Upwork verified badge) | Homepage |
| `MegaDropdown.js` | Two-column dropdown for Services and Industries | Header nav |

### Existing Agon components to keep and adapt

| Component | Adaptation needed |
|-----------|-------------------|
| `Layout.js` | Add Breadcrumb slot, keep dark mode support |
| `Header.js` | Replace flat nav with mega-dropdown for Services + Industries |
| `Footer.js` | ✅ Already updated. Add Industries column |
| `Sidebar.js` | ✅ Already updated |
| `CounterUp.js` | Wrap in StatsCounter with real numbers |
| `Accordion.js` | Use for FAQ sections on service pages |
| `PriceTable.js` | Adapt for our 6-tier pricing |
| `BackToTop.js` | Keep as-is |
| `Preloader.js` | Keep as-is |

### Components to remove (unused Agon demo)

| Component | Reason |
|-----------|--------|
| `ModalVideo.js` | No video content planned |
| `RightSidebar.js` | Not in our design |
| `Intro2.js` | Demo-specific slider |
| `Featured.js` | Demo-specific slider |
| `Thumb.js` | Demo-specific slider |
| `PriceTable2.js` | Duplicate pricing variant |

---

## 4. Content data files needed

All in `content/` directory, plain JS exports:

| File | Exports | Status |
|------|---------|--------|
| `site.js` | SITE, NAV, CTA, FOOTER_COLUMNS | ✅ Exists — needs NAV update for dropdowns |
| `home.js` | HERO, REAL_CLIENTS, PROBLEMS, SERVICE_CARDS, etc. | ✅ Exists — needs rewrite to match new sections |
| `services.js` | SERVICES array (6 entries with full detail) | ✅ Exists — needs tech tags, included[], deliverables[], faqs[] |
| `industries.js` | INDUSTRIES array (6 entries) | ❌ New |
| `case-studies.js` | PROJECTS array with isConcept flag | ✅ Exists — needs screenshot paths, type badges |
| `blog.js` | POSTS array | ❌ New (for Next.js route posts; static posts stay in public/) |
| `process.js` | STEPS array (6 steps) | ❌ New (shared between Homepage + About) |
| `stats.js` | STATS array (real numbers only) | ❌ New |
| `testimonials.js` | TESTIMONIALS array | ✅ Exists (empty) — populate when real reviews collected |

---

## 5. Route structure (final)

```
/                                   Homepage
/about/                             About Us
/services/                          Services hub
/services/web-development/          Service detail (×6)
/services/app-development/
/services/custom-software/
/services/ai-automation/
/services/marketing-seo/
/services/maintenance/
/industries/                        Industries hub (NEW)
/industries/tradies/                Industry detail (×6)
/industries/real-estate/
/industries/restaurants/
/industries/healthcare/
/industries/retail/
/industries/professional-services/
/work/                              Portfolio hub
/work/[slug]/                       Case study detail (existing 6)
/pricing/                           Pricing
/blog/                              Blog hub
/blog/[slug]/                       Blog post (new Next.js route posts)
/contact/                           Contact
/privacy/                           Privacy Policy
/terms/                             Terms & Conditions

# Plus 20 existing static pages served via public/ rewrites
# (tradie-website-design, web-design-sydney, etc.)
```

**Total new Next.js routes:** ~28 (vs current 7)
**Total site pages:** ~55 (28 Next.js + 20 static + 7 static blog posts)

---

## 6. Design system changes needed

### Current state (Agon)

- Bootstrap grid + Agon's custom CSS classes
- Light mode default with no dark mode
- Chivo + Noto Sans fonts

### Target state (Codelab-inspired)

We do NOT need to rewrite Bootstrap → Tailwind. Instead:

1. **Add dark mode** — CSS custom properties for dark/light themes in Agon's existing CSS. Toggle class on `<html>`. Header already has scroll-based style swap (`headerStyle`) — extend for dark mode.

2. **Font swap** — replace Chivo/Noto Sans:
   - **Body:** Inter (matches Codelab, widely used, great readability)
   - **Headings:** Space Grotesk (geometric, modern, matches Codelab)
   - **Mono/code:** JetBrains Mono (for hero code mockup, terminal 404)
   - Load via `next/font/google` in `app/layout.js`

3. **Color palette update** — override Agon CSS variables:
   - Dark bg: `#0B1121` (Codelab's dark navy)
   - Accent: `#4F6AFF` (Codelab's blue) or keep our `#D4551F` (brand orange)?
   - **Decision needed:** blue accent (Codelab look) vs orange accent (our existing brand)

4. **Add WhatsApp floating button** — fixed bottom-right, links to WhatsApp with pre-filled message

---

## 7. Implementation priority (what to build first)

### Phase 1 — Core pages (Week 1-2)

1. Font swap (Inter + Space Grotesk + JetBrains Mono)
2. Homepage rebuild with all 10 sections
3. Services hub + 6 individual service pages (data-driven)
4. About page
5. Contact page with form + chips + budget selector
6. Header mega-dropdown for Services

### Phase 2 — Portfolio + Content (Week 3)

7. Work hub with filter tabs
8. Case study detail pages (real clients first)
9. Blog hub (merge guides + blog)
10. Footer update (add Industries column)

### Phase 3 — Industries + Polish (Week 4)

11. Industries hub + 6 industry pages (data-driven)
12. Header mega-dropdown for Industries
13. Dark mode toggle
14. 404 page restyle (terminal theme)
15. Privacy/Terms pages
16. WhatsApp floating button

### Phase 4 — Launch prep

17. Replace all Agon demo images with real/stock/generated assets
18. Pricing page with real AUD numbers (reconcile from CONTENT-PLAN §28)
19. SEO: meta, schema, sitemap for all new pages
20. Lighthouse audit + Core Web Vitals
21. Merge `redesign` → `main`

---

## 8. Key differences from Codelab (our advantages)

| Feature | Codelab | Build First Site |
|---------|---------|------------------|
| **Pricing** | Hidden ("Get a Quote") | Published, fixed AUD |
| **Team transparency** | "Collective of freelancers" (vague) | Two-person studio, named roles, honest about India+AU structure |
| **Testimonials** | Mix of custom + Upwork (some look fabricated — "James Wilson, CEO, BuildRight Pty Ltd" returns no results) | Real only, or none. We wait for genuine reviews |
| **Stats** | All show "0+" (broken/placeholder) | Real numbers only, even if small |
| **Case studies** | 5 projects, detail pages 404 | 4 real clients + 3 labelled concepts, working detail pages |
| **Blog** | 3 posts, all 404 when clicked | Existing 7 static posts that work + new ones |
| **Industries** | 6 pages (working) | 6 pages + 3 existing static industry pages (SEO advantage) |
| **Join Us** | 404 | Don't include (we're 2 people) |
| **Dark mode** | Working | Phase 3 (nice-to-have, not blocking) |
| **Code ownership** | Not mentioned | Explicitly stated, key differentiator |

---

## 9. Open decisions before building

1. **Accent color:** Keep brand orange (#D4551F) or switch to Codelab-style blue (#4F6AFF)?
2. **Dark mode priority:** Build dark-first like Codelab, or stay light-first and add dark toggle later?
3. **Industries:** Confirm the 6 industries listed, or different ones?
4. **Blog vs Guides:** Merge into one `/blog/` hub, or keep both?
5. **"How You Grow" section:** Include the 4-step growth journey on homepage, or is it too similar to Process?
6. **Hero right-side mockup:** Code editor + dashboard card (like Codelab), or something else?
7. **WhatsApp vs other chat:** WhatsApp button, or Calendly widget, or both?

---

## 10. Files that need changes (summary)

### Modify existing

- `content/site.js` — NAV structure (add dropdown support for Services + Industries)
- `content/home.js` — rewrite for new 10-section homepage
- `content/services.js` — add techTags, included, deliverables, faqs per service
- `components/layout/Header.js` — mega-dropdown
- `components/layout/Footer.js` — add Industries column
- `app/layout.js` — font swap (Inter + Space Grotesk + JetBrains Mono)
- `app/page.js` — full homepage rebuild
- `app/about/page.js` — real about content
- `app/contact/page.js` — form with chips + budget
- `app/services/page.js` — services hub
- `app/work/page.js` — portfolio hub with filters

### Create new

- `content/industries.js`
- `content/process.js`
- `content/stats.js`
- `content/blog.js`
- `app/services/[slug]/page.js` + `generateStaticParams`
- `app/industries/page.js` (hub)
- `app/industries/[slug]/page.js` + `generateStaticParams`
- `app/blog/page.js` (hub — replaces current static blog index?)
- `app/work/[slug]/page.js` (case study detail — may already exist from v1)
- `app/privacy/page.js`
- `app/terms/page.js`
- `components/Breadcrumb.js`
- `components/SectionHeader.js`
- `components/ServiceCard.js`
- `components/ProjectCard.js`
- `components/ProcessTimeline.js`
- `components/StatsCounter.js`
- `components/CTASection.js`
- `components/ContactForm.js`
- `components/MegaDropdown.js`
- `components/BlogCard.js`
- `components/WhatsAppButton.js`
