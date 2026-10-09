# Segurança

Esta aplicação é um site estático. Tudo que estiver em `public/`, no código entregue ao navegador ou nos metadados HTML será público. Contatos comerciais e destinos de atendimento são informações intencionais do produto.

## Credenciais

- Não inclua senhas, tokens, chaves privadas ou dados de clientes no código, nos assets, em commits ou em issues públicas.
- Arquivos locais de ambiente e credenciais são ignorados pelo Git. Esse mecanismo não protege arquivos já rastreados: revise o conteúdo antes de cada commit.
- Variáveis com prefixo `VITE_` são incorporadas ao código do navegador. Elas não são um local seguro para segredos.
- Se uma integração futura exigir credenciais privadas, use um serviço no servidor com armazenamento de segredos e acesso restrito.

## Verificação

Execute `npm ci`, `npm run build`, `npm test`, `npm run lint` e `npm audit` ao revisar alterações. Um resultado sem alertas descreve apenas o alcance e a data da verificação; não é uma garantia de ausência de vulnerabilidades.

Para verificar segredos sem exibir os valores, use uma ferramenta dedicada com saída totalmente redigida:

```sh
gitleaks git --log-opts="--all --full-history" --redact=100 --ignore-gitleaks-allow .
gitleaks dir --redact=100 --ignore-gitleaks-allow .
```

Em repositórios com arquivos binários, revise também metadados de imagens e vídeos, documentos, mensagens de commits, branches, tags e referências de pull requests. A análise automática tem limites.

## Se houver exposição

1. Revogue ou rotacione a credencial no serviço de origem e confira registros de acesso.
2. Remova o valor da versão atual e ajuste a integração para usar um armazenamento apropriado.
3. Avalie o saneamento do histórico com `git-filter-repo`, coordenando branches, tags, pull requests e clones com os colaboradores.
4. Quando necessário, solicite ao suporte do GitHub a remoção de referências e caches que não possam ser limpos pelo proprietário do repositório.
5. Verifique novamente o repositório e as cópias existentes.

Apagar um arquivo atual não remove o conteúdo dos commits anteriores. Reescrever o histórico também não apaga cópias em clones ou forks.

Referência: [remoção de dados sensíveis de um repositório — GitHub](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository).
