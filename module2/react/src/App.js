// // Prática React 05 - map()

// import React, { Component } from 'react'

// export default class App extends Component {
//   state = {
//     cadastro: [
//       { nome: 'Vitória', idade: 24 },
//       { nome: 'Eduardo', idade: 19 },
//       { nome: 'Julio', idade: 21 },
//       { nome: 'Bianca', idade: 22 },
//       { nome: 'Danielle', idade: 25 },
//       { nome: 'Beatriz', idade: 21 },
//     ],
//   }

//   render() {
//     return (
//       <div>
//         {this.state.cadastro.map((item) => (
//           <p>
//             O usuário {item.nome} tem {item.idade} anos de idade.
//           </p>
//         ))}
//       </div>
//     )
//   }
// }

// // Prática React 04 - Arrow function

// import React, { Component } from 'react'

// export default class App extends Component {
//   mensagem = () => {
//     return (
//       <div>
//         <p>Mensagem a ser exibida na tela</p>
//       </div>
//     )
//   }

//   dobro = (numero) => {
//     return numero * 2
//   }

//   render() {
//     return (
//       <div>
//         {this.mensagem()}
//         {this.dobro(2)}
//       </div>
//     )
//   }
// }

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

// class 17: map

// import React, { Component } from 'react'

// export default class Batata extends Component {
//   state = {
//     cadastro: [
//       { nome: 'Julio', idade: 22, signo: 'peixes' },
//       { nome: 'Amanda', idade: 25, signo: 'aquario' },
//       { nome: 'Mario', idade: 21, signo: 'capricornio' },
//       { nome: 'Eduardo', idade: 29, signo: 'leao' },
//     ],
//     paises: [
//       { nome: 'Brasil', idioma: 'português' },
//       { nome: 'Alemanha', idioma: 'alemão' },
//       { nome: 'Japão', idioma: 'japonês' },
//       { nome: 'Canadá', idioma: 'inglês e francês' },
//     ],
//   }

//   render() {
//     return (
//       <div>
//         <nav>
//           {this.state.cadastro.map((rastreador, index) => (
//             <ul key={index}>
//               <li>Clique aqui para ver o perfil do {rastreador.nome}</li>
//               <li>
//                 O/a {rastreador.nome} tem {rastreador.idade} anos de idade
//               </li>
//               <li>E é do signo de {rastreador.signo}</li>
//             </ul>
//           ))}
//         </nav>

//         <div>
//           {this.state.paises.map((rastreador, index) => (
//             <p key={index}>{rastreador.nome}</p>
//           ))}
//         </div>
//       </div>
//     )
//   }
// }

// Crie um component de class

// Agora guarde em um state informações de cadastro de pelo 3 objetos diferentes

// e por ultimo faça um mapeamento dessa array de objetos e renderize na tela
// uma frase com todos os nome e idade dos cadastros

// import React, { Component } from 'react'

// export default class App extends Component {
//   state = {
//     cadastro: [
//       { nome: 'Aline', idade: 30, cidade: 'Rio de Janeiro' },
//       { nome: 'Vitória', idade: 24, cidade: 'Olinda' },
//       { nome: 'Ricardo', idade: 26, cidade: 'Barra Mansa' },
//     ],
//   }

//   render() {
//     return (
//       <div>
//         {this.state.cadastro.map((item) => (
//           <p>
//             Meu nome é {item.nome} e minha idade é {item.idade} anos.
//           </p>
//         ))}
//       </div>
//     )
//   }
// }

// class 18: Revisão

// import React, { Component } from 'react'

// class Batata extends Component {
//   Soma = () => 5 + 8

//   Texto = () => {
//     return (
//       <div>
//         <p> Eu Gosto de Batata</p>
//         <p> Com batata eu tenho fonte de caboidrato</p>
//       </div>
//     )
//   }

//   render() {
//     return (
//       <div>
//         <h1> Revisão Ts.2</h1>
//         <p> {this.Soma()} </p>
//         {this.Texto()}
//       </div>
//     )
//   }
// }
// export default Batata

// import React, { Component } from 'react'

// export default class Mapa extends Component {
//   state = {
//     Dados: [
//       {
//         nome: 'Luis And',
//         telefone: '2222222222',
//         cidade: 'Rj',
//         cpf: '333.1544.827-77',
//         idade: '20',
//         Hobby: 'Músico',
//       },
//       {
//         nome: 'João Belo',
//         telefone: '56464646464',
//         cidade: 'MG',
//         cpf: '656.565.987.11',
//         idade: '19',
//         Hobby: 'Fazer café',
//       },
//       {
//         nome: 'Robert j.',
//         telefone: '115454545454',
//         cidade: 'Recife',
//         cpf: '412.987.359-41',
//         idade: '18',
//         Hobby: 'viver na lagoa',
//       },
//       {
//         nome: 'Jefferson',
//         telefone: '6398987451',
//         cidade: 'Sp',
//         cpf: '454.565.982.98',
//         idade: '28',
//         Hobby: 'jogar bola',
//       },
//     ],
//   }

//   render() {
//     return (
//       <div>
//         {this.state.Dados.map((item) => (
//           <div>
//             <h1>Dados:</h1>
//             <p>
//               Meu nome é {item.nome}, meu cpf é {item.cpf}, moro em{' '}
//               {item.cidade} meu telefone {item.telefone} minha idade{' '}
//               {item.idade}, meu hobby {item.Hobby}
//             </p>
//           </div>
//         ))}
//       </div>
//     )
//   }
// }

