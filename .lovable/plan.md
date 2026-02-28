

## Igualar espaçamento entre os 3 botões no modal

**Arquivo:** `src/components/WhatsAppRouterModal.tsx`

- Mover o card "Catálogo de Produtos" para dentro do mesmo container `flex flex-col` dos outros dois botões, removendo-o de fora do `div` wrapper.
- Alterar o container de `flex flex-col gap-3 md:flex-row md:gap-4` para `flex flex-col gap-3 md:flex-col md:gap-3` (manter coluna no desktop também, já que agora são 3 itens e ficariam apertados em row).
- Ou alternativamente: manter o layout atual mas envolver os 3 cards num único container `flex flex-col gap-3`.

**Abordagem concreta:**
1. Remover o `div` wrapper que contém apenas Técnico e Loja
2. Colocar os 3 cards (Técnico, Loja, Catálogo) dentro de um único `div` com `flex flex-col gap-3`
3. Todos terão o mesmo `gap-3` entre si, garantindo espaçamento uniforme

