

# Corrigir layout responsivo da Hero Section no mobile

## Arquivo: `src/components/HeroSection.tsx`

### 1. Container da section (linha 70-71)
- Reduzir padding top no mobile: `pt-20 md:pt-[120px]` → manter
- Container interno: `py-16 md:py-20` → `py-8 md:py-20`

### 2. Grid pai (linha 72)
- Trocar `grid gap-[30px] lg:grid-cols-2 lg:gap-10 items-center` por `flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-10 items-center`

### 3. Botões CTA (linhas 131-158)
- Wrapper externo (linha 131): `mt-6 flex flex-col gap-1 sm:gap-2` → `mt-8 flex flex-col gap-2`
- Botões internos (linha 133): manter `flex flex-col gap-3 sm:flex-row sm:gap-4` e adicionar `w-full`
- Cada Button: adicionar `w-full sm:w-auto`

### 4. Container da imagem (linhas 198-201)
- Trocar `aspect-[4/5] lg:aspect-[3/4] max-h-[560px] mx-auto lg:mx-0 w-full max-w-md lg:max-w-none`
- Por `aspect-video lg:aspect-[3/4] max-h-[560px] mx-auto lg:mx-0 w-full max-w-md lg:max-w-none mt-2 lg:mt-0`
- Trocar `rounded-[6px]` por `rounded-2xl lg:rounded-[6px]`

