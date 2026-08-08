/**
 * LocalBusiness structured data — Build First Site.
 *
 * Every local page should emit the SAME entity: same name, same phone, same
 * address, same @id. Google builds one entity from these signals; two pages
 * describing the business slightly differently splits it and weakens both.
 *
 * WHY A SHARED BUILDER: the city pages were each hand-rolling their own JSON-LD
 * and had drifted — Perth, Sydney and Adelaide emitted `LocalBusiness` while
 * Melbourne emitted the weaker `ProfessionalService`, and none carried geo
 * coordinates. Import from here instead of writing schema inline.
 *
 * Reference: schema.org/LocalBusiness · Google structured data guidelines.
 */
import { SITE, NAP, NAP_READY } from '@/content/site'

/** Canonical @id so every page refers to ONE entity, not several. */
const ENTITY_ID = `${SITE.url}/#localbusiness`

/**
 * Build LocalBusiness JSON-LD for a service-area business.
 *
 * @param {object} opts
 * @param {string} [opts.city]        Primary city, e.g. "Melbourne"
 * @param {string} [opts.pageUrl]     Canonical URL of the page emitting this
 * @param {string} [opts.description] Page-specific description
 * @returns {object|null} JSON-LD object, or null if NAP is incomplete
 */
export function localBusinessSchema({ city = 'Melbourne', pageUrl, description } = {}) {
  // Never emit a half-built address. Incomplete NAP is worse than none —
  // it teaches Google a wrong entity that is hard to correct later.
  if (!NAP_READY) return null

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': ENTITY_ID,
    name: NAP.businessName,
    url: pageUrl || SITE.url,
    telephone: NAP.phone,
    email: NAP.email,
    description: description || SITE.description,
    priceRange: '$$',
    currenciesAccepted: 'AUD',
    paymentAccepted: 'Credit Card, Bank Transfer, PayPal, Stripe',
    inLanguage: 'en-AU',

    address: {
      '@type': 'PostalAddress',
      streetAddress: NAP.streetAddress,
      addressLocality: NAP.suburb || NAP.addressLocality,
      addressRegion: NAP.addressRegion,
      postalCode: NAP.postalCode,
      addressCountry: NAP.addressCountry,
    },

    geo: {
      '@type': 'GeoCoordinates',
      latitude: NAP.geo.latitude,
      longitude: NAP.geo.longitude,
    },

    // Service-area business: we travel to the client, so declare areaServed
    // rather than implying walk-in trade at the address.
    areaServed: NAP.serviceAreas.map((a) => ({
      '@type': 'City',
      name: a,
      containedInPlace: { '@type': 'State', name: 'Victoria' },
    })),

    openingHoursSpecification: NAP.openingHours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),

    sameAs: [
      SITE.social.linkedin,
      SITE.social.github,
      SITE.social.x,
      NAP.gbpUrl,
    ].filter(Boolean),
  }

  if (city) {
    schema.name = `${NAP.businessName} — Web Design ${city}`
  }

  // NOTE: aggregateRating is deliberately absent. Do not add it until real
  // reviews exist — self-declared ratings without a review source are a
  // structured-data violation and, per CLAUDE.md §1, dishonest.
  return schema
}

/**
 * Service schema for a city page — what we sell, where.
 *
 * @param {object} opts
 * @param {string} opts.city
 * @param {string} opts.pageUrl
 * @param {number} [opts.startingPrice] Lowest package price in AUD
 */
export function localServiceSchema({ city, pageUrl, startingPrice = 800 }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: `Web design and development in ${city}`,
    provider: { '@id': ENTITY_ID },
    areaServed: {
      '@type': 'City',
      name: city,
      containedInPlace: { '@type': 'State', name: 'Victoria' },
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'AUD',
      price: startingPrice,
      url: `${SITE.url}/pricing/`,
      availability: 'https://schema.org/InStock',
    },
  }
}

/** BreadcrumbList for a city page. */
export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  }
}

export { ENTITY_ID }
