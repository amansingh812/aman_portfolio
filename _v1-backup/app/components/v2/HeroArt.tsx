'use client';

import { motion } from 'motion/react';

/**
 * Iridescent glass-disc arrangement — pure CSS/SVG, no bitmap.
 *
 * The Orionix reference uses a ~1.1MB pre-rendered PNG for this. Rendering it
 * with gradients instead costs ~0KB, scales to any viewport, and adapts to
 * dark mode. Swap in a real Spline/Blender render later if you want more
 * fidelity — keep it under ~250KB as WebP.
 */

const DISCS = [
  { x: '4%',  y: '18%', w: 300, rot: -18, hue: 268, dur: 15, delay: 0,   blur: 1.5, op: 0.85 },
  { x: '17%', y: '42%', w: 190, rot: 12,  hue: 300, dur: 19, delay: 1.2, blur: 0.6, op: 0.9 },
  { x: '32%', y: '26%', w: 120, rot: -34, hue: 214, dur: 13, delay: 0.6, blur: 0,   op: 0.95 },
  { x: '46%', y: '48%', w: 150, rot: 22,  hue: 330, dur: 17, delay: 2.1, blur: 0,   op: 0.92 },
  { x: '60%', y: '22%', w: 210, rot: -10, hue: 25,  dur: 21, delay: 0.9, blur: 0.8, op: 0.88 },
  { x: '74%', y: '44%', w: 260, rot: 30,  hue: 258, dur: 16, delay: 1.7, blur: 1.2, op: 0.82 },
  { x: '88%', y: '20%', w: 320, rot: -24, hue: 288, dur: 23, delay: 0.3, blur: 2,   op: 0.75 },
];

function Disc({ d }: { d: (typeof DISCS)[number] }) {
  return (
    <motion.div
      className="absolute -translate-x-1/2 -translate-y-1/2 will-change-transform"
      style={{ left: d.x, top: d.y }}
      animate={{ y: [0, -18, 0], rotate: [d.rot, d.rot + 6, d.rot] }}
      transition={{ duration: d.dur, delay: d.delay, repeat: Infinity, ease: 'easeInOut' }}
    >
      <div
        style={{
          width: d.w,
          height: d.w * 0.42,
          opacity: d.op,
          filter: d.blur ? `blur(${d.blur}px)` : undefined,
          borderRadius: '50%',
          background: `
            radial-gradient(60% 120% at 30% 20%,
              hsl(${d.hue} 95% 88% / 0.95) 0%,
              hsl(${d.hue + 40} 90% 70% / 0.85) 28%,
              hsl(${d.hue + 90} 85% 58% / 0.75) 52%,
              hsl(${d.hue + 150} 80% 62% / 0.7) 74%,
              hsl(${d.hue + 200} 90% 80% / 0.85) 100%)`,
          boxShadow: `
            inset 0 2px 12px hsl(0 0% 100% / 0.55),
            inset 0 -6px 18px hsl(${d.hue + 120} 70% 40% / 0.35),
            0 18px 50px hsl(${d.hue} 60% 45% / 0.18)`,
        }}
      />
    </motion.div>
  );
}

export default function HeroArt({ className = '' }: { className?: string }) {
  return (
    <div className={`pointer-events-none select-none ${className}`} aria-hidden="true">
      <div className="relative w-full h-full">
        {DISCS.map((d, i) => (
          <Disc key={i} d={d} />
        ))}
        {/* Centre wash so the headline stays legible over the art */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(46% 42% at 50% 34%, var(--bg-primary) 0%, color-mix(in srgb, var(--bg-primary) 72%, transparent) 46%, transparent 72%)',
          }}
        />
      </div>
    </div>
  );
}
