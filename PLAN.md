# Plan: Animate Hero Planet Visual

## Task
Animate the static `Orbits` SVG component in `Hero.tsx` to create a living, ambient planetary visualization. All motion should be calm and slow — distant-planet telescope aesthetic.

## Approach

Convert the static `Orbits` component to use Framer Motion's `motion.g` / `motion.circle` elements for GPU-composited, continuous rotation and pulse animations.

### Elements to animate

1. **Orbital rings** (`motion.g` per ring)
   - Each ellipse gets its own `motion.g`
   - Alternating CW/CCW rotation (`rotate: 360` vs `rotate: -360`)
   - Durations: 45s → 60s → 80s → 100s → 130s (inner fastest, outer slowest)
   - `style={{ transformOrigin: "300px 300px" }}` to rotate around SVG center
   - `ease: "linear"`, `repeat: Infinity`

2. **Spiral arms** (single `motion.g` wrapping both arms)
   - Both dot arms inside one group — they rotate together as a galaxy
   - Duration: ~120s, CW, linear, infinite
   - `style={{ transformOrigin: "300px 300px" }}`

3. **Center glow** (`motion.circle` on both inner circles)
   - Opacity keyframes: [0.7, 1, 0.7] on inner (r=14), [0.15, 0.4, 0.15] on outer (r=34)
   - Duration: ~4s, easeInOut, infinite; outer slightly phase-shifted (delay: 0.5)

4. **Corner crosshairs** (`motion.g` per crosshair)
   - Opacity keyframes: [0.3, 0.7, 0.3]
   - Duration: 3–4.5s per crosshair, staggered by 0.75s delay

## Files to touch
- `src/components/nexus/Hero.tsx` — only file

## Constraints
- No new dependencies (Framer Motion already installed)
- `transformOrigin: "300px 300px"` required for correct SVG group rotation
- Keep animation durations very slow (ambient feel, not flashy)
