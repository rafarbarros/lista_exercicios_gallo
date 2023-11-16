// Função para criar um vetor com 20 números inteiros aleatórios
function criarVetor() {
  let vetor = [];
  for (let i = 0; i < 20; i++) {
    vetor.push(Math.floor(Math.random() * 100)); // Gera números inteiros aleatórios entre 0 e 99
  }
  return vetor;
}

// Função para apresentar o resultado da multiplicação dos valores pelos índices
function resultadoMultiplicacao(vetor) {
  console.log("Resultado da multiplicação dos valores pelos índices: " );
  vetor.forEach(function(valor, indice) {
    let resultado = indice * valor;
    console.log("Índice" + indice + " : " + valor + " * " + indice + " = " + resultado);
    
  });

}

let vetor = criarVetor();

// Mostrar o resultado da multiplicação pelos índices
resultadoMultiplicacao(vetor);
