

# TopBar — Fundo azul claro

## Mudança

Arquivo: `src/components/TopBar.tsx`

- Trocar `bg-primary/5` por `bg-primary` (French Blue sólido)
- Texto: `text-primary-foreground` (branco) em vez de `text-muted-foreground`
- Separadores: `text-primary-foreground/30` em vez de `text-border`
- Ícones: herdam a cor branca do texto
- Remover `border-b border-border` (desnecessário com fundo sólido)

Resultado: barra superior com fundo azul French Blue (#1B3D89) e texto branco, limpa e institucional.

