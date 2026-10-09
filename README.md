# Refrigeração Taboado

Experiência digital da Refrigeração Taboado, dedicada à assistência técnica em refrigeração e linha branca em Aparecida do Taboado, MS. Uma apresentação clara dos serviços, com acesso direto ao atendimento técnico, à loja e ao agendamento de visitas.

## Desenvolvimento

Aplicação em React e TypeScript, com Vite, Tailwind CSS e componentes Radix UI. As animações utilizam GSAP e Framer Motion. Use Node.js 22 ou 24 LTS e npm.

```sh
git clone https://github.com/jvbarb0sa/refrigera-chama-agora.git
cd refrigera-chama-agora
npm ci
npm run dev
```

O ambiente local fica disponível em `http://localhost:8080`. O npm é o gerenciador de dependências deste repositório; mantenha `package-lock.json` sincronizado com `package.json`.

## Validação

```sh
npm run build
npm test
npm run lint
```

O build de produção gera a pasta `dist/`. Para conferir o resultado localmente, execute `npm run preview`.

## Estrutura

| Caminho | Conteúdo |
| --- | --- |
| `src/pages/` | Página institucional e página de erro |
| `src/components/` | Seções, navegação e componentes de interface |
| `src/lib/constants.ts` | Contatos comerciais e links de atendimento |
| `src/assets/` | Identidade visual e imagens importadas pela aplicação |
| `public/` | Imagens, vídeo, favicon e arquivos públicos |
| `index.html` | Metadados e dados estruturados do negócio |

## Hospedagem

Publique o conteúdo de `dist/` na raiz de uma hospedagem estática com HTTPS. Rotas atendidas pelo navegador precisam de fallback para `index.html`. Antes de publicar, confira o domínio no canonical, nos metadados sociais e nos dados estruturados de `index.html`.

O site não exige credenciais nem variáveis de ambiente para funcionar. WhatsApp, agendamento, catálogo, mapa e fontes são integrações públicas existentes; dependem da disponibilidade dos respectivos serviços.

## Segurança

Consulte [SECURITY.md](SECURITY.md) para orientações sobre credenciais, revisão de dependências e tratamento de exposição no histórico Git.
