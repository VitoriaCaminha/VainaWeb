// Prática React 04 - Arrow function

import React, { Component } from 'react'

export default class App extends Component {
  mensagem = () => {
    return (
      <div>
        <p>Mensagem a ser exibida na tela</p>
      </div>
    )
  }

  dobro = (numero) => {
    return numero * 2
  }

  render() {
    return (
      <div>
        {this.mensagem()}
        {this.dobro(2)}
      </div>
    )
  }
}

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

// class 16: arrow function

/*
import React, { Component } from 'react'

export default class Nome extends Component {
  state = {
    nome: 'joca',
  }

  mensagem = () => 'Telescopio' // simples, para retornar uma tarefa em uma linha

  menssenger = () => { // Arrow function tem o return em formato de flecha, onde usamos {} se for usar lógica e () se não for usar lógica
    return (
      <div>
        <h2>A importancia da missão da nasa de descoberta de novas galaxias</h2>
        <p>
          O telescopio james weeb tem nos mostrado um universo cheio de belezas
          e misterios
        </p>
      </div>
    )
  }

  nome = (nome, sobrenome) => {
    return (
      <div>
        <p>{`meu nome é ${nome}, e meu sobrenome é ${sobrenome}`}</p>
      </div>
    )
  }

  Soma = () => 5 + 8 //forma simplificada de uma linha

  Conta = (x, y) => {
    return (
      <div>
        <p>{x * y}</p>
        <hr />
      </div>
    )
  }

  oi = () => {
    return <p>Oi, eu sou o {this.state.nome}</p>
  }

  render() {
    return (
      <header>
        <h1>{this.mensagem()}</h1>
        {this.menssenger()}
        {this.nome('Débora', 'Andrade')}
        {this.nome('João', 'Figueiredo')}
        <p>{this.Soma()}</p>
        {this.Conta(3, 8)}
        {this.Conta(2, 4)}
        {this.Conta(5, 6)}
        {this.oi()}
      </header>
    )
  }
}
*/

//Crie um component  de class
//Agora crie uma arrow function para mostrar na tela o nome de 3 amigos
//E por ultimo, crie outra arrow function para somar a idade desses 3 amigos

/*
import React, { Component } from 'react'

export default class Grupo3 extends Component {
  nome = () => {
    return (
      <div>
        <p>Vitória</p>
        <p>Leno</p>
        <p>Débora</p>
      </div>
    )
  }

  soma = () => {
    return 1 + 2 + 3
  }

  render() {
    return (
      <div>
        {this.nome()}
        {this.soma()}
      </div>
    )
  }
}
*/
