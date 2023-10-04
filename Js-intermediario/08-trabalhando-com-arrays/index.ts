//Um array é um objeto então ele pode ter propriedades e metodos 
let frutas = ['Banana', 'Maracuja', 'Maça', 'Pessego', 'Laranja', 'Morango']
let frutasTamanho = frutas.length
frutas.push('manga')// push adiciona um elemento em ultimo no array
frutas.unshift('Churrasco')//unshift adiciona um elemento no array em primeiro
frutas.shift()// remove o primeiro elemento do array
frutas.indexOf('banana')
console.log(frutas);

for (let i = 0; i < frutas.length; i++){
    console.log('Fruta: ' +frutas[i])
}

frutas.forEach(element => {
     
    console.log('Fruta: '+[element])
 })

