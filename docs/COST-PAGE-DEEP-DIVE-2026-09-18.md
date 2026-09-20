# Why /how-much-does-a-website-cost-australia/ gets impressions and no clicks

Analysis date: 18 Sep 2026 · GSC window: 28 days to 15 Sep

---

## The short answer

**Average position 90.2.** Not a CTR problem. Arithmetic.

| Metric | Value |
|---|---|
| Impressions | 436 |
| Clicks | **0** |
| Average position | **90.2** |

Position 90 is page 9. Measured CTR at that depth is effectively zero — a
handful of clicks per hundred thousand impressions. **Zero clicks from 436
impressions at position 90 is the expected result, not an anomaly.**

This matters because it rules things out. Title, meta description and snippet
wording change CTR *once you are on page one*. Rewriting them now would change
nothing, and anyone who tells you otherwise is selling something. The entire
problem is position.

Every single query is in the same band — there is no near-miss hiding in here:

| Query | Impressions | Position |
|---|---|---|
| how much is a landing page | 40 | 85.7 |
| how much does a website cost for small business | 27 | 96.2 |
| website design pricing | 24 | 86.1 |
| website cost | 24 | 98.8 |
| **how much does a website cost australia** | 21 | **96.4** |
| how much does a website cost | 13 | 99.2 |
| websites cost | 11 | 97.8 |
| small business website cost | 8 | 94.5 |
| how much does a website cost in australia | 7 | 94.0 |
| web designing cost | 7 | 96.7 |

144 queries total. Our exact-match target keyword sits at **96.4**.

### One piece of genuinely good news

**418 of 436 impressions are from Australia** (India 1, UK 1). The targeting is
right. These are Australian people searching commercial cost questions — exactly
who we want. Nothing needs re-pointing. The audience is already correct; it just
cannot see us.

---

## Why we are at position 90 — six findings, ranked

### 1. Cannibalisation — confirmed, and worse than expected

Filtering GSC to queries containing "cost", **six of our own pages** compete:

| Page | Impressions | Position |
|---|---|---|
| /how-much-does-a-website-cost-australia/ | 281 | 94.1 |
| /blog/tradie-website-cost/ | 63 | **78.6** |
| /wordpress-vs-custom-website/ | 60 | 92.0 |
| /blog/website-cost-australia/ | 30 | 91.8 |
| /hire-website-builder/ | 2 | 51.0 |
| /squarespace-vs-custom-website/ | 1 | 28.0 |

**The worst of it:** `/blog/website-cost-australia/` carries the metaTitle
*"How Much Does a Website Cost in Australia? (2026)"* — **character-for-character
identical to the landing page's title**, on the same topic, with no canonical
linking them. Two pages telling Google they are the answer to the same query.
Google has to pick one, and splitting the signal weakens both.

There is also `/blog/average-cost-website-design-small-business/` (1 Sep) on
the same ground. That is **three pages** on "what a website costs in Australia".

**Note the pattern in that table:** `/blog/tradie-website-cost/` ranks **78.6**,
fifteen places better than the generic page, on a fraction of the content. The
specific page beats the general one. That is a strategic signal, not a quirk.

### 2. Content depth — we are roughly a third the size of the page above us

Measured directly against WP Creative, currently ranking #2:

