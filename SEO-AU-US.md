# Build First Site — SEO Plan: Australia (Sydney · Melbourne) + USA (Denver · Phoenix · Nashville)

**Domain:** buildfirstsite.com · **Goal:** Organic rankings · **Updated:** June 2026

---

## 1. Current State Audit

### What's already working ✅
- Meta title/description in `index.html` mentioning US/UK/AU
- JSON-LD `ProfessionalService` schema with `areaServed` (US, UK, AU)
- `public/robots.txt` + `public/sitemap.xml` (homepage only)
- Vite build → Vercel: fast load, good Core Web Vitals baseline
- Real Australian client projects (HS Race Gear, Mobile Armour, Harbour Plumbing, Marlow & Vine)
- FAQ schema-ready content in `data.ts`

### Critical gaps ❌
| Gap | Impact | Fix |
|-----|--------|-----|
| No city-specific pages | Very High | Create `/web-design-sydney`, `/web-design-melbourne`, `/web-design-denver`, `/web-design-phoenix`, `/web-design-nashville` |
| React SPA — Googlebot must render JS | Medium | Static HTML city pages in `/public` bypass this entirely |
| Sitemap has only 1 URL | High | Add all city pages + update `lastmod` |
| Google Search Console not verified | High | Paste GSC meta tag in `index.html`, redeploy |
| No blog / case study content | Medium-High | 4–6 case study pages in Months 2–3 |
| Contact form uses mailto fallback | Medium | Add Web3Forms access key (already wired in code) |

---

## 2. Keyword Map by City

### Australia — Sydney
| Keyword | Monthly Searches (AU) | Difficulty | Priority |
|---------|----------------------|------------|----------|
| web designer sydney | 1,000–2,000 | Medium-High | ★★★ |
| web developer sydney | 800–1,500 | Medium | ★★★ |
| website design sydney small business | 300–600 | Low-Medium | ★★★ |
| ecommerce developer sydney | 200–400 | Low | ★★★ |
| web design agency sydney | 500–900 | Medium | ★★ |
| next.js developer sydney | 50–100 | Low | ★★★ (easy win) |
| custom website sydney | 200–400 | Low | ★★★ |
| shopify developer sydney | 300–500 | Medium | ★★ |
| ai web developer sydney | 50–150 | Very Low | ★★★ (easy win) |

### Australia — Melbourne
| Keyword | Monthly Searches (AU) | Difficulty | Priority |
|---------|----------------------|------------|----------|
| web designer melbourne | 800–1,500 | Medium-High | ★★★ |
| web developer melbourne | 600–1,200 | Medium | ★★★ |
| website design melbourne small business | 200–500 | Low-Medium | ★★★ |
| ecommerce developer melbourne | 150–300 | Low | ★★★ |
| web design studio melbourne | 200–400 | Low | ★★★ |
| restaurant website designer melbourne | 50–100 | Very Low | ★★★ (niche win) |
| next.js developer melbourne | 30–80 | Very Low | ★★★ (easy win) |

### USA — Denver, Colorado
| Keyword | Monthly Searches (US) | Difficulty | Priority |
|---------|----------------------|------------|----------|
| web designer denver | 500–900 | Medium | ★★★ |
| web developer denver colorado | 300–600 | Low-Medium | ★★★ |
| website design denver co | 200–400 | Low | ★★★ |
| small business website design denver | 100–250 | Low | ★★★ |
| denver web design agency | 300–500 | Medium | ★★ |
| ecommerce developer denver | 100–200 | Low | ★★★ |
| ai web development denver | 50–100 | Very Low | ★★★ (easy win) |

### USA — Phoenix, Arizona
| Keyword | Monthly Searches (US) | Difficulty | Priority |
|---------|----------------------|------------|----------|
| web designer phoenix | 600–1,000 | Medium | ★★★ |
| web developer phoenix az | 300–600 | Low-Medium | ★★★ |
| website design phoenix arizona | 200–400 | Low | ★★★ |
| small business web design phoenix | 100–250 | Low | ★★★ |
| phoenix web design company | 300–600 | Medium | ★★ |
| real estate website designer phoenix | 50–150 | Very Low | ★★★ (niche win) |
| ecommerce website phoenix | 100–200 | Low | ★★★ |

### USA — Nashville, Tennessee
| Keyword | Monthly Searches (US) | Difficulty | Priority |
|---------|----------------------|------------|----------|
| web designer nashville | 400–700 | Low-Medium | ★★★ |
| web developer nashville tn | 200–400 | Low | ★★★ |
| website design nashville | 300–600 | Low-Medium | ★★★ |
| nashville web design agency | 200–400 | Low | ★★ |
| small business website nashville | 100–250 | Very Low | ★★★ (easy win) |
| restaurant website design nashville | 50–100 | Very Low | ★★★ (niche win) |
| ecommerce developer nashville | 50–150 | Very Low | ★★★ (easy win) |

---

## 3. Implementation Roadmap

### Phase 1: Technical Foundation (Week 1–2) — Already done in this commit
- [x] Create 5 city landing pages as static HTML in `/public`
  - `/web-design-sydney/index.html`
  - `/web-design-melbourne/index.html`
  - `/web-design-denver/index.html`
  - `/web-design-phoenix/index.html`
  - `/web-design-nashville/index.html`
- [x] Update `sitemap.xml` with all 6 URLs
- [ ] Verify domain in **Google Search Console** (paste meta tag → redeploy)
- [ ] Add **Bing Webmaster** (import from GSC)
- [ ] Add **GA4 Measurement ID** in `index.html`
- [ ] Add **Web3Forms access key** in `.env` (`VITE_WEB3FORMS_ACCESS_KEY`)

