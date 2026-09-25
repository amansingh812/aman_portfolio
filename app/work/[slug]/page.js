/* eslint-disable @next/next/no-img-element */
/**
 * /work/<slug>/ — case study template. Redesigned 26 Sep 2026 from the approved
 * demo (docs/CASE-STUDY-REDESIGN-DEMO.html), same system as /services/<slug>/.
 *
 * Data: content/case-studies.js (the project) + content/case-study-extras.js
 * (summary, use cases, flow diagram, context photo, hidden results, concept flag).
 *
 * REMOVED, and why (CLAUDE.md §1):
 * - AU_MARKETING_HOOKS: per-project blurbs making claims with no source —
 *   "loads in under 1.5 seconds", "a dramatic reduction in sizing inquiries",
 *   and concept builds described as real businesses ("We engineered Harbour
 *   Plumbing's local SEO presence").
 * - The location badge and `locationCreated` in schema: HS Race Gear was stored
 *   as Australia while its own site says Watertown, MA (§7 open question).
 * - Results listed in extras.unverifiedResults are hidden until measured.
 *
 * Nothing here renders a placeholder. A section with no data is skipped.
 */
import Layout from "@/components/layout/Layout"
import Breadcrumbs from "@/components/elements/Breadcrumbs"
import Link from "next/link"
import { notFound } from "next/navigation"
import { CASE_STUDIES, getCaseStudy } from "@/content/case-studies"
import { getCaseStudyExtras } from "@/content/case-study-extras"
import { CTA, SITE } from "@/content/site"
import { BUILD_TIERS, ADDONS } from "@/content/pricing"

export const dynamicParams = false

export function generateStaticParams() {
    return CASE_STUDIES.map((cs) => ({ slug: cs.slug }))
}

export async function generateMetadata({ params }) {
    const { slug } = await params
    const p = getCaseStudy(slug)
    if (!p) return {}
    const x = getCaseStudyExtras(slug)
    const description = x.summary || p.metaDescription || p.tagline
    return {
        // metaTitle already ends in "| Build First Site"; absolute stops the
        // root template appending the brand a second time.
        title: { absolute: p.metaTitle || `${p.name} | Build First Site` },
        description: p.metaDescription || description,
        alternates: { canonical: `/work/${p.slug}/` },
        openGraph: {
            title: p.metaTitle || p.name,
            description: p.metaDescription || description,
            url: `https://buildfirstsite.com/work/${p.slug}/`,
            type: "article",
            locale: "en_AU",
            images: p.image ? [{ url: p.image, width: 1200, height: 900 }] : [],
        },
    }
}

/* Tech → what it does for the business (outcome first, CLAUDE.md §0) */
const TECH_ROLE = {
    "Next.js": "fast pages", "Next.js 14": "fast pages", "Next.js 15": "fast pages",
    "React": "interactive UI", "React 19": "interactive UI", "Three.js": "3D product viewer",
    "MongoDB": "products and orders", "Stripe": "secure checkout", "OpenAI": "AI recs and chat",
    "Tailwind": "consistent design", "Tailwind CSS": "consistent design", "FastAPI": "reliable backend",
    "Redis": "on-time scheduling", "Claude": "AI writing", "GPT-4": "AI writing", "Gemini": "AI writing",
    "Framer Motion": "polished motion", "Motion": "polished motion", "Formspree": "quote forms",
    "JSON-LD": "search visibility", "react-router": "fast navigation", "WordPress": "easy editing",
    "WooCommerce": "online store", "AI Matching": "smart shortlists",
}

const REAL_FIRST = ["hs-race-gear", "mobile-armour", "autozenlyai"]
const hostOf = (u) => { try { return new URL(u).host.replace(/^www\./, "") } catch { return "" } }
const tier = (id) => BUILD_TIERS.find((t) => t.id === id)
const chatbot = ADDONS.find((a) => a.name === "AI chatbot")

