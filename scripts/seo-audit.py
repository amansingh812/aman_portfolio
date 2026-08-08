#!/usr/bin/env python3
"""
Site-wide SEO audit — buildfirstsite.com

Checks every page against the three jobs Google actually does, plus the one
thing that happens after you rank:

  1. FIND    — is the URL in sitemap.xml? Is it linked from anywhere?
  2. INDEX   — is anything blocking indexing? Is the page thin?
  3. RANK    — H1, schema, canonical, internal links, content depth
  4. CLICK   — meta title <= 60 chars, meta description 140-160

Run:  python3 scripts/seo-audit.py
Exit code 1 if any ERROR-level issue is found.
"""
import pathlib, re, json, sys

ROOT = pathlib.Path(".")
# Read EVERY sitemap file — the site uses a sitemap index with 4 children.
# Checking only sitemap.xml reports false "missing" errors.
SITEMAP_URLS = set()
for _sm in sorted(ROOT.glob("public/sitemap*.xml")):
    if _sm.name == "sitemap-index.xml": continue
    SITEMAP_URLS |= set(re.findall(r'<loc>https://buildfirstsite\.com(/[^<]*)</loc>',
                                   _sm.read_text(errors="ignore")))

STALE_PRICES = {"$600","$2,000","$4,000","$6,500","$8,000","$12,000","$18,000","$150"}
OUR_PRICES   = {"$800","$1,900","$3,500","$4,500","$5,000","$250"}

errors, warns = [], []
def err(p,m):  errors.append((p,m))
def warn(p,m): warns.append((p,m))

# ── collect every internal link so we can find orphans and 404s ──
all_links = set()
def harvest(text):
    all_links.update(re.findall(r'href="(/[a-z0-9\-/]*)"', text))
for f in list(ROOT.glob("public/*/index.html")) + list(ROOT.glob("app/**/*.js")) + list(ROOT.glob("content/*.js")):
    try: harvest(f.read_text(errors="ignore"))
    except Exception: pass

# Dynamic routes: app/services/[slug] and app/industries/[slug] are backed by
# data files. A link is only broken if the slug is absent from BOTH the route
# tree AND the data. Without this the audit reports false positives.
def _slugs(datafile):
    f = ROOT/datafile
    return set(re.findall(r'slug: "([a-z0-9-]+)"', f.read_text())) if f.exists() else set()
SERVICE_SLUGS  = _slugs("content/service-pages.js")
INDUSTRY_SLUGS = _slugs("content/industry-pages.js")

def page_exists(path):
    slug = path.strip("/")
    if not slug: return True
    if (ROOT/f"public/{slug}/index.html").exists(): return True
    if (ROOT/f"app/{slug}").is_dir(): return True
    if slug.startswith("industries/") and slug.split("/",1)[1] in INDUSTRY_SLUGS: return True
    if slug.startswith("services/")   and slug.split("/",1)[1] in SERVICE_SLUGS:  return True
    if slug in SERVICE_SLUGS or slug in INDUSTRY_SLUGS: return True
    return False

