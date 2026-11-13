// Array de nomes
let nomes = ["Maria", "João", "Ana"];

nomes.forEach(function (nome) {
    console.log(`Olá, ${nome}!`);
});

let nomesMaiusculos = nomes.map(function (nome) {
    return nome.toUpperCase();
});

console.log("Nomes em maiúsculas:", nomesMaiusculos);

// Array de preços
let precos = [10, 25, 40, 5, 60];

let precosAcimaDe20 = precos.filter(function (preco) {
    return preco > 20;
});

let somaPrecos = precos.reduce(function (total, preco) {
    return total + preco;
}, 0);

console.log("Preços acima de 20:", precosAcimaDe20);
console.log("Soma dos preços:", somaPrecos);

// Array de objetos
let produtos = [
    { nome: "Caderno", preco: 15 },
    { nome: "Mochila", preco: 80 },
    { nome: "Caneta", preco: 5 }
];

let nomesProdutos = produtos.map(function (produto) {
    return produto.nome;
});

let produtosBaratos = produtos.filter(function (produto) {
    return produto.preco < 50;
});

let totalProdutos = produtos.reduce(function (total, produto) {
    return total + produto.preco;
}, 0);

console.log("Nomes dos produtos:", nomesProdutos);
console.log("Produtos com preço menor que 50:", produtosBaratos);
console.log("Total dos produtos:", totalProdutos);

produtos.forEach(function (produto) {
    console.log(`${produto.nome}: R$ ${produto.preco}`);
});

// ===== Bloco 2: Manipulação do DOM =====

let titulo = document.querySelector("#titulo");
titulo.textContent = "Blog do Seu Nome";

let paragrafos = document.querySelectorAll(".texto");

paragrafos.forEach(function (paragrafo) {
    console.log(paragrafo.textContent);
});

let lista = document.querySelector("#lista");

lista.innerHTML = "<li>Primeiro item</li><li>Segundo item</li>";

let terceiroItem = document.createElement("li");
terceiroItem.textContent = "Terceiro item";
terceiroItem.classList.add("destaque");

lista.append(terceiroItem);

console.log("Terceiro item tem a classe destaque?", terceiroItem.classList.contains("destaque"));

// Criando itens a partir de um array
let tarefas = ["Estudar JS", "Fazer exercícios", "Revisar DOM"];

tarefas.forEach(function (tarefa, indice) {
    let item = document.createElement("li");
    item.textContent = tarefa;

    if (indice === 0) {
        item.classList.add("feito");
    }

    lista.append(item);
});

console.log("Quantidade de itens na lista:", document.querySelectorAll("li").length);

// ===== Bloco 3: Eventos e Event Delegation =====

let botao = document.querySelector("#botao");

botao.addEventListener("click", function () {
    console.log("Clicou!");
});

botao.addEventListener("mouseover", function () {
    botao.textContent = "Pode clicar!";
});

let campoNome = document.querySelector("#nome");

campoNome.addEventListener("keyup", function () {
    console.log(campoNome.value);
});

// Event Delegation
lista.addEventListener("click", function (evento) {
    if (evento.target.tagName === "LI") {
        evento.target.classList.toggle("feito");
        console.log(evento.target.textContent);
    }
});

// Criando um novo item para testar o Event Delegation
let novoItem = document.createElement("li");
novoItem.textContent = "Item criado pelo JavaScript";
lista.append(novoItem);

// Formulário
let formulario = document.querySelector("#formulario");
let campoTarefa = document.querySelector("#tarefa");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    let texto = campoTarefa.value.trim();

    if (texto !== "") {
        let item = document.createElement("li");
        item.textContent = texto;
        lista.append(item);

        campoTarefa.value = "";
    }
});