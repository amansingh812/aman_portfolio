"""
Generates the industry landing pages under public/<slug>/index.html.

⚠️  SCHEMA RULE: these pages emit `Service` only — never LocalBusiness or
    ProfessionalService. We have ONE verified business location (Melbourne).
    Industry pages are national and must not create competing business
    entities. `provider` points at the single Melbourne @id.

Prices are a COPY of content/pricing.js (static HTML cannot import JS).
If you change pricing.js, re-run this script.
"""
import pathlib, json

TIERS = [("Starter","3–5 pages","$800","5–7 days"),
         ("Business","Up to 10 pages","$1,900","2–3 weeks"),
         ("Unlimited","Unlimited pages","$3,500","3–4 weeks"),
         ("E-Commerce","Online store","$4,500","4–6 weeks"),
         ("Application","Web or mobile app","$4,500","4–8 weeks"),
         ("Custom Software","Scoped per project","from $5,000","Scoped")]

PAGES = {
"tradie-website-design": dict(
 name="Tradie", h1a="Websites for Australian tradies,",
 kw="tradie website design, website for tradies, plumber website australia, electrician website design, builder website australia",
 desc="Tradie website design from $800. Tap-to-call, quote forms and service-area pages for plumbers, electricians and builders. Fixed AUD prices, you own the code.",
 lead="Most tradie websites are built to look nice. Yours needs to turn someone standing in a flooded laundry into a phone call — everything else is decoration.",
 probH2="What most tradie websites get wrong",
 probs=[("The number is hard to find","Your visitor is on a phone, one-handed, in a hurry. If the phone number is not tappable and visible without scrolling, you have lost the job to whoever ranked below you."),
        ("It is slow on mobile data","A site that takes six seconds on 4G loses roughly half its visitors before anything appears. Emergency trades lose more."),
        ("No service area stated","\"We cover Melbourne's northern suburbs — Preston, Reservoir, Coburg\" beats a vague map graphic. People want to know you come to them before they call."),
        ("Stock photos of someone else's van","Twelve real job photos from your phone out-convert professional stock every time. People are checking whether you do work like theirs.")],
 mustH2="What we build into every tradie site",
 musts=["Tap-to-call button fixed in the header on mobile","Service-area pages for the suburbs you actually cover",
        "Quote form that asks job type, suburb, urgency and photos","Before-and-after gallery from your own jobs",
        "Licence and insurance numbers displayed, not buried","Google reviews pulled onto the page and linked so they verify",
        "Loads in under three seconds on 4G","Google Business Profile setup, which for trades often out-earns the website itself"],
 honestH2="When you probably do not need us yet",
 honest="If you have just started and have no Google Business Profile, set that up first. It is free, it puts you on Maps, and for a lot of trades it generates more calls in month one than a website will. We would rather tell you that than sell you something you do not need yet. Come back when you are competing for jobs people compare before calling.",
 faqs=[("How much does a tradie website cost?","A three to five page tradie site is $800, up to ten pages with service-area pages is $1,900, and unlimited pages is $3,500. Add a booking system from $700. Every quote is fixed in writing before work starts. Full detail in our tradie website cost guide."),
       ("Do tradies actually need a website?","Not always, and not first. A free Google Business Profile should come before a website for a brand new sole trader. A website earns its keep once you are competing for jobs where people compare two or three tradies, quoting work over $5,000, or paying for ads and sending that traffic to a Facebook page."),
       ("How long does a tradie website take?","Five to seven business days for a three to five page site, two to three weeks for a larger one. The usual delay is waiting on job photos and service descriptions, not development."),
       ("Will it get me on the first page of Google?","A website alone will not. Ranking depends on your Google Business Profile, reviews and links, and takes months. Anyone guaranteeing page one is guessing. What we can do is remove the technical reasons Google might ignore you — speed, structure, schema and mobile usability are included in every build."),
       ("Do I own the site?","Completely — source code, repository and hosting account in your name. Several Australian agencies build on their own systems you cannot leave without a rebuild. Ask any agency you approach whether you take the site with you if you go.")],
 links=[("/blog/tradie-website-cost/","Tradie website cost guide"),("/web-design-melbourne/","Web design Melbourne"),("/pricing/","All pricing")]),

"restaurant-website-design": dict(
 name="Restaurant", h1a="Websites for cafés and restaurants,",
 kw="restaurant website design, cafe website design australia, restaurant web design melbourne, online booking website restaurant",
 desc="Restaurant and café website design from $800. Readable mobile menus, direct bookings that skip the commission, and you own the code. Fixed AUD prices.",
 lead="Every booking taken through your own website is a booking you did not pay commission on. That is the whole business case, and most venue websites are not set up to capture it.",
 probH2="What most café and restaurant sites get wrong",
 probs=[("The menu is a PDF","A PDF menu on a phone means pinching and zooming. People give up and check the platform listing instead — where a competitor is one tap away. Menus should be real web pages."),
        ("Bookings go through a platform","Every booking through a third party carries a fee, and the customer relationship belongs to them. A direct booking on your own site costs nothing per cover."),
        ("Opening hours are wrong or missing","The single most-searched thing about a venue. If Google and your site disagree, people arrive to a closed door and leave a review about it."),
        ("No photos of the actual food","Stock imagery of generic plated food reads as dishonest. Real photos of your dishes, even from a phone, convert better.")],
 mustH2="What we build into every venue site",
 musts=["Menu as real web pages, readable on a phone without zooming","Direct booking that skips per-cover commission",
        "Opening hours synced with your Google Business Profile","Tap-to-call and one-tap directions",
        "Real photos of your food and room","Function and event enquiry form",
        "Dietary and allergen information that is easy to find","Schema markup so menus and hours appear in Google results"],
 honestH2="Being straight about booking platforms",
 honest="A direct booking system does not mean you should leave the platforms. They bring genuine discovery traffic, particularly for new venues. What it means is that regulars who already know you should be able to book on your own site rather than costing you a fee every visit. Most venues do best running both and gradually shifting repeat customers to direct.",
 faqs=[("How much does a restaurant website cost in Australia?","A three to five page café site is $800, and up to ten pages with a booking system is $1,900. Online ordering with payments is $4,500. Every quote is fixed in writing before work starts."),
       ("Can I take bookings without paying commission?","Yes. A direct booking system on your own site has no per-cover fee. Most venues keep the platforms for discovery and move repeat customers to direct booking, which is where the savings compound."),
       ("Should my menu be a PDF?","No. PDF menus require pinching and zooming on a phone, are often unreadable by screen readers, and cannot show in Google results. Menus should be real web pages with proper markup so dishes and prices can be indexed."),
       ("How long does a restaurant website take?","Five to seven business days for a simple café site, two to three weeks with booking integration. Food photography is the usual delay — if you already have photos it moves faster."),
       ("Do I own the website?","Completely — source code, repository and hosting account in your name. You can move to another developer at any time and nothing breaks.")],
 links=[("/web-design-melbourne/","Web design Melbourne"),("/blog/website-cost-australia/","What a website costs"),("/pricing/","All pricing")]),

"real-estate-website-design": dict(
 name="Real Estate", h1a="Websites for agents and agencies,",
 kw="real estate website design australia, real estate agent website, property website design, buyers agent website australia",
 desc="Real estate website design from $800. Property listings, agent profiles and appraisal forms that generate leads. Fixed AUD prices, you own the code.",
 lead="Your listings already appear on the major portals. Your website has a different job: convincing a vendor that you are the agent to hand the listing to in the first place.",
 probH2="What most agent websites get wrong",
 probs=[("They compete with the portals","Trying to out-search realestate.com.au is a losing fight. Your site should win the vendor, not the buyer — buyers are already on the portals."),
        ("No appraisal capture","The highest-value action on an agent website is a vendor requesting an appraisal. Most sites bury it or do not offer it at all."),
        ("Franchise template with no local proof","If your site looks identical to every other office in the network, nothing tells a vendor why you specifically."),
        ("Sold results not shown","Vendors want evidence you sell in their street. Recent sold listings with real numbers do more than any amount of copy.")],
 mustH2="What we build into every agent site",
 musts=["Appraisal request form as the primary action","Recent sold results with suburb and outcome",
        "Agent profiles that read like people, not directory entries","Suburb pages for the areas you genuinely work",
        "Property listings synced from your CRM where possible","Testimonials from real vendors, verifiable",
        "Fast mobile pages — most property browsing is on a phone","Schema markup for listings and agent profiles"],
 honestH2="Where a website will not help",
 honest="If your problem is buyer volume, a website is the wrong tool — the portals own that traffic and always will. A website earns its keep on the vendor side, where the decision is about trust rather than inventory. If you are winning plenty of listings and just need more buyers, spend the money on the portals instead. We would rather say that than take the project.",
 faqs=[("How much does a real estate website cost in Australia?","A three to five page agent site is $800, up to ten pages with suburb pages and appraisal forms is $1,900, and unlimited pages is $3,500. CRM integration for live listings is quoted as a custom build from $4,500."),
       ("Can my listings sync automatically from my CRM?","Usually yes, depending on your CRM and whether it exposes an API or feed. This is quoted as a custom build because the work depends entirely on the system you already use. We will tell you upfront if your CRM makes it impractical."),
       ("Should I build suburb pages for every area I cover?","Only for suburbs where you genuinely work and have sold. Thirty near-identical suburb pages is the scaled-content pattern Google penalises, and a site-wide demotion would take your good pages with it. Fewer, better pages win."),
       ("How long does an agent website take?","Five to seven business days for a simple site, two to three weeks with suburb pages and forms. CRM integration adds time depending on the system."),
       ("Do I own the website?","Completely — source code, repository and hosting account in your name, independent of your franchise or CRM provider.")],
 links=[("/web-design-melbourne/","Web design Melbourne"),("/blog/website-cost-australia/","What a website costs"),("/pricing/","All pricing")]),
}