### Phase 2: Authority Building (Month 1–2)
**Agency directories** — free profiles, each is a quality backlink:
- [ ] **Clutch.co** — most important for web agencies; requires 2–3 verified reviews
- [ ] **DesignRush** — free basic listing
- [ ] **GoodFirms** — free listing
- [ ] **The Manifest** — portfolio-style listing
- [ ] **SortList.com.au** — strong AU coverage
- [ ] **Upwork** — profile under "Web Design" + "Next.js Developer"

**Google Business Profile:**
- [ ] business.google.com → Service-area business (no physical address needed)
- Set service areas: Sydney, Melbourne, Denver, Phoenix, Nashville
- Add all 4 service types: Web Design, Web Development, E-Commerce, AI Web Apps
- Upload project screenshots as photos
- Get first 3–5 reviews from clients (HS Race Gear, Mobile Armour contacts)

### Phase 3: Content (Month 2–3)
Create case study pages for existing projects (each is a standalone URL that ranks):
- `/case-study/hs-race-gear` — "3D E-Commerce for Australian Racing Brand"
- `/case-study/mobile-armour` — "AI-Powered Accessories Store — Sydney"
- `/case-study/harbour-plumbing` — "Tradie Website with Local SEO — Sydney Plumber"
- `/case-study/marlow-vine` — "Restaurant Website — Fitzroy Melbourne"
- `/case-study/autozenlyai` — "Multi-AI SaaS Platform Build"

Each case study page should include:
- Problem → Solution → Results structure (500+ words)
- Tech stack breakdown
- Screenshots / demo links
- City + industry keywords naturally placed
- Internal links to relevant city landing page

### Phase 4: Content Marketing (Month 3+)
Blog posts targeting long-tail keywords (start with 1/month):

| Post title | Target keyword | City angle |
|------------|----------------|------------|
| "How much does a website cost in Sydney in 2026?" | website cost sydney | Sydney |
| "Melbourne Small Business Website Checklist" | small business website melbourne | Melbourne |
| "Why Denver Businesses Are Switching to Next.js" | web developer denver | Denver |
| "Real Estate Website Design Tips for Phoenix Agents" | real estate website phoenix | Phoenix |
| "Nashville Restaurant Website Must-Haves" | restaurant website nashville | Nashville |
| "Fixed-Price vs Hourly Web Design: What AU Clients Should Know" | web designer australia | AU broad |

---

## 4. On-Page SEO Checklist (per city page)

Each city page must have:
- [ ] `<title>` with exact-match city keyword (e.g. "Web Designer Sydney | Build First Site")
- [ ] `<meta description>` 145–155 chars, city + differentiator + CTA
- [ ] `<h1>` with primary keyword (visible, not hidden)
- [ ] 300–500 words of unique body content mentioning city 3–5×
- [ ] Internal link to homepage + contact section
- [ ] `ProfessionalService` + `LocalBusiness` JSON-LD schema
- [ ] `<link rel="canonical">` pointing to itself
- [ ] City page URL in sitemap.xml

---

## 5. Technical SEO — SPA Consideration

The main site is a React SPA (Vite). Googlebot crawls SPAs but it's asynchronous and slower. The **city landing pages are static HTML** in `/public` — Google crawls these instantly, no JS rendering required. This is the fastest path to ranking for city keywords.

For future scale (Month 4+), consider migrating to **Next.js** for full SSR/SSG on the main homepage too. The main benefits:
- Googlebot sees full HTML immediately
- Dynamic OG images per city
- ISR for case study pages

---

## 6. Link-Building Targets (AU-specific)

| Source | Type | How |
|--------|------|-----|
| Clutch.co | Directory + reviews | Create profile, ask clients to review |
| SortList.com.au | AU directory | Free listing |
| StartupAus.org | Resource list | Submit as a web studio |
| SmallBusiness.gov.au | Reference | Helpful for AU credibility signals |
| Behance | Portfolio backlinks | Post Harbour Plumbing + Marlow & Vine with AU city tags |
| Dribbble | Portfolio | Same |
| ProductHunt | AutoZenlyAI | Launch it — drives links + traffic |
| LinkedIn articles | Social signals | "How I built HS Race Gear's 3D ecommerce" |

---

## 7. Monthly Tracking Checklist

Run this every month:

**Rankings:**
- [ ] Search Google (from AU IP or use VPN) for your top 3 keywords per city
- [ ] Check GSC → Performance → filter by country (AU / US) → top queries

**Traffic:**
- [ ] GA4 → Acquisition → Organic Search → check city pages vs homepage
- [ ] GSC → Coverage → check for crawl errors on city pages

**Content:**
- [ ] Publish 1 blog post / case study
- [ ] Update 1 existing city page with fresher content

**Links:**
- [ ] Check 1 new directory submission
- [ ] Ask 1 past client for a Clutch or Google review

---

## 8. Priority Order (Do This First)

1. **Verify Google Search Console** — paste the meta tag, redeploy, submit sitemap
2. **Add Web3Forms key** — real form submissions + conversion events
3. **Add GA4 ID** — you need data before making decisions
4. **Create Google Business Profile** — adds you to Maps, huge for local
5. **Submit to Clutch + SortList** — backlinks + lead source
6. **Publish 1 AU case study page** — Harbour Plumbing or Marlow & Vine
7. **Write first blog post** — "website cost sydney 2026" (high intent, easy win)

---

*The city landing pages (`/web-design-sydney`, `/web-design-melbourne`, `/web-design-denver`, `/web-design-phoenix`, `/web-design-nashville`) are already live in `/public` — deploy to see them immediately.*
