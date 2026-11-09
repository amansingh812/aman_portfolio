#!/usr/bin/env node
/**
 * Generates public/sitemap.xml and public/sitemap-index.xml from the codebase.
 *
 * ── WHY THIS EXISTS ─────────────────────────────────────────────────────
 * The sitemap was hand-maintained and drifted, exactly as predicted:
 *   • /webflow-vs-custom-website/ was listed twice
 *   • /blog/seo-for-ndis-providers/, /industries/real-estate/,
 *     /work/banish-shoes/ and /work/swarom/ were live but in no sitemap
 *   • sitemap-city-pages.xml and sitemap-service-pages.xml re-listed 16 URLs
 *     already in sitemap.xml, and were missing Canberra and 10 newer pages
 * A hand-written sitemap on a site that adds pages from data files will always
 * drift. This reads the same data files the site renders from, so the sitemap
 * cannot disagree with the site.
 *
 * Findings: docs/ORGANIC-SEO-AUDIT-2026-11-09.md §3.
 *
 * ── WHAT IT READS ───────────────────────────────────────────────────────
 *   content/landing-pages.js   → slug: '...'
 *   content/service-pages.js   → slug: '...'
 *   content/industry-pages.js  → slug: '...'
 *   content/blog.js            → slug: '...'
 *   content/guides.js          → slug: '...'
 *   content/case-studies.js    → "slug": "..."   (double-quoted file)
 *   content/automation-pages.js→ slug: '...'
 *   every app/<dir>/page.js     → static routes (dynamic [slug] routes come from
 *                                the data files above)
 *
 * Slugs are extracted by regex, NOT by importing the modules: content/*.js are
 * ESM files in a CommonJS package (no "type": "module" in package.json), so
 * `import` fails at runtime. Regex keeps this script dependency-free and means
 * a broken content file cannot break the sitemap build.
 *
 * ── LASTMOD POLICY ──────────────────────────────────────────────────────
 * lastmod comes from the last git commit that touched the file defining the
 * page, not from "now". Stamping every URL with the build date tells Google
 * every page changed on every deploy, which is false and trains it to ignore
 * lastmod. A dirty file counts as today, because that change is real.
 *
 * Run: npm run sitemap
 * Then commit public/sitemap.xml + public/sitemap-index.xml.
 *
 * NOT included: /website-speed-checker/results/ (noindex) and any page.js that
 * sets `robots: { index: false }`.
 */

import fs from 'node:fs'
import path from 'node:path'
import { execSync } from 'node:child_process'

const ROOT = process.cwd()
const SITE = 'https://buildfirstsite.com'
const TODAY = new Date().toISOString().slice(0, 10)

const warnings = []

