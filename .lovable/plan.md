

# Differentials Section — Inspired Redesign

## What changes

Redesign `src/components/DifferentialsSection.tsx` taking inspiration from the provided code while respecting existing design system (6px border-radius, semantic tokens, industrial look).

### Key elements to adopt
1. **Layout**: Switch from vertical-label + 4-col flat grid → **12-col split** with heading on left (4 cols) and 2x2 card grid on right (8 cols)
2. **Cards**: Glassmorphic cards with `bg-white/5 border border-white/10`, watermark numbers, icon boxes with hover glow — adapted to `rounded-[6px]` per UI standards
3. **Icons**: Update from `Award, Clock` → `Wrench, Handshake` to match inspiration's data
4. **Copy**: Update descriptions to longer, more detailed versions from inspiration
5. **Heading**: Add terracotta left-border accent on the subtitle paragraph
6. **Animation**: Replace GSAP fade hook with framer-motion `whileInView` stagger (already available in deps)
7. **Background**: Keep dark navy bg, add subtle gradient glows (french-blue top-right, terracotta bottom-left) using existing CSS variables

### Constraints maintained
- `rounded-[6px]` not `rounded-2xl`
- No noise texture or dangerouslySetInnerHTML
- Use existing CSS variables from `index.css` (onyx, french-blue, spicy-paprika, pale-slate)
- Keep `id="diferenciais"` for nav anchor
- Mobile-first: single column cards on mobile, 2-col on sm+

### File
- `src/components/DifferentialsSection.tsx` — full rewrite

