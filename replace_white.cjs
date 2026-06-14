const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

// Replace standard white backgrounds
content = content.replace(/bg-white/g, 'bg-bg-primary');
// Exception for absolute items inside hero-art that might want a real white. Wait, if bg-bg-primary goes to dark in dark mode, the card backgrounds will invert correctly.

// Replace primary dark backgrounds
content = content.replace(/bg-\[#16181d\]/g, 'bg-text-primary');

// Replace white texts that are meant to be inverted (specifically the buttons which now use bg-text-primary)
content = content.replace(/text-white/g, 'text-bg-primary');

// Wait! If I change ALL text-white to text-bg-primary, text inside hero-art (which doesn't invert its background) will turn black in dark mode!
// The hero art background is hardcoded: radial-gradient(..., #2a2d34, #16181d, #0d0e11).
// So text inside hero art must stay white (`text-white` or `#fff` or `rgba(255,255,255)`).
// Let's revert the naive replace and only do it for specific combinations.

content = fs.readFileSync('src/App.tsx', 'utf8');

// The buttons that are bg-[#16181d] text-white
content = content.replace(/bg-\[#16181d\] text-white/g, 'bg-text-primary text-bg-primary');

// The tags in experience (not sure if any use text-white, let's check: pill uses text-text-secondary).

// The card with `bg-[#16181d] text-white` (Retainer card)
content = content.replace(/bg-\[#16181d\] text-white/g, 'bg-text-primary text-bg-primary');

// For other generic `bg-white`, we should replace it with `bg-bg-primary` because that's the main background for cards/headers.
// Exceptions: bg-white/90 or bg-white/95
content = content.replace(/bg-white(?![\/\-])/g, 'bg-bg-primary');
// If there is `bg-white/90`, Tailwind handles opacity differently for vars. We can leave them as bg-white/90 if they are inside hero-art.

// Let's write it back
fs.writeFileSync('src/App.tsx', content);
console.log('done');
