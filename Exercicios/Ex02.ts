/* 2. Maior de Três com if: Crie uma função que receba três números e retorne o maior
entre eles. */

function maiorDeTres(valor1: number, valor2: number, valor3: number) {
  if (valor1 > valor2 && valor1 > valor3) {
    return "Valor 1 e o maior: " + valor1;
  } else if (valor2 > valor1 && valor2 > valor3) {
    return "Valor 2 e o maior: " + valor2;
  } else {
    return "Valor 3 e o maior: " + valor3;
  }
}
console.log(maiorDeTres(10, 5, 8));
