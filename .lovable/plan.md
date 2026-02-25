

# Redesign Completo — Refrigeração Taboado

## Problema atual
O site tem visual escuro com laranja/azul que parece template genérico de IA. Falta: fundo branco/claro, tipografia institucional, espaçamento correto, hierarquia visual profissional.

## Direção visual (baseada na referência RB Refrigeração)
- **Fundo predominante branco/off-white** — não dark mode
- **Hero escuro** (navy/charcoal) com foto de fundo, único bloco escuro
- **Seções claras** alternando branco puro e cinza muito leve (#F8F9FA)
- **Tipografia Inter** — geométrica, séria, sem decoração
- **Paleta 70/20/10**: 70% neutros claros, 20% French Blue (#1B3D89), 10% Spicy Paprika (#D36D3E) só em CTAs
- **Zero** glow, blur, glassmorphism, gradientes exagerados

## Mudanças técnicas

### 1. `src/index.css` — Paleta completa light-first
- Remover dark theme. Background `#FFFFFF`, foreground `#151617`
- Card background `#F8F9FA`, borders `#E2E4E9`
- Primary = French Blue `#1B3D89`, accent/CTA = Spicy Paprika `#D36D3E`
- Muted foreground = `#6B7280`
- Trocar fonte de Archivo/DM Sans para **Inter** (weight 400, 500, 600, 700)

### 2. `tailwind.config.ts`
- Font family: `Inter` para heading e body
- Container max-width `1200px`, padding adequado
- Radius padrão `12px` para cards

### 3. `src/components/Navbar.tsx` — Institucional
- Fundo branco, border-bottom sutil `#E2E4E9`
- Logo text: "Refrigeração Taboado" em navy semibold
- Links em cinza escuro, hover navy
- CTA "Fale conosco" em botão Spicy Paprika (sólido)
- Menu mobile: overlay full-screen branco, links centralizados

### 4. `src/components/HeroSection.tsx` — Hero escuro com foto
- Background navy escuro `#0F1B2D` com overlay sobre imagem placeholder
- Badge/chip: "TRÊS LAGOAS · MS" em uppercase tracking-wide
- H1 branco, semibold, 52px desktop / 36px mobile
- Headline: "Refrigeração e climatização com quem você pode confiar."
- Sub: texto cinza claro
- 2 botões: Primary laranja "Solicitar orçamento" + Secondary outline branco "Nossos serviços"
- Sem micro-provas no hero (mover para seção própria)

### 5. `src/components/ServicesSection.tsx` — Grid limpo
- Fundo branco
- Label uppercase "ESPECIALIDADES" em azul, tracking-wide
- H2: "Soluções técnicas para cada necessidade."
- Grid 3 colunas desktop, 1 mobile
- Cards: border `#E2E4E9`, padding 32px, radius 12px, hover border azul
- Ícone linha (lucide) em azul, título semibold, 1 linha descrição, link azul
- Sem card "grande" — grid uniforme e limpo
- Serviços: Refrigeração Comercial, Câmara Fria, Cervejeiras e Balcões, Geladeiras e Freezers, Lavadoras, Ar Condicionado

### 6. `src/components/TriageSection.tsx` — Ferramenta útil
- Fundo cinza leve `#F8F9FA`
- Label "DIAGNÓSTICO" uppercase
- H2: "Qual o problema do seu equipamento?"
- 3 botões/chips: "Não gela", "Não liga", "Faz barulho"
- Painel expandido: border left azul, texto causa + CTA WhatsApp
- Design limpo de ferramenta, não widget decorativo

### 7. `src/components/ProcessSection.tsx` — Stepper horizontal
- Fundo branco
- Label "COMO FUNCIONA"
- 4 steps em linha horizontal desktop, vertical mobile
- Número grande em azul claro, título em navy semibold, descrição curta
- Linha conectora sutil entre steps
- Steps: Contato → Diagnóstico → Orçamento → Reparo + Garantia

### 8. `src/components/TestimonialsSection.tsx` — Cards limpos
- Fundo cinza leve
- Label "DEPOIMENTOS"
- 3 cards brancos, border, aspas tipográficas, nome + contexto
- Sem estrelas exageradas — simples e sóbrio

### 9. `src/components/CommerceSection.tsx` — Seção destaque
- Fundo navy `#1B3D89`, texto branco
- H2: "Comércio não pode parar."
- Texto sobre urgência comercial
- CTA laranja "Solicitar prioridade comercial"
- Tags: Mercados, Conveniências, Sorveterias, Indústrias

### 10. `src/components/ServiceAreaSection.tsx`
- Fundo branco, simples
- Cidade + região + link Google Maps

### 11. `src/components/FAQSection.tsx`
- Fundo cinza leve
- Accordion limpo, sem bordas exageradas
- Trigger em navy semibold, content em cinza

### 12. `src/components/FinalCTASection.tsx` — CTA + Footer
- CTA: fundo navy escuro, H2 branco, 2 botões (laranja + outline)
- Footer: fundo `#0F1B2D`, texto cinza, links, contatos, copyright

### 13. `src/components/WhatsAppSticky.tsx`
- Ícone WhatsApp verde real `#25D366` (não laranja)
- Sombra sutil, sem glow

### 14. `src/components/ui/button.tsx`
- Variant default = Spicy Paprika sólido
- Variant secondary = French Blue outline
- Variant ghost = link azul
- Radius `10px`, height mínimo 48px no mobile

## Resultado esperado
Site institucional limpo, branco, com hero escuro dramático e seções bem espaçadas. Parece empresa real de serviços — como a referência RB Refrigeração mas adaptado para Refrigeração Taboado. Zero estética de IA.

