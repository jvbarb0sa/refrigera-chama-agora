

## Alterar botão "Fale conosco!" no FAQ para usar número da loja

**Arquivo:** `src/components/FAQSection.tsx` (linha 44)

- Substituir `href={whatsappLink("Olá, tenho uma dúvida sobre o serviço.")}` por `href={whatsappLink("Olá, tenho uma dúvida sobre o serviço.", "loja")}`

