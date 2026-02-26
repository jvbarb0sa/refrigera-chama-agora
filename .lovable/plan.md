

# Reduzir espaço entre Especialidades e Problemas

O espaço excessivo vem do padding combinado das duas seções: `py-16 md:py-24` no ServicesSection + `py-20 md:py-28` no ProblemsSection. Juntos, criam ~52px (mobile) / ~104px (desktop) de espaço vazio entre elas.

## Mudanças

### `src/components/ServicesSection.tsx` (linha 14)
- De: `py-16 md:py-24`
- Para: `py-16 md:py-20` — reduzir padding inferior

### `src/components/ProblemsSection.tsx` (linha 20)
- De: `py-20 md:py-28`
- Para: `py-12 md:py-16` — reduzir padding superior significativamente

Resultado: espaço entre seções cai de ~104px para ~72px no desktop e de ~72px para ~56px no mobile — ritmo mais compacto sem comprimir o conteúdo.

