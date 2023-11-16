function rolarDado() {
    return Math.floor(Math.random() * 6) + 1;
}
// Gerar 50 resultados aleatórios e armazenar em um vetor
let resultados = [];
for (let i = 0; i < 50; i++) {
    resultados.push(rolarDado());
}
// Armazenar a contagem de ocorrências
let contagem = {};

// Contagem de ocorrências
resultados.forEach(function (face) {
    contagem[face] = (contagem[face] || 0) + 1;
});

// Número total de lançamentos
let totalLancamentos = resultados.length;

// Exibir resultados
for (let face in contagem) {
    if (contagem.hasOwnProperty(face)) {
        let ocorrencias = contagem[face];
        let porcentagem = (ocorrencias / totalLancamentos) * 100;
        console.log("Face " + face + ": " + ocorrencias + " ocorrências, " + porcentagem.toFixed(2) + "%");
    }
}