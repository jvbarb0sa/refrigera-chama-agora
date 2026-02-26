

# Bloco 4 — Proof row no Hero

## Mudança

**Arquivo: `src/components/HeroSection.tsx`**

### Substituir o `proofs` array e a `<ul>` atual (linhas 10-13, 95-102)

A lista atual com checkmarks genéricos ("Atendimento local", "Técnicos experientes", "Compromisso com qualidade") será substituída por uma proof row com dados concretos, usando ícones Lucide consistentes com o DS.

### Novo conteúdo da proof row

3 itens em linha no desktop, empilhados no mobile:

| Ícone Lucide | Texto | Detalhe |
|---|---|---|
| `Star` (fill amber-400) | **4,9 no Google** | Link para o perfil Google (se disponível) |
| `Users` | **50+ avaliações reais** | Sem link |
| `MapPin` | **Atendimento local rápido** | Sem promessa de tempo |

### Estrutura HTML

- Manter a `<ul>` com classe `hero-proof` (já animada pelo GSAP)
- Manter `border-t border-border pt-6 mt-12`
- Cada `<li>` usa `flex items-center gap-2 text-sm text-muted-foreground`
- O ícone `Star` recebe `fill-amber-400 text-amber-400` (mesmo padrão do TestimonialsSection)
- Importar `Star`, `Users`, `MapPin` de `lucide-react` (remover `Check` se não usado em outro lugar)

### Imports

- Adicionar: `Star`, `Users`, `MapPin`
- Remover: `Check` (não mais utilizado)

## Arquivos

| Arquivo | Mudança |
|---|---|
| `src/components/HeroSection.tsx` | Trocar proofs genéricos por proof row com dados concretos + ícones Lucide |

