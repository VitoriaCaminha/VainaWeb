// Mentoria: responsividade

import React, { Component } from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import { Main } from './Components/Main/Main.js'

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`

const Cabecalho = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: solid;
  max-width: 1920px;
  width: 100%;
  margin: auto;
  background-color: rgb(186, 224, 226);

  .logo {
    width: 20vw;
  }
`

const MenuInicial = styled.button`
  /* border: none; */
  background-color: rgb(186, 224, 226);
  font-size: 20px;
  border: solid;
  width: 30px;
  transform: scale(100%);
  &:hover {
    transition: ease-in-out 0.5s;
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  @media (min-width: 600px) {
    display: none;
  }
`

// Position se usa ou top e right ou bottom e left

const Lista = styled.ul`
  position: absolute;
  top: 10vw;
  right: 25%;
  display: flex;
  flex-direction: column;
  width: 10%;
  border: solid;
  list-style: none;
`

// const Menu = styled.nav`
//   display: none;
//   border: none;
//   background-color: rgb(186, 224, 226);
//   font-size: 20px;
// `

export default class Leandro extends Component {
  state = {
    nome: 'Restaurante',
    btn: '☰',
    open: false,
  }

  Mobile = () => {
    this.setState({
      open: !this.state.open,
    })
  }

  Modal = () => {
    return (
      <Lista>
        <li style={{ backgroundColor: 'red' }}>Inicio</li>
        <li>Sobre</li>
        <li>Contatos</li>
      </Lista>
    )
  }

  render() {
    return (
      <>
        <GlobalStyle />
        <Cabecalho>
          <img
            className="logo"
            src="https://dnxstorage.blob.core.windows.net/gruporequinte/Blog/UrlFotoPequena3..png"
            alt="logo"
          />
          <MenuInicial
            onClick={() => {
              this.Mobile()
            }}
          >
            {this.state.open ? (this.state.btn = 'X') : (this.state.btn = '☰')}
          </MenuInicial>
          {this.state.open && this.Modal()}
        </Cabecalho>
        <Main item1="batata" item2="batata frita" item3="purê de batata" batata='https://scontent.frec34-1.fna.fbcdn.net/v/t1.6435-9/109492881_159073022389163_7125991773886404490_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a26aad&_nc_ohc=ahYzIWCN5_AAX-jkoGc&_nc_ht=scontent.frec34-1.fna&oh=00_AT93cVnWG8lPATG1eGVWldroVuBfKMl-54_PsD-l_DB2UQ&oe=63157D88'>
          {/* <ol>
            <li>Batata</li>
            <li>Batata Frita</li>
            <li>Purê de Batata</li>
          </ol> */}
        </Main>
      </>
    )
  }
}

//  <ul className="close">
//   {this.state.menu.map((item, index) => (
//     <li key={index}>{item}</li>
//   ))}
// </ul>

// const menuHamburguer = document.querySelector('button')
// // console.log(this.state.menu)

// if (menuHamburguer.innerText === '☰') {
//   this.setState({
//     // fazer abrir e fechar a ul com React
//     menu: ['inicio', 'sobre', 'contatos'],
//     btn: (menuHamburguer.innerText = 'x'),
//   })
// } else {
//   this.setState({
//     menu: [],
//     btn: (menuHamburguer.innerText = '☰'),
//   })
// }

// state = {
//   frutas: '',
//   // [
//   //   { nome: 'Morango', cor: 'vermelho' },
//   //   { nome: 'Abacaxi', cor: 'amarelo' },
//   //   { nome: 'Acerola', cor: 'vermelho' },
//   //   { nome: 'Jaca', cor: 'amarelo' },
//   //   { nome: 'Limão', cor: 'verde' },
//   //   { nome: 'Jabuticaba', cor: 'roxo' },
//   // ],
//   // frutasVermelhas: [],
//   listaDeFrutas: '',
// }

// handleChange = () => ()

//   handleClick = () =>
//     this.setState({
//       listaDeFrutas: this.listaDeFrutas.concat(
//         this.state.frutas
//       ),
//       //{ frutas: this.state.frutas.map((item) => (item.nome))}
//       // ),
//       // frutasVermelhas: this.state.frutas.filter((element) => {
//       //   return element.cor === 'vermelho'
//       // }),
//     })

//   novasFrutas = (event) => {
//     this.setState({
//       frutas: event.target.innerHTML,
//     })
//   }

//   render() {
//     return (
//       <>
//         <h1>Frutas</h1>
//         <p>{this.state.listaDeFrutas}</p>
//         {/* {this.state.listaDeFrutas.map((item) => (
//           <p>{item.frutas}</p>
//         ))} */}
//         <button onClick={this.handleClick}>Mostrar</button>
//         <button onClick={this.novasFrutas}>Abacaxi</button>
//         {/* {this.state.frutas.map((item) => (
//           <p>{item.nome}</p>
//         ))}
//         <input onChange={this.handleChange} />
//         <button onClick={this.handleClick}>Filtrar</button>
//         {this.state.frutasVermelhas.map((item) => (
//           <p>{item.nome}</p>
//          ))} */}
//       </>
//     )
//   }
// }
