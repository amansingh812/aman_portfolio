/**
 * /privacy/ — Privacy Policy.
 *
 * ⚠️  NOT LEGAL ADVICE. Written to reflect how the site actually behaves and
 *     to align with the Privacy Act 1988 (Cth) and the Australian Privacy
 *     Principles. Have a lawyer review before relying on it.
 *
 * NOTE ON THE SMALL BUSINESS EXEMPTION: businesses with annual turnover under
 * $3 million are generally exempt from the Privacy Act. We publish a policy
 * anyway — Google Analytics' terms require one, and buyers check.
 *
 * ⚠️  KEEP THIS TRUTHFUL. If you add a tool that collects data (heatmaps,
 *     chat widget, ad pixel, CRM), add it here in the same sitting. A policy
 *     that does not match reality is worse than none.
 */
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { SITE, NAP } from "@/content/site"

export const metadata = {
    title: "Privacy Policy",
    description:
        "How Build First Site collects, uses and protects your personal information under the Australian Privacy Principles. Plain English, no dark patterns.",
    alternates: { canonical: "/privacy/" },
    robots: { index: true, follow: true },
}

const UPDATED = "8 August 2026"

export default function Privacy() {
    return (
        <Layout>
            <section className="section-box mt-70 mb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <span className="tag-1 bg-6 color-green-900">Legal</span>
                            <h1 className="text-heading-1 color-gray-900 mt-25 mb-15">Privacy Policy</h1>
                            <p className="text-body-small color-gray-500 mb-40">Last updated {UPDATED}</p>

                            <p className="text-body-lead-large color-gray-600 mb-40">
                                Short version: we collect what you send us through the contact form,
                                we use it to reply to you, and we do not sell it to anyone. The
                                detail is below.
                            </p>

                            <h2 className="text-heading-3 color-gray-900 mt-50 mb-20">Who we are</h2>
                            <p className="text-body-text color-gray-600">
                                Build First Site is a two-person web development studio operating from
                                {" "}{NAP.addressLocality}, {NAP.addressRegion}, Australia. You can reach us at{" "}
                                <a href={`mailto:${SITE.email}`} className="color-green-900">{SITE.email}</a>{" "}
                                or {NAP.phone}.
                            </p>

                            <h2 className="text-heading-3 color-gray-900 mt-50 mb-20">What we collect</h2>
                            <p className="text-body-text color-gray-600 mb-20">
                                <strong>When you contact us.</strong> Your name, email address, and
                                optionally your phone number, business name and whatever you write in
                                the message. That is it — the form asks for nothing else.
                            </p>
                            <p className="text-body-text color-gray-600 mb-20">
                                <strong>When you use the website.</strong> Standard analytics — pages
                                visited, approximate location by city, device and browser type, and
                                how you arrived. This is aggregated and we cannot identify you from it.
                            </p>
                            <p className="text-body-text color-gray-600 mb-20">
                                <strong>When you use our free tools.</strong> The website speed checker
                                sends the URL you enter to Google&apos;s PageSpeed Insights API to run
                                the test. We do not store the URLs you check or link them to you.
                            </p>
                            <p className="text-body-text color-gray-600">
                                <strong>What we never collect.</strong> We do not ask for payment card
                                details on this website, we do not run advertising pixels, and we do
                                not buy contact lists.
                            </p>

                            <h2 className="text-heading-3 color-gray-900 mt-50 mb-20">Why we collect it</h2>
                            <p className="text-body-text color-gray-600">
                                To reply to your enquiry, prepare a quote, deliver work you have engaged
                                us for, and understand which pages of the site are useful. Nothing else.
                                We do not use your information for automated decision-making or profiling.
                            </p>

                            <h2 className="text-heading-3 color-gray-900 mt-50 mb-20">Who else sees it</h2>
                            <p className="text-body-text color-gray-600 mb-20">
                                We do not sell, rent or trade your personal information. It is shared
                                only with the services that make the site work:
                            </p>
                            <ul className="text-body-text color-gray-600" style={{ paddingLeft: 20 }}>
                                <li className="mb-10"><strong>Vercel</strong> — hosting. Server logs including IP addresses.</li>
                                <li className="mb-10"><strong>Google Analytics</strong> — anonymised usage statistics.</li>
                                <li className="mb-10"><strong>Google Workspace</strong> — enquiries arrive as email.</li>
                                <li className="mb-10"><strong>Calendly</strong> — only if you book a call.</li>
                                <li className="mb-10"><strong>Google PageSpeed Insights</strong> — only URLs you submit to the speed checker.</li>
                            </ul>
                            <p className="text-body-text color-gray-600 mt-20">
                                Some of these store data overseas, including in the United States. By
                                using the site you consent to that transfer. We would also disclose
                                information if required by Australian law.
                            </p>

                            <h2 className="text-heading-3 color-gray-900 mt-50 mb-20">How long we keep it</h2>
                            <p className="text-body-text color-gray-600">
                                Enquiries are kept for two years so we can pick up a conversation if you
                                come back. Client project records are kept for seven years, which is what
                                Australian tax law requires. Analytics data expires on Google&apos;s
                                standard retention schedule. Ask us to delete your information sooner and
                                we will, unless we are legally required to keep it.
                            </p>

                            <h2 className="text-heading-3 color-gray-900 mt-50 mb-20">Cookies</h2>
                            <p className="text-body-text color-gray-600">
                                The site uses analytics cookies only. There are no advertising or
                                tracking cookies, and no third-party ad networks. You can block cookies
                                in your browser settings and the site will still work normally.
                            </p>

                            <h2 className="text-heading-3 color-gray-900 mt-50 mb-20">Your rights</h2>
                            <p className="text-body-text color-gray-600 mb-20">
                                Under the Australian Privacy Principles you can ask us to show you what
                                we hold about you, correct anything wrong, delete it, or explain how we
                                are using it. Email{" "}
                                <a href={`mailto:${SITE.email}`} className="color-green-900">{SITE.email}</a>{" "}
                                and we will respond within 30 days. There is no charge.
                            </p>
                            <p className="text-body-text color-gray-600">
                                If you are unhappy with how we handled a privacy matter, tell us first
                                and we will try to fix it. If that does not resolve things, you can
                                complain to the Office of the Australian Information Commissioner at{" "}
                                <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer"
                                    className="color-green-900">oaic.gov.au</a>.
                            </p>

                            <h2 className="text-heading-3 color-gray-900 mt-50 mb-20">Security</h2>
                            <p className="text-body-text color-gray-600">
                                The site runs on HTTPS, enquiries are delivered over encrypted email, and
                                access is limited to the two of us. No system is perfectly secure, and we
                                will not claim otherwise — but we do not hold payment details or sensitive
                                categories of personal information, which limits what is at risk.
                            </p>

                            <h2 className="text-heading-3 color-gray-900 mt-50 mb-20">Changes</h2>
                            <p className="text-body-text color-gray-600">
                                If this policy changes we will update the date at the top. Material
                                changes affecting how we use information you have already given us will
                                be notified by email where we have your address.
                            </p>

                            <div className="mt-60 p-40" style={{ background: "#F4FAFB", border: "1px solid #BEE1E6", borderRadius: 16 }}>
                                <h3 className="text-heading-5 color-gray-900 mb-15">Questions?</h3>
                                <p className="text-body-text color-gray-600 mb-20">
                                    Email us and a real person replies — there are only two of us.
                                </p>
                                <Link href="/contact/" className="btn btn-black icon-arrow-right-white">Contact us</Link>
                            </div>

                            <p className="text-body-small color-gray-500 mt-40">
                                See also our <Link href="/terms/" className="color-green-900">Terms of Service</Link>.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
