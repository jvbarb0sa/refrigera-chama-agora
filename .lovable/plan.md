

# SEO Técnico — Auditoria e correções

## Auditoria atual

### H1 — OK
Existe apenas 1 `<h1>` na página principal (HeroSection). O `<h1>` do NotFound é em rota separada — correto.

### Meta title — Precisa ajuste
Atual: `Refrigeração Taboado — Conserto de Geladeiras, Freezers e Refrigeração Comercial`
Problema: não inclui cidade (Três Lagoas). Padrão SEO local exige cidade no title.

### Meta description — OK (mas pode melhorar)
Atual já menciona Três Lagoas, WhatsApp, garantia. Está funcional.

### Alt text em imagens — Não existe
Nenhum `alt=` encontrado nos componentes. Os placeholders de imagem (Hero e MissionSection) usam `<span>` dentro de `<div>`, não `<img>`. Quando imagens reais forem adicionadas, precisarão de alt text. Por ora, não há `<img>` tags para corrigir.

### Schema LocalBusiness — Existe, precisa expandir
Atual tem: name, description, telephone, email, address, areaServed, priceRange.
Falta: `url`, `openingHoursSpecification`, `sameAs` (WhatsApp).

### Schema Service — Não existe
Não há schema `Service` para os serviços oferecidos.

### OG/Twitter tags — OK
Já existem og:title, og:description, og:image, twitter:card, twitter:image.

### Canonical — Verificar
Atual: `https://refrigeracaotaboado.com.br` — confirmar se este é o domínio correto.

---

## Mudanças

### Arquivo: `index.html`

**1. Meta title atualizado**
```
Refrigeração Taboado — Conserto de Geladeiras e Refrigeração Comercial em Três Lagoas
```
Inclui cidade. OG e Twitter title acompanham.

**2. Meta description refinada**
```
Conserto de geladeiras, freezers, câmaras frias e refrigeração comercial em Três Lagoas/MS. Diagnóstico técnico, orçamento claro e garantia. Chame no WhatsApp.
```

**3. Schema LocalBusiness expandido**
Adicionar:
- `"url": "https://refrigeracaotaboado.com.br"`
- `"openingHoursSpecification"` com horários (Seg-Sex 8h-18h, Sáb 8h-12h)

**4. Schema Service adicionado**
Novo bloco `ld+json` com `@type: Service` listando os 4 serviços principais:
- Refrigeração Comercial
- Refrigeração Residencial
- Máquinas e Eletrodomésticos
- Sistemas Especiais

Cada um com `provider` referenciando o LocalBusiness.

### Nenhum outro arquivo precisa mudar
Imagens ainda são placeholders (sem `<img>` tags) — alt text será adicionado quando fotos reais entrarem.

