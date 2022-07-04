/*
let elements = Array.from(nodeList) // Modo mais antigo de desestruturação
*/

/*
const [input1, input2] = document.querySelectorAll('input') // Forma mais comum de desestruturação
// Eu transformo uma nodeList em array
// Posso usar let, var ou const

const img = document.querySelector('img')
img.classList.add('photo')

function handleChange() {
  if (input1.value && input2.value.length >= 6) {
    img.classList.remove('photo')
    img.classList.add('show')
    img.removeAttribute('src')
    img.setAttribute('src', 'https://www.frasesparawhats.com.br/images/blog/2021/06/22/muita-paz-no-nosso-caminho_189004fc7af54f46c4f00d5ade508f0c.jpg')
  } else {
    img.classList.remove('show')
    img.classList.add('photo')
  }
}

// input1.addEventListener('evento' nomeDaFunção) // estrutura básica

input1.addEventListener('input', handleChange)
input2.addEventListener('input', handleChange)
*/

/*
const Inputs = document.querySelector('input')
Inputs.forEach(function(input){
  input.addEventListener('input', handleChange)
})

function handleChange() {
  let [input1, input2] = Inputs // Nesse caso, tem que ser let, porque Inputs é uma const
  if (input1.value && input2.value.length >= 6) {
    img.classList.remove('photo')
    img.classList.add('show')
    img.removeAttribute('src')
    img.setAttribute('src', 'https://www.frasesparawhats.com.br/images/blog/2021/06/22/muita-paz-no-nosso-caminho_189004fc7af54f46c4f00d5ade508f0c.jpg')
  } else {
    img.classList.remove('show')
    img.classList.add('photo')
  }
}
*/

/*
//Crie um evento de click através do javaScript sem usar o atributo
onclick, e ao clicar no botão ativar uma classe que dá estilo e forma a uma div

//agora crie um input que ao ter mais de 6 letras torne visível um texto.
*/


const box = document.querySelector('div')
const botao = document.querySelector('button')

botao.addEventListener('click', function () {
  box.classList.add('caixa')
})

const input1 = document.querySelector('input')
const texto = document.querySelector('p')

function handleChange() {
  if(input1.value.length >= 6) {
    texto.classList.add('photo')
  }
}