// Inicialização do estado do cinema
var cinema = [];
var totalPoltronas = 4 * 20;

// Função para inicializar o estado do cinema (todas as poltronas vazias)
function inicializarCinema() {
    for (var i = 0; i < 4; i++) {
        cinema[i] = Array(20).fill(false); // false representa uma poltrona vazia
    }
}

// Função para exibir o estado atual das poltronas
function exibirPoltronas() {
    console.log("Estado das poltronas:");
    for (var i = 0; i < 4; i++) {
        console.log("Fileira " + String.fromCharCode(65 + i) + ": " + cinema[i].map(poltrona => poltrona ? 'X' : '_').join(' '));
    }
}

// Função para comprar uma poltrona
function comprarPoltrona(fileira, numeroPoltrona) {
   let indexFileira = fileira.charCodeAt(0) - 65; // Convertendo a letra da fileira para um índice (A=0, B=1, C=2, D=3)

    if (cinema[indexFileira] && cinema[indexFileira][numeroPoltrona - 1] === false) {
        cinema[indexFileira][numeroPoltrona - 1] = true; // Marcar a poltrona como ocupada
        console.log("Compra realizada com sucesso! Poltrona " + fileira + numeroPoltrona + " vendida.");
    } else {
        console.log("Poltrona ocupada! Escolha outra poltrona.");
    }
}

// Função para exibir o total de poltronas vazias e ocupadas
function exibirTotalPoltronas() {
   let poltronasOcupadas = cinema.flat().filter(poltrona => poltrona).length;
   let poltronasVazias = totalPoltronas - poltronasOcupadas;

    console.log("Total de poltronas ocupadas: " + poltronasOcupadas);
    console.log("Total de poltronas vazias: " + poltronasVazias);
}

// Inicializar o cinema
inicializarCinema();

// Exibir as poltronas iniciais
exibirPoltronas();

// Exemplo de compra de poltrona
comprarPoltrona('A', 5);

// Exibir as poltronas após a compra
exibirPoltronas();

// Exibir o total de poltronas vazias e ocupadas
exibirTotalPoltronas();
