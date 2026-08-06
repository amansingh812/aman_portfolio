/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Layout from "@/components/layout/Layout"
import BlogContent from "@/components/blog/BlogContent"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { BLOG_POSTS, getBlogPost } from "@/content/blog"
import { BLOG_CONTENT } from "@/content/blog-content"
import { SITE } from "@/content/site"

export const dynamicParams = false

export function generateStaticParams() {
    return BLOG_POSTS.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }) {
    const post = getBlogPost(params.slug)
    if (!post) return {}
    return {
        title: `${post.title} | Build First Site`,
        description: post.excerpt,
        alternates: { canonical: `/blog/${post.slug}/` },
        openGraph: {
            title: post.title,
            description: post.excerpt,
            url: `https://buildfirstsite.com/blog/${post.slug}/`,
            type: "article",
        },
    }
}

const fmtDate = (d) =>
    new Date(d).toLocaleDateString("en-AU", { year: "numeric", month: "long", day: "numeric" })

export default async function BlogPost({ params }) {
    const { slug } = await params
    const post = getBlogPost(slug)
    if (!post) notFound()

    const article = BLOG_CONTENT[slug] || { lead: post.excerpt, content: [] }

    /* Related posts = same category first, then anything else, up to 3 */
    const related = BLOG_POSTS
        .filter((p) => p.slug !== slug)
        .sort((a, b) => (a.category === post.category ? -1 : 1))
        .slice(0, 3)

    return (
        <Layout>
            <div>

                {/* ── HERO with title + tag ── */}
                <section className="section-box">
                    <div className="banner-hero banner-head-image"
                        style={{ background: "linear-gradient(135deg, #101828 0%, #1D2939 100%)", padding: "120px 0 90px" }}>
                        <div className="container">
                            <div className="text-center">
                                <span className="tag-1 bg-6 color-green-900">{post.category.toUpperCase()}</span>
                                <h1 className="text-heading-1 color-white mt-30" style={{ maxWidth: 900, margin: '30px auto 0' }}>
                                    {post.title}
                                </h1>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── LEAD + META (author, date, share) ── */}
                <section className="section-box mt-50 mb-50">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-1 col-md-12" />
                            <div className="col-lg-1 col-md-2 col-sm-2 col-3 text-center">
                                <div className="social-sticky">
                                    <h3 className="text-heading-6 color-gray-400 mb-20 mt-5">Share</h3>
                                    <a href={`https://twitter.com/intent/tweet?url=https://buildfirstsite.com/blog/${post.slug}/&text=${encodeURIComponent(post.title)}`}
                                        target="_blank" rel="noopener noreferrer" className="share-social share-tw" />
                                    <br />
                                    <a href={`https://www.facebook.com/sharer/sharer.php?u=https://buildfirstsite.com/blog/${post.slug}/`}
                                        target="_blank" rel="noopener noreferrer" className="share-social share-fb" />
                                    <br />
                                    <a href={`https://www.linkedin.com/sharing/share-offsite/?url=https://buildfirstsite.com/blog/${post.slug}/`}
                                        target="_blank" rel="noopener noreferrer" className="share-social share-pi" />
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-8 col-sm-10 col-9">
                                <div className="text-summary">
                                    {article.lead || post.excerpt}
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-2" />
                            <div className="col-lg-8">
                                <div className="row">
                                    <div className="col-lg-6 col-md-7 col-sm-7 col-7">
                                        <div className="blog-img-user">
                                            <div className="img-user img-user-round">
                                                <Image
                                                    width={0} height={0} sizes="100vw"
                                                    style={{ width: "auto", height: "auto" }}
                                                    src="/assets/imgs/page/blog/2/user-1.png"
                                                    alt="Build First Site"
                                                />
                                            </div>
                                            <h4 className="text-body-lead color-gray-900">Build First Site</h4>
                                            <p className="text-body-small color-gray-500">{fmtDate(post.date)}</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-5 col-sm-5 col-5 tag-mb text-end">
                                        <span className="tag-1 bg-6 color-green-900 mt-40">{post.readingTime}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ── ARTICLE BODY ── */}
                        <div className="row">
                            <div className="col-lg-2" />
                            <div className="col-lg-8">
                                <div className="single-detail mt-50">
                                    <Image
                                        width={0} height={0} sizes="100vw"
                                        style={{ width: "100%", height: "auto" }}
                                        className="img-responsive bdr-16 mb-30"
                                        src="/assets/imgs/page/blog/single/img-1.png"
                                        alt={post.title}
                                    />

                                    <BlogContent blocks={article.content} />

                                    <div className="border-bottom mt-50 mb-50" />

                                    {/* Tag chips */}
                                    <div>
                                        <Link href="/blog/" className="btn btn-tag mr-10">Blog</Link>
                                        <Link href="/blog/" className="btn btn-tag mr-10">{post.category}</Link>
                                        <Link href="/contact/" className="btn btn-tag mr-10">Get a quote</Link>
                                    </div>
                                </div>

                                {/* ── CTA callout box ── */}
                                <div className="mt-60 p-40 bdrd-16"
                                    style={{ background: '#F4E9DF', border: '1px solid #E4E7EC' }}>
                                    <h4 className="text-heading-3">Ready to build?</h4>
                                    <p className="text-body-lead color-gray-700 mt-15">
                                        Book a free 30-minute call and we&apos;ll turn your idea
                                        into a written scope + AUD price within 24 hours.
                                    </p>
                                    <div className="mt-25">
                                        <a href={SITE.calendly} target="_blank" rel="noopener noreferrer"
                                            className="btn btn-black icon-arrow-right-white mr-15">
                                            Book a free call
                                        </a>
                                        <Link href="/contact/" className="btn btn-link icon-arrow-right color-gray-900">
                                            Send a message
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── RELATED POSTS ── */}
                {related.length > 0 && (
                    <section className="section-box mt-100 mb-100">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8">
                                    <h3 className="text-heading-2 mb-10">Related reading</h3>
                                    <p className="text-body-lead-large color-gray-600">
                                        More from the {post.category.toLowerCase()} section
                                    </p>
                                </div>
                                <div className="col-lg-4 text-lg-end text-start pt-30">
                                    <Link href="/blog/" className="btn btn-black icon-arrow-right-white">All posts</Link>
                                </div>
                            </div>
                            <div className="row mt-60">
                                {related.map((r, i) => (
                                    <div className="col-lg-4 col-sm-12 pr-30 mb-30" key={r.slug}>
                                        <div className="card-grid-style-4">
                                            <span className="tag-dot">{r.category}</span>
                                            <Link href={r.href} className="text-heading-4">{r.title}</Link>
                                            <div className={`grid-4-img color-bg-${(i * 2) + 2}`}>
                                                <Link href={r.href}>
                                                    <Image
                                                        width={0} height={0} sizes="100vw"
                                                        style={{ width: "100%", height: "auto" }}
                                                        src={`/assets/imgs/page/homepage1/img-news-${(i + 1)}.png`}
                                                        alt={r.title}
                                                    />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

            </div>
        </Layout>
    )
}
