

# Cards de Serviços — Contorno tátil minimalista

## Alteração

**ServicesSection.tsx** — Cards de serviço (classe `service-card`): substituir o estilo de borda atual por contorno ultrafino com `ring` e transição suave.

Trocar nas classes do card (não-dark):
- Remover: `border border-border hover:border-primary/30`
- Adicionar: `border-0 ring-1 ring-slate-200/50 hover:ring-slate-300 hover:shadow-sm transition-all duration-200`

Para o card dark ("Contratos para Empresas"):
- Remover: `border-[hsl(var(--onyx))]`
- Adicionar: `border-0 ring-1 ring-[hsl(var(--onyx))]`

Mantém o contraste do card B2B escuro intacto enquanto os cards claros ganham o aspecto tátil e limpo.

