# Image Spec — Aug 2026

Every image the site needs, with prompt, filename, storage path, alt text and
where it renders. Work through it batch by batch — do not try to generate 34
images in one sitting and dump them in.

---

## 0. House style — put this in EVERY prompt

Consistency matters more than any individual image. A site where every hero
looks like it came from a different stock library reads as low-trust. Append
this block to every prompt below:

```
STYLE: Modern flat vector illustration, clean and minimal. Muted teal (#004E56)
and warm cream (#F8F5F0) as the dominant palette with a single warm accent.
Soft rounded geometry, generous whitespace, subtle depth via flat layered
shapes — no heavy gradients, no drop shadows, no 3D renders. Professional
Australian small-business tone. No text, no words, no letters anywhere in the
image. No logos or brand marks. 16:9 aspect ratio.
```

**Why "no text":** AI image models render text as garbled pseudo-letters. It
looks broken at full size and it is invisible to Google anyway — alt text is
what carries the SEO signal, not pixels shaped like words.

### Output settings

| Setting | Value |
|---|---|
| Dimensions | **1200 × 675** (16:9, also valid as OG card) |
| Format | PNG from the generator → convert to **WebP** before committing |
| Target file size | **under 150 KB** after WebP conversion |
| Colour profile | sRGB |

### Convert + compress before committing

```bash
# from repo root — requires cwebp (brew install webp)
cd public/assets/imgs/page/blog
for f in *.png; do cwebp -q 82 -resize 1200 0 "$f" -o "${f%.png}.webp"; done
```

**The repo convention is `.webp`.** `content/blog.js` already references `.webp`
for all 15 posts. Delete the intermediate `.png` after converting — do not leave
both on disk.

### Regenerate the image sitemap after adding any image

```bash
node scripts/generate-image-sitemap.mjs
```

It only writes entries for images that actually exist on disk, and prints
everything still missing. An image sitemap listing files that 404 is worse than
no image sitemap, so never hand-edit `public/sitemap-images.xml`.

---

## 1. WHERE IMAGES RENDER — the three slots

| Slot | Field | File to edit | Renders in |
|---|---|---|---|
| **Blog card + hero** | `image:` | `content/blog.js` | Blog index card, post hero, OG card |
| **Landing hero** | `image:` + `imageAlt:` | `content/landing-pages.js` | Right column of hero, OG card, Service schema |
| **In-body figure** | `{ type: "image", ... }` block | `content/blog-content.js` | Inline between sections |

Slot 2 and 3 are **new** — added in this batch. Landing pages previously had no
image support at all.

### In-body image block syntax (new)

```js
{
  type: "image",
  src: "/assets/imgs/page/blog/wcag-audit-keyboard-test.webp",
  alt: "Keyboard-only navigation test showing a visible focus outline on a form field",
  caption: "Step 3 — every interactive element must be reachable by keyboard",
  width: 1200,
  height: 675
}
```

`alt` is **required**. `caption` is optional but Google reads it as image-search
context, so include it where it adds real information.

### Landing page image field (new)

```js
{
  slug: "ndis-website-design",
  image: "/assets/imgs/page/landing/ndis-website-design.webp",
  imageAlt: "NDIS provider website meeting WCAG 2.1 AA accessibility standards",
  ...
}
```

---

## 2. STORAGE PATHS

```
public/assets/imgs/page/blog/       ← blog card/hero images (flat, slug-named)
public/assets/imgs/page/landing/    ← landing page heroes  (NEW — create this)
public/assets/imgs/og/              ← default OG fallback  (NEW — create this)
```

Create the two new directories:

```bash
mkdir -p public/assets/imgs/page/landing public/assets/imgs/og
```

---

## 3. BATCH A — 12 missing blog images (DO THIS FIRST)

These are **already referenced** in `blog.js` but the files do not exist on
disk. Every one of these blog cards is currently rendering broken. This is the
only batch that fixes a live defect rather than adding polish.

