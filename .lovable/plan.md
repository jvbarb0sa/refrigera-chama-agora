

# Correção agressiva do espaçamento mobile na Hero Section

## Arquivo: `src/components/HeroSection.tsx`

### 1. Section wrapper (linha 70)
Trocar `pt-20 md:pt-[120px]` por `pt-20 md:pt-[120px] h-auto min-h-fit md:min-h-[85vh]` para forçar altura automática no mobile.

### 2. Container interno (linha 71)
Reduzir padding mobile: trocar `py-16 md:py-20` por `py-8 md:py-20`.

### 3. Grid wrapper (linha 72)
Trocar `grid gap-[30px] lg:grid-cols-2 lg:gap-10 items-center` por `flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:gap-10 items-start lg:items-center justify-start`. Isso força `flex-col gap-8` no mobile (sem espaço extra) e grid no desktop.

### 4. Coluna de texto (linha 74)
Adicionar `flex-none` à div: trocar `max-w-xl` por `max-w-xl flex-none`.

### 5. Coluna da imagem (linha 198-201)
Adicionar `mt-0` explícito: a classe atual já não tem `mt-auto`, mas garantir com a estrutura flex-col + gap-8 que não haja espaço extra.

