

# Reduzir espaço entre botão e imagem para 50px no mobile

## Arquivo: `src/components/HeroSection.tsx`

### 1. Esconder stats row no mobile (linha 165)
Trocar `mt-6 flex flex-col sm:flex-row` por `mt-6 hidden sm:flex sm:flex-row` para que o bloco Suporte Local / 4,9 Estrelas apareça apenas no desktop. Isso elimina o espaço extra que ele ocupa no mobile.

### 2. Ajustar grid gap (linha 72)
Trocar `gap-[30px]` por `gap-[50px]` para que o espaço entre a coluna de texto e a imagem no mobile seja exatamente 50px. Manter `lg:gap-10` no desktop.

