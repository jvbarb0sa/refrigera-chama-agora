

# Refatorar sub-footer — layout centralizado minimalista

## Arquivo: `src/components/FinalCTASection.tsx`

### Sub-footer (linhas 117-135)
Substituir o layout atual (flex row com 3 colunas) por um layout centralizado e empilhado, conforme a imagem de referência:

- Container: `mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col items-center gap-3 text-center`
- Linha 1: `© 2026 Refrigeração Taboado.` (text-sm text-slate-400)
- Linha 2: `CNPJ: XX.XXX.XXX/XXXX-XX` (text-sm text-slate-400) — preciso que informe o CNPJ correto da empresa
- Linha 3 (com espaçamento extra `mt-4`): `Desenvolvido por **FCS-STUDIO & Co.**` com link para WhatsApp, texto do studio em `text-primary-foreground font-semibold` (sem underline)

### Nota
Preciso do CNPJ da empresa para inserir. Se preferir, posso deixar um placeholder editável.

