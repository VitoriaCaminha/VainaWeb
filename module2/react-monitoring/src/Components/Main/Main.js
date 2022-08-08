import React from 'react'

export const Main = (props) => {
  return (
    <div>
      <ol>
        <li>{props.item1}</li>
        <li>{props.item2}</li>
        <li>{props.item3}</li>
      </ol>
      <img src={props.batata} />
    </div>
  )
}

// export default Main
