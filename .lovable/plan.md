

# Remover Triagem Rápida

## Mudança

Remover completamente a seção de Triagem Rápida do site. Dois arquivos afetados:

1. **`src/components/TriageSection.tsx`** — Deletar o arquivo
2. **`src/pages/Index.tsx`** — Remover o import e o `<TriageSection />` do JSX

Nenhuma outra seção ou componente depende do TriageSection.

