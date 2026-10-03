'use client'
/**
 * Global conversion-intent tracker.
 *
 * Catches clicks on phone, WhatsApp, Calendly and email links, plus any
 * element with a data-event attribute, ANYWHERE on the
 * site using one document-level listener, rather than wiring an onClick onto
 * each link individually.
 *
 * WHY THIS WAY: those links appear across ~19 files (13 Calendly, 3 tel, 3
 * WhatsApp) and more get added with every landing page. Per-link handlers
 * would be tedious to add and — more importantly — silently incomplete the
 * moment someone adds a new CTA and forgets. A delegated listener covers every
 * link that exists now and every one added later, with no discipline required.
 *
 * Uses capture phase so the event is recorded before any other handler can
 * stop propagation or navigate away.
 *
 * Mounted once in components/layout/Layout.js.
 */
import { useEffect } from "react"
import { track, EVENTS } from "@/lib/analytics"

export default function ConversionTracker() {
    useEffect(() => {
        const onClick = (e) => {
            // closest() so a click on a child (icon, span) inside the link
            // still resolves to the anchor.
            // Named events: any element with data-event="..." (e.g. the
            // pricing cards and homepage path buttons). data-package carries
            // which one. Checked before the link types below.
            const named = e.target?.closest?.("[data-event]")
            if (named) {
                track(named.dataset.event, {
                    package: named.dataset.package || "unknown",
                    link_location: named.dataset.loc || "unknown",
                })
            }

            const a = e.target?.closest?.("a[href]")
            if (!a) return

            const href = a.getAttribute("href") || ""

            if (href.startsWith("tel:")) {
                track(EVENTS.PHONE_CLICK, { link_location: a.dataset.loc || "unknown" })
            } else if (href.includes("wa.me") || href.includes("whatsapp")) {
                track(EVENTS.WHATSAPP_CLICK, { link_location: a.dataset.loc || "unknown" })
            } else if (href.includes("calendly.com")) {
                track(EVENTS.BOOKING_CLICK, { link_location: a.dataset.loc || "unknown" })
            } else if (href.startsWith("mailto:")) {
                track(EVENTS.EMAIL_CLICK, { link_location: a.dataset.loc || "unknown" })
            }
        }

        document.addEventListener("click", onClick, true)
        return () => document.removeEventListener("click", onClick, true)
    }, [])

    return null
}
