/* 2) O IMC - Indice de Massa Corporal é i, critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta.

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adulto Condição:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 obeso;
- Acima de 40 obesidade Grave;
*/ 

const peso = 78;
const altura = 1.75;

const imc = peso / Math.pow(altura, 2);

if (imc < 18.5) {
    console.log('Abaixo do Peso');
    console.log('IMC', imc.toFixed(0));

} else if (imc >= 18.5 && imc < 25) {
    console.log('Peso Normal');
    console.log('IMC', imc.toFixed(0));
} else if (imc >= 25 && imc < 30){
    console.log('Acima do Peso');
    console.log('IMC', imc.toFixed(0));
} else if (imc >= 30 && imc < 40) {
    console.log('Obeso');
    console.log('IMC', imc.toFixed(0));
} else {
    console.log('Obesidade Grave');
    console.log('IMC', imc.toFixed(0));
}



