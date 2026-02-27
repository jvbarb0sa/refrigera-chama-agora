

# Reduzir espaço entre texto e imagem no mobile

O gap de 30px já está aplicado, mas o problema real é o **stats row** dentro da coluna de texto — ele tem `mt-10` (40px) + `pt-8` (32px) = 72px de espaço extra, empurrando a imagem pra longe.

## Mudanças em `src/components/HeroSection.tsx`

1. **Stats row** (linha 165): reduzir margens no mobile
   - `mt-10` → `mt-6` (24px em vez de 40px)
   - `pt-8` → `pt-5` (20px em vez de 32px)

2. **CTAs** (linha ~127): reduzir margem superior no mobile
   - `mt-8` → `mt-6`

Isso vai compactar a coluna de texto e reduzir significativamente o espaço antes da imagem no mobile.

