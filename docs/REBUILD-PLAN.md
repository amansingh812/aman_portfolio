# Build First Site — Agon Rebuild Plan

Rebuilding buildfirstsite.com on the **Agon** purchased template (legally licensed),
replacing the current Next 15 + TypeScript + Tailwind app.

Status: **planning / not yet executed.**
Branch: `redesign` (production `main` is untouched and still live).

---

## 1. Decisions taken

| Decision | Choice | Notes |
|---|---|---|
| Base template | Agon v7.0 (purchased) | Licence confirmed by Aman |
| Template version | **Recommend `1.Agon-Nextjs-16`** | Next 16 + React 19. Aman initially chose `2.Agon-Nextjs-14` (Next 14 + React 18) — two majors behind on day one. Confirm before executing. |
| Language | JavaScript (template default) | Template ships 53 `.js`, zero `.tsx`. Adopting it means giving up TypeScript. |
| Styling | Bootstrap grid + SCSS (template default) | Replaces Tailwind v4. |
| Animation | Template uses `wowjs` | Consider replacing with Framer Motion — `wowjs` is jQuery-era and unmaintained. |
| Isolation | Git branch `redesign` | Migration to production = merge, not copy. |
| SEO | Deprioritised for now (Aman's call) | See §6 for what this actually costs. |

---

## 2. Content is backed up

Everything is preserved in **`content-backup/`** (gitignored from the template,
but committed to the repo):

```
content-backup/
  content.json          all typed content as portable JSON (108 KB)
                        — homepage model, case studies, comparisons,
                          guides, services, pricing, FAQs, contact
  lib-src/              verbatim copies of the .ts source files
  static-pages/         all 20 hand-authored SEO pages as .html
  sitemap*.xml, robots.txt, llms*.txt
```

Git is also a backup: the full current site lives on `main` and in the history
of `redesign`. Nothing is lost by rebuilding.

---

## 3. Content inventory → new page map

| Existing content | Count | Agon template page to adapt | New route |
|---|---|---|---|
| Homepage (agency model in `homepage.ts`) | 1 | `app/page.js` (index-1) | `/` |
| Case studies (`case-studies.ts`) | 6 | `blog-single` / portfolio detail | `/work/[slug]/` |
| Work hub | 1 | `blog-1` grid | `/work/` |
| Service pages (`services.ts`) | 2 | `page-service-1` | `/<slug>/` |
| Comparison pages (`comparisons.ts`) | 3 | `blog-single` | `/<slug>-vs-custom-website/` |
| Guides (`guides.ts`) | 4 | `blog-single` | `/guides/[slug]/` |
| Guides hub | 1 | `blog-2` | `/guides/` |
| Pricing tiers + retainer | 4 + 1 | `page-pricing-1` | `/pricing/` |
| About / two-person story | 1 | `page-about-1` | `/about/` |
| FAQs + objections | 5 + 7 | `page-faqs-1` | `/faqs/` |
| Contact | 1 | `page-contact` | `/contact/` |
| Terms | — | `page-terms` | `/terms/` |
| 404 | — | `404` | not-found |
| Static SEO pages | 20 | — | see §6 |

**Agon pages we do NOT need:** `index-2` … `index-8` (alternate homepages),
`page-shop-*`, `shop/[id]`, `page-login`, `page-signup`, `page-reset`,
`page-career*`. Delete these rather than leaving them to be indexed.

---

## 4. Execution order

1. **Confirm template version** (16 vs 14) — blocks everything else.
2. Copy chosen template to repo root as the new app; move current `app/` to
   `_v1-backup/` (gitignored) for reference during the port.
3. Strip unused template pages and demo content.
4. **Replace every demo image.** See §5 — this is not optional.
5. Rebrand: colours, fonts, logo, favicon, metadata.
6. Port content from `content-backup/content.json` into the new page components.
7. Rebuild routing so URLs match §3.
8. Re-add: JSON-LD schema blocks, sitemap, robots, canonical tags.
9. Re-add the contact form (Web3Forms — needs `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`).
10. Verify build locally (`npm run build` — times out in the Cowork sandbox).
11. Merge `redesign` → `main`.

---

## 5. Licence constraints (important)

The licence file states: *"All other parts, but not limited to the CSS code,
images, and design are licensed according to the terms of your purchased license."*

Standard purchased-template terms mean:

- **Demo images are licensed to the template author for demo use only.** They are
  almost certainly NOT redistributable in a live commercial site. Every image in
  `public/assets/imgs/` (98 MB) must be replaced with our own or properly licensed
  stock before launch.
- Icon fonts and third-party libraries carry their own licences — check before
  shipping.
- The template code itself is fine to use for one site under the purchased licence.

**Never commit the template folder.** It is 1.1 GB with `node_modules`; GitHub
rejects files over 100 MB. `agency_template_nextjs/` is in `.gitignore`.

---

## 6. What deprioritising SEO actually costs

Aman's position: traffic is currently negligible, so a clean slate is acceptable.
Recording the trade-off honestly so it is a decision, not an accident:

- **20 static pages in `public/` currently rank** and are the only pages earning
  impressions. The Sydney/Melbourne/Brisbane city pages and the cost guide are
  the strongest.
- The first (and so far only) organic client came through this channel — the
  HS Race Gear project. The mechanism works; it is early, not broken.
- Rankings that took ~6 months to earn are lost immediately if URLs change or
  pages disappear, and take months to rebuild.

**Cheap insurance, recommended regardless:** keep the 20 `public/<slug>/index.html`
files in place during the rebuild. They are plain HTML, served by the
`beforeFiles` rewrite in `next.config.mjs`, and cost nothing to carry. They can be
restyled later. Losing them is a choice we should make deliberately, not by
omission.

---

## 7. Honesty constraints carried forward

These survive the rebuild — see `CLAUDE.md` §1:

- **No invented testimonials, client names, review counts or metrics.**
  `TESTIMONIALS` is intentionally empty until real quotes exist.
- **Concept builds must be labelled.** `aurelia-estates`, `harbour-plumbing`,
  `marlow-vine` are spec work on `vercel.app`, not client projects. The `isConcept`
  flag exists for this.
- Real client work: hsracegear.com · mobilearmour.com.au · autozenlyai.com ·
  planet.ltfinance.com
- **We are two people** — Aman (engineer, India) and his brother (client contact,
  Australia). Never imply a larger team. Agon's demo content is full of
  "our team of experts" language and placeholder logos; all of it must go.
- Agon ships stat counters (`react-countup`) designed for numbers like
  "500+ clients". Do not populate them with figures we cannot support.

---

## 8. Open questions

1. Template version — **16 or 14?**
2. Brother's name, and is he happy to be named/photographed on `/about/`?
3. Keep the 20 static SEO pages during the rebuild (recommended) or delete?
4. Where do the replacement images come from — own screenshots, licensed stock,
   or AI-generated?
5. Trading entity / ABN and registered address, needed for `/terms/` and privacy.
