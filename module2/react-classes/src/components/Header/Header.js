import React, { Component } from 'react'
import { Container, Photo, Subtitle } from './style'

export default class Header extends Component {
  render() {
    return (
      <Container>
        <Subtitle>{this.props.subtitulo}</Subtitle>
        <Photo src={this.props.logo} alt="logo" />
        <nav>
          <ul>
            <li>{this.props.lista}</li>
            <li>{this.props.lista2}</li>
            <li>{this.props.lista3}</li>
          </ul>
        </nav>
      </Container>
    )
  }
}
