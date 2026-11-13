# Arrays, DOM e Eventos

Projeto simples em JavaScript que demonstra métodos de arrays, manipulação do DOM e eventos.

## Como executar

Coloque `index.html` e `app.js` na mesma pasta e abra o `index.html` no navegador.

Abra o Console com `F12` para ver as mensagens.

## Métodos de array

- `forEach`: percorre cada item do array.
- `map`: cria um novo array transformando os itens.
- `filter`: cria um novo array apenas com os itens que atendem a uma condição.
- `reduce`: acumula os valores do array em um único resultado.

## Manipulação do DOM

- `querySelector`: seleciona um elemento.
- `querySelectorAll`: seleciona vários elementos.
- `createElement`: cria um novo elemento HTML.
- `append`: adiciona um elemento à página.
- `classList.add`: adiciona uma classe CSS a um elemento.
- `textContent`: define ou lê o texto de um elemento.

## Event Delegation

O Event Delegation usa um único listener no elemento pai, neste caso a `#lista`.

Quando um item é clicado, o evento verifica se o alvo é um `LI` usando `e.target.tagName === "LI"`.

Isso é útil porque itens criados depois pelo JavaScript também funcionam com o mesmo listener.

## Formulário

O evento `submit` usa `e.preventDefault()` para impedir que a página recarregue.

O texto do campo é capturado com `.trim()` para remover espaços extras.

Se o campo estiver vazio, nenhum item é adicionado à lista.
