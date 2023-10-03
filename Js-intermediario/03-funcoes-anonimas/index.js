//Funções Anonimas servem para a gente guardar o valor ou resultado dessa função em uma variavel e depois utilizar ela algum lugar do codigo.
// esse aqui é um exemplo
/*const somar = function (numero1, numero2) {
    
    const subtracao = function (n1,n2) {
        return n1-n2
    }
    
 
    return numero1 + numero2

}

console.log(somar(12, 3));
console.log(subtracao(20,30))
*/
//Caso real de aplicação
//1. Passando funções como argumentos para outras funções:
//
//
//5. Funções de filtro (Array.prototype.filter):
/*let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
//// Usamos o método filter com uma função anônima para filtrar números pares.
let numeroPar = numeros.filter(function (numero) {
    return numero % 2 === 0;
});
console.log(numeroPar); */
let produtos = [cafe={ nome: 'café', valor: 2 }, { nome:'sanduiche', valor:6 }, {nome: 'suco', valor: 8 }]
let formaDePagamento = ['debito', 'credito', 'dinheiro']
let carrinhoDeCompras = produtos.filter(function (pagamento) {
    console.log(pagamento)

    
});
console.log(carrinhoDeCompras);