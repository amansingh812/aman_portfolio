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
};

export default nextConfig;
