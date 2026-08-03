import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowUpRight, ArrowLeft, Check } from 'lucide-react';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import { CASE_STUDIES, getCaseStudy } from '../../lib/case-studies';

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = getCaseStudy(slug);
  if (!c) return {};
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    keywords: c.keywords,
    alternates: { canonical: `/work/${c.slug}/` },
    openGraph: {
      title: c.metaTitle,
      description: c.metaDescription,
      url: `https://buildfirstsite.com/work/${c.slug}/`,
      type: 'article',
      images: c.image ? [{ url: c.image }] : undefined,
    },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getCaseStudy(slug);
  if (!c) notFound();

  const idx = CASE_STUDIES.findIndex((x) => x.slug === slug);
  const next = CASE_STUDIES[(idx + 1) % CASE_STUDIES.length];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: c.name,
    headline: c.metaTitle,
    description: c.metaDescription,
    url: `https://buildfirstsite.com/work/${c.slug}/`,
    about: c.industry,
    keywords: c.keywords.join(', '),
    creator: { '@type': 'Organization', name: 'Build First Site', url: 'https://buildfirstsite.com/' },
    ...(c.image ? { image: c.image } : {}),
  };
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://buildfirstsite.com/' },
      { '@type': 'ListItem', position: 2, name: 'Work', item: 'https://buildfirstsite.com/work/' },
      { '@type': 'ListItem', position: 3, name: c.name, item: `https://buildfirstsite.com/work/${c.slug}/` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <SiteHeader />
      <main className="max-w-4xl mx-auto px-5 md:px-8">
        {/* Breadcrumb */}
        <nav className="pt-8 text-sm text-text-muted flex items-center gap-2">
          <Link href="/work/" className="inline-flex items-center gap-1.5 hover:text-text-primary">
            <ArrowLeft className="w-4 h-4" /> All case studies
          </Link>
        </nav>

        {/* Hero */}
        <header className="pt-8 pb-10">
          <span className="eyebrow">{c.industry} · {c.location}</span>
          <h1 className="display text-4xl md:text-5xl mt-4">{c.name}</h1>
          <p className="mt-4 text-xl text-text-secondary">{c.tagline}</p>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-px bg-border-primary rounded-2xl overflow-hidden border border-border-primary">
            {c.results.map((r) => (
              <div key={r.label} className="bg-bg-primary p-5">
                <div className="text-lg md:text-xl font-display text-text-primary">{r.value}</div>
                <div className="text-xs text-text-muted mt-1">{r.label}</div>
              </div>
            ))}
          </div>

          {c.liveUrl && (
            <a
              href={c.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-6 py-3 mt-8 inline-flex"
            >
              Visit live site <ArrowUpRight className="w-4 h-4" />
            </a>
          )}
        </header>

        {/* Cover */}
        <div
          className="h-64 md:h-80 rounded-3xl relative overflow-hidden mb-14"
          style={{ background: `linear-gradient(135deg, ${c.cover?.from} 0%, ${c.cover?.to} 100%)` }}
        >
          <div
            className="absolute inset-0 opacity-[0.12]"
            style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)', backgroundSize: '26px 26px' }}
          />
          <span className="absolute left-8 top-8 font-display font-light text-white/90 text-7xl tracking-tight">
            {c.cover?.mark}
          </span>
        </div>

        {/* Meta strip */}
        <div className="grid sm:grid-cols-3 gap-6 pb-14 border-b border-border-primary">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-text-faint mb-3">Services</div>
            <div className="flex flex-wrap gap-2">
              {c.services.map((s) => <span key={s} className="pill text-[11px] py-1">{s}</span>)}
            </div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-text-faint mb-3">Stack</div>
            <div className="flex flex-wrap gap-2">
              {c.techStack.map((t) => <span key={t} className="pill text-[11px] py-1">{t}</span>)}
            </div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-text-faint mb-3">Timeline</div>
            <div className="text-text-primary font-display text-lg">{c.timeline}</div>
          </div>
        </div>

        {/* The challenge */}
        <section className="py-14">
          <h2 className="display text-2xl md:text-3xl mb-6">The challenge</h2>
          {c.challenge.map((p, i) => (
            <p key={i} className="text-lg text-text-secondary leading-relaxed mb-4">{p}</p>
          ))}
        </section>

        {/* What we built */}
        <section className="pb-14">
          <h2 className="display text-2xl md:text-3xl mb-8">What we built</h2>
          <div className="space-y-6">
            {c.approach.map((a) => (
              <div key={a.title} className="card p-6">
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-brand/15 text-brand flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-medium text-text-primary">{a.title}</h3>
                    <p className="mt-2 text-text-secondary leading-relaxed">{a.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Outcome */}
        <section className="pb-14">
          <h2 className="display text-2xl md:text-3xl mb-6">The outcome</h2>
          <p className="text-lg text-text-secondary leading-relaxed">{c.outcome}</p>
        </section>

        {/* CTA */}
        <section className="py-12 px-6 md:px-10 rounded-3xl bg-bg-secondary border border-border-primary text-center">
          <h2 className="display text-2xl md:text-3xl">Want something like {c.name}?</h2>
          <p className="mt-3 text-text-secondary max-w-lg mx-auto">
            Tell me about your project and I&apos;ll send a fixed-price quote — no hourly billing, full code ownership.
          </p>
          <div className="mt-7 flex flex-wrap gap-3 justify-center">
            <Link href="/#contact" className="btn-primary px-7 py-3">Start a project</Link>
            <Link href={`/work/${next.slug}/`} className="px-7 py-3 rounded-full border border-border-tertiary text-text-primary hover:bg-bg-tertiary transition-colors inline-flex items-center gap-2">
              Next: {next.name} <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
