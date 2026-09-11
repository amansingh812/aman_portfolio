import '../public/assets/css/style.css'
import '../public/assets/css/modal.css'
import "../public/assets/css/swiper-custom.css";
import { Chivo, Noto_Sans } from 'next/font/google'
import Script from 'next/script'
import { SITE, NAP } from '@/content/site'

/**
 * Sitewide Organization entity.
 *
 * WHY: Google builds an "entity" for a business by cross-referencing the same
 * name, URL, contact details and social profiles across the web. `sameAs` is
 * how you tell it explicitly which accounts are yours instead of leaving it to
 * infer. On a domain with no backlinks this is one of the few entity signals
 * fully within our control, and it costs nothing.
 *
 * NOTE: this is Organization, not LocalBusiness. The single LocalBusiness
 * entity is declared once, on /web-design-melbourne/, and every Service block
 * points at its @id. Declaring a second one here would create two competing
 * business entities for the same company.
 *
 * No headcount, no employee count, no invented awards — see CLAUDE.md §1.
 */
const ORGANIZATION_SCHEMA = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE.url}/#organization`,
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    email: SITE.email,
    telephone: NAP.phoneE164,
    logo: {
        '@type': 'ImageObject',
        url: `${SITE.url}/assets/imgs/New_logo/logo.png`,
    },
    image: `${SITE.url}/assets/imgs/og/default-og.png`,
    address: {
        '@type': 'PostalAddress',
        addressLocality: NAP.addressLocality,
        addressRegion: NAP.addressRegion,
        postalCode: NAP.postalCode,
        addressCountry: NAP.addressCountry,
    },
    areaServed: { '@type': 'Country', name: 'Australia' },
    knowsLanguage: 'en-AU',
    sameAs: [SITE.social.linkedin, SITE.social.github, SITE.social.x],
    contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: SITE.email,
        telephone: NAP.phoneE164,
        areaServed: 'AU',
        availableLanguage: 'en',
    },
}

const chivo = Chivo({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    variable: "--chivo",
    display: 'swap',
})
const noto = Noto_Sans({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    variable: "--noto",
    display: 'swap',
})

export const metadata = {
    metadataBase: new URL(SITE.url),
    title: {
        default: `${SITE.name} — Web Design & Development for Australian Businesses`,
        template: `%s | ${SITE.name}`,
    },
    description: SITE.description,
    alternates: { canonical: '/' },
    openGraph: {
        type: 'website',
        siteName: SITE.name,
        url: SITE.url,
        title: `${SITE.name} — Web Design & Development for Australian Businesses`,
        description: SITE.description,
        images: ['/og-image.png'],
    },
    twitter: {
        card: 'summary_large_image',
        title: `${SITE.name} — Web Design & Development`,
        description: SITE.description,
        images: ['/og-image.png'],
    },
    // NO `icons:` block here — deliberately.
    //
    // Icons are handled entirely by the App Router file conventions:
    //   app/favicon.ico     -> <link rel="icon" sizes="any">      (legacy)
    //   app/icon.png        -> <link rel="icon" type="image/png"> (modern)
    //   app/apple-icon.png  -> <link rel="apple-touch-icon">      (iOS)
    //
    // Declaring them here as well emitted FOUR competing <link rel="icon">
    // tags — two pointing at different files with no `sizes` or `type` to
    // disambiguate — so which icon a browser picked was essentially arbitrary.
    // The file convention emits correct attributes automatically. Do not add
    // an `icons:` block back on top of it.
}

export const viewport = {
    themeColor: '#d4551f',
    width: 'device-width',
    initialScale: 1,
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }}
                />
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-QYPW2B8CZS"
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'G-QYPW2B8CZS');
                    `}
                </Script>
            </head>
            <body className={`${chivo.variable} ${noto.variable}`}>{children}</body>
        </html>
    )
}

