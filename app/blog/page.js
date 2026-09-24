/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Layout from "@/components/layout/Layout"
import Image from "next/image"
import Link from "next/link"
import { SITE } from "@/content/site"
import { BLOG_POSTS } from "@/content/blog"
import { GUIDES } from "@/content/guides"
import { fmtDate } from "@/lib/format"

export const metadata = {
    title: "Blog — Web Development Insights Australia",
    description:
        "Practical guides, comparisons and insights on web development, SEO and digital strategy for Australian small businesses.",
    alternates: { canonical: "/blog/" },
    openGraph: {
        title: "Blog | Build First Site",
        description: "Practical guides for Australian businesses on web, SEO and pricing.",
        url: "https://buildfirstsite.com/blog/",
    },
}

/* Helper — nicely format AU dates */

/* Stock backgrounds cycle in order (matches Agon blog-2 template) */
const COLOR_BG = [
    "color-bg-9", "color-bg-6", "color-bg-4", "color-bg-2",
    "color-bg-8", "color-bg-1", "color-bg-5", "color-bg-10", "color-bg-3",
]

/* Author avatars (all 6 stock avatars from /blog/2/) */
const AVATARS = [
    "/assets/imgs/page/blog/2/user-1.png",
    "/assets/imgs/page/blog/2/user-2.png",
    "/assets/imgs/page/blog/2/user-3.png",
    "/assets/imgs/page/blog/2/user-4.png",
    "/assets/imgs/page/blog/2/user-5.png",
    "/assets/imgs/page/blog/2/user-6.png",
]

