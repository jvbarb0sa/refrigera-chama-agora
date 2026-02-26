

# Redesign do Footer — Estilo referência

Baseado na imagem de referência, o footer será reestruturado em 3 blocos:

## Layout

```text
┌─────────────────────────────────────────────────────────────────────┐
│  CTA BANNER (bg escuro, destaque)                                   │
│  "Equipamento parado? Não espere até amanhã."                       │
│  Sub: "Cada hora sem refrigeração é perda..."                       │
│                                    [Ligar agora] [Chamar no WhatsApp]│
├─────────────────────────────────────────────────────────────────────┤
│  FOOTER PRINCIPAL (bg escuro, mais claro que CTA)                   │
│                                                                     │
│  Logo + Nome            │ SERVIÇOS           │ EMPRESA              │
│  "Refrigeração"         │ Refrig. Comercial  │ Diferenciais         │
│  "TABOADO"              │ Câmaras Frias      │ Depoimentos          │
│  Descrição curta        │ Climatização       │ Perguntas Frequentes │
│                         │ Manut. Preventiva  │ Orçamento Grátis     │
│  📍 Endereço            │ Urgência 24h       │                      │
│  📞 Telefone            │                    │                      │
│  ✉ Email                │                    │                      │
│  🕐 Horários            │                    │                      │
├─────────────────────────────────────────────────────────────────────┤
│  © 2026 Refrigeração Taboado. Todos os direitos reservados.         │
│                                    Três Lagoas — MS e região        │
│  Desenvolvido por FCS-STUDIO                                        │
└─────────────────────────────────────────────────────────────────────┘
```

## Mudanças em `src/components/FinalCTASection.tsx`

### CTA Banner (seção `#contato`)
- H2: **"Equipamento parado? Não espere até amanhã."**
- Sub: **"Cada hora sem refrigeração é perda de produto e cliente. Fale agora."**
- CTA1 (outline): "Ligar agora" com ícone `Phone` → `phoneLink()`
- CTA2 (strong/laranja): "Chamar no WhatsApp" com `WhatsAppIcon` → abre modal ou whatsappLink
- Layout: texto à esquerda, botões à direita (desktop); empilhado (mobile)
- Background: `bg-foreground` (escuro)

### Footer principal
- Grid de 3 colunas (desktop), 1 coluna (mobile)
- **Coluna 1 — Identidade:**
  - Nome "Refrigeração TABOADO" (TABOADO em accent/laranja)
  - Descrição: "Especialistas em refrigeração comercial, câmaras frias e climatização há mais de 12 anos em Três Lagoas — MS. Técnicos certificados, garantia documentada."
  - Contatos com ícones: MapPin, Phone, Mail, Clock
- **Coluna 2 — SERVIÇOS** (título em accent/laranja):
  - Links âncora: Refrigeração Comercial, Câmaras Frias, Climatização, Manutenção Preventiva, Urgência 24h → `#servicos`
- **Coluna 3 — EMPRESA** (título em accent/laranja):
  - Links âncora: Diferenciais → `#diferenciais`, Depoimentos → `#depoimentos`, Perguntas Frequentes → `#faq`, Orçamento Grátis → `#contato`

### Rodapé inferior
- Separador sutil (`border-t border-primary-foreground/10`)
- Esquerda: © 2026 + direitos reservados
- Direita: "Três Lagoas — MS e região"
- Centro abaixo: "Desenvolvido por FCS-STUDIO" (mantido)

### Detalhes técnicos
- Arquivo único: `src/components/FinalCTASection.tsx`
- Textos em `text-primary-foreground/50` (muted) e `text-primary-foreground` (destaque)
- Títulos das colunas (SERVIÇOS, EMPRESA) em cor accent
- Links com `hover:text-primary-foreground transition-colors`
- Nenhuma dependência nova

