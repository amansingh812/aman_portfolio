# Technical SEO Plan — Aug 2026

What an SEO agency would actually do here, in order, with the reasoning.
Built from real data: 28 days of Search Console + the Google Ads keyword
exports in `Google_keyWords/`.

---

## 1. Bugs found and fixed today

These were live and costing us impressions. All three are code-level, not
strategy.

### 1.1 Duplicated brand in the `<title>` — 7 pages

The live Perth page was rendering:

```
Web Design Perth WA 2026 | From $800 | Build First Site | Build First Site
```

73 characters, brand twice. Google truncates around 60, so the SERP was
showing `…| From $800 | Build First…` and cutting the rest. The comment in
`LandingPage.js` warned against exactly this; 7 pages had done it anyway.

**Fixed:** brand stripped from all `metaTitle` values.

### 1.2 The title template was eating 19 characters

The root layout appends `| Build First Site` to every page. On a brand nobody
searches for yet, that spends a third of the SERP title budget promoting a name
with no search volume.

**Fixed:** landing pages now emit an **absolute** title. Result — **0 of 22
titles overflow 60 characters**, down from 16. Revisit when brand search volume
exists.

### 1.3 `tel:` link contained spaces

`tel:+61 413 146 498` — spaces in a `tel:` URI break click-to-call on some
Android handsets. For a business whose enquiries arrive by phone this is a
direct conversion leak.

**Fixed:** dials `NAP.phoneE164` (`+61413146498`), still displays the readable
version.

---

## 2. Technical work still to do, in priority order

### P1 — this week

**a) Put the phone number in the header.**
It currently appears only in the footer. A tradie on a phone at 7am should not
have to scroll to call. Header click-to-call is one of the highest-impact
conversion changes available and it costs an hour.

**b) Verify OG images actually deployed.**
The live Perth page returned **no `og:image` at all** and a stale
`twitter:image`. The metadata code is now correct, so the next deploy should
fix it — but confirm with Facebook Sharing Debugger and Twitter Card Validator
before assuming.

**c) Decide on the US city pages.**
`/web-design-phoenix/` ranks **position 4**. `/web-design-denver/` pulled 11
impressions. They're irrelevant to an AU business and they dilute the site's
geographic signal. Either commit to the US or `noindex` them.

**d) Submit the updated sitemaps in Search Console** and use URL Inspection →
Request Indexing on the three pages that were broken.

### P2 — next 2 weeks

**e) `LocalBusiness` schema is only on Melbourne.**
That was a deliberate one-entity decision and it is defensible. But Perth is
21% of our impressions. Consider a `Service` + `areaServed` refinement for
Perth specifically, or accept that we will not appear in WA map packs.

**f) Add `Organization` schema with `sameAs`.**
Links to LinkedIn, GitHub, X. This is how Google builds an entity graph for a
business. Cheap, and it is entity-building rather than page-building.

**g) Breadcrumbs are in schema but not visible on the page.**
Schema describing something a user cannot see is a violation risk. Render them.

**h) Internal link depth.**
Everything is reachable from the footer, which means everything is depth-2 and
nothing signals relative importance. Perth should receive more internal links
than Adelaide because Perth has 4× the impressions. Right now they are equal.

### P3 — ongoing

**i) Core Web Vitals field data.** We assume the builds are fast. Confirm with
real CrUX data in Search Console → Core Web Vitals, not lab scores.

**j) Reduce the legacy template image weight.** `public/assets/imgs/page/`
still contains multi-megabyte Agon demo PNGs (`homepage6/img.png` is 6 MB).
They are not referenced by live pages but they inflate the deploy.

---

## 3. Which keywords to target — from your own Ads data

I merged the Ads keyword exports with Search Console positions. Two useful
findings.

### 3.1 The six genuinely winnable high-volume terms

Low competition, 5,000 searches/month, and we already have a page for most:

| Keyword | Vol/mo | Comp | Bid range | Our page |
|---|---|---|---|---|
| `tradie website` | 5,000 | **Low** | $4.33–18.46 | `/tradie-website-design/` ✅ |
| `ndis website` | 5,000 | **Low** | $2.33–7.01 | `/ndis-website-design/` ✅ |
| `web designers perth wa` | 5,000 | **Low** | $9.07–37.74 | `/web-design-perth/` ✅ |
| `web design adelaide` | 5,000 | **Low** | $6.98–18.08 | `/web-design-adelaide/` ✅ |
| `web developer adelaide` | 5,000 | **Low** | $8.24–26.61 | `/web-design-adelaide/` ✅ |
| `web developer canberra` | 5,000 | **Low** | $5.24–17.89 | **none** ❌ |

`tradie website` and `ndis website` are the standouts — 5,000/month at Low
competition, and both pages already exist. These should be the focus, not new
verticals.

Canberra is the only genuine content gap worth filling. One page, not a wave.

### 3.2 Perth is where Google already wants to rank us

Perth-related queries are **21% of all impressions** (400 of 1,904). Google
keeps choosing to show the Perth page and keeps ranking it at position 93.
Cost/pricing queries are another **22%**.

Between them, 43% of our visibility sits in two clusters. Concentrating on
those two beats spreading across twelve verticals.

### 3.3 Stop targeting

Anything at Medium/High competition with a generic head term —
`website development`, `web developer` unqualified. We rank 88–94 for these
and will not move without a domain authority we do not have.

---

## 4. Monitoring stack — the tools to actually use

### Free, set these up first

