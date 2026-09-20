# GBP + directories + content priority — your worklist

Written 21 Sep 2026. Everything you need to fill in is here so you never have to
guess a value. **Copy the strings exactly** — see the NAP rule at the bottom.

---

# PART 1 — Google Business Profile

## You are further along than you think

The profile already exists. `content/site.js` records it as **synced on
2026-08-08**, registered as a **Service-Area Business** with the address hidden.
What is outstanding is **verification** — the `gbpUrl` and `gbpReviewUrl` fields
are still empty, which is how I know it never completed.

So this is not a setup job. It is a finish-the-verification job.

## Working from home is normal here — do not invent an office

A Service-Area Business (SAB) is Google's official category for exactly your
situation: you serve customers at their location, you have no premises the public
visits. Plumbers, electricians, mobile mechanics and home-based consultants all
use it. Google holds your real address for verification only and **never displays
it**.

Do not be tempted to put in a coworking address or a mailbox. That is what
Aussify (Bankstown mailbox) and Dev Story (Pitt Street mailbox) do, and it is a
suspension risk as well as the thing we say makes them less trustworthy than us.

## Field-by-field — copy these exactly

| GBP field | Enter exactly | Why |
|---|---|---|
| Business name | `Build First Site` | Not "BuildFirstSite", not "Pty Ltd". Must match the site. |
| Business category (primary) | `Website designer` | Already chosen. Strongest single relevance signal and you only get one. |
| Additional categories | `Software company`, `Internet marketing service`, `Web hosting company` | |
| Do you have a storefront? | **No** | This is what makes it an SAB. |
| Address | Your real home address | Used for verification only, hidden publicly. |
| Show address to customers? | **No / hidden** | |
| Service areas | `Melbourne`, `Preston`, `Richmond`, `Brunswick`, `Reservoir` | Must stay identical to `NAP.serviceAreas` in `content/site.js`. |
| Phone | `0413 146 498` | Local format on GBP. The site dials `+61413146498`. |
| Website | `https://buildfirstsite.com/` | With the trailing slash. |
| Hours | Mon–Sun, `07:00`–`19:00` | Matches what the site publishes. |
| Description (750 chars) | See below | |

### Business description — paste this

> Build First Site designs and builds websites, web applications and mobile apps
> for Australian small businesses. Fixed prices published in AUD from $800, so
> you know the number before you get in touch. Every site is custom built on a
> modern Next.js stack, optimised for speed and search from the first line of
> code, and handed over with full code ownership — the repository, hosting and
> domain are in your name on launch day, with no proprietary CMS and no monthly
> platform fee. We work with trades, clinics, hospitality, real estate,
> professional services and e-commerce across Melbourne and Australia. You deal
> directly with the engineer who writes your code rather than an account
> manager, and we will design your homepage free before you commit to anything.

That is 718 characters, inside the 750 limit. It states the outcome before the
technology, carries no headcount claim, and every fact in it is true.

## Verification — what to expect

Video verification is now the usual route for service-area businesses, and
**Google explicitly allows you to record at your home address**. Current
requirements:

- **Recorded live in the GBP app on a phone.** Pre-recorded uploads are rejected.
- **At least 30 seconds, unedited, one continuous take** — no cuts or pauses.
- Show, in one shot: the street or a nearby landmark that matches the address,
  then move inside to your working setup — desk, computer, the equipment you
  actually work on.
- Then show **proof it is a real business**: sign into something branded on
  screen. For you that is the strongest evidence available — open your laptop and
  show the buildfirstsite.com admin, the GSC property, an invoice, or client
  work in progress. A tradie would show a branded van; your equivalent is showing
  you genuinely operate the business from that desk.
- Review takes **up to five business days**.

**One take, unedited** is the rule people fail on most. Plan the walk before you
press record.

## After it is verified — two minutes of work for me

Send me the two URLs and I will wire them in:

1. **Profile URL** → fills `NAP.gbpUrl`
2. **Review short link** (GBP dashboard → *Ask for reviews*) → fills
   `NAP.gbpReviewUrl`

Those two fields currently gate schema output. Once they are in, the
`ProfessionalService` schema can reference the real profile, and the review link
goes into the client email so people can leave a review in one tap instead of
hunting for the listing.

---

# PART 2 — Australian directories

## Read this before you start — what these are actually worth

Most directory links are **`nofollow`**, which means they do not pass ranking
signal the way a real editorial link does. Anyone selling you "500 directory
backlinks" is selling you nothing.

They are still worth an afternoon, for two honest reasons:

1. **Citations.** Consistent name/address/phone across the AU web is a genuine
   local-search ranking factor. Google cross-references these to confirm a
   business is real. This matters more for us than for most, because we currently
   have almost nothing confirming we exist.
2. **A few send real traffic and a few are followed.** Clutch and the larger AU
   directories do get used by buyers.

