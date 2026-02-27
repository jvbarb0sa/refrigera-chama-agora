

# Padronizar botões WhatsApp com verde #42ae5d

O botão "Chamar no WhatsApp" na seção de atendimento emergencial usa `bg-[#42ae5d]`. O objetivo é aplicar essa mesma cor verde em todos os botões de WhatsApp do site, substituindo o degradê laranja.

## Alterações

1. **HeroSection.tsx (linha 137)** — Botão "Falar com técnico agora": trocar `bg-gradient-to-r from-[#FF8B52] to-[#EB7543]` por `bg-[#42ae5d]`, hover para `hover:bg-[#3a9b52]`.

2. **HeroSection.tsx (linha 231)** — Botão circular com seta no card: trocar `bg-gradient-to-r from-[#FF8B52] to-[#EB7543]` por `bg-[#42ae5d]`.

3. **FAQSection.tsx (linha 43)** — Botão "Fale conosco!": trocar `bg-gradient-to-r from-[#FF8B52] to-[#EB7543]` por `bg-[#42ae5d]`.

4. **ServiceAreaSection.tsx (linha 57)** — Botão "Fale com a gente": trocar `bg-[#eb7542]` por `bg-[#42ae5d]`.

