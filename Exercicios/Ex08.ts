/*8. Busca de Item em Array com for e if: Crie uma função que receba um array de strings
e uma string de busca. A função deve usar um for para percorrer o array e um if para
verificar se a string de busca está presente. Se encontrar, deve retornar true, caso
contrário, false.
*/

let palavras: string[] = ["janta", "almoco"];
let busca: "janta";

function buscaItem(palavras: string[], busca: string) {
  for (let i = 0; i < palavras.length; i++) {
    let palavraAtual = palavras[i];
    if (palavraAtual === busca) {
      return true;
    }
  }
  return false;
}

console.log(buscaItem(palavras, "janta"));
console.log(buscaItem(palavras, "comida"));
