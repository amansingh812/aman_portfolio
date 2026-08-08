import pathlib, json

# ── Shared, from content/pricing.js. Single source of truth. ──
TIERS = [("Starter","3–5 pages","$800","5–7 days"),
         ("Business","Up to 10 pages","$1,900","2–3 weeks"),
         ("Unlimited","Unlimited pages","$3,500","3–4 weeks"),
         ("E-Commerce","Online store","$4,500","4–6 weeks"),
         ("Application","Web or mobile app","$4,500","4–8 weeks"),
         ("Custom Software","Scoped per project","from $5,000","Scoped")]

CITIES = {
"sydney": dict(
 city="Sydney", state="NSW", stateFull="New South Wales", region="AU-NSW",
 lat=-33.8688, lon=151.2093,
 suburbs=["Sydney CBD","Parramatta","North Sydney","Chatswood","Bondi","Surry Hills",
          "Newtown","Manly","Liverpool","Penrith","Blacktown","Bankstown"],
 angleH2="Why Sydney web design quotes are the highest in Australia",
 angle="Sydney has the most expensive commercial rents in the country, and agency pricing reflects it. "
       "A five-page business website that costs $2,000 in Adelaide is routinely quoted at $8,000 to $15,000 "
       "in the Sydney CBD. The build is the same. What differs is the overhead sitting behind it — office "
       "space in Surry Hills or North Sydney, an account manager, a project coordinator and a sales team all "
       "get costed into your quote before anyone writes a line of code.",
 angle2="That overhead buys you a meeting room. It does not make the website faster, rank better or convert "
        "more visitors. We work remotely from Melbourne, which is why our prices are published and start at $800.",
 competitive="Sydney is also the most crowded market for web designers in Australia, which is genuinely good "
             "news for you: it means you can compare several published quotes before committing. Ask every one "
             "of them for a fixed price in writing, and ask whether you own the code.",
 industries=[("Trades and home services","Plumbers, electricians and builders across Western Sydney and the "
              "Northern Beaches — click-to-call, quote forms and service-area pages.","/tradie-website-design/"),
             ("Professional services","Legal, accounting and consulting practices in the CBD and North Sydney "
              "that need credibility before a first meeting.",""),
             ("Hospitality","Cafés and restaurants in Surry Hills, Newtown and Bondi — direct bookings that "
              "skip the commission.","/restaurant-website-design/"),
             ("Retail and e-commerce","Stripe checkout with real inventory, without paying a platform "
              "commission on every sale.","")]),

"brisbane": dict(
 city="Brisbane", state="QLD", stateFull="Queensland", region="AU-QLD",
 lat=-27.4698, lon=153.0251,
 suburbs=["Brisbane CBD","Fortitude Valley","South Brisbane","West End","Chermside",
          "Toowong","Ipswich","Logan","Redcliffe","Carindale","Springfield"],
 angleH2="Brisbane is growing, and your competitors are already online",
 angle="Brisbane and South East Queensland are in a sustained growth phase, with major infrastructure work "
       "running through to the 2032 Olympics. More residents means more customers, but it also means more "
       "competitors — including newcomers from Sydney and Melbourne who arrive with a marketing budget already "
       "in place.",
 angle2="For an established Brisbane business, the risk is being outranked in your own suburb by a company "
        "that opened last year with a faster website. Local reputation does not transfer to Google automatically.",
 competitive="Brisbane agency pricing sits below Sydney but above Adelaide, typically $4,000 to $10,000 for a "
             "business website. Ours is published and starts at $800 because we work remotely from Melbourne "
             "and there is no office overhead in the quote.",
 industries=[("Trades and construction","With SEQ construction demand high, tradies competing for renovation "
              "and commercial work need more than a Facebook page.","/tradie-website-design/"),
             ("Hospitality and tourism","Restaurants and operators across the Valley, West End and out toward "
              "the Bay — bookings direct rather than through a platform.","/restaurant-website-design/"),
             ("Health and allied health","Clinics needing accessible, compliant sites with online booking.",""),
             ("Retail and e-commerce","Selling beyond Queensland with real inventory and order management.","")]),

"perth": dict(
 city="Perth", state="WA", stateFull="Western Australia", region="AU-WA",
 lat=-31.9523, lon=115.8613,
 suburbs=["Perth CBD","Fremantle","Joondalup","Subiaco","Cannington","Midland",
          "Rockingham","Mandurah","Osborne Park","Cockburn"],
 angleH2="Perth has fewer web designers — which cuts both ways",
 angle="Perth is the most isolated capital city in the world, and its web design market is smaller than the "
       "east coast equivalent. That has an obvious upside: less competition for local search terms, so a "
       "well-built Perth website can rank faster than the same site would in Sydney.",
 angle2="The downside is less price competition. With fewer studios bidding, quotes are less disciplined and "
        "the gap between the cheapest and most expensive can be enormous for identical scope.",
 competitive="The timezone question comes up in Perth more than anywhere else. We work remotely and our "
             "contact is in Melbourne, which is two to three hours ahead of Perth depending on daylight saving. "
             "In practice that means we are working while you are starting your day, and calls are scheduled "
             "in the Perth morning.",
 industries=[("Mining services and industrial","Contractors and suppliers who need to look credible to "
              "procurement teams, not just to consumers.",""),
             ("Trades and home services","Perth trades competing across a sprawling metro area where service-"
              "area pages matter more than in a compact city.","/tradie-website-design/"),
             ("Hospitality","Fremantle and Northbridge venues taking bookings direct.","/restaurant-website-design/"),
             ("Retail and e-commerce","Selling to the east coast and beyond without a platform commission.","")]),

"adelaide": dict(
 city="Adelaide", state="SA", stateFull="South Australia", region="AU-SA",
 lat=-34.9285, lon=138.6007,
 suburbs=["Adelaide CBD","North Adelaide","Glenelg","Norwood","Prospect","Marion",
          "Salisbury","Port Adelaide","Unley","Modbury"],
 angleH2="Adelaide businesses get quoted less — and often get less",
 angle="Adelaide agency pricing runs below the eastern capitals, typically $2,500 to $6,000 for a business "
       "website. That sounds like good news until you look at what is inside the cheaper quotes: a template "
       "with your logo dropped in, hosting you do not control, and SEO sold separately as a monthly add-on.",
 angle2="A cheap website that nobody finds is not cheap. It is a smaller amount of money that produces nothing, "
        "which is more expensive than a good site that brings in work.",
 competitive="Adelaide's defence, health and wine sectors have raised the standard of what local buyers expect "
             "from a business online. A site that looked fine in 2020 now reads as dated to the people you are "
             "trying to win work from.",
 industries=[("Trades and home services","Adelaide trades competing for renovation and maintenance work across "
              "the metro area.","/tradie-website-design/"),
             ("Health and allied health","Clinics and practitioners needing accessible, bookable sites.",""),
             ("Food, wine and hospitality","Cellar doors, venues and producers selling direct.",
              "/restaurant-website-design/"),
             ("Professional and defence services","Firms needing credibility with procurement and "
              "enterprise buyers.","")]),
}

