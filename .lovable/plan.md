

# Bloco 7 — Imagem real no Hero + ajustes visuais

## Situação atual

A coluna direita do Hero exibe `/placeholder.svg` — um retângulo cinza genérico. Isso precisa ser substituído por uma foto real do negócio.

## Problema: não há foto real no projeto

Nenhuma imagem de técnico, câmara fria ou loja foi enviada ainda. O arquivo `src/assets/hero-bg.jpg` existe mas não está sendo usado no Hero.

**Você precisa enviar uma foto real aqui no chat.** Pode ser:
- Foto do técnico em atendimento (melhor opção)
- Foto de câmara fria / freezer comercial (B2B)
- Foto do time + carro / loja (confiança)

Basta arrastar a imagem para o chat ou clicar no botão (+) → Attach.

## O que será feito após receber a imagem

### `src/components/HeroSection.tsx`

Substituir o `<img src="/placeholder.svg">` pela imagem enviada, com tratamento visual:

```
<div className="hero-image lg:col-span-2 mt-10 lg:mt-0 relative">
  <div className="relative overflow-hidden rounded-2xl shadow-lg">
    <img src="/uploaded-image.jpg" alt="..." className="w-full object-cover" />
    <div className="absolute inset-0 bg-primary/5 mix-blend-multiply" />
  </div>
</div>
```

- **Borda**: `rounded-2xl` (16px, já definido pelo `--radius`)
- **Sombra**: `shadow-lg` (suave, elevação moderada)
- **Overlay azul 5%**: `bg-primary/5` com `mix-blend-multiply` para casar com a marca
- **Object-fit**: `object-cover` para manter proporção

### Sobre os tokens de estilo mencionados

As cores e motion já estão alinhados com o que foi pedido:
- `primary` = French Blue (#1B3D89) ≈ #1E4E8C ✓
- `accent` = Spicy Paprika (#D36D3E) ≈ #D07A2D ✓
- Fundo branco, texto onyx, bordas slate-200 ✓
- Transições 150ms ease-out nos botões ✓
- Sem efeitos "saltitantes" ✓

Nenhuma mudança de cor necessária.

### Sobre a barra fixa inferior (WhatsApp)

Já existe o `WhatsAppSticky` como bolinha flutuante. A sugestão de barra fixa inferior pode ser implementada separadamente se desejado — não faz parte desta mudança.

## Próximo passo

**Envie a foto real do técnico/loja/equipamento aqui no chat** para que eu possa aplicá-la no Hero com o tratamento visual descrito.

