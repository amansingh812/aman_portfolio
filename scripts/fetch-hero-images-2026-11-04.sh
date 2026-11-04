#!/bin/sh
# Downloads the Higgsfield hero images for the 4 Nov 2026 page rewrite.
# Run from the repo root:  sh scripts/fetch-hero-images-2026-11-04.sh
set -e
H=https://d8j0ntlcm91z4.cloudfront.net/user_3L9AYHjRDoPnJGO9217wNJf5VcX
L=public/assets/imgs/page/landing
B=public/assets/imgs/page/blog
curl -fsSL -o $L/how-much-does-a-website-cost-australia-hero.png $H/hf_20261104_044733_675a9d03-f9f0-4997-ac52-dd11cac547ae.png
curl -fsSL -o $L/dental-website-design-hero.png                  $H/hf_20261104_044733_6d36629b-3a9c-43e6-b5a4-c0524d6ce004.png
curl -fsSL -o $L/affordable-website-design-hero.png              $H/hf_20261104_044734_11ea83d6-8677-48e2-9df2-99d0f11ed36a.png
curl -fsSL -o $L/small-business-website-checklist-hero.png       $H/hf_20261104_044951_825d0ca3-c841-498a-b49e-e1ee5c691c8b.png
curl -fsSL -o $L/ndis-website-design-hero.png                    $H/hf_20261104_044951_23ba15e3-42e3-4e08-bfff-484f29c44034.png
curl -fsSL -o $L/web-design-melbourne-hero.png                   $H/hf_20261104_044952_d83ae814-82bd-415d-a73f-b3caa6709507.png
curl -fsSL -o $B/best-ndis-website-designers-hero.png            $H/hf_20261104_044952_583640bb-676f-4048-a875-48c703c61548.png
curl -fsSL -o $B/best-web-design-agencies-australia-hero.png     $H/hf_20261104_044734_19eb098c-22ac-4559-89ba-877908226f86.png
curl -fsSL -o $L/pricing-hero.png                                $H/hf_20261104_042149_fe467dec-1616-4394-a2bc-02ce5eddadf4.png
curl -fsSL -o $B/ndis-seo-hero.png                               $H/hf_20261104_021237_fc838f3b-86ef-49f7-bcdd-b950e32f570c.png
curl -fsSL -o $B/ndis-seo-page-per-service.png                   $H/hf_20261104_021427_1f7efe57-266b-4b84-8f68-664ab0dc334c.png
echo "Done: 11 images saved."
