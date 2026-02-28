

# Refatoração premium da MissionSection

## Arquivo: `src/components/MissionSection.tsx`

### Mudanças:

1. **Import**: Adicionar `import { Target, Award, ShieldCheck } from "lucide-react";`

2. **Array `features`**: Adicionar campo `icon` a cada item — `Target`, `Award`, `ShieldCheck`

3. **Badge** (linha 27-28): Trocar de `rounded-[6px] border border-border bg-muted/50` + `font-semibold text-primary tracking-wide` para `bg-blue-50 text-blue-700 font-bold tracking-wider rounded-full border-none` + `px-3 py-1`

4. **Parágrafo** (linha 38): Adicionar `mb-8` à classe do `<p>`

5. **Lista de features** (linhas 48-61): Remover borda esquerda. Cada item passa a ser:
   - Container: `flex items-start gap-4 mb-6` (sem `relative pl-6 before:...`)
   - Ícone em container: `w-12 h-12 flex-shrink-0 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center`
   - Título: `text-lg font-bold text-slate-800`
   - Descrição: `text-slate-500 leading-relaxed`

