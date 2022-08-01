// Mentoria: responsividade

import React, { Component } from 'react'
import './App.css'
// import styled from 'styled-components'

// const MenuInicial = styled.button`
//   border: none;
//   background-color: rgb(186, 224, 226);
//   font-size: 20px;
//   width: 30px;

//   @media (min-width: 600px) {
//     display: none;
//   }
// `

// Position se usa ou top e right ou bottom e left

// const Lista = styled.ul`
//   position: absolute;
//   top: 10vw;
//   right: 25%;
//   display: flex;
//   flex-direction: column;
//   width: 10%;
// `

// const Menu = styled.nav`
//   background-color: blue;
//   width: 20%;
//   position: relative;
// `

export default class Leandro extends Component {
  state = {
    frutas: '',
    // [
    //   { nome: 'Morango', cor: 'vermelho' },
    //   { nome: 'Abacaxi', cor: 'amarelo' },
    //   { nome: 'Acerola', cor: 'vermelho' },
    //   { nome: 'Jaca', cor: 'amarelo' },
    //   { nome: 'Limão', cor: 'verde' },
    //   { nome: 'Jabuticaba', cor: 'roxo' },
    // ],
    // frutasVermelhas: [],
    listaDeFrutas: '',
  }

  // handleChange = () => ()

  handleClick = () =>
    this.setState({
      listaDeFrutas: this.listaDeFrutas.concat(
        this.state.frutas
      ),
      //{ frutas: this.state.frutas.map((item) => (item.nome))}
      // ),
      // frutasVermelhas: this.state.frutas.filter((element) => {
      //   return element.cor === 'vermelho'
      // }),
    })

  novasFrutas = (event) => {
    this.setState({
      frutas: event.target.innerHTML,
    })
  }

  render() {
    return (
      <>
        <h1>Frutas</h1>
        <p>{this.state.listaDeFrutas}</p>
        {/* {this.state.listaDeFrutas.map((item) => (
          <p>{item.frutas}</p>
        ))} */}
        <button onClick={this.handleClick}>Mostrar</button>
        <button onClick={this.novasFrutas}>Abacaxi</button>
        {/* {this.state.frutas.map((item) => (
          <p>{item.nome}</p>
        ))}
        <input onChange={this.handleChange} />
        <button onClick={this.handleClick}>Filtrar</button>
        {this.state.frutasVermelhas.map((item) => (
          <p>{item.nome}</p>
         ))} */}
      </>
    )
  }
}

// state = {
//   nome: 'Restaurante',
//   btn: '☰',
//   open: false,
// }

// Mobile = () => {
//   this.setState({
//     open: !this.state.open,
//   })
// }

// Modal = () => {
//   return (
//     <Lista>
//       <li>Inicio</li>
//       <li>Sobre</li>
//       <li>Contatos</li>
//     </Lista>
//   )
// }

// render() {
//   return (
//     <>
//       <header>
//         <img
//           className="logo"
//           src="https://dnxstorage.blob.core.windows.net/gruporequinte/Blog/UrlFotoPequena3..png"
//           alt="logo"
//         />
//         <MenuInicial
//           onClick={() => {
//             this.Mobile()
//           }}
//         >
//           {this.state.open ? (this.state.btn = 'X') : (this.state.btn = '☰')}
//         </MenuInicial>
//         {this.state.open && this.Modal()}
//       </header>
//     </>
//   )
// }
//

// {/* <ul className="close">
//   {/* {this.state.menu.map((item, index) => (
//     <li key={index}>{item}</li>
//   ))} */}
// </ul> */}

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
