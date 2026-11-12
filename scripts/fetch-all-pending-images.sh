#!/bin/sh
# Downloads every pending Higgsfield image in one go (homepage, service pages, blog thumbnails).
# Run from the repo root:  sh scripts/fetch-all-pending-images.sh
set -e
cd "$(dirname "$0")/.."
sh scripts/fetch-home-images-2026-11-11.sh
sh scripts/fetch-service-images-2026-11-12.sh
sh scripts/fetch-blog-thumbs-2026-11-06.sh
echo ""
echo "All images saved. Restart 'npm run dev' (Ctrl+C, then npm run dev) so the pages pick them up."
