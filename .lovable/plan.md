

# Redesign "Problemas que Resolvemos" — Diagnostic Grid

## Overview

Rewrite `ProblemsSection.tsx` to a two-column layout with a structured 2×3 diagnostic grid on the right. Kill all wrench icons, replace the vertical list with a clean grid of bordered items.

## File changed

### `src/components/ProblemsSection.tsx` — full rewrite

**Section wrapper**: White background (`bg-white`), `py-20`. Thin `border-t border-[#D7D7D9]` at top as separator. Remove `Wrench` import from lucide.

**Layout**: `grid grid-cols-1 lg:grid-cols-5 gap-12 items-start`.

**Left column** (`lg:col-span-2`):

- Label: `PROBLEMAS QUE RESOLVEMOS` — `text-[11px] font-medium uppercase tracking-[0.2em] text-[#118CD9]`, no icon
- Title: `Seu equipamento parou?` — `text-3xl font-bold text-[#163573] tracking-tight`
- Description: same text — `text-[15px] text-[#4B5563] leading-[1.7] max-w-md mt-3`
- Button: `mt-8`, rendered as `<a>` with `bg-[#BF5D39] text-white h-14 px-8 text-base font-semibold inline-flex items-center gap-2` — sharp corners (no border-radius). WhatsApp icon left. Links to existing whatsapp message.

**Right column** (`lg:col-span-3`):

- Grid: `grid grid-cols-2 gap-x-8 gap-y-0`
- Each of the 6 items:
  - `border-t-2 border-[#D7D7D9] pt-5 pb-5` top border
  - `hover:border-[#118CD9] transition-colors` on hover
  - Content: `<span className="text-[#BF5D39] mr-2">—</span>` followed by problem text in `text-[15px] font-medium text-[#1a1a1a]`
  - On hover: text color shifts to `hover:text-[#163573]`
  - No icons whatsoever

**Animation**: Keep `useGsapFade` with `.problem-item` selector and stagger `0.08`.

### Visual structure (desktop)

```text
┌──────────────────────────────────────────────────────────┐
│ ─────────────────── separator ───────────────────────── │
│                                                          │
│  PROBLEMAS QUE RESOLVEMOS   ─────────── │ ───────────── │
│                             — Geladeira  │ — Freezer     │
│  Seu equipamento parou?     ─────────── │ ───────────── │
│                             — Câmara fr. │ — Ar inverter │
│  Atendimento técnico...     ─────────── │ ───────────── │
│                             — Máq. lavar │ — Probl. elét │
│  [🟫 Agendar avaliação]                                  │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

## No other files changed

