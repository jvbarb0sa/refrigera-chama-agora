

## Centralizar personagem na imagem da seção Sobre

**Arquivo:** `src/components/MissionSection.tsx` (linha 85)

O `object-center` centraliza geometricamente, mas como a foto tem espaço extra acima da cabeça, o personagem acaba deslocado para baixo no recorte. Ajustar o `object-position` para focar mais no topo, trazendo o personagem ao centro visual do frame.

**Alteração:**
- Trocar `object-center` por `object-[center_30%]` — posiciona o ponto focal mais acima, centralizando o corpo do técnico no recorte visível.

Se necessário, ajustar o valor (25%, 35%) após visualização.

