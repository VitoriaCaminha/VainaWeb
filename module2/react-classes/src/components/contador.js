// class 37: modal

import React, { useState } from "react";

const Contador = () => {
  const [num, setNum] = useState(0);

  return (
    <div>
      <h2>{num}</h2>
      <button
        onClick={() => {
          setNum(num < 10 ? num + 1 : num);
        }}
      >
        Conta 1
      </button>
      <button
        onClick={() => {
          setNum(num - 1);
        }}
      >
        Diminui 1
      </button>
    </div>
  );
};

export default Contador;