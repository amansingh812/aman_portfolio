#!/usr/bin/env python3
"""
Branded blog image generator for Build First Site.

No API key, no cost, no licence risk. Renders an SVG built from the post's own
data, then rasterises to WebP. Output is ~30-60KB versus 200-400KB for a stock
photo, which keeps Largest Contentful Paint low on the blog template.

  pip install cairosvg --break-system-packages

  python3 scripts/blog-image.py \
      --slug best-web-design-agencies-australia \
      --tag  "Comparison" \
      --title "Best Web Design Agencies in Australia" \
      --sub  "2026 pricing compared" \
      --style stat \
      --stats "600:Us|900:Aussify|995:Havealook|?:Growth Digital" \
      --unit "$"
"""
import argparse, html, os, io
import cairosvg
from PIL import Image

ORANGE = "#D9541A"
INK    = "#101828"
INK_2  = "#1D2939"
CREAM  = "#F8F5F0"
MUTED  = "#98A2B3"

SANS = "DejaVu Sans, Arial, Helvetica, sans-serif"


def wrap(text, per_line):
    words, lines, cur = text.split(), [], ""
    for w in words:
        t = (cur + " " + w).strip()
        if len(t) <= per_line:
            cur = t
        else:
            lines.append(cur); cur = w
    if cur:
        lines.append(cur)
    return lines


def logo(x, y, scale=1.0):
    s = scale
    return f'''<g transform="translate({x},{y}) scale({s})">
  <rect x="0" y="0" width="44" height="44" fill="none" stroke="{ORANGE}" stroke-width="5"/>
  <text x="22" y="32" text-anchor="middle" font-family="Georgia, serif"
        font-size="26" font-weight="700" fill="{ORANGE}">B</text>
  <text x="60" y="20" font-family="{SANS}" font-size="15" font-weight="700"
        letter-spacing="0.6" fill="#FFFFFF">BUILD FIRST</text>
  <text x="60" y="38" font-family="{SANS}" font-size="13" font-weight="400"
        letter-spacing="6" fill="{ORANGE}">SITE</text>
</g>'''


def bars(stats, unit, x, y, w, h):
    """stats: list of (value, label). Value '?' renders as an undisclosed bar."""
    nums = [float(v) for v, _ in stats if v.replace('.', '').isdigit()]
    top = max(nums) if nums else 1.0
    n = len(stats)
    gap = 26
    bw = (w - gap * (n - 1)) / n
    out = []
    for i, (v, label) in enumerate(stats):
        bx = x + i * (bw + gap)
        known = v.replace('.', '').isdigit()
        bh = (float(v) / top) * h if known else h * 0.22
        by = y + h - bh
        if known:
            attrs = f'fill="{ORANGE if i == 0 else "#344054"}"'
        else:
            attrs = 'fill="#1D2939" stroke="#475467" stroke-width="2" stroke-dasharray="7 6"'
        out.append(f'<rect x="{bx:.0f}" y="{by:.0f}" width="{bw:.0f}" height="{bh:.0f}" rx="6" {attrs}/>')
        vtxt = (unit + v) if known else "n/a"
        vcol = "#FFFFFF" if i == 0 else "#E4E7EC"
        out.append(f'<text x="{bx + bw/2:.0f}" y="{by - 16:.0f}" text-anchor="middle" '
                   f'font-family="{SANS}" font-size="30" font-weight="700" fill="{vcol}">{html.escape(vtxt)}</text>')
        out.append(f'<text x="{bx + bw/2:.0f}" y="{y + h + 30:.0f}" text-anchor="middle" '
                   f'font-family="{SANS}" font-size="19" fill="{MUTED}">{html.escape(label)}</text>')
    return "\n".join(out)


def build_svg(W, H, tag, title, sub, style, stats, unit):
    pad = int(W * 0.065)
    tl = wrap(title, 30 if W > 1400 else 26)
    tsize = int(W * 0.052) if len(tl) <= 2 else int(W * 0.044)

    body = ""
    ty = int(H * 0.38)
    for i, line in enumerate(tl[:3]):
        body += (f'<text x="{pad}" y="{ty + i * int(tsize*1.18)}" font-family="{SANS}" '
                 f'font-size="{tsize}" font-weight="700" fill="#FFFFFF">{html.escape(line)}</text>\n')
    after = ty + len(tl[:3]) * int(tsize * 1.18)

    if sub:
        body += (f'<text x="{pad}" y="{after + 12}" font-family="{SANS}" font-size="{int(W*0.022)}" '
                 f'fill="{MUTED}">{html.escape(sub)}</text>\n')
        after += 30

    if style == "stat" and stats:
        cw = W - pad * 2
        ch = int(H * 0.17)
        body += bars(stats, unit, pad, after + int(H * 0.06), cw, ch)

    return f'''<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}">
  <rect width="{W}" height="{H}" fill="{INK}"/>
  <rect x="0" y="0" width="{W}" height="6" fill="{ORANGE}"/>
  <circle cx="{W - int(W*0.06)}" cy="{int(H*0.14)}" r="{int(W*0.16)}" fill="{INK_2}" opacity="0.55"/>
  {logo(pad, int(H * 0.10), W / 1600)}
  <rect x="{pad}" y="{int(H*0.26)}" width="{len(tag)*13 + 34}" height="36" rx="18" fill="{ORANGE}"/>
  <text x="{pad + 17}" y="{int(H*0.26) + 24}" font-family="{SANS}" font-size="16"
        font-weight="700" letter-spacing="1.4" fill="#FFFFFF">{html.escape(tag.upper())}</text>
  {body}
  <text x="{W - pad}" y="{int(H * 0.10) + 30}" text-anchor="end" font-family="{SANS}"
        font-size="{int(W*0.017)}" fill="{MUTED}">buildfirstsite.com</text>
</svg>'''


def render(svg, path, w, h, quality=82):
    png = cairosvg.svg2png(bytestring=svg.encode(), output_width=w, output_height=h)
    im = Image.open(io.BytesIO(png)).convert("RGB")
    os.makedirs(os.path.dirname(path), exist_ok=True)
    im.save(path, "WEBP", quality=quality, method=6)
    return os.path.getsize(path)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--slug", required=True)
    ap.add_argument("--tag", default="Guide")
    ap.add_argument("--title", required=True)
    ap.add_argument("--sub", default="")
    ap.add_argument("--style", default="plain", choices=["plain", "stat"])
    ap.add_argument("--stats", default="", help="value:label|value:label ; use ? for undisclosed")
    ap.add_argument("--unit", default="$")
    ap.add_argument("--outdir", default="public/assets/imgs/page/blog/generated")
    a = ap.parse_args()

    stats = [tuple(s.split(":", 1)) for s in a.stats.split("|") if ":" in s]

    hero = build_svg(1600, 900, a.tag, a.title, a.sub, a.style, stats, a.unit)
    og   = build_svg(1200, 630, a.tag, a.title, a.sub, a.style, stats, a.unit)

    hp = f"{a.outdir}/{a.slug}-hero.webp"
    op = f"{a.outdir}/{a.slug}-og.webp"
    print(f"hero  {hp}  {render(hero, hp, 1600, 900)/1024:.0f} KB")
    print(f"og    {op}  {render(og, op, 1200, 630)/1024:.0f} KB")


if __name__ == "__main__":
    main()
