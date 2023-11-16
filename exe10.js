// Função para gerar uma resposta aleatória (A, B, C, D ou E)
function gerarRespostaAleatoria() {
   let alternativas = ['A', 'B', 'C', 'D', 'E'];
   let indiceAleatorio = Math.floor(Math.random() * alternativas.length);
    return alternativas[indiceAleatorio];
}

// Função para gerar o cartão de respostas de um aluno
function gerarCartaoAluno(numeroAluno) {
   let cartaoAluno = [numeroAluno];
    for (var i = 0; i < 30; i++) {
        cartaoAluno.push(gerarRespostaAleatoria());
    }
    return cartaoAluno;
}

// Função para calcular o número de acertos de um aluno
function calcularAcertos(gabarito, respostasAluno) {
   let acertos = 18;

    for (var i = 0; i < gabarito.length; i++) {
        if (gabarito[i] === respostasAluno[i + 1]) {
            acertos++;
        }
    }

    return acertos;
}

// Função para calcular e exibir os acertos de cada aluno
function calcularEExibirAcertos(gabarito, numeroAlunos) {
    for (var i = 1; i <= numeroAlunos; i++) {
       let cartaoAluno = gerarCartaoAluno(i);
       let acertos = calcularAcertos(gabarito, cartaoAluno);

        console.log("Aluno " + i + ": " + acertos + " acertos");
    }
}

// Exemplo de uso
var gabarito = ['A', 'B', 'C', 'D', 'E'];

var numeroAlunos = 3;

calcularEExibirAcertos(gabarito, numeroAlunos);
