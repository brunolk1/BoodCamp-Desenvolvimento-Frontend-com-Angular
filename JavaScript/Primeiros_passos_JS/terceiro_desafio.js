/* 1) Faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificalção conforme a tabela abaixo.

Média = (nota 1 + nota 2 + nota 3) /3;

Classificação:
- Média menor que 5, reprovação; 
- Média entre 5 e 7, recuperação;
- Média acima de 7, passol de semestre;
*/


const nota1 = 8;
const nota2 = 7;
const nota3 = 7;

const media = (nota1 + nota2 + nota3) / 3;


if (media < 5) {
    console.log('Reprovado')
    console.log('Média', media.toFixed(2))
} else if (media >= 5 && media <= 7) {
    console.log('Recuperação');
    console.log('Média', media.toFixed(2))
} else if (media > 7) {
    console.log('Aprovado');
    console.log('Média', media.toFixed(2))
}


