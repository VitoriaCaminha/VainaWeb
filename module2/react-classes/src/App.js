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

// class 21: styled-components

// import React, { Component } from 'react'
// import styled from 'styled-components'
// import Main from './components/Main'

// const Container = styled.div`
//   border: solid;
//   background-color: gray;
//   display: flex;
//   justify-content: center;

//   h1 {
//     font-size: 40px;
//   }
// `

// export default class Calculadora extends Component {
//   render() {
//     return (
//       <Container>
//         <Main />
//       </Container>
//     )
//   }
// }

// class 22: styled-components

// import React, { Component } from 'react'
// import Header from './components/Header.js'
// import Main from './components/Main.js'
// import './App.css'

// export default class Calc extends Component {
//   render() {
//     return (
//       <>
//         <Header />
//         <Main />
//       </>
//     )
//   }
// }

// class 23: revisão

// import React, { Component } from 'react'
// import Header from './components/Header.js'
// import Main from './components/Main.js'

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <Header />
//         <Main />
//       </div>
//     )
//   }
// }

// class 24: To do

// import React, { Component } from 'react'

// export default class Filter extends Component {
//   state = {
//     pessoas: [
//       { nome: 'Leno', idade: 15 },
//       { nome: 'João', idade: 20 },
//       { nome: 'Valeria', idade: 16 },
//       { nome: 'Pamela', idade: 18 },
//       { nome: 'Kelly', idade: 29 },
//     ],
//     deMaior: [],
//   }

//   maiores = () =>
//     this.setState({
//       deMaior: this.state.pessoas.filter((element) => {
//         return element.idade >= 18
//       }),
//     })

//   render() {
//     return (
//       <div>
//         <h1>Vamos filtrar uma lista</h1>
//         {/* O map é um método de array, que percorre uma array e retorna o que pedi em uma nova array */}
//         {this.state.pessoas.map((item) => (
//           <ul>
//             <li>{item.nome}</li>
//             <li>{item.idade}</li>
//           </ul>
//         ))}
//         <button onClick={this.maiores}>Filtrar</button>
//         <h2>Apenas os maiores de idade</h2>
//         {this.state.deMaior.map((item) => (
//           <ul>
//             <li>{item.nome}</li>
//             <li>{item.idade}</li>
//           </ul>
//         ))}
//       </div>
//     )
//   }
// }

// import React, { Component } from 'react'
// import Main from './components/Main'

// export default class ToDo extends Component {
//   render() {
//     return (
//       <>
//         <Main />
//       </>
//     )
//   }
// }

// class 25: ToDo

// import React, { Component } from 'react'
// import Main from './components/Main'

// export default class ToDo extends Component {
//   render() {
//     return (
//       <>
//       <Main />
//       </>
//     )
//   }
// }

// class 26: ToDo

// import React, { Component } from 'react'
// import Main from './components/Main'

// export default class ToDo extends Component {
//   render() {
//     return (
//       <div>
//         <h1>Lista de Filmes</h1>
//         <Main />
//       </div>
//     )
//   }
// }

// class 27: props

// import React, { Component } from 'react'
// import Header from './components/Header/Header'
// import Login from '../src/components/image/fundoModulo2.jpeg'
// import { createGlobalStyle } from 'styled-components'
// import { Main } from './components/Main/Main'

// const GlobalStyle = createGlobalStyle`
// @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap');
// body{
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
//   font-family: 'Orbitron', sans-serif;
//   background-color: teal;
// }
// `

// export default class App extends Component {
//   render() {
//     return (
//       <>
//         <GlobalStyle />
//         <h1>Componente principal</h1>
//         <Header
//           subtitulo="eu sou um subtitulo"
//           logo={Login}
//           lista="Inicio"
//           lista2="Sobre"
//           lista3="Contatos"
//         />
//         <Main caixa='eu sou um h3'>
//           <h4>eu sou um filho</h4>
//           <button>eu sou um botão</button>
//         </Main>
//       </>
//     )
//   }
// }

// import React, { Component } from 'react'
// import Main from './components/Main/Main.js'

// export default class App extends Component {
//   render() {
//     return (
//       <>
//         <Main grupo2="Debora, Dheniffe, Isaque, Hamom, Gabriel, Kelly, Jefferson, Aline, Vitória">
//           <h2>Olá</h2>
//         </Main>
//       </>
//     )
//   }
// }

// class 28: ciclo de vida

// import React, { Component } from 'react'

// export default class App extends Component {
//   state = {
//     number: 0,
//   }

//   // Primeiro o vanilla renderiza, depois o render() mostra na tela
//   // depois o didMoun monta, depois o willUpdate mostra atualização e por ultimo o UmMonut desmonta

//   componentDidMount() {
//     //monta a tarefa a ser executada
//     document.title = this.state.number
//   }

//   componentDidUpdate() {
//     // mostra a execução da tarefa montada
//     document.title = this.state.number
//   }

