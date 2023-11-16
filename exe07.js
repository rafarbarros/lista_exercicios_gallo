function separarParesImpares(vetor) {
    let pares = [];
    let impares = [];

    for (let i = 0; i < vetor.length; i++) {

        if (vetor[i] % 2 === 0) {
            pares.push(vetor[i]);
        } else {
            impares.push(vetor[i]);
        }

    }

    console.log("Elementos Pares: " + pares.join(', '));
    console.log("Elementos Ímpares: " + impares.join(', '));
}

// Exemplo de uso:
let meuVetor = [];

for (let i = 0; i < 10; i++) {
    meuVetor.push(Math.floor(Math.random() * 100) + 1);
}
separarParesImpares(meuVetor);