

# Especialidades — Reestruturação com hierarquia real

## Diagnóstico

O bloco atual já tem bento assimétrico (card dominante + médios + compactos), mas os problemas persistem:

- **Copy genérica**: "Instalação, manutenção e reparo", "Diagnóstico técnico real" — frases que qualquer concorrente usaria
- **Ícones decorativos**: Snowflake, Thermometer, Zap — não agregam, poluem
- **Badges sem função**: "Comercial" e "Residencial" como badges decorativas repetidas
- **Card dominante com fundo escuro** (`bg-foreground`): repete o problema que acabamos de corrigir no hero — parece SaaS
- **3 compactos iguais no fundo** (col-span-4 × 3): grid repetitivo, exatamente o anti-padrão pedido
- **Headline "O que a gente faz — e faz bem"**: informal demais para institucional

## Mudanças

### 1. Headline e subtítulo técnico

- Label: `ÁREAS DE ATUAÇÃO` (não "Especialidades")
- H2: `Refrigeração comercial, residencial e climatização.`
- Subtítulo: `Diagnóstico, reparo e manutenção com peças de qualidade e garantia de serviço.`

### 2. Card dominante — fundo claro, não escuro

- Trocar `bg-foreground` por `bg-muted` (cinza claro) com `text-foreground`
- Remover ícone Snowflake decorativo
- Manter badge `Comercial` mas com estilo discreto (outline)
- Copy reescrita: título "Refrigeração Comercial" + frase direta: "Cervejeiras, balcões, expositores, máquinas de gelo. Atendimento no mesmo dia para comércios de Três Lagoas."
- CTA: "Solicitar visita técnica" (mantém)

### 3. Cards médios — copy específica, sem ícones

- **Câmaras Frias**: remover ícone Thermometer. Copy: "Câmaras frigoríficas e de resfriamento. Instalação, reparo de compressor e recarga de gás." CTA: "Pedir diagnóstico →"
- **Geladeiras e Freezers**: remover ícone Snowflake. Copy: "Troca de compressor, termostato, vedação e recarga. Todas as marcas, peças com garantia." CTA: "Agendar reparo →"

### 4. Faixa horizontal — manter, refinar copy

- Manter layout e posição
- Copy: "Contrato de manutenção preventiva — visitas programadas para que seu equipamento nunca pare de surpresa."
- CTA: "Saber mais sobre contratos →"

### 5. Compactos — de 3 colunas iguais para 2 + 1 destaque

Quebrar o grid 4+4+4 para evitar repetição visual:
- **Ar Condicionado** e **Lavadoras**: lado a lado em `col-span-6` cada, ligeiramente maiores
- **Microondas**: removido como card individual — agrupar como menção em texto inline na descrição do card de Lavadoras ("Lavadoras, microondas e pequenos eletrodomésticos")
- Isso elimina a terceira coluna repetitiva e dá mais peso aos serviços que realmente importam

### 6. Remover todos os ícones lucide dos cards

Ícones decorativos (Snowflake, Thermometer, WashingMachine, Wind, Zap) não adicionam informação — removê-los. O único ícone que fica é o MessageCircle nos CTAs e o ShieldCheck na faixa de contrato (funcional, não decorativo).

### 7. CTAs todos diferentes (já estão, mas ajustar)

- Dominante: `Solicitar visita técnica`
- Câmaras: `Pedir diagnóstico →`
- Geladeiras: `Agendar reparo →`
- Contrato: `Saber mais sobre contratos →`
- Ar Condicionado: `Pedir orçamento →`
- Lavadoras: `Chamar técnico →`

## Estrutura final do grid

```text
┌─────────────────────┬──────────────┐
│                     │  Câmaras     │
│  REFRIGERAÇÃO       │  Frias       │
│  COMERCIAL          ├──────────────┤
│  (dominante, claro) │  Geladeiras  │
│                     │  e Freezers  │
├─────────────────────┴──────────────┤
│  🛡 Manutenção preventiva (faixa) │
├────────────────┬───────────────────┤
│  Ar            │  Lavadoras &      │
│  Condicionado  │  Eletrodomésticos │
└────────────────┴───────────────────┘
```

## Arquivo editado

| Arquivo | O que muda |
|---|---|
| `src/components/ServicesSection.tsx` | Headline, copy, grid layout, remoção de ícones, card dominante claro, compactos 2-col |

## O que NÃO muda
- GSAP fade com stagger (já funciona)
- Framer Motion whileHover (já funciona)
- Links WhatsApp com mensagens contextuais
- Posição da seção no Index.tsx

