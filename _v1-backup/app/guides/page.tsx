import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import { GUIDES } from '../lib/guides';

export const metadata: Metadata = {
  title: 'Guides — Web Design, Development & SEO for Small Business | Build First Site',
  description:
    'Practical, no-jargon guides on getting a website that works for your business: how to choose a developer, DIY builders vs custom, costs, SEO and more.',
  alternates: { canonical: '/guides/' },
  openGraph: {
    title: 'Guides | Build First Site',
    description: 'Practical guides on web design, development, and getting found online.',
    url: 'https://buildfirstsite.com/guides/',
    type: 'website',
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Build First Site — Guides',
  url: 'https://buildfirstsite.com/guides/',
  hasPart: GUIDES.map((g) => ({
    '@type': 'Article',
    headline: g.title,
    url: `https://buildfirstsite.com/guides/${g.slug}/`,
  })),
};

export default function GuidesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <SiteHeader />
      <main className="max-w-4xl mx-auto px-5 md:px-8">
        <section className="pt-16 pb-10 md:pt-24">
          <span className="eyebrow">Guides</span>
          <h1 className="display text-4xl md:text-6xl mt-4">Guides &amp; resources</h1>
          <p className="mt-6 text-lg text-text-secondary max-w-2xl">
            Honest, practical advice on getting a website that actually helps your business — no jargon, no sales pitch.
          </p>
        </section>

        <section className="grid gap-5 pb-16">
          {GUIDES.map((g) => (
            <Link key={g.slug} href={`/guides/${g.slug}/`} className="card p-6 md:p-8 group hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-text-faint mb-3">{g.readingTime}</div>
                  <h2 className="text-xl md:text-2xl font-display text-text-primary">{g.title}</h2>
                  <p className="mt-3 text-text-secondary">{g.excerpt}</p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-text-faint group-hover:text-brand transition-colors shrink-0" />
              </div>
            </Link>
          ))}
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