TPL = """<!DOCTYPE html>
<html lang="en-AU">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">

<!--
  /web-design-{slug}/ — {city} location page.

  LEGACY STATIC page (CLAUDE.md §2) that already ranks — edit in place, do not
  convert to a Next route without an explicit instruction.

  ⚠️  SCHEMA: this page emits `Service` ONLY, never LocalBusiness or
      ProfessionalService. We have ONE verified business location and it is in
      Melbourne. Claiming a local business entity in {city} would be untrue and
      would fragment the entity Google builds of us. `provider` points back to
      the single Melbourne @id. Only /web-design-melbourne/ carries the
      LocalBusiness entity.

  Prices must match content/pricing.js. If they diverge, pricing.js wins.
  Generated by scripts/generate-city-pages.py — edit that, not this file.
-->

<title>Web Design {city} | Prices From $800 | Build First Site</title>
<meta name="description" content="{city} web design with prices published upfront — from $800. Fast Next.js builds, SEO included, and you own the code. Fixed quote in one business day.">
<meta name="keywords" content="web design {lcity}, web designer {lcity}, website design {lcity}, {lcity} web development, ecommerce website {lcity}">
<link rel="canonical" href="https://buildfirstsite.com/web-design-{slug}/">
<meta name="geo.region" content="{region}">
<meta name="geo.placename" content="{city}">

<meta property="og:type" content="website">
<meta property="og:title" content="Web Design {city} | Fixed AUD Prices From $800">
<meta property="og:description" content="{city} web design with prices published upfront. Fast Next.js builds, SEO included, you own the code.">
<meta property="og:url" content="https://buildfirstsite.com/web-design-{slug}/">
<meta property="og:locale" content="en_AU">
<meta name="twitter:card" content="summary_large_image">

<script src="https://cdn.tailwindcss.com"></script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="icon" href="/favicon.svg">

<style>
  body {{ font-family: 'Inter', system-ui, sans-serif; }}
  .teal {{ color:#006D77 }} .bg-teal {{ background:#006D77 }}
  .mint {{ color:#83C5BE }} .bg-mint {{ background:#83C5BE }}
  .bg-tint {{ background:#EDF6F5 }} .brd-tint {{ border-color:#BEE1E6 }}
</style>

<script type="application/ld+json">
{jsonld}
</script>
</head>

<body class="bg-white text-slate-900 antialiased">

<header class="border-b brd-tint">
  <div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
    <a href="/" class="font-bold text-lg teal">Build First Site</a>
    <a href="tel:+61413146498" class="bg-teal text-white text-sm font-semibold px-5 py-2.5 rounded-full">Call +61 413 146 498</a>
  </div>
</header>

<section class="bg-tint">
  <div class="max-w-6xl mx-auto px-6 py-16 md:py-24">
    <span class="inline-block bg-white teal text-xs font-bold tracking-widest px-4 py-2 rounded-full">{ucity}, {state}</span>
    <h1 class="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mt-6 max-w-3xl">
      Web design in {city},<br><span class="teal">with the price on the page.</span>
    </h1>
    <p class="text-lg md:text-xl text-slate-600 mt-6 max-w-2xl leading-relaxed">
      Most {city} agencies make you sit through a discovery call before telling you what it costs.
      Ours starts at <strong>$800</strong> and every figure is published. Fast Next.js builds,
      SEO included, and you own the code.
    </p>
    <div class="mt-8 flex flex-wrap gap-3">
      <a href="/contact/" class="bg-teal text-white font-semibold px-7 py-3.5 rounded-full">Get a fixed quote</a>
      <a href="tel:+61413146498" class="bg-white border-2 brd-tint teal font-semibold px-7 py-3.5 rounded-full">Call now</a>
    </div>
    <p class="text-sm text-slate-500 mt-6">Fixed AUD prices · Quote within one business day · Serving {city} remotely from Melbourne</p>
  </div>
</section>

<section class="max-w-6xl mx-auto px-6 py-16 md:py-20">
  <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight">{angleH2}</h2>
  <p class="text-lg text-slate-600 mt-5 max-w-3xl leading-relaxed">{angle}</p>
  <p class="text-lg text-slate-600 mt-5 max-w-3xl leading-relaxed">{angle2}</p>
  <p class="text-lg text-slate-600 mt-5 max-w-3xl leading-relaxed">{competitive}</p>
</section>

<section class="bg-tint">
  <div class="max-w-6xl mx-auto px-6 py-16 md:py-20">
    <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight">{city} pricing, published</h2>
    <p class="text-lg text-slate-600 mt-5 max-w-3xl">
      Priced by size, not by features. Every package includes custom design, a CMS you can edit,
      SEO built in, and full ownership of the code.
    </p>
    <div class="bg-white rounded-2xl border brd-tint mt-10 overflow-hidden">
      <table class="w-full text-left">
        <thead class="border-b-2 border-slate-900"><tr>
          <th class="p-5 text-sm font-bold">Package</th><th class="p-5 text-sm font-bold">Scope</th>
          <th class="p-5 text-sm font-bold">Delivery</th><th class="p-5 text-sm font-bold text-right">Price</th>
        </tr></thead>
        <tbody class="text-slate-700">{rows}</tbody>
      </table>
    </div>
    <p class="text-slate-600 mt-6">Ongoing <strong>Care + SEO is $250/month</strong> — hosting, security, backups, technical SEO and a new page each month. Optional, cancel with 30 days notice. <a href="/pricing/" class="teal font-semibold underline">See what's included →</a></p>
    <p class="text-sm text-slate-500 mt-3">All prices AUD · GST not included · Hosting included for year one</p>
  </div>
</section>

<section class="max-w-6xl mx-auto px-6 py-16 md:py-20">
  <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight">What we build for {city} businesses</h2>
  <div class="grid md:grid-cols-2 gap-6 mt-10">{inds}</div>
</section>

<section class="bg-tint">
  <div class="max-w-6xl mx-auto px-6 py-16 md:py-20">
    <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight">Sites we have actually shipped</h2>
    <p class="text-lg text-slate-600 mt-5 max-w-3xl">Real client work on their own domains. Open any of them and run a speed test — we would rather you checked than took our word for it.</p>
    <div class="grid md:grid-cols-2 gap-5 mt-10">
      <a href="https://www.hsracegear.com" target="_blank" rel="noopener" class="bg-white border brd-tint rounded-2xl p-6 block"><h3 class="font-bold">HS Race Gear</h3><p class="text-slate-600 text-sm mt-2">Motorsport e-commerce · large product catalogue</p><span class="teal text-sm font-semibold mt-3 inline-block">hsracegear.com →</span></a>
      <a href="https://mobilearmour.com.au" target="_blank" rel="noopener" class="bg-white border brd-tint rounded-2xl p-6 block"><h3 class="font-bold">Mobile Armour</h3><p class="text-slate-600 text-sm mt-2">Australian retail · speed and SEO rebuild</p><span class="teal text-sm font-semibold mt-3 inline-block">mobilearmour.com.au →</span></a>
      <a href="https://www.autozenlyai.com" target="_blank" rel="noopener" class="bg-white border brd-tint rounded-2xl p-6 block"><h3 class="font-bold">Autozenly AI</h3><p class="text-slate-600 text-sm mt-2">AI SaaS · admin dashboard and platform</p><span class="teal text-sm font-semibold mt-3 inline-block">autozenlyai.com →</span></a>
      <a href="https://planet.ltfinance.com" target="_blank" rel="noopener" class="bg-white border brd-tint rounded-2xl p-6 block"><h3 class="font-bold">LT Finance</h3><p class="text-slate-600 text-sm mt-2">Enterprise fintech platform</p><span class="teal text-sm font-semibold mt-3 inline-block">planet.ltfinance.com →</span></a>
    </div>
  </div>
</section>

<section class="max-w-6xl mx-auto px-6 py-16 md:py-20">
  <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight">Working with {city} businesses</h2>
  <p class="text-lg text-slate-600 mt-5 max-w-3xl leading-relaxed">
    We are based in Melbourne and work with {city} businesses remotely. That is worth stating plainly rather
    than implying an office we do not have. In practice it changes very little: you get a live staging link
    from the first week, calls whenever you want them, and the same fixed price a local agency would charge
    more for.
  </p>
  <p class="text-lg text-slate-600 mt-5 max-w-3xl leading-relaxed">
    We work with businesses across <strong>{subs}</strong> and the wider {stateFull} metro area.
  </p>
</section>

<section class="bg-tint">
  <div class="max-w-4xl mx-auto px-6 py-16 md:py-20">
    <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight">{city} web design questions</h2>
    <div class="mt-10 space-y-8">{faqhtml}</div>
  </div>
</section>

<section class="max-w-6xl mx-auto px-6 py-16 md:py-20">
  <div class="bg-teal rounded-3xl p-10 md:p-16 text-center">
    <h2 class="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Get a fixed price for your {city} project</h2>
    <p class="text-lg mt-5 max-w-2xl mx-auto leading-relaxed" style="color:#BEE1E6">Tell us what the business needs to do and we will send back a written scope with a fixed AUD price within one business day — including an honest answer if a smaller package would do the job.</p>
    <div class="mt-8 flex flex-wrap gap-3 justify-center">
      <a href="/contact/" class="bg-mint teal font-bold px-8 py-4 rounded-full">Get a fixed quote</a>
      <a href="tel:+61413146498" class="border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-full">Call +61 413 146 498</a>
    </div>
  </div>
</section>

<footer class="border-t brd-tint">
  <div class="max-w-6xl mx-auto px-6 py-12">
    <div class="grid md:grid-cols-3 gap-8 text-sm">
      <div>
        <p class="font-bold teal text-base">Build First Site</p>
        <p class="text-slate-600 mt-3">Web design and development for Australian businesses. Fixed AUD prices, modern builds, you own the code.</p>
        <p class="text-slate-600 mt-3"><a href="tel:+61413146498" class="teal font-semibold">+61 413 146 498</a><br><a href="mailto:contact@buildfirstsite.com" class="teal">contact@buildfirstsite.com</a></p>
        <p class="text-slate-500 mt-2">Open 7 days, 7:00am–7:00pm AEST</p>
      </div>
      <div><p class="font-bold">Popular</p><ul class="mt-3 space-y-1.5 text-slate-600">
        <li><a href="/pricing/" class="hover:underline">Pricing</a></li>
        <li><a href="/work/" class="hover:underline">Our work</a></li>
        <li><a href="/blog/website-cost-australia/" class="hover:underline">What a website costs</a></li>
        <li><a href="/tradie-website-design/" class="hover:underline">Tradie websites</a></li>
        <li><a href="/contact/" class="hover:underline">Contact</a></li></ul></div>
      <div><p class="font-bold">Other cities</p><ul class="mt-3 space-y-1.5 text-slate-600">{others}</ul></div>
    </div>
    <p class="text-slate-500 text-xs mt-10">© 2026 Build First Site · Serving {city} and {stateFull}</p>
  </div>
</footer>

</body>
</html>
"""

