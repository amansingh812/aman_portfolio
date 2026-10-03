'use client'
import { useState } from "react"
import { track, EVENTS, LEAD_SOURCES } from "@/lib/analytics"

/**
 * `source` / `formLocation` identify which page sent the lead, in the email
 * notification and in the GA4 generate_lead event (which Google Ads imports
 * as a conversion). `wrapperClass` lets landing pages use a wider column.
 *
 * `variant="free-design"` (6 Oct 2026) asks for the current website and
 * fires free_design_request alongside generate_lead.
 *
 * Every form also sends "How did you hear about us?" (`heardFrom`) and the
 * page path + query string (`page`, which carries any utm_ parameters), so
 * each enquiry email shows where the lead came from.
 */
export default function ContactPageForm({
    source = "Contact page",
    wrapperClass = "col-lg-8",
    variant = "quote",
    submitLabel,
} = {}) {
    const isDesign = variant === "free-design"
    const [status, setStatus] = useState("idle")
    const [form, setForm] = useState({
        name: "", company: "", email: "", phone: "", website: "", message: "", heardFrom: "",
    })

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus("sending")
        try {
            const page = typeof window !== "undefined" ? window.location.pathname + window.location.search : ""
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...form, source, page }),
            })
            // Fire only on a confirmed successful send — counting
            // failed submissions as conversions would inflate the
            // one number we are trying to make trustworthy.
            if (res.ok) {
                const params = { form_location: source, lead_source: form.heardFrom || "not answered" }
                track(EVENTS.GENERATE_LEAD, params)
                if (isDesign) track(EVENTS.FREE_DESIGN_REQUEST, params)
            }
            setStatus(res.ok ? "sent" : "error")
        } catch {
            setStatus("error")
        }
    }

    if (status === "sent") {
        return (
            <div className={wrapperClass}>
                <div className="p-40 bdrd-16 text-center" style={{ background: '#FEF3ED' }}>
                    <div style={{ fontSize: 40, marginBottom: 16 }}>✓</div>
                    <h3 className="text-heading-3 color-gray-900">
                        {isDesign ? "Request received!" : "Message sent!"}
                    </h3>
                    <p className="text-body-lead color-gray-600 mt-15">
                        Check your inbox — we have sent you a confirmation.{" "}
                        {isDesign
                            ? "We will be in touch within one business day to start your homepage design."
                            : "We will reply with a fixed AUD quote within one business day."}
                    </p>
                </div>
            </div>
        )
    }

    if (status === "error") {
        return (
            <div className={wrapperClass}>
                <div className="p-40 bdrd-16 text-center" style={{ background: '#FEF2F2' }}>
                    <h3 className="text-heading-4 color-gray-900">Something went wrong</h3>
                    <p className="text-body-text color-gray-600 mt-15">
                        Please email us directly at contact@buildfirstsite.com
                    </p>
                    <button className="btn btn-black mt-20" onClick={() => setStatus("idle")}>Try again</button>
                </div>
            </div>
        )
    }

    return (
        <div className={wrapperClass}>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group">
                            <input className="form-control" name="name" placeholder="Your name" required
                                value={form.name} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <input className="form-control" name="company"
                                placeholder={isDesign ? "Business name" : "Company (optional)"}
                                required={isDesign}
                                value={form.company} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <input className="form-control" type="email" name="email" placeholder="Your email" required
                                value={form.email} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <input className="form-control" name="phone" placeholder="Phone number"
                                value={form.phone} onChange={handleChange} />
                        </div>
                    </div>
                    {isDesign && (
                        <div className="col-lg-12">
                            <div className="form-group">
                                <input className="form-control" name="website"
                                    placeholder="Current website, if you have one (optional)"
                                    value={form.website} onChange={handleChange} />
                            </div>
                        </div>
                    )}
                    <div className="col-lg-12">
                        <div className="form-group">
                            <textarea className="form-control" name="message"
                                placeholder={isDesign
                                    ? "What does your business do, and what should the website help with?"
                                    : "Tell us about your project — what you want to build, timeline, budget"}
                                rows={isDesign ? 4 : 5} value={form.message} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-group">
                            <select className="form-control" name="heardFrom" aria-label="How did you hear about us?"
                                value={form.heardFrom} onChange={handleChange}
                                style={{ color: form.heardFrom ? '#101828' : '#667085' }}>
                                <option value="" style={{ color: '#667085' }}>How did you hear about us? (optional)</option>
                                {LEAD_SOURCES.map((o) => <option key={o} value={o} style={{ color: '#101828' }}>{o}</option>)}
                            </select>
                        </div>
                    </div>
                    <div className="col-lg-12 mt-15">
                        <button className="btn btn-black icon-arrow-right-white mr-40 mb-20" type="submit"
                            disabled={status === "sending"}>
                            {status === "sending"
                                ? "Sending..."
                                : (submitLabel || (isDesign ? "Get my free homepage design" : "Send Message"))}
                        </button>
                        <span className="text-body-text-md color-gray-500">
                            We reply within one business day.
                        </span>
                    </div>
                </div>
            </form>
        </div>
    )
}
