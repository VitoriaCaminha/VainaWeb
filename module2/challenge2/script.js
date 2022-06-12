let userAge = 23
let human = false
let userBirthday = 'julho'

if (userAge > 18) {
    console.log('Você é maior de idade')
} else {
    console.log('Você é menor de idade')
}

if (userAge > 18 && human == true) {
    console.log('Você é uma pessoa maior de idade')
} else {
    console.log('Como assim você não é uma pessoa?')
}

if (userBirthday == 'janeiro' || userBirthday == 'dezembro') {
    console.log('Você faz aniversário em janeiro ou dezembro')
} else {
    console.log('Você faz aniversário em outro mês do ano')
}



// Desafios bônus

let userName = 'Vitória'
let userLastName = 'Caminha'

if (userName[0] == 'R' || userName[0] == 'r') {
    console.log('Seu nome começa com a letra R')
} else {
    console.log('Seu nome não começa com a letra R')
}

if (userLastName.length > 6 || userName[0] == 'E' || userName[0] == 'e') {
    console.log('Seu sobrenome tem mais de 6 letras ou seu nome começa com a letra E')
} else {
    console.log('Seu sobrenome tem 6 letras ou menos ou seu nome não começa com a letra E')
}