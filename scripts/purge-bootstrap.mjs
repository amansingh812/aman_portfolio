import { PurgeCSS } from 'purgecss'
import fs from 'node:fs'
import path from 'node:path'
const root=path.resolve(new URL('.', import.meta.url).pathname, '..')
const res = await new PurgeCSS().purge({
  content: [`${root}/app/**/*.js`, `${root}/components/**/*.js`, `${root}/content/**/*.js`, `${root}/lib/**/*.js`],
  css: [`${root}/public/assets/css/vendors/bootstrap.min.css`],
  defaultExtractor: c => c.match(/[\w-/:%.]+(?<!:)/g) || [],
  safelist: {
    standard: ['show','showing','hide','collapse','collapsing','collapsed','fade','active','open','disabled','is-valid','is-invalid','was-validated','visually-hidden','visually-hidden-focusable','sr-only','html','body'],
    deep: [/^modal/, /^dropdown/, /^accordion/, /^offcanvas/, /^tooltip/, /^popover/, /^carousel/],
    greedy: [/^data-bs-/],
  },
  variables: true, keyframes: true, fontFace: true,
})
const out=res[0].css
fs.writeFileSync(`${root}/public/assets/css/vendors/bootstrap.purged.css`, '/* Generated 7 Oct 2026 by PurgeCSS from bootstrap.min.css against app/, components/, content/, lib/. Regenerate if you start using new Bootstrap classes: see docs/PERFORMANCE-PASS-2-2026-10.md */\n'+out)
console.log('before', fs.statSync(`${root}/public/assets/css/vendors/bootstrap.min.css`).size, 'after', out.length)
