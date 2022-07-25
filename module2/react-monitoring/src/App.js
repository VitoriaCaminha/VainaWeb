// Mentoria: responsividade

import React, { Component } from 'react'
import './App.css'

export default class Leandro extends Component {
  state = {
    nome: 'Restaurante',
    menu: ['inicio', 'sobre', 'contatos'],
    btn: '☰',
  }

  Modal = () => {
    const menuHamburguer = document.querySelector('button')
    // console.log(this.state.menu)
    if (menuHamburguer.innerText === '☰') {
      this.setState({
        // fazer abrir e fechar a ul com React
        menu: ['inicio', 'sobre', 'contatos'],
        btn: (menuHamburguer.innerText = 'x'),
      })
    } else {
      this.setState({
        menu: [],
        btn: (menuHamburguer.innerText = '☰'),
      })
    }
  }

  render() {
    return (
      <>
        <header>
          <img
            className="logo"
            src="https://dnxstorage.blob.core.windows.net/gruporequinte/Blog/UrlFotoPequena3..png"
            alt="logo"
          />
          <nav>
            <ul className="close">
              {this.state.menu.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <button className="menu" onClick={this.Modal}>
              {this.state.btn}
            </button>
          </nav>
        </header>
        <main></main>
      </>
    )
  }
}
