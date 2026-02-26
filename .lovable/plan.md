

# Redesign: Problemas que Resolvemos + Diferenciais

## Visão geral

Ambas as seções estão visualmente genéricas — cards com borda fina, ícones circulares básicos, grid plano. Vamos redesenhar completamente cada uma com identidade visual distinta, mais profundidade e hierarquia.

---

## 1. Problemas que Resolvemos — novo design

### Conceito
Abandonar o grid de cards com check verde. Usar layout de **duas colunas**: lado esquerdo com texto + CTA, lado direito com lista estilizada. Inspiração em seções "feature list" de sites premium.

### Estrutura
- Layout `grid lg:grid-cols-2 items-center gap-12`
- **Coluna esquerda**: tag, H2, parágrafo descritivo, botão CTA WhatsApp
- **Coluna direita**: lista vertical dos 6 problemas, cada um como uma linha com:
  - Ícone de bolt/wrench (`Wrench` do Lucide) em `text-accent` (laranja)
  - Texto do problema em `text-[15px] font-medium`
  - Separador `border-b border-border/50` entre itens (exceto último)
  - Padding vertical `py-4` em cada item
  - Hover sutil: `hover:bg-muted/50 transition-colors rounded-lg px-3 -mx-3`

### Visual
- Fundo: `bg-background` (branco — contraste com seção anterior/posterior)
- Sem cards, sem bordas externas, sem ícones circulares
- Estilo "lista técnica" — direto, profissional

---

## 2. Diferenciais — novo design

### Conceito
Abandonar o grid de 4 colunas com numeração `01-04`. Usar **cards grandes com ícone** em grid 2x2, com fundo `bg-muted` na seção e cards brancos elevados.

### Dados atualizados (com ícones Lucide)
- **Transparência** — `Eye` — "Diagnóstico claro e explicação técnica antes de qualquer serviço."
- **Segurança** — `ShieldCheck` — "Procedimentos adequados e responsabilidade técnica em cada etapa."
- **Qualidade** — `Award` — "Peças adequadas e manutenção executada com eficiência."
- **Compromisso** — `Clock` — "Pontualidade, respeito ao prazo e acompanhamento pós-serviço."

### Estrutura de cada card
- `rounded-2xl bg-card shadow-md hover:shadow-lg transition-shadow p-8`
- Ícone no topo: `w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center` com ícone `size={24} text-primary`
- Título: `text-lg font-semibold mt-5`
- Descrição: `text-sm text-muted-foreground mt-2 leading-relaxed`

### Layout
- Grid `grid-cols-1 md:grid-cols-2 gap-5`
- Seção com `bg-muted py-20 md:py-28`

---

## Arquivos alterados
1. `src/components/ProblemsSection.tsx` — reescrita completa (layout 2 colunas + lista)
2. `src/components/DifferentialsSection.tsx` — reescrita completa (cards 2x2 com ícones)

