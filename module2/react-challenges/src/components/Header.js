// Desafio 07: Desafio Api

import React from "react";
import { Link } from "react-router-dom";

const Header = ({ rota, rota2 }) => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">{rota}</Link>
          </li>
          <li>
            <Link to="/dog">{rota2}</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;

// Desafio 05: Página filmes e séries

// import React, { Component } from "react";
// import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
// import Movies from "./Movies.js";
// import Series from "./Series.js";

// export default class Header extends Component {
//   render() {
//     return (
//       <BrowserRouter>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/series">Series</Link>
//             </li>
//           </ul>
//         </nav>
//         <Routes>
//           <Route path="/" element={<Movies />} />
//           <Route path="/series" element={<Series />} />
//         </Routes>
//       </BrowserRouter>
//     );
//   }
// }

// Desafio 04: props

// import React, { Component } from 'react'
// import styled from 'styled-components'

// const Container = styled.div`
//   border: solid;
//   width: 40vw;
// `

// const Subtitle = styled.h2`
//   font-size: 30px;
// `

// const Photo = styled.img`
//   width: 10vw;
// `

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

// Desafio 02: calculadora

// import React, { Component } from 'react'

// import styled from 'styled-components'

// export const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   font-size: 3.5vw;
//   color: #bbb;
// `

// export default class Header extends Component {
//   render() {
//     return (
//       <Container>
//         <h1>Calculadora</h1>
//       </Container>
//     )
//   }
// }