TPL = """<!DOCTYPE html>
<html lang="en-AU">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">

<!--
  /{slug}/ — {name} industry landing page.

  LEGACY STATIC page (CLAUDE.md §2) that already ranks — edit in place.
  Generated by scripts/generate-industry-pages.py — edit that, not this file.

  ⚠️  SCHEMA: emits `Service` ONLY, never LocalBusiness/ProfessionalService.
      We have ONE verified business location (Melbourne). Industry pages are
      national and must not create competing entities. `provider` points at
      the single Melbourne @id.

  Prices must match content/pricing.js. If they diverge, pricing.js wins.
-->

<title>{title}</title>
<meta name="description" content="{desc}">
<meta name="keywords" content="{kw}">
<link rel="canonical" href="https://buildfirstsite.com/{slug}/">
<meta property="og:type" content="website">
<meta property="og:title" content="{ogtitle}">
<meta property="og:description" content="{desc}">
<meta property="og:url" content="https://buildfirstsite.com/{slug}/">
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
    <span class="inline-block bg-white teal text-xs font-bold tracking-widest px-4 py-2 rounded-full">{uname}</span>
    <h1 class="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mt-6 max-w-3xl">
      {h1a}<br><span class="teal">from $800.</span>
    </h1>
    <p class="text-lg md:text-xl text-slate-600 mt-6 max-w-2xl leading-relaxed">{lead}</p>
    <div class="mt-8 flex flex-wrap gap-3">
      <a href="/contact/" class="bg-teal text-white font-semibold px-7 py-3.5 rounded-full">Get a fixed quote</a>
      <a href="tel:+61413146498" class="bg-white border-2 brd-tint teal font-semibold px-7 py-3.5 rounded-full">Call now</a>
    </div>
    <p class="text-sm text-slate-500 mt-6">Fixed AUD prices · Quote within one business day · You own the code</p>
  </div>
</section>

<section class="max-w-6xl mx-auto px-6 py-16 md:py-20">
  <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight">{probH2}</h2>
  <div class="grid md:grid-cols-2 gap-6 mt-10">{probhtml}</div>
</section>

<section class="bg-tint">
  <div class="max-w-6xl mx-auto px-6 py-16 md:py-20">
    <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight">{mustH2}</h2>
    <ul class="grid md:grid-cols-2 gap-x-10 gap-y-4 mt-10">{musthtml}</ul>
  </div>
</section>

<section class="max-w-6xl mx-auto px-6 py-16 md:py-20">
  <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight">Pricing, published</h2>
  <p class="text-lg text-slate-600 mt-5 max-w-3xl">Priced by size, not by features. Every package includes custom design, a CMS you can edit, SEO built in, and full ownership of the code.</p>
  <div class="bg-white rounded-2xl border brd-tint mt-10 overflow-hidden">
    <table class="w-full text-left">
      <thead class="border-b-2 border-slate-900"><tr>
        <th class="p-5 text-sm font-bold">Package</th><th class="p-5 text-sm font-bold">Scope</th>
        <th class="p-5 text-sm font-bold">Delivery</th><th class="p-5 text-sm font-bold text-right">Price</th>
      </tr></thead>
      <tbody class="text-slate-700">{rows}</tbody>
    </table>
  </div>
  <p class="text-slate-600 mt-6">Ongoing <strong>Care + SEO is $250/month</strong> — optional, cancel with 30 days notice. <a href="/pricing/" class="teal font-semibold underline">See what's included →</a></p>
  <p class="text-sm text-slate-500 mt-3">All prices AUD · GST not included · Hosting included for year one</p>
</section>

<section class="bg-tint">
  <div class="max-w-4xl mx-auto px-6 py-16 md:py-20">
    <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight">{honestH2}</h2>
    <p class="text-lg text-slate-600 mt-5 leading-relaxed">{honest}</p>
  </div>
</section>

<section class="max-w-6xl mx-auto px-6 py-16 md:py-20">
  <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight">Sites we have actually shipped</h2>
  <p class="text-lg text-slate-600 mt-5 max-w-3xl">Real client work on their own domains. Open any of them and run a speed test.</p>
  <div class="grid md:grid-cols-2 gap-5 mt-10">
    <a href="https://www.hsracegear.com" target="_blank" rel="noopener" class="border brd-tint rounded-2xl p-6 block"><h3 class="font-bold">HS Race Gear</h3><p class="text-slate-600 text-sm mt-2">Motorsport e-commerce · large product catalogue</p><span class="teal text-sm font-semibold mt-3 inline-block">hsracegear.com →</span></a>
    <a href="https://mobilearmour.com.au" target="_blank" rel="noopener" class="border brd-tint rounded-2xl p-6 block"><h3 class="font-bold">Mobile Armour</h3><p class="text-slate-600 text-sm mt-2">Australian retail · speed and SEO rebuild</p><span class="teal text-sm font-semibold mt-3 inline-block">mobilearmour.com.au →</span></a>
  </div>
</section>

<section class="bg-tint">
  <div class="max-w-4xl mx-auto px-6 py-16 md:py-20">
    <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight">Common questions</h2>
    <div class="mt-10 space-y-8">{faqhtml}</div>
  </div>
</section>

<section class="max-w-6xl mx-auto px-6 py-16 md:py-20">
  <div class="bg-teal rounded-3xl p-10 md:p-16 text-center">
    <h2 class="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Get a fixed price</h2>
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
      </div>
      <div><p class="font-bold">Related</p><ul class="mt-3 space-y-1.5 text-slate-600">{linkhtml}</ul></div>
      <div><p class="font-bold">Cities</p><ul class="mt-3 space-y-1.5 text-slate-600">
        <li><a href="/web-design-melbourne/" class="hover:underline">Web design Melbourne</a></li>
        <li><a href="/web-design-sydney/" class="hover:underline">Web design Sydney</a></li>
        <li><a href="/web-design-brisbane/" class="hover:underline">Web design Brisbane</a></li>
        <li><a href="/web-design-perth/" class="hover:underline">Web design Perth</a></li>
        <li><a href="/web-design-adelaide/" class="hover:underline">Web design Adelaide</a></li></ul></div>
    </div>
    <p class="text-slate-500 text-xs mt-10">© 2026 Build First Site · Australia</p>
  </div>
</footer>
</body>
</html>
"""

