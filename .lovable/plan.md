

# Ajustes: Hero spacing, navbar opacidade e padding

## 1. Navbar — remover opacidade (`src/components/Navbar.tsx`)
- Linha 43: `bg-background/95 backdrop-blur-sm` → `bg-background` (fundo sólido, sem transparência)

## 2. Hero — reduzir gap entre texto e imagem (`src/components/HeroSection.tsx`)
- Linha 72: `gap-10 lg:gap-16` → `gap-9 lg:gap-10` (≈36-40px)

## 3. Hero — padding top e bottom de 40px (`src/components/HeroSection.tsx`)
- Linha 71: `py-16 md:py-24 lg:py-28` → `py-10 md:py-10 lg:py-10` (40px uniforme em todos os breakpoints)

