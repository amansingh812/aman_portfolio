/* eslint-disable react/no-unescaped-entities */
/**
 * /free-automation-audit/ — the automation track's conversion page
 * (Sprint 2, 4 Oct 2026). The equivalent of /free-homepage-design/ for
 * automation. Quiz: components/automation/AuditQuiz.js. Content and the
 * questions: content/automation.js (AUTOMATION_AUDIT).
 *
 * Not chasing a keyword: this is where hub and blog CTAs send people.
 * noindex is NOT set — the page is useful on its own and links back to the hub.
 */
import Layout from "@/components/layout/Layout"
import Breadcrumbs from "@/components/elements/Breadcrumbs"
import Link from "next/link"
import AuditQuiz from "@/components/automation/AuditQuiz"
import { SITE } from "@/content/site"
import { AUTOMATION_AUDIT as A } from "@/content/automation"
import { AUTOMATION_OFFERS } from "@/content/pricing"

const URL = `https://buildfirstsite.com${A.path}`
const TITLE = "Free Automation Audit for Small Business | Build First Site"
const DESC = `Answer four questions and get a written map of the three automations that would save your business the most time, with a fixed AUD price for each. Free, within ${A.turnaround}.`

export const metadata = {
    title: { absolute: TITLE },
    description: DESC,
    alternates: { canonical: A.path },
    openGraph: { title: TITLE, description: DESC, url: URL, type: "website", locale: "en_AU" },
    twitter: { card: "summary_large_image", title: TITLE, description: DESC },
}

const css = `
.fa-wrap { display:grid; grid-template-columns:.9fr 1.1fr; gap:50px; align-items:start; }
@media (max-width:991px){ .fa-wrap{ grid-template-columns:1fr; } }
.fa-list { list-style:none; padding:0; margin:20px 0 0; }
.fa-list li { position:relative; padding:8px 0 8px 28px; }
.fa-list li::before { content:"✓"; position:absolute; left:0; color:#006D77; font-weight:800; }
.fa-faq { border-bottom:1px solid #E4E7EC; padding:24px 0; }
`

export default function FreeAutomationAuditPage() {
    const jsonLd = [
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://buildfirstsite.com/" },
                { "@type": "ListItem", position: 2, name: "AI & Automation", item: "https://buildfirstsite.com/services/ai-automation/" },
                { "@type": "ListItem", position: 3, name: "Free automation audit", item: URL },
            ],
        },
        {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Free automation audit",
            serviceType: "Business process automation consulting",
            provider: { "@id": `${SITE.url}/#organization` },
            areaServed: { "@type": "Country", name: "Australia" },
            offers: { "@type": "Offer", price: 0, priceCurrency: "AUD", url: URL },
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: A.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        },
    ]

    return (
        <Layout>
            <style dangerouslySetInnerHTML={{ __html: css }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            <section className="section-box mt-40">
                <div className="container">
                    <Breadcrumbs items={[{ name: "AI & Automation", href: "/services/ai-automation/" }, { name: "Free automation audit" }]} />
                    <div className="fa-wrap mt-30">
                        <div>
                            <span className="tag-1 bg-6 color-green-900">Free · no obligation</span>
                            <h1 className="text-heading-1 color-gray-900 mt-25 mb-20">Your free automation audit</h1>
                            <p className="text-body-lead-large color-gray-600">
                                Answer four questions. Within {A.turnaround} you get a written map of the three
                                automations that would save you the most time, with a fixed price for each.
                            </p>
                            <ul className="fa-list">
                                <li className="text-body-text color-gray-900">No call needed unless you want one</li>
                                <li className="text-body-text color-gray-900">Built around tools you already pay for</li>
                                <li className="text-body-text color-gray-900">If something isn't worth automating, we'll say so</li>
                                <li className="text-body-text color-gray-900">A fixed price in writing for each recommendation</li>
                            </ul>
                            <p className="text-body-small color-gray-500 mt-25">
                                What we typically recommend:{" "}
                                {AUTOMATION_OFFERS.map((o, i) => (
                                    <span key={o.id}>
                                        <Link href={o.href} className="color-green-900">{o.short}</Link>
                                        {i < AUTOMATION_OFFERS.length - 1 ? " · " : ""}
                                    </span>
                                ))}
                            </p>
                        </div>
                        <AuditQuiz />
                    </div>
                </div>
            </section>

            <section className="section-box mt-100 mb-100">
                <div className="container">
                    <div className="row"><div className="col-lg-8 mx-auto">
                        <h2 className="text-heading-3 color-gray-900 mb-20">Questions</h2>
                        {A.faqs.map((f) => (
                            <div key={f.q} className="fa-faq">
                                <h3 className="text-heading-6 color-gray-900 mb-10">{f.q}</h3>
                                <p className="text-body-text color-gray-600 mb-0">{f.a}</p>
                            </div>
                        ))}
                        <p className="text-body-text color-gray-600 mt-30">
                            Prefer to talk?{" "}
                            <a data-loc="automation-audit" href={SITE.calendly} target="_blank" rel="noopener noreferrer" className="color-green-900">
                                Book a free call
                            </a>
                            {" "}· See <Link href="/services/ai-automation/" className="color-green-900">everything we automate</Link>
                            {" "}· <Link href="/pricing/" className="color-green-900">pricing</Link>
                        </p>
                    </div></div>
                </div>
            </section>
        </Layout>
    )
}