const CSS = `
.cs{color:#344054}
.cs h1,.cs h2,.cs h3,.cs h4{color:#101828}
.cs-sec{padding:92px 0}
.cs-h2{font-size:38px;line-height:1.2}
.cs-lead{font-size:19px;line-height:1.7;color:#475467;max-width:720px}
.cs-center{text-align:center}.cs-center .cs-lead{margin:14px auto 0}
.cs-mint{background:#EEF6F2}
.cs-hero{background:linear-gradient(180deg,#EEF6F2,#fff);padding:30px 0 70px}
.cs-hero h1{font-size:50px;line-height:1.15;margin-top:18px}
.cs-hero h1 span{color:#006D77}
.cs-top{display:grid;grid-template-columns:1.1fr .9fr;gap:50px;align-items:end;margin-top:14px}
.cs-facts{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.cs-fact{background:#fff;border:1px solid #E4E7EC;border-radius:14px;padding:16px 18px}
.cs-fact small{display:block;font-size:12.5px;text-transform:uppercase;letter-spacing:.06em;color:#667085}
.cs-fact b{color:#101828;font-size:16.5px;line-height:1.35;display:block}
.cs-concept{display:inline-block;background:#FFF3EA;color:#B4461A;font-size:13px;font-weight:600;padding:6px 14px;border-radius:99px;margin-left:8px}
.cs-browser{margin-top:48px;background:#fff;border-radius:16px;box-shadow:0 40px 80px rgba(16,24,40,.16);overflow:hidden;border:1px solid #E4E7EC;display:block}
.cs-browser .bar{height:38px;background:#F2F4F7;display:flex;align-items:center;gap:7px;padding:0 14px}
.cs-browser .bar i{width:11px;height:11px;border-radius:50%;background:#D0D5DD;display:block}
.cs-browser .bar span{margin-left:12px;font-size:13px;color:#667085;background:#fff;border-radius:6px;padding:3px 12px}
.cs-browser img{display:block;width:100%;height:560px;object-fit:cover;object-position:top;background:#fff}
.cs-split{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center}
.cs-photo{border-radius:18px;overflow:hidden;margin:0}
.cs-photo img{width:100%;height:440px;object-fit:cover;display:block}
.cs-cap{font-size:13px;color:#667085;margin-top:8px}
.cs-pull{border-left:4px solid #006D77;padding:4px 0 4px 20px;font-size:21px;font-weight:700;color:#101828;margin:26px 0 0;line-height:1.45}
.cs-uses{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:22px;margin-top:52px}
.cs-use{background:#fff;border:1px solid #E4E7EC;border-radius:16px;padding:30px}
.cs-use .who{font-size:13px;text-transform:uppercase;letter-spacing:.06em;color:#006D77;font-weight:700}
.cs-use h3{font-size:20px;margin:10px 0}
.cs-use p{font-size:15.5px;line-height:1.6;color:#475467;margin:0}
.cs-use .fix{margin-top:16px;padding-top:14px;border-top:1px solid #E4E7EC;font-size:15px;color:#101828}
.cs-use .fix b{color:#006D77}
.cs-build{display:grid;grid-template-columns:repeat(2,1fr);gap:22px;margin-top:50px}
.cs-block{border:1px solid #E4E7EC;border-radius:16px;padding:32px;background:#fff}
.cs-num{font-weight:700;color:#006D77;font-size:15px}
.cs-block h3{font-size:23px;margin:8px 0 12px}
.cs-block p{color:#475467;margin:0;line-height:1.7}
.cs-block img{width:100%;border-radius:12px;margin-top:18px;border:1px solid #E4E7EC}
.cs-arch{display:flex;align-items:stretch;justify-content:center;gap:12px;flex-wrap:wrap;margin-top:48px}
.cs-node{background:#fff;border:1.5px solid #006D77;border-radius:14px;padding:18px 20px;text-align:center;min-width:150px}
.cs-node b{color:#101828;display:block}.cs-node small{color:#667085;font-size:13px}
.cs-arrow{color:#006D77;font-size:26px;display:flex;align-items:center}
.cs-results{background:#101828;padding:92px 0}
.cs-results .cs-h2{color:#fff}.cs-results .cs-lead{color:#C3CAD5}
.cs-metrics{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:18px;margin-top:48px}
.cs-metric{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-radius:16px;padding:28px}
.cs-metric b{font-size:32px;color:#fff;display:block;line-height:1.15}
.cs-metric span{color:#C3CAD5;font-size:15px;display:block;margin-top:8px}
.cs-outcome{max-width:820px;margin:40px auto 0;text-align:center;color:#D0D5DD;font-size:18px;line-height:1.75}
.cs-stack{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:14px;margin-top:40px}
.cs-st{border:1px solid #E4E7EC;border-radius:14px;padding:18px;text-align:center;background:#fff}
.cs-st b{color:#101828;display:block}.cs-st small{color:#667085;font-size:13px}
.cs-rel{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;margin-top:44px}
.cs-rc{border:1px solid #E4E7EC;border-radius:16px;overflow:hidden;background:#fff;display:block;transition:border-color .2s}
.cs-rc:hover{border-color:#006D77}
.cs-rc img{width:100%;height:190px;object-fit:cover;object-position:top;display:block;background:#fff}
.cs-rc div{padding:20px}.cs-rc h4{font-size:18px}.cs-rc p{font-size:14.5px;margin:6px 0 0;color:#667085}
.cs-tag{font-size:12px;background:#FFF3EA;color:#B4461A;padding:2px 8px;border-radius:99px;margin-left:6px;font-weight:600;vertical-align:middle}
.cs-links{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;margin-top:30px}
.cs-links a{border:1px solid #D0D5DD;border-radius:99px;padding:8px 16px;font-size:14.5px;color:#101828;background:#fff}
.cs-cta{background:#101828;border-radius:24px;padding:60px;display:grid;grid-template-columns:1.3fr .7fr;gap:40px;align-items:center}
.cs-cta h2{color:#fff;font-size:36px}.cs-cta p{color:#C3CAD5;margin:12px 0 0;font-size:17px;line-height:1.7}
.cs-btn-w{background:#fff;color:#00545C;border-radius:10px;padding:15px 26px;font-weight:700;text-align:center;display:block}
.cs-btn-o{color:#fff;border:1.5px solid rgba(255,255,255,.6);border-radius:10px;padding:14px 26px;font-weight:700;text-align:center;display:block}
@media(max-width:991px){
 .cs-top,.cs-split,.cs-cta{grid-template-columns:1fr}.cs-build,.cs-rel{grid-template-columns:1fr 1fr}
 .cs-hero h1{font-size:36px}.cs-h2{font-size:30px}.cs-sec,.cs-results{padding:70px 0}
 .cs-browser img{height:360px}.cs-photo img{height:320px}.cs-cta{padding:40px}.cs-arrow{display:none}
}
@media(max-width:575px){.cs-build,.cs-rel,.cs-facts{grid-template-columns:1fr}.cs-hero h1{font-size:30px}}
`

