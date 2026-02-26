

# MissionSection — Clean Institutional Redesign

## What changes

Simplify `src/components/MissionSection.tsx` from the current glassmorphic/aura style to a cleaner, institutional shadcn-inspired design matching the provided reference.

### Changes
1. **Remove decorative elements**: Background glows, floating trust card, decorative accent square, animated left-border indicators, glassmorphic card backgrounds
2. **Badge**: Replace glassmorphic pill with a clean shadcn-style badge — `rounded-[6px] border border-primary/20 bg-primary/10 text-primary`, no icon, just "SOBRE A EMPRESA" text
3. **Heading**: Keep gradient text but simplify — `text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight`, no `font-extrabold`
4. **Features list**: Replace interactive hover cards with simple left-border items — `pl-6` with a `before:` pseudo-element 3px french-blue left bar, no icons, no hover effects
5. **Image**: Replace thick-bordered absolute-positioned image with a clean `aspect-square md:aspect-[4/3]` container, simple `border border-[hsl(var(--pale-slate))]`, `rounded-[6px]`, subtle hover scale `hover:scale-[1.02]`
6. **Animation**: Keep framer-motion but simplify — just fade-in on left column, no stagger on individual items, simple opacity transition on image
7. **Layout**: `gap-12 lg:gap-16` instead of `gap-16 lg:gap-24`

### File
- `src/components/MissionSection.tsx` — rewrite

