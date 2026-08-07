/**
 * Shared formatters — Build First Site.
 *
 * ── WHY THIS FILE EXISTS ─────────────────────────────────────────────────
 * Prices and dates were previously formatted inline in each page, which is
 * how the site ended up displaying three different price ladders and how the
 * blog index and blog post pages each carried their own copy of the same
 * date helper. Import from here instead of writing a new one.
 *
 * RULES
 *  · Dates are STORED as ISO `YYYY-MM-DD` everywhere (content/blog.js,
 *    content/guides.js, sitemap lastmod, schema datePublished).
 *  · Dates are DISPLAYED in en-AU long form: "7 August 2026".
 *  · Money is AUD, formatted with a thousands separator and no decimals.
 *  · Never hardcode a price string in a page — import it from
 *    content/pricing.js, which is the single source of truth.
 */

/** Australian long date: "2026-08-07" → "7 August 2026". */
export function fmtDate(iso) {
  if (!iso) return ''
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return ''
  return d.toLocaleDateString('en-AU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

/** Short Australian date: "2026-08-07" → "7 Aug 2026". */
export function fmtDateShort(iso) {
  if (!iso) return ''
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return ''
  return d.toLocaleDateString('en-AU', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

/** Month and year only: "2026-08-07" → "August 2026". */
export function fmtMonthYear(iso) {
  if (!iso) return ''
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return ''
  return d.toLocaleDateString('en-AU', { month: 'long', year: 'numeric' })
}

/** Machine-readable value for a <time dateTime=""> attribute. */
export function isoDate(iso) {
  if (!iso) return ''
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return ''
  return d.toISOString().split('T')[0]
}

/** AUD money: 1900 → "$1,900". Pass a string through untouched. */
export function fmtPrice(value) {
  if (typeof value === 'string') return value
  if (typeof value !== 'number' || Number.isNaN(value)) return ''
  return '$' + value.toLocaleString('en-AU', { maximumFractionDigits: 0 })
}

/** AUD money with the currency spelled out: 1900 → "AU$1,900". */
export function fmtPriceAUD(value) {
  const s = fmtPrice(value)
  return s ? 'AU' + s : ''
}
