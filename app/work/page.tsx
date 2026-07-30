import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import { CASE_STUDIES } from '../lib/case-studies';

export const metadata: Metadata = {
  title: 'Case Studies & Portfolio — Web Design & Development Work | Build First Site',
  description:
    'Real projects from Build First Site: racing e-commerce, AI-powered stores, a multi-provider AI SaaS, luxury real estate, and conversion-first tradie and hospitality websites. See how each was built and what it delivered.',
  alternates: { canonical: '/work/' },
  openGraph: {
    title: 'Case Studies & Portfolio | Build First Site',
    description: 'Web design & development case studies — e-commerce, AI SaaS, real estate, trades and hospitality.',
    url: 'https://buildfirstsite.com/work/',
    type: 'website',
  },
};

const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Build First Site — Case Studies & Portfolio',
  url: 'https://buildfirstsite.com/work/',
  description: 'Web design and development case studies across e-commerce, AI SaaS, real estate, trades and hospitality.',
  hasPart: CASE_STUDIES.map((c) => ({
    '@type': 'CreativeWork',
    name: c.name,
    url: `https://buildfirstsite.com/work/${c.slug}/`,
    about: c.industry,
  })),
};

export default function WorkPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <SiteHeader />
      <main className="max-w-6xl mx-auto px-5 md:px-8">
        <section className="pt-16 pb-12 md:pt-24 md:pb-16">
          <span className="eyebrow">Selected Work</span>
          <h1 className="display text-4xl md:text-6xl mt-4 max-w-3xl">
            Case studies — real builds, real outcomes
          </h1>
          <p className="mt-6 text-lg text-text-secondary max-w-2xl">
            A closer look at how we approach projects across e-commerce, AI products, real estate, and local
            business — the challenge, what we built, and what it delivered. Every project shipped with clean,
            fully-owned code.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-6 pb-10">
          {CASE_STUDIES.map((c) => (
            <Link
              key={c.slug}
              href={`/work/${c.slug}/`}
              className="card group overflow-hidden flex flex-col hover:-translate-y-1 transition-transform duration-300"
            >
              <div
                className="h-52 relative overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${c.cover?.from} 0%, ${c.cover?.to} 100%)` }}
              >
                <div
                  className="absolute inset-0 opacity-[0.12]"
                  style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)', backgroundSize: '22px 22px' }}
                />
                <span className="absolute left-6 top-6 font-display font-light text-white/90 text-5xl tracking-tight">
                  {c.cover?.mark}
                </span>
                <span className="absolute bottom-5 left-6 text-[11px] tracking-[0.25em] uppercase text-white/55">
                  {c.industry}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-xl font-display text-text-primary">{c.name}</h2>
                  <ArrowUpRight className="w-5 h-5 text-text-faint group-hover:text-brand transition-colors shrink-0" />
                </div>
                <p className="mt-2 text-sm text-text-secondary">{c.tagline}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {c.techStack.slice(0, 4).map((t) => (
                    <span key={t} className="pill text-[11px] py-1">{t}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </section>

        <section className="py-16 text-center">
          <h2 className="display text-3xl md:text-4xl">Have a project like these?</h2>
          <p className="mt-4 text-text-secondary max-w-xl mx-auto">
            Fixed-price quote, a live staging link from day one, and full code ownership on handover.
          </p>
          <Link href="/#contact" className="btn-primary px-7 py-3 mt-7 inline-flex">
            Start a project
          </Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
