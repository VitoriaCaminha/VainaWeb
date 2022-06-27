// Revisão de funções

/*
let numero1 = Number(prompt('Insira um número'))
let numero2 = Number(prompt('Insira outro número'))
let result

function calculadora() {
    const operacao = prompt(`Escolha a sua operação:\n 1- soma(+)\n 2- subtração(-)\n 3- multiplicacao\n 4- Divisão`)

    if (operacao == 1) {
        soma()
    } else if (operacao == 2) {
        subtracao()
    } else if (operacao == 3) {
        multiplicacao()
    } else if (operacao == 4) {
        divisao()
    } else {
        window.alert('Desculpe, você inseriu um número incorreto')
    }
}

function soma() {
    result = numero1 + numero2
    alert(`${numero1} + ${numero2} = ${result}`)
}

function subtracao() {
    result = numero2 - numero1
    alert(`${numero2} - ${numero1} = ${result}`)
}

function multiplicacao() {
    result = numero1 * numero2
    alert(`${numero1} * ${numero2} = ${result}`)
}

function divisao() {
    result = numero1 / numero2
    alert(`${numero1} / ${numero2} = ${result}`)
}

calculadora()
*/

// Aula inicial sobre DOM


// Revisão de array

/*
let cadastro = {
    nome: 'Helio',
    idade: 19,
    endereco: 'Nova Iorque'
}

cadastro.corFavorita = 'yellow'
delete cadastro.idade
*/

/*
let cadastro = [{
    nome: 'Helio',
    idade: 19,
    endereco: 'Maranhao',
    cor: 'yellow'
}, {
    nome: 'Pamela',
    idade: 22,
    endereco: 'buenos aires',
    cor: 'green'
}, {
    nome: 'Stefany',
    idade: 22,
    endereco: 'Las Vegas',
    cor: 'red'
}, {
    nome: 'Isaque',
    idade: 20,
    endereco: 'Paris',
    cor: 'Brown'
}]

cadastro[0].amigos = ["Vitória", "Debora"]
cadastro[1].amigos = ["Leandro", "Rafael"]
cadastro[2].amigos = ["Aline", "Leno"]
cadastro[3].amigos = ["Joao", "Jordan"]

cadastro[2].amigos.splice(1, 1, "Vitória", "Joao")

console.log(cadastro)
*/