//   handleClick = () => {
//     this.setState({
//       number: this.state.number + 1,
//     })
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         <button
//           onClick={() => {
//             this.handleClick()
//           }}
//         >
//           contar 1
//         </button>
//       </div>
//     )
//   }
// }

// import React, { Component } from 'react'
// // exemplo 2
// class Main extends Component {
//   state = {
//     count: 0,
//     nome: 'Julio',
//   }

//   componentDidMount() {
//     document.title = this.state.nome
//   }

//   componentDidUpdate() {
//     document.title = this.state.nome
//   }

//   handleClick = () => {
//     this.setState({
//       count: this.state.count + 1,
//     })
//   }

//   Click = () => {
//     this.setState({
//       nome: 'Lucas', // nome: this.state.nome === "Lucas" ? 'Pedro' : 'Lucas'
//     })
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         <button
//           onClick={() => {
//             this.handleClick()
//           }}
//         >
//           contar 1
//         </button>
//         <button
//           onClick={() => {
//             this.Click()
//           }}
//         >
//           mudar nome
//         </button>
//       </div>
//     )
//   }
// }

// export default Main

// import React, { Component } from 'react'
// // exemplo 3
// class Main extends Component {
//   state = {
//     count: 0,
//     nome: 'Julio',
//   }

//   componentDidMount() {
//     document.title =
//       this.state.count !== 0
//         ? (document.title = this.state.nome)
//         : (document.title = this.state.count)
//   }

//   componentDidUpdate() {
//     document.title =
//       this.state.count !== 0
//         ? (document.title = this.state.nome)
//         : (document.title = this.state.count)
//   }

//   handleClick = () => {
//     this.setState({
//       count: this.state.count + 1,
//     })
//   }
//   handleRemove = () => {
//     this.setState({
//       count: this.state.count - 1,
//     })
//   }

//   Click = () => {
//     this.setState({
//       nome: 'Lucas', // nome: this.state.nome === "Lucas" ? 'Pedro' : 'Lucas'
//     })
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         <button
//           onClick={() => {
//             this.handleClick()
//           }}
//         >
//           contar 1
//         </button>
//         <button
//           onClick={() => {
//             this.handleRemove()
//           }}
//         >
//           contar -1
//         </button>
//         <button
//           onClick={() => {
//             this.Click()
//           }}
//         >
//           mudar nome
//         </button>
//       </div>
//     )
//   }
// }

// export default Main

// class 29: API

// api: application programming interface // interface de programa de aplicativo

// existem 3 tipos de API:
// fechada (apenas internamente há acesso, usa uma key para poder ter acesso a API)
// aberta (tem key, mas qualquer pessoa pode acessar)
// pública (qualquer pessoa pode acessar)

// API é um objeto

// import React, { Component } from 'react'

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <h1></h1>
//       </div>
//     )
//   }
// }

// class 30: API

// O processo do ciclo de vida no React é inicar no DOM, ir ao Render, depois DidMount, DidUpdade e DidWillUnmount

// import React, { Component } from 'react'

// export default class App extends Component {
//   state = {
//     nome: 'David',
//   }

//   componentDidMount() {
//     document.title = this.state.nome
//   }

//   componentDidUpdate(state) {
//     if (state !== this.state.nome) {
//       document.title = this.state.nome
//     }
//     // document.title = this.state.nome // Forma menos 'robusta' de fazer. Com a condição também há prevenção de vazamento de memória
//   }

//   mudar = () => {
//     this.setState({
//       nome: 'Leonardo',
//     })
//   }
//   render() {
//     return (
//       <div>
//         <button>Mudar</button>
//       </div>
//     )
//   }
// }

// import React, { Component } from 'react'
// import Movies from './services/movies'

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Movies />
//       </div>
//     )
//   }
// }

// export default App

// class 31: Rotas

// import React, { Component } from 'react'
// import Header from './components/Header/Header'

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Header />
//       </div>
//     )
//   }
// }

// export default App

// import React, { Component } from 'react'
// import Movies from './services/movies'

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <Movies />
//       </div>
//     )
//   }
// }

// class 32: Rotas

// import React from "react";
// import Header from "./components/Header/Header.js";

// class App extends React.Component {
//   render() {
//     return (
//       <>
//         <Header />
//       </>
//     );
//   }
// }

// export default App;

// class 33: API

// import React, { Component } from 'react';
// import Header from './components/Header/Header'

// class App extends Component {


//   render() {
//     return (
//       <div>
//         <Header />
//       </div>
//     );
//   }
// }

// export default App;

// class 34: axios

// import React, { Component } from "react";
// import Header from "./components/Header/Header";

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <Header/>
//       </div>
//     );
//   }
// }

// class 35: ciclo de vida

// import React from "react";
// import Gato from "./gato1.jpg";
// import Gato2 from "./gato2.jpg";

// export default class App extends React.Component {
//   state = {
//     nome: "Leno",
//     count: 0,
//     foto: Gato
//   };

