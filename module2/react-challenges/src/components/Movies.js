// Desafio 05: Página filmes e séries

// import React, { Component } from 'react'
// import axios from 'axios'
// import styled from 'styled-components'
// import { createGlobalStyle } from 'styled-components'

// const GlobalStyle = createGlobalStyle`
// @import url('https://fonts.googleapis.com/css2?family=Boogaloo&display=swap');
// *{
//     margin:0;
//     padding:0;
//     box-sizing:border-box;
//     list-style:none;
//     font-family: 'Boogaloo', cursive;
// }
// `

// const Section = styled.section`
// display: flex;
// justify-content: space-evenly;
// width: 100%;
// flex-wrap: wrap;
// border-bottom: 1px solid;
// `

// const Div = styled.div`
// width: 60%;
// display: flex;
// justify-content: center;
// align-items: center;
// flex-direction: column;
// figure {
//     width: 40%;
//     display: flex;
//     justify-content: center;
// }
// `

// const Img = styled.img`
// width: 50%;
// `

// const Ul = styled.ul`
// display: flex;
// flex-direction: column;
// width: 50%;
// `

// const Title = styled.li`
// font-size: 1rem;
// `

// const Li = styled.li`
// font-size: 0.5rem;
// `

// const FilmesApi = axios.create({
//     baseURL: 'https://api.themoviedb.org/3/movie/popular?api_key=fe71ddd34e889522b4318fe3778f3dbc&language=en-US&page=1',
// })
// console.log(FilmesApi)


// export default class Movies extends Component {
//     state = {
//         movies: [],
//         FilterMovies: []
//     }

//     componentDidMount() {
//         this.getMovies();
//     }

//     getMovies = async () => {
//         const resposta = await FilmesApi.get()
//         console.log(resposta);


//         const allFilmes = resposta.data.results.map((item) => {
//             return {
//                 ...item,
//                 image: `https://image.tmdb.org/t/p/w500${item.poster_path}`
//             }

//         })
//         this.setState({
//             movies: allFilmes,
//             FilterMovies: allFilmes
//         })
//         console.log(allFilmes)
//     }

//     handleChange = (event) => {
//         const ListaFiltrada = this.state.movies.filter((item) => {
//             if (item.original_title.toLowerCase().includes(event.target.value.toLowerCase())) {
//                 return true
//             } else {
//                 return ""
//             }
//         })
//         this.setState({
//             FilterMovies: ListaFiltrada
//         })
//         console.log(this.state.FilterMovies)
//     }

//     render() {
//         return (
//             <>
//                 <GlobalStyle />
//                 <input onChange={this.handleChange} />
//                 {this.state.FilterMovies.map((item, index) => (
//                     <Section>
//                         <Div key={index}>
//                             <figure>
//                                 <Img src={item.image} alt='posters' />
//                             </figure>
//                             <Ul>
//                                 <Title>{item.original_title}</Title>
//                                 <Li>{item.overview}</Li>
//                                 <Li>Note: {item.vote_average}</Li>
//                             </Ul>
//                         </Div>
//                     </Section>
//                 ))}

//             </>
//         )
//     }
// }