/** Slug list from a content file, tolerant of 'single' and "double" quotes. */
function slugsFrom(relPath) {
    const abs = path.join(ROOT, relPath)
    if (!fs.existsSync(abs)) {
        warnings.push(`missing content file: ${relPath}`)
        return []
    }
    const src = fs.readFileSync(abs, 'utf8')
    const out = new Set()
    // Top-level entries only: `slug:` / `"slug":` at the start of a line.
    for (const m of src.matchAll(/^\s*["']?slug["']?\s*:\s*["']([a-z0-9-]+)["']/gm)) {
        out.add(m[1])
    }
    return [...out]
}

/** Last commit date that touched a file; today if it has uncommitted changes. */
const dateCache = new Map()
const dirtyCache = new Map()
function isDirty(relPath) {
    if (!dirtyCache.has(relPath)) {
        let dirty = false
        try {
            const out = execSync(`git status --porcelain -- "${relPath}"`, {
                cwd: ROOT,
                stdio: ['ignore', 'pipe', 'ignore'],
            }).toString().trim()
            dirty = out.length > 0
        } catch {
            /* not a git checkout — fall through */
        }
        dirtyCache.set(relPath, dirty)
    }
    return dirtyCache.get(relPath)
}
function lastmodFor(relPath) {
    if (dateCache.has(relPath)) return dateCache.get(relPath)
    let date = TODAY
    if (isDirty(relPath)) {
        date = TODAY
    } else {
        try {
            const out = execSync(`git log -1 --format=%cs -- "${relPath}"`, {
                cwd: ROOT,
                stdio: ['ignore', 'pipe', 'ignore'],
            }).toString().trim()
            if (/^\d{4}-\d{2}-\d{2}$/.test(out)) date = out
        } catch {
            /* no git history — today is the best available answer */
        }
    }
    dateCache.set(relPath, date)
    return date
}

/* ── Collect pages ─────────────────────────────────────────────────────── */

/** url → source file (decides lastmod) */
const pages = new Map()
const add = (url, file, priority) => {
    if (pages.has(url)) return
    pages.set(url, { file, priority })
}

const DATA = [
    // [content file, url prefix, priority]
    ['content/landing-pages.js', '/', 0.8],
    ['content/automation-pages.js', '/', 0.8],
    ['content/service-pages.js', '/services/', 0.8],
    ['content/industry-pages.js', '/industries/', 0.8],
    ['content/blog.js', '/blog/', 0.6],
    ['content/guides.js', '/guides/', 0.6],
    ['content/case-studies.js', '/work/', 0.6],
]
for (const [file, prefix, priority] of DATA) {
    for (const slug of slugsFrom(file)) add(`${prefix}${slug}/`, file, priority)
}

// Static routes from the app tree — excluding dynamic segments and noindex pages.
function walk(dir) {
    const out = []
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const abs = path.join(dir, entry.name)
        if (entry.isDirectory()) {
            if (entry.name === 'node_modules' || entry.name === '.next') continue
            out.push(...walk(abs))
        } else if (entry.name === 'page.js') {
            out.push(abs)
        }
    }
    return out
}
for (const abs of walk(path.join(ROOT, 'app'))) {
    if (abs.includes('[')) continue // dynamic — covered by DATA above
    const rel = path.relative(ROOT, abs)
    const src = fs.readFileSync(abs, 'utf8')
    if (/robots\s*:\s*\{[^}]*index\s*:\s*false/s.test(src)) continue // intentional noindex
    // Relative to app/, not to the repo root — slicing the root left every
    // static route as "/app/about/" instead of "/about/". Caught by diffing the
    // generated file against the live URL list before committing it.
    const relDir = path.relative(path.join(ROOT, 'app'), path.dirname(abs)).replaceAll(path.sep, '/')
    const url = relDir === '' ? '/' : `/${relDir}/`
    const priority = url === '/' ? 1.0 : 0.5
    add(url, rel, priority)
}

// Core pages worth flagging over generic ones.
for (const [url, p] of [['/', 1.0], ['/pricing/', 0.9], ['/contact/', 0.7], ['/work/', 0.8]]) {
    if (pages.has(url)) pages.get(url).priority = p
}

/* ── Write ─────────────────────────────────────────────────────────────── */

const urls = [...pages.keys()].sort((a, b) => {
    const pa = pages.get(a).priority
    const pb = pages.get(b).priority
    if (pa !== pb) return pb - pa
    return a.localeCompare(b)
})

const body = urls
    .map((url) => {
        const { file, priority } = pages.get(url)
        return `  <url>
    <loc>${SITE}${url}</loc>
    <lastmod>${lastmodFor(file)}</lastmod>
    <changefreq>${url === '/' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${priority.toFixed(1)}</priority>
  </url>`
    })
    .join('\n')

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`
fs.writeFileSync(path.join(ROOT, 'public/sitemap.xml'), sitemap)

const index = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${SITE}/sitemap.xml</loc>
    <lastmod>${TODAY}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${SITE}/sitemap-images.xml</loc>
    <lastmod>${TODAY}</lastmod>
  </sitemap>
</sitemapindex>
`
fs.writeFileSync(path.join(ROOT, 'public/sitemap-index.xml'), index)

console.log(`\n  sitemap.xml       ${urls.length} URLs`)
console.log(`  sitemap-index.xml 2 sitemaps (pages + images)\n`)
if (warnings.length) {
    console.log('  WARNINGS')
    warnings.forEach((w) => console.log(`    ${w}`))
    console.log('')
}

// Fail loudly if a data file silently produced nothing — that is the exact bug
// class this script exists to prevent.
for (const [file] of DATA) {
    if (!slugsFrom(file).length) {
        console.error(`  ERROR: no slugs found in ${file}`)
        process.exit(1)
    }
}
