

# Hero Redesign — Layout de duas colunas com card de técnico

Inspirado na referência: fundo claro, texto à esquerda, card com foto do técnico à direita.

## Mudanças em `src/components/HeroSection.tsx`

### Layout geral
- Remover fundo full-bleed escuro (imagem de fundo + gradient overlay)
- Fundo claro (`bg-[hsl(var(--alabaster-grey))]`)
- Grid de duas colunas no desktop: `lg:grid-cols-2`, empilhado no mobile
- Padding generoso: `py-20 md:py-28`

### Coluna esquerda (conteúdo)
1. **Social proof row no topo** (como na referência): fileira de estrelas douradas + "4,9 · Baseado em 50+ avaliações"
2. **Kicker badge**: manter "Três Lagoas · MS" mas com estilo claro (bg-muted, text-foreground, border-border)
3. **H1**: manter texto atual, cor escura (`text-[hsl(var(--onyx))]`), destaque Spicy Paprika
4. **Subtítulo**: texto muted (`text-muted-foreground`)
5. **CTAs**: manter botões atuais (Spicy Paprika primário + Alabaster secundário) mas com texto escuro no secundário
6. **Stats row no fundo**: dois blocos lado a lado como na referência — ícone + título bold + descrição (ex: "Suporte · Atendimento rápido local" e "Avaliação · 4,9 estrelas no Google")

### Coluna direita (card do técnico)
- Card com `rounded-[6px]` (padrão do projeto), overflow-hidden
- Imagem `hero-technician.png` preenchendo o card
- Overlay sutil no fundo do card com gradiente escuro (de baixo para cima)
- Badge de cargo sobre a imagem: "Técnico Especializado"
- Nome ou texto institucional: "Refrigeração · Climatização · Elétrica"
- Botão circular com seta (como na referência) usando cor accent

### Animações GSAP
- Manter a mesma timeline existente (kicker → h1 → sub → ctas → proof)
- Adicionar entrada do card com fade + slide da direita

### Arquivos
1. `src/components/HeroSection.tsx` — reescrita do layout

