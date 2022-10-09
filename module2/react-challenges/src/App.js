// Desafio 05: Página filmes e séries

import React, { Component } from "react";
import Header from "./components/Header";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
      </div>
    );
  }
}

// Desafio 04: props

// import React, { Component } from 'react'
// import Header from './components/Header'
// import Login from './fundoModulo2.jpeg'
// import { createGlobalStyle } from 'styled-components'
// import Main from './components/Main'

// const GlobalStyle = createGlobalStyle`
// body{
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
//   background-color: lightskyblue;
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

// Desafio 03: ToDo App Básico

// import React, { Component } from 'react'
// import Main from './components/Main'
// import './App.css'

// export default class ToDo extends Component {
//   render() {
//     return (
//       <>
//         <Main />
//       </>
//     )
//   }
// }

// Desafio 02: calculadora

// import React, { Component } from 'react'
// import Header from './components/Header'
// import Main from './components/Main'

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

// Desafio 01: contador

// import React, { Component } from 'react'
// import './App.css'

// class App extends Component {
//   state = {
//     countNumber: 0,
//   }

//   add = () => {
//     if (this.state.countNumber < 10) {
//       this.setState({
//         countNumber: this.state.countNumber + 1,
//       })
//     }
//   }

//   remove = () => {
//     if (this.state.countNumber > 0) {
//       this.setState({
//         countNumber: this.state.countNumber - 1,
//       })
//     }
//   }

//   render() {
//     return (
//       <div>
//         <section className='description'>
//           <h1>Contador</h1>
//           <p>Esse desafio em ReactJS foi realizado para a escola de programação <a href='https://www.vainaweb.com.br'>Vai na Web</a></p>
//         </section>
//         <section className='counter'>
//           <h2>{this.state.countNumber}</h2>
//           <button onClick={this.add}>+</button>
//           <button onClick={this.remove}>-</button>
//         </section>
//         <footer>
//           <a href='https://github.com/VitoriaCaminha' target='_blank'><h3>Vitória Caminha</h3></a>
//         </footer>
//       </div>
//     )
//   }
// }

// export default App
