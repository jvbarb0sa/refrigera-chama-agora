

# Adicionar logo SVG na Navbar e no Footer

## Arquivos a copiar
1. `user-uploads://logo-vagner.svg` → `src/assets/logo-vagner.svg` (versão colorida, para navbar/fundo claro)
2. `user-uploads://logo-vagner-branca.svg` → `src/assets/logo-vagner-branca.svg` (versão branca, para footer/fundo escuro)

## Mudanças

### 1. `src/components/Navbar.tsx`
- Importar `import logo from "@/assets/logo-vagner.svg"`
- Substituir o texto "Refrigeração Taboado" (linha 44-46) por `<img src={logo} alt="Refrigeração Taboado" className="h-10" />`

### 2. `src/components/FinalCTASection.tsx`
- Importar `import logoWhite from "@/assets/logo-vagner-branca.svg"`
- Substituir o texto "Refrigeração TABOADO" no footer (linha 58-60) por `<img src={logoWhite} alt="Refrigeração Taboado" className="h-12" />`

