

# Ajustar espaçamento no sub-footer

## Arquivo: `src/components/FinalCTASection.tsx`

### Sub-footer (~linha 121-137)
Adicionar `gap-[30px]` no container flex do sub-footer para criar 30px de espaçamento vertical entre o bloco copyright/CNPJ e o crédito "Desenvolvido por FCS-STUDIO & Co." no mobile. No desktop (sm:flex-row), manter o `justify-between` que já separa horizontalmente.

Trocar `gap-3` por `gap-[30px]` no wrapper principal do sub-footer.

