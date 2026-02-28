

## Alterar link do botão "Fale com a gente" para o número da loja

**Arquivo:** `src/components/ServiceAreaSection.tsx` (linha 54)

- Substituir `href={whatsappLink("Olá, gostaria de informações sobre atendimento na minha região.")}` por `href="https://wa.me/5567999259771?text=Olá%2C%20gostaria%20de%20informações%20sobre%20atendimento%20na%20minha%20região."` (usando o número da loja `WHATSAPP_LOJA`)
- Alternativamente, usar a função existente: `href={whatsappLink("Olá, gostaria de informações sobre atendimento na minha região.", "loja")}` que já roteia para o número correto `5567999259771`

