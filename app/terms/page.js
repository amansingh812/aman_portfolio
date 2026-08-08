/**
 * /terms/ — Terms of Service.
 *
 * ⚠️  NOT LEGAL ADVICE. Have a lawyer review before relying on it.
 *
 * ⚠️  AUSTRALIAN CONSUMER LAW: consumer guarantees under the ACL CANNOT be
 *     excluded, restricted or modified by contract. Attempting to do so is
 *     itself a breach. Every limitation clause here is expressly subject to
 *     the ACL — do not remove those qualifiers.
 *
 * Prices are described in ranges here and link to /pricing/ rather than being
 * restated, so this page cannot drift from content/pricing.js.
 */
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { SITE, NAP } from "@/content/site"

export const metadata = {
    title: "Terms of Service",
    description:
        "Build First Site terms of service — scope, fixed pricing, payment, code ownership and your rights under Australian Consumer Law. Plain English.",
    alternates: { canonical: "/terms/" },
    robots: { index: true, follow: true },
}

const UPDATED = "8 August 2026"

export default function Terms() {
    return (
        <Layout>
            <section className="section-box mt-70 mb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <span className="tag-1 bg-6 color-green-900">Legal</span>
                            <h1 className="text-heading-1 color-gray-900 mt-25 mb-15">Terms of Service</h1>
                            <p className="text-body-small color-gray-500 mb-40">Last updated {UPDATED}</p>

                            <p className="text-body-lead-large color-gray-600 mb-40">
                                Short version: we agree a fixed price in writing before starting, you
                                pay half up front and half on launch, and you own everything we build.
                                The detail is below.
                            </p>

                            <h2 className="text-heading-3 color-gray-900 mt-50 mb-20">1. Who these terms are with</h2>
                            <p className="text-body-text color-gray-600">
                                Build First Site, a web development studio operating from{" "}
                                {NAP.addressLocality}, {NAP.addressRegion}, Australia. Contact{" "}
                                <a href={`mailto:${SITE.email}`} className="color-green-900">{SITE.email}</a>{" "}
                                or {NAP.phone}. In these terms, &quot;we&quot; and &quot;us&quot; means
                                Build First Site, and &quot;you&quot; means the client.
                            </p>

                            <h2 className="text-heading-3 color-gray-900 mt-50 mb-20">2. Quotes and scope</h2>
                            <p className="text-body-text color-gray-600 mb-20">
                                Before any work starts you receive a written scope and a fixed price in
                                Australian dollars. That price does not change unless you ask for
                                something outside the agreed scope, in which case we quote the change
                                openly and you decide before we proceed. We do not add hours to an
                                invoice without telling you.
                            </p>
                            <p className="text-body-text color-gray-600">
                                Published prices on our <Link href="/pricing/" className="color-green-900">pricing page</Link>{" "}
                                are starting points for the scope described. Quotes are valid for 30 days.
                            </p>

                            <h2 className="text-heading-3 color-gray-900 mt-50 mb-20">3. Payment</h2>
                            <ul className="text-body-text color-gray-600" style={{ paddingLeft: 20 }}>
                                <li className="mb-10">50% on acceptance of the quote, 50% on launch.</li>
                                <li className="mb-10">Larger projects may be split into three milestones by agreement.</li>
                                <li className="mb-10">Invoices are payable within 7 days.</li>
                                <li className="mb-10">All prices are in AUD and exclude GST unless stated otherwise.</li>
                                <li className="mb-10">Monthly plans are billed in advance and cancel with 30 days notice.</li>
                            </ul>
                            <p className="text-body-text color-gray-600 mt-20">
                                If an invoice is more than 30 days overdue we may pause work until it is
                                settled. We will always tell you before doing so.
                            </p>

                            <h2 className="text-heading-3 color-gray-900 mt-50 mb-20">4. What we need from you</h2>
                            <p className="text-body-text color-gray-600">
                                Content, images, logins and feedback, supplied within a reasonable time.
                                Delivery timeframes assume this — the most common cause of a project
                                running long is waiting on content, not development. You confirm you own
                                or have permission to use any material you give us.
                            </p>

                            <h2 className="text-heading-3 color-gray-900 mt-50 mb-20">5. Ownership of the code</h2>
                            <p className="text-body-text color-gray-600 mb-20">
                                <strong>On final payment, you own everything we built for you</strong> —
                                the source code, the repository, the design files and the content. The
                                hosting and domain accounts are in your name. You can take the site to
                                any other developer at any time without asking us and without a rebuild.
                            </p>
                            <p className="text-body-text color-gray-600">
                                We keep ownership of any general-purpose tools, libraries or techniques
                                we developed before or independently of your project. That does not
                                affect your ability to use, modify or move your site. We may also
                                describe the work publicly and link to it, unless you ask us not to.
                            </p>

                            <h2 className="text-heading-3 color-gray-900 mt-50 mb-20">6. Third-party services</h2>
                            <p className="text-body-text color-gray-600">
                                Projects often rely on services we do not control — hosting providers,
                                payment gateways, APIs, plugins. We choose reputable ones and set them
                                up properly, but we are not responsible for their outages, pricing
                                changes or discontinuation. Ongoing subscription costs for those services
                                are yours, and we tell you about them before you commit.
                            </p>

                            <h2 className="text-heading-3 color-gray-900 mt-50 mb-20">7. What we do not promise</h2>
                            <p className="text-body-text color-gray-600">
                                We build SEO into every site — semantic markup, structured data,
                                performance, mobile usability. <strong>We do not guarantee any particular
                                Google ranking, traffic volume or number of enquiries.</strong> Rankings
                                depend on competition, backlinks, reviews and Google&apos;s own changes,
                                none of which anyone controls. Any agency promising a specific ranking is
                                guessing.
                            </p>

                            <h2 className="text-heading-3 color-gray-900 mt-50 mb-20">8. Your rights under Australian Consumer Law</h2>
                            <p className="text-body-text color-gray-600 mb-20">
                                <strong>Our services come with guarantees that cannot be excluded under
                                the Australian Consumer Law.</strong> These include that services will be
                                provided with due care and skill, be fit for the purpose you told us
                                about, and be supplied within a reasonable time.
                            </p>
                            <p className="text-body-text color-gray-600">
                                Nothing in these terms excludes, restricts or modifies those guarantees.
                                Where we are permitted to limit liability, we limit it to resupplying the
                                service or paying the cost of resupply. Otherwise, and subject always to
                                the ACL, our total liability is capped at the amount you have paid us for
                                the project, and neither party is liable for indirect or consequential
                                loss such as lost profits.
                            </p>

                            <h2 className="text-heading-3 color-gray-900 mt-50 mb-20">9. Cancellation and refunds</h2>
                            <p className="text-body-text color-gray-600 mb-20">
                                You can cancel a project at any time. You pay for work completed to that
                                point, and we hand over whatever has been built. The initial 50% covers
                                scoping, design and early development, so it is generally not refundable
                                once that work has started — but if we have not begun, we refund it.
                            </p>
                            <p className="text-body-text color-gray-600">
                                Monthly plans cancel with 30 days notice, no penalty, no lock-in. None of
                                this affects your rights under the Australian Consumer Law if something
                                genuinely goes wrong with the service.
                            </p>

                            <h2 className="text-heading-3 color-gray-900 mt-50 mb-20">10. Support after launch</h2>
                            <p className="text-body-text color-gray-600">
                                Every project includes post-launch support at no extra cost for the period
                                stated in your quote. That covers fixing anything that does not work as
                                agreed. It does not cover new features, content changes or third-party
                                problems, which are quoted separately or covered by a monthly plan.
                            </p>

                            <h2 className="text-heading-3 color-gray-900 mt-50 mb-20">11. Confidentiality</h2>
                            <p className="text-body-text color-gray-600">
                                We keep your business information confidential and will not share it with
                                anyone outside our studio without your permission, except where the law
                                requires it. This continues after the project ends.
                            </p>

                            <h2 className="text-heading-3 color-gray-900 mt-50 mb-20">12. Governing law</h2>
                            <p className="text-body-text color-gray-600">
                                These terms are governed by the laws of Victoria, Australia. If a dispute
                                arises, both parties agree to attempt to resolve it in good faith by
                                discussion before taking any other step.
                            </p>

                            <h2 className="text-heading-3 color-gray-900 mt-50 mb-20">13. Changes</h2>
                            <p className="text-body-text color-gray-600">
                                We may update these terms. The version that applies to your project is the
                                one in effect when you accepted the quote.
                            </p>

                            <div className="mt-60 p-40" style={{ background: "#F4FAFB", border: "1px solid #BEE1E6", borderRadius: 16 }}>
                                <h3 className="text-heading-5 color-gray-900 mb-15">Anything unclear?</h3>
                                <p className="text-body-text color-gray-600 mb-20">
                                    Ask before you sign, not after. We would rather explain a clause than
                                    have you agree to something you are unsure about.
                                </p>
                                <Link href="/contact/" className="btn btn-black icon-arrow-right-white">Ask us</Link>
                            </div>

                            <p className="text-body-small color-gray-500 mt-40">
                                See also our <Link href="/privacy/" className="color-green-900">Privacy Policy</Link>.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
