

# Seção de Problemas — Limpeza visual com traço vertical

## Alteração

**ProblemsSection.tsx (linhas 45-61)** — Cada card de problema:

1. **Remover** o bloco de watermark (linhas 50-53) — os números grandes de fundo `01`, `02`, etc.
2. **Remover** o `<span>` com o número mono pequeno (linha 56)
3. **Adicionar** um traço vertical decorativo à esquerda do texto: `div` com classes `w-1 h-6 rounded-full bg-primary`
4. **Reestruturar** o conteúdo interno para layout flex horizontal com o traço + label
5. **Aplicar** o mesmo padrão `ring-1 ring-slate-200/50` dos cards de serviço para consistência, substituindo `border border-border hover:border-primary/30`

### Resultado visual
Cada card fica com um traço azul vertical à esquerda e apenas o texto do problema, sem números — alinhamento vertical limpo (continuidade Gestalt).

