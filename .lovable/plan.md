

# Corrigir mapa para endereço correto

O iframe do Google Maps em `ServiceAreaSection.tsx` está apontando para Três Lagoas. Precisa ser atualizado para o endereço correto:

**Avenida Orlando Mascarenhas Pereira, 1841 – Jardim Jerusa, Aparecida do Taboado – MS, 79570-000**

## Alterações

1. **`src/components/ServiceAreaSection.tsx`**: Trocar a URL do iframe do Google Maps embed para o endereço correto em Aparecida do Taboado, usando uma URL de embed baseada no endereço completo.

2. **`index.html`**: Verificar e corrigir o Schema.org `LocalBusiness` se ainda houver referência a Três Lagoas (o endereço já parece correto, mas confirmar CEP 79570-000).

