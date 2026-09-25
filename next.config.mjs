import fs from 'node:fs';
import path from 'node:path';

// ─── Serve hand-authored static SEO pages from /public at clean URLs ──────────
// Next.js does not automatically resolve "/foo/" to "/public/foo/index.html"
// (Vite/Express did). We scan /public recursively for every directory that
// contains an index.html and rewrite its clean URL to that file. This keeps all
// 27 city/service/blog/niche pages serving exactly as before, byte-for-byte.
function collectStaticIndexRoutes(dir, base = '') {
  const routes = [];
  let entries = [];
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return routes;
  }
  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const abs = path.join(dir, entry.name);
    const rel = `${base}/${entry.name}`;
    if (fs.existsSync(path.join(abs, 'index.html'))) {
      routes.push(rel);
    }
    routes.push(...collectStaticIndexRoutes(abs, rel));
  }
  return routes;
}

const publicDir = path.join(process.cwd(), 'public');
// Skip the template's asset tree — it contains no pages and scanning it is slow.
const staticRoutes = collectStaticIndexRoutes(publicDir).filter(
  (r) => !r.startsWith('/assets')
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  async rewrites() {
    // beforeFiles: take priority so "/web-design-sydney/" maps to the static HTML
    return {
      beforeFiles: staticRoutes.flatMap((route) => [
        { source: route, destination: `${route}/index.html` },
        { source: `${route}/`, destination: `${route}/index.html` },
      ]),
    };
  },
  async redirects() {
    // Off-strategy US city pages (Denver, Phoenix, Nashville) removed during
    // the static-HTML migration (CLAUDE.md §2/§4 — AU-first, no real US
    // presence, stale non-AUD-aligned pricing). 301 to /pricing/ rather than
    // 404 to preserve whatever link/traffic value they had.
    return [
      // /join/ removed Aug 2026. The careers copy ('we bring contractors in
      // project by project') was being quoted verbatim in cold freelancer
      // outreach and contradicted the direct-access positioning. 301 rather
      // than 404 — the URL was indexed and footer-linked sitewide.
      { source: '/join/', destination: '/about/', permanent: true },
      { source: '/web-design-denver/', destination: '/pricing/', permanent: true },
      { source: '/web-design-phoenix/', destination: '/pricing/', permanent: true },
      { source: '/web-design-nashville/', destination: '/pricing/', permanent: true },
      // Old static pages from the pre-migration sitemap. GSC still reports
      // them as 404 (25 Sep 2026); send them to the matching service page.
      { source: '/ai-chatbot-development-australia/', destination: '/services/ai-automation/', permanent: true },
      { source: '/app-development-australia/', destination: '/services/mobile-app-development/', permanent: true },

      // ── Agon template demo pages, removed 21 Sep 2026 ──────────────────
      // Nine routes shipped with the Agon template and were never stripped
      // (the earlier "strip unused demo pages" pass missed them). They were
      // live on the production domain, crawlable, and carried:
      //   - a "Join Our Team" CTA, which is the likeliest current source of
      //     the freelancer cold outreach — /join/ is gone but this was not
      //   - "+count Years in Business", "Countries / Offices", "Constant
      //     Clients" counters implying an office network and a headcount
      //   - 40 stock-photo staff profiles ("Theresa Webb, Marketing CEO")
      //   - testimonials attributed to Louis Vuitton, Nintendo, Starbucks
      //     and Bank of America
      //   - lorem ipsum body copy
      //
      // The fabricated testimonials and client names are the serious part:
      // CLAUDE.md §1 forbids them outright because Australian Consumer Law
      // treats invented testimonials as misleading conduct. They were not
      // in any sitemap and not linked from the real nav, but they were
      // publicly reachable, which is what matters.
      //
      // 301 rather than 404 — Google had crawled at least /page-terms.
      { source: '/page-about-1/', destination: '/about/', permanent: true },
      { source: '/page-service-1/', destination: '/services/', permanent: true },
      { source: '/page-contact/', destination: '/contact/', permanent: true },
      { source: '/page-faqs-1/', destination: '/contact/', permanent: true },
      { source: '/page-pricing-1/', destination: '/pricing/', permanent: true },
      { source: '/page-terms/', destination: '/terms/', permanent: true },
      { source: '/blog-1/', destination: '/blog/', permanent: true },
      { source: '/blog-2/', destination: '/blog/', permanent: true },
      { source: '/blog-single/', destination: '/blog/', permanent: true },
    ];
  },
};

export default nextConfig;
