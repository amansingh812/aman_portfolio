/** @type {import('next').NextConfig} */
// Static export for Cloudflare Pages: `next build` writes plain HTML to out/.
// - Hand-written SEO pages in public/<route>/index.html are copied into out/ and
//   served at their clean URLs by Cloudflare (trailingSlash), so the old
//   rewrites() are no longer needed.
// - Redirects live in public/_redirects (Cloudflare format).
// - The API routes live in functions/api/* (Cloudflare Pages Functions).
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  output: 'export',
  images: { unoptimized: true },
};

export default nextConfig;
