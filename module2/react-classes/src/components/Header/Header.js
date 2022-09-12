// class 27: props

// import React, { Component } from 'react'
// import { Container, Photo, Subtitle } from './style'

// export default class Header extends Component {
//   render() {
//     return (
//       <Container>
//         <Subtitle>{this.props.subtitulo}</Subtitle>
//         <Photo src={this.props.logo} alt="logo" />
//         <nav>
//           <ul>
//             <li>{this.props.lista}</li>
//             <li>{this.props.lista2}</li>
//             <li>{this.props.lista3}</li>
//           </ul>
//         </nav>
//       </Container>
//     )
//   }
// }

// class 31: Rotas

// import React, { Component } from 'react'
// import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
// import Contatos from '../Contatos/Contatos'
// import Home from '../Home/Home'
// import Sobre from '../Sobre/Sobre'

// export default class Header extends Component {
//   render() {
//     return (
//       <BrowserRouter> // O browser cria o histórico de navegação
//         <h1>Vamos fazer umas rotas</h1>
//         <nav>
//           <li>
//             <Link to='/'>Home</Link> {/* O a é só uma ancoragem, o Link dá acesso ao location da minha aplicação */}
//           </li>
//           <li>
//             <Link to='/sobre'>Sobre</Link>
//           </li>
//           <li>
//             <Link to='/contatos'>Contatos</Link>
//           </li>
//         </nav>
//         <Routes>
//           <Route path='/' element={<Home />} />
//           <Route path='/sobre' element={<Sobre />} />
//           <Route path='/contatos' element={<Contatos />} />
//         </Routes>
//       </BrowserRouter>
//     )
//   }
// }

// class 32: Rotas

// import React, { Component } from "react";
// import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
// import Contatos from "../Contatos/Contatos";
// import Home from "../Home/Home";
// import Sobre from "../Sobre/Sobre";

// export default class Header extends Component {
//   render() {
//     return (
//       <BrowserRouter>
//         <h1>Vamos Fazer umas Rotas</h1>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/"> Home </Link>
//             </li>
//             <li>
//               <Link to="/sobre">Sobre</Link>
//             </li>
//             <li>
//               <Link to="/contatos">Contatos</Link>
//             </li>
//           </ul>
//         </nav>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/sobre" element={<Sobre />} />
//           <Route path="/contatos" element={<Contatos />} />
//         </Routes>
//       </BrowserRouter>
//     );
//   }
// }

// class 33: API

// import React, { Component } from 'react';
// import Home from '../../services/Home'
// import Movies from '../../services/movies';
// import {BrowserRouter ,Link, Route, Routes} from 'react-router-dom'

// class Header extends Component {
//     render() {
//         return (
//             <BrowserRouter>
//                 <h1>BatataFlix</h1>
//                 <nav>
//                     <ul>
//                         <li>
//                             <Link to='/'>Home</Link>
//                         </li>
//                         <li>
//                             <Link to='/movies'>Movies</Link>
//                         </li>
//                         <li>
//                             <Link to='/series'>Series</Link>
//                         </li>
//                     </ul>
//                 </nav>
//                 <Routes>
//                     <Route path='/' element={<Home />}/>
//                     <Route path='/movies' element={<Movies />}/>
//                 </Routes>
//             </BrowserRouter>
//         );
//     }
// }

// export default Header;

// class 34: axios

// import React, { Component } from "react";
// import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
// import Home from "../../services/Home.js";
// import Series from "../../services/Series.js";

// export default class Header extends Component {
//   render() {
//     return (
//       <BrowserRouter>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/"> Home</Link>
//             </li>
//             <li>
//               <Link to="/series">Series</Link>
//             </li>
//           </ul>
//         </nav>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/series" element={<Series />} />
//         </Routes>
//       </BrowserRouter>
//     );
//   }
// }
