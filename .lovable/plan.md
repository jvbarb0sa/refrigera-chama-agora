

# Mobile-First Adjustments

## Issues Found

### 1. ProblemsSection — Diagnostic grid forces 2 columns on mobile
- `grid-cols-2` on the diagnostic grid is cramped on small screens
- Fix: Change to `grid-cols-1 sm:grid-cols-2`
- Also: the em dash `—` bullet on line 51 was missed in the previous cleanup

### 2. ServiceAreaSection — Left column padding + map height
- `pr-8` on left column applies on mobile too (unnecessary)
- Map `minHeight: 400` is excessive on mobile
- Fix: `pr-0 lg:pr-8`, map min-height `300px` on mobile / `400px` on lg

### 3. MissionSection — Image has no height on mobile
- Image container has no height constraint, can be very tall on mobile
- Fix: Add `h-64 sm:h-80 lg:h-auto` to image container

### 4. HeroSection — Mobile spacing refinements
- `py-20` top padding is excessive on mobile; reduce to `py-12 md:py-32`
- `gap-12` between grid columns too large on mobile; use `gap-8 lg:gap-12`
- Card column `mt-10 lg:mt-0` — reduce to `mt-6 lg:mt-0`

### 5. DifferentialsSection — Vertical label hidden but grid spacing
- Grid `gap-y-10` is large on mobile; use `gap-y-6 lg:gap-y-10`

### 6. Navbar — Mobile WhatsApp button border-radius
- `rounded-[10px]` should be `rounded-[6px]` per UI standards

### 7. FinalCTASection — Footer still has em dashes
- Lines 68, 73, 130: `Três Lagoas — MS` still present, replace with comma
- CTA buttons stack on mobile but need `w-full` on small screens

### 8. TestimonialsSection — Gradient mask color mismatch
- Section bg is `bg-primary-foreground` but gradient masks use `from-muted` — fix to `from-[hsl(var(--primary-foreground))]` or match the actual bg

### 9. Touch targets
- ServiceAreaSection "Fale com a gente →" link is too small for touch; add min-height `h-10`
- Footer links could use slightly more padding

### 10. CommerceSection — Tags wrap well, no issues

## Files to edit
1. `src/components/ProblemsSection.tsx` — grid-cols-1, fix remaining em dash
2. `src/components/ServiceAreaSection.tsx` — padding, map height
3. `src/components/MissionSection.tsx` — image height
4. `src/components/HeroSection.tsx` — spacing
5. `src/components/DifferentialsSection.tsx` — gap-y
6. `src/components/Navbar.tsx` — border-radius
7. `src/components/FinalCTASection.tsx` — em dashes, button widths
8. `src/components/TestimonialsSection.tsx` — gradient mask colors
9. `src/components/FAQSection.tsx` — no changes needed (already responsive)

