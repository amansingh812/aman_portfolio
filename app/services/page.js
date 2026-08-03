/**
 * /services/ — Services hub.
 *
 * Thin wrapper that renders the Agon "page-service-1" template for now.
 * Copy is still Agon demo content — will be swapped for content/home.js
 * SERVICE_CARDS and full service descriptions per docs/CONTENT-PLAN.md §5.
 */
export { default } from "../page-service-1/page";

export const metadata = {
    title: "Services — Web, App & AI Development for Australian Businesses",
    description:
        "Business websites, e-commerce, AI chatbots, apps and Next.js development. Fixed AUD pricing, published upfront.",
    alternates: { canonical: "/services/" },
};
