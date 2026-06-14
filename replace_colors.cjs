const fs = require('fs');

const filePath = 'src/App.tsx';
let content = fs.readFileSync(filePath, 'utf8');

const replacements = [
  // Backgrounds
  { regex: /bg-\[#fafafa\]/g, replacement: 'bg-bg-primary' },
  { regex: /bg-\[#f3f4f5\]/g, replacement: 'bg-bg-secondary' },
  { regex: /bg-\[#f7f7f8\]/g, replacement: 'bg-bg-tertiary' },
  
  // Texts
  { regex: /text-\[#16181d\]/g, replacement: 'text-text-primary' },
  { regex: /text-\[#4b5057\]/g, replacement: 'text-text-secondary' },
  { regex: /text-\[#6b7076\]/g, replacement: 'text-text-muted' },
  { regex: /text-\[#9ca1a8\]/g, replacement: 'text-text-faint' },
  { regex: /text-\[#b3b7bc\]/g, replacement: 'text-text-faintest' },
  { regex: /text-\[#c9cbce\]/g, replacement: 'text-text-accent' },

  // Borders
  { regex: /border-\[#ececee\]/g, replacement: 'border-border-primary' },
  { regex: /border-\[#e7e8ea\]/g, replacement: 'border-border-secondary' },
  { regex: /border-\[#d8dadd\]/g, replacement: 'border-border-tertiary' },
  { regex: /border-\[#f0f1f2\]/g, replacement: 'border-border-light' },
  { regex: /border-\[#e0e1e4\]/g, replacement: 'border-border-light-2' },
  { regex: /border-\[#dcdee1\]/g, replacement: 'border-border-loader' },

  // Decorations
  { regex: /decoration-\[#c9cbce\]/g, replacement: 'decoration-text-accent' },
  { regex: /decoration-\[#16181d\]/g, replacement: 'decoration-text-primary' },

  // Raw SVG fills and strokes
  { regex: /fill="#16181d"/g, replacement: 'fill="var(--text-primary)"' },
  { regex: /stroke="#dcdee1"/g, replacement: 'stroke="var(--border-loader)"' },
  { regex: /stroke="#e4e5e8"/g, replacement: 'stroke="var(--border-light-2)"' },

  // Focus borders
  { regex: /focus:border-\[#16181d\]/g, replacement: 'focus:border-border-primary' }
];

replacements.forEach(({ regex, replacement }) => {
  content = content.replace(regex, replacement);
});

// Update hardcoded #fafafa or #16181d inside inline styles?
// e.g. bg-[#fafafa]/85
// wait, the regex bg-\[#fafafa\] matches the start of `bg-[#fafafa]/85`
// let's do another pass for those that might have opacity:
// text-[#16181d] is fine, but bg-bg-primary/85 doesn't work if defined via var without Tailwind v4's <alpha-value> syntax.
// Tailwind v4 natively supports `<alpha-value>` if color is a hex, but with CSS vars it requires `color-mix` or similar under the hood. It actually does work natively with CSS vars in v4 if it's set correctly.

fs.writeFileSync(filePath, content, 'utf8');
console.log('Colors replaced successfully!');
