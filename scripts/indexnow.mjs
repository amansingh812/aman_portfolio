/**
 * Tell Bing (and other IndexNow engines: Yandex, Seznam, Naver) that our pages
 * changed. ChatGPT search draws heavily on Bing's index, so this is how new
 * pages reach ChatGPT quickly. Added 14 Oct 2026, after our first ChatGPT lead.
 *
 * Run AFTER a deploy is live:   npm run indexnow
 * Optional: only some URLs:     npm run indexnow -- /lovable-prototype-to-production/ /pricing/
 *
 * The key file public/861706454c7d13cc91c6112bdb4b3233.txt must stay deployed at the site root.
 */
import fs from 'node:fs'

const HOST = 'buildfirstsite.com'
const KEY = '861706454c7d13cc91c6112bdb4b3233'
const args = process.argv.slice(2)

let urls
if (args.length) {
  urls = args.map((p) => (p.startsWith('http') ? p : `https://${HOST}${p}`))
} else {
  const xml = fs.readFileSync(new URL('../public/sitemap.xml', import.meta.url), 'utf8')
  urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
}

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList: urls }),
})
console.log(`IndexNow: submitted ${urls.length} URLs → HTTP ${res.status} ${res.statusText}`)
if (res.status >= 400) console.log(await res.text())