Storage: `public/assets/imgs/page/blog/`

---

**A1 — `7-website-mistakes-australia.webp`**

> Flat vector illustration of a laptop screen displaying a website with several
> visible problems marked by warning triangles — a slow loading spinner, a
> broken image placeholder, and a cluttered layout. A small magnifying glass
> inspects one issue. [+ STYLE BLOCK]

Alt: `Seven common website mistakes shown on a laptop screen with warning markers`

---

**A2 — `website-cost-australia.webp`**

> Flat vector illustration of a price tag and a calculator beside a stylised
> website wireframe. Australian coins stacked in three ascending columns
> suggesting good / better / best pricing tiers. [+ STYLE BLOCK]

Alt: `Australian website cost comparison showing three pricing tiers`

---

**A3 — `signs-website-losing-customers.webp`**

> Flat vector illustration of a website funnel where stylised person icons
> leak out through gaps in the sides rather than reaching the bottom. A
> downward trend line runs behind it. [+ STYLE BLOCK]

Alt: `Website conversion funnel leaking potential customers before checkout`

---

**A4 — `small-business-website-checklist.webp`**

> Flat vector illustration of a tall checklist on a clipboard with green ticks
> on completed rows and empty boxes below, beside a small storefront and a
> laptop. [+ STYLE BLOCK]

Alt: `Small business website launch checklist with completed and pending items`

---

**A5 — `wordpress-vs-custom-website.webp`**

> Flat vector split composition — left side shows a heavy stack of plugin
> blocks piled unevenly on a slow gauge; right side shows a single clean
> minimal block on a fast gauge. Clear visual weight contrast. [+ STYLE BLOCK]

Alt: `WordPress plugin stack compared with a lightweight custom website build`

---

**A6 — `how-long-to-build-a-website.webp`**

> Flat vector illustration of a horizontal project timeline with four labelled
> milestone dots, a calendar, and a stopwatch. Progress bar partly filled.
> [+ STYLE BLOCK]

Alt: `Website build timeline showing four project milestones from brief to launch`

---

**A7 — `tradie-website-cost.webp`**

> Flat vector illustration of a tradesperson's ute parked beside a smartphone
> displaying a simple website. A toolbox and a price tag sit in the
> foreground. [+ STYLE BLOCK]

Alt: `Tradie ute beside a mobile website showing trade business pricing`

---

**A8 — `best-web-design-agencies-australia.webp`**

> Flat vector illustration of a podium with three ranked positions, each
> holding a stylised browser window. A magnifying glass and a star rating row
> sit beside it. Australian map silhouette faint in background. [+ STYLE BLOCK]

Alt: `Ranked comparison podium of Australian web design agencies`

---

**A9 — `ndis-website-accessibility-checklist.webp`**

> Flat vector illustration of an accessibility audit checklist beside a screen
> showing an eye icon, an ear icon, a keyboard, and a contrast ratio dial.
> Calm blue-green palette. [+ STYLE BLOCK]

Alt: `NDIS website accessibility checklist covering vision, hearing and keyboard access`

---

**A10 — `ndis-website-cost.webp`**

> Flat vector illustration of a price tag beside an accessible website
> wireframe with a visible focus outline and large readable text blocks.
> Australian coins in a small stack. [+ STYLE BLOCK]

Alt: `NDIS provider website cost shown beside an accessible page layout`

---

**A11 — `seo-for-ndis-providers.webp`**

> Flat vector illustration of a search results page where an NDIS provider
> listing sits at position one, with an upward ranking arrow and a magnifying
> glass over the search bar. [+ STYLE BLOCK]

Alt: `NDIS provider ranking at position one in search engine results`

---

**A12 — `best-ndis-website-designers.webp`**

> Flat vector illustration of three ranked browser windows on a comparison
> podium with accessibility icons overlaid. Star rating row beneath.
> [+ STYLE BLOCK]

Alt: `Comparison of NDIS website designers ranked by accessibility capability`

---

