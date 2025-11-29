const prompt = require('prompt-sync')();
const nome = prompt("Nome do funcionário: ");
const salario = Number(prompt("Slário R$: "));
const anosTrabalhados = Number(prompt("Anos de trabalho na empresa: "));

if(salario % anosTrabalhados === 0){
    const quadrenio = anosTrabalhados / 4
    const novoSalario = ((quadrenio * 0.1) * salario) + salario
    console.log(novoSalario)
    console.log(`O funcionário ${nome} trabalha na empresa a ${anosTrabalhados} anos o salário dele é ${salario}.\nPorém como aumentamos o slário dos nossos funcionários a cada 4 anos ele receberá u aumento de ${quadrenio}%.\nO novo salário dele é ${novoSalario}`)
} else if(salario % anosTrabalhados !== 0){
    const quadrenio = anosTrabalhados % 4
    const novoSalario = ((quadrenio * 0.1) * salario) + salario
    console.log(`O funcionário ${nome} trabalha na empresa a ${anosTrabalhados} anos o salário dele é ${salario}.\nPorém como aumentamos o slário dos nossos funcionários a cada 4 anos ele receberá um aumento de ${quadrenio}%.\nO novo salário dele é ${novoSalario}`)
}