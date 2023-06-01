console.log (" ** Soma de dois numeros ** ");

let primeiroNumero = prompt("Digite o primeiro número");
let segundoNumero = prompt("Digite o segundo número");

let soma = parseInt(primeiroNumero) + parseInt(segundoNumero);

// prompt sempre retorna string e o parseint reconhe como numero 


console.log("Soma: ", soma);
console.log("\n");
console.log("Tipo da variável 'soma'", typeof soma);

/*tipo de variaveis

String
Bolean
number*/

// let=var sempre usar o Let no Javascript porque o let obedece o escopo de função e bloco
/* let permite que você declare variáveis limitando seu escopo no bloco, instrução, ou em uma expressão na qual ela é usada. Isso é inverso da keyword var (en-US), que define uma variável globalmente ou no escopo inteiro de uma função, independentemente do escopo de bloco.*/
// constante o const não pode ser reatribuído o valor e respeita o escopo e a função