## 4. BATCH B — 5 highest-value landing heroes

Do these **before** the other 17. They are the pages closest to a sale, so a
hero image earns the most here. Also the OG card matters most on pages people
actually share.

Storage: `public/assets/imgs/page/landing/`
Add `image:` + `imageAlt:` to each entry in `content/landing-pages.js`.

---

**B1 — `how-much-does-a-website-cost-australia.webp`**

> Flat vector illustration of three price cards of increasing height, each
> topped with a small browser window. An Australian dollar symbol and a
> calculator sit beside them. [+ STYLE BLOCK]

Alt: `Three Australian website pricing tiers compared side by side in AUD`

---

**B2 — `tradie-website-design.webp`**

> Flat vector illustration of a smartphone showing a trade business website
> with a large call button, beside a ute and a suburban street map with
> location pins. [+ STYLE BLOCK]

Alt: `Mobile-first tradie website with click-to-call beside a suburb service map`

---

**B3 — `ndis-website-design.webp`**

> Flat vector illustration of a website being tested for accessibility — a
> contrast ratio dial reading pass, a keyboard focus outline on a button, and
> a screen reader wave icon. Warm, inclusive, non-clinical. [+ STYLE BLOCK]

Alt: `NDIS provider website passing WCAG 2.1 AA contrast and keyboard tests`

---

**B4 — `wordpress-vs-custom-website.webp`**

> Flat vector split composition — left panel shows a cluttered plugin stack on
> a slow speed gauge, right panel shows a single clean block on a fast gauge.
> A dividing line down the centre. [+ STYLE BLOCK]

Alt: `WordPress plugin overhead compared with a fast custom Next.js build`

---

**B5 — `web-design-melbourne.webp`**

> Flat vector illustration of the Melbourne skyline in simplified silhouette
> behind a laptop showing a local business website. A map pin marks the city.
> [+ STYLE BLOCK]

Alt: `Melbourne skyline behind a local business website built for the local market`

---

## 5. BATCH C — remaining 17 landing heroes

Same storage path and same style block. Ship these in groups of 4–5.

| # | Filename (`.webp`) | Prompt core | Alt text |
|---|---|---|---|
| C1 | `web-design-sydney` | Sydney Harbour Bridge and Opera House in simplified silhouette behind a laptop showing a local business website, map pin marking the city | `Sydney skyline behind a local business website built for the Sydney market` |
| C2 | `web-design-brisbane` | Brisbane river bend and Story Bridge simplified behind a laptop showing a local business website, map pin | `Brisbane skyline behind a local business website built for the Brisbane market` |
| C3 | `web-design-perth` | Perth skyline and Swan River simplified behind a laptop showing a local business website, map pin | `Perth skyline behind a local business website built for the Perth market` |
| C4 | `web-design-adelaide` | Adelaide skyline and parklands simplified behind a laptop showing a local business website, map pin | `Adelaide skyline behind a local business website built for the Adelaide market` |
| C5 | `dental-website-design` | Clean dental clinic reception with a tablet showing an online appointment booking calendar, calm clinical palette, tooth icon subtle | `Dental clinic website with online appointment booking on a tablet` |
| C6 | `restaurant-website-design` | Restaurant table setting beside a phone showing a digital menu and a booking button, warm inviting palette | `Restaurant website showing a digital menu and table booking on mobile` |
| C7 | `real-estate-website-design` | Property listing cards in a grid beside a house icon and a map with location pins | `Real estate website showing property listings and a location map` |
| C8 | `ecommerce-development` | Online store product grid with a shopping cart and a secure payment card icon, order flow arrows | `Online store product grid with cart and secure payment checkout` |
| C9 | `ai-web-development` | Chat bubble interface connected by clean lines to a website and a small automation gear, subtle neural node pattern | `AI chatbot connected to a website automating customer enquiries` |
| C10 | `nextjs-development` | Layered page blocks assembling into a fast-loading website, speed gauge reading high, clean modular geometry | `Modular Next.js page architecture delivering fast load performance` |
| C11 | `hire-website-builder` | Two people at a desk reviewing a website design on a large screen, collaborative and warm | `Working directly with a website builder reviewing a design together` |
| C12 | `small-business-website-checklist` | Clipboard checklist with green ticks beside a small storefront and a laptop showing a live site | `Small business website checklist completed beside a launched website` |
| C13 | `how-long-does-it-take-to-build-a-website` | Horizontal timeline with four milestone dots, calendar and stopwatch, progress bar partly filled | `Website build timeline from initial brief through to launch` |
| C14 | `wix-vs-custom-website` | Split composition — left a locked template box, right an open modular build with a key, dividing line centre | `Wix locked template compared with an open custom website build` |
| C15 | `squarespace-vs-custom-website` | Split composition — left a rigid grid template, right a flexible modular layout, dividing line centre | `Squarespace fixed template compared with a flexible custom build` |
| C16 | `webflow-vs-custom-website` | Split composition — left a visual drag-and-drop canvas, right clean structured code blocks, dividing line centre | `Webflow visual builder compared with a hand-built custom codebase` |
| C17 | `freelancer-vs-web-design-agency` | Split composition — left a single person at a desk, right a small two-person team, balanced not favouring either | `Solo freelancer compared with a small web design studio team` |

