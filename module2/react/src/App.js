// Prática React 01 - Renderizando um state

import React, { Component } from 'react'
import Pinha from './pinha.jpg'

export default class App extends Component {
  state = {
    nome: 'Vitória',
    idade: 24,
    comidaFavorita: 'purê de batata',
    musicasFavoritas: [
      'Panic Station - MUSE',
      'Butterflies and Hurricanes - MUSE',
      'Scret Door - Arctic Monkeys',
    ],
  }

  render() {
    return (
      <div>
        <h1>{this.state.nome}</h1>
        <h2>{this.state.idade}</h2>
        <h3>{this.state.comidaFavorita}</h3>
        <ul>
          <li>{this.state.musicasFavoritas[0]}</li>
          <li>{this.state.musicasFavoritas[1]}</li>
          <li>{this.state.musicasFavoritas[2]}</li>
        </ul>
        <img
          src={Pinha}
          alt="Imagem com duas frutas chamadas pinha, sendo uma fechada e a outra aberta no meio"
        />
      </div>
    )
  }
}

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
