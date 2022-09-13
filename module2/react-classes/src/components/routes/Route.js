// class 41: createGlobalStyle

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dogs from "../Dogs";
import Header from "../Header/Header";

export default function Router() {
  return (
    <BrowserRouter>
      <h1>Adote um animalzinho de estimação</h1>
      <Header rota="Home" rota2="Adote um doguinho" rota3="Adote um gatinho" />
      <Routes>
        <Route path="/" />
        <Route path="/dog" element={<Dogs />} />
        <Route path="/cat" />
      </Routes>
    </BrowserRouter>
  );
}