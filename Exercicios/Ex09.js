"use strict";
/* 9. Senha Válida com while e if: Crie um programa que peça ao usuário para digitar uma
senha. Use um laço while para continuar pedindo a senha até que a senha digitada
seja "123456". */
Object.defineProperty(exports, "__esModule", { value: true });
var prompt_sync_1 = require("prompt-sync");
var prompt = (0, prompt_sync_1.default)();
var entrada = prompt("Digite a senha: ");
while (entrada != "123456") {
    console.log("Senha incorreta! Digite novamente a senha: ");
}
console.log("Usuario logado com sucesso");
