

# Remover barra de scroll do site

## Arquivo: `src/index.css`

Substituir os estilos do scrollbar (linhas ~68-76) por regras que escondem a barra de scroll mantendo a funcionalidade de rolagem:

```css
::-webkit-scrollbar {
  display: none;
}

html {
  scrollbar-width: none;
}
```

