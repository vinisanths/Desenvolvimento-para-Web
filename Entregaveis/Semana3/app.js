//Bloco 1
// let pode ser reatribuído
let pontos = 50;
pontos = pontos + 10;

console.log("Pontos:", pontos);

// const não pode ser reatribuído
const MAX_PONTOS = 100;

try {
    MAX_PONTOS = 200;
} catch (erro) {
    console.log("Erro ao reatribuir constante:", erro.message);
    console.log("Motivo: const não permite reatribuição.");
}

// Tipos primitivos
let texto = "Olá";
let numero = 10;
let booleano = true;
let indefinido;
let nulo = null;

console.log("Tipo de texto:", typeof texto);
console.log("Tipo de numero:", typeof numero);
console.log("Tipo de booleano:", typeof booleano);
console.log("Tipo de indefinido:", typeof indefinido);
console.log("Tipo de nulo:", typeof nulo);

// Template Literal
let nome = "Maria";
let idade = 20;

console.log(`Meu nome é ${nome} e eu tenho ${idade} anos.`);
console.log("Meu nome é " + nome + " e eu tenho " + idade + " anos.");

//Bloco 2

// Função declarada tem hoisting
console.log("Maior de idade?", ehMaiorDeIdade(20));

function ehMaiorDeIdade(idade) {
    return idade >= 18;
}

// Função de expressão não tem hoisting
try {
    console.log(ehMaiorDeIdadeExpressao(20));
} catch (erro) {
    console.log("Erro na função de expressão:", erro.message);
    console.log("Motivo: funções de expressão não sofrem hoisting.");
}

const ehMaiorDeIdadeExpressao = function (idade) {
    return idade >= 18;
};

console.log("Maior de idade (expressão)?", ehMaiorDeIdadeExpressao(20));

// Função dobro declarada
function dobro(n) {
    return n * 2;
}

// Função dobro como expressão
const dobroExpressao = function (n) {
    return n * 2;
};

// Função dobro como arrow function
const dobroArrow = (n) => n * 2;

console.log("Dobro declarada:", dobro(5));
console.log("Dobro expressão:", dobroExpressao(5));
console.log("Dobro arrow:", dobroArrow(5));

// Função com parâmetro padrão
function multiplicar(n = 1) {
    return n * 2;
}

console.log("Multiplicar com argumento:", multiplicar(4));
console.log("Multiplicar sem argumento:", multiplicar());

//Bloco 3

// if/else
function classificarNota(nota) {
    if (nota >= 6) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}

console.log("Nota 8:", classificarNota(8));
console.log("Nota 4:", classificarNota(4));

// switch
let corSemaforo = "vermelho";

switch (corSemaforo) {
    case "vermelho":
        console.log("Pare");
        break;

    case "amarelo":
        console.log("Atenção");
        break;

    case "verde":
        console.log("Siga");
        break;

    default:
        console.log("Cor inválida");
}

// Tabuada do 5 com for
console.log("Tabuada do 5:");

for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

// Contagem regressiva com while
let contador = 5;

console.log("Contagem regressiva:");

while (contador >= 1) {
    console.log(contador);
    contador--;
}

// Números de 1 a 20 com for
console.log("Números de 1 a 20 com for:");

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(`${i} é par`);
    } else {
        console.log(`${i} é ímpar`);
    }
}

// Números de 1 a 20 com while
let numeroWhile = 1;

console.log("Números de 1 a 20 com while:");

while (numeroWhile <= 20) {
    if (numeroWhile % 2 === 0) {
        console.log(`${numeroWhile} é par`);
    } else {
        console.log(`${numeroWhile} é ímpar`);
    }

    numeroWhile++;
}

// Função dia da semana
function diaDaSemana(numero) {
    switch (numero) {
        case 1:
            return "Domingo";

        case 2:
            return "Segunda-feira";

        case 3:
            return "Terça-feira";

        case 4:
            return "Quarta-feira";

        case 5:
            return "Quinta-feira";

        case 6:
            return "Sexta-feira";

        case 7:
            return "Sábado";

        default:
            return "Número inválido";
    }
}

console.log("Dia 1:", diaDaSemana(1));
console.log("Dia 5:", diaDaSemana(5));
console.log("Dia 10:", diaDaSemana(10));