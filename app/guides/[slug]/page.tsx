import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Check } from 'lucide-react';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import { GUIDES, getGuide } from '../../lib/guides';

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) return {};
  return {
    title: g.metaTitle,
    description: g.metaDescription,
    keywords: g.keywords,
    alternates: { canonical: `/guides/${g.slug}/` },
    openGraph: {
      title: g.metaTitle,
      description: g.metaDescription,
      url: `https://buildfirstsite.com/guides/${g.slug}/`,
      type: 'article',
    },
  };
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) notFound();

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: g.title,
    description: g.metaDescription,
    url: `https://buildfirstsite.com/guides/${g.slug}/`,
    datePublished: g.datePublished,
    dateModified: g.datePublished,
    author: { '@type': 'Organization', name: 'Build First Site' },
    publisher: { '@type': 'Organization', name: 'Build First Site', url: 'https://buildfirstsite.com/' },
    keywords: g.keywords.join(', '),
  };
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://buildfirstsite.com/' },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://buildfirstsite.com/guides/' },
      { '@type': 'ListItem', position: 3, name: g.title, item: `https://buildfirstsite.com/guides/${g.slug}/` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <SiteHeader />
      <article className="max-w-3xl mx-auto px-5 md:px-8">
        <nav className="pt-8 text-sm text-text-muted">
          <Link href="/guides/" className="inline-flex items-center gap-1.5 hover:text-text-primary">
            <ArrowLeft className="w-4 h-4" /> All guides
          </Link>
        </nav>

        <header className="pt-8 pb-8 border-b border-border-primary">
          <div className="text-xs uppercase tracking-[0.2em] text-text-faint mb-4">{g.readingTime}</div>
          <h1 className="display text-3xl md:text-5xl">{g.title}</h1>
          {g.intro.map((p, i) => (
            <p key={i} className="mt-5 text-lg text-text-secondary leading-relaxed">{p}</p>
          ))}
        </header>

        <div className="py-10">
          {g.sections.map((s) => (
            <section key={s.heading} className="mb-10">
              <h2 className="display text-2xl md:text-3xl mb-4">{s.heading}</h2>
              {s.body.map((p, i) => (
                <p key={i} className="text-lg text-text-secondary leading-relaxed mb-4">{p}</p>
              ))}
            </section>
          ))}
        </div>

        <section className="p-6 md:p-8 rounded-3xl bg-bg-secondary border border-border-primary mb-12">
          <h2 className="text-sm uppercase tracking-[0.2em] text-text-faint mb-5">Key takeaways</h2>
          <ul className="space-y-3">
            {g.takeaways.map((t) => (
              <li key={t} className="flex gap-3 text-text-primary">
                <Check className="w-5 h-5 text-brand shrink-0 mt-0.5" /> <span>{t}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="py-10 text-center border-t border-border-primary mb-4">
          <h2 className="display text-2xl md:text-3xl">Want help with your website?</h2>
          <p className="mt-3 text-text-secondary max-w-lg mx-auto">
            Get a straight answer and a fixed-price quote — whether that is a custom build or honest advice to stay DIY for now.
          </p>
          <div className="mt-7 flex flex-wrap gap-3 justify-center">
            <Link href="/#contact" className="btn-primary px-7 py-3">Get a free quote</Link>
            <Link href="/guides/" className="px-7 py-3 rounded-full border border-border-tertiary text-text-primary hover:bg-bg-tertiary transition-colors">
              More guides
            </Link>
          </div>
        </section>
      </article>
      <SiteFooter />
    </>
  );
}
