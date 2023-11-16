function inverterVetor(vetor) {
    const tamanho = vetor.length;
    for (let i = 0; i < tamanho / 2; i++) {
        // Troca os elementos nas posições i e tamanho - 1 - i
        const temp = vetor[i];
        vetor[i] = vetor[tamanho - 1 - i];
        vetor[tamanho - 1 - i] = temp;
    }
}

// Declare e preencha o vetor com os valores desejados
const meuVetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Chame o procedimento para inverter a ordem dos elementos do vetor
inverterVetor(meuVetor);

console.log("Vetor invertido: " + meuVetor);