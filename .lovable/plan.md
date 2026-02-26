

# Remove all em dashes ("—") from visible text

## Files to edit

### 1. `src/components/ProblemsSection.tsx` (line 51)
- Remove the `<span className="text-[#BF5D39] mr-2">—</span>` bullet prefix from each problem item
- Replace with a simple `·` or remove entirely

### 2. `src/components/ServiceAreaSection.tsx` (line 29)
- Remove `<span className="text-[#BF5D39] mr-2">—</span>` bullet prefix from each tag

### 3. `src/components/HeroSection.tsx` (line 52)
- Change `garantia — em Três Lagoas e região.` → `garantia em Três Lagoas e região.`

### 4. `src/components/TestimonialsSection.tsx` (9 context strings)
- Replace `—` with `·` in all testimonial context fields (e.g. `"Mercado Central — Câmara fria"` → `"Mercado Central · Câmara fria"`)

### 5. `src/components/FinalCTASection.tsx` (3 occurrences)
- Line 68: `Três Lagoas — MS` → `Três Lagoas, MS`
- Line 73: `Três Lagoas — MS e região` → `Três Lagoas, MS e região`
- Line 130: `Três Lagoas — MS e região` → `Três Lagoas, MS e região`

### 6. End-to-end verification
- After edits, run a browser test scrolling through the full page to confirm no remaining "—" in visible text.

