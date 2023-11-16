// Função para gerar um vetor de 10 elementos reais aleatórios
function gerarVetor() {
    let vetor = [];
    for (let i = 0; i < 10; i++) {
        // Gera um número aleatório e o multiplica por 100 para obter valores mais amplos
        let elemento = Math.floor(Math.random() * 100);
        
        vetor.push(elemento);
    }
    return vetor;
}

// Função para calcular a média aritmética
function calcularMedia(vetor) {
    let soma = vetor.reduce((acc, elemento) => acc + elemento, 0);
    return soma / vetor.length;
}

// Função principal
function main() {
    // Gerar o vetor aleatório
    let vetor = gerarVetor();

    // Calcular a média
    let media = calcularMedia(vetor);

    // Exibir o vetor e a média
    
    
    console.log("Vetor aleatório:", vetor);
    console.log("Média aritmética:", media.toFixed(2));
}

// Chamar a função principal
main();
