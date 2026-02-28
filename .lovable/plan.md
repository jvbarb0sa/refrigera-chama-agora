

# Atualizar números de telefone — Técnico e Loja

## Números corretos
- **Técnico**: (67) 98109-7179 → número WhatsApp: 5567981097179
- **Loja**: (67) 99259-771**0*** → corrigir para 5567992597**71** (sem o zero final? O usuário informou 99259771)

Aguarda — o usuário disse "Loja - (67) 99259771" que tem 8 dígitos. Celular brasileiro tem 9. Pode ser fixo ou falta um dígito. Vou assumir que é `556799259771` (sem o zero que estava antes, i.e. o número correto é 99259-771 sem o zero).

Hmm, na verdade `99259771` = 8 dígitos. Número de celular no Brasil = 9 dígitos. O número atual é `992597710` (9 dígitos). O cliente disse `99259771` (8 dígitos). Pode ser que faltou um dígito. Mas o usuário pediu para alterar, vou seguir exatamente o que informou.

## Alterações em `src/lib/constants.ts`

| Constante | Valor atual | Novo valor |
|---|---|---|
| `WHATSAPP_TECNICO` | `"5567981097179"` | `"5567981097179"` (sem mudança) |
| `WHATSAPP_LOJA` | `"5567992597710"` | `"556799259771"` |
| `PHONE_NUMBER` | `"5567981097179"` | `"5567981097179"` (sem mudança) |
| `PHONE_DISPLAY` | `"(67) 9925-9771"` | `"(67) 9810-97179"` — hmm |

Preciso re-analisar. O usuário disse:
- Técnico: (67) 981097179 — isso são 9 dígitos = `98109-7179`
- Loja: (67) 99259771 — isso são 8 dígitos = `9925-9771`

Os números WhatsApp atuais já estão corretos para o técnico (`5567981097179`). Para a loja, `99259771` com código 67 = `556799259771`. Mas o atual é `5567992597710` que tem um zero a mais.

O `PHONE_DISPLAY` atual `(67) 9925-9771` parece ser o da loja. E o `WHATSAPP_DISPLAY_TECNICO` = `(67) 98109-7179` está correto.

## Alterações

**`src/lib/constants.ts`** — linhas 1-7:

| Constante | Atual | Novo |
|---|---|---|
| `WHATSAPP_LOJA` | `"5567992597710"` | `"556799259771"` |
| `PHONE_NUMBER` | `"5567981097179"` | `"556799259771"` (telefone principal = loja) |
| `PHONE_DISPLAY` | `"(67) 9925-9771"` | `"(67) 9925-9771"` (sem mudança, já está formatado) |
| `WHATSAPP_DISPLAY_TECNICO` | `"(67) 98109-7179"` | `"(67) 98109-7179"` (sem mudança) |
| `WHATSAPP_DISPLAY_LOJA` | `"(67) 99259-7710"` | `"(67) 9925-9771"` |

Espera, estou complicando. Vou simplificar baseado no que o usuário disse literalmente:

- **Técnico**: `(67) 981097179` = formatado `(67) 98109-7179`, WhatsApp `5567981097179` ✅ já está correto
- **Loja**: `(67) 99259771` = formatado `(67) 9925-9771`, WhatsApp `556799259771`

O que precisa mudar:
1. `WHATSAPP_LOJA`: `"5567992597710"` → `"556799259771"` (remover o zero extra)
2. `WHATSAPP_DISPLAY_LOJA`: `"(67) 99259-7710"` → `"(67) 9925-9771"`
3. `PHONE_NUMBER` e `PHONE_DISPLAY` — qual é o telefone principal para ligar? Preciso confirmar.

Na verdade, `PHONE_NUMBER` é usado para o link `tel:`. Atualmente aponta para o técnico. O `PHONE_DISPLAY` mostra `(67) 9925-9771` que parece ser da loja. Há inconsistência.

Vou perguntar qual é o número principal para ligações, ou simplesmente ajustar a loja e manter o resto.

## Plano final

1. **`src/lib/constants.ts`**:
   - `WHATSAPP_LOJA`: `"5567992597710"` → `"556799259771"`
   - `WHATSAPP_DISPLAY_LOJA`: `"(67) 99259-7710"` → `"(67) 9925-9771"`
   - `PHONE_DISPLAY`: já está `"(67) 9925-9771"` ✅
   - `WHATSAPP_DISPLAY_TECNICO`: já está `"(67) 98109-7179"` ✅
   - `WHATSAPP_TECNICO`: já está `"5567981097179"` ✅

Único arquivo alterado: `src/lib/constants.ts` (2 valores).

