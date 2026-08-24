# Search Console Audit — buildfirstsite.com

**Period reviewed:** 16 June – 21 August 2026 (90 days)
**Data source:** Google Search Console, every report
**Prepared:** 23 August 2026

---

## Executive summary

The site is technically sound and completely invisible.

| Metric | 90-day value |
|---|---|
| Impressions | 3,120 |
| Clicks | **7** |
| CTR | 0.2% |
| Average position | **81** |
| Unique queries | 582 |
| Pages earning impressions | 42 |
| **External backlinks** | **0** |
| Internal links counted by Google | 28 |
| Indexed pages | 55 |
| Not indexed | 26 |
| Rich results earned | **0** |
| Manual actions / security issues | None |

**One sentence:** Google understands what this site is about — it matches us to 582
relevant queries — but ranks us at position 81 because not a single website on
the internet links to us.

Everything else in this document is downstream of that.

---

## 1. What each report says

### 1.1 Performance — we rank for the right things, in the wrong place

582 unique queries over 90 days is a healthy topical footprint for a site this
young. Google has correctly understood the business. The problem is purely
positional.

**Top queries by impressions:**

| Query | Impressions | Clicks |
|---|---|---|
| website development | 247 | 0 |
| small business website checklist | 175 | 0 |
| website developer | 113 | 0 |
| web developer sydney | 98 | 0 |
| web developer perth | 64 | 0 |
| website cost | 61 | 0 |
| website development cost | 39 | 0 |
| webflow vs custom development | 38 | 0 |
| website making cost | 36 | 0 |
| website hosting costs australia | 36 | 0 |

**Top pages by impressions:**

| Page | Impressions | Clicks |
|---|---|---|
| `/blog/website-cost-australia/` | **988** | 0 |
| `/web-design-perth/` | **534** | 0 |
| `/web-design-adelaide/` | 281 | 0 |
| `/services/web-development/` | 278 | 0 |
| `/web-design-sydney/` | 175 | 0 |
| `/small-business-website-checklist/` | 129 | 0 |
| homepage | 87 | 4 |
| `/blog/small-business-website-checklist/` | 82 | 1 |
| `/hire-website-builder/` | 37 | 2 |
| `/services/custom-software/` | 27 | 1 |

Read those two columns together. **The four pages that earn clicks are not the
four pages that earn impressions.** Everything with real impression volume
converts at exactly zero, because it sits on page 8.

`/blog/website-cost-australia/` alone is 32% of all site impressions.

### 1.2 Links — the finding that explains everything

```
External links:  0
Internal links:  28
```

**Zero external backlinks.** Not few. Zero. Google's own report shows no domain
anywhere has ever linked to buildfirstsite.com.

Domain authority is overwhelmingly a function of inbound links. With none, no
amount of content quality moves position 81 to position 10. This is not a
content problem and it cannot be fixed with more pages.

**Internal links: 28 is also alarming**, and more diagnostic than it first
looks. A 55-page site with a 30-link footer on every page should show Google
hundreds of internal links. It shows 28.

Look at which pages Google actually credits:

| Page | Internal links counted |
|---|---|
| homepage | 12 |
| `/ecommerce-development/` | 5 |
| `/wix-vs-custom-website/` | 4 |
| `/hire-website-builder/` | 3 |
| `/ai-web-development/` | 2 |

`/web-design-perth/`, `/pricing/`, `/contact/` and `/about/` are **absent** —
despite every one appearing in the site-wide footer.

**The diagnosis:** Google is discounting our footer links as boilerplate. Until
today, the footer was essentially the *entire* internal linking strategy —
20 of 22 landing pages had zero in-content links. So the site's link
architecture, from Google's perspective, barely exists.

This is also why `/about/` and `/contact/` have never been crawled.

### 1.3 Indexing — 26 not indexed, and only 3 are our fault