| | Us | WP Creative (#2) |
|---|---|---|
| Words | 1,481 | **4,047** |
| H2 sections | 9 | 13 |
| Tables | 2 | **6** |
| Internal links on page | ~14 | **179** |

Their section headings show what we do not cover at all:

- **"Why Trust These Numbers"** — an explicit credibility section. We have nothing equivalent.
- **"Website Design Cost by City in Australia"** — and we have six city pages sitting there unlinked from this page.
- **"Website Cost by Who Builds It"** — DIY vs freelancer vs studio vs agency, as a structured comparison.
- **"Additional Costs to Consider"** — domain, SSL, copywriting, photography, maintenance.
- **"Cost-Saving Tips"**
- **"How to Find the Right Web Designer"**

Our page is well written and honest. It is simply not competing on depth for a
query where depth is the table stakes.

### 3. Freshness — we publish no dates at all, and this SERP runs on dates

Every page-one result displays a date: 28 Aug 2026, 1 May 2026, 28 Feb 2026,
23 Feb 2026. Titles literally carry "[2026]" and "June 2026".

WP Creative's schema: published **28 Aug 2026**, modified **16 Sep 2026** — two
days before this analysis. They refresh this page constantly and Google shows it.

**Our page emits no `datePublished` and no `dateModified` anywhere.** In a SERP
where every competitor is date-stamped, we are the only undated result.

### 4. A real bug: our Article schema is invalid

`components/landing/LandingPage.js` line 88 emits `"@type": page.schemaType`,
but the property set underneath it is always the **Service** shape —
`name`, `description`, `url`, `provider`, `areaServed`.

So when a page declares `schemaType: 'Article'`, we output an Article with none
of the properties Article requires: no `headline`, no `datePublished`, no
`dateModified`, no `author`. Verified in the live DOM:

```
articleKeys: ["@context","@type","name","description","url",
              "provider","areaServed","inLanguage","image"]
datePublished: MISSING
dateModified:  MISSING
```

That is an invalid Article. It cannot produce an Article rich result and cannot
put a date in the SERP — which is finding #3's mechanism.

**Four pages affected:** `how-much-does-a-website-cost-australia`,
`wix-vs-custom-website`, `small-business-website-checklist`,
`how-long-does-it-take-to-build-a-website`.

### 5. Intent mismatch — a hypothesis, flagged as one

Every ranking page quotes **$3,000–$10,000+**. Ours opens with *"a landing page
starts at $800 AUD"* in the first line.

These queries are informational: the searcher wants a survey of the Australian
market before they talk to anyone. The pages that win read like independent
guides. Ours reads like a price list with context attached — our own numbers,
first, before any market framing.

**I cannot measure this**, and I am not going to present a theory as a finding.
It is consistent with the evidence and worth testing, but findings 1–4 are
established facts and this one is not. Treat it accordingly.

### 6. Backlinks — still zero, still the ceiling

Unchanged. Every page-one competitor is an established AU agency domain with
years of links. Nothing in findings 1–5 substitutes for that.

---

## The opportunity we are currently missing

**"how much is a landing page" — 40 impressions, our single biggest query**,
position 85.7. We serve it with *one H2* inside a general cost page.

It is a distinct question with its own intent and its own searchers, and per
finding #1 the specific page beats the general one on this site. That is a page,
not a section.

Separately: **Digital Nomads HQ ranks on page one with "+ Cost Calculator" in the
title.** `CLAUDE.md` §4 Wave 2 already names the AUD Website Cost Calculator as
the first tool to build. This SERP is independent confirmation that the call was
right — a calculator is both a ranking asset here and the kind of thing that
earns the links we lack.

Also worth knowing: **Havealook is running Google Ads on this exact term**
($995 packages). Our closest competitor pays for this traffic.

---

## What to do, in order

**Mine — fixes with clear mechanisms:**

1. **Kill the duplicate title.** Decide which page owns "how much does a website
   cost in Australia", then canonical or retitle the other two. This is the
   single clearest fix and costs nothing.
2. **Fix the Article schema** so `schemaType: 'Article'` emits real Article
   properties — `headline`, `datePublished`, `dateModified`, `author`, `image`.
   Fixes 4 pages and is the prerequisite for a date appearing in the SERP.
3. **Add a `lastUpdated` field** to the landing-page model, render it visibly,
   and wire it to `dateModified`.
4. **Close the content gaps** — cost by city (linking the six city pages), cost
   by who builds it, additional costs, how to choose, and a "why trust these
   numbers" section stating plainly where our figures come from.
5. **Build `/landing-page-cost-australia/`** for the 40-impression query.

**Yours:**

6. **Links.** Nothing above changes the ceiling.

### What I am not going to promise

I am not putting a target position on this. I did that once before — "81 to
under 50 in 90 days" — on an assumption about referring domains that did not
hold, and I had to retract it.

What I will say: findings 1–4 are real defects with understood mechanisms, and
fixing them removes reasons Google currently has to rank us below pages that do
not have those defects. Whether that is worth ten places or fifty depends on
the link gap, which is not something on-page work can close. The honest test is
to fix them and re-measure.

**Re-measure 16 Oct 2026** — same GSC filter, same 28-day window, compare
average position.
