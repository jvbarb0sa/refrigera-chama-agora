

# Adicionar imagem do técnico na Hero

## Mudanças

### 1. Copiar imagem
- `user-uploads://Photorealistic_editorial_photo_brazilian_male_tech_delpmaspu-2.png` → `src/assets/hero-technician.png`

### 2. `src/components/HeroSection.tsx`
- Importar a imagem: `import heroTechnician from "@/assets/hero-technician.png"`
- Substituir o `<img src="/placeholder.svg" ...>` pela nova imagem
- Aplicar `object-cover object-right` para alinhar o técnico à direita
- Definir altura fixa `h-[420px] md:h-[500px]` para controlar o crop
- Manter `rounded-2xl shadow-md overflow-hidden`