| Reason | Pages | Source | Assessment |
|---|---|---|---|
| Discovered – currently not indexed | **21** | Google systems | Crawl budget — authority |
| Duplicate without user-selected canonical | 3 | Website | **Our fault — cannibalisation** |
| Page with redirect | 1 | Website | Intended (US city 301s) |
| Alternative page with proper canonical | 1 | Website | Benign |

**The 21** all show `Last crawled: N/A` — Google found them in the sitemap and
has never fetched them. Includes `/about/`, `/contact/`,
`/dental-website-design/`, three `/industries/` pages and several blog posts.
Google is rationing crawl budget on a low-authority domain. No code fix exists.

**The 3 duplicates** are real and fixable — see §2.

### 1.4 Core Web Vitals — no data at all

> "Not enough usage data in the last 90 days for this device type." — both
> mobile and desktop

CrUX needs a minimum volume of real Chrome users to report. We are below it.

This has a consequence worth stating plainly: **we cannot currently claim Core
Web Vitals as a proven strength.** Lab scores from PageSpeed Insights are
predictions. Field data is evidence, and we have none. For a studio whose entire
positioning is performance, that is a gap in our own proof.

### 1.5 Search appearance — zero rich results

```
Search Appearance: No data
```

We ship `FAQPage`, `BreadcrumbList`, `Service` and `LocalBusiness` schema. The
Breadcrumbs report shows 3 valid items and 0 errors, so the markup is correct.

But Google awards zero rich result treatment. Rich results are largely reserved
for pages ranking well enough to warrant enhanced display. At position 81 we
never qualify. **The schema is not wasted — it is simply dormant until rankings
improve.**

### 1.6 Sitemaps — one junk submission

| Sitemap | Status | Discovered |
|---|---|---|
| `/sitemap-index.xml` | Success | 138 |
| `/sitemap.xml` | Success | 79 |
| `/` | **1 error** | 0 |

Someone submitted `/` as a sitemap. It errors on every read. Remove it — a
permanently failing sitemap is a small negative quality signal and it clutters
the report.

### 1.7 Security & manual actions — clean

No security issues. No manual actions. Nothing punitive is happening. Our
position is earned honestly, which is oddly reassuring: there is no penalty to
recover from, just authority to build.

---

## 2. Cannibalisation — the one on-site problem worth fixing

Google flagged 3 pages as duplicates without an accepted canonical. All three
emit correct self-referencing canonicals, so this is not a tag bug — Google has
decided each page duplicates another and chosen the other one.

Cross-referencing the performance data confirms genuine keyword collisions:

| Pair | Impressions | Verdict |
|---|---|---|
| `/blog/website-cost-australia/` (988) vs `/how-much-does-a-website-cost-australia/` | Same query set | **Merge** |
| `/small-business-website-checklist/` (129) vs `/blog/small-business-website-checklist/` (82) | Same exact keyword | **Merge** |
| `/industries/real-estate/` vs `/real-estate-website-design/` | Same intent | **Merge** |
| `/blog/seo-for-ndis-providers/` vs `/ndis-website-design/` + 2 more NDIS posts | Four pages, one topic | **Consolidate** |
| `/services/` hub vs 6 individual service pages | Hub thinner than children | Differentiate |

The checklist pair is the clearest illustration: two pages targeting *the
identical keyword*, splitting 211 impressions and neither ranking. Merged, one
page inherits both signals.

`CLAUDE.md` §6 step 1 requires a cannibalisation check before adding any page.
These slipped through.

---

## 3. Fixed during this audit

| Issue | Scope | Status |
|---|---|---|
| Brand duplicated in `<title>` | 7 landing + 7 app routes | ✅ Fixed |
| Titles truncating past 60 chars | 23 pages | ✅ 0 remaining |
| `tel:` link contained spaces | Site-wide footer | ✅ Fixed |
| Zero in-content internal links | 20 of 22 landing pages | ✅ 3+ each |
| 3 landing pages returning nothing | wordpress/webflow/freelancer | ✅ Fixed |
| Broken blog card images | 12 posts | ✅ Fixed |

