'use client'
import { useState } from "react"

export default function ContactPageForm() {
    const [status, setStatus] = useState("idle")
    const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", message: "" })

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus("sending")
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...form, source: "Contact page" }),
            })
            setStatus(res.ok ? "sent" : "error")
        } catch {
            setStatus("error")
        }
    }

    if (status === "sent") {
        return (
            <div className="col-lg-8">
                <div className="p-40 bdrd-16 text-center" style={{ background: '#FEF3ED' }}>
                    <div style={{ fontSize: 40, marginBottom: 16 }}>✓</div>
                    <h3 className="text-heading-3 color-gray-900">Message sent!</h3>
                    <p className="text-body-lead color-gray-600 mt-15">
                        Check your inbox — we have sent you a confirmation.
                        We will reply with a fixed AUD quote within one business day.
                    </p>
                </div>
            </div>
        )
    }

    if (status === "error") {
        return (
            <div className="col-lg-8">
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
        <div className="col-lg-8">
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
                            {status === "sending" ? "Sending..." : "Send Message"}
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
