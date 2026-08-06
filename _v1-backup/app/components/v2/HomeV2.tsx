'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight, ArrowRight, Check } from 'lucide-react';
import Splash, { SPLASH_KEY } from './Splash';
import HeroArt from './HeroArt';
import { Reveal, Stagger, StaggerItem, WordReveal, useParallax } from './Motion';

import { HERO, REAL_CLIENTS, PROBLEMS, SERVICE_CARDS, INDUSTRIES, PROCESS, TEAM, OBJECTIONS, FINAL_CTA } from '../../lib/homepage';
import { PROJECT_LIST, PRICE_TIERS, TESTIMONIALS } from '../../data';

const NAV = [
  { label: 'Work', href: '/work/' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
  { label: 'Guides', href: '/guides/' },
];

/* ─────────────────────────────────────────────── Header */
function Header() {
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        solid ? 'backdrop-blur-xl bg-[color-mix(in_srgb,var(--bg-primary)_78%,transparent)] border-b border-border-primary' : ''
      }`}
    >
      <div className="shell flex items-center justify-between h-[72px]">
        <Link href="/" className="display text-xl tracking-tight">
          Build<span className="text-brand">First</span>Site
        </Link>
        <nav className="hidden md:flex items-center gap-9">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="link-draw text-sm text-text-secondary hover:text-text-primary transition-colors">
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="btn-primary px-5 py-2.5 text-[13px]"
        >
          Book a call
        </a>
      </div>
    </header>
  );
}

/* ─────────────────────────────────────────────── Hero */
function Hero() {
  const { scrollY } = useScroll();
  const artY = useTransform(scrollY, [0, 700], [0, 90]);
  const artScale = useTransform(scrollY, [0, 700], [1, 1.08]);
  const textY = useTransform(scrollY, [0, 700], [0, -40]);
  const fade = useTransform(scrollY, [0, 520], [1, 0]);

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden canvas-soft">
      <motion.div style={{ y: artY, scale: artScale }} className="absolute inset-0 top-[8%]">
        <HeroArt className="w-full h-[70vh]" />
      </motion.div>

      <motion.div style={{ y: textY }} className="shell relative z-10 text-center pt-24">
        <h1 className="display text-[clamp(2.9rem,8.5vw,7rem)] leading-[0.95]">
          <WordReveal text={HERO.h1Lead} delay={0.15} />
          <br />
          <span className="display-italic text-brand">
            <WordReveal text={HERO.h1Accent} delay={0.4} />
          </span>
          <br />
          <WordReveal text={HERO.h1Trail} delay={0.65} />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-9 mx-auto max-w-xl text-[17px] leading-relaxed text-text-secondary"
        >
          {HERO.sub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-9 flex flex-wrap gap-3 justify-center"
        >
          <a href={HERO.primaryCta.href} className="btn-primary px-7 py-3.5">
            {HERO.primaryCta.label} <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href={HERO.secondaryCta.href}
            className="px-7 py-3.5 rounded-full border border-border-tertiary text-sm text-text-primary hover:bg-bg-tertiary transition-colors"
          >
            {HERO.secondaryCta.label}
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.5 }}
          className="mt-7 text-[12px] tracking-[0.12em] uppercase text-text-faint"
        >
          {HERO.priceAnchor}
        </motion.p>
      </motion.div>

      <motion.div style={{ opacity: fade }} className="absolute bottom-8 inset-x-0 shell hidden md:flex items-end justify-between text-[11px] tracking-[0.3em] uppercase text-text-faint">
        <span>{HERO.eyebrow}</span>
        <span>Scroll</span>
      </motion.div>
    </section>
  );
}

/* ─────────────────────────────────────────────── Trust strip */
function Clients() {
  return (
    <section className="section-tight border-y border-border-primary">
      <div className="shell grid lg:grid-cols-[minmax(0,1fr)_1.2fr] gap-12 items-center">
        <Reveal>
          <span className="chip">Live client work</span>
          <h2 className="display text-[clamp(1.9rem,3.6vw,3rem)] mt-6">
            Real sites you can open right now
          </h2>
          <p className="mt-4 text-text-secondary max-w-sm">
            No mockups, no placeholder logos. Every link below is a production site we built.
          </p>
        </Reveal>

        <Stagger className="grid sm:grid-cols-2 gap-x-10 gap-y-7" gap={0.09}>
          {REAL_CLIENTS.map((c) => (
            <StaggerItem key={c.url}>
              <a
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block border-b border-border-primary pb-4"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <span className="display text-xl group-hover:text-brand transition-colors">{c.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-text-faint group-hover:text-brand transition-colors shrink-0" />
                </div>
                <span className="text-sm text-text-muted">{c.country} {c.sector}</span>
              </a>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────── Problem */
function Problem() {
  return (
    <section className="section">
      <div className="shell">
        <Reveal className="max-w-2xl">
          <span className="chip">{PROBLEMS.eyebrow}</span>
          <h2 className="display text-[clamp(2.2rem,5vw,4rem)] mt-6">{PROBLEMS.heading}</h2>
          <p className="mt-5 text-lg text-text-secondary">{PROBLEMS.intro}</p>
        </Reveal>

        <Stagger className="mt-16 grid md:grid-cols-2 gap-x-14 gap-y-12" gap={0.1}>
          {PROBLEMS.items.map((p, i) => (
            <StaggerItem key={p.title}>
              <div className="flex gap-6">
                <span className="display text-2xl text-text-accent tabular-nums shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="display text-xl">{p.title}</h3>
                  <p className="mt-2.5 text-text-secondary leading-relaxed">{p.body}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────── Services */
function Services() {
  return (
    <section id="services" className="section border-t border-border-primary canvas-soft">
      <div className="shell">
        <Reveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-xl">
            <span className="chip">What we do</span>
            <h2 className="display text-[clamp(2.2rem,5vw,4rem)] mt-6">
              Everything your business needs to be found and booked
            </h2>
          </div>
          <p className="text-text-muted max-w-xs lg:text-right">
            Fixed prices in AUD. Quoted in writing before anything starts.
          </p>
        </Reveal>

        <Stagger className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5" gap={0.07}>
          {SERVICE_CARDS.map((s) => (
            <StaggerItem key={s.href}>
              <Link
                href={s.href}
                className="card group h-full p-7 flex flex-col hover:-translate-y-1.5 transition-transform duration-500"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="display text-[22px]">{s.title}</h3>
                  <ArrowUpRight className="w-4 h-4 text-text-faint group-hover:text-brand transition-colors shrink-0 mt-1.5" />
                </div>
                <p className="mt-3 text-[15px] text-text-secondary leading-relaxed flex-1">{s.body}</p>
                {s.price && (
                  <span className="mt-6 text-[13px] tracking-[0.12em] uppercase text-brand">{s.price}</span>
                )}
              </Link>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.15} className="mt-10 flex flex-wrap items-center gap-3">
          <span className="text-sm text-text-muted mr-1">Industries:</span>
          {INDUSTRIES.map((i) => (
            <Link key={i.href} href={i.href} className="pill hover:border-text-primary transition-colors">
              {i.label}
            </Link>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────── Work */
function Work() {
  const { ref, y } = useParallax(50);
  return (
    <section id="work" className="section border-t border-border-primary" ref={ref}>
      <div className="shell">
        <Reveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-xl">
            <span className="chip">Selected work</span>
            <h2 className="display text-[clamp(2.2rem,5vw,4rem)] mt-6">Projects built to do a job</h2>
          </div>
          <Link href="/work/" className="link-draw text-sm text-text-primary whitespace-nowrap">
            All case studies →
          </Link>
        </Reveal>

        <motion.div style={{ y }} className="mt-16 grid md:grid-cols-2 gap-6">
          {PROJECT_LIST.map((p, i) => (
            <Reveal key={p.id} delay={(i % 2) * 0.08}>
              <article className="card group overflow-hidden h-full">
                <div className="relative aspect-[16/10] overflow-hidden bg-bg-tertiary">
                  {p.image ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={p.image}
                      alt={`${p.title} — ${p.subtitle}`}
                      loading="lazy"
                      className="proj-img w-full h-full object-cover object-top"
                    />
                  ) : (
                    <div
                      className="w-full h-full grain relative"
                      style={{ background: `linear-gradient(135deg, ${p.cover?.from}, ${p.cover?.to})` }}
                    />
                  )}
                  {p.isConcept && (
                    <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-[10px] tracking-[0.18em] uppercase bg-bg-primary/90 backdrop-blur border border-border-primary text-text-muted">
                      Concept build
                    </span>
                  )}
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase text-text-faint">
                    <span>{p.country}</span>
                    <span>{p.category}</span>
                  </div>
                  <h3 className="display text-2xl mt-3">{p.title}</h3>
                  <p className="mt-2 text-[15px] text-text-secondary leading-relaxed">{p.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.techStack.slice(0, 4).map((t) => (
                      <span key={t} className="pill">{t}</span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────── Process (sticky) */
function Process() {
  return (
    <section className="section border-t border-border-primary canvas-soft">
      <div className="shell grid lg:grid-cols-[0.85fr_1.15fr] gap-14">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <span className="chip">{PROCESS.eyebrow}</span>
            <h2 className="display text-[clamp(2.2rem,4.4vw,3.6rem)] mt-6">{PROCESS.heading}</h2>
            <a href="#contact" className="btn-primary px-7 py-3.5 mt-9">
              Start a project <ArrowRight className="w-4 h-4" />
            </a>
          </Reveal>
        </div>

        <Stagger className="space-y-px" gap={0.1}>
          {PROCESS.steps.map((s, i) => (
            <StaggerItem key={s.title}>
              <div className="py-9 border-t border-border-primary flex gap-7">
                <span className="display text-lg text-text-accent tabular-nums shrink-0 pt-1">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="display text-[26px]">{s.title}</h3>
                  <p className="mt-2.5 text-text-secondary leading-relaxed">{s.body}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────── Pricing */
function Pricing() {
  return (
    <section id="pricing" className="section border-t border-border-primary">
      <div className="shell">
        <Reveal className="max-w-2xl">
          <span className="chip">Pricing</span>
          <h2 className="display text-[clamp(2.2rem,5vw,4rem)] mt-6">Published, fixed, in AUD</h2>
          <p className="mt-5 text-lg text-text-secondary">
            Most agencies hide this behind &ldquo;contact us&rdquo;. Here is what things actually cost.
          </p>
        </Reveal>

        <Stagger className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-5" gap={0.08}>
          {PRICE_TIERS.map((t) => (
            <StaggerItem key={t.title}>
              <div className="card h-full p-7 flex flex-col">
                <h3 className="display text-xl">{t.title}</h3>
                <p className="display text-[2.4rem] text-brand mt-3 leading-none">{t.aud.replace('≈ ', '')}</p>
                <p className="text-[13px] text-text-faint mt-2">{t.timeline}</p>
                <p className="mt-5 text-[15px] text-text-secondary leading-relaxed flex-1">{t.desc}</p>
                <span className="mt-6 pt-5 border-t border-border-light text-[12px] tracking-[0.14em] uppercase text-text-faint">
                  Fixed price
                </span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.15}>
          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
            {['Full code ownership', '30 days support included', 'No mandatory retainer', 'Live staging from week one'].map((f) => (
              <li key={f} className="flex gap-2.5 text-[15px] text-text-secondary">
                <Check className="w-4 h-4 text-brand shrink-0 mt-1" /> {f}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────── About / Team */
function About() {
  return (
    <section id="about" className="section border-t border-border-primary canvas-soft">
      <div className="shell">
        <Reveal className="max-w-2xl">
          <span className="chip">{TEAM.eyebrow}</span>
          <h2 className="display text-[clamp(2.2rem,5vw,4rem)] mt-6">{TEAM.heading}</h2>
          <p className="mt-5 text-lg text-text-secondary">{TEAM.intro}</p>
        </Reveal>

        <Stagger className="mt-16 grid md:grid-cols-2 gap-6" gap={0.12}>
          {TEAM.members.map((m) => (
            <StaggerItem key={m.name}>
              <div className="card h-full p-8">
                {/* Placeholder portrait — replace with a real photo. */}
                <div className="w-16 h-16 rounded-full grain relative bg-bg-tertiary border border-border-primary flex items-center justify-center display text-xl text-text-muted">
                  {m.name.charAt(0)}
                </div>
                <h3 className="display text-2xl mt-6">{m.name}</h3>
                <p className="text-sm text-brand mt-1">{m.role}</p>
                <p className="text-[13px] tracking-[0.14em] uppercase text-text-faint mt-1">{m.location}</p>
                <p className="mt-5 text-text-secondary leading-relaxed">{m.body}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.15}>
          <p className="mt-10 max-w-2xl text-[15px] text-text-muted leading-relaxed border-l-2 border-brand pl-5">
            {TEAM.honestyNote}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────── Testimonials (renders only when real) */
function Testimonials() {
  if (!TESTIMONIALS.length) return null;
  return (
    <section className="section border-t border-border-primary">
      <div className="shell">
        <Reveal>
          <span className="chip">Client feedback</span>
          <h2 className="display text-[clamp(2.2rem,5vw,4rem)] mt-6">What clients say</h2>
        </Reveal>
        <Stagger className="mt-14 grid md:grid-cols-3 gap-5" gap={0.09}>
          {TESTIMONIALS.map((t) => (
            <StaggerItem key={t.name + t.company}>
              <figure className="card h-full p-7 flex flex-col">
                <blockquote className="text-[15px] text-text-secondary leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 pt-5 border-t border-border-light text-sm">
                  <span className="text-text-primary font-medium">{t.name}</span>
                  <span className="text-text-faint"> · {t.company} {t.country}</span>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────── Objections */
function Objections() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="section border-t border-border-primary">
      <div className="shell grid lg:grid-cols-[0.8fr_1.2fr] gap-14">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <span className="chip">Questions</span>
          <h2 className="display text-[clamp(2.2rem,4.4vw,3.6rem)] mt-6">
            The things people actually ask
          </h2>
        </Reveal>

        <div>
          {OBJECTIONS.map((o, i) => (
            <Reveal key={o.q} delay={i * 0.05}>
              <div className="border-t border-border-primary last:border-b">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                  className="w-full text-left py-7 flex items-start justify-between gap-6 cursor-pointer group"
                >
                  <span className="display text-xl md:text-[26px] group-hover:text-brand transition-colors">
                    {o.q}
                  </span>
                  <span className="text-2xl text-text-faint shrink-0 leading-none mt-1">
                    {open === i ? '−' : '+'}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-8 pr-10 text-text-secondary leading-relaxed">{o.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────── CTA */
function FinalCta() {
  return (
    <section id="contact" className="section border-t border-border-primary canvas-soft relative overflow-hidden">
      <div className="absolute inset-0 opacity-60">
        <HeroArt className="w-full h-full" />
      </div>
      <div className="shell relative z-10 text-center">
        <Reveal>
          <h2 className="display text-[clamp(2.4rem,6vw,5rem)] max-w-3xl mx-auto">{FINAL_CTA.heading}</h2>
          <p className="mt-6 text-lg text-text-secondary max-w-xl mx-auto">{FINAL_CTA.body}</p>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <a href="mailto:contact@buildfirstsite.com" className="btn-primary px-8 py-4">
              Get a quote <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="https://calendly.com/amanpd0/30min"
              className="px-8 py-4 rounded-full border border-border-tertiary text-sm text-text-primary hover:bg-bg-primary transition-colors"
            >
              Book a free call
            </a>
          </div>
          <p className="mt-8 text-[12px] tracking-[0.2em] uppercase text-text-faint">
            Fixed quote within 24 hours
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────── Page */
export default function HomeV2() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let seen = false;
    try { seen = sessionStorage.getItem(SPLASH_KEY) === '1'; } catch { /* private mode */ }
    if (seen) setLoading(false);
  }, []);

  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [loading]);

  return (
    <>
      <AnimatePresence>{loading && <Splash onDone={() => setLoading(false)} />}</AnimatePresence>
      <Header />
      <main>
        <Hero />
        <Clients />
        <Problem />
        <Services />
        <Work />
        <Process />
        <Pricing />
        <About />
        <Testimonials />
        <Objections />
        <FinalCta />
      </main>
    </>
  );
}
