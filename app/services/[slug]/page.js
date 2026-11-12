/* eslint-disable @next/next/no-img-element */
/**
 * /services/<slug>/ — shared template for all six service pages.
 * Redesigned 26 Sep 2026 from the approved demo
 * (docs/SERVICE-PAGE-REDESIGN-DEMO.html, spec docs/SERVICE-PAGE-REDESIGN.md).
 *
 * WHAT CHANGED AND WHY
 * - Pricing band: the old version put dark text on the #006D77 teal
 *   ("Fixed AUD prices. No surprises." at roughly 1.3:1 contrast, a WCAG
 *   fail). Headings on teal are now white; cards stay white.
 * - Emoji icons replaced with inline SVG line icons (ICONS below).
 * - Every price is resolved from content/pricing.js at render time. The data
 *   file only holds references, so a price change can't leave these pages
 *   quoting an old figure.
 * - ~12–25 contextual internal links per page (capabilities, process,
 *   outcomes, pricing, compare, FAQ, guides, cities, other services).
 *   The old pages linked out to three siblings and nothing else.
 * - JSON-LD: Service + BreadcrumbList + FAQPage, all describing content that
 *   is visible on the page.
 *
 * HONESTY (CLAUDE.md §1): client screenshots are real sites. Concept builds
 * are labelled "Concept build" wherever they appear. No invented metrics.
 */
import Layout from "@/components/layout/Layout"
import Breadcrumbs from "@/components/elements/Breadcrumbs"
import ProjectThumb from "@/components/portfolio/ProjectThumb"
import Link from "next/link"
import Image from "next/image"
import fs from "node:fs"
import path from "node:path"

/* Show a self-hosted image only when the file exists (lets copy ship before images). */
const has = (src) => !!src && fs.existsSync(path.join(process.cwd(), "public", src))

/* Extra sections added 12 Nov 2026: short answer, story blocks, industries,
   Australia, founder note. All optional per page. */
const XCSS = `
.svx-answer{display:grid;grid-template-columns:auto 1fr;gap:18px;background:#004349;border-radius:18px;padding:24px 28px;margin-top:34px}
.svx-answer h2{font-size:13px;letter-spacing:.08em;text-transform:uppercase;color:#BEE1E6;margin:0 0 6px}
.svx-answer p{margin:0;color:#fff;font-size:18px;line-height:1.6}
.svx-heroimg img{width:100%;height:auto;border-radius:22px;box-shadow:0 30px 60px -30px rgba(16,24,40,.45)}
.svx-story{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center;margin-top:70px}
.svx-story:first-child{margin-top:0}
.svx-story.flip .svx-img{order:2}
.svx-img img{width:100%;height:auto;border-radius:22px;box-shadow:0 26px 50px -30px rgba(16,24,40,.45)}
.svx-kick{display:inline-block;font-size:13px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#005F68;background:#E6F3F5;padding:6px 12px;border-radius:99px}
.svx-story h3{font-size:clamp(26px,3vw,36px);line-height:1.15;color:#101828;margin:14px 0}
.svx-story p{font-size:17px;color:#475467;line-height:1.7}
.svx-pts{list-style:none;padding:0;margin:16px 0 0}
.svx-pts li{position:relative;padding:7px 0 7px 30px;color:#344054}
.svx-pts li:before{content:"✓";position:absolute;left:0;top:7px;width:20px;height:20px;border-radius:50%;background:#E6F3F5;color:#004349;font-size:12px;font-weight:800;display:grid;place-items:center}
.svx-ind{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:34px}
.svx-ind div{background:#fff;border:1px solid #E4E7EC;border-radius:16px;padding:20px;transition:transform .2s,box-shadow .2s}
.svx-ind div:hover{transform:translateY(-3px);box-shadow:0 18px 34px -24px rgba(0,67,73,.45)}
.svx-ind b{display:block;color:#101828;font-size:17px;margin-bottom:6px}
.svx-ind span{color:#475467;font-size:15px}
.svx-note{font-size:14px;color:#667085;margin-top:18px;text-align:center}
.svx-au{display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:center;background:linear-gradient(135deg,#004349,#006D77);border-radius:26px;padding:48px;color:#fff}
.svx-au h2{color:#fff;font-size:clamp(26px,3vw,36px);margin:12px 0}
.svx-au p{color:#E6F3F5}
.svx-au ul{list-style:none;padding:0;margin:0;display:grid;gap:12px}
.svx-au li{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.16);border-radius:14px;padding:14px 16px;color:#fff}
.svx-au li b{display:block;color:#fff;margin-bottom:2px}
.svx-au li span{color:#E6F3F5;font-size:15px}
.svx-au a{color:#fff;font-weight:700}
.svx-ceo{display:grid;grid-template-columns:auto 1fr;gap:24px;align-items:start;background:#F8FAFB;border:1px solid #E4E7EC;border-radius:24px;padding:36px}
.svx-av{width:64px;height:64px;border-radius:50%;background:#006D77;color:#fff;display:grid;place-items:center;font-weight:800;font-size:22px}
.svx-ceo blockquote{margin:0;font-size:19px;line-height:1.7;color:#344054}
.svx-ceo cite{display:block;margin-top:14px;font-style:normal;font-weight:700;color:#101828}
.svx-ceo cite span{font-weight:400;color:#667085}
@media(max-width:991px){.svx-story,.svx-au{grid-template-columns:1fr;gap:26px}.svx-story.flip .svx-img{order:0}.svx-ind{grid-template-columns:1fr 1fr}.svx-au{padding:28px}}
@media(max-width:560px){.svx-ind{grid-template-columns:1fr}.svx-answer,.svx-ceo{grid-template-columns:1fr}}
@media(prefers-reduced-motion:reduce){.svx-ind div{transition:none}}
`
import { notFound } from "next/navigation"
import { CTA, SITE, SERVICE_ITEMS } from "@/content/site"
import { SERVICE_PAGES, getServicePage, CITY_LINKS } from "@/content/service-pages"
import { getCaseStudy } from "@/content/case-studies"
import { Icon, SVC_CSS as CSS, resolveValue, pricingCard, extraLine, PriceCard, PriceIntro } from "@/components/landing/ServiceKit"

