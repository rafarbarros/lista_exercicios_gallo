function somaVetores(vetor1, vetor2) {
    if (vetor1.length !== vetor2.length) {
        console.log("Os vetores devem ter o mesmo tamanho para realizar a soma.");
        return null;
    }

    const tamanho = vetor1.length;
    const resultado = [];

    for (let i = 0; i < tamanho; i++) {
        resultado[i] = vetor1[i] + vetor2[i];
    }

    return resultado;
}

// Declare e preencha os dois vetores com os valores desejados
const vetorA = [1, 2, 3, 4, 5];
const vetorB = [6, 7, 8, 9, 10];

// Chame a função para somar os vetores
const vetorResultado = somaVetores(vetorA, vetorB);

if (vetorResultado) {
    console.log("Vetor A: " + vetorA);
    console.log("Vetor B: " + vetorB);
    console.log("Vetor Resultado: " + vetorResultado);
}