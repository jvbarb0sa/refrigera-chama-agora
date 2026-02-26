

# MissionSection — Sobre a empresa, institucional e direto

## Diagnóstico

A seção atual tem:
- Label "Nossa missão" e H2 "Equipamentos param. Negócios não podem." — tom de campanha, não institucional
- 3 pilares (Diagnóstico preciso, Atendimento rápido, Garantia formal) — conteúdo que agora já está coberto pela nova DifferentialsSection
- Marquee de serviços — conteúdo já coberto pela ServicesSection
- Resultado: seção redundante e sem identidade própria

## Mudança

Transformar em bloco "Sobre a empresa" — institucional, sóbrio, sem pilares nem marquee.

### Header
- Label: `SOBRE A EMPRESA`
- H2: `Profissionalismo e responsabilidade técnica`

### Texto
Parágrafo único, direto:

> A Refrigeração Taboado atua com foco em qualidade, transparência e segurança nos serviços prestados. Trabalhamos com diagnóstico preciso, peças adequadas e compromisso com o cliente.

`text-muted-foreground`, `max-w-lg`, `leading-relaxed`.

### Removidos
- 3 pilares (redundante com DifferentialsSection)
- Marquee de serviços (redundante com ServicesSection)
- H2 "Equipamentos param. Negócios não podem."
- Subtítulo antigo

### Mantido
- GSAP fade (no container, sem stagger — não há mais children)
- Posição no Index.tsx
- Padding `py-16 md:py-24`

```text
SOBRE A EMPRESA

Profissionalismo e responsabilidade técnica

A Refrigeração Taboado atua com foco em qualidade,
transparência e segurança nos serviços prestados.
Trabalhamos com diagnóstico preciso, peças adequadas
e compromisso com o cliente.
```

## Arquivo editado

| Arquivo | O que muda |
|---|---|
| `src/components/MissionSection.tsx` | Reescrita: remove pilares e marquee, substitui por texto institucional único |

