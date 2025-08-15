/* 7. Soma de Pares com for e if: Use um laço for para iterar de 1 a 20 e, usando uma
condição if, some apenas os números pares. */

let atual = 0;

for (let numero = 1; numero <= 20; numero++) {
  if (numero % 2 == 0) {
    atual = atual + numero;
  }
}
console.log("Soma", atual);
