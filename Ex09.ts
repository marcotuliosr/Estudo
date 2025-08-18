/* 9. Senha Válida com while e if: Crie um programa que peça ao usuário para digitar uma
senha. Use um laço while para continuar pedindo a senha até que a senha digitada
seja "123456". */

import promptSync from "prompt-sync";

const prompt = promptSync();

let entrada = prompt("Digite a senha: ");

while (entrada != "123456") {
  console.log("Senha incorreta! Digite novamente a senha: ");
  entrada = prompt("Digite a senha: ");
}
console.log("Usuario logado com sucesso");
