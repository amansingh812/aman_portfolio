/**
 * /pricing/ — Fixed AUD pricing.
 *
 * Thin wrapper for the Agon "page-pricing-1" template. Copy is still Agon demo;
 * to be swapped for content/home.js PRICE_TIERS + RETAINER per
 * docs/CONTENT-PLAN.md §7. First real edit: reconcile the AUD numbers
 * (§12 open decision 1).
 */
export { default } from "../page-pricing-1/page";

export const metadata = {
    title: "Pricing — Fixed AUD Prices, Published Upfront",
    description:
        "Landing pages from AU$1,000, business websites from AU$3,800, e-commerce from AU$5,000. Written fixed quotes in 24 hours.",
    alternates: { canonical: "/pricing/" },
};