export default function BlogPage() {
    /* ── Combine BLOG_POSTS + GUIDES into a single feed, newest first ── */
    const guidePosts = GUIDES.map((g) => ({
        slug: g.slug,
        title: g.title,
        excerpt: g.excerpt,
        category: "Guide",
        date: g.datePublished,
        readingTime: g.readingTime,
        href: `/guides/${g.slug}/`,
    }))

    const allPosts = [...BLOG_POSTS, ...guidePosts].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
    )

    /* Featured section = the 2 most recent posts as large cards
       + next 4 as compact list-style cards on the right column     */
    const featuredLarge = allPosts.slice(0, 2)
    const featuredList  = allPosts.slice(2, 6)
    /* Latest News section = the entire feed (up to 9 cards)         */
    const latestNews    = allPosts.slice(0, 9)

    /* ── EVERY article, always ──────────────────────────────────────
       This page used to render at most 9 unique items out of 22, with
       no pagination and no "load more". Thirteen articles were reachable
       only by direct URL — and several of them are sitting in Search
       Console as "Discovered – currently not indexed", which is exactly
       what happens to a page nothing links to. URL Inspection on
       /blog/what-small-business-website-actually-needs/ reported
       "Referring page: None detected" while the post was live and in the
       sitemap.

       The featured cards above are editorial. This list is the index, and
       it is not allowed to be a subset. Grouped so it reads as a library
       rather than a wall of links. */
    const CATEGORY_ORDER = [
        'Pricing Guide', 'Guide', 'Comparison', 'SEO',
        'Industry', 'Accessibility', 'Performance',
    ]
    const grouped = allPosts.reduce((acc, p) => {
        const key = p.category || 'Articles'
        ;(acc[key] ||= []).push(p)
        return acc
    }, {})
    const groups = Object.entries(grouped).sort(
        (a, b) => {
            const ai = CATEGORY_ORDER.indexOf(a[0]), bi = CATEGORY_ORDER.indexOf(b[0])
            return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi) || a[0].localeCompare(b[0])
        }
    )

    return (
        <Layout>

            {/* ── HERO ── */}
            <section className="section-box">
                <div className="banner-hero banner-breadcrums bg-gray-100">
                    <div className="container text-center">
                        <div className="row">
                            <div className="col-lg-12">
                                <h1 className="text-display-3 color-gray-900 mb-20">Our Blog</h1>
                                <p className="text-heading-6 color-gray-600 mb-20">
                                    Practical articles on web development, SEO, pricing and digital strategy
                                    <br className="d-lg-block d-none" />
                                    written for Australian business owners, not developers.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FEATURED ARTICLES (2 large + 4 list) ── */}
            <section className="section-box">
                <div className="container mt-130">
                    <div className="row">
                        <div className="col-lg-1 col-sm-1 col-12" />
                        <div className="col-lg-10 col-sm-10 col-12 text-center">
                            <h2 className="text-heading-1 color-gray-900 mb-10">Featured Articles</h2>
                            <p className="text-body-lead-large color-gray-600 mt-20">
                                The most-read posts on the blog right now
                            </p>
                        </div>
                        <div className="col-lg-1 col-sm-1 col-12" />
                    </div>
                </div>

                <div className="container mt-90">
                    <div className="row">
                        {/* ── two large cards ── */}
                        {featuredLarge.map((post, i) => (
                            <div className="col-lg-4 col-sm-6 pr-30 mb-50" key={post.slug}>
                                <div className="card-grid-style-4">
                                    <div className={`grid-4-img mb-20${i === 1 ? ' color-bg-2' : ''}`}>
                                        <Link href={post.href}>
                                            <Image
                                                width={0} height={0} sizes="100vw"
                                                style={{ width: "auto", height: "auto" }}
                                                src={`/assets/imgs/page/blog/2/img-${i + 1}.png`}
                                                alt={post.title}
                                            />
                                        </Link>
                                    </div>
                                    <Link href={post.href} className="text-heading-4">{post.title}</Link>
                                    <p className="text-body-text color-gray-500">{post.excerpt}</p>
                                    <div className="blog-img-user">
                                        <div className="img-user img-user-round">
                                            <Image
                                                width={0} height={0} sizes="100vw"
                                                style={{ width: "auto", height: "auto" }}
                                                src={AVATARS[i]}
                                                alt="Build First Site"
                                            />
                                        </div>
                                        <h4 className="text-heading-6 color-gray-900">Build First Site</h4>
                                        <p className="text-body-small color-gray-500">{fmtDate(post.date)}</p>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* ── list-style column ── */}
                        <div className="col-lg-4 col-sm-12 pr-30 mb-50">
                            {featuredList.map((post, i) => (
                                <div className="card-list-style-1" key={post.slug}>
                                    <Link href={post.href} className="text-heading-6">{post.title}</Link>
                                    <div className="blog-img-user">
                                        <div className="img-user img-user-round">
                                            <Image
                                                width={0} height={0} sizes="100vw"
                                                style={{ width: "auto", height: "auto" }}
                                                src={AVATARS[(i + 2) % AVATARS.length]}
                                                alt="Build First Site"
                                            />
                                        </div>
                                        <h4 className="text-body-lead color-gray-500">Build First Site</h4>
                                        <p className="text-body-small color-gray-500">{fmtDate(post.date)}</p>
                                    </div>
                                    <div className={`style-1-img ${COLOR_BG[i % COLOR_BG.length]}`}>
                                        <Link href={post.href}>
                                            <Image
                                                width={0} height={0} sizes="100vw"
                                                style={{ width: "auto", height: "auto" }}
                                                src="/assets/imgs/page/blog/2/img-news-1.png"
                                                alt={post.title}
                                            />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── LATEST NEWS (grid of everything, up to 9) ── */}
            <section className="section-box">
                <div className="container mt-100">
                    <div className="row">
                        <div className="col-lg-1 col-sm-1 col-12" />
                        <div className="col-lg-10 col-sm-10 col-12 text-center">
                            <h2 className="text-heading-1 color-gray-900 mb-10">Latest posts</h2>
                            <p className="text-body-lead-large color-gray-600 mt-20">
                                Every article, sorted by newest
                            </p>
                        </div>
                        <div className="col-lg-1 col-sm-1 col-12" />
                    </div>
                </div>

                <div className="container mt-90">
                    <div className="row">
                        {latestNews.map((post, i) => (
                            <div className="col-lg-4 col-sm-12 pr-30 mb-50" key={`grid-${post.slug}`}>
                                <div className="card-grid-style-4">
                                    <span className="tag-dot">{post.category}</span>
                                    <Link href={post.href} className="text-heading-4">{post.title}</Link>
                                    <div className={`grid-4-img ${COLOR_BG[i % COLOR_BG.length]}`}>
                                        <Link href={post.href}>
                                            <Image
                                                width={0} height={0} sizes="100vw"
                                                style={{ width: "auto", height: "auto" }}
                                                src={`/assets/imgs/page/homepage1/img-news-${(i % 9) + 1}.png`}
                                                alt={post.title}
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-20 mb-30 text-center">
                        <Link href="/contact/" className="btn btn-black icon-arrow-right-white">
                            Suggest a topic
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── EVERY ARTICLE — the actual index ── */}
            <section className="section-box mt-40 mb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <h2 className="text-heading-3 color-gray-900 mb-10">Every guide</h2>
                            <p className="text-body-text color-gray-600 mb-40">
                                All {allPosts.length} articles and guides, grouped by topic.
                            </p>
                            {groups.map(([category, posts]) => (
                                <div className="mb-40" key={category}>
                                    <h3 className="text-heading-5 color-gray-900 mb-15">{category}</h3>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                        {posts.map((post) => (
                                            <li
                                                key={`idx-${post.href}`}
                                                className="pt-15 pb-15"
                                                style={{ borderTop: '1px solid #E4E7EC' }}
                                            >
                                                <Link href={post.href} className="text-heading-6 color-gray-900">
                                                    {post.title}
                                                </Link>
                                                {post.excerpt && (
                                                    <p className="text-body-text color-gray-600 mt-5 mb-0">
                                                        {post.excerpt}
                                                    </p>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA / NEWSLETTER-STYLE BOX ── */}
            <section className="section-box overflow-visible mb-100">
                <div className="container mt-100">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <div className="bg-2 box-newsletter position-relative">
                                <div className="row">
                                    <div className="col-lg-5 col-md-7">
                                        <span className="text-body-capitalized color-gray-500 text-uppercase">Free consultation</span>
                                        <h4 className="text-heading-2 mb-10 mt-10">Ready to build?</h4>
                                        <p className="text-body-text color-gray-500">
                                            Reading is one thing — building is another. Book a free
                                            30-minute call and we&apos;ll turn your idea into a written
                                            scope + AUD price within 24 hours.
                                        </p>
                                        <div className="mt-30">
                                            <a data-loc="blog-hub" href={SITE.calendly} target="_blank" rel="noopener noreferrer"
                                                className="btn btn-black icon-arrow-right-white mr-15">
                                                Book a free call
                                            </a>
                                            <Link href="/contact/" className="btn btn-link icon-arrow-right color-gray-900">
                                                Send a message
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-7 col-md-5 mt-30 mt-lg-0 mt-md-30 mt-sm-30 position-relative text-end">
                                        <div className="block-chart shape-1">
                                            <Image width={0} height={0} sizes="100vw" style={{ width: "auto", height: "auto" }}
                                                src="/assets/imgs/template/chart.png" alt="Analytics" />
                                        </div>
                                        <Image width={0} height={0} sizes="100vw" style={{ width: "auto", height: "auto" }}
                                            className="img-responsive img-newsletter"
                                            src="/assets/imgs/template/img-newsletter.png" alt="Book a call" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </Layout>
    )
}
