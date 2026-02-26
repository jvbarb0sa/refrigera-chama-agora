

# Redesign "Área de Atendimento" — Two-Column Layout with Map

## Overview

Rewrite `ServiceAreaSection.tsx` to a two-column layout: text content on the left (40%), Google Maps embed on the right (60%). Dark industrial styling with brand colors, no decorative elements.

## File changed

### `src/components/ServiceAreaSection.tsx` — full rewrite

**Section wrapper**: White background, `py-20` (80px). Thin `border-t border-[#D7D7D7]` at top as separator. Remove `MapPin` icon import.

**Layout**: `grid grid-cols-1 lg:grid-cols-5` (2 cols left = 40%, 3 cols right = 60%). `gap-0` — map bleeds to edge.

**Left column** (`lg:col-span-2`, vertically centered with `flex flex-col justify-center`, padding-right for breathing room):

- Label: `ÁREA DE ATENDIMENTO` — raw text, `text-[11px] font-medium uppercase tracking-[0.2em] text-[#118CD9]`, no icon
- Title: `Atendimento local` — `text-3xl font-bold text-[#163573] tracking-tight`
- Description: existing text — `text-[15px] text-[#4B5563] leading-[1.7]`
- 3 tag items below description (`mt-6`, `flex flex-col gap-2`):
  - Each: `<span className="text-[#BF5D39] mr-2">—</span> Três Lagoas · MS`
  - Same for `Comércio & Indústria` and `Residencial`
  - Text in `text-sm text-foreground`
- CTA link at bottom (`mt-8`): `<a>` styled as `text-[#118CD9] font-medium text-sm hover:underline` — "Fale com a gente →" linking to `whatsappLink("Olá, gostaria de informações sobre atendimento na minha região.")`

**Right column** (`lg:col-span-3`):

- Map iframe: `width="100%" height="100%"` with `min-h-[400px]`, `border border-[#D7D7D9]`, zero border-radius
- Container: `overflow-hidden` (no rounded corners)

**Animation**: Keep `useGsapFade` on container.

```text
┌──────────────────────────────────────────────────────────┐
│ ─────────────────── separator ───────────────────────── │
│                                                          │
│  ÁREA DE ATENDIMENTO        ┌──────────────────────────┐ │
│                             │                          │ │
│  Atendimento local          │     Google Maps          │ │
│                             │     (sharp rectangle)    │ │
│  Atuamos em Três Lagoas...  │                          │ │
│                             │                          │ │
│  — Três Lagoas · MS         │                          │ │
│  — Comércio & Indústria     │                          │ │
│  — Residencial              │                          │ │
│                             │                          │ │
│  Fale com a gente →         └──────────────────────────┘ │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

## No other files changed

