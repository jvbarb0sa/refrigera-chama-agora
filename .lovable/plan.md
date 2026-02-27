

# Responsividade iOS-style do WhatsAppRouterModal

## Arquivo: `src/components/WhatsAppRouterModal.tsx`

### 1. Import
- Adicionar `ChevronRight` de `lucide-react`

### 2. Container dos cards (linha ~48)
- Trocar `grid grid-cols-2 gap-4 pt-4` por `flex flex-col gap-3 md:flex-row md:gap-4 pt-4`

### 3. Layout interno do card (linha ~56)
- Trocar classes atuais por `group w-full flex flex-row md:flex-col items-center md:justify-center text-left md:text-center p-4 md:p-6 rounded-xl border-2 border-slate-100 bg-white hover:border-green-500 hover:bg-green-50 hover:shadow-md transition-all duration-200 cursor-pointer`

### 4. Ícone Lucide
- Adicionar `mr-4 md:mr-0 md:mb-3 shrink-0` ao ícone

### 5. Container de título/subtítulo
- Envolver label + description em `<div className="flex-1">`

### 6. ChevronRight mobile
- Após o container de texto, adicionar `<ChevronRight size={18} className="block md:hidden text-slate-400 shrink-0 ml-auto" />`

### 7. "Iniciar conversa" hover text
- Manter `hidden md:flex` (só desktop), pois no mobile o chevron substitui

