

## Centralizar personagem horizontalmente na seção Sobre

**Arquivo:** `src/components/MissionSection.tsx` (linha 85)

**Problema:** O personagem está deslocado horizontalmente no recorte. A classe atual `object-[center_30%]` centraliza horizontalmente no centro geométrico da imagem, mas o personagem não está no centro geométrico da foto original.

**Alteração:**
- Trocar `object-[center_30%]` por `object-[40%_30%]` — empurra o foco horizontal ligeiramente para a esquerda (onde o personagem está na foto), mantendo o ajuste vertical de 30%.
- Se necessário, ajustar o valor horizontal (35%, 45%) após visualização.

