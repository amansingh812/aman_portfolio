#!/bin/sh
# Downloads the AI-generated photo-style images for the 7 "Websites" menu pages (12 Nov 2026).
# Run from repo root:  sh scripts/fetch-service-images-2026-11-12.sh
set -e
H=https://d8j0ntlcm91z4.cloudfront.net/user_3L9AYHjRDoPnJGO9217wNJf5VcX
D=public/assets/imgs/page/services/x
mkdir -p "$D"
g() { curl -fsSL -o "$D/$1" "$H/$2"; echo "saved $1"; }
g web-hero.png      hf_20261112_022751_c71fc12c-4660-421d-885b-188bfda80226.png
g web-story-1.png   hf_20261112_022754_e884fdce-2837-408a-9def-e3c227f0bc38.png
g app-hero.png      hf_20261112_022751_8256e3db-64ac-4947-a7a7-df1cc0cfa6b9.png
g app-story-1.png   hf_20261112_022751_bec10fdd-882c-4e96-8dec-719b0654ef8f.png
g soft-hero.png     hf_20261112_023028_9b58c73d-4b65-4ce0-813c-dd5abd989be9.png
g soft-story-1.png  hf_20261112_023028_a7de9e20-cb0e-4ea3-bcda-1971dbfb1230.png
g seo-hero.png      hf_20261112_023029_599dc032-f6c9-42e1-94c5-18753ffd0818.png
g seo-story-1.png   hf_20261112_023029_3ed020f3-725f-4eb3-97d6-8820bf33fb2f.png
g care-hero.png     hf_20261112_023112_5b3d77e2-a978-427d-92f1-6a70a915a1f4.png
g care-story-1.png  hf_20261112_023112_81c13477-aa54-4f46-a3cf-c24e43eb488a.png
g store-hero.png    hf_20261112_023113_7a4dc760-fead-4027-ba49-468a3215e034.png
g store-story.png   hf_20261112_022008_6afe6674-806d-4891-9f7f-e5f2dcbaefcc.png
g free-design.png   hf_20261112_023113_13fe4b4b-4b20-43d0-a9cb-85294c6c5a21.png
echo "Done: 13 images saved."
