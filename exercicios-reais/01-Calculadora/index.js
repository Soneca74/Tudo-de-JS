function Calculadora() {
    var primeiroValor = document.getElementById("primeiroValor").value;
    var segundoValor = document.getElementById("segundoValor").value;
    var calculo = document.getElementById("calculo").value;
    if (calculo=="soma") {
        let resultado = Number.parseInt(primeiroValor) + Number.parseInt(segundoValor);
        alert('O resultado é: ' + resultado);
    }if (calculo=="sub") {
        let resultado = Number.parseInt(primeiroValor) - Number.parseInt(segundoValor);
        alert('O resultado é: ' + resultado);
    } else {
        
    }
    /*switch (calculo) {
        case soma:
             resultado=primeiroValor+segundoValor;
            alert('Resultado:'+resultado);
            break;
    
        default:
            break;
    }*/
}