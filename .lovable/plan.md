

# Ajustes no menu mobile + WhatsApp Sticky

## 1. Esconder botão flutuante do WhatsApp quando menu mobile abrir

O `Navbar` e o `WhatsAppSticky` são componentes irmãos em `Index.tsx`. Para comunicar o estado `open` do menu, vou criar um estado no `Index.tsx` e passá-lo como prop.

**Arquivo: `src/pages/Index.tsx`**
- Adicionar `useState` para `mobileMenuOpen`
- Passar `onMenuToggle` como prop para `Navbar`
- Passar `hidden` como prop para `WhatsAppSticky`

**Arquivo: `src/components/Navbar.tsx`**
- Aceitar prop `onMenuToggle?: (open: boolean) => void`
- Chamar `onMenuToggle` sempre que `open` mudar (via `useEffect`)

**Arquivo: `src/components/WhatsAppSticky.tsx`**
- Aceitar prop `hidden?: boolean`
- Quando `hidden` for `true`, não renderizar nada (return null)

## 2. Botão "Chamar no WhatsApp" no mobile → cor verde

**Arquivo: `src/components/Navbar.tsx`**

O botão atual usa `variant="strong"` que aplica `bg-accent` (Spicy Paprika / laranja). Trocar para estilo inline verde do WhatsApp:

```
className="w-full h-14 text-base bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-[10px] font-semibold"
```

Remover `variant="strong"` e usar classes diretas para manter o verde do WhatsApp.

## 3. Wireframe / layout do footer do menu mobile

Melhorias de espaçamento e hierarquia:
- Remover o número do WhatsApp duplicado (a linha com `WHATSAPP_DISPLAY`) — o botão já leva para o WhatsApp
- Manter apenas o telefone como informação de contato alternativa
- Centralizar o telefone acima do botão

## Resumo de arquivos

| Arquivo | Mudança |
|---|---|
| `Index.tsx` | Estado `mobileMenuOpen`, props para Navbar e WhatsAppSticky |
| `Navbar.tsx` | Prop `onMenuToggle`, botão verde, remover WhatsApp display duplicado |
| `WhatsAppSticky.tsx` | Prop `hidden`, não renderizar quando menu aberto |

