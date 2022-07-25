import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-color: blue;
  width: 20%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Input1 = styled.input`
  background-color: blueviolet;
`

const Input2 = styled.input`
  background-color: pink;
`

export default class Main extends Component {
  state = {
    value1: '',
    value2: '',
    result: '',
  }

  handleChange = (event) => {
    this.setState({
      value1: event.target.value,
    })
  }

  handleChange2 = (event) => {
    this.setState({
      value2: event.target.value,
    })
  }

  Multiply = () => {
    this.setState({
      result: this.state.value1 * this.state.value2,
    })
  }

  render() {
    return (
      <Container>
        <Input1 value={this.state.value1} onChange={this.handleChange} />
        <Input2 value={this.state.value2} onChange={this.handleChange2} />
        <p>{this.state.result}</p>
        <button onClick={this.Multiply}>Multiplicar</button>
      </Container>
    )
  }
}
