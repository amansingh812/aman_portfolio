import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import type { Service } from '../lib/services';

export default function ServicePage({ data }: { data: Service }) {
  const url = `https://buildfirstsite.com/${data.slug}/`;

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: data.h1,
    description: data.metaDescription,
    url,
    serviceType: data.eyebrow,
    areaServed: { '@type': 'Country', name: 'Australia' },
    provider: {
      '@type': 'ProfessionalService',
      name: 'Build First Site',
      url: 'https://buildfirstsite.com/',
      email: 'contact@buildfirstsite.com',
      areaServed: ['AU', 'US'],
    },
    offers: data.tiers.map((t) => ({
      '@type': 'Offer',
      name: t.name,
      description: t.summary,
      priceCurrency: 'AUD',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'AUD',
        minPrice: Number(t.price.replace(/[^0-9]/g, '')),
      },
    })),
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://buildfirstsite.com/' },
      { '@type': 'ListItem', position: 2, name: data.eyebrow, item: url },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <SiteHeader />
      <main className="max-w-5xl mx-auto px-5 md:px-8">
        {/* Hero */}
        <section className="pt-14 pb-10 md:pt-20">
          <span className="eyebrow">{data.eyebrow}</span>
          <h1 className="display text-4xl md:text-5xl mt-4 max-w-3xl">{data.h1}</h1>
          {data.intro.map((p, i) => (
            <p key={i} className="mt-5 text-lg text-text-secondary leading-relaxed max-w-3xl">{p}</p>
          ))}
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/#contact" className="btn-primary px-7 py-3">Get a free quote</Link>
            <a
              href="https://calendly.com/amanpd0/30min"
              className="px-7 py-3 rounded-full border border-border-tertiary text-text-primary hover:bg-bg-tertiary transition-colors"
            >
              Book a free call
            </a>
          </div>
          <dl className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {data.highlights.map((h) => (
              <div key={h.label} className="card p-4">
                <dt className="text-xs uppercase tracking-[0.15em] text-text-faint">{h.label}</dt>
                <dd className="mt-1.5 text-text-primary font-medium">{h.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Capabilities */}
        <section className="py-12 border-t border-border-primary">
          <h2 className="display text-2xl md:text-3xl mb-8">What we build</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {data.capabilities.map((c) => (
              <div key={c.title} className="card p-6">
                <h3 className="text-lg font-medium text-text-primary">{c.title}</h3>
                <p className="mt-2 text-text-secondary leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section className="py-12 border-t border-border-primary">
          <h2 className="display text-2xl md:text-3xl mb-3">Fixed pricing, in AUD</h2>
          <p className="text-text-secondary max-w-2xl mb-8">
            Published upfront, because guessing helps nobody. You get a written fixed quote before any work starts.
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {data.tiers.map((t, i) => (
              <div key={t.name} className={`card p-6 flex flex-col ${i === 1 ? 'border-brand/40' : ''}`}>
                <h3 className="text-lg font-medium text-text-primary">{t.name}</h3>
                <p className="mt-2 text-2xl text-brand font-medium">{t.price}</p>
                <p className="text-sm text-text-faint mt-1">{t.timeline}</p>
                <p className="mt-3 text-sm text-text-secondary leading-relaxed">{t.summary}</p>
                <ul className="mt-5 space-y-2.5">
                  {t.includes.map((inc) => (
                    <li key={inc} className="flex gap-2.5 text-sm text-text-secondary">
                      <Check className="w-4 h-4 text-brand shrink-0 mt-0.5" /> <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-6 text-text-secondary leading-relaxed max-w-3xl">{data.pricingNote}</p>
        </section>

        {/* Process */}
        <section className="py-12 border-t border-border-primary">
          <h2 className="display text-2xl md:text-3xl mb-8">How it works</h2>
          <ol className="space-y-5">
            {data.process.map((p, i) => (
              <li key={p.step} className="flex gap-5">
                <span className="shrink-0 w-9 h-9 rounded-full bg-bg-tertiary border border-border-primary flex items-center justify-center text-sm text-brand font-medium">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-text-primary font-medium">{p.step}</h3>
                  <p className="mt-1 text-text-secondary leading-relaxed">{p.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Long-form sections */}
        <section className="py-12 border-t border-border-primary">
          {data.sections.map((s) => (
            <div key={s.heading} className="mb-10 last:mb-0 max-w-3xl">
              <h2 className="display text-2xl md:text-3xl mb-4">{s.heading}</h2>
              {s.body.map((p, i) => (
                <p key={i} className="text-lg text-text-secondary leading-relaxed mb-4">{p}</p>
              ))}
            </div>
          ))}
        </section>

        {/* FAQ */}
        <section className="py-12 border-t border-border-primary">
          <h2 className="display text-2xl md:text-3xl mb-6">Common questions</h2>
          <div className="space-y-5">
            {data.faqs.map((f) => (
              <div key={f.q} className="card p-6">
                <h3 className="font-medium text-text-primary">{f.q}</h3>
                <p className="mt-2 text-text-secondary leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related — internal links */}
        <section className="py-12 border-t border-border-primary">
          <h2 className="text-sm uppercase tracking-[0.2em] text-text-faint mb-5">Related</h2>
          <div className="flex flex-wrap gap-3">
            {data.related.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-border-tertiary text-sm text-text-primary hover:bg-bg-tertiary transition-colors"
              >
                {r.label} <ArrowRight className="w-3.5 h-3.5 text-text-faint" />
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 px-6 md:px-10 rounded-3xl bg-bg-secondary border border-border-primary text-center mb-6">
          <h2 className="display text-2xl md:text-3xl">Tell us what you are trying to build</h2>
          <p className="mt-3 text-text-secondary max-w-lg mx-auto">
            A fixed-price quote within 24 hours — and an honest answer if we think there is a cheaper way to get what you need.
          </p>
          <div className="mt-7 flex flex-wrap gap-3 justify-center">
            <Link href="/#contact" className="btn-primary px-7 py-3">Get a free quote</Link>
            <a
              href="https://calendly.com/amanpd0/30min"
              className="px-7 py-3 rounded-full border border-border-tertiary text-text-primary hover:bg-bg-tertiary transition-colors"
            >
              Book a free call
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
