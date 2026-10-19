#!/usr/bin/env bash
# Puts the loose frames, NOTICE.md, credit.txt and a pack.json of every pack the index lists into site/frames/<id>/, for the browser demo of
# anime_ai_companion (a page cannot fetch a Release asset: no CORS headers). Run it from the repository root with the app's checkout in .companion
# (its pack-archive tool writes pack.json). Nothing here is committed: it goes into the Pages artifact, and every deploy needs all of it,
# because a deploy replaces the whole site.
set -euo pipefail
for id in $(node -p "JSON.parse(require('fs').readFileSync('site/index.json','utf8')).packs.map((p) => p.id).join(' ')"); do
  if [ ! -d "packs-src/$id" ]; then
    echo "No packs-src/$id on this commit: $id has no frames on the site." >&2
    continue
  fi
  mkdir -p "site/frames/$id"
  cp "packs-src/$id"/*.webp "site/frames/$id/"
  for extra in NOTICE.md credit.txt; do [ -f "packs-src/$id/$extra" ] && cp "packs-src/$id/$extra" "site/frames/$id/"; done
  node .companion/src/pack-archive-cli.ts manifest "packs-src/$id" -o "site/frames/$id/pack.json"
done
du -sh site/frames
