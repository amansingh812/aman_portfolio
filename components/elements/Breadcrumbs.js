import Link from "next/link"

/**
 * Visible breadcrumb trail.
 *
 * WHY THIS EXISTS: five templates emit `BreadcrumbList` JSON-LD but nothing
 * rendered a breadcrumb on the page. Google's structured data guidelines
 * require marked-up content to be visible to users — markup describing a
 * navigation element that does not exist is a guideline violation, and the
 * BreadcrumbList rich result will not be granted for it either.
 *
 * Also genuinely useful: on a 50-page site a visitor landing from search has no
 * idea where they are, and breadcrumbs add real internal links from deep pages
 * back to hubs — which matters here, because Google counts only 28 internal
 * links sitewide and discounts our footer as boilerplate.
 *
 * Pass the same trail used to build the JSON-LD so the two cannot drift.
 *
 *   <Breadcrumbs items={[{ name: 'Guides', href: '/guides/' }, { name: title }]} />
 *
 * The final item has no href — it is the current page.
 */
export default function Breadcrumbs({ items = [] }) {
    if (!items.length) return null

    return (
        <nav aria-label="Breadcrumb" className="mb-20">
            <ol
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    gap: 8,
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                }}
            >
                <li>
                    <Link href="/" className="text-body-small color-gray-500">Home</Link>
                </li>
                {items.map((item, i) => {
                    const isLast = i === items.length - 1
                    return (
                        <li key={item.href || item.name} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                            <span className="text-body-small color-gray-400" aria-hidden="true">/</span>
                            {isLast || !item.href ? (
                                // Current page: not a link, and marked as such for
                                // screen readers rather than just styled differently.
                                <span className="text-body-small color-gray-700" aria-current="page">
                                    {item.name}
                                </span>
                            ) : (
                                <Link href={item.href} className="text-body-small color-gray-500">
                                    {item.name}
                                </Link>
                            )}
                        </li>
                    )
                })}
            </ol>
        </nav>
    )
}
