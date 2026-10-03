/* eslint-disable react/no-unescaped-entities */
/**
 * Shared template for the dedicated automation pages (4 Oct 2026).
 * Data: content/automation-pages.js (copy) + AUTOMATION_OFFERS in
 * content/pricing.js (includes / not included / flow / icon).
 *
 * Section order follows CLAUDE.md §0 and §5: outcome first, then a direct
 * "What is X?" answer (the block search features and AI answers lift), the
 * problem, how it works, what we automate, a labelled example, scope, why
 * us, FAQ, related automations, CTA.
 *
 * NO PRICES: automation is quote-only. Every price mention is "fixed written
 * price after the free audit". Structured data carries no price either.
 */
import Layout from "@/components/layout/Layout"
import Breadcrumbs from "@/components/elements/Breadcrumbs"
import Link from "next/link"
import { SITE } from "@/content/site"
import { AUTOMATION_OFFERS } from "@/content/pricing"
import { AUTOMATION_PAGES } from "@/content/automation-pages"
import { AutomationCard, FlowSteps, AUTO_CSS, Icon } from "@/components/automation/AutomationUI"

export function buildAutomationMetadata(page) {
    const url = `https://buildfirstsite.com/${page.slug}/`
    return {
        title: { absolute: page.metaTitle },
        description: page.metaDescription,
        keywords: page.keywords,
        alternates: { canonical: `/${page.slug}/` },
        openGraph: { title: page.metaTitle, description: page.metaDescription, url, type: "website", locale: "en_AU" },
        twitter: { card: "summary_large_image", title: page.metaTitle, description: page.metaDescription },
    }
}

const css = `
.ap-hero { background:radial-gradient(1000px 440px at 85% 0%, rgba(0,109,119,.45), transparent 60%), #101828; padding:36px 0 80px; }
.ap-hero .crumbs a, .ap-hero .crumbs span { color:#98A2B3 !important; }
.ap-grid { display:grid; grid-template-columns:1.15fr .85fr; gap:50px; align-items:center; margin-top:26px; }
@media (max-width:991px){ .ap-grid{ grid-template-columns:1fr; } }
.ap-white { color:#fff !important; } .ap-mint { color:#83C5BE !important; } .ap-muted { color:#D0D5DD !important; } .ap-dim { color:#98A2B3 !important; }
.ap-eyebrow { background:rgba(131,197,190,.15) !important; color:#83C5BE !important; }
.ap-pill { display:inline-block; font-size:13.5px; color:#D0D5DD; border:1px solid rgba(255,255,255,.18); border-radius:50px; padding:7px 14px; margin:0 8px 8px 0; }
.ap-ghost { background:transparent !important; color:#fff !important; border:1.5px solid rgba(255,255,255,.35) !important; }
.ap-panel { background:rgba(255,255,255,.04); border:1px solid rgba(255,255,255,.1); border-radius:20px; padding:22px; }
.ap-panel-h { display:flex; justify-content:space-between; font-size:12.5px; color:#98A2B3; margin-bottom:14px; }
.ap-live::before { content:""; display:inline-block; width:8px; height:8px; border-radius:50%; background:#32D583; margin-right:7px; animation:ap-pulse 1.6s infinite; }
.ap-ev { display:flex; gap:12px; align-items:center; background:#fff; border-radius:14px; padding:13px 16px; margin-bottom:10px;
  opacity:0; transform:translateY(8px); animation:ap-in .5s forwards; }
.ap-ev-ic { width:34px; height:34px; border-radius:10px; background:#F4FAFB; display:grid; place-items:center; flex:0 0 auto; }
.ap-ev-ic svg, .ap-uc-ic svg { width:18px; height:18px; fill:none; stroke:#006D77; stroke-width:1.8; stroke-linecap:round; stroke-linejoin:round; }
.ap-ok { margin-left:auto; font-size:12px; font-weight:600; color:#067647; background:#ECFDF3; padding:4px 10px; border-radius:50px; }
@keyframes ap-in { to { opacity:1; transform:none; } } @keyframes ap-pulse { 50% { opacity:.35; } }
.ap-answer { background:#F4FAFB; border-left:4px solid #006D77; border-radius:12px; padding:26px 28px; }
.ap-two { display:grid; grid-template-columns:1fr 1fr; gap:40px; align-items:start; }
@media (max-width:860px){ .ap-two{ grid-template-columns:1fr; } }
.ap-x { list-style:none; padding:0; margin:0; }
.ap-x li { position:relative; padding:7px 0 7px 26px; color:#475467; }
.ap-x li::before { content:"✕"; position:absolute; left:0; color:#D92D20; font-weight:700; }
.ap-tick { list-style:none; padding:0; margin:0; }
.ap-tick li { position:relative; padding:7px 0 7px 26px; color:#344054; }
.ap-tick li::before { content:"✓"; position:absolute; left:0; color:#006D77; font-weight:800; }
.ap-uc { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
@media (max-width:991px){ .ap-uc{ grid-template-columns:1fr 1fr; } } @media (max-width:575px){ .ap-uc{ grid-template-columns:1fr; } }
.ap-uc-card { background:#fff; border:1px solid #E4E7EC; border-radius:16px; padding:24px; transition:transform .25s ease, box-shadow .25s ease; }
.ap-uc-card:hover { transform:translateY(-3px); box-shadow:0 14px 34px rgba(16,24,40,.08); }
.ap-uc-ic { width:42px; height:42px; border-radius:12px; background:#F4FAFB; display:grid; place-items:center; margin-bottom:14px; }
.ap-ex { background:#101828; border-radius:18px; padding:36px; }
.ap-ex ol { counter-reset:ex; list-style:none; padding:0; margin:0; }
.ap-ex li { counter-increment:ex; position:relative; padding:12px 0 12px 44px; border-bottom:1px solid rgba(255,255,255,.1); color:#D0D5DD; }
.ap-ex li::before { content:counter(ex); position:absolute; left:0; top:10px; width:28px; height:28px; border-radius:50%; background:#006D77; color:#fff; display:grid; place-items:center; font-size:13px; font-weight:700; }
.ap-box { background:#fff; border:1px solid #E4E7EC; border-radius:16px; padding:28px; height:100%; }
.ap-chip { display:inline-block; font-size:13.5px; padding:7px 14px; border:1px solid #E4E7EC; border-radius:50px; margin:0 8px 8px 0; color:#101828; background:#fff; }
.ap-faq { border-bottom:1px solid #E4E7EC; padding:24px 0; }
.ap-cta { background:#006D77; border-radius:16px; padding:56px 36px; text-align:center; }
@media (prefers-reduced-motion:reduce){ .ap-ev{ animation:none; opacity:1; transform:none; } .ap-live::before{ animation:none; } .ap-uc-card{ transition:none; } }
`

