# PLAN — Attribution Update (fix/attribution-links)

## Task
In Footer.tsx, change "Built by Max Gonzih" → "Built by Maksim Soltan" and add clickable
icon links for X (x.com/Gonzih) and GitHub (github.com/Gonzih) next to the name.
Use lucide-react icons consistent with the existing site style.

## Approach
Single-file edit to `src/components/nexus/Footer.tsx`:
- Import `Github` and `Twitter` from lucide-react (both are used elsewhere in the codebase)
- Replace the text-only attribution with name + icon links side-by-side
- Keep the existing 3-column grid layout intact
- Icons: w-4 h-4, hover:text-primary transition-colors (matches site patterns)

## Files to touch
- src/components/nexus/Footer.tsx (only)

## Risks
- `Twitter` icon name may differ in lucide-react 0.462.0 — verify after npm install
- Layout: the right column currently has text + email; dropping the email and adding icons
  changes the visual balance slightly, but it's cleaner
