/* Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:

1 - Preço do Combustivel;
2 - Gastos do combustivel do carro por KM;
3 - Distância em KM da viagem;

*/

const precoCombustivel = 5.09;
const kmPorLitros = 10;
const distanciaEmKm = 100;

const litrosConsumidos = distanciaEmKm / kmPorLitros;
const valorGasto = precoCombustivel * litrosConsumidos;

console.log (valorGasto.toFixed(2))