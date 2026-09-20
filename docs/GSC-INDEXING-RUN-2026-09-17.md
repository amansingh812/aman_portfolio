# GSC indexing + sitemap run — 17 Sep 2026

Property: `https://buildfirstsite.com/` (URL-prefix). Done through the live
Search Console UI.

---

## 1. Sitemaps — resubmitted

| Sitemap | Status | Last read | Discovered pages |
|---|---|---|---|
| `/sitemap.xml` | Success | **17 Sep 2026** (today) | **80** |
| `/sitemap-index.xml` | Success | **17 Sep 2026** (today) | 135 |

80 matches the local file exactly, which confirms `/web-design-canberra/` was
deployed and picked up.

### Two broken entries still sitting in the report — need your call

| Entry | Status | Submitted |
|---|---|---|
| `/sitemap` | **Couldn't fetch** | 17 Sep 2026 |
| `/` | **1 error** | 17 Jun 2026 |

Neither is a real sitemap. `/sitemap` (no extension) has no route, and `/` is the
homepage submitted as a sitemap. They do no harm to rankings, but they keep the
Sitemaps report permanently showing errors, which makes it useless as a
health signal — you stop looking at a dashboard that is always red.

**I did not delete them.** Removing a submitted sitemap is a change to your
Search Console account rather than to the site, so that is your call, not mine.
It takes ten seconds: Sitemaps → the ⋮ menu on each row → Remove sitemap. Say
the word and I will do it next session instead.

---

## 2. Indexing requested — 18 URLs

Google's daily quota cut us off at 18, which is the expected limit.

**Already indexed, no action needed (4):**

- `/web-design-canberra/` — indexed within 3 days of deploy
- `/website-design-quote/`
- `/small-business-website-redesign/`
- `/guides/get-your-business-on-google/`

**Requested today (18):**

Buying-intent pages first, since crawl attention is the scarce resource:

1. `/affordable-website-design-small-business/`
2. `/dental-website-design/`
3. `/restaurant-website-design/`
4. `/website-speed-checker/`
5. `/nextjs-development/`
6. `/industries/healthcare/`
7. `/industries/construction-trades/`
8. `/industries/finance-legal/`
9. `/services/marketing-seo/`
10. `/services/maintenance-support/`
11. `/blog/best-web-design-agencies-australia/`
12. `/blog/best-ndis-website-designers/`
13. `/blog/ndis-website-accessibility-checklist/`
14. `/blog/what-small-business-website-actually-needs/`
15. `/blog/average-cost-website-design-small-business/`
16. `/guides/freelance-web-developer-rates-australia/`
17. `/work/school-scout/`
18. `/work/autozenlyai/`

**Left for tomorrow (quota):** `/privacy/`, `/terms/`.

---

## 3. What the inspections actually told us

Current state: **60 indexed, 32 not indexed.** Of the 32, **23 are
"Discovered – currently not indexed"** — Google knows the URL exists and has
chosen not to spend crawl budget on it. Every one of the 23 showed
`Last crawl: N/A`. **Google has never fetched these pages at all.**

I checked whether this was our fault. It is not a configuration bug:

- Every URL I inspected **is** present in `public/sitemap.xml`
- Every one has a real route or static page on disk
- Robots and canonicals are clean

Where GSC said *"No referring sitemaps detected"* on
`/nextjs-development/`, `/services/marketing-seo/`, `/industries/finance-legal/`
and `/work/school-scout/`, that is GSC reporting it has never processed the URL —
not evidence the sitemap is missing it. I verified each against the local file
before writing this, because it would have been easy to report a bug that isn't
there.

### The one real finding

`/blog/what-small-business-website-actually-needs/` showed
**`Referring page: None detected`** — no internal link anywhere that Google has
found. Same for `/restaurant-website-design/`, whose only referring source was a
sitemap. Those two are effectively orphans in Google's link graph even though
they sit in our nav structure. Worth fixing with real in-body links from pages
that already get crawled.

Encouragingly, the internal linking we added **is** working elsewhere: the
affordable page's referring page was `/web-design-canberra/`, and the
average-cost blog post's was `/website-design-quote/`. Those are links we placed
deliberately and Google followed them.

---

## 4. The honest read

Requesting indexing on 18 URLs is a nudge, not a fix. "Discovered – currently
not indexed" at this scale means Google has decided the site does not warrant
the crawl budget — and that decision is driven by site authority, which is
driven by **referring domains, of which we still have zero.**

So: expect some of the 18 to get picked up over the next one to three weeks, and
expect others to sit exactly where they are. If most of them are still
unindexed in three weeks, the answer is not to request again — resubmitting does
not change queue priority, and GSC says so on the confirmation dialog. The answer
is the link work that is already top of your list.

**Recheck on 8 Oct 2026** — Pages report, see whether "not indexed" has moved
from 32.
