# Directory signup sheet — checked live 21 Sep 2026

I went and looked at all five rather than trusting the list I gave you.
**Two of them were not what I told you.** Corrections first, then the
copy-paste values.

---

## Why I can't just do these for you

Every one of these needs an account created and a signup form submitted in your
name. I don't create accounts or submit signup forms on your behalf — that's a
firm limit, not me being cautious. Accounts in your business's name should be
made by you, with credentials only you hold.

What I've done instead is verify what each one actually requires and write out
every field value, so each signup is copy-paste rather than decision-making.

---

## Correction 1 — Clutch free tier gives you NO backlink

I called Clutch "the single most valuable one on this list." That was half right
and I want to be exact about which half.

Straight from their pricing page, the free **Basic** tier explicitly includes:

> - No Clutch Verification
> - **No Link to Your Website from Directory Pages**
> - Not Listed Above Non-Verified Providers
> - Limited Case Studies

The website link only comes with **Verified at $499/year**.

**So: the free Clutch profile is worth doing, but for reviews, not links.** It's
somewhere credible for your four clients to leave a review that buyers actually
read, and review count is what Aussify ranks on. Just don't expect link value —
there is none on the free tier, and I implied there was.

Whether $499/year is worth it is a real question, but not until you have reviews
on there. A verified profile with zero reviews buys nothing.

## Correction 2 — Yellow Pages AU and True Local are both Thryv now

Both are owned by **Thryv Australia Pty Ltd**. I tried two plausible
"add your business" URLs on Yellow Pages and both bounced me into search results,
so I could not confirm a free self-serve path there.

True Local does have one, confirmed: **footer → "Get a free listing"** under
*Our advertising*. Since they share an owner, start there — and expect a sales
call either way. Decline the paid upgrade; the free listing is the citation.

## Correction 3 — Apple Business Connect has moved

`businessconnect.apple.com` now redirects to **business.apple.com** (Apple
Business). The bit you want is under **Maps → "Put your business on the map"**.
Still free, needs an Apple ID.

## Correction 4 — do Bing *after* GBP, not now

Bing Places is live and free, and its main selling point is importing your
profile straight from Google. That import needs a **verified** GBP, which you
don't have yet. Doing Bing now means typing everything twice.

---

# Recommended order

| Order | What | Why now |
|---|---|---|
| 1 | **Finish GBP verification** | Everything else is worth less until this is done, and Bing depends on it. |
| 2 | **Clutch free profile** | No link, but it's where reviews go. Set it up so it's ready when you ask your clients. |
| 3 | **Apple Business (Maps)** | Free, five minutes, almost no competitor bothers. |
| 4 | **True Local** | Footer → Get a free listing. |
| 5 | **Yellow Pages AU** | Same owner as True Local — ask them during the True Local signup. |
| 6 | **Bing Places** | Only once GBP is verified, then import. |

---

# Copy-paste values — identical on every form

Source of truth is `NAP` in `content/site.js`. **Character for character**, every
time. One variation undoes the point of the exercise.

```
Business name:     Build First Site
Website:           https://buildfirstsite.com/
Phone:             0413 146 498
Email:             contact@buildfirstsite.com
Suburb:            Reservoir
State:             VIC
Postcode:          3073
Country:           Australia
Primary category:  Website designer
Other categories:  Software company
                   Internet marketing service
                   Web hosting company
Hours:             Mon-Sun, 7:00am - 7:00pm
```

**Address: hide it.** Choose the service-area / "no storefront" / "serving
[area]" option wherever offered — Yellow Pages already displays listings as
"Serving Australia", so it's supported. **If a directory forces a street
address, skip that directory.** Do not invent one. An inconsistent address does
more harm than the listing is worth.

### Short description (under 200 chars — for tight fields)

> Websites, web apps and mobile apps for Australian small businesses. Fixed AUD
> prices from $800, built on a modern Next.js stack, and you own the code.

### Long description (718 chars — GBP, Clutch, anywhere with room)

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

### Clutch-specific fields

| Field | Value |
|---|---|
| Min project size | `$1,000+` |
| Hourly rate | Leave blank — we quote fixed, and a blank is more honest than a made-up rate |
| Employees | Choose the smallest bracket offered. **Do not inflate.** This is exactly what Aussify does ("50–249") and being verifiably real is the differentiator |
| Year founded | Use the real year |
| Service lines | Web Development ~60%, Mobile App Development ~20%, Custom Software ~20% (adjust to reality) |

---

## After each signup

Send me the live profile URL. Every one of them goes into the `sameAs` array in
the Organization schema in `app/layout.js` — that's how Google connects the
listings to the site as one entity, and it's the part that makes citations
actually count rather than just existing.

Also keep a note of which email and password you used for each. When your details
ever change you'll need to update all of them the same day, and a directory you
can't log into is a citation you can't fix.
