'use client'
import { useState } from "react"

/**
 * Web3Forms-backed contact form using the Agon page-contact layout.
 * Extracted into its own client component so the parent page stays a
 * server component with proper metadata.
 */
export default function ContactPageForm() {
    const [status, setStatus] = useState("idle")
    const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", message: "" })

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus("sending")
        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "",
                subject: "New enquiry from Contact page",
                ...form,
            }),
        })
        setStatus(res.ok ? "sent" : "error")
    }

    if (status === "sent") {
        return (
            <div className="col-lg-8">
                <div className="p-40 bdrd-16" style={{ background: '#F4E9DF', textAlign: 'center' }}>
                    <h3 className="text-heading-3 color-gray-900">Message sent ✓</h3>
                    <p className="text-body-lead color-gray-700 mt-15">
                        We&apos;ll get back to you within one business day.
                    </p>
                </div>
            </div>
        )
    }

    return (
        <div className="col-lg-8">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group">
                            <input className="form-control" name="name" placeholder="Enter your name" required
                                value={form.name} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <input className="form-control" name="company" placeholder="Company (optional)"
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
                    <div className="col-lg-12">
                        <div className="form-group">
                            <textarea className="form-control" name="message"
                                placeholder="Tell us about your project — what you want to build, timeline, budget"
                                rows={5} value={form.message} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="col-lg-12 mt-15">
                        <button className="btn btn-black icon-arrow-right-white mr-40 mb-20" type="submit"
                            disabled={status === "sending"}>
                            {status === "sending" ? "Sending…" : "Send Message"}
                        </button>
                        <br className="d-lg-none d-block" />
                        <span className="text-body-text-md color-gray-500 mb-20">
                            By submitting you agree to our privacy policy — we reply within one business day.
                        </span>
                    </div>
                </div>
            </form>
        </div>
    )
}
