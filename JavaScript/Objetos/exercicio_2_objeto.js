/*
2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso, altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor do seu IMC;

IMC em adulto Condição:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 obeso;
- Acima de 40 obesidade Grave;
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

    calcularIMC () {
        return this.peso / (this.altura * this.altura);
    }

    classificarIMC () {
        const imc = this.calcularIMC();

        if (imc < 18.5) {
            return ('Abaixo do Peso');
        } else if (imc >= 18.5 && imc < 25) {
            return ('Peso Normal');
        } else if (imc >= 25 && imc < 30 ) {
            return ('Acima do Peso');
        } else if (imc >= 30 && imc < 40) {
            return ('Obeso');
        } else {
            return ('Obesidade Grave')
        }
    }

}

const jose = new pessoa ('Jose', 70, 1.75);
console.log (jose.classificarIMC ());

const bruno = new pessoa ('Bruno', 130, 1.75)
console.log (bruno.classificarIMC ());