The title work matters most for the specific question of *appearance*: we were
rendering `… | Build First Site | Build First Site` and losing the informative
tail of every headline to truncation.

---

## 4. The plan

Ordered by impact per hour spent. An agency would run it in exactly this
sequence.

### Phase 1 — weeks 1–2 · Stop the leaks

| Action | Why |
|---|---|
| Deploy the title, tel: and internal-link fixes | Improves CTR on impressions we already have |
| Remove the `/` sitemap submission | Clears a permanent error |
| Merge the 4 cannibalised pairs, 301 the loser | Consolidates split ranking signals |
| Resubmit sitemaps, request indexing on `/about/` and `/contact/` | Core pages have never been crawled |
| Add real in-content links to `/about/`, `/contact/`, `/pricing/` from high-traffic pages | Footer links are being discounted; body links are not |

**Expected:** CTR improvement. No ranking movement yet.

### Phase 2 — weeks 3–8 · Build the only thing that's missing

This phase is 90% off-site. Resist the urge to publish more pages.

| Action | Target |
|---|---|
| Directory listings, `.au` prioritised | 10+ referring domains |
| Ship the AUD cost calculator | Links + serves the 988-impression cost cluster |
| Ship the speed checker | Links + proves the performance claim |
| Guest posts / founder outreach on AU tech and small-business blogs | 3–5 quality links |
| Referral programme | Links + leads |

**Why tools first:** they are the only asset that earns links passively.
`/blog/website-cost-australia/` already pulls 988 impressions on cost queries —
a calculator on that exact intent is the highest-probability link magnet
available to us.

**Expected:** first backlinks. Average position begins moving.

### Phase 3 — weeks 9–16 · Concentrate

| Action | Rationale |
|---|---|
| Deepen Perth | 534 impressions, Low competition, 5,000/mo terms |
| Deepen the cost cluster | 988 impressions, already our strongest asset |
| Two deep case studies with real numbers | Trust + linkable |
| One new page only: `web developer canberra` | 5,000/mo, Low competition, no page exists |

Twelve verticals at position 81 is worth less than two clusters at position 15.

### What NOT to do

- Do not publish new industry verticals. We have 22 landing pages averaging
  position 81; a 23rd changes nothing.
- Do not buy links.
- Do not start Google Ads yet — see `SEO-AUDIT-AND-GROWTH-AUG-2026.md` §5. At
  $12–23 AUD CPC against a $1,900 product, the maths does not work until
  conversion rate improves.
- Do not chase rich results directly. They unlock with rankings, not with more
  schema.

---

## 5. How we measure

Track these four numbers weekly. Nothing else.

| KPI | Now | 90-day target |
|---|---|---|
| **Referring domains** | **0** | **10+** |
| **Average position** | **81** | **under 50** |
| Impressions in top 20 | ~15 | 300+ |
| Organic enquiries | 0 | 2+ |

**Referring domains is the leading indicator.** Position follows it by roughly
4–8 weeks. Everything else follows position.

Deliberately excluded: total impressions. We have 3,120 and 7 clicks. Impression
growth at position 81 is a vanity metric and tracking it will mislead us.

---

## 6. The honest client summary

You have a genuinely good website. It is faster and better built than most of
what ranks above it, the technical SEO is more thorough than the competition's,
and there is no penalty or error holding it back.

It ranks 81st because zero websites link to it, and Google has no other way to
judge whether a new domain deserves to be trusted.

The next 90 days should be almost entirely about earning links and consolidating
what exists — not about building more. The build phase is finished. The
distribution phase has not started.

Realistic horizon: **4–8 weeks** to see position move once the first links land,
**6–12 months** to compete on the head terms. Anyone promising faster is
guessing.
