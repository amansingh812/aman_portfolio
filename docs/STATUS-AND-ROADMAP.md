# Where We Are, and What's Next

Written 8 Aug 2026. Supersedes the sequencing in `CLAUDE.md` §4.
Read with `docs/LOCAL-SEO-MELBOURNE.md` and `docs/KEYWORD-MASTER-LIST.md`.

---

## The one-line summary

**The site is now in good technical shape. It will still not rank much, because
the bottleneck was never the site — it is trust and links, and we have almost
none of either.**

Everything below follows from that.

---

## Where we are

### Done, and genuinely finished

| | Status |
|---|---|
| **Pricing model** | One source of truth in `content/pricing.js`. $800 / $1,900 / $3,500 / $4,500 / from $5,000 / $250 per month. Parity positioning, not undercutting. |
| **Static → Next migration** | All 16 legacy pages migrated. No page directories left in `public/` except `blog/` and `assets/`. One theme, one navbar, one footer, prices imported not copied. |
| **Entity consistency** | Exactly one `LocalBusiness` — `/web-design-melbourne/`. Every other page emits `Service` pointing at that `@id`. Was seven competing entities. |
| **NAP** | `content/site.js` synced to the live GBP: Reservoir VIC 3073, 7am–7pm seven days, service areas matching. |
| **Meta layer** | Every title ≤ 60 chars, every description ≤ 158. Separate `metaTitle` / `metaDescription` so SERP copy and on-page copy can differ. |
| **Schema** | Article + BreadcrumbList + FAQPage across blog; Service + Breadcrumb + FAQPage across landing pages. Named `Person` author (E-E-A-T). No `aggregateRating` — we have no reviews to declare. |
| **Broken links** | Fixed. `/squarespace-vs-custom-website/` now exists. |
| **Audit tooling** | `scripts/seo-audit.py` — checks find / index / rank / click across every page. Exits non-zero on errors. |

### Content position

**14 blog posts · 17 landing pages · ~72 URLs in the sitemap.**

Strong clusters:
- **Pricing** — website cost, tradie cost, NDIS cost, plus the pricing page
- **Comparison** — agencies, NDIS designers, WordPress, Wix, Squarespace
- **NDIS** — accessibility checklist, cost, SEO, designers. Four pieces, our
  best-developed vertical
- **Local** — five city pages, Melbourne strongest

### The three things still failing

1. **Three thin blog posts** — `small-business-website-checklist` (469w),
   `how-long-to-build-a-website` (492w), `signs-website-losing-customers`
   (574w). All under the 700-word error threshold.
2. **Zero Google reviews.** Unchanged since day one.
3. **Almost no referring domains.** Unchanged since day one.

---

## The honest diagnosis

We have spent this phase on **on-page** work — content, schema, speed,
structure, consistency. That work was necessary and it is now largely done.

But on-page is roughly a fifth of what decides rankings. Local weighting for
2026 breaks down about like this:

| Signal | Weight | Us |
|---|---|---|
| Google Business Profile | 32% | ⚠️ created, **verification pending** |
| On-page | 19% | ✅ strong |
| **Reviews** | **16%** | ❌ **zero** |
| **Links** | **15%** | ❌ **almost none** |
| Behavioural | 8% | ❌ nothing to click yet |
| Citations | 7% | ❌ not listed anywhere |

**We are strong on the 19% and weak on everything else.**

That is why more content is not the answer right now. A fifteenth blog post
competes against the same problem the fourteenth had: nobody links to us and
nobody has reviewed us, so Google has no reason to trust the domain.

---

## The plan, in priority order

### P1 — Trust (weeks 1–4) · nothing outranks this

**1. Finish GBP verification.** 32% of local weight sits behind it and the
profile does nothing until it clears. Everything else in local search waits on
this one step.

**2. Ask all four clients for reviews.** HS Race Gear · Mobile Armour ·
Autozenly · LT Finance. Reviews are 16% of weight and the slowest input to
move — every week not asking is a week lost. Phone or personal message, never
bulk email, never an incentive (Google policy and ACL both prohibit it).

**Target: 5 reviews by week 8, 15 by month 6.** Aussify ranks with very few, so
the bar is low. Reply to every one within 24 hours.

**3. Set up Clutch.** Free, and the review threshold to appear is low.

**4. Citations.** business.gov.au · True Local · Yellow Pages AU · Hotfrog ·
StartLocal · AussieWeb · Bing Places. NAP identical character-for-character with
`content/site.js`.

*Effort: a few hours plus four conversations. Impact: the largest available.*

