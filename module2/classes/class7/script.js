// Array

/*
let dados = ['daniel', 'joão', true, 21, undefined]
console.log(dados[1])
*/

/*
let dados = ["Debora", "Daniel", "Kelly", "Aline", "Pamela", "Larissa"]

for(let i = 0; i < dados.length; i += 2) {
    console.log(`O elemento de index ${i} é nome ${dados[i]}`)
}
*/

/*
let numbers = [1, 2, 90, 123, 33, 4, 6, 8, 9, 122, 98, 21, 1]

console.log(numbers.sort()) // sort arruma os elementos de uma array em ordem alfabética ou numérica

numbers.sort(function (a, b) {
    return (a - b) // não é uma subtração, é uma comparação
}) // Pode ser a - z, por exemplo
*/


/*
let languages = ["Java", "Python", "C"]
languages.unshift("JavaScript") // Adiciona um novo item na array na primeira posição
console.log(languages)

let city = ["Rio de Janeiro", "Belo Horizonte", "Rondonia"]
city.push("Nova Iguaçu") // Adiciona um valor no final da array
console.log(city)

let dados = [22, 33, 55, 66]
dados.shift() // Remove o primeiro item do array
console.log(dados)

let dados = [36, 55, 99, 61]
dados.pop() // Remove o último item do array
console.log(dados)

const nome = ["rob", "joca", "aline"]
nome.splice(1, 2) // Remove dois itens a partir do indice 1
console.log(nome)
// No splice, o primeiro parâmetro é o índice do elemento a ser removido e o segundo parâmetro é o número de elementos a ser removido.

nome.splice(0, 0, 'João') // Adiciona o item no array
console.log(nome)

nome.splice(1, 1, 'ivan') // Vai substituir o item do array
console.log(nome)
*/



// Crie um array que receba 5 itens e exiba no console.
// Utilize um método para adicionar um nome ao inicio do array.
// Utilize um método para remover o último nome do array.
// Utilize um método para adicionar dois nomes ao fim do array.
// Utilize um método para remover o primeiro nome do array.
// Utilize um método para organizar em ordem crescente o seguinte array:

/*
let dados = ['Renan', 'Larissa', 'Helio', 'Vitoria', 'Leonardo']
console.log(dados)

dados.unshift('Jordan')
console.log(dados)

dados.pop()
console.log(dados)

dados.splice(5, 2, "Jordan", "Beatriz")
console.log(dados)

dados.splice(0, 1)
console.log(dados)

dados.sort(function (a, z){
return(a, z)
})

console.log(dados.sort())
*/