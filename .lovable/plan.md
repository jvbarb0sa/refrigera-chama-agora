

# Atualização de informações do site

## 1. Endereço — múltiplos arquivos

### `src/components/TopBar.tsx`
- Trocar "Três Lagoas – MS e região" por "Aparecida do Taboado – MS"

### `src/components/HeroSection.tsx`
- Badge kicker: trocar "Três Lagoas · MS" por "Aparecida do Taboado · MS"
- Bottom info card: trocar "Três Lagoas e região" por "Aparecida do Taboado e região"

### `src/components/FinalCTASection.tsx`
- Footer: trocar "Três Lagoas, MS e região" por "Av. Orlando Mascarenhas Pereira, 1841 – Jd. Jerusa, Aparecida do Taboado – MS"

### `src/components/MissionSection.tsx`
- Atualizar referências de localidade se existirem

### `src/components/ServiceAreaSection.tsx`
- Trocar "Três Lagoas · MS e Região" por "Aparecida do Taboado · MS e Região"
- Trocar texto descritivo "Atuamos em Três Lagoas e região" por "Atuamos em Aparecida do Taboado e região"

### `src/components/StatsSection.tsx`
- Trocar "em Três Lagoas e região" por "em Aparecida do Taboado e região"

### `index.html`
- Atualizar todas as referências de "Três Lagoas" para "Aparecida do Taboado" no title, meta descriptions, structured data (addressLocality, areaServed), e og/twitter tags
- Atualizar endereço completo no structured data

## 2. Descrição de atendimento — `src/components/TopBar.tsx`
- Trocar "Atendimento comercial, industrial e residencial" por "Atendimento residencial, comercial e industrial"

## 3. Link do botão "Solicitar visita técnica"

### `src/components/HeroSection.tsx`
- Trocar `<a href="#contato">` por `<a href="https://loja.infinitepay.io/booking/refrigeracaotaboado/tju9998-visita-tecnica-de-avaliacao" target="_blank" rel="noopener">`

### `src/components/Navbar.tsx`
- Trocar o `href` do botão "Solicitar visita técnica" de `whatsappLink(...)` para `"https://loja.infinitepay.io/booking/refrigeracaotaboado/tju9998-visita-tecnica-de-avaliacao"`
- Manter `target="_blank"` e `rel="noopener"`

