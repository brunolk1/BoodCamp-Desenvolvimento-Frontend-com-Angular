/*
2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso, altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor do seu IMC;
*/
class pessoa {
    nome;
    peso;
    altura;

    constructor (nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC (peso, altura) {
        return peso / (altura * altura);
    }

}

const jose = new pessoa ('Jose', '70', '1.75');
console.log (jose.calcularIMC (70, 1.75));

const bruno = new pessoa ('Bruno', '130', '1,75')
console.log (bruno.calcularIMC (130, 1.75));
