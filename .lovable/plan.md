

# Refatorar StatsSection — responsividade minimalista

## Alterações em `src/components/StatsSection.tsx`

### 1. Dados — simplificar labels

| value | label (curto) | sublabel (desktop only) |
|---|---|---|
| +400 | Atendimentos | em Três Lagoas e região |
| +8 | Experiência | em refrigeração comercial |
| 100% | Cobertura | em Três Lagoas e região |
| 98% | Recomendação | pelos nossos clientes |

### 2. Números
- Mobile: `text-4xl` → Desktop: `md:text-6xl`
- Adicionar `tracking-tight`
- Manter `font-semibold text-primary`

### 3. Labels
- `font-medium text-slate-800` (substituir `text-sm font-semibold text-foreground`)

### 4. Sublabels
- Adicionar `hidden md:block` para ocultar no mobile

### 5. Grid
- `grid-cols-2 gap-8 md:grid-cols-4 md:gap-0`
- Manter `md:divide-x md:divide-border`
- Remover border-t condicional no mobile (simplificar)

### Arquivo editado
- `src/components/StatsSection.tsx`

