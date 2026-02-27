

# Redesign do sub-footer em linha horizontal (desktop)

## Arquivo: `src/components/FinalCTASection.tsx`

### Sub-footer (linhas ~119-137)
Trocar o layout atual `flex-col items-center` por `flex-col sm:flex-row justify-between items-center`:

- **Esquerda**: Copyright e CNPJ na mesma linha, separados por espaço (usar `gap-6` ou similar)
- **Direita**: "Desenvolvido por FCS-STUDIO & Co."
- **Mobile**: Empilha verticalmente com `text-center`
- Remover `mt-4` extra do crédito do desenvolvedor
- Manter dados corretos: "© 2026 Refrigeração Taboado.", "CNPJ: 64.699.140/0001-82"

