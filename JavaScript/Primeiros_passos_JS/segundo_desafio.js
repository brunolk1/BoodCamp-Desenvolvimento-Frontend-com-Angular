/* Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:

1 - Preço do etanol
2 - Preço da gasolina;
3 - O tipo de combustível que está no seu carro;
4 - Gastos do combustivel do carro por KM;
5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/
const precoEtanol = 3.50;
const precoGasolina = 5.09;
const tipoDeCombustivel = 'etanol';
const kmPorLitrosGasolina = 10;
const kmPorLitroEtanol = 7;
const distanciaEmKm = 100;

const litrosConsumidos = distanciaEmKm / kmPorLitroEtanol;


if (tipoDeCombustivel === 'etanol'){
    const valorGasto = precoEtanol * litrosConsumidos;
    console.log(valorGasto.toFixed(2)) 
} else{
    const valorGasto = precoGasolina * litrosConsumidos2;
    console.log(valorGasto.toFixed(2))
}