/**
 * Capture self-hosted portfolio screenshots (5 Oct 2026).
 *
 *   npm run shots              # all projects
 *   npm run shots -- hs-race-gear mobile-armour   # just these
 *
 * Writes public/assets/imgs/work/<slug>.jpg (1440x900 viewport, top of page,
 * JPEG q80). components/portfolio/ProjectThumb.js loads these first and only
 * falls back to the remote mShots URL if a file is missing.
 *
 * Needs Playwright once:  npx playwright install chromium
 * Re-run whenever a client site's homepage changes, then commit the images.
 */
import fs from 'node:fs'
import path from 'node:path'

let chromium
try {
  ;({ chromium } = await import('playwright'))
} catch {
  console.error('Playwright not found. Run:  npm i -D playwright && npx playwright install chromium')
  process.exit(1)
}

const { CASE_STUDIES } = await import('../content/case-studies.js')
const OUT = path.resolve('public/assets/imgs/work')
fs.mkdirSync(OUT, { recursive: true })

const only = process.argv.slice(2)
const targets = CASE_STUDIES.filter((c) => c.liveUrl && (only.length === 0 || only.includes(c.slug)))

const browser = await chromium.launch()
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 1,
  locale: 'en-AU',
})

let ok = 0
for (const c of targets) {
  const page = await ctx.newPage()
  const file = path.join(OUT, `${c.slug}.jpg`)
  try {
    await page.goto(c.liveUrl, { waitUntil: 'networkidle', timeout: 45000 })
    // Let hero animations, lazy images and web fonts settle.
    await page.waitForTimeout(3500)
    // Hide cookie banners / chat widgets that would cover the hero.
    await page.addStyleTag({ content: `
      [id*="cookie" i],[class*="cookie" i],[id*="consent" i],[class*="consent" i],
      iframe[src*="chat" i],[id*="intercom" i],[class*="whatsapp" i]{display:none!important}
    ` })
    await page.screenshot({ path: file, type: 'jpeg', quality: 80, clip: { x: 0, y: 0, width: 1440, height: 900 } })
    const kb = Math.round(fs.statSync(file).size / 1024)
    console.log(`✓ ${c.slug}  ${kb} KB`)
    ok++
  } catch (e) {
    console.warn(`✗ ${c.slug}  ${e.message.split('\n')[0]}`)
  } finally {
    await page.close()
  }
}
await browser.close()
console.log(`\n${ok}/${targets.length} screenshots saved to public/assets/imgs/work/`)