//   componentDidMount() {
//     /*   setTimeout(() => {
//        alert(`Bem vindo ${this.state.nome}`)
//     }, 3000) */
//   }

//   componentDidUpdate() {
//     if (this.state.count % 2) {
//       document.body.style.backgroundColor = "green";
//     } else {
//       document.body.style.backgroundColor = "red";
//     }
//   }

//   handleAdd = () => {
//     const Tempo = setInterval(() => {
//       this.setState((prevState) => ({
//         count: prevState.count + 1,
//         foto: prevState.foto === Gato ? Gato2 : Gato
//       }));
//     }, 1000);
//     this.Stop = () => {
//       clearInterval(Tempo);
//     };
//   };

//   handleClick = () => {
//     setTimeout(() => {
//       this.setState((state) => ({
//         nome: state.nome === "Leno" ? "Nikolas" : "Leno"
//       }));
//     }, 1000);
//   };

//   //setInterval(O QUE FAZER, DE QUANTO EM QUANTO TEMPO)
//   //setTimeOut(OQUE FAZER, DEPOIS DE QUANTO TEMPO)

//   render() {
//     return (
//       <div>
//         <h2>Bom dia Pessoal!!!</h2>
//         <p>{this.state.nome}</p>
//         <p>{this.state.count}</p>
//         <img style={{ width: "200px" }} src={this.state.foto} alt="" />
//         <button onClick={this.handleAdd}>Iniciar</button>
//         <button onClick={this.handleClick}>Mudar</button>
//         <button onClick={this.Stop}>Parar</button>
//       </div>
//     );
//   }
// }

// class 36: useState

// import React, { useState } from "react";

// const App = () => {
//   const [cadastro, setCadastro] = useState([
//     { nome: "Jordan", idade: 23 },
//     { nome: "Jorge", idade: 19 },
//     { nome: "Alberto", idade: 15 }
//   ]);
//   const [open, setOpen] = useState(false);
//   const [name, setName] = useState("Hamom");
//   const [count, setCount] = useState(0);

//   /*  const handleClick = () => {
//     setName(name === 'Hamom' ? 'Débora' : 'Hamom')
//   } */

//   /*   const MudarNome = () => {
//     setInterval(() => {
//       setName(name === "Hamom" ? "Débora" : "Hamom");
//     }, 2000);
//   }; */

//   return (
//     <div>
//       <h2>{open && name}</h2>
//       <h3>{count}</h3>
//       <button
//         onClick={() => {
//           setName(name === "Hamom" ? "Débora" : "Hamom");
//         }}>
//         Mudar Nome
//       </button>
//       <button
//         onClick={() => {
//           setCount(count < 10 ? count + 1 : count);
//         }}>
//         Contar 1
//       </button>
//       <button
//         onClick={() => {
//           setCount(count - 1);
//         }}>
//         Tirar 1
//       </button>
//       {cadastro.map((item) => (
//         <ul>
//           <li>{item.nome}</li>
//           <li>{item.idade}</li>
//         </ul>
//       ))}
//       <button
//         onClick={() => {
//           setOpen(!open);
//         }}>
//         Aparecer
//       </button>
//     </div>
//   );
// };

// export default App;

// class 37: modal

// import React, { useState } from "react";
// import * as S from "./styled.js";
// import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
// import Contador from "./components/contador.js";
// import Calculadora from "./components/calculadora.js";

// const App = () => {
//   const [open, setOpen] = useState(false);

//   const Modal = () => {
//     return (
//       <S.Nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/Calc">Calculadora</Link>
//           </li>
//           <li>
//             <Link to="/Cont">Contador</Link>
//           </li>
//         </ul>
//       </S.Nav>
//     );
//   };

//   return (
//     <BrowserRouter>
//       <S.GlobalStyles />
//       <S.Btn
//         onClick={() => {
//           setOpen(!open);
//         }}>
//         {open === true ? "X" : "≡"}
//       </S.Btn>
//       {open && Modal()}
//       <Routes>
//         <Route path="/" />
//         <Route path="/Calc" element={<Calculadora />} />
//         <Route path="/Cont" element={<Contador />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;

// class 38: ToDo com useState

import React, { useState } from "react";

function App() {
  const [tarefas, setTarefas] = useState("");
  const [listadeTarefas, setLista] = useState([]);

  console.log(listadeTarefas);

  const nome = { tarefas: tarefas, id: Date.now() };

  const handleClick = () => {
    if (tarefas === "") {
    } else {
      setLista([...listadeTarefas, nome]);
    }
    setTarefas("");
  };

  const Remove = (id) => {
    setLista(listadeTarefas.filter((item) => item.id !== id));
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}>
        <input
          value={tarefas}
          onChange={(e) => {
            setTarefas(e.target.value);
          }}
        />
        <button onClick={() => handleClick()}>ADD</button>
      </form>
      {listadeTarefas.map((item, index) => (
        <div key={index}>
          <ul>
            <li>{item.tarefas}</li>
          </ul>
          <button
            onClick={() => {
              Remove(item.id);
            }}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
