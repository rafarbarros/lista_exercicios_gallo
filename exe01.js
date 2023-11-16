function somaElementos(vetor) {
    if (vetor.length !== 15) {
        console.log("O vetor deve conter exatamente 15 elementos.");
        return;
    }

    let soma = 0;
    for (let i = 0; i < vetor.length; i++) {
        soma += vetor[i];
    }

    console.log("A soma dos elementos do vetor é: " + soma);
}

// Declare e preencha o vetor com os valores desejados
const meuVetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// Chame o procedimento para calcular a soma dos elementos do vetor
somaElementos(meuVetor);