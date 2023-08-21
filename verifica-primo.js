function primo(n) {
    if (n <= 1) {
        return 'numero invalido'
    }
    for (let i = 2; i <= Math.sqrt(n); i++){
        //esse if faz o calculo e a validação se é primo ou não 
        if (n % i === 0) {
            return 'Esse numero não é primo!'
            break;
        } 
    }
   
        return 'Esse numero é primo'
    
}
// com operadores logicos foi possivel validar se 2 é primo entre outros. O código ficou mais acertivo
//pseudocódigo\\
// A função primo que recebe N. Se N for menor igual a 1 retorne Numero invalido. 'let'primo é verdadeiro. para (let index=2; index vai ate a raiz quadrada de (n);index++) se o resto da divisão de n e i for igual a 0 o primo fica falso e interrompe o loop fecha o loop. se primo for igual a falso retorna esse numero não é primo se não for retorne Esse numero não é primo.
console.log(primo(17))