### P2 — Links (weeks 4–16) · the real bottleneck

This is the hardest and most valuable work, and the reason to build tools.

**5. Ship one free tool.** Tools are the only asset that earns `.au` links
passively and forever. Agencies do not build them because they are hard —
which is exactly why they work as a moat, and why they prove the engineering
positioning better than any copy.

Build order:
- **Core Web Vitals / speed checker** — pairs with the speed argument we make
  everywhere, and gives a reason to link
- **AUD website cost calculator** — highest commercial intent
- **Accessibility checker** — feeds the NDIS cluster, most linkable of the three

Each: own URL, `SoftwareApplication` schema, no signup wall, shareable result
URLs, soft CTA at the bottom.

**6. Local link outreach.** Melbourne chambers of commerce, local sponsorship
(a junior sports club listing is a real `.au` link), Melbourne business
newsletters and podcasts.

**7. Client backlinks.** Ask the four clients for a footer credit. Four real
`.au`-adjacent links for four messages.

**8. Referral program.** Havealook pays $500 per conversion. It is the cheapest
link-and-lead channel that exists and we have nothing.

### P3 — Content (ongoing, but second to P2)

**9. Fix the three thin posts.** They are active errors dragging the domain —
Google assesses site quality as a whole. Expand to 1,500+ using
`tradie-website-cost` as the pattern.

**10. Add FAQ blocks to the four older posts** missing them. Free FAQPage
schema on content that already exists.

**11. Then, and only then, more P3 articles.** Best Website Designers in
Sydney · Shopify vs Custom Ecommerce · Ecommerce SEO Guide · Website Checklist
for Law Firms.

### P4 — Deferred deliberately

- **Industry verticals** (`docs/INDUSTRY-VERTICAL-PLAN.md`) — on hold. Correct
  strategy, wrong time. Revisit once reviews and links exist.
- **Google Ads** — not until 10+ reviews and a converting landing page. Until
  then that budget buys tools and content that keep working for years.
- **Sydney / Brisbane local push** — after Melbourne proves the model.

---

## Specific things worth focusing on

**Reviews are the single highest-leverage action available and cost nothing.**
Four conversations. It has been the top item since the first plan and is still
not done. Nothing else on this page moves the needle as much.

**Do not write more content until the thin posts are fixed.** Google's helpful
content assessment is site-wide. Three weak posts pull down eleven good ones.

**One tool beats five articles.** Articles need links to rank. Tools *earn*
links. If forced to choose between shipping the speed checker and shipping
cluster #2, ship the tool.

**Reviews with keywords in them are worth more.** When asking, prompt naturally
— "if it's useful, mention what we built for you." A review saying "built our
e-commerce site" carries more relevance than "great service."

**Keep the honesty positioning.** It is genuinely the differentiator in a
market where competitors claim 50–249 employees with two reviews. Naming our
own weaknesses — no NDIS clients, no reviews yet — is what makes the rest
credible. Do not let it slip as the site grows.

---

## How to measure

**Weekly:** GBP views, calls, direction requests · Map Pack position for
"web design melbourne" · review count.

**Monthly:** organic sessions from Victoria · new referring `.au` domains
(the real bottleneck) · quote-form submissions from organic · rankings for the
`docs/KEYWORD-MASTER-LIST.md` set.

**Gate at week 12.** If Map Pack for "web design melbourne" is not top 10 and
we do not have 5+ reviews, stop and diagnose before scaling to Sydney. The
cause will be prominence — links and reviews — not the pages.

---

## The next three sessions

**Session 1 — clear the errors.** Expand the three thin posts to 1,500+, add
FAQ blocks to the four older posts, run `scripts/seo-audit.py` to zero errors.

**Session 2 — build the speed checker.** PageSpeed Insights API, own URL,
`SoftwareApplication` schema, shareable results. The first real link asset.

**Session 3 — depends on review progress.** Reviews in → Melbourne local push
and citations. Reviews stalled → second tool, because links can progress
without them.

---

## Housekeeping still outstanding

- Four dead content files with zero importers: `content/home.js`,
  `services.js`, `industries.js`, `comparisons.js`. Verify with
  `grep -rl "@/content/home" app/ components/` then delete.
- Three US pages — Denver, Nashville, Phoenix — off-strategy with stale
  pricing. Decide: delete and 301 to `/pricing/`, or rewrite.
- Blog hero images still missing for the NDIS posts and
  `best-ndis-website-designers`.
- `scripts/generate-city-pages.py` and `generate-industry-pages.py` are now
  obsolete post-migration. Delete once you have confirmed nothing references
  them.
