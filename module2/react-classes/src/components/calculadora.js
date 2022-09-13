// class 37: modal

import React, { useState } from "react";

const Calculadora = () => {
  const [resultado, setResultado] = useState(0);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  return (
    <div>
      <input
        onChange={(e) => {
          setNum1(e.target.value);
        }}
      />
      <p>/</p>
      <input
        onChange={(e) => {
          setNum2(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setResultado(num1 / num2);
        }}
      >
        Resultado
      </button>
      <p>{resultado}</p>
    </div>
  );
};

export default Calculadora;