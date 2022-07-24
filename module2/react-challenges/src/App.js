import React, { Component } from 'react'
import './App.css'

class App extends Component {
  state = {
    countNumber: 0,
  }

  add = () => {
    if (this.state.countNumber < 10) {
      this.setState({
        countNumber: this.state.countNumber + 1,
      })
    }
  }

  remove = () => {
    if (this.state.countNumber > 0) {
      this.setState({
        countNumber: this.state.countNumber - 1,
      })
    }
  }

  render() {
    return (
      <div>
        <section className='description'>
          <h1>Contador</h1>
          <p>Esse desafio em ReactJS foi realizado para a escola de programação <a href='https://www.vainaweb.com.br'>Vai na Web</a></p>
        </section>
        <section className='counter'>
          <h2>{this.state.countNumber}</h2>
          <button onClick={this.add}>+</button>
          <button onClick={this.remove}>-</button>
        </section>
        <footer>
          <a href='https://github.com/VitoriaCaminha' target='_blank'><h3>Vitória Caminha</h3></a>
        </footer>
      </div>
    )
  }
}

export default App
