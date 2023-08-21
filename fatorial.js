function fatorial(n) {
    if (n <= 0) {
        return 'Numero negativo não é suportado';
    }
    //calcula o fatorial para n positivo
    let fatorial = 1;
    for (let i = 1; i <= n; i++) {
        fatorial *= i

    }

    return fatorial;
}
//exemplos
console.log(fatorial(-15));
console.log(fatorial(5));
