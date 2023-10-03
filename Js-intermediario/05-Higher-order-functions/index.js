const calcularAnoDeNascimento = function (idade, mesDeNascimento, imprimir) {
    const mesAtual = 2
    let anoDeNascimento = 2023 - idade
    if (mesDeNascimento > mesAtual) anoDeNascimento--
    imprimir(anoDeNascimento)
}
let imprimirAnoDeNascimento = anoDeNascimento => {
    console.log('Seu ano de nascimento é: '+anoDeNascimento);
}
calcularAnoDeNascimento(33, 3, imprimirAnoDeNascimento)
//Uma higher order function é uma função que recebe uma outra como argumento, ou uma função que retorna outra função.