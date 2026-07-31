# SEO Page Playbook — BuildFirstSite

The executable procedure for adding or optimising any page on buildfirstsite.com.
Read `CLAUDE.md` (repo root) first for the keyword map, competitor set, and
positioning. This file is the *how*.

Use this whenever the task is: add a page, build a location page, write a guide,
add a case study, target a keyword, or optimise an existing page.

---

## Step 0 — Decide the page type

| Type | Where it goes | Data file | Renderer |
|---|---|---|---|
| Case study | `app/work/[slug]/` | `app/lib/case-studies.ts` | existing |
| Comparison ("X vs custom") | `app/<slug>/page.tsx` | `app/lib/comparisons.ts` | `components/ComparisonPage.tsx` |
| Guide / blog | `app/guides/[slug]/` | `app/lib/guides.ts` | existing |
| Location page | `app/<slug>/page.tsx` | new `app/lib/locations.ts` | new shared renderer |
| Service page | `app/<slug>/page.tsx` | new `app/lib/services.ts` | new shared renderer |

If the type already exists, **only add an object to the array** — do not create a
bespoke page component. If it's a new type, create a typed lib + one shared
renderer so pages 2..n cost nothing.

Never convert an existing `public/<slug>/index.html` into a Next route unless
explicitly told to — those pages already rank.

## Step 1 — Keyword check

- Confirm the primary keyword isn't already owned by another page (grep the repo
  + check the map in `CLAUDE.md`). Two pages on one keyword cannibalise each other.
- Pick 1 primary + 2–3 supporting long-tails.
- If the user hasn't given a keyword, propose one from the unclaimed rows of the
  keyword map before writing anything.

## Step 2 — Write the content

- One `<h1>` with the primary keyword. Keyword-relevant `<h2>`s.
- Real substance — 800+ words for guides, genuine specifics for case studies.
  Thin pages don't rank and dilute the domain.
- State **AUD pricing** where relevant (landing $600+, business $2,000+,
  e-commerce $4,000+).
- Lead with the differentiators: fixed transparent pricing, modern stack
  (Next.js / AI), fast delivery, client owns the code.
- Dual CTA: "Get a free quote" → `/#contact`, plus "Book a free call".
- Voice: plain, direct, no agency fluff. **Never invent client names,
  testimonials, or metrics** — ask for real ones.

## Step 3 — Metadata

```ts
export const metadata: Metadata = {
  title: '<Primary Keyword> | Build First Site',   // keyword first, brand last
  description: '<benefit + differentiator + CTA>', // ~155 chars
  keywords: [...],
  alternates: { canonical: '/<slug>/' },           // trailing slash
  openGraph: { title, description, url: 'https://buildfirstsite.com/<slug>/', type },
};
```

Dynamic routes use `generateMetadata` (`params` is a **Promise** in Next 15) plus
`generateStaticParams()` and `export const dynamicParams = false`.

## Step 4 — Schema (JSON-LD)

Always `BreadcrumbList`, plus the matching type:

- Guide / blog → `Article`
- Case study → `CreativeWork`
- Location page → `LocalBusiness` / `ProfessionalService` with `areaServed`
- Any Q&A section → `FAQPage`
- Process / steps → `HowTo`

Emit with
`<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />`.

## Step 5 — Internal linking (where the SEO value actually is)

- ≥ 3 contextual links **out** to related pages.
- ≥ 1 link **in** — add it to `app/components/SiteFooter.tsx`, and to any sibling
  hub page (`/work/`, `/guides/`).
- All internal hrefs end with `/` (`trailingSlash: true`).
- **No orphan pages.** A page nothing links to is a page Google discounts.

## Step 6 — Sitemap

Append the URL to `public/sitemap.xml` with today's `lastmod`, and bump `lastmod`
in `public/sitemap-index.xml`. Skipping this is the most common miss.

## Step 7 — Styling

Use existing tokens from `app/globals.css`: `.card`, `.display`, `.eyebrow`,
`.btn-primary`, `text-text-{primary,secondary,muted,faint}`,
`bg-bg-{secondary,tertiary}`, `border-border-{primary,tertiary}`, `text-brand`.
Never hardcode hex colours — it breaks dark mode.
Render `<SiteHeader />` and `<SiteFooter />` on every page.

## Step 8 — Verify, honestly

```bash
npx tsc --noEmit
```

`next build` times out in the Cowork sandbox — **say so** rather than implying the
production build passed. Then report:

- Page(s) added + URL(s)
- Primary keyword each targets
- Schema types emitted
- Internal links added (in and out)
- Sitemap updated ✓
- "Run `npm run build` locally before deploying"

---

## Optimising an existing page

Same rules, applied as an audit — report by severity, then fix:

1. Title/description length + keyword placement
2. Single `<h1>`, sane heading hierarchy
3. Missing or invalid schema
4. Missing `alt` text
5. Thin content
6. Orphan status (nothing links to it)
7. Canonical correctness
8. Keyword cannibalisation with sibling pages

---

## Quarterly review checklist

- Re-run a technical audit (PSI, Core Web Vitals, mobile-friendly, broken links)
- Check GSC: which pages gained/lost impressions; any page stuck on page 2 that
  needs internal links or a content refresh
- Refresh dates and pricing on evergreen pages
- Compare against the competitor set in `CLAUDE.md` — has anyone published
  something that now outranks us on a mapped keyword?
- Update the keyword→page map with anything new that's been shipped
