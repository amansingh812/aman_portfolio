# Publishing Plan — week of 30 Aug 2026

One target keyword per day. Every keyword below is **Low competition** in the
Australian Keyword Planner data pulled 30 Aug — that is the only category this
domain can realistically reach right now.

**Rule for the week:** one page per day, shipped and in the sitemap. Do not
start day 3 before day 2 is live.

---

## Shipped today (Sat 30 Aug) ✅

### Post 1 — `/affordable-website-design-small-business/`

Targets **four** Low-competition keywords at 100–1k/mo each:

| Keyword | Vol | Comp |
|---|---|---|
| affordable web design for small business | 100–1k | Low |
| affordable website design for small business | 100–1k | Low |
| inexpensive website design for small business | 100–1k | Low |
| cheap small business website design | 100–1k | Low |

Includes the free homepage design offer, the agency-overhead breakdown table,
an honest "when cheap is a false economy" section, and 5 FAQs.
**Still needs:** a hero image (see §Images below).

### Post 2 — `/pricing/` reworked for "packages"

| Keyword | Vol | Comp |
|---|---|---|
| small business web design packages | 100–1k | Low |
| small business website design packages | 100–1k | Low |

- Title → `Small Business Website Design Packages | From $800`
- H2 → `Small business website design packages`
- Free homepage design panel added above the selector

**Six Low-competition keywords targeted today.**

---

## The week

### Sun 31 Aug — `website developers for small business`

**Type:** rework existing · `/hire-website-builder/`
**Vol:** 100–1k · Low
**Why rework not new:** the page already earns 37 impressions and 2 of the
site's 7 total clicks. It is our best-converting page. Do not build a competitor
to it — retitle around "website developers for small business", add an H2 with
the phrase, and work the term into the opening two paragraphs.
**Also captures:** `website design companies for small business`,
`best website designer for small business`

### Mon 1 Sep — `average cost of website design for small business`

**Type:** blog post · `/blog/average-cost-website-design-small-business/`
**Vol:** 10–100 · Low
**Why a blog post not a landing page:** informational intent. The commercial
version already exists at `/how-much-does-a-website-cost-australia/`, and a
second landing page would cannibalise it — the exact mistake that got 3 pages
flagged as duplicates in Search Console.
**Angle:** real AU market survey — agency, freelancer, builder, custom — with
the five-year total, not just the sticker price. Link up to the money page.

### Tue 2 Sep — `google page for my business`

**Type:** guide · `/guides/get-your-business-on-google/`
**Vol:** 100–1k · Low
**Also captures:** `google pages business` (100–1k), `get your website on
google` (10–100), `google business website` (10–100)
**Why it works:** upstream demand. These people need what we sell but have not
yet worked out they need a web designer. It also demonstrates the SEO capability
we charge for, which is more persuasive than claiming it.
**Angle:** GBP setup, why a real website still matters alongside it, how the two
reinforce each other. Genuinely useful even if they never hire us.

### Wed 3 Sep — `small business website redesign`

**Type:** landing page · `/small-business-website-redesign/`
**Vol:** 100–1k · Low
**Why it is separate from the affordable page:** different intent. These people
already *have* a site and know it is failing. That is a warmer lead than someone
starting from scratch.
**Angle:** when to redesign vs rebuild, what carries over (rankings, content,
domain), how we avoid losing existing SEO in a migration, fixed price.
**Strong internal link target:** `/blog/signs-website-losing-customers/`, which
already ranks at position 24.

### Thu 4 Sep — `web design quote` / `website design quote`

**Type:** landing page · `/website-design-quote/`
**Vol:** 10–100 each · Low
**Also captures:** `i need a website built for my business`,
`need someone to build a website`
**Why:** highest purchase intent on the entire list. Someone searching "web
design quote" is ready to buy today.
**Angle:** short page. What we need from you, what you get back, in what
timeframe. Published prices so the quote holds no surprises. Free homepage
design as the hook. Aim for conversion, not word count.

### Fri 5 Sep — `web design for small businesses` supporting post

**Type:** blog post · `/blog/what-small-business-website-actually-needs/`
**Vol:** 100–1k on the head term · Low
**Why a supporting post:** the head term is already covered by the affordable
page. This one builds the cluster around it rather than competing.
**Angle:** the five things that actually generate enquiries, and the things
agencies upsell that do not. Links up to the affordable page and to
`/small-business-website-checklist/`.

### Sat 6 Sep — review + next research round

No publishing. Instead:

1. Check Search Console — are the new pages indexed? Request indexing on any
   that are not.
2. Confirm every new page is in `public/sitemap.xml` and linked from the footer.
3. Run `npm run sitemap:images` if images have landed.
4. Run the next Keyword Planner round on the seeds listed below.

---

## Week total

| | |
|---|---|
| Pages shipped | 5 new + 2 reworked |
| Low-competition keywords targeted | **~16** |
| New landing pages | 3 |
| New blog posts | 2 |
| New guides | 1 |

---

## Cannibalisation guard — check before writing each one

`CLAUDE.md` §6 step 1. Three pages are already flagged as duplicates in Search
Console because this check was skipped. Before writing any page above:

1. Does an existing page already target this keyword? If yes → **rework it**,
   do not create a second page.
2. Is the intent informational or commercial? Informational → blog or guide.
   Commercial → landing page. Never both for the same term.
3. Add 3+ in-content internal links out, plus a footer link, plus the sitemap
   entry.

Specific pairs to keep apart this week:

- `/affordable-website-design-small-business/` (commercial) vs
  `/blog/average-cost-website-design-small-business/` (informational) — the
  blog post must not carry a price table as its main content.
- `/small-business-website-redesign/` (has a site) vs
  `/affordable-website-design-small-business/` (needs a site) — keep the
  redesign framing explicit throughout.

---

## Images still needed

Neither page shipped today has a hero, and both will look thin without one.
Add to `docs/IMAGE-SPEC-AUG-2026.md` Batch C, same house style:

| File | Prompt core | Alt |
|---|---|---|
| `affordable-website-design-small-business.webp` | Price tag beside a clean small-business website on a laptop, Australian coins in a small stack, open and honest feel — no clutter | `Affordable small business website design with published AUD pricing` |
| `small-business-website-redesign.webp` | Split composition — dated cluttered website left, clean modern layout right, curved arrow between them | `Small business website redesign from a dated layout to a modern build` |
| `website-design-quote.webp` | A written quote document beside a laptop showing a website, clock icon indicating one business day turnaround | `Fixed website design quote delivered within one business day` |

---

## Next research round — Sat 6 Sep

Same method that worked: seed 4 buyer-intent phrases → filter **Competition =
Low** → sort by volume descending → take the top page.

Seeds to run:

- `ecommerce website` — `/ecommerce-development/` sits at position 11, our
  best-ranking page. Worth finding what else that cluster holds.
- `booking system website` / `appointment website` — service-business demand,
  and we build these.
- `website maintenance` — the retainer is the recurring-revenue play and we have
  no page targeting it.
- `wordpress to nextjs migration` — migration intent, high value, likely Low
  competition.

---

## The honest footnote

Backlinks are parked by agreement, and that is a reasonable sequencing call —
these pages need to exist before links to them mean anything. But be clear-eyed
about what this week produces: **correctly targeted pages that will not rank
until referring domains exist.** Search Console currently shows 0.

The work is right. The results arrive when the link phase starts.
