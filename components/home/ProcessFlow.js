"use client"
/**
 * Animated "how hiring us works" flow (homepage, Nov 2026).
 * Left: four steps on a rail that fills as the flow advances.
 * Right: a live mini-scene per step (chat, design, estimate, launch).
 * Auto-advances when in view; pauses on hover/focus; click or arrow keys to choose.
 * Respects prefers-reduced-motion (no auto-advance, no motion).
 */
import { useEffect, useRef, useState } from "react"

const CSS = `
.pf{display:grid;grid-template-columns:.95fr 1.05fr;gap:48px;align-items:center}
.pf-steps{position:relative;list-style:none;margin:0;padding:0}
.pf-rail{position:absolute;left:23px;top:24px;bottom:24px;width:3px;background:#E4E7EC;border-radius:3px;overflow:hidden}
.pf-rail i{display:block;width:100%;background:linear-gradient(#006D77,#83C5BE);transition:height .6s cubic-bezier(.4,0,.2,1)}
.pf-step{position:relative;display:grid;grid-template-columns:48px 1fr;gap:18px;width:100%;text-align:left;background:none;border:0;padding:14px 14px 14px 0;border-radius:16px;cursor:pointer;font:inherit;transition:background .3s}
.pf-step:hover{background:#F8FAFB}
.pf-dot{width:48px;height:48px;border-radius:50%;background:#fff;border:3px solid #E4E7EC;display:grid;place-items:center;font-weight:800;color:#667085;z-index:1;transition:all .4s}
.pf-step.done .pf-dot{border-color:#006D77;color:#006D77}
.pf-step.on .pf-dot{background:#006D77;border-color:#006D77;color:#fff;box-shadow:0 0 0 8px rgba(0,109,119,.14);transform:scale(1.06)}
.pf-h{display:block;font-weight:700;font-size:21px;margin:8px 0 0;color:#667085;transition:color .3s}
.pf-step.on .pf-h,.pf-step.done .pf-h{color:#101828}
.pf-body{display:grid;grid-template-rows:0fr;transition:grid-template-rows .45s ease}
.pf-step.on .pf-body{grid-template-rows:1fr}
.pf-in{display:block;overflow:hidden}
.pf-p{display:block;margin:8px 0 6px;color:#475467;font-size:16px;line-height:1.6}
.pf-body small{color:#005F68;font-weight:700}
.pf-stage{position:relative;aspect-ratio:5/4;border-radius:28px;background:radial-gradient(120% 100% at 80% 0%,#0B5F68 0%,#004349 55%,#06262A 100%);overflow:hidden;box-shadow:0 40px 80px -40px rgba(0,67,73,.7)}
.pf-stage:before{content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(255,255,255,.09) 1px,transparent 1px);background-size:22px 22px}
.pf-scene{position:absolute;inset:0;display:grid;place-items:center;padding:8%;opacity:0;transform:translateY(18px) scale(.97);transition:opacity .5s,transform .5s;pointer-events:none}
.pf-scene.on{opacity:1;transform:none}
.pf-win{width:100%;background:#fff;border-radius:16px;box-shadow:0 24px 50px -20px rgba(0,0,0,.5);overflow:hidden}
.pf-bar{display:flex;gap:6px;align-items:center;padding:10px 14px;background:#F2F4F7}
.pf-bar b{width:9px;height:9px;border-radius:50%;background:#D0D5DD}
.pf-bar span{margin-left:8px;font-size:12px;color:#667085}
.pf-pad{padding:18px}
.pf-bub{max-width:82%;padding:11px 14px;border-radius:16px;font-size:14px;line-height:1.45;margin-bottom:10px;opacity:0}
.pf-bub.me{background:#E6F3F5;color:#101828;border-bottom-left-radius:4px}
.pf-bub.us{background:#006D77;color:#fff;margin-left:auto;border-bottom-right-radius:4px}
.on .pf-bub{animation:pfIn .5s forwards}.on .pf-bub:nth-child(2){animation-delay:.9s}.on .pf-bub:nth-child(3){animation-delay:1.7s}
.pf-sk{border-radius:8px;background:#EAECF0;opacity:0}
.on .pf-sk{animation:pfIn .45s forwards}
.on .pf-sk.c{animation:pfIn .45s forwards,pfTeal .6s 1.6s forwards}
.on .pf-sk.d{animation:pfIn .45s forwards,pfDark .6s 1.9s forwards}
.pf-row{display:flex;justify-content:space-between;align-items:center;padding:11px 0;border-bottom:1px solid #EAECF0;font-size:14px;color:#344054;opacity:0}
.on .pf-row{animation:pfIn .45s forwards}
.pf-tick{width:20px;height:20px;border-radius:50%;background:#12B76A;color:#fff;display:grid;place-items:center;font-size:12px;transform:scale(0)}
.on .pf-tick{animation:pfPop .4s forwards}
.pf-live{display:inline-flex;align-items:center;gap:8px;background:#ECFDF3;color:#067647;font-weight:800;font-size:13px;padding:6px 12px;border-radius:99px}
.pf-live i{width:9px;height:9px;border-radius:50%;background:#12B76A;animation:pfPulse 1.4s infinite}
.pf-chip{display:inline-block;background:#E6F3F5;color:#004349;font-weight:700;font-size:13px;padding:7px 12px;border-radius:10px;margin:8px 8px 0 0;opacity:0}
.on .pf-chip{animation:pfIn .45s forwards}
.pf-prog{position:absolute;left:0;bottom:0;height:4px;background:#83C5BE}
@keyframes pfIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}
@keyframes pfPop{to{transform:scale(1)}}
@keyframes pfTeal{to{background:#006D77}}
@keyframes pfDark{to{background:#101828}}
@keyframes pfPulse{0%{box-shadow:0 0 0 0 rgba(18,183,106,.5)}100%{box-shadow:0 0 0 10px rgba(18,183,106,0)}}
@keyframes pfBar{from{width:0}to{width:100%}}
@media(max-width:991px){.pf{grid-template-columns:1fr;gap:28px}.pf-stage{order:-1;aspect-ratio:4/3}}
@media(prefers-reduced-motion:reduce){.pf *{animation:none!important;transition:none!important}.pf-bub,.pf-sk,.pf-row,.pf-chip{opacity:1}.pf-tick{transform:none}}
`

