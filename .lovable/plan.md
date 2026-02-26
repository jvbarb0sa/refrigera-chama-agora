

# Replace all `font-bold` / `font-extrabold` / `font-black` with `font-semibold`

Save to design system memory: "Bold (font-bold, font-extrabold, font-black) is never used. All weighted text uses font-semibold (600) maximum."

## Files to change (13 total)

### 1. `src/components/HeroSection.tsx`
- Line 49: `font-bold` → `font-semibold` (h1)
- Line 124: `font-bold` → `font-semibold` (Plantão badge)
- Line 130: `font-bold` → `font-semibold` (h3 Urgência Técnica)
- Line 145: `font-bold` → `font-semibold` (phone number)

### 2. `src/components/Navbar.tsx`
- Line 44: `font-bold` → `font-semibold` (logo)

### 3. `src/components/FAQSection.tsx`
- Line 37: `font-bold` → `font-semibold` (h2)
- Line 63: `font-bold` → `font-semibold` (accordion triggers)

### 4. `src/components/MissionSection.tsx`
- Line 39: `font-bold` → `font-semibold` (h2)
- Line 62: `font-bold` → `font-semibold` (feature h3s)

### 5. `src/components/DifferentialsSection.tsx`
- Line 40: `font-bold` → `font-semibold` (h2)
- Line 71: `font-black` → `font-semibold` (watermark numbers)
- Line 80: `font-bold` → `font-semibold` (card number)
- h3 card titles (line ~83): `font-semibold` already — no change

### 6. `src/components/ServiceAreaSection.tsx`
- Line 29: `font-bold` → `font-semibold` (h2)

### 7. `src/components/ProblemsSection.tsx`
- Line 26: `font-bold` → `font-semibold` (h2)

### 8. `src/components/TestimonialsSection.tsx`
- Line 107: `font-bold` → `font-semibold` (4.9 stat)
- Line 113: `font-bold` → `font-semibold` (50+ stat)

### 9. `src/components/StatsSection.tsx`
- Line 22: `font-bold` → `font-semibold` (stat values)

### 10. `src/components/ProcessSection.tsx`
- Line 49: `font-bold` → `font-semibold` (step numbers)

### 11. `src/components/FinalCTASection.tsx`
- Line 22: `font-bold` → `font-semibold` (h2)
- Line 64: `font-extrabold` → `font-semibold` (footer logo)

### 12. `src/components/ui/testimonials-columns-1.tsx`
- Line 52: `font-bold` → `font-semibold` (avatar initials)

### 13. `src/pages/NotFound.tsx`
- Line 14: `font-bold` → `font-semibold` (404 heading)

### Design system memory update
Save: "Bold weights (font-bold, font-extrabold, font-black) are strictly prohibited. Maximum font weight is font-semibold (600) across all text elements."