---

## 6. BATCH D — default OG fallback

**`public/assets/imgs/og/default-og.png`** — 1200 × 630 (note: **630**, not 675)

> Flat vector composition with generous whitespace — a clean browser window
> shape centred, a subtle Australian map silhouette behind it, and a soft
> teal-to-cream background. Deliberately simple and brand-neutral so it works
> for any page. [+ STYLE BLOCK]

Alt: `Build First Site — web design and development for Australian businesses`

This is the fallback used by `buildMetadata()` when a page has no image of its
own, so no shared link ever previews blank. **Generate this one first** — it
covers every page instantly while the rest are still being made.

---

## 7. In-body images — where they add real value

Do not add in-body images to every post. They only earn their weight where a
visual explains something text cannot. Highest value:

| Post | Image | Why |
|---|---|---|
| `wcag-audit-process-ndis-websites` | Contrast ratio pass/fail comparison | Shows the actual difference between 2.85:1 and 4.5:1 — genuinely clearer than describing it |
| `wcag-audit-process-ndis-websites` | Keyboard focus outline visible vs removed | The single most common failure, instantly obvious as an image |
| `wordpress-vs-nextjs-speed-australia` | Side-by-side PageSpeed gauges 48 vs 94 | The whole argument of the post in one image |
| `tradie-suburb-pages-seo` | Suburb map with pins and search volumes | Makes the long-tail strategy concrete |

Everything else is decoration and adds page weight for no ranking benefit.

---

## 8. Checklist before committing any image

- [ ] 1200 × 675 (or 1200 × 630 for the OG fallback)
- [ ] Converted to WebP, under 150 KB
- [ ] Filename exactly matches the slug it belongs to — no spaces, no capitals
- [ ] Alt text written and added to the data file (never left empty on a
      content image)
- [ ] Contains no rendered text, no logos, no real people's faces
- [ ] Added to `public/sitemap-images.xml`
- [ ] Visually consistent with the rest of the set — if it looks like it came
      from a different library, regenerate it

---

## 9. Honesty constraint — read before generating anything

Per `CLAUDE.md` §1: these are **illustrations, not evidence**.

- An illustration of a PageSpeed gauge reading 94 is fine. A **screenshot**
  presented as a real client result is only fine if it is a real client result.
- Do not generate images of "our team" — we are two people and stock-style
  team imagery would be an implied headcount claim.
- Do not generate fake client logos, fake review stars with counts, or fake
  dashboard screenshots with invented metrics.
- Concept-build imagery must stay consistent with the concept-build labelling
  already on those portfolio entries.

Illustration = how the thing works. Screenshot = what we actually did. Never
blur the two.
