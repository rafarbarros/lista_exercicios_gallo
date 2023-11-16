const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let temperaturas = [];
let horas = [];

function lerTemperatura() {
  rl.question('Digite a temperatura em graus Celsius: ', (temperatura) => {
    rl.question('Digite o horário da temperatura (HH:MM): ', (hora) => {
      temperaturas.push(parseFloat(temperatura));
      horas.push(hora);

      if (temperaturas.length < 24) {
        lerTemperatura();
      } else {
        exibirResultados();
        rl.close();
      }
    });
  });
}

function exibirResultados() {
  const maiorTemperatura = Math.max(...temperaturas);
  const menorTemperatura = Math.min(...temperaturas);
  const indiceMaiorTemperatura = temperaturas.indexOf(maiorTemperatura);
  const indiceMenorTemperatura = temperaturas.indexOf(menorTemperatura);
  const mediaTemperaturas = temperaturas.reduce((total, temp) => total + temp) / temperaturas.length;

  console.log(`Maior temperatura: ${maiorTemperatura}°C (Hora: ${horas[indiceMaiorTemperatura]})`);
  console.log(`Menor temperatura: ${menorTemperatura}°C (Hora: ${horas[indiceMenorTemperatura]})`);
  console.log(`Média das temperaturas: ${mediaTemperaturas.toFixed(2)}°C`);
}

lerTemperatura();
