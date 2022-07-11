// // Prática React 01 - Renderizando um state

// import React, { Component } from 'react'
// import Pinha from './pinha.jpg'

// export default class App extends Component {
//   state = {
//     nome: 'Vitória',
//     idade: 24,
//     comidaFavorita: 'purê de batata',
//     musicasFavoritas: [
//       'Panic Station - MUSE',
//       'Butterflies and Hurricanes - MUSE',
//       'Scret Door - Arctic Monkeys',
//     ],
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.state.nome}</h1>
//         <h2>{this.state.idade}</h2>
//         <h3>{this.state.comidaFavorita}</h3>
//         <ul>
//           <li>{this.state.musicasFavoritas[0]}</li>
//           <li>{this.state.musicasFavoritas[1]}</li>
//           <li>{this.state.musicasFavoritas[2]}</li>
//         </ul>
//         <img
//           src={Pinha}
//           alt="Imagem com duas frutas chamadas pinha, sendo uma fechada e a outra aberta no meio"
//         />
//       </div>
//     )
//   }
// }

// Tarefa de classe

// // crie um component de class com um state com uma array de nomes e mostre na tela com um h1

// import React, {Component} from "react";

// class App extends Component {
//   state = {
//     nome: ["João", "Jordan", "Daniel", "Leonardo","Vitoria"]
//   }

//   render() {
//     return(
//       <div>
//         <h1>{this.state.nome}</h1>
//       </div>
//     )
//   }
// }

// export default App; // O export default pode ir ao lado da classe, por exemplo: export default class App extends Component {}

// import React, { Component } from 'react'

// class App extends Component {
//   state = {
//     numeros: [4, 6, 1, 9, 5, 7]
//     // nome: ['João', 'Paula', 'Robert'],
//     // nome: 'Vitória',
//     // nome2: 'Kelly',
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.state.numeros.sort()}</h1>
//         {/* <h1>{this.state.nome[2]}</h1> */}
//         {/* <h1>{this.state.nome}</h1>
//         <h2>{this.state.nome2}</h2> */}
//       </div>
//     )
//   }
// }

// export default App

// import React from 'react' // Estrutura básica de um componente de função

// function oi() {
//   return <h1>Olá, mundo!</h1>
// }

// export default oi

// Class 13

// O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.
// É mantido pelo Facebook e outras empresas e uma comunidade de desenvolvedores individuais.

// Functional component: componente simples que inicialmente não possuia manipulação de estados.
// Class component: componente um pouco mais complexo criado para poder manipular estados.

// Class 14

// State: o state é um objeto que guarda dados a serem utilizados e modificados durante a construção do código.
// this serve para acessar o estado de um componente.
// usar this.state para acessar algum dado só é válido em componente de classe.
// Só pode ser criado um componente por arquivo.

// Class 15: Revisão

// import React from 'react';
// import './App.css'
// import imagem from './pinha.jpg'

// export default function Ola() { // Todo componente tem que começar o nome com letra maiúscula
//   return(
//     <div>
//       <h1 className='title'>Olá, turma</h1>
//       <p>Tchau turma</p>
//       <img src={imagem} alt='imagem de uma fruta chamada pinha' />
//     </div>
//   )
// } // Se eu excluir um arquivo que não devia, é só clicar no menu a esquerda e dar ctrl + z

// import React, { Component } from 'react' // Component é a desestruturação de React.Component
// import './App.css'

// export default class Nome extends Component {
//   state = {
//     nome: 'José',
//     datas: [1, 6, 3, 8],
//   }
//   render() {
//     return (
//       <div>
//         <h1>Olá, turma</h1>
//         <p>{this.state.nome}</p>
//       </div>
//     )
//   }
// }

// Crie um component de função com um título e 3 p

// Crie um component de class com um state com uma array de nomes e mostre na tela
// com um h1 um dos nomes da array

//crie uma array no component de class no seu state crie uma array com pelo menos
// 7 numeros diferentes e mostre os idicies 2 e 3 da array

// import React from 'react'

// export default function Socorro() {
//   return (
//     <div>
//       <h1>Título</h1>
//       <p>SOCORRO MEU DEUX</p>
//       <p>LEANDRO ESTA COM SORRISO MALEFICO</p>
//       <p>O CLIENTE ESTA PUTO</p>
//     </div>
//   )
// }

// import React, { Component } from 'react'

// export default class Socorro extends Component {
//   state = {
//     nomes: ['Gabriela', 'Jordan'],
//     numeros: [1, 8, 2, 5, 3, 9, 10],
//   }
//   render() {
//     return (
//       <div>
//         <h1>{this.state.nomes[0]}</h1>
//         <p>{this.state.numeros.splice(2, 2).join(", ")}</p>
//       </div>
//     )
//   }
// }
