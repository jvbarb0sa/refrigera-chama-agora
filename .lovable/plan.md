

## Adicionar botão "Catálogo de Produtos" no WhatsAppRouterModal

**Arquivo:** `src/components/WhatsAppRouterModal.tsx`

- Importar ícone `ShoppingBag` do lucide-react
- Após o `.map()` dos options de WhatsApp (Técnico e Loja), adicionar um link separado para o catálogo com o mesmo estilo visual dos cards existentes
- O link abre `https://refrigeracaotaboado.smartpos.app` em nova aba
- Label: **Catálogo de Produtos**, descrição: "Peças e acessórios"
- Usar ícone `ShoppingBag` e manter o mesmo layout de card (horizontal no mobile com ChevronRight, vertical no desktop)
- No hover do desktop, em vez de "Iniciar conversa" com ícone WhatsApp, mostrar "Acessar catálogo" sem ícone WhatsApp (já que não é WhatsApp)