| Tool | What it answers | Cadence |
|---|---|---|
| **Google Search Console** | Position, impressions, indexing, CWV field data | Weekly |
| **Google Analytics 4** | What visitors do after landing | Weekly |
| **Bing Webmaster Tools** | Free extra index + it powers ChatGPT search | Set once |
| **PageSpeed Insights / CrUX** | Real user Core Web Vitals | Monthly |
| **Rich Results Test** | Schema validity | On every new page type |
| **Screaming Frog** (500 URLs free) | Full crawl: broken links, redirect chains, duplicate titles, orphans | Monthly |
| **Ahrefs Webmaster Tools** | Free backlink profile for a verified domain | Monthly |
| **Google Business Profile Insights** | Local pack visibility | Weekly |

### Paid, only when there's budget

| Tool | Cost | Worth it when |
|---|---|---|
| **Ahrefs Lite** | ~$129 USD/mo | You're actively link-building and need competitor gap analysis |
| **Semrush** | ~$139 USD/mo | Alternative to Ahrefs; better keyword tooling, weaker backlink index |
| **SE Ranking** | ~$65 USD/mo | Budget option, genuinely decent rank tracking |
| **Sitebulb** | ~$40/mo | Deeper technical crawls than Screaming Frog |

**Recommendation:** stay free for now. Search Console plus Screaming Frog plus
Ahrefs Webmaster Tools covers everything that matters at 1,900 impressions.
Paid tools earn their cost when you have traffic to optimise, not before.

### The one report to build

A weekly note tracking exactly four numbers:

1. **Average position** — the only number that matters right now
2. Impressions in the top 20
3. Referring domains
4. Enquiries from organic

Not total impressions. We have 1,904 and they are worth nothing.

---

## 5. Reading the site as a customer

I read `/web-design-perth/` end to end as a Perth business owner would.

### What works

- The price is visible immediately. Every competitor hides it. This is the
  single strongest thing on the page.
- "Are you based in Perth? No." — answering the objection directly, in the FAQ,
  before they wonder. That builds more trust than a fake local address.
- Industry sections (mining services, FIFO, construction) read as though
  written by someone who knows Perth.
- The timezone answer is specific and practical.

### What a customer would question

**a) There is no proof on the page.** Prices, promises, capability — all
assertions. No client logos, no work samples, no screenshots. A visitor has
nothing to verify. The portfolio exists but this page never links to it.

**b) No phone number above the fold.** Local service buyers call. They do not
fill in forms. It is footer-only.

**c) "Book a free call" goes to Calendly on a different domain.** That is a
trust break at the exact moment of conversion. An embedded booking step would
hold them on-site.

**d) The page opens by talking about agencies, not about them.** "Most Perth
web design agencies make you wait…" is competitor-framed. A visitor cares about
their own problem first.

**e) Six pricing tiers is a lot to parse.** Starter/Business/Unlimited/
E-Commerce/Application/Custom. Choice paralysis is real. Three visible with the
rest behind "other options" would convert better.

### What needs a human, not me

- Whether the Perth industry claims overstate experience. I cannot verify which
  of those sectors we have actually worked in, and `CLAUDE.md` §1 is explicit
  that capability may be described but clients may not be implied.
- Whether the concept builds are still clearly labelled as concept builds
  everywhere they appear.
- Whether the brother's Australian details are consistent across the site, GBP
  and every directory — character for character.

---

## 6. Realistic 90-day plan

### Weeks 1–2 — fix and consolidate

Deploy today's title, tel: and image fixes. Header phone number. Resolve the US
city pages. Resubmit sitemaps and request indexing on the three repaired URLs.
Set up Bing Webmaster Tools and Ahrefs Webmaster Tools. Run a Screaming Frog
crawl and fix whatever it surfaces.

**Expected:** better CTR from fixed titles. No ranking change yet.

### Weeks 3–6 — concentrate, don't expand

Stop publishing new verticals. Deepen the two clusters that already have
demand:

- **Tradie** (`tradie website`, 5,000/mo, Low) — add real suburb pages, add
  proof, add photos.
- **Perth** — more internal links pointing at it than any other city page,
  because it earns 4× the impressions.

Add the one missing page: `web developer canberra`.
Add `Organization` schema with `sameAs`. Render visible breadcrumbs.

**Expected:** average position begins moving on Perth and tradie terms.
83 → 60s is a realistic target.

### Weeks 7–12 — earn links

The cost calculator ships. It is the only asset on the roadmap that earns links
at scale, and it directly serves the cost/pricing cluster that is already 22%
of impressions.

Directory submissions with `.au` priority. Two deep case studies with real
numbers.

**Expected:** first referring domains. Position 83 → under 50.

### What success looks like at day 90

| Metric | Now | Target |
|---|---|---|
| Average position | 83 | **under 50** |
| Impressions in top 20 | 15 (0.8%) | **300+** |
| Referring domains | ~0 | **10+** |
| Titles overflowing SERP | 16 | **0** ✅ done |
| Organic enquiries | 0 | **2+** |

---

## 7. The honest summary

The technical foundation was already strong; today's fixes closed three real
leaks in it. But no amount of further technical work moves position 83 to
position 10 — that gap is authority, and authority comes from links and
entity trust, not from code.

So the split from here is roughly:

- **20% technical** — the P1/P2 list above, then stop
- **30% concentration** — deepen tradie and Perth instead of adding verticals
- **50% off-page** — tools, directories, case studies, links

The temptation with a codebase this pleasant to work in is to keep building
pages. That is the one thing that will not help.
