/**
 * Blog post data — the 7 real, published static blog posts.
 * These posts live as hand-authored HTML under /public/blog/<slug>/index.html
 * and are already ranking in Australian organic search. Do NOT rewrite the
 * static HTML from this file; treat this as an index used by the /blog/
 * listing page only.
 */

export const BLOG_POSTS = [
  {
    slug: "7-website-mistakes-australia",
    title: "7 Website Mistakes Australian Small Businesses Make (And How to Fix Them)",
    excerpt: "The 7 most common website mistakes we see across Australian small business sites in 2026 — slow load times, no mobile click-to-call, missing Google reviews and more. With specific fixes for each.",
    category: "Guide",
    date: "2026-07-15",
    readingTime: "8 min read",
    href: "/blog/7-website-mistakes-australia/",
  },
  {
    slug: "website-cost-australia",
    title: "How Much Does a Website Cost in Australia? (2026 Price Guide)",
    excerpt: "A clear 2026 breakdown of website costs in Australia — DIY, freelancer and agency prices, ongoing costs, and what actually drives the price. No jargon, real AUD figures.",
    category: "Pricing Guide",
    date: "2026-07-20",
    readingTime: "7 min read",
    href: "/blog/website-cost-australia/",
  },
  {
    slug: "signs-website-losing-customers",
    title: "5 Signs Your Business Website Is Losing You Customers (2026)",
    excerpt: "Visitors but no enquiries? One of these five fixable issues is usually why — slow load, bad mobile, unclear message, weak CTAs, or no trust signals. Here's how to fix each.",
    category: "Conversion",
    date: "2026-07-25",
    readingTime: "6 min read",
    href: "/blog/signs-website-losing-customers/",
  },
  {
    slug: "small-business-website-checklist",
    title: "Small Business Website Checklist for 2026 (Australia)",
    excerpt: "Everything a small business website actually needs in 2026 — a practical, no-fluff checklist covering pages, mobile, speed, SEO, trust and lead capture. Australian-focused.",
    category: "Checklist",
    date: "2026-07-28",
    readingTime: "5 min read",
    href: "/blog/small-business-website-checklist/",
  },
  {
    slug: "wordpress-vs-custom-website",
    title: "WordPress vs Custom Website: Which Is Right for Your Business? (2026)",
    excerpt: "WordPress or a custom-coded site in 2026 — real cost, speed, SEO, security and maintenance differences for Australian businesses. An honest comparison to help you choose.",
    category: "Comparison",
    date: "2026-08-01",
    readingTime: "7 min read",
    href: "/blog/wordpress-vs-custom-website/",
  },
  {
    slug: "how-long-to-build-a-website",
    title: "How Long Does It Take to Build a Website? (2026 Australia Guide)",
    excerpt: "Realistic timelines for a landing page, business site and e-commerce store in 2026 — plus what speeds it up or slows it down.",
    category: "Guide",
    date: "2026-08-03",
    readingTime: "6 min read",
    href: "/blog/how-long-to-build-a-website/",
  },
  {
    slug: "tradie-website-cost",
    title: "How Much Does a Tradie Website Cost in Australia? (2026)",
    excerpt: "What a tradie website costs in Australia in 2026 — for plumbers, electricians, builders and more. Real prices, what to include, and how a good site brings in more jobs.",
    category: "Pricing Guide",
    date: "2026-08-05",
    readingTime: "6 min read",
    href: "/blog/tradie-website-cost/",
  },
];

export function getBlogPost(slug) {
  return BLOG_POSTS.find((x) => x.slug === slug);
}
