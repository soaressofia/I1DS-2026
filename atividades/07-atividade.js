/*****************************************************
Lista de Exercícios
*****************************************************/
/*
Dada a matriz abaixo, faça um programa em JavaScript
que imprima os elementos da sua diagonal principal.
| 3 5 8 |
| 1 9 2 |
| 7 1 4 |

---

Dada a matriz abaixo, faça um programa em JavaScript
que multiplique seus elementos por um valor x e imprima
a matriz antes e após a multiplicação.
| 8 1 3 |
| 2 9 1 |
| 4 6 2 |
*/

// Criando uma matriz 
var matriz = [
    [3, 5, 8],
    [1, 9, 2],
    [7, 1, 4],
];
console.table(matriz);

// Obtendo elemento com base e seus índices

console.log(matriz[0][0]);
console.log(matriz[1][1]);
console.log(matriz[2][2]);

console.log("---------------------------------------------")

var matriz = [
    [3, 5, 8],
    [1, 9, 2],
    [7, 1, 4],
];
console.table(matriz);

// Dado a matriz, multiplique todos seus elementos por 3
console.table(matriz);

matriz = [3, 5, 8, 1, 9, 2, 7, 1, 4,];

console.log('------------------------')
for (let i = 0; i < matriz.length; i++) {
  matriz[i] *= 3; // numeros [i] = numeros [i] * 3
}
console.log(matriz)
