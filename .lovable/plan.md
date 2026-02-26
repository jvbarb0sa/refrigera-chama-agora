

# Auditoria: Performance, Design System, Copy e Erros de UX

## 7. PERFORMANCE

### Font loading — Precisa ajuste
A fonte Inter é carregada via `@import url(...)` no CSS (linha 1 de `index.css`). Isso é render-blocking. O `display=swap` já está presente — bom. Mas o `@import` deve ser movido para `<link>` no `index.html` com `rel="preload"` para eliminar bloqueio de renderização.

### Lazy loading — Parcialmente OK
O iframe do Google Maps em `ServiceAreaSection` já tem `loading="lazy"`. As imagens são placeholders (`<div>` com `<span>`), então não há `<img>` para aplicar lazy loading ainda. Quando imagens reais entrarem, precisarão de `loading="lazy"`.

### CLS — Risco nos placeholders
Os placeholders de imagem no Hero (`aspect-[3/4]`) e MissionSection (`aspect-[4/3]`) usam `aspect-ratio` via Tailwind, o que reserva espaço. Isso é correto e previne CLS.

### LCP — Risco na fonte
O maior elemento visível é o H1 do Hero. O LCP depende da fonte Inter carregar. Mover o `@import` para `<link preload>` melhora o LCP.

### JS bundle — Pode reduzir
A landing usa `framer-motion` (pesado ~30kb gzip) E `gsap` (~25kb gzip). Ambos fazem essencialmente a mesma coisa (animações de fade-in). Recomendação: manter apenas GSAP (já usado em todas as seções via `useGsapFade`) e remover framer-motion dos componentes que o usam (Navbar, HeroSection, FinalCTASection, WhatsAppSticky). Isso reduz ~30kb do bundle.

**Porém**: remover framer-motion é uma refatoração significativa. Alternativa mínima: manter ambos mas adicionar o `<link preload>` da fonte.

### Mudanças propostas

**Arquivo: `index.html`**
- Adicionar `<link rel="preconnect" href="https://fonts.googleapis.com">` e `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>`
- Adicionar `<link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap">`
- Adicionar `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap">`

**Arquivo: `src/index.css`**
- Remover linha 1: `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');`

---

## 8. DESIGN SYSTEM (CONSISTÊNCIA)

### Paleta — OK
Já segue o padrão correto:
- Primária: French Blue (azul escuro — confiança)
- Secundária/Accent: Spicy Paprika (laranja — ação)
- Neutros: Onyx, Pale Slate, Alabaster Grey (cinza 100-900)

### Gradientes — OK
Nenhum gradiente exagerado encontrado no código atual.

### Fundos — OK
Alternância limpa entre `bg-background` (branco) e `bg-muted` (cinza claro). Nenhum fundo poluído.

### Cores excessivas — OK
Apenas 3 cores ativas (azul, laranja, cinza). Sem cores extras.

**Nenhuma mudança necessária.**

---

## 9. COPY TÉCNICA E DIRETA

### Avaliação atual

| Seção | Copy atual | Avaliação |
|---|---|---|
| Hero H1 | "Assistência técnica especializada em refrigeração comercial e residencial." | Descritivo mas corporativo. Pode ser mais direto. |
| Problems H2 | "Seu equipamento parou?" | Direto e bom. |
| Differentials H2 | "Por que escolher a Refrigeração Taboado" | OK — factual. |
| CTA H2 | "Precisa de assistência técnica especializada?" | OK — pergunta direta. |

### Mudança proposta
O H1 do Hero está corporativo demais. Wireframe pede copy mais direta.

**Sugestão**: Manter o H1 atual. O wireframe aprovado usa exatamente essa frase. A copy das outras seções já é direta ("Seu equipamento parou?", "Precisa de assistência técnica?"). Está alinhado.

**Nenhuma mudança de copy necessária** — já foi ajustada nas iterações anteriores.

---

## 10. ERROS GRAVES — CHECKLIST

| Erro | Status | Detalhe |
|---|---|---|
| Carrossel automático no hero | Não existe | Hero é estático, 2 colunas. |
| Texto centralizado demais | Não existe | Hero é alinhado à esquerda. CTA final é centralizado mas é intencional (bloco curto). |
| Menu com muitas opções | OK | 5 links + 1 CTA. Dentro do aceitável. |
| Página institucional longa demais | OK | 9 blocos confinados. Sem seções redundantes. |
| Sem CTA acima da dobra | OK | Hero tem 2 CTAs visíveis acima da dobra. |
| Sem número visível | Precisa ajuste | O número de telefone NÃO está visível no desktop. Só aparece no menu mobile e no footer (que está abaixo da dobra). |

### Correção: número visível no Navbar desktop
Adicionar o telefone como texto discreto ao lado do botão CTA no Navbar desktop.

**Arquivo: `src/components/Navbar.tsx`**
- Adicionar link de telefone (`<a href={phoneLink()}>`) antes do botão CTA no menu desktop
- Estilo: `text-sm text-muted-foreground` com ícone `Phone` pequeno

### Carrossel de depoimentos — autoplay
O `TestimonialsSection` tem `setInterval(() => emblaApi.scrollNext(), 5000)` — um autoplay de 5 segundos. Isso é um **carrossel automático**. O wireframe diz "sem carrossel automático no hero" (e o hero não tem), mas boas práticas de UX recomendam remover autoplay em qualquer carrossel. Recomendação: remover o `setInterval` e deixar a navegação manual.

**Arquivo: `src/components/TestimonialsSection.tsx`**
- Remover linhas 61-62: `const interval = setInterval(...)` e `return () => clearInterval(interval);`

---

## Resumo de mudanças

| Arquivo | Mudança |
|---|---|
| `index.html` | Adicionar `<link preconnect>` e `<link preload>` para Google Fonts |
| `src/index.css` | Remover `@import url(...)` da linha 1 |
| `src/components/Navbar.tsx` | Adicionar telefone visível no desktop |
| `src/components/TestimonialsSection.tsx` | Remover autoplay do carrossel |

4 arquivos, mudanças cirúrgicas. Sem refatoração de libraries.

