// class 27: props

// import React from 'react'

// export const Main = (props, {children}) => {
//     return(
//         <div>
//             {children}
//             <h3>{props.caixa}</h3>
//         </div>
//     )
// }

// import React from 'react'

// const Main = ({grupo2, children}) => {
//   return (
//     <div>
//         {children}
//       <h1>{grupo2}</h1>
//     </div>
//   )
// }

// export default Main

// class 39: ToDo

// import React, { useState } from "react";

// function Main() {
//   const [tarefas, setTarefas] = useState("");
//   const [lista, setLista] = useState([]);
//   const tarefa = { tarefa: tarefas, id: Date.now() };

//   const Add = () => {
//     setLista([...lista, tarefa]);
//   };

//   return (
//     <div>
//       <input
//         onChange={(e) => {
//           setTarefas(e.target.value);
//         }}
//       />
//       <button
//         onClick={() => {
//           Add();
//         }}
//       >
//         Enviar
//       </button>
//       {lista.map((item, index) => (
//         <div key={index}>
//           <input type="checkbox" />
//           <label>{item.tarefa}</label>
//           <button onClick={(id) =>
//              {setLista(lista.filter((item) => item.id === id))}}>
//             X
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// }
// export default Main;