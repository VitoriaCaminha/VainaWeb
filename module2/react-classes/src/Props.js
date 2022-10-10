// class 54: props

import React from 'react'

export default function Props(props){
  return (
    <div>
      <h1>{props.titulo}</h1>
      <button onClick={props.modal}>abrir</button>
    </div>
  )
}