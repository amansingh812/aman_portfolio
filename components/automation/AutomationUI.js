/**
 * Shared visual pieces for the automation track (4 Oct 2026):
 *   <AutomationCard offer>  icon tile + animated mini-flow + outcome + link
 *   <FlowSteps steps>       larger animated "trigger → result" diagram
 *   AUTO_CSS                one stylesheet for both (inject once per page)
 *
 * Motion: a dot travels along each flow and the steps light up in turn. All
 * of it is CSS, stops for prefers-reduced-motion, and carries no information
 * that isn't also in the text (decorative, aria-hidden).
 *
 * Icons: ICONS from components/landing/ServiceKit.js (SVG, no emoji).
 * Prices: never rendered — automation pricing is quote-only (pricing.js).
 */
import Link from "next/link"
import { Icon } from "@/components/landing/ServiceKit"

/* Tile colours per offer, so the grid reads at a glance. */
const TINT = {
    "lead-reply": ["#FEF0C7", "#B54708"],
    report: ["#E0F2FE", "#026AA2"],
    "win-back": ["#FCE7F6", "#C11574"],
    "data-sync": ["#EBE9FE", "#5925DC"],
    "ai-replies": ["#DCFAE6", "#067647"],
}

export const AUTO_CSS = `
.ac { position:relative; display:flex; flex-direction:column; height:100%; background:#fff; border:1px solid #E4E7EC;
  border-radius:18px; padding:28px; transition:transform .25s ease, box-shadow .25s ease, border-color .25s ease; overflow:hidden; }
.ac:hover { transform:translateY(-4px); box-shadow:0 18px 40px rgba(16,24,40,.10); border-color:#BEE1E6; }
.ac-top { display:flex; align-items:center; gap:14px; margin-bottom:16px; }
.ac-ic { width:52px; height:52px; border-radius:14px; display:grid; place-items:center; flex:0 0 auto; transition:transform .3s ease; }
.ac:hover .ac-ic { transform:rotate(-6deg) scale(1.06); }
.ac-ic svg { width:26px; height:26px; fill:none; stroke:currentColor; stroke-width:1.8; stroke-linecap:round; stroke-linejoin:round; }
.ac-flow { display:flex; align-items:center; flex-wrap:wrap; gap:6px; margin:4px 0 16px; }
.ac-node { font-size:12px; font-weight:600; padding:5px 10px; border-radius:50px; background:#F2F4F7; color:#344054;
  animation:ac-lit 4.8s infinite; }
.ac-arrow { position:relative; width:18px; height:2px; background:#D0D5DD; border-radius:2px; overflow:hidden; }
.ac-arrow::after { content:""; position:absolute; top:-1px; left:-6px; width:6px; height:4px; border-radius:2px;
  background:#006D77; animation:ac-run 1.6s linear infinite; }
@keyframes ac-run { to { left:20px; } }
@keyframes ac-lit { 0%,18%{ background:#DBECE5; color:#006D77; } 25%,100%{ background:#F2F4F7; color:#344054; } }
.ac-more { margin-top:auto; font-size:14px; font-weight:600; color:#006D77; }
.ac-more span { display:inline-block; transition:transform .2s ease; }
.ac:hover .ac-more span { transform:translateX(4px); }

.fs { display:grid; gap:18px; position:relative; }
.fs-4 { grid-template-columns:repeat(4,1fr); } .fs-3 { grid-template-columns:repeat(3,1fr); }
@media (max-width:991px){ .fs-4,.fs-3{ grid-template-columns:1fr 1fr; } }
@media (max-width:575px){ .fs-4,.fs-3{ grid-template-columns:1fr; } }
.fs-step { position:relative; background:#fff; border:1px solid #E4E7EC; border-radius:16px; padding:24px 22px;
  animation:fs-lit 6s infinite; }
.fs-n { width:38px; height:38px; border-radius:50%; background:#006D77; color:#fff; display:grid; place-items:center;
  font-weight:700; margin-bottom:14px; box-shadow:0 0 0 0 rgba(0,109,119,.35); animation:fs-pulse 6s infinite; }
@keyframes fs-lit { 0%,22%{ border-color:#83C5BE; box-shadow:0 10px 30px rgba(0,109,119,.12); } 30%,100%{ border-color:#E4E7EC; box-shadow:none; } }
@keyframes fs-pulse { 0%{ box-shadow:0 0 0 0 rgba(0,109,119,.35); } 15%{ box-shadow:0 0 0 10px rgba(0,109,119,0); } 100%{ box-shadow:0 0 0 0 rgba(0,109,119,0); } }
.fs-step:not(:last-child)::after { content:"→"; position:absolute; right:-15px; top:34px; color:#83C5BE; font-weight:800; z-index:1; }
@media (max-width:991px){ .fs-step::after{ display:none; } }

@media (prefers-reduced-motion:reduce){
  .ac, .ac-ic, .ac-more span { transition:none; }
  .ac-node, .ac-arrow::after, .fs-step, .fs-n { animation:none; }
}
`

/** Stagger the highlight so steps light up one after another. */
const delay = (i, n, total) => ({ animationDelay: `${(i * total) / n}s` })

export function AutomationCard({ offer, track = "automation_card_click", loc = "card" }) {
    const [bg, fg] = TINT[offer.id] || ["#F4FAFB", "#006D77"]
    const steps = offer.flow || []
    return (
        <Link href={offer.href} className="ac text-decoration-none" data-event={track} data-package={offer.id} data-loc={loc}>
            <div className="ac-top">
                <span className="ac-ic" style={{ background: bg, color: fg }}>
                    <Icon name={offer.icon} />
                </span>
                <h3 className="text-heading-5 color-gray-900 mb-0">{offer.short}</h3>
            </div>
            {steps.length > 0 && (
                <div className="ac-flow" aria-hidden="true">
                    {steps.map((s, i) => (
                        <span key={s} style={{ display: "contents" }}>
                            <span className="ac-node" style={delay(i, steps.length, 4.8)}>{s}</span>
                            {i < steps.length - 1 && <span className="ac-arrow" />}
                        </span>
                    ))}
                </div>
            )}
            <p className="text-body-text color-gray-600 mb-20">{offer.outcome}</p>
            <span className="ac-more">See how it works <span>→</span></span>
        </Link>
    )
}

export function FlowSteps({ steps }) {
    const cls = steps.length === 3 ? "fs fs-3" : "fs fs-4"
    return (
        <ol className={cls} style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {steps.map((s, i) => (
                <li key={s.title} className="fs-step" style={delay(i, steps.length, 6)}>
                    <div className="fs-n" style={delay(i, steps.length, 6)}>{i + 1}</div>
                    <h3 className="text-heading-6 color-gray-900 mb-10">{s.title}</h3>
                    <p className="text-body-small color-gray-600 mb-0">{s.body}</p>
                </li>
            ))}
        </ol>
    )
}

export { Icon }
