// class 42: createGlobalStyle

import React, { useState, useEffect } from "react";
import axios from "axios";
import * as S from "./Style/Styles.js";

export default function Api() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((resposta) => {
        setInfo(resposta.data.results);
      })
      .catch((error) => {
        console.log("desculpe aconteceu um problema na requisição", error);
      });
  }, []);

  return (
    <div>
      {info.map((item) => (
        <section>
          <figure>
          <S.P>{item.name}</S.P>
            <img src={item.image} alt={item.name} />
          </figure>
        </section>
      ))}
    </div>
  );
}