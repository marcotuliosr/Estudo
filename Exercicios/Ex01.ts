/* 1. Par ou Ímpar com if: Crie uma função que receba um número como argumento e
retorne a string "Par" se o número for par e "Ímpar" se for ímpar. */

function parImpar(numero: number) {
    if (numero % 2 == 0) {
        return 'Par'
    } else {
        return 'Impar'
    };
}
console.log(parImpar(20));