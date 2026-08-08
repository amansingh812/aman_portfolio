# P2 — Industry Verticals: The Plan

Written Aug 2026. Read with `CLAUDE.md` §4 (sequencing) and §1 (honesty constraints).

---

## Verdict on the plan as proposed

**The strategy is right. The shape is wrong in three ways.**

Owning verticals beats chasing generic keywords — that part is correct and it is
the single biggest organic opportunity we have. But as written, the plan is
10 industries × (1 landing + 1 demo + 1 case study + 5–10 posts) = **130+ assets**.

Three problems with that:

1. **It is roughly two years of work for a two-person studio.** At a genuinely
   sustainable two quality pieces a week, 130 assets is ~65 weeks of doing
   nothing else. No client work, no tools, no case studies for real clients.
2. **We cannot write case studies for 8 of the 10.** §1 is explicit: no claimed
   expertise in a vertical we have no proof in. We have four real clients —
   HS Race Gear, Mobile Armour, Autozenly, LT Finance. That covers retail /
   e-commerce and AI SaaS. It covers nothing in NDIS, medical, dental,
   accounting, law, real estate, construction or hospitality.
3. **Volume without authority does not rank.** We have ~56 indexed URLs, zero
   Google reviews and very few referring domains. A perfect NDIS page published
   tomorrow competes against Aussify's thin page *and loses*, because they have
   domain authority and we do not. The bottleneck is links and trust, not pages.

**The fix is not to abandon it. It is to run four industries properly instead
of ten badly, and to run the authority work in parallel rather than after.**

---

## Before anything else: we already have a cannibalisation problem

Of the ten proposed industries, **most already have a page** — and three have
**two pages each competing for the same term**:

| Industry | Existing page 1 | Existing page 2 | Status |
|---|---|---|---|
| Real Estate | `/industries/real-estate/` | `/real-estate-website-design/` | ⚠️ **Two pages, one keyword** |
| Construction | `/industries/construction-trades/` | `/tradie-website-design/` | ⚠️ **Two pages, one keyword** |
| Hospitality | `/industries/hospitality/` | `/restaurant-website-design/` | ⚠️ **Two pages, one keyword** |
| Medical | `/industries/healthcare/` | — | Thin, needs depth |
| Accounting | `/industries/finance-legal/` | — | Two industries jammed into one page |
| Law | `/industries/finance-legal/` | — | Same page as accounting |
| Retail / E-comm | `/industries/retail-ecommerce/` | — | Thin |
| AI Startups | `/industries/startups-saas/` | — | Thin |
| **NDIS** | — | — | **Genuinely open** |
| **Dental** | — | — | **Genuinely open** |

Adding "one commercial landing page" per industry on top of this makes it worse,
not better. Google picks one page per query; two of ours competing means both
rank lower than one strong page would.

**Do this first (a week of work, no new content):**

1. For each of the three doubled-up pairs, pick the winner — whichever already
   has impressions in Search Console — and **301 the loser into it**, merging
   the useful content across.
2. Split `finance-legal` into `/industries/accounting/` and `/industries/legal/`.
   They are different buyers with different objections and should never have
   shared a page.
3. Re-run internal links and the sitemap.

This is the highest-return work on this list and it produces zero new pages.

---

## Tiering the ten

Scored on three things: **can we prove it** (real client or legitimate
capability), **is the money good**, and **is the competition weak**.

### Tier 1 — build these four first

| Industry | Why it wins |
|---|---|
| **NDIS** | The strongest opportunity we have. WCAG 2.1 AA is a **legal requirement** for NDIS providers, most agencies cannot deliver it, and we genuinely can. That is a real, defensible, honest differentiator — not a claim. Aussify ranks here with a thin page. No existing page of ours to cannibalise. |
| **Medical** (incl. dental) | High ticket, high trust, real technical needs — booking, privacy, AHPRA advertising rules. Existing `healthcare` page to deepen rather than start cold. Dental runs as a supporting page inside this cluster, not a separate cluster. |
| **Retail / E-commerce** | **The only vertical where we can publish a real case study today.** HS Race Gear and Mobile Armour are live, ours, and inspectable. Proof beats copy. |
| **AI Startups** | Autozenly is a real client, and this vertical reinforces the "modern software studio" positioning better than any other. Small AU market, so treat it as positioning work rather than a lead engine. |

### Tier 2 — only after Tier 1 clears its gate

Accounting · Law · Real Estate — decent money, crowded, and we have no proof in
any of them. Landing page only until a real client arrives.

### Tier 3 — deepen what exists, do not rebuild

Construction / trades · Hospitality — lower ticket, and Havealook owns tradies
with 20 years of authority. The existing pages stay and get improved. We are not
winning a head-on fight here and should not spend a cluster on it.

---

## What each industry actually gets

Not 13 assets. **Six**, and the sixth is optional.

| Asset | Notes |
|---|---|
| **1 hub / commercial landing page** | The money page. Targets `[industry] website design australia`. |
| **3 supporting articles** | Long-tail, genuine buyer questions. Not 5–10 — three good ones outrank eight thin ones and take a third of the time. |
| **1 proof asset** | A **real case study** if we have a client, otherwise **one labelled concept build**. Never both, never a fake case study. |
| **Internal linking pass** | Hub ↔ articles ↔ proof ↔ pricing ↔ contact. No orphans. |
| **Schema** | `Service` + `FAQPage` + `BreadcrumbList` on the hub, `Article` on posts. |
| *(optional)* **1 free tool** | Only where a genuinely industry-specific one exists — e.g. an NDIS accessibility checker. This is the backlink engine. |

