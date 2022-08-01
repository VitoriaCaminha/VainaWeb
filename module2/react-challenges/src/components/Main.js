import React, { Component } from 'react'
import styled from 'styled-components'
import { Container } from './Header'

const Entry = styled.input`
  width: 20vw;
  height: 4vh;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  font-size: 3vh;
  padding-left: 1vh;
  color: #bbb;
  margin-top: 2vh;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`

const Box = styled.div`
  display: flex;
  width: 700px;
  justify-content: space-between;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    gap: 1vh;
    width: 250px;

    button {
      width: 40%;
    }
  }
`
const Buttons = styled.button`
  border: none;
  border-radius: 3px;
  background-color: #bbb;
  font-size: 2vh;
  width: 18%;
  height: 4vh;
`

export default class Main extends Component {
  state = {
    n1: '', // o : se chama 'transforma'
    n2: '',
    result: 0,
  }

  handleChange = (event) => {
    this.setState({
      n1: Number(event.target.value),
    })
  }

  handleChange2 = (event) => {
    this.setState({
      n2: Number(event.target.value),
    })
  }

  multi = () => {
    const { n1, n2 } = this.state
    this.setState({
      result: n1 * n2,
    })
  }

  divi = () => {
    const { n1, n2 } = this.state
    this.setState({
      result: n1 / n2,
    })
  }

  soma = () => {
    const { n1, n2 } = this.state
    this.setState({
      result: n1 + n2,
    })
  }

  sub = () => {
    const { n1, n2 } = this.state
    this.setState({
      result: n1 - n2,
    })
  }

  clear = () => {
    this.setState({
      n1: '',
      n2: '',
      result: 0,
    })
  }

  render() {
    return (
      <Container>
        <Entry
          onChange={this.handleChange}
          value={this.state.n1}
          type="number"
        />
        <Entry
          onChange={this.handleChange2}
          value={this.state.n2}
          type="number"
        />
        <h2>{this.state.result}</h2>
        <Box>
          <Buttons onClick={this.multi}>multiplicar</Buttons>
          <Buttons onClick={this.divi}>Dividir</Buttons>
          <Buttons onClick={this.soma}>Somar</Buttons>
          <Buttons onClick={this.sub}>Subtrair</Buttons>
          <Buttons onClick={this.clear}>Limpar</Buttons>
        </Box>
      </Container>
    )
  }
}
