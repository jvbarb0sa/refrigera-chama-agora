

# Redesign Diferenciais — Industrial Grid

## Overview

Complete visual overhaul of the Differentials section. Kill all current soft/SaaS styling. Replace with a dark, industrial grid layout inspired by Siemens/Carrier institutional pages.

## What gets removed

- `bg-muted` gray background
- `rounded-2xl bg-card border-l-4 border-accent shadow-md` card styling
- Gray pill icon containers (`bg-gradient-to-br from-primary/15`)
- Ghost watermark numbers (`text-6xl font-black text-primary/[0.04]`)
- Centered section title block
- Hover lift effects (`hover:shadow-xl hover:-translate-y-1`)

## New visual direction

Dark background section (`#0b1622` deep navy). Four open columns on desktop, 2x2 on tablet, stacked on mobile. No cards, no borders, no shadows. Only accent: thin 2px ice-blue top rule per column.

## File changed

### `src/components/DifferentialsSection.tsx` — full rewrite

**Section wrapper**: `bg-[#0b1622]` dark navy background, same vertical padding.

**Title block**: Left-aligned (not centered). "DIFERENCIAIS" rendered as a vertical rotated label on the far left using `writing-mode: vertical-rl` + `rotate-180`, white text, uppercase, tracking wide. Main heading "Por que escolher a Refrigeração Taboado" in white, left-aligned. Subtitle in `text-gray-400`.

Layout uses a flex row with the rotated label on the left and the content area on the right.

**Grid**: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4` — 4 columns desktop, 2x2 tablet, stack mobile.

**Each column item**:
```text
┌─────────────────────┐
│ ────────────────── (2px #4A9EE0 top border)
│
│ 01                  (font-light, opacity-40, text-white, text-sm)
│
│ [Icon]              (white, 24px, no container)
│
│ Transparência       (white, font-bold, text-lg)
│
│ Diagnóstico claro.. (text-[#9ca3af], text-sm, 2 lines)
│
└─────────────────────┘
```

- Top border: `border-t-2 border-[#4A9EE0]` with `pt-6` padding below
- Numeral: `text-sm font-light text-white/40`
- Icon: `size={24} className="text-white"` — raw, no background wrapper
- Title: `text-lg font-bold text-white`
- Description: `text-sm text-[#9ca3af] leading-relaxed line-clamp-2`
- Column padding: `py-8 px-2` — generous, separated by negative space only

**Animation**: Keep `useGsapFade` with `.diff-card` selector and stagger.

### Visual structure (desktop)

```text
  D                                                          
  I   Por que escolher a                                     
  F   Refrigeração Taboado                                   
  E   Atendimento técnico com responsabilidade...            
  R                                                          
  E   ──────── │ ──────── │ ──────── │ ────────              
  N   01       │ 02       │ 03       │ 04                    
  C   👁 Eye   │ 🛡 Shield│ 🏆 Award │ ⏰ Clock              
  I   Transp.  │ Segur.   │ Qualid.  │ Comprom.              
  A   desc...  │ desc...  │ desc...  │ desc...               
  I                                                          
  S                                                          
```

## No other files changed

All styling is self-contained with Tailwind utility classes and inline hex values. No tailwind.config or index.css changes needed.