# ══ 1. STATIC PAGES ══
for f in sorted(ROOT.glob("public/*/index.html")):
    slug = f.parent.name
    url  = f"/{slug}/"
    s = f.read_text(errors="ignore")
    p = f"public/{slug}"

    # FIND
    if url not in SITEMAP_URLS: err(p, "not in sitemap.xml — Google may never find it")
    if url not in all_links:    warn(p, "orphan: no internal link points here")

    # INDEX
    if re.search(r'name="robots"[^>]*noindex', s): err(p, "noindex meta tag present")
    text = re.sub(r'<(script|style)[^>]*>.*?</\1>', ' ', s, flags=re.S)
    words = len(re.findall(r'\b\w+\b', re.sub(r'<[^>]+>', ' ', text)))
    if words < 400: err(p, f"thin content: ~{words} words")
    elif words < 700: warn(p, f"lightweight: ~{words} words")

    # RANK
    h1 = re.findall(r'<h1[\s>]', s)
    if len(h1) == 0: err(p, "no <h1>")
    elif len(h1) > 1: err(p, f"{len(h1)} <h1> tags — must be exactly 1")
    if 'rel="canonical"' not in s: err(p, "no canonical tag")
    types = []
    for b in re.findall(r'<script type="application/ld\+json">(.*?)</script>', s, re.S):
        try:
            d = json.loads(b); types += [n.get("@type") for n in (d.get("@graph") or [d])]
        except Exception: err(p, "INVALID JSON-LD")
    if not types: warn(p, "no structured data")
    if "BreadcrumbList" not in types: warn(p, "no BreadcrumbList schema")
    biz = [t for t in types if t in ("LocalBusiness","ProfessionalService")]
    if biz and slug != "web-design-melbourne":
        err(p, f"declares {biz[0]} — only web-design-melbourne may declare a business entity")
    internal = len(set(re.findall(r'href="(/[a-z0-9\-/]+)"', s)))
    if internal < 3: warn(p, f"only {internal} internal links out (want >= 3)")

    # CLICK
    t = re.search(r'<title>(.*?)</title>', s, re.S)
    if not t: err(p, "no <title>")
    elif len(t.group(1)) > 60: warn(p, f"title {len(t.group(1))} chars — truncated in results")
    d = re.search(r'name="description" content="(.*?)"', s, re.S)
    if not d: err(p, "no meta description")
    else:
        dl = len(d.group(1))
        if dl > 160: warn(p, f"meta description {dl} chars — truncated")
        elif dl < 120: warn(p, f"meta description {dl} chars — short, wasting space")

    # PRICING DRIFT
    stale = sorted(set(re.findall(r'\$[0-9,]{3,}', s)) & STALE_PRICES)
    if stale and slug not in ("web-design-melbourne","web-design-sydney","web-design-brisbane",
                              "web-design-adelaide","how-much-does-a-website-cost-australia",
                              "wix-vs-custom-website"):
        warn(p, f"possible stale prices: {' '.join(stale)}")

# ══ 2. BLOG POSTS (data-driven) ══
blog = (ROOT/"content/blog.js").read_text()
content = (ROOT/"content/blog-content.js").read_text()
for m in re.finditer(r'slug: "([a-z0-9-]+)"', blog):
    slug = m.group(1); url = f"/blog/{slug}/"; p = f"blog/{slug}"
    if url not in SITEMAP_URLS: err(p, "not in sitemap.xml")
    if f'"{slug}"' not in content: err(p, "no article body in blog-content.js")
    else:
        i = content.index(f'"{slug}"')
        nxt = content.find('\n  "', i)
        while nxt != -1 and not re.match(r'\n  "[a-z0-9-]+": \{', content[nxt:nxt+60]):
            nxt = content.find('\n  "', nxt+1)
        seg = content[i:nxt if nxt != -1 else len(content)]
        w = len(re.findall(r'\b\w+\b', re.sub(r'<[^>]+>', ' ', seg)))
        if w < 700: err(p, f"thin content: ~{w} words")
        elif w < 1200: warn(p, f"lightweight: ~{w} words")
        if '"type": "faq"' not in seg: warn(p, "no FAQ blocks — missing FAQPage schema opportunity")
        if len(re.findall(r'href=\\"/[a-z]', seg)) < 2:
            warn(p, "fewer than 2 internal links in body")
    blk = blog[m.start():m.start()+900]
    mt = re.search(r'metaTitle: "(.*?)"', blk)
    ti = re.search(r'title: "(.*?)"', blk)
    eff = mt.group(1) if mt else (ti.group(1) if ti else "")
    if len(eff) > 60: warn(p, f"meta title {len(eff)} chars — add/shorten metaTitle")
    ex = re.search(r'excerpt: "(.*?)"', blk, re.S)
    if ex and len(ex.group(1)) > 160: warn(p, f"excerpt {len(ex.group(1))} chars — used as meta description")

# ══ 3. BROKEN INTERNAL LINKS ══
for l in sorted(all_links):
    if l.startswith("/blog/") or l in ("/","#"): continue
    if not page_exists(l): err("links", f"broken internal link → {l}")

# ══ REPORT ══
print("═" * 68)
print("  SEO AUDIT — buildfirstsite.com")
print("═" * 68)
if errors:
    print(f"\n  ERRORS ({len(errors)}) — fix these\n")
    for p, m in errors: print(f"    {p:<42} {m}")
if warns:
    print(f"\n  WARNINGS ({len(warns)}) — improve when you can\n")
    for p, m in warns: print(f"    {p:<42} {m}")
if not errors and not warns: print("\n  All clean.\n")
print(f"\n  {len(errors)} errors · {len(warns)} warnings")
print(f"  {len(SITEMAP_URLS)} URLs in sitemap\n")
sys.exit(1 if errors else 0)