ALL = ["sydney","melbourne","brisbane","perth","adelaide"]
out = []
for slug, d in CITIES.items():
    city = d["city"]
    faqs = [
      ("How much does a website cost in %s?" % city,
       "Our prices are published: $800 for a three to five page site, $1,900 for up to ten pages, $3,500 for "
       "unlimited pages, and $4,500 for e-commerce or an application. %s agencies commonly quote several times "
       "that for the same scope. Every quote is fixed in writing before work starts." % city),
      ("Are you based in %s?" % city,
       "No. Build First Site is based in Melbourne and works with %s businesses remotely. We say that plainly "
       "rather than implying a local office. You get a live staging link from the first week and calls whenever "
       "you want them, and the price is lower than a local agency with premises to pay for." % city),
      ("How long does a %s website take to build?" % city,
       "Five to seven business days for a three to five page site, two to three weeks for up to ten pages, and "
       "four to six weeks for e-commerce. The biggest variable is how quickly you supply content — builds that "
       "run long are almost always waiting on copy or images, not development."),
      ("Will my %s business rank on Google?" % city,
       "We build SEO into the site rather than selling it separately — semantic HTML, structured data, local "
       "schema and Google Business Profile setup are all included. We cannot promise a specific ranking, and "
       "anyone who does is guessing. What we can promise is that the technical foundation will not be what "
       "holds you back."),
      ("Do I own the website?",
       "Completely. You get the source code, the repository and the hosting account in your name. You can move "
       "to another developer at any time and nothing breaks. Several Australian agencies build on their own CMS "
       "and hosting, which means leaving them requires a rebuild — that is rarely disclosed upfront."),
    ]

    jsonld = json.dumps({"@context":"https://schema.org","@graph":[
      {"@type":"Service",
       "name":"Web design and development in %s" % city,
       "serviceType":"Web design and development",
       "description":"Web design and development for %s businesses. Fixed AUD prices from $800, modern Next.js builds, and you own the code." % city,
       # provider points at the ONE Melbourne entity — we do not create a second business
       "provider":{"@id":"https://buildfirstsite.com/#localbusiness"},
       "areaServed":[{"@type":"City","name":city,
                      "containedInPlace":{"@type":"State","name":d["stateFull"]}}]
                    + [{"@type":"City","name":s} for s in d["suburbs"]],
       "url":"https://buildfirstsite.com/web-design-%s/" % slug,
       "offers":{"@type":"Offer","priceCurrency":"AUD","price":800,
                 "url":"https://buildfirstsite.com/pricing/",
                 "availability":"https://schema.org/InStock"}},
      {"@type":"BreadcrumbList","itemListElement":[
        {"@type":"ListItem","position":1,"name":"Home","item":"https://buildfirstsite.com/"},
        {"@type":"ListItem","position":2,"name":"Web Design %s" % city,
         "item":"https://buildfirstsite.com/web-design-%s/" % slug}]},
      {"@type":"FAQPage","mainEntity":[
        {"@type":"Question","name":q,"acceptedAnswer":{"@type":"Answer","text":a}} for q,a in faqs]},
    ]}, indent=2, ensure_ascii=False)

    rows = "".join(
      '<tr class="border-b brd-tint%s"><td class="p-5 font-semibold">%s</td><td class="p-5">%s</td>'
      '<td class="p-5">%s</td><td class="p-5 text-right font-bold teal text-lg">%s</td></tr>'
      % (" bg-tint" if i==1 else "", n, sc, dl, pr) for i,(n,sc,pr,dl) in enumerate(TIERS))

    inds = "".join(
      '<div class="border brd-tint rounded-2xl p-7"><h3 class="font-bold text-lg">%s</h3>'
      '<p class="text-slate-600 mt-3 leading-relaxed">%s%s</p></div>'
      % (t, b, (' <a href="%s" class="teal underline">Learn more →</a>' % h) if h else "")
      for t,b,h in d["industries"])

    faqhtml = "".join(
      '<div><h3 class="font-bold text-lg">%s</h3><p class="text-slate-600 mt-3 leading-relaxed">%s</p></div>'
      % (q,a) for q,a in faqs)

    others = "".join('<li><a href="/web-design-%s/" class="hover:underline">Web design %s</a></li>'
                     % (o, o.capitalize()) for o in ALL if o != slug)

    html = TPL.format(slug=slug, city=city, lcity=city.lower(), ucity=city.upper(),
      state=d["state"], stateFull=d["stateFull"], region=d["region"],
      angleH2=d["angleH2"], angle=d["angle"], angle2=d["angle2"], competitive=d["competitive"],
      rows=rows, inds=inds, faqhtml=faqhtml, others=others,
      subs=", ".join(d["suburbs"][:-1]) + " and " + d["suburbs"][-1],
      jsonld=jsonld)

    p = pathlib.Path("public/web-design-%s/index.html" % slug)
    p.write_text(html)
    out.append((slug, len(html)))

for s,n in out: print("  wrote public/web-design-%s/index.html  (%d bytes)" % (s,n))
