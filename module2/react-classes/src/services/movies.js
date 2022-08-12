import React, { Component } from 'react'
import axios from 'axios'

const FilmesApi = axios.create({
  baseURL:
    'https://api.themoviedb.org/3/movie/popular?api_key=fe71ddd34e889522b4318fe3778f3dbc&language=en-US&page=1',
})

export default class Movies extends Component {
  render() {
    return (
      <>
        <h1></h1>
      </>
    )
  }
}