/* ai-automation has its own route (app/services/ai-automation/page.js, Sprint 2)
 * with a different layout. Excluded here so the two never compete for the
 * same URL. Its SERVICE_PAGES entry stays for cross-links and the services hub. */
const OWN_ROUTE = new Set(["ai-automation"])

export async function generateStaticParams() {
    return SERVICE_PAGES.filter((s) => !OWN_ROUTE.has(s.slug)).map((s) => ({ slug: s.slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }) {
    const { slug } = await params
    const s = getServicePage(slug)
    if (!s) return {}
    const canonical = `/services/${s.slug}/`
    return {
        // ABSOLUTE — the root layout applies `%s | Build First Site`; left as a
        // plain string it appended the brand a second time.
        title: { absolute: s.metaTitle },
        description: s.metaDescription,
        alternates: { canonical },
        openGraph: {
            title: s.metaTitle,
            description: s.metaDescription,
            url: `https://buildfirstsite.com${canonical}`,
            type: "website",
            locale: "en_AU",
        },
    }
}

/* ── Concept builds (CLAUDE.md §1: must be labelled wherever shown) ── */
const CONCEPT_SLUGS = new Set(["harbour-plumbing", "marlow-vine", "aurelia-estates"])

export default async function ServiceDetailPage({ params }) {
    const { slug } = await params
    const s = getServicePage(slug)
    if (!s) notFound()

    const url = `https://buildfirstsite.com/services/${s.slug}/`
    const hero = s.heroShot ? getCaseStudy(s.heroShot) : null
    const heroIsConcept = hero && CONCEPT_SLUGS.has(hero.slug)
    const cs = s.caseStudy ? getCaseStudy(s.caseStudy) : null
    const csIsConcept = cs && CONCEPT_SLUGS.has(cs.slug)
    /* Price cards hidden (Aman, 15 Oct 2026): prices live on /pricing/ and cost
       pages only. Estimates follow a conversation, phase by phase. */
    const cards = []
    const extras = (s.pricingExtras || []).map(extraLine).filter(Boolean)
    const others = SERVICE_ITEMS.filter((si) => !si.href.includes(`/${s.slug}/`))
    const realClients = ["hs-race-gear", "mobile-armour", "autozenlyai"].map(getCaseStudy).filter(Boolean)
    const hostOf = (u) => { try { return new URL(u).host.replace(/^www\./, "") } catch { return "" } }

    /* ── Structured data — describes only what is visible on this page ── */
    const lowPrice = cards.map((c) => parseInt(String(c.price).replace(/[^0-9]/g, ""), 10)).filter((n) => n > 0)
    const jsonLd = [
        {
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": `${url}#service`,
            name: s.h1,
            serviceType: s.title,
            description: s.metaDescription,
            url,
            provider: { "@id": `${SITE.url}/#organization` },
            areaServed: { "@type": "Country", name: "Australia" },
            ...(lowPrice.length ? {
                offers: {
                    "@type": "AggregateOffer",
                    priceCurrency: "AUD",
                    lowPrice: Math.min(...lowPrice),
                    offerCount: cards.length,
                },
            } : {}),
        },
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://buildfirstsite.com/" },
                { "@type": "ListItem", position: 2, name: "Services", item: "https://buildfirstsite.com/services/" },
                { "@type": "ListItem", position: 3, name: s.title, item: url },
            ],
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: s.faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
        },
    ]

    return (
        <Layout>
            <style dangerouslySetInnerHTML={{ __html: CSS + XCSS }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            <div className="svc">
                {/* 1. HERO */}
                <section className="svc-hero">
                    <div className="container">
                        <Breadcrumbs items={[{ name: "Services", href: "/services/" }, { name: s.title }]} />
                        <div className="svc-hero-grid">
                            <div>
                                <span className="tag-1">{s.eyebrow}</span>
                                <h1>{s.h1} <span>{s.h1Accent}</span></h1>
                                <p className="svc-lead" style={{ marginTop: 22 }}>{s.hero}</p>
                                <div className="svc-ctas">
                                    <Link href={CTA.primary.href} className="btn btn-black icon-arrow-right-white">
                                        Get an estimate
                                    </Link>
                                    <a href={SITE.calendly} target="_blank" rel="noopener noreferrer" data-loc={`service-${s.slug}-hero`}
                                        className="btn btn-link icon-arrow-right color-gray-900 text-heading-6">
                                        Book a free call
                                    </a>
                                </div>
                                <div className="svc-chips">
                                    {s.chips.map((c, i) => (
                                        <span className="svc-chip" key={i}>
                                            {c.pre ? `${c.pre} ` : ""}<b>{resolveValue(c.value)}</b>{c.post ? ` ${c.post}` : ""}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            {has(s.heroImage) ? (
                                <div className="svx-heroimg">
                                    <Image src={s.heroImage} alt={s.heroAlt || s.h1} width={1200} height={900} priority
                                        sizes="(max-width: 991px) 100vw, 560px" />
                                </div>
                            ) : hero && (
                                <div className="d-none d-lg-block" style={{ position: "relative" }}>
                                    <Link href={`/work/${hero.slug}/`} className="svc-browser d-block" aria-label={`${hero.name} case study`}>
                                        <div className="bar"><i /><i /><i /><span>{hostOf(hero.liveUrl)}</span></div>
                                        <ProjectThumb slug={hero.slug} remote={hero.image} name={hero.name} aspect="4 / 3" eager
                                            alt={`${hero.name} website${heroIsConcept ? " (concept build)" : ""} built by Build First Site`} />
                                    </Link>
                                    <div className="svc-floater">
                                        <b>{heroIsConcept ? "Concept build" : "Live client build"}</b><br />
                                        <span style={{ color: "#667085" }}>{hero.name} · {hero.industry}</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    {s.answer && (
                        <div className="container">
                            <div className="svx-answer">
                                <div aria-hidden="true" style={{ fontSize: 26 }}>💡</div>
                                <div><h2>Short answer</h2><p>{s.answer}</p></div>
                            </div>
                        </div>
                    )}
                </section>

                {/* 2. PROOF STRIP — real clients only */}
                <div className="svc-proof">
                    <div className="container row-in">
                        <span>Live sites we’ve designed and built:</span>
                        {realClients.map((c) => (
                            <Link key={c.slug} href={`/work/${c.slug}/`} className="client">{c.name}</Link>
                        ))}
                        <Link href="/work/" style={{ color: "#006D77", fontWeight: 500 }}>See all work →</Link>
                    </div>
                </div>

                {/* 3. WHAT WE BUILD */}
                <section className="svc-sec">
                    <div className="container">
                        <div className="svc-center">
                            <h2 className="svc-h2">What we build</h2>
                            <p className="svc-lead">{s.intro}</p>
                        </div>
                        <div className="svc-cards">
                            {s.capabilities.map((c) => (
                                <div className="svc-card" key={c.title}>
                                    <div className="svc-ico"><Icon name={c.icon} /></div>
                                    <h3>{c.title}</h3>
                                    <p>{c.body}</p>
                                    {c.href && <Link href={c.href} className="svc-more">{c.link} →</Link>}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 3b. STORY BLOCKS — image + explanation, alternating */}
                {s.story?.length > 0 && (
                    <section className="svc-sec" style={{ background: "#fff" }}>
                        <div className="container">
                            {s.story.map((b, i) => (
                                <div key={b.title} className={`svx-story${i % 2 ? " flip" : ""}`}>
                                    <div className="svx-img">
                                        {has(b.image) && (
                                            <Image src={b.image} alt={b.alt} width={1200} height={900} loading="lazy"
                                                sizes="(max-width: 991px) 100vw, 560px" />
                                        )}
                                    </div>
                                    <div>
                                        <span className="svx-kick">{b.kicker}</span>
                                        <h3>{b.title}</h3>
                                        {b.text.map((t, k) => <p key={k} dangerouslySetInnerHTML={{ __html: t }} />)}
                                        {b.points && <ul className="svx-pts">{b.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* 3c. INDUSTRIES — capability only, no implied clients (CLAUDE.md §1) */}
                {s.industries?.length > 0 && (
                    <section className="svc-sec">
                        <div className="container">
                            <div className="svc-center">
                                <h2 className="svc-h2">{s.industriesTitle || "Industries we build for"}</h2>
                                <p className="svc-lead">{s.industriesLead}</p>
                            </div>
                            <div className="svx-ind">
                                {s.industries.map((d) => (
                                    <div key={d.name}>
                                        <b>{d.href ? <Link href={d.href} style={{ color: "inherit" }}>{d.name}</Link> : d.name}</b>
                                        <span>{d.text}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="svx-note">We describe what we build for each industry. Client work is listed separately on <Link href="/work/" className="color-green-900">our work page</Link>.</p>
                        </div>
                    </section>
                )}

                {/* 3d. AUSTRALIA */}
                {s.australia && (
                    <section className="svc-sec" style={{ background: "#fff" }}>
                        <div className="container">
                            <div className="svx-au">
                                <div>
                                    <span className="svx-kick" style={{ background: "rgba(255,255,255,.14)", color: "#fff" }}>Australia and worldwide</span>
                                    <h2>{s.australia.title}</h2>
                                    {s.australia.text.map((t, k) => <p key={k} dangerouslySetInnerHTML={{ __html: t }} />)}
                                </div>
                                <ul>{s.australia.points.map((pt) => <li key={pt.b}><b>{pt.b}</b><span>{pt.t}</span></li>)}</ul>
                            </div>
                        </div>
                    </section>
                )}

                {/* 3e. FOUNDER NOTE — first person, Aman (no photo until a real one is supplied) */}
                {s.founder && (
                    <section className="svc-sec">
                        <div className="container">
                            <div className="svx-ceo">
                                <span className="svx-av" aria-hidden="true">AS</span>
                                <div>
                                    <blockquote>{s.founder}</blockquote>
                                    <cite>Aman Singh <span>· Founder and engineer, Build First Site</span></cite>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* 4. PROCESS */}
                <section className="svc-sec svc-mint">
                    <div className="container svc-split">
                        {cs ? (
                            <Link href={`/work/${cs.slug}/`} className="svc-photo d-block">
                                <ProjectThumb slug={cs.slug} remote={cs.image} name={cs.name} aspect="4 / 3"
                                    alt={`${cs.name} ${csIsConcept ? "concept build" : "website"} by Build First Site`} />
                            </Link>
                        ) : hero ? (
                            <Link href={`/work/${hero.slug}/`} className="svc-photo d-block">
                                <ProjectThumb slug={hero.slug} remote={hero.image} name={hero.name} aspect="4 / 3"
                                    alt={`${hero.name} website built by Build First Site`} />
                            </Link>
                        ) : <div />}
                        <div>
                            <h2 className="svc-h2">{s.processTitle}</h2>
                            <p className="svc-lead" style={{ marginTop: 14 }}>{s.processLead}</p>
                            <div className="svc-steps">
                                {s.process.map((p, i) => (
                                    <div className="svc-step" key={p.title}>
                                        <div className="n">{i + 1}</div>
                                        <div><h4>{p.title}</h4><p>{p.body}</p></div>
                                    </div>
                                ))}
                            </div>
                            {s.processLink && (
                                <p style={{ marginTop: 20 }}>
                                    <Link href={s.processLink.href} className="svc-more">{s.processLink.label} →</Link>
                                </p>
                            )}
                        </div>
                    </div>
                </section>

                {/* 5. OUTCOMES — business result first, tech in small print */}
                <section className="svc-sec">
                    <div className="container">
                        <div className="svc-center">
                            <h2 className="svc-h2">What you get, not just what we use</h2>
                            <p className="svc-lead">Every technical choice is there for a business reason.</p>
                        </div>
                        <div className="svc-outs">
                            {s.outcomes.map((o) => (
                                <div className="svc-out" key={o.title}>
                                    <h4>{o.title}</h4>
                                    <p>{o.body}</p>
                                    <span className="tech">
                                        {o.href ? <Link href={o.href} style={{ color: "#006D77" }}>{o.link} →</Link> : o.tech}
                                    </span>
                                </div>
                            ))}
                        </div>
                        {s.outcomeLinks && (
                            <p className="svc-inline-links">
                                Comparing options?
                                {s.outcomeLinks.map((l) => <Link key={l.href} href={l.href}>{l.label}</Link>)}
                            </p>
                        )}
                    </div>
                </section>

                {/* 6. PRICING — white headings on teal (was a contrast fail) */}
                {cards.length > 0 && (
                    <section className="svc-pricing">
                        <div className="container">
                            <div className="svc-center">
                                <h2 className="svc-h2">Starting prices</h2>
                                <p className="svc-lead">What’s included, then what it costs. Every price is a starting point; your estimate follows a short call.</p>
                            </div>
                            {cards.some((c) => c.build) && <PriceIntro />}
                            <div className="svc-tiers" style={cards.length === 1 ? { maxWidth: 520, marginInline: "auto" } : undefined}>
                                {cards.map((c) => <PriceCard key={c.key} c={c} />)}
                            </div>
                            {extras.length > 0 && (
                                <div className="svc-extras">
                                    {extras.map((e) => <div key={e.label}><b>{e.value}</b>{e.label}</div>)}
                                </div>
                            )}
                            <p className="svc-pnote">
                                Prices exclude GST.{s.pricingNote ? ` ${s.pricingNote}` : ""}
                                {(s.pricingLinks || []).map((l) => <Link key={l.href} href={l.href}>{l.label} →</Link>)}
                            </p>
                        </div>
                    </section>
                )}

                {/* 7. CASE STUDY */}
                {cs && (
                    <section className="svc-sec">
                        <div className="container">
                            <div className="svc-case">
                                <div className="shot">
                                    <ProjectThumb slug={cs.slug} remote={cs.image} name={cs.name} aspect="4 / 3" alt={`${cs.name} homepage`} />
                                </div>
                                <div className="txt">
                                    {csIsConcept
                                        ? <span className="svc-concept">Concept build, not client work</span>
                                        : <span className="tag-1">Case study</span>}
                                    <h2 style={{ fontSize: 30, lineHeight: 1.25, marginTop: 18 }}>{cs.name}: {cs.tagline}</h2>
                                    <p style={{ color: "#475467", marginTop: 14, lineHeight: 1.7 }}>{cs.metaDescription}</p>
                                    <div className="svc-tags">{(cs.services || []).map((t) => <span key={t}>{t}</span>)}</div>
                                    <Link href={`/work/${cs.slug}/`} className="btn btn-black icon-arrow-right-white">
                                        {csIsConcept ? "See the concept build" : "Read the case study"}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* 8. COMPARE */}
                {s.compare && (
                    <section className="svc-sec svc-mint">
                        <div className="container">
                            <div className="svc-center">
                                <h2 className="svc-h2">{s.compare.title}</h2>
                                <p className="svc-lead">{s.compare.lead}</p>
                            </div>
                            <div className="svc-table-wrap">
                                <table className="svc-table">
                                    <thead><tr><th scope="col"><span className="visually-hidden">Criteria</span></th>{s.compare.cols.map((c) => <th scope="col" key={c}>{c}</th>)}</tr></thead>
                                    <tbody>
                                        {s.compare.rows.map((r) => (
                                            <tr key={r[0]}>
                                                <th scope="row" style={{ background: "#fff", fontWeight: 500 }}>{r[0]}</th>
                                                {r.slice(1).map((cell, i) => <td key={i} className={i === 0 ? "us" : undefined}>{resolveValue(cell)}</td>)}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            {s.compare.links && (
                                <p className="svc-inline-links">
                                    {s.compare.links.map((l) => <Link key={l.href} href={l.href}>{l.label}</Link>)}
                                </p>
                            )}
                        </div>
                    </section>
                )}

                {/* 9. FAQ — visible, and the source of the FAQPage schema */}
                <section className="svc-sec">
                    <div className="container svc-faq">
                        <div>
                            <h2 className="svc-h2">Questions people ask before hiring us</h2>
                            <p className="svc-lead" style={{ marginTop: 14 }}>
                                Can’t see yours? <a href={SITE.calendly} target="_blank" rel="noopener noreferrer" data-loc={`service-${s.slug}-faq`} style={{ color: "#006D77" }}>Book a free call</a> and ask the engineer directly.
                            </p>
                        </div>
                        <div>
                            {s.faqs.map((f, i) => (
                                <details key={f.q} open={i === 0}>
                                    <summary>{f.q}</summary>
                                    <p>{f.a}{f.href && <> <Link href={f.href} style={{ color: "#006D77" }}>{f.link} →</Link></>}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 10. GUIDES + CITIES + OTHER SERVICES */}
                <section className="svc-sec svc-mint">
                    <div className="container">
                        <div className="svc-center"><h2 className="svc-h2">Read before you decide</h2></div>
                        <div className="svc-guides">
                            {s.guides.map((g) => (
                                <Link className="svc-guide" key={g.href} href={g.href}>
                                    <span>{g.tag}</span><h4>{g.title}</h4>
                                </Link>
                            ))}
                        </div>
                        {s.cities && (
                            <div className="svc-cities">
                                {CITY_LINKS.map((c) => <Link key={c.href} href={c.href}>Web design {c.label}</Link>)}
                            </div>
                        )}
                        <h3 className="svc-center" style={{ fontSize: 24, marginTop: 70 }}>Other services</h3>
                        <div className="svc-others">
                            {others.map((o) => {
                                const iconName = { "/services/web-development/": "monitor", "/services/mobile-app-development/": "phone", "/services/custom-software/": "grid", "/services/marketing-seo/": "chart", "/services/ai-automation/": "sparkle", "/services/maintenance-support/": "shield" }[o.href]
                                return (
                                    <Link className="svc-other" key={o.href} href={o.href}>
                                        <div className="svc-ico" style={{ margin: 0, flexShrink: 0 }}><Icon name={iconName} /></div>
                                        <div><h4>{o.label}</h4><p>{o.desc}</p></div>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* 11. CTA */}
                <section className="svc-sec">
                    <div className="container">
                        <div className="svc-cta">
                            <div>
                                <h2>Tell us about your project</h2>
                                <p>Tell us what you need. We talk it through, then send a written scope and estimate, and you deal directly with the engineer who builds it.</p>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                                <Link href={CTA.primary.href} className="svc-btn-white">Get a quote →</Link>
                                <a href={SITE.calendly} target="_blank" rel="noopener noreferrer" data-loc={`service-${s.slug}-cta`} className="svc-btn-outline">Book a free call</a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    )
}
