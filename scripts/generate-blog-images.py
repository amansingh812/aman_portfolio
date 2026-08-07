#!/usr/bin/env python3
"""
generate-blog-images.py
Generates hero images for all BuildFirstSite blog posts via Vercel AI Gateway.

Reads AI_GATEWAY_API_KEY from .env (or shell environment).
Uses openai/gpt-image-2 routed through Vercel AI Gateway (~$0.02-0.04/image).

Usage:
    python3 scripts/generate-blog-images.py              # all 8 posts
    python3 scripts/generate-blog-images.py tradie-website-cost  # one post

Requirements:
    pip install openai python-dotenv
"""

import os
import sys
import base64
from pathlib import Path

# ── Load .env ─────────────────────────────────────────────────────────────────
try:
    from dotenv import load_dotenv
    load_dotenv()
except ImportError:
    # Fallback: parse .env manually if python-dotenv isn't installed
    env_file = Path(".env")
    if env_file.exists():
        for line in env_file.read_text().splitlines():
            line = line.strip()
            if line and not line.startswith("#") and "=" in line:
                k, _, v = line.partition("=")
                os.environ.setdefault(k.strip(), v.strip().strip('"').strip("'"))

try:
    from openai import OpenAI
except ImportError:
    print("❌  Run: pip install openai python-dotenv")
    sys.exit(1)

# ── Config ────────────────────────────────────────────────────────────────────

API_KEY = os.environ.get("AI_GATEWAY_API_KEY", "").strip()
if not API_KEY:
    print("❌  AI_GATEWAY_API_KEY not found.")
    print("    Make sure it's in your .env file:  AI_GATEWAY_API_KEY=vck_...")
    sys.exit(1)

OUT_DIR = Path("public/assets/imgs/page/blog")
OUT_DIR.mkdir(parents=True, exist_ok=True)

# Vercel AI Gateway — OpenAI-compatible endpoint
client = OpenAI(
    api_key=API_KEY,
    base_url="https://ai-gateway.vercel.sh/v1",
)

MODEL   = "openai/gpt-image-2"
SIZE    = "1536x1024"   # landscape 3:2 — closest gpt-image-2 supports to 16:9
QUALITY = "medium"      # low | medium | high  (medium = good quality, half the cost)

# ── Blog post prompts ─────────────────────────────────────────────────────────
# Rules: photorealistic, no text in image, professional, Australian context where relevant.

POSTS = {
    "7-website-mistakes-australia": (
        "A web developer at a modern desk reviewing a cluttered poorly designed "
        "business website on a large monitor. Clean minimal office background, "
        "warm soft lighting, no text on screens, photorealistic."
    ),
    "website-cost-australia": (
        "Australian small business owner reviewing a clear pricing proposal on a "
        "laptop at a bright contemporary office. Calculator and documents on the "
        "desk, confident professional expression, photorealistic."
    ),
    "signs-website-losing-customers": (
        "Business analytics dashboard on a laptop showing declining traffic graphs. "
        "Professional looking concerned at data in a modern open-plan office, "
        "soft window light, photorealistic."
    ),
    "small-business-website-checklist": (
        "Neatly organised project checklist on a tablet with a coffee cup beside it "
        "on a bright tidy desk. Small business owner reviewing tasks, "
        "natural window light, photorealistic."
    ),
    "wordpress-vs-custom-website": (
        "Two laptops side by side on a clean desk showing different website designs. "
        "Neutral modern background, professional workspace, symmetrical composition, "
        "no text visible, photorealistic."
    ),
    "how-long-to-build-a-website": (
        "Project timeline on a whiteboard with coloured sticky notes and milestone "
        "markers. Software developer planning website build phases in a bright "
        "modern studio, photorealistic."
    ),
    "tradie-website-cost": (
        "Australian tradie in professional workwear checking a business website on "
        "a smartphone at a job site. Tools and materials in background, "
        "confident modern look, photorealistic."
    ),
    "best-web-design-agencies-australia": (
        "Multiple open laptops on a wide conference table each showing a different "
        "professional website. Clean comparison setup, modern office with natural "
        "light, no visible text, photorealistic."
    ),
}

# ── Generator ─────────────────────────────────────────────────────────────────

def generate(slug: str, prompt: str) -> None:
    out_path = OUT_DIR / f"{slug}.png"
    print(f"  → {slug} ... ", end="", flush=True)

    response = client.images.generate(
        model=MODEL,
        prompt=prompt,
        size=SIZE,
        quality=QUALITY,
        response_format="b64_json",
        n=1,
    )

    img_bytes = base64.b64decode(response.data[0].b64_json)
    out_path.write_bytes(img_bytes)

    kb = len(img_bytes) // 1024
    print(f"✓  {kb} KB  →  {out_path}")


def main() -> None:
    target = sys.argv[1] if len(sys.argv) > 1 else None

    if target and target not in POSTS:
        print(f"\n❌  Unknown slug: '{target}'")
        print(f"    Available slugs:\n    " + "\n    ".join(POSTS))
        sys.exit(1)

    posts = {target: POSTS[target]} if target else POSTS

    cost_low  = len(posts) * 0.02
    cost_high = len(posts) * 0.04
    print(f"\n🖼   Generating {len(posts)} image(s)")
    print(f"    Model:   {MODEL}  ({QUALITY} quality, {SIZE})")
    print(f"    Est cost: ~${cost_low:.2f}–${cost_high:.2f} of your $5 budget\n")

    errors = []
    for slug, prompt in posts.items():
        try:
            generate(slug, prompt)
        except Exception as e:
            print(f"  ✗  FAILED — {e}")
            errors.append(slug)

    print(f"\n{'✅  Done' if not errors else '⚠️   Finished with errors'}.")
    print(f"    Images saved to {OUT_DIR}/")
    print(f"    Run 'npm run build' to verify paths resolve correctly.\n")

    if errors:
        print(f"    Failed: {', '.join(errors)}")
        print("    Retry a single post: python3 scripts/generate-blog-images.py <slug>")
        sys.exit(1)


if __name__ == "__main__":
    main()
