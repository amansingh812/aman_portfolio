'use client'
/**
 * Free automation audit: a 4-step form (3 multiple-choice questions + contact
 * details). Posts to /api/contact like every other form, with the answers in
 * the message, so it uses the same notification + branded auto-reply.
 *
 * GA4: fires generate_lead (the conversion) and automation_audit on a
 * confirmed send only. No personal data in events (lib/analytics.js).
 *
 * Accessibility: options are real checkboxes inside labels, so they work with
 * keyboard and screen readers; each step is a <fieldset> with a <legend>.
 */
import { useState } from "react"
import { track, EVENTS, LEAD_SOURCES } from "@/lib/analytics"
import { AUTOMATION_AUDIT as A } from "@/content/automation"

const css = `
.aq { background:#fff; border:1px solid #E4E7EC; border-radius:20px; padding:30px; box-shadow:0 20px 50px rgba(16,24,40,.07); }
.aq-bar { height:6px; background:#E4E7EC; border-radius:6px; margin-bottom:22px; overflow:hidden; }
.aq-bar i { display:block; height:100%; background:#006D77; transition:width .3s; }
.aq fieldset { border:0; padding:0; margin:0; }
.aq legend { font-size:20px; font-weight:700; color:#101828; margin-bottom:6px; }
.aq-opts { display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-top:14px; }
@media (max-width:575px){ .aq-opts{ grid-template-columns:1fr; } }
.aq-opt { display:flex; gap:10px; align-items:center; border:1.5px solid #E4E7EC; border-radius:12px; padding:12px 14px; cursor:pointer; font-size:15px; }
.aq-opt.sel { border-color:#006D77; background:#F4FAFB; color:#006D77; font-weight:600; }
.aq-opt input { accent-color:#006D77; }
.aq-nav { display:flex; justify-content:space-between; align-items:center; margin-top:22px; }
.aq-back { background:none; border:0; color:#667085; font:inherit; cursor:pointer; padding:8px 0; }
`

export default function AuditQuiz() {
    const Q = A.questions
    const contactStep = Q.length
    const [step, setStep] = useState(0)
    const [answers, setAnswers] = useState(Object.fromEntries(Q.map((q) => [q.id, []])))
    const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", message: "", heardFrom: "" })
    const [status, setStatus] = useState("idle")

    const toggle = (q, opt) => {
        setAnswers((prev) => {
            const cur = prev[q.id]
            if (cur.includes(opt)) return { ...prev, [q.id]: cur.filter((o) => o !== opt) }
            if (q.max && cur.length >= q.max) return prev
            return { ...prev, [q.id]: [...cur, opt] }
        })
    }
    const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

    const submit = async (e) => {
        e.preventDefault()
        setStatus("sending")
        const summary = Q.map((q) => `${q.title}\n- ${answers[q.id].length ? answers[q.id].join("\n- ") : "(not answered)"}`).join("\n\n")
        const message = `FREE AUTOMATION AUDIT\n\n${summary}${form.message ? `\n\nAnything else:\n${form.message}` : ""}`
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...form,
                    message,
                    source: "Free automation audit",
                    page: window.location.pathname + window.location.search,
                }),
            })
            if (res.ok) {
                const params = { form_location: "Free automation audit", lead_source: form.heardFrom || "not answered" }
                track(EVENTS.GENERATE_LEAD, params)
                track(EVENTS.AUTOMATION_AUDIT, params)
            }
            setStatus(res.ok ? "sent" : "error")
        } catch {
            setStatus("error")
        }
    }

    const pct = Math.round(((Math.min(step, contactStep) + 1) / (contactStep + 1)) * 100)

    if (status === "sent") {
        return (
            <div className="aq text-center">
                <style dangerouslySetInnerHTML={{ __html: css }} />
                <div style={{ fontSize: 40, marginBottom: 12 }}>✓</div>
                <h3 className="text-heading-4 color-gray-900">Thanks, your audit is in the queue</h3>
                <p className="text-body-text color-gray-600 mt-10 mb-0">
                    Check your inbox for a confirmation. Your automation map arrives within {A.turnaround}.
                </p>
            </div>
        )
    }

    return (
        <form className="aq" onSubmit={submit}>
            <style dangerouslySetInnerHTML={{ __html: css }} />
            <div className="aq-bar" aria-hidden="true"><i style={{ width: `${pct}%` }} /></div>
            <p className="text-body-small color-gray-500 mb-10">Step {Math.min(step, contactStep) + 1} of {contactStep + 1}</p>

            {step < contactStep && (() => {
                const q = Q[step]
                return (
                    <fieldset>
                        <legend>{q.title}</legend>
                        <p className="text-body-small color-gray-500 mb-0">{q.hint}</p>
                        <div className="aq-opts">
                            {q.options.map((opt) => {
                                const sel = answers[q.id].includes(opt)
                                return (
                                    <label key={opt} className={`aq-opt${sel ? " sel" : ""}`}>
                                        <input type="checkbox" checked={sel} onChange={() => toggle(q, opt)} />
                                        {opt}
                                    </label>
                                )
                            })}
                        </div>
                    </fieldset>
                )
            })()}

            {step === contactStep && (
                <fieldset>
                    <legend>Where should we send your map?</legend>
                    <p className="text-body-small color-gray-500 mb-15">We reply within {A.turnaround}.</p>
                    <div className="row">
                        <div className="col-sm-6"><div className="form-group">
                            <input className="form-control" name="name" placeholder="Your name" required value={form.name} onChange={onChange} />
                        </div></div>
                        <div className="col-sm-6"><div className="form-group">
                            <input className="form-control" name="company" placeholder="Business name" value={form.company} onChange={onChange} />
                        </div></div>
                        <div className="col-sm-6"><div className="form-group">
                            <input className="form-control" type="email" name="email" placeholder="Your email" required value={form.email} onChange={onChange} />
                        </div></div>
                        <div className="col-sm-6"><div className="form-group">
                            <input className="form-control" name="phone" placeholder="Phone (optional)" value={form.phone} onChange={onChange} />
                        </div></div>
                        <div className="col-12"><div className="form-group">
                            <textarea className="form-control" name="message" rows={3}
                                placeholder="Anything else we should know? (optional)" value={form.message} onChange={onChange} />
                        </div></div>
                        <div className="col-12"><div className="form-group">
                            <select className="form-control" name="heardFrom" aria-label="How did you hear about us?" value={form.heardFrom} onChange={onChange}>
                                <option value="">How did you hear about us? (optional)</option>
                                {LEAD_SOURCES.map((o) => <option key={o} value={o}>{o}</option>)}
                            </select>
                        </div></div>
                    </div>
                </fieldset>
            )}

            {status === "error" && (
                <p className="text-body-small mt-10" style={{ color: "#B42318" }}>
                    Something went wrong. Please try again, or email contact@buildfirstsite.com.
                </p>
            )}

            <div className="aq-nav">
                <button type="button" className="aq-back" onClick={() => setStep((s) => Math.max(0, s - 1))}
                    style={{ visibility: step > 0 ? "visible" : "hidden" }}>
                    ← Back
                </button>
                {step < contactStep ? (
                    <button type="button" className="btn btn-black" onClick={() => setStep((s) => s + 1)}>Next →</button>
                ) : (
                    <button type="submit" className="btn btn-black" disabled={status === "sending"}>
                        {status === "sending" ? "Sending..." : "Send my audit"}
                    </button>
                )}
            </div>
        </form>
    )
}
