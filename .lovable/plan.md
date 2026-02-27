

# Respiro externo do modal no mobile

## Arquivo: `src/components/ui/dialog.tsx`

### 1. DialogOverlay (linha 22)
- Adicionar `p-4` ao overlay para criar margem de segurança no mobile

### 2. DialogContent (linhas 36-41)
- Trocar posicionamento `fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]` por um layout flex centralizado dentro do overlay
- Abordagem alternativa mais limpa: manter `fixed` mas adicionar margem interna via o overlay como wrapper

**Abordagem escolhida**: Como o Radix Dialog renderiza Overlay e Content como siblings, a melhor solução é adicionar padding diretamente no Content via `max-w-sm md:max-w-md mx-4 md:mx-auto` e trocar `rounded-2xl` por `rounded-3xl`.

### Alterações concretas:

**Linha 39** — classes do DialogContent:
- Trocar `max-w-md` por `max-w-sm md:max-w-md`
- Adicionar `mx-4 md:mx-auto` (respiro lateral no mobile)
- Trocar `rounded-2xl` por `rounded-3xl`

