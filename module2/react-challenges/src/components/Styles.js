// Desafio 07: Desafio Api

import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        list-style:none;
    }

`;

export const Foto = styled.img`
  width: 20vw;
  height: 15vh;
`;