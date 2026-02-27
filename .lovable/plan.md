

# Atualizar gradiente da Hero para Onyx com opacidade progressiva

## Mudança

### `src/components/HeroSection.tsx`

**Linha 68 — Gradient overlay:**
- De: `bg-gradient-to-r from-[#0b1622]/95 via-[#0b1622]/70 to-transparent`
- Para: `bg-gradient-to-r from-[#151617] via-[#151617]/80 to-transparent`

**Linha 70 — z-index do container de texto:**
- De: `z-10`
- Para: `z-20` (garante que o texto fique acima do overlay z-10)

### Arquivos
1. `src/components/HeroSection.tsx` — 2 edições (gradient + z-index)

