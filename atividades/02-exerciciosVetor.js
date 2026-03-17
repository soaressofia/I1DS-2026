// Criando variaveis do tipo Array(Vetor)

var frutas = ["Banana", "Maçã", "Pera", "Uva", "Morango"];

//Imprimindo os dados em forma de tabelas
console.table(frutas);

// length -> "Tamanho" do Array (Quantidade de Elementos)
console.log("O Vetor tem", frutas.length, "elementos");

// push -> Adiciona um novo elemento no final da fila
frutas.push("Tangerina");
console.table(frutas);
console.log("O Vetor agora tem", frutas.length, "elementos");

// unshift -> Adiciona um novo elemento no inicio da fila
frutas.unshift("Goiaba");
console.table(frutas);
console.log("O Vetor agora tem", frutas.length, "elementos");

// Obter um  Elemento a partir do indice
console.log("5ª posição:", frutas[3]);

// splice -> Remove um elemento a partir de um indice, e tambem precisa ser informada a quantidade de registro a ser excluído a partir do indíce.
frutas.splice(4, 1);
console.table(frutas);
console.log("O Vetor agora tem", frutas.length, "elementos");

// slice -> Criar uma cópia do Vetor
let listaParcial = frutas.slice(2, 5); // Cria nova cópia do vetor frutas a partir do indice onde começa e onde termina
console.table(listaParcial);
console.log("O Vetor agora tem", frutas.length, "elementos");

