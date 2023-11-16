function realizarOperacoes(vetor1, vetor2, operacoes) {
    // Verifica se os tamanhos dos vetores são iguais
    if (vetor1.length !== vetor2.length || vetor2.length !== operacoes.length) {
        console.log("Os vetores fornecidos não têm o mesmo tamanho.");
        return;
    }

    // Vetor para armazenar os resultados
    let resultados = [];

    // Loop através dos vetores
    for (let i = 0; i < vetor1.length; i++) {
        // Verifica a operação desejada e realiza a operação correspondente
        switch (operacoes[i]) {
            case '+':
                resultados.push(vetor1[i] + vetor2[i]);
                break;
            case '-':
                resultados.push(vetor1[i] - vetor2[i]);
                break;
            case '*':
                resultados.push(vetor1[i] * vetor2[i]);
                break;
            case '/':
                // Verifica se o divisor não é zero antes de realizar a divisão
                if (vetor2[i] !== 0) {
                    resultados.push(vetor1[i] / vetor2[i]);
                } else {
                    console.log("Divisão por zero encontrada. O resultado para esta posição será indefinido.");
                    resultados.push(undefined);
                }
                break;
            default:
                console.log("Operação inválida na posição " + i + ". Utilizando zero como resultado.");
                resultados.push(0);
        }
    }

    // Exibe o vetor de resultados
    console.log("Resultados: " + resultados.join(', '));
}

// Exemplo de uso:
let vetor1 = [];

for (let i = 0; i < 10; i++) {
    vetor1.push(Math.floor(Math.random() * 100) + 1);
}
let vetor2 = [];

for (let i = 0; i < 10; i++) {
    vetor2.push(Math.floor(Math.random() * 100) + 1);
}
let operacoes = ['+', '-', '*', '/', '+', '-', '*', '/', '+', '-'];

console.log("Resultados " + resultados + ": ", vetor1, vetor2);

realizarOperacoes(vetor1, vetor2, operacoes);
