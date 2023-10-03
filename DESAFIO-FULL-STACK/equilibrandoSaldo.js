const saldoAtual = parseFloat(gets());
const valorDeposito = parseFloat(gets());
const valorRetirada = parseFloat(gets());

//TODO: Calcular o saldo atualizado de acordo com a descrição deste desafio.
if (saldoAtual>1){
  let valorFinal=saldoAtual+valorDeposito
  return valorFinal;
}
//TODO: Imprimir o a saída de conforme a tabela de exemplos (uma casa decimal).
print(parseFloat(valorFinal) - parseFloat(valorRetirada));