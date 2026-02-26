

# Depoimentos — Redesign com colunas verticais animadas

## Visao geral

Substituir o marquee horizontal atual por **3 colunas verticais** com scroll infinito (estilo do componente fornecido), usando Framer Motion. Manter o header e a barra de credibilidade existentes, apenas trocar a area dos depoimentos.

## Dependencia

- `motion` (Framer Motion v11+) — ja temos `framer-motion` instalado, mas o componente importa de `motion/react`. Precisamos instalar o pacote `motion` ou ajustar o import para `framer-motion`.
  - Decisao: usar `framer-motion` que ja esta instalado, ajustando os imports.

## Arquivos

### 1. `src/components/ui/testimonials-columns-1.tsx` (novo)
Componente `TestimonialsColumn` adaptado:
- Import de `motion` de `framer-motion` (nao `motion/react`)
- Recebe `testimonials` como array de `{ text, name, role, initials }`
- Sem imagens (manter iniciais como avatar, consistente com o design atual)
- Card com 5 estrelas, quote icon, borda inferior com avatar de iniciais
- Estilo dos cards: `rounded-2xl bg-card p-7 shadow-md` (reutilizar visual atual)
- Animacao vertical infinita com `motion.div` e `repeat: Infinity`

### 2. `src/components/TestimonialsSection.tsx` (reescrita)
- Manter header (tag, H2, paragrafo) e barra de credibilidade iguais
- Substituir `MarqueeRow` por 3 `TestimonialsColumn` lado a lado
- Dividir os 12 depoimentos existentes em 3 grupos de 4
- Layout: `flex justify-center max-h-[600px] overflow-hidden` com mascara gradiente top/bottom
- Coluna 1: duracao 15s, Coluna 2: 20s, Coluna 3: 17s (velocidades diferentes)
- 3a coluna escondida em mobile (`hidden md:block`)
- Remover imports de marquee CSS nao mais necessarios

### Dados dos depoimentos
Mesclar `row1` e `row2` em um unico array de 12 itens, dividido em 3 colunas de 4.

### Estrutura do card (dentro da coluna)
```text
+---------------------------+
| ★★★★★              ❝     |
|                           |
| "Texto do depoimento..." |
|                           |
| ─────────────────────     |
| [MC]  Marcos              |
|       Mercado — Câmara    |
+---------------------------+
```

### Animacao vertical
- Cada coluna duplica seus cards (2x) e anima `translateY` de `0` a `-50%` infinitamente
- Framer Motion `animate={{ y: "-50%" }}` com `transition={{ duration, repeat: Infinity, ease: "linear" }}`
- Pausa no hover via CSS `hover:` (animation-play-state) ou onHoverStart/End

## Nenhuma mudanca em outros arquivos

