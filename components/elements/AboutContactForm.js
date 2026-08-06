'use client'
import { useState } from "react"

export default function AboutContactForm() {
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
                subject: "New enquiry from About page",
                ...form,
            }),
        })
        setStatus(res.ok ? "sent" : "error")
    }

    if (status === "sent") {
        return (
            <div className="col-lg-8 text-center pt-40">
                <h4 className="text-heading-4 color-gray-900">Message sent ✓</h4>
                <p className="text-body-text color-gray-600 mt-10">We will get back to you within one business day.</p>
            </div>
        )
    }

    return (
        <div className="col-lg-8">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group">
                            <input className="form-control" name="name" placeholder="Your name" required value={form.name} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <input className="form-control" name="company" placeholder="Company (optional)" value={form.company} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <input className="form-control" type="email" name="email" placeholder="Your email" required value={form.email} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <input className="form-control" name="phone" placeholder="Phone number" value={form.phone} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-group">
                            <textarea className="form-control" name="message" placeholder="Tell us about your project" rows={4} value={form.message} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="col-lg-12 mt-15">
                        <button className="btn btn-black icon-arrow-right-white mr-40 mb-20" type="submit" disabled={status === "sending"}>
                            {status === "sending" ? "Sending…" : "Send Message"}
                        </button>
                        <span className="text-body-text-md color-gray-500 mb-20">By submitting you agree to our privacy policy.</span>
                    </div>
                </div>
            </form>
        </div>
    )
}
