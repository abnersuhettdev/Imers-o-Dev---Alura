let numSecreto = parseInt(Math.random() * 1001);
let chute;

while (chute != numSecreto) {
  chute = prompt("Digite um número entre 0 e 1000");
  //se o chute for igual ao número secreto
  if (chute == numSecreto) {
    alert("Acertou!");
  } else if (chute > numSecreto) {
    alert("Errou... o número secreto é menor");
  } else if (chute < numSecreto) {
    alert("Errou... o número secreto é maior");
  }
}
