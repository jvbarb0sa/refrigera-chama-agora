

# Remover formulários do site

## Mudanças

### 1. `src/components/HeroSection.tsx`
- Remover import do `HeroQuickForm`
- Substituir o `<HeroQuickForm />` na coluna direita por um bloco visual alternativo (imagem ou ilustração placeholder) para manter o layout 3/2 do grid

### 2. Deletar `src/components/HeroQuickForm.tsx`
- Arquivo inteiro removido

## Detalhe técnico

A coluna direita (`hero-image lg:col-span-2`) ficará com um placeholder visual (a imagem `hero-bg.jpg` ou o `placeholder.svg` já existente no projeto) para não quebrar o layout do grid. A animação GSAP de entrada (`opacity:0, x:30`) será mantida.

| Arquivo | Ação |
|---|---|
| `src/components/HeroQuickForm.tsx` | Deletar |
| `src/components/HeroSection.tsx` | Remover form, colocar imagem placeholder |

