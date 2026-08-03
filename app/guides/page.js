/**
 * /guides/ — Guides hub.
 *
 * Reuses the Agon "blog-1" grid layout as the temporary shell. Content will be
 * replaced with the 4 guides from content/guides.js per docs/CONTENT-PLAN.md §10.
 */
export { default } from "../blog-1/page";

export const metadata = {
    title: "Guides — Practical Web Design & SEO Advice for Australian Business",
    description:
        "How to hire a web developer, DIY builder vs custom, freelance rates in Australia, SEO fundamentals. No jargon, no sales pitch.",
    alternates: { canonical: "/guides/" },
};
