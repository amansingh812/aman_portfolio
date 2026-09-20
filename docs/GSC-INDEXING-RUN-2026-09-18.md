# GSC run 2 — 18 Sep 2026

Continues `GSC-INDEXING-RUN-2026-09-17.md`. Quota reset overnight, so this
finished the leftovers and then went through the error categories, which are
the more interesting half.

---

## 1. Indexing requested — 5 URLs

**Leftovers from yesterday's quota cut-off:**

- `/privacy/`
- `/terms/`

That closes the **"Discovered – currently not indexed" group: all 23 requested.**

**The 3 "Duplicate without user-selected canonical" pages:**

- `/services/`
- `/industries/real-estate/`
- `/blog/seo-for-ndis-providers/`

### What these three actually are

I nearly reported these as "already fixed, just a stale report." That would have
been wrong, and here is how I checked.

The canonical on `/services/` was committed **3 Aug**. Google last crawled it
**8 Aug** — *after* the commit — and still reported **User-declared canonical:
None**. On that evidence the tag was not rendering, which is a live bug, not
staleness.

So I fetched the production page. It does emit
`canonical: https://buildfirstsite.com/services/`, and the "Which of these do you
actually need?" differentiation table (committed 11 Sep) is live. Same check on
`/industries/real-estate/`: canonical correctly points to
`/real-estate-website-design/`. Both are genuinely correct in production; the
8 Aug crawl simply predates the deploy. Requesting indexing forces the recrawl
that clears the flag.

**One oddity worth recording:** Google's selected canonical for `/services/` was
`https://www.marcustheatres.com/` — an unrelated US cinema chain. That is Google
clustering our hub with a third-party page, which happens when a page is thin
enough at crawl time that it has no distinguishing content. It is the clearest
possible confirmation that the card-grid-only version of `/services/` was too
thin, and that adding the decision table was the right fix rather than a
cosmetic one.

**Expectation, stated plainly:** `/industries/real-estate/` and
`/blog/seo-for-ndis-providers/` **will still not be indexed** after the recrawl,
and that is intended — they declare a canonical pointing elsewhere. What changes
is their classification, from *"Duplicate without user-selected canonical"* (an
error, Google guessing) to *"Alternative page with proper canonical tag"* (our
decision, respected). Only `/services/` should actually become indexed.

---

## 2. Error categories — checked, no action needed

| Reason | Count | Verdict |
|---|---|---|
| Page with redirect | 3 | **Correct behaviour.** `/web-design-denver/` and `/web-design-phoenix/` are the retired US city pages, 301'd to `/pricing/` in `next.config.mjs`; `/page-terms` is an old URL. A 301 reported here is Google recording the redirect, not an error. |
| Not found (404) | 1 | **Correct behaviour.** `https://buildfirstsite.com/month`. There is no `href="/month"` anywhere in the repo — most likely something mis-parsing a `$250/month` string. A URL that was never real *should* 404. Nothing to fix. |
| Alternative page with proper canonical tag | 1 | Intended outcome. |
| Crawled – currently not indexed | 1 | Same root cause as the 23 below. |

Google is still crawling `denver` and `phoenix` as of 9–10 Sep, which is worth
knowing while the US-city-pages decision is still open.

---

## 3. Bug found while verifying — the 8 industry pages

Checking the live `/industries/real-estate/` HTML for the canonical turned up
three separate problems in `app/industries/[slug]/page.js`. All eight industry
pages were affected. Fixed:

**1. openGraph was missing entirely.** Every industry page inherited the ROOT
layout's Open Graph block, so a shared link previewed with the generic site card
and carried `og:url = https://buildfirstsite.com/` — pointing at the homepage
rather than the page being shared. Anyone who has ever posted an industry page
to LinkedIn or WhatsApp shared the homepage's identity. Now set per page, with
`og:url` matching the canonical so a deferring page resolves to the page we
actually want ranked.

**2. Titles were truncating.** `title` was a plain string, so the root template
appended ` | Build First Site`, pushing all eight to **85–97 characters** — well
past where Google cuts off. Now `title: { absolute: ... }`, the same fix already
applied to blog, guides and landing pages. Industries were simply missed.

**3. `startups-saas` was double-branded.** Its `metaTitle` already ended in
`| Build First Site`, so it rendered the brand twice. Removed from the data file.

### Still open — a judgement call, not a mechanical fix

Even absolute, the titles are **66–76 characters**; roughly 60 is what displays.
Shortening them means deciding which keywords to drop from the second clause
(e.g. `Healthcare Web Development Australia | Clinics, Telehealth, Patient
Portals`), and that is a content call on eight commercial pages rather than
something to change quietly. Flagging it rather than guessing.

---

## 4. Where the numbers stand

**60 indexed · 32 not indexed.** Unchanged from yesterday, as expected — crawling
takes days to weeks.

Every not-indexed URL is now either requested (26) or confirmed correct
behaviour (6). There is nothing left to submit. **The remaining constraint is
unchanged and is not an indexing-tool problem: zero referring domains.**

**Recheck 8 Oct 2026** with the Pages report.

**Still needs your call** (carried from yesterday): removing the two broken
sitemap entries, `/sitemap` and `/`. Search Console account change, so yours to
make.
