

# Refatorar WhatsAppRouterModal — visual premium Apple/Stripe

## Alterações em `src/components/ui/dialog.tsx`

### DialogOverlay (linha 23)
- Substituir `bg-black/80` por `bg-slate-900/40 backdrop-blur-sm`

### DialogContent (linhas 36-40)
- Substituir classes do container por `bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full` (mantendo posicionamento fixed/z-50/translate)
- Remover `gap-4 border` e `sm:rounded-lg`

### Botão de fechar (linhas 44-47)
- Remover `rounded-sm opacity-70 ring-offset-background` etc.
- Usar `absolute top-4 right-4 text-slate-400 hover:text-slate-700 transition-colors`

## Alterações em `src/components/WhatsAppRouterModal.tsx`

### Container do modal (linha 40)
- Remover `className="max-w-sm"` do DialogContent (o dialog.tsx já terá max-w-md)

### Cards (linhas 48-72)
- Trocar `<a>` por `<a>` mantido (precisa abrir link), mas estilizado como button
- Remover botão verde interno (linhas 67-70)
- Novas classes do card: `w-full flex flex-col items-center p-6 rounded-xl border-2 border-slate-100 bg-white hover:border-green-500 hover:bg-green-50 hover:shadow-md transition-all duration-200 group cursor-pointer`
- Ícone e título: `text-slate-800`
- Subtítulo: `text-sm text-slate-500`
- Novo elemento "Iniciar conversa" com WhatsApp icon: `flex items-center gap-2 text-sm font-semibold text-green-600 mt-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0`

### Grid (linha 48)
- Mudar para `grid grid-cols-2 gap-4 pt-4`

