# PLAN: Fix GitHub Pages SPA Routing (404 on direct URL)

## Task
Direct navigation to any route other than `/` (e.g. `/case-study/temporal-storage`)
returns a 404 from GitHub Pages because it serves static files only and has no
server-side rewriting. React Router never gets control.

## Root cause
GitHub Pages serves 404.html when a path has no matching file. We exploit this:
404.html encodes the path into a query string and redirects to `/`. The app's
`index.html` then decodes the query string and calls `history.replaceState` to
restore the real path before React Router mounts.

## Approach (standard GitHub Pages SPA pattern)
1. **public/404.html** — redirect script: encodes `pathname` into `?/path` query,
   calls `location.replace(...)` to `/`.
2. **index.html** — restore script: if `location.search[1] === '/'`, decode and call
   `history.replaceState` to restore the original path before Vite's module loads.
3. **vite.config.ts** — already has no explicit `base`, defaults to `/`, which is
   correct for the root-domain site `gonzih.github.io`. No change needed.

## Alternatives considered
- **HashRouter** (`#/path`): works but uglifies all URLs and breaks sharing.
- **Server config / Nginx rewrite**: not available on GitHub Pages.
- **netlify.toml / `_redirects`**: GitHub Pages doesn't support these.

## Files to touch
1. `public/404.html` — create (new file)
2. `index.html` — add restore script before the `<script type="module">` entry

## Risks / unknowns
- If `gonzih.github.io` ever moves to a sub-path base (e.g. `/nexus-souls/`),
  the `slice(0, 1)` logic needs updating. Current root-domain deployment is fine.
- The redirect script handles real query params via `~and~` encoding.
