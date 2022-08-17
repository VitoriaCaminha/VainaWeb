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
                image: `https://image.tmdb.org/t/p/w500/${item.poster_path}` // tem também o backdrop ao inves do poster, que traz uma imagem de fundo
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
                    <div key={index}>
                        <ul>
                            <li>{item.original_title}</li>
                            <li>{item.overview}</li>
                            <li>{item.vote_average}</li>
                        </ul>
                        <img src={item.image} />
                    </div>
                ))}

            </>
        )
    }
}