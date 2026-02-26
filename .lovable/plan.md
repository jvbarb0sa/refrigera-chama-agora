

# Especialidades — Grid técnico limpo e institucional

## Diagnóstico

A seção atual ainda tem problemas:
- Bento assimétrico com card dominante grande + cards médios + faixa — visual "criativo" demais para empresa técnica
- Badges "Comercial"/"Residencial" decorativas
- Hover com `y: -2` — efeito SaaS
- Faixa de contrato com ícone ShieldCheck e fundo colorido — destaque visual desnecessário
- 6 cards com categorias fragmentadas (Câmaras Frias separado de Comercial, Ar Condicionado como item solo)

## Mudança

Substituir todo o conteúdo por um grid simples e uniforme de 4 cards, sem hierarquia visual forçada. Institucional, limpo, sério.

### Header
- Label: `ESPECIALIDADES TÉCNICAS`
- H2: `Especialidades técnicas`
- Subtítulo: `Atendimento completo em refrigeração e elétrica para comércios e residências.`

### Grid: 2×2, todos iguais
4 cards com `md:grid-cols-2`, mesmo tamanho, mesmo estilo. Sem card dominante, sem faixa especial.

Cada card:
- Fundo `bg-card`, borda `border-border`, `rounded-xl`, padding uniforme
- Número sequencial discreto (`01`, `02`, `03`, `04`) em `text-muted-foreground/40`
- Título em `font-semibold`
- Descrição em `text-muted-foreground`
- Sem badge, sem ícone decorativo, sem hover exagerado
- Sem CTA individual (o CTA geral da página já cobre)

**Cards:**

1. **Refrigeração Comercial** — Câmaras frias, balcões expositores, sistemas para mercados e conveniências.
2. **Refrigeração Residencial** — Geladeiras, freezers e equipamentos inverter.
3. **Máquinas e Eletrodomésticos** — Lavadoras, micro-ondas e máquinas de gelo.
4. **Sistemas Especiais** — Sistemas em amônia, freon, painéis elétricos e automação.

### Removidos
- Todos os `whileHover` do Framer Motion
- Badges (Comercial/Residencial)
- Faixa de contrato de manutenção preventiva
- Cards de Câmaras Frias, Ar Condicionado (consolidados)
- Ícones MessageCircle e ShieldCheck
- Import de Badge, Button, MessageCircle, ShieldCheck, motion
- Botões e links CTA individuais por card

### Mantido
- GSAP fade com stagger (`.bento-card` class nos cards)
- `id="servicos"` na section
- Posição no Index.tsx

```text
┌──────────────────┬──────────────────┐
│  01               │  02               │
│  Refrigeração    │  Refrigeração    │
│  Comercial       │  Residencial     │
├──────────────────┼──────────────────┤
│  03               │  04               │
│  Máquinas e      │  Sistemas        │
│  Eletrodomésticos│  Especiais       │
└──────────────────┴──────────────────┘
```

## Arquivo editado

| Arquivo | O que muda |
|---|---|
| `src/components/ServicesSection.tsx` | Reescrita completa: grid 2×2 uniforme, 4 cards, sem hierarquia visual, sem hover, sem CTAs individuais |

