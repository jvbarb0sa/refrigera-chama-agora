

## Aumentar imagem no mobile na seção Sobre

**Arquivo:** `src/components/MissionSection.tsx` (linha 80)

- Alterar `aspect-square` para `aspect-[3/4]` no mobile, mantendo `md:aspect-[4/3]` no desktop. Isso deixará a imagem mais alta/maior em telas pequenas.

Classe atual: `w-full aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-full`
Nova classe: `w-full aspect-[3/4] md:aspect-[4/3] lg:aspect-auto lg:h-full`

