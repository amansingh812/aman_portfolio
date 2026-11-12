#!/bin/sh
# Downloads the 2 photo-style homepage images (11 Nov 2026). Run from repo root:
#   sh scripts/fetch-home-images-2026-11-11.sh
set -e
H=https://d8j0ntlcm91z4.cloudfront.net/user_3L9AYHjRDoPnJGO9217wNJf5VcX
D=public/assets/imgs/page/home
mkdir -p "$D"
curl -fsSL -o $D/hero-desk.png     $H/hf_20261111_164008_65c6fdd6-65fe-4121-ae72-208975b474c6.png
curl -fsSL -o $D/cafe-website.png  $H/hf_20261111_164008_f181929f-44bf-4f0f-8efd-65e71681967a.png
curl -fsSL -o $D/auto-reply.png    $H/hf_20261111_165833_71983fdf-05bf-4c33-a54f-b898881e81ed.png
curl -fsSL -o $D/tab-website.png   $H/hf_20261112_022008_4b1f093e-e5bc-477b-87a8-eb72669ea529.png
curl -fsSL -o $D/tab-store.png     $H/hf_20261112_022008_6afe6674-806d-4891-9f7f-e5f2dcbaefcc.png
curl -fsSL -o $D/tab-app.png       $H/hf_20261112_022008_52c0b7fa-f873-4b00-9c2c-f6f27756a359.png
echo "Done: 6 homepage photos saved."