const d = (s) => ({ animationDelay: `${s}s` })

function Scene({ i, on }) {
    const c = `pf-scene${on ? " on" : ""}`
    if (i === 0) return (
        <div className={c} aria-hidden="true"><div className="pf-win"><div className="pf-bar"><b /><b /><b /><span>New enquiry</span></div><div className="pf-pad">
            <div className="pf-bub me">We run a physio clinic. We need a site that gets more bookings.</div>
            <div className="pf-bub us">Thanks! That's all we need to start your homepage design.</div>
            <div className="pf-bub me">That was easy 👍</div>
        </div></div></div>)
    if (i === 1) return (
        <div className={c} aria-hidden="true"><div className="pf-win"><div className="pf-bar"><b /><b /><b /><span>Your homepage · design preview</span></div><div className="pf-pad">
            <div className="pf-sk c" style={{ height: 14, width: "38%", ...d(.1) }} />
            <div className="pf-sk" style={{ height: 9, width: "80%", marginTop: 12, ...d(.3) }} />
            <div className="pf-sk" style={{ height: 9, width: "62%", marginTop: 8, ...d(.45) }} />
            <div style={{ display: "flex", gap: 8, marginTop: 14 }}>
                <div className="pf-sk d" style={{ height: 30, width: 96, ...d(.6) }} /><div className="pf-sk" style={{ height: 30, width: 96, ...d(.7) }} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10, marginTop: 16 }}>
                {[0, 1, 2].map((k) => <div key={k} className="pf-sk c" style={{ height: 62, ...d(.9 + k * .15) }} />)}
            </div>
        </div></div></div>)
    if (i === 2) return (
        <div className={c} aria-hidden="true"><div className="pf-win"><div className="pf-bar"><b /><b /><b /><span>Written estimate</span></div><div className="pf-pad">
            {["Scope: pages and features", "Timeline: week by week", "Cost: phase by phase", "Changes only if scope changes"].map((t, k) => (
                <div key={t} className="pf-row" style={d(.15 + k * .35)}><span>{t}</span><span className="pf-tick" style={d(.4 + k * .35)}>✓</span></div>
            ))}
        </div></div></div>)
    return (
        <div className={c} aria-hidden="true"><div className="pf-win"><div className="pf-bar"><b /><b /><b /><span>yourbusiness.com</span></div><div className="pf-pad">
            <span className="pf-live"><i />Live</span>
            <div className="pf-sk c" style={{ height: 14, width: "46%", marginTop: 14, ...d(.2) }} />
            <div className="pf-sk" style={{ height: 9, width: "78%", marginTop: 10, ...d(.35) }} />
            <div style={{ marginTop: 10 }}>
                {["Code", "Domain", "Hosting"].map((t, k) => <span key={t} className="pf-chip" style={d(.7 + k * .25)}>🔑 {t}: yours</span>)}
            </div>
        </div></div></div>)
}

export default function ProcessFlow({ steps, interval = 4200 }) {
    const [i, setI] = useState(0)
    const [run, setRun] = useState(false)
    const [hold, setHold] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return
        const io = new IntersectionObserver(([e]) => setRun(e.isIntersecting), { threshold: 0.35 })
        ref.current && io.observe(ref.current)
        return () => io.disconnect()
    }, [])
    useEffect(() => {
        if (!run || hold) return
        const t = setTimeout(() => setI((x) => (x + 1) % steps.length), interval)
        return () => clearTimeout(t)
    }, [i, run, hold, steps.length, interval])

    return (
        <div className="pf" ref={ref} onMouseEnter={() => setHold(true)} onMouseLeave={() => setHold(false)}
            onFocus={() => setHold(true)} onBlur={() => setHold(false)}>
            <style dangerouslySetInnerHTML={{ __html: CSS }} />
            <ol className="pf-steps">
                <span className="pf-rail" aria-hidden="true"><i style={{ height: `${(i / (steps.length - 1)) * 100}%` }} /></span>
                {steps.map((s, k) => (
                    <li key={s.title}>
                        <button type="button" className={`pf-step${k === i ? " on" : k < i ? " done" : ""}`}
                            aria-current={k === i ? "step" : undefined} onClick={() => setI(k)}>
                            <span className="pf-dot">{k < i ? "✓" : k + 1}</span>
                            <span>
                                <span className="pf-h">{s.title}</span>
                                {/* Text stays in the HTML for every step (SEO); only height animates. */}
                                <span className="pf-body"><span className="pf-in"><span className="pf-p">{s.text}</span><small>{s.when}</small></span></span>
                            </span>
                        </button>
                    </li>
                ))}
            </ol>
            <div className="pf-stage">
                {steps.map((_, k) => <Scene key={k} i={k} on={k === i} />)}
                {run && !hold && <span key={i} className="pf-prog" style={{ animation: `pfBar ${interval}ms linear forwards` }} />}
            </div>
        </div>
    )
}
