// operadores de Comparação

// = atribuição de tipo.
//      Ex: let nome = 'vitória'
// == verificar o valor.
//      Ex: let number = 2; let numero = '2'; console.log(number == numero)
// === verifica o tipo e o valor, ou seja, se os valores são estritamente iguais.
//      Ex: console.log(number === numero)
// != verifica se os valores comparados são diferentes
//      Ex: let dado = 35; let number = '66; console.log(dado != number)
// !== verifica se os valores e o tipo comparados são diferentes
//      Ex: console.log(dado !== number)
// ! inverte os valores (vamos usar apenas para valores booleanos por enquanto)
//      Ex: let dado = false; console.log(!dado)
// >= maior ou igual
//      Ex: let dado = 18; let number = 18.5; console.log(dado >= number)
// <= menor ou igual
//      Ex: console.log(dado <= number)
// obs: em valores binários, 0 é false e 1 é true



//Estrutura condicional (if)

// if significa e se

/*
    if(condição) {
        console.log('retorno')
    }
*/

// se a condição for verdadeira, executar tarefa

/*
    let age = true

    if(age = Boolean) {
        console.log('você está correto')
    }
*/

// else significa se não

/*
    if(condição) {
        console.log('condição verdadeira')
    } else {
        console.log('condição não verdadeira')
    }
*/

/* let joao = 16

    if(joao >= 18) {
        console.log('acesso permitido')
    } else {
        console.log('acesso negado')
    }
*/

/*
    let temLuz = true
    let isTrue = 'Acender as luzes'
    let isFalse = 'Aguarde a energia voltar'

    if(temLuz == true) {
        console.log(isTrue)
    } else {
        console.log(isFalse)
    }
*/



// Operadores lógicos

// && (and) seu resultado é true apenas se ambos os valores forem verdadeiros
// || (or) seu resultado é true se qualquer um dos valores for verdadeiro
// ! (not) inverte o valor dado a ele

//      Ex: console.log(true && false)
//      Ex: console.log(true && true)
//      Ex: console.log(true || false)
//      Ex: console.log(false || false)



//Criar uma condição que exiba uma mensagem no console se você fizer aniversário em Janeiro OU Dezembro

// let janeiro = true
// let dezembro = false

// if(janeiro == true || dezembro == true) {
//     console.log('Feliz aniversário')
// } else {
//     console.log('você não faz aniversário nesses meses')
// }