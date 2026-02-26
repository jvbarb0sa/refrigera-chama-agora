

# 5 correções: Navbar, Copy, Problemas, Prova Social, Footer

## 1. Navbar — Remover telefone do desktop

**Arquivo: `src/components/Navbar.tsx`**

Remover linhas 42-45 (link de telefone com ícone Phone no menu desktop). O botão CTA já leva para o WhatsApp — o número é redundante ali.

Manter o telefone no menu mobile (footer do menu) pois lá faz sentido como informação de contato.

---

## 2. Copy do Hero — Mais direta

**Arquivo: `src/components/HeroSection.tsx`**

Copy atual do H1:
> "Assistência técnica especializada em refrigeração comercial e residencial."

Trocar para algo mais direto e humano:
> "Seu equipamento parou? A gente resolve."

Com o subtexto em destaque:
> "Refrigeração comercial e residencial em Três Lagoas."

Subtítulo atual:
> "Instalação e manutenção de geladeiras, freezers, câmaras frias e sistemas inverter com atendimento profissional e diagnóstico preciso."

Trocar para:
> "Geladeiras, freezers, câmaras frias e ar inverter. Diagnóstico técnico, orçamento claro e garantia de serviço."

---

## 3. ProblemsSection — Evolução da UI

**Arquivo: `src/components/ProblemsSection.tsx`**

Problemas atuais da UI:
- Layout flat demais — lista simples com checks pequenos
- Sem hierarquia visual entre os itens
- Sem destaque visual, parece uma lista genérica
- CTA solto no final

Evolução proposta:
- Fundo `bg-muted` em vez de `bg-background` para criar contraste com seções adjacentes
- Cada problema vira um card compacto com borda e padding, em grid 2x3 (desktop) / 1 coluna (mobile)
- Check em círculo preenchido (`bg-primary/10 text-primary rounded-full p-1`) para dar peso visual
- Texto do problema em `font-medium` para legibilidade
- Seção full-width (remover `max-w-2xl`) com header centralizado
- CTA centralizado abaixo do grid

---

## 4. TestimonialsSection — Melhorar prova social

**Arquivo: `src/components/TestimonialsSection.tsx`**

Problemas atuais:
- Barra de credibilidade (4.9, 50+, Atendimento local) está visualmente fraca — parece texto solto
- Cards sem destaque visual suficiente
- Aspas decorativas (`"`) ficam genéricas
- Falta estrelas nos cards individuais

Evolução proposta:

**Barra de credibilidade:**
- Envolver em card com borda e background (`bg-card border rounded-xl p-6`)
- Separadores verticais entre os 3 blocos no desktop
- Ícone de estrela preenchido (`fill-amber-400 text-amber-400`) para cor mais viva
- Layout horizontal com `justify-between` no desktop

**Cards de depoimento:**
- Adicionar 5 estrelas preenchidas no topo de cada card (amarelo) para reforçar avaliação
- Remover aspas decorativas (genéricas)
- Aumentar padding e dar mais respiro
- Avatar com borda sutil para destaque

---

## 5. Footer — FCS-STUDIO em branco, sem "& Co."

**Arquivo: `src/components/FinalCTASection.tsx`**

Linha 87-98: Trocar:
- `text-primary-foreground/30` → `text-primary-foreground` no link FCS-STUDIO (branco puro)
- Remover `{" & Co."}` da linha 97
- Manter o restante do texto "Desenvolvido por" em `text-primary-foreground/30`

---

## Resumo de arquivos

| Arquivo | Mudança |
|---|---|
| `Navbar.tsx` | Remover telefone do menu desktop |
| `HeroSection.tsx` | Trocar copy do H1 e subtítulo |
| `ProblemsSection.tsx` | Redesign: cards em grid, checks em círculo, layout full-width |
| `TestimonialsSection.tsx` | Barra de credibilidade em card, estrelas nos depoimentos |
| `FinalCTASection.tsx` | FCS-STUDIO branco, remover "& Co." |

