/* Elabore um algoritimo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os codigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Codigo Condição de pagamento:
- 1 À vista Débito, recebe 10% de desconto;
- 2 À vista no Dinheiro ou Pix, recebe 15% de desconto;
- 3 Em duas vezes, preço normal de etiqueta sem juros;
- 4 Acima de duas vezes, preço normal de etiqueta mais 10% de juros;
*/

const precoEtiqueta = 100.00;
const formaDePagamento = 4;

if (formaDePagamento === 1) {
    console.log ('Valor a ser pago' );
    console.log (precoEtiqueta - (precoEtiqueta * 0.1));
    
} else if (formaDePagamento === 2) {
    console.log ('Valor a ser pago');
    console.log (precoEtiqueta - (precoEtiqueta * 0.15));
} else if (formaDePagamento === 3) {
    console.log ('Valor a ser pago');
    console.log (precoEtiqueta);
}else {
    console.log ('Valor a ser pago');
    console.log (precoEtiqueta + (precoEtiqueta * 0.1));
}

