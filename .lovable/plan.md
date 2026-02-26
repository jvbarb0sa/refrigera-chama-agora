

# MissionSection — Inspired Redesign

## What changes

Redesign `src/components/MissionSection.tsx` adopting the provided "Aura" inspiration while respecting existing design system constraints.

### Key elements to adopt
1. **Layout**: Keep 2-column grid but increase gap (`gap-16 lg:gap-24`) and add `items-center` alignment
2. **Eyebrow badge**: Replace plain text label with glassmorphic pill badge (Wrench icon + "Sobre a Empresa" text, `bg-white/40 border border-[hsl(var(--pale-slate))]`)
3. **Heading**: Upgrade to `text-4xl sm:text-5xl font-extrabold` with gradient text on "responsabilidade técnica" (`from-[hsl(var(--french-blue))] to-foreground`)
4. **Feature list**: Replace simple border-l items with interactive hover cards — each card has icon (Target, Users, Clock), animated left-border indicator on hover (terracotta), icon color transition, and glassmorphic background (`bg-white/40 backdrop-blur-md`)
5. **Right column image**: Add rounded container with gradient overlay (`from-onyx/60 via-transparent to-transparent`), thick white border (`border-[8px] border-white/40`), and hover zoom effect
6. **Floating trust card**: Glassmorphic dark card positioned bottom-left of image with ShieldCheck icon in terracotta circle, "Autoridade Técnica" + "Serviço Garantido" text
7. **Decorative accent**: Small rotated glassmorphic square top-right of image
8. **Animation**: Replace GSAP hook with framer-motion `whileInView` stagger for left column items and blur-reveal for image
9. **Subtle background glows**: French-blue and terracotta blurred circles behind the grid

### Constraints maintained
- `rounded-[6px]` for buttons/interactive cards; image container uses sharp edges per industrial style (adapted from `rounded-3xl` in inspiration to `rounded-[6px]`)
- No `dangerouslySetInnerHTML` or noise textures
- Use existing HSL CSS variables (`--onyx`, `--french-blue`, `--spicy-paprika`, `--pale-slate`)
- Keep `id="sobre"` for nav anchor
- Mobile-first: single column, trust card repositioned on small screens

### File
- `src/components/MissionSection.tsx` — full rewrite