rows = "".join(
  '<tr class="border-b brd-tint%s"><td class="p-5 font-semibold">%s</td><td class="p-5">%s</td>'
  '<td class="p-5">%s</td><td class="p-5 text-right font-bold teal text-lg">%s</td></tr>'
  % (" bg-tint" if i==1 else "", n, sc, dl, pr) for i,(n,sc,pr,dl) in enumerate(TIERS))

TITLES = {"tradie-website-design":"Tradie Website Design | From $800",
          "restaurant-website-design":"Restaurant Website Design | From $800",
          "real-estate-website-design":"Real Estate Website Design | From $800"}

for slug, d in PAGES.items():
    jsonld = json.dumps({"@context":"https://schema.org","@graph":[
      {"@type":"Service","name":TITLES[slug].split(" |")[0],
       "serviceType":"Web design and development",
       "description":d["desc"],
       "provider":{"@id":"https://buildfirstsite.com/#localbusiness"},
       "areaServed":{"@type":"Country","name":"Australia"},
       "url":"https://buildfirstsite.com/%s/" % slug,
       "offers":{"@type":"Offer","priceCurrency":"AUD","price":800,
                 "url":"https://buildfirstsite.com/pricing/",
                 "availability":"https://schema.org/InStock"}},
      {"@type":"BreadcrumbList","itemListElement":[
        {"@type":"ListItem","position":1,"name":"Home","item":"https://buildfirstsite.com/"},
        {"@type":"ListItem","position":2,"name":TITLES[slug].split(" |")[0],
         "item":"https://buildfirstsite.com/%s/" % slug}]},
      {"@type":"FAQPage","mainEntity":[
        {"@type":"Question","name":q,"acceptedAnswer":{"@type":"Answer","text":a}}
        for q,a in d["faqs"]]},
    ]}, indent=2, ensure_ascii=False)

    probhtml = "".join('<div class="border brd-tint rounded-2xl p-7"><h3 class="font-bold text-lg">%s</h3>'
                       '<p class="text-slate-600 mt-3 leading-relaxed">%s</p></div>' % (t,b)
                       for t,b in d["probs"])
    musthtml = "".join('<li class="text-slate-700 leading-relaxed">✓&nbsp; %s</li>' % m for m in d["musts"])
    faqhtml  = "".join('<div><h3 class="font-bold text-lg">%s</h3>'
                       '<p class="text-slate-600 mt-3 leading-relaxed">%s</p></div>' % (q,a)
                       for q,a in d["faqs"])
    linkhtml = "".join('<li><a href="%s" class="hover:underline">%s</a></li>' % (h,t) for h,t in d["links"])

    html = TPL.format(slug=slug, name=d["name"], uname=d["name"].upper(),
      title=TITLES[slug] + " | Build First Site", ogtitle=TITLES[slug],
      desc=d["desc"], kw=d["kw"], h1a=d["h1a"], lead=d["lead"],
      probH2=d["probH2"], probhtml=probhtml, mustH2=d["mustH2"], musthtml=musthtml,
      honestH2=d["honestH2"], honest=d["honest"], faqhtml=faqhtml, linkhtml=linkhtml,
      rows=rows, jsonld=jsonld)
    pathlib.Path("public/%s/index.html" % slug).write_text(html)
    print("  wrote public/%s/index.html  (%d bytes, title %d chars)" % (slug, len(html), len(TITLES[slug])+19))
