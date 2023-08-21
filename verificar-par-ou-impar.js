function parouimpar(n) {
    let div = n % 2;
    if (div==0) {
        return 'par'
    } else {
        return 'impar';
    }

}
console.log(parouimpar(30))