export default async function CaseStudyPage({ params }) {
    const { slug } = await params
    const p = getCaseStudy(slug)
    if (!p) notFound()
    const x = getCaseStudyExtras(slug)
    const concept = !!x.concept
    const hidden = new Set(x.unverifiedResults || [])
    const results = (p.results || []).filter((r) => !hidden.has(r.label))
    const summary = x.summary || p.tagline

    // Related: real client work first, never the current page, max 3.
    const ordered = [
        ...REAL_FIRST.map(getCaseStudy).filter(Boolean),
        ...CASE_STUDIES.filter((c) => !REAL_FIRST.includes(c.slug)),
    ].filter((c) => c.slug !== slug).slice(0, 3)

    // CTA price line — only from pricing.js
    const isAI = (p.techStack || []).some((t) => /OpenAI|Claude|GPT|Gemini|AI/.test(t))
    const ctaPrice = /E-?Commerce/i.test(p.industry)
        ? `Online stores from ${tier("ecommerce")?.priceLabel}${isAI && chatbot ? `, and AI chatbots ${chatbot.price}` : ""}.`
        : /SaaS|EdTech/i.test(p.industry)
            ? `Applications from ${tier("application")?.priceLabel}; custom software ${tier("custom-software")?.priceLabel}.`
            : `Websites from ${tier("starter")?.priceLabel}.`

    const url = `https://buildfirstsite.com/work/${slug}/`
    const jsonLd = [
        {
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "@id": `${url}#work`,
            name: concept ? `${p.name} (concept build)` : p.name,
            headline: p.tagline,
            description: summary,
            image: p.image,
            genre: p.industry,
            url,
            creator: { "@id": `${SITE.url}/#organization` },
            publisher: { "@id": `${SITE.url}/#organization` },
            ...(p.liveUrl ? { mainEntityOfPage: url, sameAs: p.liveUrl } : {}),
            inLanguage: "en-AU",
        },
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://buildfirstsite.com/" },
                { "@type": "ListItem", position: 2, name: "Work", item: "https://buildfirstsite.com/work/" },
                { "@type": "ListItem", position: 3, name: p.name, item: url },
            ],
        },
    ]

    return (
        <Layout>
            <style dangerouslySetInnerHTML={{ __html: CSS }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            <div className="cs">
                {/* 1. HERO */}
                <section className="cs-hero">
                    <div className="container">
                        <Breadcrumbs items={[{ name: "Work", href: "/work/" }, { name: p.name }]} />
                        <div className="cs-top">
                            <div>
                                <span className="tag-1">{concept ? "Concept build" : "Case study"} · {p.industry}</span>
                                {concept && <span className="cs-concept">Not client work</span>}
                                <h1>{p.name}: <span>{p.tagline}</span></h1>
                                <p className="cs-lead" style={{ marginTop: 18 }}>{summary}</p>
                                <div style={{ marginTop: 28, display: "flex", gap: 14, flexWrap: "wrap" }}>
                                    {p.liveUrl && (
                                        <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-black">
                                            Visit {hostOf(p.liveUrl)} ↗
                                        </a>
                                    )}
                                    <Link href={CTA.primary.href} className="btn btn-link icon-arrow-right color-gray-900 text-heading-6">
                                        Start a similar project
                                    </Link>
                                </div>
                            </div>
                            <div className="cs-facts">
                                <div className="cs-fact"><small>{concept ? "Concept" : "Client"}</small><b>{p.name}</b></div>
                                <div className="cs-fact"><small>Industry</small><b>{p.industry}</b></div>
                                {p.timeline && <div className="cs-fact"><small>Timeline</small><b>{p.timeline}</b></div>}
                                {p.services?.length > 0 && <div className="cs-fact"><small>Delivered</small><b>{p.services.slice(0, 3).join(" · ")}</b></div>}
                            </div>
                        </div>
                        {p.image && (
                            <a className="cs-browser" href={p.liveUrl || "#"} target="_blank" rel="noopener noreferrer">
                                <div className="bar"><i /><i /><i /><span>{hostOf(p.liveUrl)}</span></div>
                                <img src={p.image} alt={`${p.name} homepage${concept ? " (concept build)" : ""}, built by Build First Site`}
                                    width={1200} height={900} fetchPriority="high" />
                            </a>
                        )}
                    </div>
                </section>

                {/* 2. PROBLEM */}
                {p.challenge?.length > 0 && (
                    <section className="cs-sec">
                        <div className={`container ${x.contextImage ? "cs-split" : ""}`}>
                            <div style={x.contextImage ? undefined : { maxWidth: 820, margin: "0 auto" }}>
                                <span className="tag-1">{concept ? "The brief" : "The problem"}</span>
                                <h2 className="cs-h2" style={{ marginTop: 16 }}>What had to change</h2>
                                {p.challenge.map((para, i) => (
                                    <p key={i} style={{ marginTop: 18, lineHeight: 1.75 }}>{para}</p>
                                ))}
                            </div>
                            {x.contextImage && (
                                <figure className="cs-photo">
                                    <img src={x.contextImage.src} alt={x.contextImage.alt} width={1400} height={930} loading="lazy" />
                                    <figcaption className="cs-cap">Illustrative photo · Unsplash</figcaption>
                                </figure>
                            )}
                        </div>
                    </section>
                )}

                {/* 3. USE CASES */}
                {x.useCases?.length > 0 && (
                    <section className="cs-sec cs-mint">
                        <div className="container">
                            <div className="cs-center">
                                <h2 className="cs-h2">Who it’s built for</h2>
                                <p className="cs-lead">Each part of the build answers a real moment where the sale or the enquiry could be lost.</p>
                            </div>
                            <div className="cs-uses">
                                {x.useCases.map((u) => (
                                    <div className="cs-use" key={u.title}>
                                        <div className="who">{u.who}</div>
                                        <h3>{u.title}</h3>
                                        <p>{u.body}</p>
                                        <div className="fix"><b>Fix:</b> {u.fix}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* 4. WHAT WE BUILT */}
                {p.approach?.length > 0 && (
                    <section className="cs-sec">
                        <div className="container">
                            <div className="cs-center"><h2 className="cs-h2">What we built</h2></div>
                            <div className="cs-build">
                                {p.approach.map((a, i) => {
                                    const shot = x.shots?.[i]
                                    return (
                                        <div className="cs-block" key={a.title}>
                                            <div className="cs-num">{String(i + 1).padStart(2, "0")}</div>
                                            <h3>{a.title}</h3>
                                            <p>{a.body}</p>
                                            {shot && <img src={shot.src} alt={shot.alt} loading="lazy" />}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </section>
                )}

                {/* 5. HOW IT FITS TOGETHER */}
                {x.flow?.length > 0 && (
                    <section className="cs-sec cs-mint">
                        <div className="container">
                            <div className="cs-center">
                                <h2 className="cs-h2">How it fits together</h2>
                                <p className="cs-lead">The path from a visitor arriving to the job being done.</p>
                            </div>
                            <div className="cs-arch">
                                {x.flow.map((n, i) => (
                                    <div key={n.t} style={{ display: "contents" }}>
                                        {i > 0 && <span className="cs-arrow" aria-hidden="true">→</span>}
                                        <div className="cs-node"><b>{n.t}</b><small>{n.s}</small></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* 6. RESULTS — only verifiable results; unmeasured ones hidden */}
                {(results.length > 0 || p.outcome) && (
                    <section className="cs-results">
                        <div className="container">
                            <div className="cs-center">
                                <h2 className="cs-h2">{concept ? "What the concept delivers" : "Results"}</h2>
                            </div>
                            {results.length > 0 && (
                                <div className="cs-metrics">
                                    {results.map((r) => (
                                        <div className="cs-metric" key={r.label}><b>{r.value}</b><span>{r.label}</span></div>
                                    ))}
                                </div>
                            )}
                            {p.outcome && <p className="cs-outcome">{p.outcome}</p>}
                        </div>
                    </section>
                )}

                {/* 7. BUILT WITH — each tool with what it does for the business */}
                {p.techStack?.length > 0 && (
                    <section className="cs-sec" style={{ paddingTop: 70, paddingBottom: 70 }}>
                        <div className="container">
                            <div className="cs-center"><h2 className="cs-h2">Built with</h2></div>
                            <div className="cs-stack">
                                {p.techStack.map((t) => (
                                    <div className="cs-st" key={t}><b>{t}</b>{TECH_ROLE[t] && <small>{TECH_ROLE[t]}</small>}</div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* 8. MORE WORK + SERVICE LINKS */}
                <section className="cs-sec cs-mint">
                    <div className="container">
                        <div className="cs-center"><h2 className="cs-h2">More work</h2></div>
                        <div className="cs-rel">
                            {ordered.map((o) => {
                                const oc = getCaseStudyExtras(o.slug).concept
                                return (
                                    <Link className="cs-rc" key={o.slug} href={`/work/${o.slug}/`}>
                                        <img src={o.image} alt={`${o.name}${oc ? " concept build" : ""}`} width={800} height={600} loading="lazy" />
                                        <div>
                                            <h4>{o.name}{oc && <span className="cs-tag">Concept build</span>}</h4>
                                            <p>{o.tagline}</p>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                        <div className="cs-links">
                            {(x.relatedServices || []).map((l) => <Link key={l.href} href={l.href}>{l.label}</Link>)}
                            <Link href="/pricing/">Pricing</Link>
                            <Link href="/work/">All work</Link>
                        </div>
                    </div>
                </section>

                {/* 9. CTA — navy, matching the results band */}
                <section className="cs-sec">
                    <div className="container">
                        <div className="cs-cta">
                            <div>
                                <h2>Want something like this?</h2>
                                <p>Fixed AUD quote within 24 hours. {ctaPrice} You deal directly with the engineer who builds it.</p>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                                <Link href={CTA.primary.href} className="cs-btn-w">Get a quote →</Link>
                                <a href={SITE.calendly} target="_blank" rel="noopener noreferrer" data-loc={`work-${slug}-cta`} className="cs-btn-o">Book a free call</a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    )
}
