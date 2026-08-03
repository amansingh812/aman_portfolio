import Link from 'next/link';
import { Check, X } from 'lucide-react';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import type { Comparison } from '../lib/comparisons';

export default function ComparisonPage({ data }: { data: Comparison }) {
  const url = `https://buildfirstsite.com/${data.slug}/`;

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: data.metaTitle,
    description: data.metaDescription,
    url,
    author: { '@type': 'Organization', name: 'Build First Site' },
    publisher: { '@type': 'Organization', name: 'Build First Site', url: 'https://buildfirstsite.com/' },
  };
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://buildfirstsite.com/' },
      { '@type': 'ListItem', position: 2, name: `${data.competitor} vs Custom`, item: url },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <SiteHeader />
      <main className="max-w-4xl mx-auto px-5 md:px-8">
        <section className="pt-14 pb-10 md:pt-20">
          <span className="eyebrow">Comparison</span>
          <h1 className="display text-4xl md:text-5xl mt-4">{data.h1}</h1>
          {data.intro.map((p, i) => (
            <p key={i} className="mt-5 text-lg text-text-secondary leading-relaxed">{p}</p>
          ))}
        </section>

        {/* Verdict */}
        <section className="p-6 md:p-8 rounded-3xl bg-bg-secondary border border-border-primary">
          <h2 className="text-sm uppercase tracking-[0.2em] text-text-faint mb-3">The short answer</h2>
          <p className="text-lg text-text-primary leading-relaxed">{data.verdict}</p>
        </section>

        {/* Comparison table */}
        <section className="py-14">
          <h2 className="display text-2xl md:text-3xl mb-8">Side by side</h2>
          <div className="overflow-x-auto rounded-2xl border border-border-primary">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-bg-secondary text-left">
                  <th className="p-4 font-medium text-text-muted">&nbsp;</th>
                  <th className="p-4 font-medium text-text-primary">{data.competitor}</th>
                  <th className="p-4 font-medium text-brand">Custom Build</th>
                </tr>
              </thead>
              <tbody>
                {data.rows.map((r, i) => (
                  <tr key={r.dimension} className={i % 2 ? 'bg-bg-primary' : 'bg-bg-tertiary'}>
                    <td className="p-4 font-medium text-text-primary align-top whitespace-nowrap">{r.dimension}</td>
                    <td className="p-4 text-text-secondary align-top">{r.platform}</td>
                    <td className="p-4 text-text-secondary align-top">{r.custom}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Best for */}
        <section className="grid md:grid-cols-2 gap-6 pb-14">
          <div className="card p-6">
            <h3 className="text-lg font-medium text-text-primary mb-4">{data.competitor} is the better pick if…</h3>
            <ul className="space-y-3">
              {data.bestForPlatform.map((b) => (
                <li key={b} className="flex gap-3 text-text-secondary text-sm">
                  <Check className="w-4 h-4 text-text-faint shrink-0 mt-0.5" /> {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="card p-6 border-brand/30">
            <h3 className="text-lg font-medium text-text-primary mb-4">A custom website is the better pick if…</h3>
            <ul className="space-y-3">
              {data.bestForCustom.map((b) => (
                <li key={b} className="flex gap-3 text-text-secondary text-sm">
                  <Check className="w-4 h-4 text-brand shrink-0 mt-0.5" /> {b}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Cost */}
        <section className="pb-14">
          <h2 className="display text-2xl md:text-3xl mb-5">What about cost?</h2>
          <p className="text-lg text-text-secondary leading-relaxed">{data.costNote}</p>
        </section>

        {/* FAQ */}
        <section className="pb-14">
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

        {/* CTA */}
        <section className="py-12 px-6 md:px-10 rounded-3xl bg-bg-secondary border border-border-primary text-center mb-4">
          <h2 className="display text-2xl md:text-3xl">Thinking about a custom build?</h2>
          <p className="mt-3 text-text-secondary max-w-lg mx-auto">
            Get a fixed-price quote and an honest opinion on whether custom is even the right call for you.
          </p>
          <div className="mt-7 flex flex-wrap gap-3 justify-center">
            <Link href="/#contact" className="btn-primary px-7 py-3">Get a free quote</Link>
            <Link href="/work/" className="px-7 py-3 rounded-full border border-border-tertiary text-text-primary hover:bg-bg-tertiary transition-colors">
              See our work
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
