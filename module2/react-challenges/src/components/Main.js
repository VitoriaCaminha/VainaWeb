// Desafio 03: ToDo App Básico

import React, { Component } from 'react'
import styled from 'styled-components'

const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
margin: auto;
width: 30vw;
`

const Title = styled.h1`
@import url('https://fonts.googleapis.com/css2?family=Sue+Ellen+Francisco&display=swap');
font-family: 'Sue Ellen Francisco', cursive;
font-size: 7vh;
`

const Div = styled.div`
margin-bottom: 6vh;
`

const Input = styled.input`
border-radius: 5px;
width: 20vw;
`

const Button = styled.button`
border-radius: 4px;
cursor: pointer;
`

const Ul = styled.ul`
display: flex;
`

const Li = styled.li`
width: 30vw;
`

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
            <Form
                onSubmit={(e) => {
                    e.preventDefault()
                }} // Forma mais semântica
            >
                <Title>To Do List</Title>
                <Div>
                    <Input value={this.state.filme} onChange={this.handleChange} />
                    <Button onClick={this.Send}>Send</Button>
                    <Button onClick={() => this.RemoveAll()}>X</Button>
                </Div>
                {this.state.listaDeFilmes.map((item) => (
                    <Ul>
                        <Li>{item.filme}</Li>
                        <Button
                            onClick={() => {
                                this.Remove(item.id)
                            }}
                        >
                            X
                        </Button>
                    </Ul>
                ))}
            </Form>
        )
    }
}

// Desafio 02: calculadora

// import React, { Component } from 'react'
// import styled from 'styled-components'
// import { Container } from './Header'

// const Entry = styled.input`
//   width: 20vw;
//   height: 4vh;
//   display: flex;
//   justify-content: center;
//   border-radius: 10px;
//   font-size: 3vh;
//   padding-left: 1vh;
//   color: #bbb;
//   margin-top: 2vh;
//   &::-webkit-outer-spin-button,
//   &::-webkit-inner-spin-button {
//     -webkit-appearance: none;
//   }
// `

// const Box = styled.div`
//   display: flex;
//   width: 700px;
//   justify-content: space-between;

//   @media (max-width: 900px) {
//     flex-direction: column;
//     align-items: center;
//     gap: 1vh;
//     width: 250px;

//     button {
//       width: 40%;
//     }
//   }
// `
// const Buttons = styled.button`
//   border: none;
//   border-radius: 3px;
//   background-color: #bbb;
//   font-size: 2vh;
//   width: 18%;
//   height: 4vh;
// `

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
//       <Container>
//         <Entry
//           onChange={this.handleChange}
//           value={this.state.n1}
//           type="number"
//         />
//         <Entry
//           onChange={this.handleChange2}
//           value={this.state.n2}
//           type="number"
//         />
//         <h2>{this.state.result}</h2>
//         <Box>
//           <Buttons onClick={this.multi}>multiplicar</Buttons>
//           <Buttons onClick={this.divi}>Dividir</Buttons>
//           <Buttons onClick={this.soma}>Somar</Buttons>
//           <Buttons onClick={this.sub}>Subtrair</Buttons>
//           <Buttons onClick={this.clear}>Limpar</Buttons>
//         </Box>
//       </Container>
//     )
//   }
// }
