# Service page redesign — spec + prompt

26 Sep 2026. Applies to all six `/services/<slug>/` pages (one shared
template: `app/services/[slug]/page.js`, data in `content/service-pages.js`).
Demo: `docs/SERVICE-PAGE-REDESIGN-DEMO.html` (web-development).

## What's wrong now

| Problem | Why it matters |
|---|---|
| Dark text on the teal pricing band ("Fixed AUD prices. No surprises." is ~1.3:1 contrast) | Unreadable; fails WCAG AA (needs 4.5:1) |
| Emoji icons (🌐 📱 ⚙️) in "Other services" | Render differently per device; look unprofessional |
| ~300 words; H1 is a slogan, not the keyword | Nothing for Google to rank for "web development Australia" |
| No images, no proof | Reads like a template; no real client work shown |
| 3 internal links out (other services only) | Pages are dead ends; link equity doesn't flow to cost/guide pages |
| No Service / FAQPage / BreadcrumbList schema | No rich results; weaker entity signals |
| FAQs collapsed and only 3–4 | Thin; misses buyer questions GSC shows people asking |
| Mobile page pricing rows contradict each other (Application $4,500 · 4–8 wks vs "Cross-Platform Mobile" $4,500 · 10–16 wks) | Same price, two timelines: confusing and not in `pricing.js` |

## The prompt (use this to rebuild each service page)

> Rebuild `/services/<slug>/` using the shared template, in the site's
> existing theme (Chivo headings, Noto Sans body, teal #006D77, mint #DBECE5,
> peach #FFF3EA, Agon classes). Business outcome before technology in every
> section. Sections, in order:
> 1. **Hero**: breadcrumb; H1 containing the primary keyword; one-line
>    outcome; dual CTA (Get a quote / Book a free call); 4 fact chips pulled
>    from `pricing.js` (entry price, delivery time, free homepage design, you
>    own the code); a real client screenshot in a browser frame.
> 2. **Proof strip**: real client names linking to their `/work/` case studies.
> 3. **What we build**: 6 cards with SVG line icons (no emoji), each ending in
>    a link to the page that goes deeper.
> 4. **Process**: 5 steps beside a licensed photo; link to the timeline page.
> 5. **Outcomes**: 4 cards, business result first, tech in small print.
> 6. **Pricing**: white cards on teal, white headings, prices imported from
>    `BUILD_TIERS` / `ADDONS` / `RETAINER` (never typed in), featured tier
>    marked, link to /pricing/ and the cost guide.
> 7. **Case study**: one real build with screenshot and link. Results only
>    if the client has supplied real numbers and permission.
> 8. **Comparison table**: us vs DIY builder vs typical agency (platform
>    prices from `PLATFORM_PRICES`), linking to the comparison pages.
> 9. **FAQ**: 6–8 questions taken from GSC queries, first one open, rendered
>    visibly, emitted as FAQPage schema.
> 10. **Related guides** (4 cards) + city links.
> 11. **CTA**: dark panel, white text.
> Add `Service` + `BreadcrumbList` + `FAQPage` JSON-LD. Minimum 12 contextual
> internal links. No invented metrics, testimonials, or headcount (CLAUDE.md §1).
> Target ~1,200–1,800 words of useful copy; don't pad.

## Interlink map

| Service | Must link to |
|---|---|
| web-development | /pricing/, /how-much-does-a-website-cost-australia/, /how-long-does-it-take-to-build-a-website/, /website-hosting-cost-australia/, /small-business-website-redesign/, /ecommerce-development/, /nextjs-development/, /website-speed-checker/, /wordpress-vs-custom-website/, /wix-vs-custom-website/, /work/hs-race-gear/, city pages |
| mobile-app-development | /pricing/, /services/custom-software/, /work/mobile-armour/, /ai-web-development/, cost guide |
| custom-software | /pricing/, /work/autozenlyai/, /services/ai-automation/, /industries/ |
| marketing-seo | /website-speed-checker/, /website-hosting-cost-australia/, city pages, /blog/ SEO posts, retainer on /pricing/ |
| ai-automation | /ai-web-development/, /work/autozenlyai/, /work/mobile-armour/, AI chatbot add-on |
| maintenance-support | /pricing/ (retainer), /website-hosting-cost-australia/, /small-business-website-redesign/ |

## Images per page

Hero: real client screenshot (self-host it, don't use the mShots service in production).
Process: licensed Adobe Stock free photo (482773247 wireframes, 249703076 code,
526215016 QA; licensed 25 Sep 2026). Case study: client screenshot.
Never: AI people captioned as clients, fake dashboards with numbers.

## Open data fixes before building

- Mobile page pricing rows: replace with `BUILD_TIERS` application ($4,500 · 4–8 weeks)
  and custom software (from $5,000). Drop the "Cross-Platform Mobile" row.
- Mobile capability card still says "React Native ships…" only; make it "Flutter or React Native".
- AU$500 SEO Audit and From AU$200 Pay Per Piece: add to `ADDONS` or remove (CLAUDE.md §1).
