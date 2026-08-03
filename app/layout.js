import '../public/assets/css/style.css'
import '../public/assets/css/modal.css'
import "../public/assets/css/swiper-custom.css";
import { Chivo, Noto_Sans } from 'next/font/google'
import { SITE } from '@/content/site'

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
    robots: { index: true, follow: true },
    icons: { icon: '/favicon.svg' },
}

export const viewport = {
    themeColor: '#d4551f',
    width: 'device-width',
    initialScale: 1,
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${chivo.variable} ${noto.variable}`}>{children}</body>
        </html>
    )
}
