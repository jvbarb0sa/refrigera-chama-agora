

# Aplicar degradê laranja nos botões

Degradê: `#FF8B52` (0%) → `#EB7543` (100%), da esquerda para a direita.

## Botões afetados

1. **HeroSection.tsx (linha 137)** — botão "Falar com técnico agora": trocar `bg-[#EB7443]` por `bg-gradient-to-r from-[#FF8B52] to-[#EB7543]`, ajustar hover para `hover:brightness-90` (remover `hover:bg-[#EB7443]/90`).

2. **HeroSection.tsx (linha 231)** — botão circular com seta no card do técnico: trocar `bg-[hsl(var(--spicy-paprika))]` por `bg-gradient-to-r from-[#FF8B52] to-[#EB7543]`.

3. **FAQSection.tsx (linha 43)** — botão "Fale conosco!": trocar `bg-[#eb7542]` por `bg-gradient-to-r from-[#FF8B52] to-[#EB7543]`.

