function soma(n) {
 let soma=0
    for (let i = 2; i <= n; i += 2) {
        soma += i
    }
    return soma;
} 
console.log(soma(10));