let arrayNames = ["Vitória", "Ruhan", "Gustavo", "Lecy", "Leandro"]
console.log(arrayNames)

arrayNames.splice(0, 0, "Beatriz")

arrayNames.pop()

arrayNames.splice(5, 2, "Leandro", "Danielle")

arrayNames.shift()


let numbers = [7, 5, 6, 3, 8, 9, 2, 1, 4]

numbers.sort(function (a, b) {
    return a - b
})