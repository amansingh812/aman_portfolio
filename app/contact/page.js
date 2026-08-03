/**
 * /contact/ — Contact.
 *
 * Thin wrapper for the Agon "page-contact" template. Copy still Agon demo;
 * will be replaced per docs/CONTENT-PLAN.md §9 — real form + AU phone,
 * Calendly, response-time promise. Web3Forms integration needed
 * (env: NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY).
 */
export { default } from "../page-contact/page";

export const metadata = {
    title: "Contact — Get a Fixed Quote in 24 Hours",
    description:
        "Tell us what you're trying to build. A written fixed AUD quote within 24 hours, or book a free 30-minute call.",
    alternates: { canonical: "/contact/" },
};
