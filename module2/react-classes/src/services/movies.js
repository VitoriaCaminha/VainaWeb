import React, { Component } from 'react'
import axios from 'axios'

const FilmesApi = axios.create({
  baseURL:
    'https://api.themoviedb.org/3/movie/popular?api_key=fe71ddd34e889522b4318fe3778f3dbc&language=en-US&page=1',
})

export default class Movies extends Component {
  state = {
      movies: []
  }

  componentDidMount() {
      this.getMovies()
  }

  getMovies = async () => {
      const resposta = await FilmesApi.get()
      console.log(resposta);


      const allFilmes = resposta.data.results.map((item) => {
          return {
              ...item,
              nome:item.original_title
          }

      })
      this.setState({
          movies: allFilmes
      })
      console.log(allFilmes)
  }

  render() {
      return (
          <>
              {this.state.movies.map((item, index) => (
                  <ul key={index}>
                      <li>{item.nome}</li>
                      <li>{item.overview}</li>
                      <li>{item.vote_average}</li>
                  </ul>
              ))}

          </>
      )
  }
}