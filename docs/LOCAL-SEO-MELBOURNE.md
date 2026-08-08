# Local SEO — Melbourne

Written Aug 2026. Supersedes the industry-vertical plan as the active priority
(`docs/INDUSTRY-VERTICAL-PLAN.md` is on hold). Read with `CLAUDE.md` §1 and §4.

**Decisions taken:** brother is in **Melbourne** · **Melbourne only** until the
model is proven · **GBP verification is possible**. All three are the best-case
answers — the Melbourne Map Pack is genuinely winnable.

---

## First, the framing

You said the focus is Google rather than people. Worth separating two readings,
because one is right and one gets sites demoted.

**Right:** put effort into Google visibility rather than social posting and
outreach. For a studio selling to businesses actively searching "web design
melbourne", that is correct — 46% of all Google searches now carry local
intent, and those people are mid-purchase. Agreed, and this plan does that.

**Risky:** write pages for the algorithm rather than for a reader. Google's
helpful-content system explicitly targets content that exists to rank rather
than to help, and Havealook's 20 years of authority means we lose a
thin-content fight. Our advantage is that we can write pages an actual
Melbourne business owner finds useful — which the algorithm then rewards.

So: **target Google's ranking factors deliberately, but satisfy the reader
while doing it.** Those are not in conflict, and the second is how the first
keeps working.

---

## Where the weight actually sits

Local ranking weight, 2026:

| Signal group | Weight | Where we stand |
|---|---|---|
| **Google Business Profile** | **32%** | ❌ Does not exist |
| On-page | 19% | 🟡 Melbourne page exists, thin, weak schema |
| **Reviews** | **16%** | ❌ Zero |
| Links | 15% | 🟡 Very few `.au` referring domains |
| Behavioural (clicks, calls) | 8% | ❌ Nothing to click yet |
| Citations | 7% | ❌ Not listed anywhere |

**GBP plus reviews is 48% of the total and we score zero on both.** That is the
whole plan in one line. Everything else is secondary until those two move.

The Map Pack ranks on **Relevance · Distance · Prominence**. Distance we now
have (Melbourne). Relevance comes from categories and on-page. Prominence comes
from reviews, citations and links.

---

## What is already broken

Found in the codebase audit:

1. **No address anywhere.** No `streetAddress`, no `addressLocality`, no geo
   coordinates in any page or schema block. There is no local entity for Google
   to recognise.
2. **Melbourne has weaker schema than other cities.** Perth, Sydney and Adelaide
   emit `LocalBusiness`; Melbourne emits `ProfessionalService` with no geo. Our
   most important city has our worst markup.
3. **Each city page hand-rolls its own JSON-LD**, so they have drifted apart.
   Google builds one entity from these; inconsistent copies split it.

**Already fixed in this pass:**
- `content/site.js` now has a single `NAP` block — the one source of truth for
  name, address, phone, service areas, categories and hours.
- `lib/local-schema.js` provides shared `localBusinessSchema()`,
  `localServiceSchema()` and `breadcrumbSchema()` builders so every page emits
  the same entity with the same `@id`.
- A `NAP_READY` guard means schema **will not render at all** until the real
  address is filled in — deliberately. Half-built NAP teaches Google a wrong
  entity that is painful to correct.

**⚠️ Blocking:** three fields in `NAP` are empty and must be the brother's real
Melbourne address. Do not invent one to make validation pass — a fabricated
address poisons every citation built on top of it, and per `CLAUDE.md` §1 the
NAP must be real and identical everywhere.

---

## The plan

### Phase 1 — weeks 1–2 · Get on the map

**1. Google Business Profile.** The single highest-leverage action available.

