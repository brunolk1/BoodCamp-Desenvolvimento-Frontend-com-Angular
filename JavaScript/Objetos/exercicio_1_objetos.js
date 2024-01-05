/*
1 - Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustivel por kilometro rodado.
Crie um método que dado a quantidade de quilometros e o preço do combustível nos dê o valor gastoem reais para realizar este percurso.*/

class escolherCarros {
    marca;
    cor;
    mediaDeGastos;

    constructor (marca, cor) {
        this.marca = marca;
        this.cor = cor;
        this.mediaDeGastos = (5.09 * (100/ 9));
    }

        resultado() {
            console.log(`Marca do carro ${this.marca} e a cor do carro é ${this.cor} e o consumo do carro vai é ${this.mediaDeGastos}`);
        }

        

}
this.mediaDeGastos = (5.09 * (100/ 7));

const onix = new escolherCarros ('onix', 'prata');
const corolla = new escolherCarros ('Corolla', 'Preto')

console.log(onix,);
console.log(corolla);