Set expectations accordingly: this is a **trust** exercise, not a links exercise.
The links come from the tools and the clients.

## The list — free tiers, highest value first

| # | Directory | Notes |
|---|---|---|
| 1 | **Google Business Profile** | In progress. Everything else is worth less until this is verified. |
| 2 | **Bing Places for Business** | Free. Can import directly from GBP once verified — do it after, it takes two minutes. |
| 3 | **Apple Business Connect** | Free. Feeds Apple Maps and Siri. Almost nobody bothers, which is the point. |
| 4 | **Clutch** (clutch.co) | Free profile. **The single most valuable one on this list** — Aussify ranks partly on two Clutch reviews. Send your four clients here first. |
| 5 | **Yellow Pages Australia** | Free basic listing. They will push a paid upgrade; decline it. |
| 6 | **True Local** | Free. Long-standing AU consumer directory. |
| 7 | **Hotfrog Australia** | Free, quick. |
| 8 | **StartLocal** | Free AU listing. |
| 9 | **Localsearch** | Free basic tier. |
| 10 | **AussieWeb** | Free, old but still indexed. |
| 11 | **dLook** | Free. |
| 12 | **Word of Mouth** (wordofmouth.com.au) | Free, review-led — useful once you have reviews. |
| 13 | **LinkedIn Company Page** | Free, followed link, and it is the one profile buyers actually check. |
| 14 | **GoodFirms / DesignRush / Sortlist** | B2B agency directories. Free tiers exist; some will chase you to pay. Free only. |

**I have not re-verified each of these is still live and still free this week.**
Directory sites change hands and go paid. If one asks for a credit card, skip it
— none of them is worth paying for at this stage.

## How to do it — the method that makes it work

The value is entirely in **consistency**, so do it mechanically:

1. Open `content/site.js` and keep the `NAP` block on screen.
2. For every listing, copy **character for character**:
   - Name: `Build First Site`
   - Phone: `0413 146 498`
   - Website: `https://buildfirstsite.com/`
   - Suburb/State/Postcode: `Reservoir`, `VIC`, `3073`
   - Category: `Website designer`
3. **Address:** hide it wherever the directory allows a service-area option. If a
   directory *forces* a street address, **skip that directory.** Do not invent
   one. An inconsistent or fake address does more damage than the listing is
   worth.
4. Description: reuse the GBP description above, or the first two sentences of it
   where the field is short.
5. Keep a note of the email and password you used for each — you will need to
   update them all if anything ever changes.

Budget about two hours for the lot. Do numbers 1–5 and stop if you run out of
patience; the rest are marginal.

---

# PART 3 — Which pages need more content, in priority order

Ranked by **how close to page one they already are**, not by impressions. That
distinction is the whole point — moving a page from 21 to page one means passing
twenty results; from 90 it means passing eighty.

| Priority | Page | Best position | Why it is here |
|---|---|---|---|
| ~~1~~ | `/hire-website-builder/` | **21.0** | **Done today** — 704 → 1,687 words, retitled around "hire". Leave it to settle. |
| **2** | `/webflow-vs-custom-website/` | **16.0** | Ranks 16th for *custom webflow website design* and 22nd for *custom webflow website* — but our page argues **against** Webflow. Those searchers want someone to **build** them one. Needs a decision before more words: serve that intent or stop chasing it. |
| **3** | `/blog/website-cost-australia/` | **60.7** | Just retitled and canonicalled to stop it fighting the landing page. Give it its own angle — what actually changed in 2026 — rather than repeating the cost guide. |
| **4** | `/web-design-adelaide/` | **78.5** | Best-performing city page and the template for the other five. Worth deepening once, then copying the pattern. |
| **5** | `/small-business-website-checklist/` | **85.7** | 22 impressions and a clear single intent. Checklists earn links more easily than essays — this is the cheapest link-bait we already own. |
| **6** | `/how-much-does-a-website-cost-australia/` | 89.7 | 1,481 words against a 4,047-word competitor. Gaps identified: cost by city (six city pages to link), cost by who builds it, additional costs, "why trust these numbers". Big job, slow payoff. |
| **7** | `/services/mobile-app-development/` | 95.0 | **264 words**, ranks for exactly one query. Needs rebuilding around MVP scope, not expanding. |

**Do them one at a time and leave two weeks between.** If we change six pages at
once and rankings move, we learn nothing about which change did it.

---

# The one rule underneath all of this

**Name, phone, website and suburb must be character-for-character identical
everywhere** — GBP, every directory, the website, Clutch, your email signature.

`Suite 2, 14 Smith St` and `Suite 2/14 Smith Street` are two different businesses
to Google's entity matching. The whole point of citations is that they agree with
each other. One careless variation undoes the afternoon.

`content/site.js` → `NAP` is the source of truth. If you ever change a value
there, change it everywhere else the same day, and tell me so the schema follows.
