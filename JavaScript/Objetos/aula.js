class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
    }

    descrever() {
        console.log('Meu nome é ${this.nome} e minha idade é ${this.idade}');
    }
}





function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho que ${p2.nome}`);
    } else if (p2.nome > p1.nome) {
        console.log(`${pe.nome} é mais velhos que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}

const bruno = new Pessoa('Bruno', 29);
const franciele = new Pessoa('Franciele', 27);

compararPessoas(bruno, franciele);