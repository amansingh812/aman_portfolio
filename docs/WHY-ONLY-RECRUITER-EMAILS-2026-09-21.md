# Why the only inbound is freelancer email — 21 Sep 2026

Question: *"again we are getting mails for hiring. What does it tell? If SEO is
working why are real users not getting leads?"*

---

## 1. The two channels are unrelated, and mixing them up is the trap

They feel like one signal — "people are contacting us" — but they run on
completely different mechanics.

| | Freelancer cold email | Client enquiry |
|---|---|---|
| How they find you | Scrape a list, or search once for hiring pages | Search a buying query and click a result |
| What you must have | A reachable email address | A ranking good enough to be clicked |
| What it costs them | Near zero, sent in bulk | Their time and attention |
| Your position | **Irrelevant** | **Decides everything** |

A freelancer never had to rank you to reach you. They need `contact@` and a
reason to think you hire. That is it.

**So the recruiter mail is not evidence SEO is working. It is evidence your
email address is findable — which it was always going to be.**

## 2. The client side has a number, and it is brutal

From the 28-day analysis of our strongest page (`docs/COST-PAGE-DEEP-DIVE-2026-09-18.md`):

- 436 impressions
- **0 clicks**
- **Average position 90.2**

Position 90 is page nine. Nobody goes there.

So the honest version of your question is not *"why aren't visitors
converting?"* — it is **"why aren't there visitors?"** You cannot convert
traffic that never arrives. The conversion work (phone CTA, GA4 events, the
five-year cost argument) is all real and all necessary; it just has almost
nothing to act on yet.

**Nothing has gone wrong that was not already known.** Both facts —
freelancers can email us, buyers cannot find us — are exactly what you would
predict from position 90 and zero referring domains.

---

## 3. What this prompted me to check — and what I found

The email says *"I found your contractor page"*. `/join/` was deleted and
301'd in August, so I went looking for what else could be saying that.

### Nine Agon template demo routes were still live in production

`/page-about-1/` · `/page-service-1/` · `/page-contact/` · `/page-faqs-1/` ·
`/page-pricing-1/` · `/page-terms/` · `/blog-1/` · `/blog-2/` · `/blog-single/`

Not in any sitemap, not in the nav — which is why nobody noticed — and fully
reachable, which is why that made no difference. A task closed as "strip unused
Agon demo pages" during the rebuild had missed all nine.

`/page-about-1/` was serving, on the live commercial domain:

- **a "Join Our Team" button** — the likeliest current source of the freelancer
  outreach, since `/join/` itself is gone
- **"+count Years in Business", "Countries / Offices", "Constant Clients"** —
  counters implying an office network and thousands of clients
- **40 stock-photo staff profiles**, all captioned "Theresa Webb, Marketing CEO"
- **testimonials attributed to Louis Vuitton, Nintendo, Starbucks and
  Bank of America**
- lorem ipsum body copy

The fabricated testimonials and client names are the serious part. `CLAUDE.md`
§1 prohibits them precisely because Australian Consumer Law treats invented
testimonials as misleading conduct, and arriving with a purchased template is
not a defence.

### Worse: `/guides/` was a placeholder, and it is in the footer of every page

`app/guides/page.js` was a single line — `export { default } from "../blog-1/page"` —
a re-export of the demo blog grid, left as a "temporary shell" during the
rebuild and never replaced.

So every visitor who clicked **Guides** in the footer, from any page on the
site, landed on: the heading "Our Blog", nine identical placeholder cards
("How To Blow Through Capital At An Incredible Rate"), lorem ipsum, and a
fictional author dated **August 25, 2022**.

Meanwhile the five real guides sat at `/guides/<slug>/`, reachable only from
inline links elsewhere. The hub that was meant to list them listed none of them.

**This one does bear directly on your question.** The scarce traffic we do get
includes people clicking a footer link and hitting placeholder text with a
four-year-old date. That is a page that loses a sale on sight, and it was doing
it sitewide.

---

## 4. Fixed in this pass

- Deleted all nine demo routes; **301'd** each to its real equivalent (Google had
  already crawled at least `/page-terms`, so redirect beats 404)
- Rebuilt `/guides/` as a real hub listing all five guides, with `ItemList`
  schema, reading times, and no invented author or date
- Deleted the orphaned components carrying the fabricated names
  (`slider/Team.js`, `slider/Testimonial.js`, `layout/RightSidebar.js`,
  `slider/Blog.js`)
- Swept every remaining route: **zero** placeholder markers left
- Recorded the incident in `CLAUDE.md` §1 with the two rules that prevent a
  repeat: *a route absent from the sitemap is still public*, and *never ship a
  template shell on a live route*

Routes went from 53 to 44. Every one is now real content.

---

## 5. So — should the freelancer email worry you?

No, and it is not worth more of your attention than this.

It is the background noise of having a public address on a site that mentions
React and Next.js. Deleting `/join/` and now the demo pages removes the specific
hooks; the rest is generic spam that every dev shop receives. Do not reply, do
not open the links.

**The thing to act on is not the mail you are getting. It is the mail you are
not.** That comes down to position 90 and zero referring domains, and the plan
for it is already written in `docs/COST-PAGE-DEEP-DIVE-2026-09-18.md` and
`docs/STRATEGY-SEP-2026.md`. Nothing in today's find changes that plan — but a
placeholder page in the sitewide footer was quietly working against it, and
that is now gone.
