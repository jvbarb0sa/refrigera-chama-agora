

# Add StatsSection below Hero

## What
Redesign `StatsSection` to match the reference screenshots and insert it right after the Hero in `Index.tsx`.

## Data (adapted for this project)
- `+500` / **Atendimentos realizados** / em Três Lagoas e região
- `+8` / **Anos de experiência** / em refrigeração comercial
- `100%` / **Cobertura local** / em Três Lagoas e região
- `98%` / **Taxa de recomendação** / pelos nossos clientes

## Layout
- **Desktop**: 4 columns with vertical dividers (`divide-x`), light gray background (`bg-muted/30`), values in large primary-colored text (~`text-5xl`), label in `font-semibold text-foreground`, sublabel in `text-sm text-muted-foreground`
- **Mobile**: 2-column grid with horizontal divider between rows (matching the second screenshot), same typography hierarchy scaled down

## Changes

### 1. `src/components/StatsSection.tsx` — rewrite
- Add sublabel field to stats data
- Value: `text-4xl md:text-5xl font-semibold text-primary`
- Label: `text-sm font-semibold text-foreground mt-2`
- Sublabel: `text-xs text-muted-foreground mt-1`
- Section: `bg-muted/30 py-14 md:py-16 border-t border-b border-border`
- Desktop: `md:grid-cols-4 md:divide-x md:divide-border`
- Mobile: `grid-cols-2 gap-y-8` with a pseudo-divider between rows (border on items 3-4 via CSS or a separator element)

### 2. `src/pages/Index.tsx`
- Import `StatsSection`
- Place `<StatsSection />` immediately after `<HeroSection />`

