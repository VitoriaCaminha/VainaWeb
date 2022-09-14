// class 41: createGlobalStyle

// import React, { useState } from "react";
// import axios from "axios";
// import * as S from "./Style/Styles";

// const Dogs = () => {
//   const [data, setData] = useState(null);
//   const [open, setOpen] = useState(false);

//   const API = "https://dog.ceo/api/breeds/image/random";

//   const DogsApi = () => {
//     axios
//       .get(API)
//       .then((resposta) => {
//         setData(resposta.data.message);
//         console.log(data);
//       })
//       .catch((error) => {
//         console.log("Desculpe aconteceu um erro na requisição", error);
//       });
//   };

//   /* const Mostrar = () => {
//         setOpen(!open)
//     }
//  */
//   return (
//     <div>
//       <h2>Clique no botão para gerar um Amigão</h2>
//       <S.Foto src={data} alt="nome" />
//       <button
//         onClick={() => {
//           DogsApi();
//         }}>
//         Clique aqui
//       </button>
//     </div>
//   );
// };

// export default Dogs;