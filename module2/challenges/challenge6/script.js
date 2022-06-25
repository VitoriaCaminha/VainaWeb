const data = {
    devName: 'Vitória',
    devAge: 23,
    devArea: 'Frontend'
}

data.devCountry = 'Brazil'

delete data.devArea

console.log(data)

const datas = [{
    devName: 'Vitória',
    devAge: 23,
    devPhone: 985629046,
    devFriends: ["Leandro", "Paula", "Ruhan", "Matheus"]
}, {
    devName: 'Leandro',
    devAge: 32,
    devPhone: 992643052,
    devFriends: ["Stefany", "Paula", "Vitória", "Camila"]
}, {
    devName: 'Paula',
    devAge: 35,
    devPhone: 993412743,
    devFriends: ["Leandro", "Jordan", "Debora", "Junior"]
}, {
    devName: 'Ruhan',
    devAge: 28,
    devPhone: 985743582,
    devFriends: ["Vitória", "João", "Breno", "Marcela"]
}, {
    devName: 'Matheus',
    devAge: 22,
    devPhone: 987756438,
    devFriends: ["Juliana", "Matheus", "Gustavo", "Vitória"]
}]

console.log(datas[0].devFriends[2])
console.log(datas[1].devFriends[0])
console.log(datas[2].devFriends[3])
console.log(datas[3].devFriends[1])
console.log(datas[4].devFriends[3])