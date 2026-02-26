

# FAQSection — Refined Redesign

## What changes

Update `src/components/FAQSection.tsx` to adopt the improved copy and styling from the inspiration while keeping existing Radix Accordion and design system tokens.

### Changes
1. **FAQ answers**: Update all 5 answer texts to the longer, more detailed versions from the inspiration
2. **Badge**: Switch from `Badge variant="outline"` to inline badge matching other sections — `rounded-[6px] border border-border bg-muted/50 px-3 py-1 text-sm font-semibold text-foreground`
3. **Heading**: Bump to `text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight`
4. **Left column layout**: Change from `gap-4` to `space-y-8` with `space-y-4` inner header group for better spacing
5. **Grid**: Change from `lg:grid-cols-2` to `lg:grid-cols-[1fr_1.2fr]` with `gap-12 lg:gap-16`
6. **Accordion trigger**: Change from `text-base font-semibold` to `text-lg font-bold` with `hover:text-primary hover:no-underline` transition
7. **CTA button**: Keep existing WhatsAppIcon + Button component but swap to `variant="default"` with `size="lg"` for more presence
8. **Animation**: Replace GSAP fade hook with framer-motion `whileInView` fade-in on the container

### Constraints
- Keep Radix `Accordion` component (no custom state management)
- Keep `whatsappLink` utility and `WhatsAppIcon`
- Keep `id="faq"` anchor
- `rounded-[6px]` on badge and buttons
- No `dangerouslySetInnerHTML`

### File
- `src/components/FAQSection.tsx` — rewrite