const WHY = [
    { icon: "user", title: "You deal with the builder", body: "The engineer who builds your automation is the one you talk to. Your day-to-day contact is in Australia." },
    { icon: "shield", title: "You own everything", body: "Accounts in your name, data in your tools, every workflow documented. No platform subscription to keep paying us for." },
    { icon: "edit", title: "A fixed price, in writing", body: "No hourly billing. You get the scope and one fixed price after the free audit, before any work starts." },
]

export default function AutomationPage({ page }) {
    const offer = AUTOMATION_OFFERS.find((o) => o.id === page.offerId)
    const url = `https://buildfirstsite.com/${page.slug}/`
    const related = page.related
        .map((slug) => AUTOMATION_PAGES.find((p) => p.slug === slug))
        .filter(Boolean)
        .map((p) => AUTOMATION_OFFERS.find((o) => o.id === p.offerId))
        .filter(Boolean)

    const jsonLd = [
        {
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": `${url}#service`,
            name: page.h1,
            serviceType: offer?.name || page.h1,
            description: page.metaDescription,
            url,
            provider: { "@id": `${SITE.url}/#organization` },
            areaServed: { "@type": "Country", name: "Australia" },
        },
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://buildfirstsite.com/" },
                { "@type": "ListItem", position: 2, name: "AI & Automation", item: "https://buildfirstsite.com/services/ai-automation/" },
                { "@type": "ListItem", position: 3, name: page.h1, item: url },
            ],
        },
        {
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: `How ${page.h1.toLowerCase()} works`,
            step: page.flow.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.title, text: s.body })),
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [page.whatIs, ...page.faqs].map((f) => ({
                "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
        },
    ]

    return (
        <Layout>
            <style dangerouslySetInnerHTML={{ __html: AUTO_CSS + css }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* 1. HERO — outcome first */}
            <section className="ap-hero">
                <div className="container">
                    <div className="crumbs">
                        <Breadcrumbs items={[{ name: "AI & Automation", href: "/services/ai-automation/" }, { name: page.h1 }]} />
                    </div>
                    <div className="ap-grid">
                        <div>
                            <span className="tag-1 ap-eyebrow">{page.eyebrow}</span>
                            <h1 className="text-display-4 ap-white mt-25 mb-20">
                                {page.h1} <span className="ap-mint">{page.h1Accent}</span>
                            </h1>
                            <p className="text-body-lead-large ap-muted mb-25">{page.lead}</p>
                            <div className="mb-25">{page.heroPoints.map((p) => <span key={p} className="ap-pill">✓ {p}</span>)}</div>
                            <Link href="/free-automation-audit/" data-event="automation_audit_cta" data-package={page.slug}
                                className="btn btn-black icon-arrow-right-white mr-10 mb-10" style={{ background: "#D9541A", borderColor: "#D9541A" }}>
                                Get my free automation audit
                            </Link>
                            <a data-loc={`automation-${page.slug}`} href={SITE.calendly} target="_blank" rel="noopener noreferrer" className="btn ap-ghost mb-10">
                                Book a free call
                            </a>
                        </div>
                        {offer?.flow && (
                            <div className="ap-panel" aria-label="Example of this automation running">
                                <div className="ap-panel-h"><span className="ap-live">Running</span><span>Example</span></div>
                                {offer.flow.map((step, i) => (
                                    <div key={step} className="ap-ev" style={{ animationDelay: `${0.3 + i * 0.6}s` }}>
                                        <span className="ap-ev-ic"><Icon name={i === 0 ? offer.icon : i === offer.flow.length - 1 ? "list" : "bolt"} /></span>
                                        <b style={{ fontSize: 14.5, color: "#101828" }}>{step}</b>
                                        <span className="ap-ok">{i === 0 ? "Trigger" : "✓ Done"}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* 2. WHAT IS — the direct answer */}
            <section className="section-box mt-70">
                <div className="container">
                    <div className="row"><div className="col-lg-9 mx-auto">
                        <div className="ap-answer">
                            <h2 className="text-heading-4 color-gray-900 mb-10">{page.whatIs.q}</h2>
                            <p className="text-body-lead color-gray-600 mb-0">{page.whatIs.a}</p>
                        </div>
                    </div></div>
                </div>
            </section>

            {/* 3. PROBLEM */}
            <section className="section-box mt-70">
                <div className="container">
                    <div className="ap-two">
                        <div>
                            <h2 className="text-heading-3 color-gray-900 mb-15">{page.problem.title}</h2>
                            <p className="text-body-text color-gray-600 mb-0">{page.problem.body}</p>
                        </div>
                        <div className="ap-box">
                            <p className="text-body-small color-gray-500 mb-10">Sound familiar?</p>
                            <ul className="ap-x">{page.problem.points.map((p) => <li key={p}>{p}</li>)}</ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. HOW IT WORKS */}
            <section className="section-box mt-90">
                <div className="container">
                    <div className="row"><div className="col-lg-8 mx-auto text-center mb-40">
                        <span className="tag-1 bg-6 color-green-900">How it works</span>
                        <h2 className="text-heading-2 color-gray-900 mt-20">From trigger to done, automatically</h2>
                    </div></div>
                    <FlowSteps steps={page.flow} />
                </div>
            </section>

            {/* 5. WHAT WE AUTOMATE */}
            <section className="section-box mt-90 pt-80 pb-80" style={{ background: "#F4FAFB" }}>
                <div className="container">
                    <div className="row"><div className="col-lg-8 mx-auto text-center mb-40">
                        <h2 className="text-heading-2 color-gray-900">What we can set up for you</h2>
                    </div></div>
                    <div className="ap-uc">
                        {page.useCases.map((u) => (
                            <div key={u.title} className="ap-uc-card">
                                <span className="ap-uc-ic"><Icon name={u.icon} /></span>
                                <h3 className="text-heading-6 color-gray-900 mb-10">{u.title}</h3>
                                <p className="text-body-small color-gray-600 mb-0">{u.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. EXAMPLE (labelled) */}
            <section className="section-box mt-90">
                <div className="container">
                    <div className="row"><div className="col-lg-10 mx-auto">
                        <div className="ap-ex">
                            <span className="tag-1 ap-eyebrow">{page.example.label}</span>
                            <h2 className="text-heading-3 ap-white mt-20 mb-20">{page.example.title}</h2>
                            <ol>{page.example.steps.map((s) => <li key={s}>{s}</li>)}</ol>
                            <p className="text-body-small ap-dim mt-15 mb-0">An illustration of how this automation works, not a client result.</p>
                        </div>
                    </div></div>
                </div>
            </section>

            {/* 7. SCOPE */}
            <section className="section-box mt-90">
                <div className="container">
                    <div className="ap-two">
                        <div className="ap-box">
                            <h2 className="text-heading-5 color-gray-900 mb-15">What's included</h2>
                            <ul className="ap-tick">{offer?.includes.map((i) => <li key={i}>{i}</li>)}
                                <li>Written documentation of the workflow</li>
                                <li>Testing with you before it goes live</li>
                            </ul>
                            <p className="text-body-small color-gray-500 mt-15 mb-0">
                                Typical set-up: {offer?.delivery}. Price: a fixed written quote after the{" "}
                                <Link href="/free-automation-audit/" className="color-green-900">free automation audit</Link>.
                            </p>
                        </div>
                        <div className="ap-box">
                            <h2 className="text-heading-5 color-gray-900 mb-15">Good to know</h2>
                            <ul className="ap-x">{offer?.notIncluded.map((i) => <li key={i}>Not included: {i}</li>)}</ul>
                            <p className="text-body-small color-gray-500 mt-20 mb-10">Works with tools you already use</p>
                            <div>{page.tools.map((t) => <span key={t} className="ap-chip">{t}</span>)}</div>
                            <p className="text-body-small color-gray-500 mt-10 mb-0">
                                Optional <Link href="/services/maintenance-support/" className="color-green-900">Care plan</Link> keeps it monitored and fixed when a tool changes.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. WHY US */}
            <section className="section-box mt-90">
                <div className="container">
                    <div className="ap-uc">
                        {WHY.map((w) => (
                            <div key={w.title} className="ap-uc-card">
                                <span className="ap-uc-ic"><Icon name={w.icon} /></span>
                                <h3 className="text-heading-6 color-gray-900 mb-10">{w.title}</h3>
                                <p className="text-body-small color-gray-600 mb-0">{w.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 9. FAQ */}
            <section className="section-box mt-90">
                <div className="container">
                    <div className="row"><div className="col-lg-8 mx-auto">
                        <h2 className="text-heading-2 color-gray-900 text-center mb-30">{page.eyebrow}: questions</h2>
                        {page.faqs.map((f) => (
                            <div key={f.q} className="ap-faq">
                                <h3 className="text-heading-6 color-gray-900 mb-10">{f.q}</h3>
                                <p className="text-body-text color-gray-600 mb-0">{f.a}</p>
                            </div>
                        ))}
                    </div></div>
                </div>
            </section>

            {/* 10. RELATED */}
            <section className="section-box mt-90">
                <div className="container">
                    <h2 className="text-heading-3 color-gray-900 text-center mb-30">Other automations that work well with this</h2>
                    <div className="row">
                        {related.map((o) => (
                            <div key={o.id} className="col-lg-4 col-md-6 mb-30">
                                <AutomationCard offer={o} loc={`related-${page.slug}`} />
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-body-small color-gray-500 mb-0">
                        <Link href="/services/ai-automation/" className="color-green-900">All automations</Link>
                        {" · "}<Link href="/services/custom-software/" className="color-green-900">Custom software</Link>
                        {" · "}<Link href="/work/" className="color-green-900">Our work</Link>
                    </p>
                </div>
            </section>

            {/* 11. CTA */}
            <section className="section-box mt-80 mb-100">
                <div className="container">
                    <div className="ap-cta">
                        <h2 className="text-heading-2 ap-white mb-15">See what this would look like for your business</h2>
                        <p className="text-body-lead-large mb-30" style={{ color: "#BEE1E6" }}>
                            Answer four questions and get a written automation map with a fixed price. Free, no obligation.
                        </p>
                        <Link href="/free-automation-audit/" data-event="automation_audit_cta" data-package={`${page.slug}-cta`}
                            className="btn mr-10 mb-10" style={{ background: "#83C5BE", color: "#006D77" }}>
                            Get my free automation audit
                        </Link>
                        <Link href="/contact/" className="btn btn-default mb-10">Get a quote</Link>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
