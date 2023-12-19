function escrevaMeuNome(nome) {
    return ('Meu nome é ' + nome);
}






function verificarIdade(idade) {
    if (idade < 18) {
        console.log( 'Menor de idade')
    } else {
        console.log(escrevaMeuNome('Bruno Rodrigues ') + 'Maior de idade' )
    }

}

verificarIdade(29)