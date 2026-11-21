/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  // Static export for Cloudflare Pages: `next build` writes plain HTML to out/.
  // The hand-written SEO pages in public/<route>/index.html are copied into out/
  // and served as-is by Cloudflare; trailingSlash keeps "/web-design-sydney/"
  // mapping to its index.html, so no rewrites are needed.
  output: 'export',
  images: { unoptimized: true },
};

export default nextConfig;