**Four industries × six assets = 24 assets.** That is a realistic six months
alongside client work, and it lands us near the ~60–70 ranking pages target in
`CLAUDE.md` rather than 100+ that do not.

### On the demo websites

Ten complete demo sites is weeks of engineering with no revenue attached. Build
**one demo per Tier 1 industry only — four total — off a shared component base.**
Templated, each is days rather than weeks. Every demo then does four jobs:
proof on the landing page, screenshots for the article set, a portfolio entry,
and something to open a sales call with.

Per §1: they ship on `vercel.app`, **clearly labelled concept builds**, never
presented as client work.

---

## The cluster template

Every industry hub page contains, in this order:

1. **The industry's actual problem**, in their language — not "you need a modern website"
2. **What we build for them specifically** — the booking system, the compliance thing, the integration
3. **Proof** — case study or labelled demo, with screenshots
4. **AUD pricing**, stated plainly, linked to `/pricing/`
5. **Industry-specific objections** as FAQs (with `FAQPage` schema)
6. **Dual CTA** — get a quote + book a call
7. **≥3 internal links out**, plus footer and sitemap entries

Supporting articles target buying-intent long-tails only. Per `CLAUDE.md` §4:
never "What is SEO?" — always something a person close to hiring would search.

**NDIS worked example:**

- Hub: `/industries/ndis/` → *NDIS Website Design Australia*
- Article 1: *NDIS website accessibility requirements (WCAG 2.1 AA explained)*
- Article 2: *What NDIS participants actually look for on a provider website*
- Article 3: *NDIS provider website costs in Australia*
- Proof: labelled concept build for a fictional NDIS provider
- Optional tool: accessibility checker — the single most linkable asset here

---

## Sequencing, with a gate

**Do not build all four at once.** Build one, measure, then decide.

### Phase 0 — weeks 1–2 · Fix what exists
Merge the three duplicate pairs. Split finance-legal. Re-link, re-sitemap.
*No new pages.*

### Phase 1 — weeks 3–8 · NDIS, complete
Hub + 3 articles + labelled demo + schema + links. Ship the whole cluster,
not pieces of it.

### Phase 2 — weeks 9–16 · **GATE, then Retail + Medical**

Wait 8–10 weeks after the NDIS cluster is indexed and ask:

- Did it produce **at least one qualified enquiry**?
- Is the hub on **page 2 or better** for its primary term?
- Did it earn **any referring domain**?

**Two of three yes → build Retail and Medical.**
**Fewer → stop and diagnose.** The likely answer is authority, not content
quality — in which case the fix is links and reviews, and building nine more
clusters would have wasted six months.

This gate is the most important line in this document. It is what stops us
discovering after 130 assets that the model did not work.

### Phase 3 — months 5–7 · AI Startups + Tier 2 landing pages
Only if Phase 2 cleared.

---

## What has to run in parallel, or none of this ranks

Industry pages compete on topical authority **and** domain authority. We have
almost none of the second. Running these at the same time is not optional:

1. **Reviews from the four real clients.** Still the single biggest blocker in
   the whole plan. Aussify ranks with 2 Clutch reviews — the bar is low and we
   are at zero.
2. **Google Business Profile + Clutch.**
3. **The free tools** (`CLAUDE.md` §4 Wave 2 — cost calculator, speed checker).
   Tools are the only asset that reliably earns `.au` backlinks. Without links,
   even a perfect NDIS page sits on page 4.

If we have to choose between shipping industry cluster #2 and shipping the
speed checker, **ship the tool.**

---

## Guardrails

- **No industry × city matrix.** 10 industries × 7 cities = 70 near-duplicate
  pages, which is exactly the pattern Google's scaled-content systems target.
  A site-wide demotion would take the pages that already rank with it.
  Industry pages are national. City pages stay separate and few.
- **No fabricated case studies.** ACL treats invented testimonials as
  misleading conduct. Concept build or nothing.
- **No claimed vertical expertise we cannot evidence.** A page may describe
  capability and approach. It may not imply clients we do not have.
- **Ship complete clusters.** A hub with no supporting articles and no proof is
  a thin page, and thin pages drag the domain down rather than lifting it.

---

## Measuring it

Per cluster, at 10 weeks:

- Impressions and average position for the hub's primary term
- Qualified enquiries attributed to the cluster
- New referring domains earned
- Assisted conversions from supporting articles

Site-wide: organic sessions MoM · **new referring domains** (the real
bottleneck) · quote submissions from organic · reviews collected.

---

## The first 30 days, concretely

| Week | Do |
|---|---|
| 1 | Search Console audit of the three duplicate pairs; pick winners; write redirects |
| 2 | Ship redirects, split finance-legal into accounting + legal, re-link, re-sitemap |
| 3 | NDIS keyword research and validation; confirm real search volume before committing |
| 4 | Write and ship the NDIS hub page |

**In parallel across all four weeks:** ask all four clients for reviews. That
work gates everything else and costs nothing but four conversations.

---

## Open questions

1. Does `ndis website design` have enough AU search volume to justify going
   first? Validate in week 3 before writing — the WCAG angle is strong enough
   that it may be worth doing regardless, but decide with data.
2. Do we have permission and measured before/after numbers from HS Race Gear
   and Mobile Armour for the retail case study?
3. Is the NDIS accessibility checker the right first tool, or does the cost
   calculator serve more of the funnel?
