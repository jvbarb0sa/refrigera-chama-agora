

# Aumentar a barra do menu (Navbar) — responsivo

## Mudanças em `src/components/Navbar.tsx`

### Altura da barra
- Linha 44: `h-16` → `h-20` (de 64px para 80px)
- Logo (linha 46): manter `h-14` (já está grande)
- Links (linha 54): `text-sm` → `text-base` para melhor legibilidade
- Separador (linha 65): `h-5` → `h-6`
- Hamburger (linha 86): `size={24}` → `size={28}`
- CTA button (linha 68): `size="sm"` → `size="default"`

### Ajustes no menu mobile
- Linha 98: `top-16` → `top-20` (acompanhar nova altura)
- Linha 99: `calc(100dvh - 4rem)` → `calc(100dvh - 5rem)`

