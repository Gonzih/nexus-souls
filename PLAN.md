# PLAN — Add Favicon (feat/favicon)

## Task
Add a custom favicon to the nexus-souls site using `/Users/feral/Downloads/money brain.png`.
- Copy into `public/favicon.png` (resized to max 512×512)
- Generate `public/favicon-32.png` (32×32 version)
- Wire up in `index.html`: `<link rel="icon" type="image/png" href="/favicon.png">`
- Remove the existing `favicon.ico` reference

## Approach
Use macOS `sips` (already available at `/usr/bin/sips`) to resize:
- `sips --resampleHeightWidthMax 512 source.png -o public/favicon.png`
- `sips --resampleHeightWidth 32 32 source.png -o public/favicon-32.png`

Then edit `index.html` to replace the `.ico` link with the PNG one.

## Files to touch
- `public/favicon.png` (new)
- `public/favicon-32.png` (new)
- `index.html` (replace favicon link)

## Risks
- Source image may already be ≤512×512 — sips handles that fine (no-op resize)
- `favicon.ico` file stays in `public/` but is no longer referenced — that's fine
