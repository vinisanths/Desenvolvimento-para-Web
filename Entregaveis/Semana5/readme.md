# Objetos, Dados e Assincronismo

Projeto simples em JavaScript com validação de dados, consumo de APIs, manipulação do DOM e tratamento de estados da tela.

## Como executar

Coloque `index.html` e `app.js` na mesma pasta e abra o `index.html` no navegador.

## Parte 1: Pedidos

O projeto valida se o cliente não está vazio e se o valor é um número maior que zero.

Depois, filtra os pedidos com status `pago`, calcula o total com `reduce` e exibe os valores com `toFixed(2)`.

## Parte 2: Buscador de CEP

O CEP é limpo com `.trim()` e uma expressão regular remove tudo que não for dígito.

O CEP deve ter exatamente 8 caracteres.

A API usada é a ViaCEP:

```text
https://viacep.com.br/ws/{cep}/json/
```

### Estados da tela

- **Carregando:** mostra “Buscando...” e desabilita o botão.
- **Erro:** mostra “Falha na conexão” em caso de erro de rede ou HTTP.
- **Vazio:** mostra “CEP não encontrado” quando a API retorna `erro`.
- **Sucesso:** limpa o resultado anterior e cria elementos `dt` e `dd` com `createElement` e `textContent`.

## Parte 3: Mini Pokédex

A busca usa a PokéAPI:

```text
https://pokeapi.co/api/v2/pokemon/{nome}
```

O nome é convertido para minúsculo e validado para não estar vazio.

O projeto exibe nome, imagem e tipos do Pokémon.

O erro 404 é tratado como “Pokémon não encontrado”.

## Reflexão

**Por que `Promise.all` pode ser mais rápido que vários `await` seguidos?**

Com vários `await` seguidos, cada requisição espera a anterior terminar antes de começar a próxima.

Com `Promise.all`, todas as requisições são iniciadas ao mesmo tempo, em paralelo. O programa espera apenas até que todas terminem, aproveitando melhor o tempo de rede.
