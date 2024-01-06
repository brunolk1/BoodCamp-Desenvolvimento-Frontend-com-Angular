/*
1 - Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustivel por kilometro rodado.
Crie um método que dado a quantidade de quilometros e o preço do combustível nos dê o valor gastoem reais para realizar este percurso.*/

class escolherCarros {
    marca;
    cor;
    mediaDeGastos;

    constructor (marca, cor, mediaDeGastos) {
        this.marca = marca;
        this.cor = cor;
        this.mediaDeGastos = mediaDeGastos;
    }

    calcularGastoDePercurso (distanciaEmKm, precoCombustivel) {
        return distanciaEmKm * this.mediaDeGastos * precoCombustivel;
    }
        

}


const onix = new escolherCarros ('Chevrolet', 'prata', 1 / 9);
console.log(onix.calcularGastoDePercurso(73 , 5))

const corolla = new escolherCarros ('Toyota', 'Preto', 1/20);
console.log(corolla.calcularGastoDePercurso(73 , 5))