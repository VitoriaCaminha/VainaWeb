/*
let a = 2
let b = 1

a =- b // Resultado: -1
a -= b // Resultado: 1
*/

/*
// Quem é melhor

let frase = 'Gatos são os melhores amigos dos humanos'

sintaxe: variável = variável.replace('trocar', 'o que vou colocar no lugar')

frase = frase.replace('humanos', 'Cães')

console.log(frase)

// .replace troca um pedaço da sua string por outra coisa => propriedade de string
*/



//revisão if else

/* let nome = 'João'

if(nome.length < 6){
    console.log('seu nome tem menos de 6 letras')
}else{
    console.log('seu nome tem mais de 6 letras')
} */

// .lenght contar cada unidade do código na string => propriedade de string



/* 

if(nome.substring(0,1) === 'L'){
    console.log('seu nome começa com L')
}else{
    console.log('seu nome não começa com L')
}

console.log(nome.substring(0,4)) */

// substring  percorre as unidade de uma string
//substring(inicia, para)


/* let nome = 'João' 
if(nome[0] === 'J'){
    console.log('verdade')
} */




//Estrutura Basica de uma function

/* function nomeDaFunction(){
    tarefa
} */


/* function batata(){
    console.log('Olá, Mundo!')
}
batata()  *///funções em javascript são invocadas utilizando o operador ()


//Passamos um parâmetro na criação da função para que ela seja usada de forma dinâmica pel

//colocando valor em um paramentro
/* function mostrarNome(nome){
    console.log(`Meu nome é ${nome}`)
}


// o argumento é a resposta é a resposta que o parâmetro espera
mostrarNome('Aluno')
mostrarNome('Jorge')
mostrarNome('Paloma') */
//os parâmetros invocados precisam estar na mesma ordem que o parâmetro da função



//chamando o valor do parametro pela variavel
/* let mostrarNome = 'Leno'

function nomeDinamico(nome){
   console.log(`Meu nome é ${nome}`)
}
nomeDinamico(mostrarNome) */

/* //soma
function soma(x, y){
    return x + y
}

let result = soma(5,6)
console.log(result)



//multiplicação
function double(number){
    return number*2
}

console.log(double(3)) */

// Estrutura básica de uma function



/*
function nomeDaFunction() {
    tarefa
}

function oi() {
    console.log('Olá, mundo')
}

oi()

function mostrarNome(nome) {
    console.log(`Meu nome é ${nome}`)
}

mostrarNome('Aline')

function soma(x, y) {
    return x + y
}

let result = soma(5, 6)
console.log(result)

function double(number){
    return number*2
}

console.log(double(3))
*/

function socorro() {
    console.log('SOCORRO')
}

socorro()

function firstName(nome) {
    console.log(`Seu nome é ${nome}.`)
}

firstName('Renan, Hamom, Jefferson, Jordan, Vitória')

function dados(nome, profissao, cidade) {
    console.log(`Seu nome é ${nome}. Você mora em ${cidade} e sua profissão é ${profissao}.`)
}

dados('Renan', 'desesperado', 'Rio de Janeiro')