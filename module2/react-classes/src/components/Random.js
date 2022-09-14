// class 43: useEffect

// import React, { useState, useEffect } from 'react'
// // useEffect: gera efeito colateral na página, lida com o ciclo de vida de uma aplicação

// const Random = () => {
//     const [number, setNumber] = useState(0)

//     function randomNumber(menor, maior) {
//         setNumber(Math.floor(Math.random() * (maior - menor) + menor))
//     }

//     useEffect(() => {
//         if (number === 5) {
//             document.body.style.backgroundColor = 'green'
//         } else {
//             document.body.style.backgroundColor = 'white'
//         }
//     }, [number])

//     return (
//         <div>
//             <button onClick={() => { randomNumber(1, 10) }}>Clique</button>
//             <h1>{number}</h1>
//         </div>
//     )
// }

// export default Random;

// import React, { useState, useEffect } from 'react'

// const calcFatorial = (n) => {
//     if (n < 0) {
//         return -1
//     } else if (n === 0) {
//         return 1
//     }
//     return calcFatorial(n - 1) * n
// }

// const Random = () => {
//     const [number, setNumber] = useState(1)
//     const [fatorial, setFatorial] = useState(1)
    
//     useEffect(() => {
//         setFatorial(calcFatorial(number))
//     }, [number])

//     useEffect(() => {
//         if(fatorial > 500) {
//             document.title = 'numero > 500'
//             document.body.style.color = 'green'
//         } else {
//             document.title = 'numero < 500'
//             document.body.style.color = 'black'
//         }
//     }, [fatorial])

//     return (
//         <div>
//             <h1>Fatorial:</h1>
//             <h2>{fatorial}</h2>
//             <input type='number' value={number} onChange={(e) => { setNumber(e.target.value) }} />
//         </div>
//     )
// }

// export default Random;