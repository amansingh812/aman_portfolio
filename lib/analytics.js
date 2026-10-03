/**
 * GA4 event tracking.
 *
 * WHY THIS EXISTS: for months GA4 recorded "Key events: 0" on every channel —
 * not because nobody enquired, but because nothing on the site was configured
 * as a conversion. 76 sessions in 28 days with no way to tell whether any of
 * them turned into an enquiry. This file is the fix.
 *
 * After deploying, each event below must ALSO be marked as a key event in
 * GA4: Admin → Events → toggle "Mark as key event". Firing the event is only
 * half the job; GA4 will not count it as a conversion until it is marked.
 *
 * ─── PRIVACY ────────────────────────────────────────────────────────────
 * Never pass personal data into an event. No name, no email address, no
 * phone number, no free-text message content. GA4 terms prohibit it and it
 * is unnecessary — we need to know THAT someone enquired and from which page,
 * not who they are. That is what the inbox is for.
 */

/** Events we fire. Keep this list in sync with the key events set in GA4. */
export const EVENTS = {
    /** Contact/quote form submitted successfully — the real conversion. */
    GENERATE_LEAD: 'generate_lead',
    /** Tapped the phone number. High intent for local service buyers. */
    PHONE_CLICK: 'phone_click',
    /** Opened WhatsApp. */
    WHATSAPP_CLICK: 'whatsapp_click',
    /** Clicked through to Calendly. Leaves our domain, so this is the last
     *  thing we can measure before the handoff. */
    BOOKING_CLICK: 'booking_click',
    /** Clicked a mailto: link. */
    EMAIL_CLICK: 'email_click',
    /** Free homepage design form submitted (also fires generate_lead). */
    FREE_DESIGN_REQUEST: 'free_design_request',
    /** Clicked a package card on /pricing/ or the homepage (param: package). */
    PRICING_PACKAGE_CLICK: 'pricing_package_click',
    /** Homepage hero path choice: website vs automation (param: package). */
    CTA_PATH_CLICK: 'cta_path_click',
    /** Free automation audit submitted (also fires generate_lead). */
    AUTOMATION_AUDIT: 'automation_audit',
}

/**
 * "How did you hear about us?" options on every form. The answer goes into
 * the enquiry email and into GA4 as `lead_source`, so we learn which channels
 * produce enquiries rather than guessing (added 6 Oct 2026).
 */
export const LEAD_SOURCES = [
    'Google search',
    'ChatGPT or another AI assistant',
    'Google Maps / Business Profile',
    'LinkedIn',
    'Facebook',
    'Instagram',
    'Referral from someone',
    'Other',
]

/**
 * Fire a GA4 event.
 *
 * Safe to call anywhere: no-ops during SSR, and no-ops if gtag has not loaded
 * (ad blockers, consent tools, slow networks). Analytics must never be able to
 * break a form submission — if the tracking throws, the user still gets their
 * enquiry sent.
 *
 * @param {string} name   one of EVENTS
 * @param {object} params non-personal context, e.g. { location: 'header' }
 */
export function track(name, params = {}) {
    if (typeof window === 'undefined') return
    try {
        if (typeof window.gtag !== 'function') return
        window.gtag('event', name, {
            // Which page the action happened on — the whole point is knowing
            // WHICH content produces enquiries, not just that some did.
            page_path: window.location.pathname,
            ...params,
        })
    } catch {
        /* Tracking is never allowed to surface an error to the user. */
    }
}
