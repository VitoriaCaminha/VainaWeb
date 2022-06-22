function message() {
    console.log('Hello functions!')
}

message()

function myName(devName) {
    console.log(`My name is ${devName}.`)
}

myName('Vitória')

function myDatas(devName, devAge, devFavoriteMusicStyle) {
    console.log(`My name is ${devName}, I am ${devAge} years old and my favorite genre of music is ${devFavoriteMusicStyle}.`)
}

myDatas('Vitória', '23', 'rock')

function myOtherDatas(film, music) {
    console.log(`My favorite film is ${film} and my favorite music is ${music}.`)
}

myOtherDatas('CODA', 'Panic Station (MUSE)')



// Bônus

function triple(number) {
    console.log(number * 3)
}

triple(1)