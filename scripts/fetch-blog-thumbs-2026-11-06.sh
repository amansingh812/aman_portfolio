#!/bin/sh
# Downloads the 12 Higgsfield blog thumbnails (6 Nov 2026). Run from repo root:
#   sh scripts/fetch-blog-thumbs-2026-11-06.sh
set -e
H=https://d8j0ntlcm91z4.cloudfront.net/user_3L9AYHjRDoPnJGO9217wNJf5VcX
B=public/assets/imgs/page/blog
g() { curl -fsSL -o "$B/$1-thumb.png" "$H/$2"; echo "saved $1"; }
g 7-website-mistakes-australia               hf_20261106_175901_dc300518-54c7-427f-80ca-d6804a0f5de5.png
g signs-website-losing-customers             hf_20261106_175900_fd5b4383-7b1c-48e1-b06d-2a239cc55fbe.png
g wordpress-vs-custom-website                hf_20261106_175859_01cf883d-5666-426c-bbb2-43d3661ecc5c.png
g how-long-to-build-a-website                hf_20261106_175900_781b3971-3200-4a01-bcde-890de11a827e.png
g what-small-business-website-actually-needs hf_20261106_175930_68645208-b18b-41d6-9dcd-8e87eda3f880.png
g tradie-website-cost                        hf_20261106_175930_9a13cc52-1e0f-4de3-be49-05e830dc0893.png
g ndis-website-accessibility-checklist       hf_20261106_175929_7915c02e-167e-4646-bfe8-94017b7853ce.png
g ndis-website-cost                          hf_20261106_175929_a255a081-7b07-479c-b0e3-f9f9630b174d.png
g wordpress-vs-nextjs-speed-australia        hf_20261106_180026_fd38f945-638e-4e11-9ba4-2b9a4f0dfb98.png
g tradie-suburb-pages-seo                    hf_20261106_180025_ea006dd9-7318-47dd-a5d5-39e600367ae7.png
g wcag-audit-process-ndis-websites           hf_20261106_180025_2775a3e4-9fea-4226-abb7-eb8227ffcc58.png
g ai-receptionist-australia-cost             hf_20261106_180024_85557c3e-417a-4d0e-8701-e09420bf2239.png
echo "Done: 12 thumbnails saved."
