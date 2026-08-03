'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

/**
 * Intro splash. Runs once per session (sessionStorage), so returning visitors
 * and anyone navigating back to the homepage do not sit through it again —
 * a splash on every visit is a conversion tax.
 */
export const SPLASH_KEY = 'bfs_splash_seen';

export default function Splash({ onDone }: { onDone: () => void }) {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setPct((p) => {
        const next = Math.min(100, p + Math.ceil(Math.random() * 11));
        if (next >= 100) {
          clearInterval(t);
          try { sessionStorage.setItem(SPLASH_KEY, '1'); } catch { /* private mode */ }
          setTimeout(onDone, 420);
        }
        return next;
      });
    }, 55);
    return () => clearInterval(t);
  }, [onDone]);

  return (
    <motion.div
      exit={{ opacity: 0, filter: 'blur(8px)', transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }}
      className="fixed inset-0 z-[300] canvas-soft flex flex-col items-center justify-center select-none px-6"
    >
      <span className="side-label absolute right-8 top-1/2 -translate-y-1/2 hidden md:block">
        Web Design &amp; Development
      </span>
      <span
        className="side-label absolute left-8 top-1/2 -translate-y-1/2 hidden md:block"
        style={{ transform: 'rotate(180deg)' }}
      >
        Australia · Est. 2026
      </span>

      <motion.h1
        initial={{ opacity: 0, y: 18, filter: 'blur(10px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="display text-[clamp(2.5rem,8vw,5rem)] text-center"
      >
        Build<span className="text-brand">First</span>Site
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.35 }}
        className="mt-5 text-[11px] tracking-[0.4em] uppercase text-text-muted text-center"
      >
        Websites that win work
      </motion.p>

      <div className="w-[min(20rem,70vw)] h-px bg-border-tertiary mt-12 overflow-hidden">
        <motion.div
          className="h-full bg-text-primary origin-left"
          style={{ width: `${pct}%` }}
          transition={{ ease: 'linear' }}
        />
      </div>

      <div className="mt-5 text-[11px] tracking-[0.3em] uppercase text-text-faint tabular-nums">
        {String(pct).padStart(3, '0')}
      </div>
    </motion.div>
  );
}
