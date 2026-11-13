
let pedidos = [
    { cliente: "Bia", valor: 120, status: "pago" },
    { cliente: "João", valor: 50, status: "pendente" },
    { cliente: "", valor: 30, status: "pago" },
    { cliente: "Ana", valor: 0, status: "pago" },
    { cliente: "Carlos", valor: 200, status: "pago" }
];

let pedidosValidos = pedidos.filter(function (pedido) {
    return pedido.cliente !== "" && typeof pedido.valor === "number" && pedido.valor > 0;
});

let pedidosPagos = pedidosValidos.filter(function (pedido) {
    return pedido.status === "pago";
});

let totalFaturado = pedidosPagos.reduce(function (total, pedido) {
    return total + pedido.valor;
}, 0);

console.log("Pedidos válidos:", pedidosValidos);
console.log("Pedidos pagos:", pedidosPagos);
console.log("Total faturado: R$", totalFaturado.toFixed(2));

pedidosPagos.forEach(function (pedido) {
    console.log(`${pedido.cliente} — R$ ${pedido.valor.toFixed(2)}`);
});

// ===== Parte 2: Buscador de CEP =====

let formularioCep = document.querySelector("#formulario-cep");
let campoCep = document.querySelector("#cep");
let botaoBuscar = document.querySelector("#botao-buscar");
let statusCep = document.querySelector("#status");
let resultadoCep = document.querySelector("#resultado");
let historicoCep = document.querySelector("#historico");

let cepsPesquisados = [];

formularioCep.addEventListener("submit", async function (evento) {
    evento.preventDefault();

    let cep = campoCep.value.trim().replace(/\D/g, "");

    if (cep.length !== 8) {
        statusCep.textContent = "Digite um CEP válido com 8 dígitos.";
        return;
    }

    statusCep.textContent = "Buscando...";
    botaoBuscar.disabled = true;
    resultadoCep.replaceChildren();

    try {
        let resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

        if (!resposta.ok) {
            throw new Error("Erro na conexão com a API.");
        }

        let dados = await resposta.json();

        if (dados.erro) {
            statusCep.textContent = "CEP não encontrado.";
            return;
        }

        statusCep.textContent = "";

        let itens = [
            ["Rua", dados.logradouro],
            ["Bairro", dados.bairro],
            ["Cidade", dados.localidade],
            ["UF", dados.uf]
        ];

        itens.forEach(function (item) {
            let dt = document.createElement("dt");
            let dd = document.createElement("dd");

            dt.textContent = item[0];
            dd.textContent = item[1];

            resultadoCep.append(dt, dd);
        });

        cepsPesquisados.push({ cep: cep, cidade: dados.localidade });

        let itemHistorico = document.createElement("li");
        itemHistorico.textContent = `${cep} - ${dados.localidade}`;
        historicoCep.append(itemHistorico);

    } catch (erro) {
        statusCep.textContent = "Falha na conexão. Tente novamente.";
    } finally {
        botaoBuscar.disabled = false;
    }
});

// ===== Parte 3: Mini Pokédex =====

let formularioPokemon = document.querySelector("#formulario-pokemon");
let campoPokemon = document.querySelector("#pokemon");
let statusPokemon = document.querySelector("#status-pokemon");
let resultadoPokemon = document.querySelector("#resultado-pokemon");

formularioPokemon.addEventListener("submit", async function (evento) {
    evento.preventDefault();

    let nome = campoPokemon.value.trim().toLowerCase();

    if (nome === "") {
        statusPokemon.textContent = "Digite o nome de um Pokémon.";
        return;
    }

    statusPokemon.textContent = "Buscando...";
    resultadoPokemon.replaceChildren();

    try {
        let resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`);

        if (resposta.status === 404) {
            statusPokemon.textContent = "Pokémon não encontrado.";
            return;
        }

        if (!resposta.ok) {
            throw new Error("Erro na conexão com a API.");
        }

        let dados = await resposta.json();

        statusPokemon.textContent = "";

        let nomePokemon = document.createElement("h2");
        nomePokemon.textContent = dados.name;

        let imagem = document.createElement("img");
        imagem.src = dados.sprites.front_default;
        imagem.alt = dados.name;

        let tipos = document.createElement("p");
        tipos.textContent = "Tipos: " + dados.types.map(function (tipo) {
            return tipo.type.name;
        }).join(", ");

        resultadoPokemon.append(nomePokemon, imagem, tipos);

    } catch (erro) {
        statusPokemon.textContent = "Falha na conexão. Tente novamente.";
    }
});