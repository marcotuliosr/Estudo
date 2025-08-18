/* 10. Cálculo de Média com for e if: Crie uma função que receba um array de notas. Use
um laço for para somar as notas e retorne a média. Se a média for maior ou igual a 7,
imprima "Aprovado", caso contrário, imprima "Reprovado". */

let valores: number[] = [9, 8, 9];
let soma: number = 0;

for (let i = 0; i < valores.length; i++) {
  soma = soma + valores[i]!;
}
let media = soma / valores.length;
if (media >= 7) {
  console.log("Aprovado");
} else {
  console.log("Repovado");
}
