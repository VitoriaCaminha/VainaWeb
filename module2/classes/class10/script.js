// DOM

// const nomeDaVariavel = document.getElementeById('idDoElemento') // Pega um elemento do HTML e transforma em uma variável

/*
let topo = document.getElementById('cabecalho')
topo.style.border = 'solid 3px black' // Esse método não é o mais usado
*/

// Pegando um elemento pela TagName
// let element = document.getElementByTagName('TagName')[indice do elemento que quero pegar];

/*
let titulo = document.getElementsByTagName('h2')[0] // Também não é o mais utilizado
let subtitulo = document.getElementsByTagName('h2')[1]
let nome = 'principal'
titulo.style.color = 'white'
titulo.innerText = `Alterando o titulo ${nome} através do JavaScript`
*/

/*
let btn = document.getElementsByTagName('button')[0]
btn.innerText = 'Clique aqui'
btn.style.fontSize = '20px'
*/

/*
let corpo = document.body
corpo.style.backgroundColor = 'gray'
*/

/*
function clicar() {
  subtitulo.innerHTML = 'Mudei'
  subtitulo.style.color = 'red'
  corpo.style.backgroundColor = 'yellow'
}
*/

/*
let menu = document.getElementById('menu')
let items = menu.getElementsByClassName('list')

let data = [].map.call(items, item => item.textContent)
console.log(data)
*/

/*
let nodeList = document.querySelectorAll('.list')

// nodeList é uma lista de nós
// Array de matriz é uma lista de dados

let elements = Array.from(nodeList)
elements.pop()
*/



/*
// Seletor universal

let element = document.querySelector('*') // Vai retornar o primeiro elemento (no caso, HTML)

let elements = document.querySelectorAll('*')


// Seletor de tipo

let tituloPrincipal = document.querySelector('h1')

let substitulos = document.querySelectorAll('h2')


// Seletor pela class

let item = document.querySelector('.list')

let items = document.querySelectorAll('.list')


// seletor pelo id

let cabecalho = document.querySelector('#cabecalho')


// Seletor por atributo

let dado = document.querySelector('[alt]')
*/



// Tarefa extra

/*
Primeiro crie um botão no seu html selecione um elemento botão pelo
querySelector e crie uma função para que mude a cor de fundo da sua
página
*/

/*
agora crie uma lista no seu html selecione mais de um elemento li no
documento através
do querySelectorAll e transforme uma nodeList em uma array de matriz
*/

let documentBody = document.body

function userClick() {
 documentBody.style.backgroundColor = 'darkgray'
}

let nodeList = document.querySelectorAll('.list')
let elements = Array.from(nodeList)