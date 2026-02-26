

# Diferenciais — Redesign premium com mais impacto visual

## Problema atual
Cards planos e genéricos: ícone pequeno em caixa quadrada, título, texto. Sem hierarquia forte, sem elemento visual que chame atenção. Parece um template básico.

## Novo design

### Conceito: cards com borda lateral colorida + numeração grande decorativa
Cada card ganha uma **borda esquerda de 4px em cor accent** (laranja) e um **número grande decorativo** (`text-5xl font-bold text-primary/5`) posicionado no canto superior direito como elemento gráfico de fundo. Isso cria camadas visuais e diferencia dos cards genéricos.

### Estrutura de cada card
- `relative overflow-hidden rounded-2xl bg-card border-l-4 border-accent p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300`
- Número decorativo: `absolute top-4 right-6 text-6xl font-black text-primary/[0.04] select-none` ("01", "02", "03", "04")
- Ícone: container `h-14 w-14 rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5` com ícone `size={28} text-primary`
- Título: `text-xl font-bold mt-6` (maior e mais bold)
- Descrição: `text-[15px] text-muted-foreground mt-3 leading-relaxed`

### Header da seção — adicionar subtítulo
- Manter tag + H2
- Adicionar parágrafo: "Atendimento técnico com responsabilidade, transparência e foco no resultado."
- `text-muted-foreground max-w-lg mx-auto mt-4`

### Layout
- Grid `grid-cols-1 md:grid-cols-2 gap-6` (gap maior)
- Manter `bg-muted` e `py-20 md:py-28`

## Arquivo alterado
- `src/components/DifferentialsSection.tsx` — reescrita do layout dos cards e header

