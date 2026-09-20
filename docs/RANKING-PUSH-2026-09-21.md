# Ranking push — 21 Sep 2026

You asked me to work the two pages with the highest impressions. I checked the
premise first, and it pointed somewhere better.

---

## 1. Highest impressions ≠ closest to ranking

| Page | Impr (7d) | Position | Queries it ranks for |
|---|---|---|---|
| /how-much-does-a-website-cost-australia/ | 121 | 89.7 | 144 |
| /services/mobile-app-development/ | 26 | 89.7 | **1** |
| **/hire-website-builder/** | 10 | **50.5** | 18 |

Position 90 is page nine. Position 50 is page five. Position **21** — which is
where `/hire-website-builder/` sits for *"hire a website builder"* — is the top
of page two.

**The distance matters more than the volume.** Moving a page from 90 to page one
means passing eighty results. From 21, it means passing twenty. Same effort, very
different odds.

And one number settles it: over 90 days `/hire-website-builder/` has produced
**the only 2 clicks the entire site has earned.** It is the one page that has
already proved it can get a human to click.

### The app page was the weakest of the three

94 impressions, but from **exactly one query** — *"build my app australia"* at
position 95. That is not a page Google half-understands; it is a page Google
associates with a single phrase. It also runs to **264 words**.

Separately, every AU competitor ranking for app-cost queries quotes
**$20,000–$350,000**. We say $4,500. You chose to keep the price and say plainly
what it buys, which is the right call — but it means this page should target
*"MVP app cost"* and the *"build my app"* cluster, not the $25k head term where
our number reads as implausible rather than cheap.

---

## 2. What I found on /hire-website-builder/

**We are cited in Google's AI Overview for "hire someone to build a website".**
The overview quotes our page, and the cost ranges it gives as the market answer —
$800–$1,500 landing page, $1,900–$10,000 business site, $4,500+ e-commerce — are
**our numbers**. Google is already treating us as a source on this topic.

**But the page title did not contain the word "hire."** It was *"Website
Developers for Small Business Australia"*, while every query it ranks for is
*hire someone to build a website* · *hire a website builder* · *hire someone to
make a website* · *pay someone to build a website*. Putting the exact phrase in
the title is the most reliable on-page move there is, and it was missing.

**The SERP gap is the real opportunity.** Page one is almost entirely
marketplaces — Upwork, Fiverr, Wix Marketplace, Airtasker, Freelancer — plus
Reddit threads. Not one of them will honestly compare *going through a
marketplace* against *hiring directly*, because they are the marketplace. That
comparison is what the searcher actually wants and nobody is writing it.

### Done

- Title → **"Hire Someone to Build a Website in Australia (From $800)"** (56 chars)
- H1 and description rebuilt around the same phrase
- New section: **where you can hire someone** — a four-way table comparing
  marketplaces, task platforms, platform marketplaces and direct hire, including
  where each genuinely wins. We say outright that Fiverr is the right tool for a
  one-page tweak, because it is, and a comparison that never concedes anything
  reads as a sales pitch.
- New sections: what to have ready before hiring, what to check before paying a
  deposit, and the two costs people forget (monthly fee × 60, exit cost)
- **Four verbatim "People also ask" questions** added as FAQs, including
  *"Can ChatGPT build me a website?"* — answered honestly, since AI is part of
  how we build
- **704 → 1,687 words**, 11 internal links

---

## 3. Bugs found and fixed along the way

**Two pairs of pages with character-for-character identical titles.** I knew
about one. A sitewide sweep found a second I did not:

| Duplicate title | Pages |
|---|---|
| "How Much Does a Website Cost in Australia? (2026)" | landing page **and** /blog/website-cost-australia/ |
| "How Long Does It Take to Build a Website? (2026)" | landing page **and** /blog/how-long-to-build-a-website/ |

Both blog posts retitled to their own angle and canonicalled to the landing page
that should own the query. **No duplicate titles remain anywhere on the site** —
I swept all five content files.

**The service route had the same two defects as the industries route**, which I
fixed three days ago and did not think to check for elsewhere:
- `title` not absolute → the mobile app page rendered at **100 characters with
  the brand twice** (its metaTitle already ended in it). Now 62.
- `openGraph` missing → every service page shared as the generic site card with
  `og:url` pointing at the homepage.

**The Article schema was invalid.** `LandingPage.js` emitted `@type: Article`
with the *Service* property set underneath — no `headline`, `datePublished`,
`dateModified` or `author`. Four pages affected. Now branches properly, and
renders a **visible "Last updated" date** from the same value the schema uses so
the two cannot drift. Every page-one competitor for our cost queries is
date-stamped; we were the only undated result.

---

## 4. What I would do next, in order

1. **Links.** Still the ceiling, still unchanged. Position 21 → page one is
   plausible on-page work; position 21 → position 3 is not, without them.
2. **Rework the app page** around MVP scope and the *"build my app"* cluster —
   264 words will not hold any position.
3. **`/webflow-vs-custom-website/`** is ranking **16th for "custom webflow
   website design"** and 22nd for "custom webflow website" — but our page argues
   *against* Webflow. Those searchers want someone to *build* them a Webflow
   site. That is an intent mismatch worth a decision: either serve it or stop
   ranking for it.
4. **The cost calculator.** Digital Nomads HQ ranks page one with "+ Cost
   Calculator" in the title. It is already Wave 2 in `CLAUDE.md`.

### What I am not promising

No target position. I set one before — "81 to under 50" — on a link assumption
that did not hold, and retracted it. What is true here: the title was missing its
own keyword, two pairs of pages were competing with each other, and the schema
was invalid. Those are defects with understood mechanisms, and removing them
removes reasons Google has to rank us below pages that do not have them.

**Re-measure 19 Oct 2026** — `/hire-website-builder/`, 90-day window, watch
"hire a website builder" (currently 21.0) and "hire someone to build a website"
(31.5).