- Register as a **service-area business**, address verified but hidden
- Primary category: **Website designer** (exactly one primary — this drives
  which searches you're eligible for more than any other setting)
- Secondary: Software company · Internet marketing service · Web hosting company
- Service areas: the suburb list in `NAP.serviceAreas`
- Complete **every** field — hours, description, services, attributes. A
  complete profile signals trust faster than any other single factor
- 10+ real photos: workspace, the team, screenshots of shipped sites
- Add all six services with AUD prices, matching `/pricing/` exactly

**2. Fill in the real NAP** in `content/site.js`, then the schema starts rendering.

**3. Reviews — start immediately, do not wait.** Four real clients:
HS Race Gear · Mobile Armour · Autozenly · LT Finance.

Reviews are 16% of ranking weight and the slowest input to move, so it starts
in week 1 and never stops. Ask by phone or a personal message, not a bulk
email. Send the direct `gbpReviewUrl` short link. Never offer anything in
exchange — that violates Google's policy and ACL.

**Target: 5 reviews by week 8, 15 by month 6.** Aussify ranks with very few, so
the bar is low. Reply to every single one within 24 hours; response rate is
itself a signal.

### Phase 2 — weeks 2–4 · Fix the foundations

**4. Rebuild `/web-design-melbourne/` properly.** It is currently thin and
carries our weakest schema. It needs to be the best page on the internet for
"web design melbourne", not a template with the city name swapped in:

- Melbourne-specific opening — the market, not generic web-design copy
- AUD pricing stated plainly, linked to `/pricing/`
- Suburb coverage that reads naturally, not a keyword list
- Melbourne FAQs with `FAQPage` schema
- `LocalBusiness` + `Service` + `BreadcrumbList` via `lib/local-schema.js`
- Real proof — the four live client sites
- Click-to-call above the fold on mobile

**5. Citations — NAP identical everywhere.** In priority order:
`business.gov.au` · True Local · Yellow Pages AU · Hotfrog · StartLocal ·
AussieWeb · Local Search · Clutch · Bing Places · Apple Business Connect.

Character-for-character identical. "Suite 2, 14 Smith St" and
"Suite 2/14 Smith Street" are two different businesses to Google.

**6. Weekly GBP Posts.** Underused by every competitor. A short post each week —
a project shipped, a tip, an offer. Keeps the profile active, which correlates
with pack position.

### Phase 3 — weeks 4–12 · Prominence

**7. Local links.** The real bottleneck and the hardest part.

- Melbourne business associations and chambers of commerce
- Local sponsorship — a junior sports club listing is a real `.au` link
- Melbourne business podcasts and newsletters
- The free tools from `CLAUDE.md` Wave 2 — a Core Web Vitals checker earns
  links passively and forever, which no amount of outreach matches
- Client backlinks: ask the four clients for a footer credit

**8. Two supporting Melbourne pages**, only once the main page is strong:
- `/web-design-melbourne-cbd/` — if genuine search volume exists
- A Melbourne case study using a real client

**No suburb-page matrix.** Twenty Melbourne suburb pages is the scaled-content
pattern Google targets, and a site-wide demotion would take the pages that
already rank with it. Suburbs belong inside one strong page.

---

## Beating the competition

| | Havealook | Aussify | **Us** |
|---|---|---|---|
| Reviews | ~300 @ 4.8★ | few | 0 → build to 15 |
| Domain age | 20 yrs | ~7 yrs | new |
| Melbourne GBP | yes | Sydney-based | **coming** |
| Stack | static HTML | WordPress | **Next.js** |
| Code ownership | ❌ | partial | **✅** |
| Free tools | ❌ | ❌ | **planned** |

**We will not out-review Havealook.** 300 reviews at four a month is six years.
That is not the fight.

**Three things we can win instead:**

1. **Speed.** Their sites are slow and ours are not. Page experience is a
   ranking factor and CWV is measurable — publish the comparison honestly.
2. **Tools.** Neither competitor has any. Tools earn the `.au` links that
   prominence depends on, and agencies don't build them because they're hard.
3. **Ownership.** Havealook clients cannot leave — their CMS, their hosting,
   never disclosed. A `/do-you-own-your-website/` page targets
   `havealook alternative` and lands on their weakest point.

**Where they beat us:** review volume, domain age, backlinks. Reviews are the
only one we control directly, which is why it starts in week 1.

---

## Measuring it

Weekly: GBP views, searches, calls, direction requests · Map Pack position for
"web design melbourne" · review count and average.

Monthly: organic sessions from Victoria · rankings for the Melbourne keyword
set · new referring `.au` domains · enquiries attributed to local search.

**Gate at week 12.** If Map Pack position for "web design melbourne" has not
entered the top 10 and we have 5+ reviews, diagnose before scaling to Sydney.
The likely cause is prominence — links and reviews — not the page.

---

## First 30 days

| Week | Do |
|---|---|
| 1 | Create GBP, start verification. Fill real NAP in `content/site.js`. Ask all four clients for reviews. |
| 2 | Complete every GBP field, upload 10+ photos, add services with prices. First GBP post. |
| 3 | Rebuild `/web-design-melbourne/` with proper schema and real Melbourne content. |
| 4 | Top 10 citations with identical NAP. Second and third GBP posts. Chase reviews. |

**The one thing that matters most:** get the GBP verified and get the first
three reviews in. Nothing else on this page moves until those do.

---

## Open questions

1. What is the brother's real Melbourne address? Blocks NAP, schema and GBP.
2. Can we use a suburb-level address, or is it a residential address he'd
   rather not verify? SAB hides it publicly, but Google still needs it.
3. Which tool ships first — Core Web Vitals checker or cost calculator? The
   speed checker suits the Melbourne speed-advantage angle better.

---

*Sources: local ranking-factor weightings and Map Pack criteria from the 2026
industry surveys listed in the chat response. Competitor figures from
`docs/COMPETITOR-DEEP-DIVE-AUG-2026.md`, self-reported and unverified.*
