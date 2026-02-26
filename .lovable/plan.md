

# Reestruturação completa — Wireframe final Refrigeração Taboado

## Diagnóstico: estado atual vs wireframe

Comparação seção por seção entre o que existe e o que o wireframe pede.

### Seções que SAEM (não estão no wireframe)
| Seção | Motivo |
|---|---|
| `StatsSection` | Redundante — números já aparecem no FAQ sidebar e prova social |
| `ProcessSection` | Wireframe não inclui bloco "Como funciona" |
| `CommerceSection` | Faixa azul escura de impacto — removida, conteúdo comercial já coberto em Especialidades |
| `FAQSection` | Wireframe não inclui FAQ |

### Nova ordem das seções
```text
1. Navbar
2. Hero
3. Especialidades (ServicesSection)
4. Problemas (ProblemsSection)
5. Diferenciais (DifferentialsSection)
6. Sobre (MissionSection)
7. Prova Social (TestimonialsSection)
8. Área de Atendimento (ServiceAreaSection)
9. CTA Final + Footer (FinalCTASection)
```

---

## Mudanças por arquivo

### 1. `src/pages/Index.tsx`
- Remover imports: `StatsSection`, `ProcessSection`, `CommerceSection`, `FAQSection`
- Nova ordem dos componentes conforme wireframe
- Adicionar `ServiceAreaSection` (já existe o componente, só não está no Index)

### 2. `src/components/Navbar.tsx`
- Links atualizados para: Início (`#`), Especialidades (`#servicos`), Diferenciais (`#diferenciais`), Sobre (`#sobre`), Contato (`#contato`)
- Botão CTA: texto muda de "WhatsApp" para "Solicitar atendimento"

### 3. `src/components/HeroSection.tsx`
- Subheadline atualizada: "Instalação e manutenção de geladeiras, freezers, câmaras frias e sistemas inverter com atendimento profissional e diagnóstico preciso."
- Bullets atualizados: "Atendimento local", "Técnicos experientes", "Compromisso com qualidade"

### 4. `src/components/ServicesSection.tsx`
- Card 1 descrição expandida: adicionar "indústrias alimentícias"
- Sem outras mudanças — já está correto

### 5. `src/components/ProblemsSection.tsx`
- Adicionar subtítulo: "Atendimento técnico para falhas comuns em refrigeração e elétrica."
- Adicionar 6º item: "Problemas elétricos em sistemas"
- Layout da lista: 2 colunas em desktop (`grid grid-cols-1 sm:grid-cols-2`)
- `max-w-xl` expandido para `max-w-2xl` para acomodar 2 colunas

### 6. `src/components/DifferentialsSection.tsx`
- Adicionar `id="diferenciais"` na section
- Textos atualizados conforme wireframe:
  - "Transparência no atendimento" / "Diagnóstico claro e explicação técnica do serviço."
  - "Segurança na execução" / "Procedimentos adequados e responsabilidade técnica."
  - "Qualidade no serviço" / "Peças adequadas e manutenção eficiente."
  - "Compromisso com o cliente" / "Pontualidade e respeito ao prazo."

### 7. `src/components/MissionSection.tsx`
- Adicionar `id="sobre"` na section
- Texto atualizado conforme wireframe (versão expandida com "manutenção e instalação em sistemas...")
- Adicionar coluna direita com placeholder de foto (ambiente de trabalho / foto real)
- Layout 2 colunas: texto à esquerda, imagem à direita

### 8. `src/components/TestimonialsSection.tsx`
- Título H2 atualizado: "Quem já confiou no nosso trabalho"
- Manter bloco de credibilidade e carousel

### 9. `src/components/ServiceAreaSection.tsx`
- Expandir para seção completa com padding `py-16 md:py-24`
- Título: "Atendimento local"
- Texto: "Atuamos em Três Lagoas e região, com atendimento para comércios, indústrias alimentícias e residências."
- Adicionar Google Maps embed (iframe) com localização de Três Lagoas

### 10. `src/components/FinalCTASection.tsx`
- CTA section: fundo muda de `bg-background` para `bg-muted` (cinza claro conforme wireframe)
- Sub texto: "Entre em contato e solicite atendimento."
- Footer: fundo mais leve — de `bg-foreground` (azul marinho pesado) para `bg-muted` com texto `text-foreground`/`text-muted-foreground`
- Informações de contato (telefone, email, localização) já presentes no footer

### 11. `src/hooks/use-active-section.ts`
- Atualizar IDs monitorados para corresponder aos novos IDs de seção

---

## O que NÃO muda
- `WhatsAppSticky` — mantido
- `src/index.css` — cores e tipografia mantidas
- `src/lib/constants.ts` — sem alteração
- `src/components/ui/*` — sem alteração
- Lógica GSAP/Framer Motion — mantida em cada seção

## Resultado
10 blocos limpos, ordem narrativa do wireframe, sem seções redundantes, sem blocos escuros aleatórios, sem efeitos tech.

