

# 1. Improve ProblemsSection + 2. Standardize card borders globally

## Current state

- **Diferenciais cards** (reference standard): `rounded-[6px] bg-white/5 border border-white/10 p-8 backdrop-blur-xl` — glassmorphism style on dark background
- **ServicesSection cards**: `border p-6 md:p-8` — no border-radius at all, plain `border-border`
- **ProblemsSection**: Simple text list with `border-t` separators — basic, not card-based

## Changes

### 1. `src/components/ProblemsSection.tsx` — Redesign

Transform the right-side problem items from plain text rows into a proper 2x3 bento grid of mini-cards matching the project's visual language:
- Each problem gets a card with `rounded-[6px] border border-border p-5 bg-card` 
- Add a subtle icon or index number watermark per card
- Add hover state: `hover:border-primary/30` transition
- Keep left column layout (badge, heading, description, WhatsApp CTA)
- Maintain the 40/60 grid split

### 2. `src/components/ServicesSection.tsx` — Add `rounded-[6px]` to cards

Add `rounded-[6px]` to each service card class to match the Diferenciais standard. The icon container already uses `rounded-full` which is fine — only the outer card needs the border-radius fix.

### Files changed
1. `src/components/ServicesSection.tsx` — add `rounded-[6px]` to card class
2. `src/components/ProblemsSection.tsx` — redesign problem items as styled cards with `rounded-[6px] border border-border`