// class 19: setState

// import React, { Component } from 'react'
// import './index.css'

// export default class Contador extends Component {
//   state = {
//     count: 0,
//   }

//   Add = () => {
//     this.setState({
//       count: this.state.count + 1,
//       body: (document.body.style.backgroundColor = 'blue'),
//       letra: (document.body.style.color = 'red'),
//     })
//   }

//   render() {
//     return (
//       <div>
//         <h1>Vamos criar um contador</h1>
//         <p>{this.state.count}</p>
//         <button onClick={this.Add}>+1</button>
//       </div>
//     )
//   }
// }

// import React from 'react'

// export default class mudar extends React.Component {
//   state = {
//     nome: 'Leno Rafael',
//   }

//   mudanca = () => {
//     this.setState({
//       nome: 'David Henrique',
//     })
//   }

//   render() {
//     return (
//       <div>
//         <h1>O meu nome é {this.state.nome}</h1>
//         <button onClick={this.mudanca}>Mudar</button>
//       </div>
//     )
//   }
// }

// import React from 'react'

// export default class App extends React.Component {
//   state = {
//     nome: 'David',
//   }

//   socorro = () => {
//     this.setState({
//       nome: 'Jordan',
//       cor: (document.body.style.color = 'blue'),
//     })
//   }

//   render() {
//     return (
//       <div>
//         <h2>{this.state.nome}</h2>
//         <button onClick={this.socorro}>mudar nome</button>
//       </div>
//     )
//   }
// }

// class 20: setState 2

// import React, { Component } from 'react'

// export default class Contador extends Component {
//   state = {
//     numero: 0,
//   }

//   Add = () => {
//     if (this.state.numero < 20) {
//       this.setState({
//         numero: this.state.numero + 1,
//       })
//     }
//   }

//   Remove = () => {
//     this.setState({
//       numero: this.state.numero - 1,
//     })
//   }

//   render() {
//     return (
//       <div>
//         <h1>Vamos fazer um contador</h1>
//         <p>{this.state.numero}</p>
//         <button onClick={this.Add}>+1</button>
//         <button onClick={this.Remove}>-1</button>
//       </div>
//     )
//   }
// }

// import React, { Component } from 'react'

// export default class Mudanca extends Component {
//   state = {
//     nome: 'Leno',
//   }

//   outroNome = () => {
// if (this.state.nome === 'Leno') {
//   this.setState({
//     nome: 'Pamela',
//     cor: (document.querySelector('p').style.fontSize = '30px'),
//   })
// } else {
//   this.setState({
//     nome: 'Leno',
//   })
// }

// Operador ternário

//     this.state.nome === 'Leno'
//       ? this.setState({ nome: 'Pamela' })
//       : this.setState({ nome: 'Leno' })
//   }

//   render() {
//     return (
//       <>
//         <p>{this.state.nome}</p>
//         <button onClick={this.outroNome}>Troca</button>
//       </>
//     )
//   }
// }

//Crie um component de class
//Crie um state com 3 propriedades nome, idade, musica favorita
//mude o estado das propriedades com um evento e
//crie uma condicional para fazer voltar ao estado inicial no mesmo botão mude a cor dos elementos

// import React, { Component } from 'react'

// export default class Pessoa extends Component {
//   state = {
//     nome: 'Daniel',
//     idade: 25,
//     musicaFavorita: 'Rebolation',
//   }

//   Mudar = () => {
//     this.state.nome === 'Daniel'
//       ? this.setState({
//           nome: 'Dyana',
//           idade: 21,
//           musicaFavorita: 'Pagode',
//           cor: (document.body.style.color = 'gray'),
//         })
//       : this.setState({
//           nome: 'Daniel',
//           idade: 25,
//           musicaFavorita: 'Rebolation',
//           cor: (document.body.style.color = 'black'),
//         })
//   }

//   render() {
//     return (
//       <div>
//         <h1>Mudança de dados</h1>
//         <p>{this.state.nome}</p>
//         <p>{this.state.idade}</p>
//         <p>{this.state.musicaFavorita}</p>
//         <button onClick={this.Mudar}>Mudar</button>
//       </div>
//     )
//   }
// }

// Mentoria: responsividade

// import React, { Component } from 'react'
// import './App.css'

// export default class Leandro extends Component {
//   state = {
//     nome: 'Restaurante',
//     menu: ['inicio', 'sobre', 'contatos'],
//   }

//   render() {
//     return (
//       <>
//         <header>
//           <img
//             className="logo"
//             src="https://dnxstorage.blob.core.windows.net/gruporequinte/Blog/UrlFotoPequena3..png"
//             alt="logo"
//           />
//           <nav>
//             <ul>
//               {this.state.menu.map((item, index) => (
//                 <li key={index}>{item}</li>
//               ))}
//             </ul>
//             <img
//               className="menu"
//               src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
//               alt="menu"
//             />
//           </nav>
//         </header>
//         <main></main>
//       </>
//     )
//   }
// }

// class 21: styled-components

import React, { Component } from 'react'
import styled from 'styled-components'
import Main from './components/Main'

const Container = styled.div`
  border: solid;
  background-color: gray;
  display: flex;
  justify-content: center;

  h1 {
    font-size: 40px;
  }
`

export default class Calculadora extends Component {
  render() {
    return (
      <Container>
        <Main />
      </Container>
    )
  }
}
