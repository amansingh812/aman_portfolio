/* eslint-disable react/no-danger */
/**
 * Renders a block-based blog post body (h2 / h3 / p / ul / ol / table / quote)
 * using the Agon blog-single design system. Content blocks come from
 * /content/blog-content.js which was auto-extracted from the static HTML posts.
 */
import Image from "next/image"

export default function BlogContent({ blocks }) {
    if (!blocks?.length) return null

    return (
        <div className="single-detail-blocks">
            {blocks.map((b, i) => {
                switch (b.type) {
                    case "h2":
                        return <h2 key={i} className="text-heading-3 mt-40 mb-15">{b.text}</h2>
                    case "h3":
                        return <h3 key={i} className="text-heading-4 mt-30 mb-15">{b.text}</h3>
                    case "p":
                        return (
                            <p key={i}
                                className="text-body-lead color-gray-600 mb-15"
                                dangerouslySetInnerHTML={{ __html: b.html }} />
                        )
                    case "ul":
                        return (
                            <ul key={i} className="mb-20" style={{ paddingLeft: 20 }}>
                                {b.items.map((it, j) => (
                                    <li key={j} className="text-body-lead color-gray-600 mb-10"
                                        dangerouslySetInnerHTML={{ __html: it }} />
                                ))}
                            </ul>
                        )
                    case "ol":
                        return (
                            <ol key={i} className="mb-20" style={{ paddingLeft: 20 }}>
                                {b.items.map((it, j) => (
                                    <li key={j} className="text-body-lead color-gray-600 mb-10"
                                        dangerouslySetInnerHTML={{ __html: it }} />
                                ))}
                            </ol>
                        )
                    case "table":
                        return (
                            <div key={i} className="mt-30 mb-30" style={{ overflowX: 'auto' }}>
                                <table className="w-100" style={{
                                    borderCollapse: 'separate', borderSpacing: 0,
                                    border: '1px solid var(--bs-border-color, #E4E7EC)',
                                    borderRadius: 12,
                                    overflow: 'hidden'
                                }}>
                                    <thead style={{ background: '#F8F5F0' }}>
                                        <tr>
                                            {b.headers.map((h, j) => (
                                                <th key={j} className="text-heading-6" style={{ padding: '16px 20px', textAlign: 'left' }}>{h}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {b.rows.map((row, r) => (
                                            <tr key={r} style={{ borderTop: '1px solid #E4E7EC' }}>
                                                {row.map((c, k) => (
                                                    <td key={k} className="text-body-text color-gray-700" style={{ padding: '14px 20px' }}>{c}</td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )
                    case "quote":
                        return (
                            <div key={i} className="box-quote mt-30 mb-30">
                                <div className="text-quote">{b.text}</div>
                                <div className="box-user">
                                    <div className="img-user">
                                        <Image width={0} height={0} sizes="100vw"
                                            style={{ width: "auto", height: "auto" }}
                                            src="/assets/imgs/page/blog/single/user-4.png"
                                            alt="Build First Site" />
                                    </div>
                                    <span className="text-heading-5 color-white">Build First Site</span>
                                </div>
                            </div>
                        )
                    default:
                        return null
                }
            })}
        </div>
    )
}
