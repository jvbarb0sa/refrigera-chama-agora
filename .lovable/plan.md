

# Standardize All Section Badges to Hero Pattern

## Reference (Hero badge)
`inline-flex items-center gap-2 px-3 py-1.5 rounded-[6px] border border-border bg-muted/50` with inner text `text-xs font-semibold text-primary tracking-wide uppercase`. No icon needed for other sections (icon is Hero-specific).

## Changes per file

### 1. `src/components/ServicesSection.tsx`
Replace plain `<span>` eyebrow with badge div: `rounded-[6px] border border-border bg-muted/50 px-3 py-1.5`, text as `text-xs font-semibold text-primary tracking-wide uppercase`

### 2. `src/components/ProblemsSection.tsx`
Replace plain `<span>` eyebrow with same badge pattern, remove hardcoded `text-[#118CD9]`

### 3. `src/components/DifferentialsSection.tsx`
Dark variant — keep dark styling but standardize tracking: change `tracking-widest` to `tracking-wide`

### 4. `src/components/MissionSection.tsx`
Change `border-primary/20 bg-primary/10` to `border-border bg-muted/50`, add `tracking-wide uppercase`, change `py-0.5` to `py-1.5`

### 5. `src/components/TestimonialsSection.tsx`
Replace plain `<span>` eyebrow with badge div pattern

### 6. `src/components/ServiceAreaSection.tsx`
Change `border-primary/20 bg-primary/5` to `border-border bg-muted/50`, change `py-0.5` to `py-1.5`

### 7. `src/components/FAQSection.tsx`
Change `text-sm text-foreground` to `text-xs text-primary tracking-wide uppercase`, change `py-1` to `py-1.5`

### 8. `src/components/CommerceSection.tsx`
Replace plain `<span>` eyebrow with badge div pattern (using primary-foreground colors since it's on dark bg)

## Files touched (8)
All section components listed above — single-line badge replacement each.

