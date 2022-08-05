// import React, { Component } from 'react'
// import styled from 'styled-components'

// import React from 'react'

// const Container = styled.div`
//   background-color: blue;
//   width: 20%;
//   height: 60vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `

// const Input1 = styled.input`
//   background-color: blueviolet;
// `

// const Input2 = styled.input`
//   background-color: pink;
// `

// export default class Main extends Component {
//   state = {
//     value1: '',
//     value2: '',
//     result: '',
//   }

//   handleChange = (event) => {
//     this.setState({
//       value1: event.target.value,
//     })
//   }

//   handleChange2 = (event) => {
//     this.setState({
//       value2: event.target.value,
//     })
//   }

//   Multiply = () => {
//     this.setState({
//       result: this.state.value1 * this.state.value2,
//     })
//   }

//   render() {
//     return (
//       <Container>
//         <Input1 value={this.state.value1} onChange={this.handleChange} />
//         <Input2 value={this.state.value2} onChange={this.handleChange2} />
//         <p>{this.state.result}</p>
//         <button onClick={this.Multiply}>Multiplicar</button>
//       </Container>
//     )
//   }
// }

// import React from 'react'

// export default class Main extends React.Component {
//   state = {
//     n1: '',
//     n2: '',
//     result: 0,
//   }

//   Change = (event) => {
//     this.setState({
//       n1: Number(event.target.value),
//     })
//   }

//   Change2 = (event) => {
//     this.setState({
//       n2: Number(event.target.value),
//     })
//   }

//   Somar = () => {
//     const { n1, n2 } = this.state
//     this.setState({
//       result: n1 + n2,
//       n1: '',
//       n2: '',
//     })
//   }

//   render() {
//     return (
//       <>
//         <input type="number" value={this.state.n1} onChange={this.Change} />
//         <input type="number" value={this.state.n2} onChange={this.Change2} />
//         <button onClick={this.Somar}>Somar</button>
//         <p>{this.state.result}</p>
//       </>
//     )
//   }
// }

// import React, { Component } from 'react'

// export default class Main extends Component {
//   state = {
//     n1: '', // o : se chama 'transforma'
//     n2: '',
//     result: 0,
//   }

//   handleChange = (event) => {
//     this.setState({
//       n1: Number(event.target.value),
//     })
//   }

//   handleChange2 = (event) => {
//     this.setState({
//       n2: Number(event.target.value),
//     })
//   }

//   multi = () => {
//     const { n1, n2 } = this.state
//     this.setState({
//       result: n1 * n2,
//     })
//   }

//   divi = () => {
//     const { n1, n2 } = this.state
//     this.setState({
//       result: n1 / n2,
//     })
//   }

//   soma = () => {
//     const { n1, n2 } = this.state
//     this.setState({
//       result: n1 + n2,
//     })
//   }

//   sub = () => {
//     const { n1, n2 } = this.state
//     this.setState({
//       result: n1 - n2,
//     })
//   }

//   clear = () => {
//     this.setState({
//       n1: '',
//       n2: '',
//       result: 0,
//     })
//   }

//   render() {
//     return (
//       <div>
//         <input onChange={this.handleChange} value={this.state.n1} type='number' />
//         <input onChange={this.handleChange2} value={this.state.n2} type='number' />
//         <p>{this.state.result}</p>
//         <button onClick={this.multi}>multiplicar</button>
//         <button onClick={this.divi}>Dividir</button>
//         <button onClick={this.soma}>Somar</button>
//         <button onClick={this.sub}>Subtrair</button>
//         <button onClick={this.clear}>Limpar</button>
//       </div>
//     )
//   }
// }

// export default class Main extends React.Component {
//   state = {
//     compras: '',
//     listaDeCompras: [],
//   }

//   handleClick = () => {
//     this.setState({
//       listaDeCompras: this.state.listaDeCompras.concat({
//         compras: this.state.compras,
//       }),
//     })
//   }

//   handleChange = (event) => {
//     this.setState({
//       compras: event.target.value,
//     })
//   }

//   handle
//   render() {
//     return (
//       <>
//         <h1>Lista de tarefas</h1>
//         <div>
//           <input onChange={this.handleChange} />
//           <button onClick={this.handleClick}>Enviar</button>
//           {this.state.listaDeCompras.map((item) => (
//             <ul>
//               <li>{item.compras}</li>
//             </ul>
//           ))}
//         </div>
//       </>
//     )
//   }
// }

// import React, { Component } from 'react'

// // Função: conjunto de instruções que podem ou não ter condições para a realização de uma tarefa

// export default class Main extends Component {
//   state = {
//     task: '',
//     TaskList: [],
//   }

//   handleChange = (event) => {
//     this.setState({
//       task: event.target.value,
//     })
//   }

//   handleClick = () => {
//     this.setState({
//       TaskList: this.state.TaskList.concat({
//         task: this.state.task,
//         // id: Date.now(),
//         id: Math.random(),
//       }),
//       task: '',
//     })
//   }

//   remover = (id) => {
//     this.setState({
//       TaskList: this.state.TaskList.filter((item) => item.id !== id),
//     })
//   }

//   render() {
//     return (
//       <>
//         <h1>Lista de Tarefas</h1>
//         <input
//           type="text"
//           value={this.state.task}
//           onChange={this.handleChange}
//         />
//         {/* onChange é um evento */}
//         <button onClick={this.handleClick}>Enviar</button>
//         <div>
//           {this.state.TaskList.map((item, index) => (
//             <ul key={index}>
//               <li>{item.task}</li>
//               <button
//                 onClick={() => {
//                   this.remover(item.id)
//                 }}
//               >
//                 Remover
//               </button>
//             </ul>
//           ))}
//         </div>
//       </>
//     )
//   }
// }

// Fazer não adicionar task vazia e fazer adicionar com enter
// usar if/else e usar método que vem junto com event para enviar com enter

import React, { Component } from 'react'

export default class Main extends Component {
  state = {
    filme: '',
    listaDeFilmes: [],
  }

  handleChange = (event) => {
    this.setState({
      filme: event.target.value,
    })
  }

  Send = (event) => {
    // event.preventDefault() // Forma certa, mas menos semântica
    if (this.state.filme !== '') {
      this.setState({
        listaDeFilmes: this.state.listaDeFilmes.concat({
          filme: this.state.filme,
          id: Date.now(),
        }),
        filme: '',
      })
    }
  }

  // Filter filtra as informações de uma array para outra de acordo com uma condição, sem alterar a primeira array

  Remove = (id) => {
    this.setState({
      listaDeFilmes: this.state.listaDeFilmes.filter(
        (ident) => ident.id !== id,
      ),
    })
  }

  RemoveAll = (id) => {
    this.setState({
      listaDeFilmes: this.state.listaDeFilmes.filter(
        (ident) => ident.listaDeFilmes,
      ),
    })
  } // Inicio do botão que apaga tudo

  render() {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault()
        }} // Forma mais semântica
      >
        <input value={this.state.filme} onChange={this.handleChange} />
        <button onClick={this.Send}>Send</button>
        <button onClick={() => this.RemoveAll()}>X</button>
        {this.state.listaDeFilmes.map((item) => (
          <ol>
            <li>{item.filme}</li>
            <button
              onClick={() => {
                this.Remove(item.id)
              }}
            >
              X
            </button>
          </ol>
        ))}
      </form>
    )
  }
}
