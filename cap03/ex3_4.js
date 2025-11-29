const prompt = require('prompt-sync')();
const pesoRacao = Number(prompt("Informe o peso da ração: "));
const consumoRacao = Number(prompt("Consumo de ração em gramas, por dia: "));
const pesoEmKilo = pesoRacao * 1000;
const duracao = Math.floor(pesoEmKilo / consumoRacao);
const sobra = pesoEmKilo - (consumoRacao * duracao)

console.log(`Peso da Ração (kg): ${pesoRacao}\nConsumo Diário (gr): ${consumoRacao}\nDuração: ${duracao}\nSobra: ${sobra}`)


