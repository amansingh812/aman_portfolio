# Build First Site — Launch & Get-Found Plan
Domain: **buildfirstsite.com** · Goal: rank organically + run Google Ads for US/AU web-dev clients

---

## ✅ Already done in your code (just deploy)
I added these to the repo — they go live the moment you push to GitHub (Vercel auto-deploys):
- `public/robots.txt` — tells search engines they can crawl + points to the sitemap
- `public/sitemap.xml` — lists your pages for Google
- **JSON-LD structured data** in `index.html` — tells Google you're a web-design *ProfessionalService* serving US/UK/AU, with your price tiers (can produce rich results)
- **Placeholders** in `index.html` for the Search Console tag and the GA4/Ads tag — just paste your IDs and uncomment

**After deploying, confirm these load:**
- https://buildfirstsite.com/robots.txt
- https://buildfirstsite.com/sitemap.xml

---

## STEP 1 — Google Search Console (organic, free) — 10 min
1. Go to **search.google.com/search-console** → Add property.
2. Choose **Domain** property → enter `buildfirstsite.com` → Google gives you a **TXT record** → add it in your domain registrar's DNS → Verify.
   - (Alternative: choose **URL prefix**, copy the `<meta google-site-verification>` tag into the placeholder I left in `index.html`, redeploy, then Verify.)
3. Once verified → **Sitemaps** → submit `sitemap.xml`.
4. **URL Inspection** → paste `https://buildfirstsite.com/` → **Request indexing**.
> Indexing takes a few days to ~2 weeks. Check the **Performance** tab weekly to see what queries you appear for.

## STEP 2 — Bing Webmaster Tools (free, 5 min)
- **bing.com/webmasters** → "Import from Google Search Console" (one click). Bing also feeds ChatGPT/Copilot search, so worth it.

## STEP 3 — Google Analytics 4 (free, know your traffic) — 10 min
1. **analytics.google.com** → create a property → get your **Measurement ID** (`G-XXXXXXXXXX`).
2. Paste it into the GA4 block I left in `index.html`, uncomment, redeploy.
3. In GA4 → mark a **"contact form submit" / "book a call" event as a Key Event** — this is what you'll later import as an Ads conversion.

## STEP 4 — Google Ads (paid) — the money step
1. **ads.google.com** → create account → set billing.
2. **Conversion tracking FIRST** (don't run ads without it): Tools → Conversions → New → Website → either link your GA4 key event, or use the `AW-XXXXXXXXXX` tag in the placeholder. Track "form submit" and "Book a Call".
3. Create a **Search campaign** (not "Smart" — you want control):
   - Objective: **Leads**
   - Locations: target **specific cities** (e.g. Sydney, Melbourne, Brisbane / your target US cities) — cheaper and higher-intent than whole countries.
   - Budget: start small, **$15–25/day**, learn, then scale what converts.
4. **Keywords** (use phrase/exact match, not broad):
   - `"web designer sydney"`, `"web developer melbourne"`, `"small business website design"`, `"ecommerce website developer"`, `"hire web developer"`, `"shopify developer australia"`
   - Add **negative keywords**: `free`, `course`, `jobs`, `salary`, `wordpress plugin`, `template` — stops wasted spend.
5. **Ad copy** angle: fixed-price, fast delivery, "built right the first time", US/AU served. Point ads at the homepage (or a dedicated landing section).

> ⚠️ **Important for Ads:** your contact form currently opens the user's email app (mailto). Google can't track that as a conversion. Before spending on ads, switch it to a real form (Formspree) with a thank-you state that fires the conversion event. I can do this for you — just say the word.

## STEP 5 — Google Business Profile (local + maps, free)
- **business.google.com** → create a **Service-area business** (no storefront needed). Set service areas to your target cities. Gets you on Google Maps + a review link to collect ★ ratings (huge for trust). Note: as a remote studio you list service areas, not a public address.

## STEP 6 — Agency directories (organic backlinks + leads)
Create a free profile on each (they rank well and send leads):
- **Clutch.co**, **DesignRush**, **GoodFirms**, **The Manifest** — agency review sites
- **Upwork** + **Fiverr** — paid-per-lead but builds reviews fast (price low *there* only, not on your site)
- **LinkedIn Company Page** for "Build First Site" + your personal profile linking to it
- **Behance / Dribbble** — post the demo projects (Harbour Plumbing, Marlow & Vine)

---

## What still helps organic ranking (do over coming weeks)
1. **Switch the contact form to Formspree** (real submissions + Ads tracking). ← highest priority
2. **Add a testimonials section** (most-missing trust element).
3. **Add a /blog or case-study pages** — Google needs content to rank you for "web design [city]". Even 4–5 case-study pages on your demo projects will help.
4. **Page speed** — you're already fast (Vite + Vercel); keep images optimized.
5. **Get reviews** on Google Business Profile + Clutch — both ranking and conversion.

---

## Priority order
1. Deploy (push to GitHub) → confirm robots.txt + sitemap live
2. Search Console + submit sitemap + request indexing
3. Switch contact form to Formspree (tell me — I'll do it)
4. GA4 + Bing
5. Google Business Profile
6. Google Ads (only after conversion tracking works)
7. Directories + LinkedIn
