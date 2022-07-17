import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Work from "./pages/Work";
import Fotos from "./pages/Fotos";
import Home from "./pages/Home";
import Fome from "./pages/Fome";
import space from "./assets/space.jpg";

import styled, { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  `;

export const NavbarLink = styled(Link)`
  color: #ffd852;
  margin: 10px;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  &:hover,
  &:focus {
    color: #ff8998;
  }
`;

const BackgroundStyle = styled.div`
  background-image: url(${space});
  height: 100vh;
  width: 100%;
  text-align: center;
  font-family: Helvetica;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <BackgroundStyle>
        <Router>
          <NavbarLink to="/">
            <strong>Home /</strong>
          </NavbarLink>
          <NavbarLink to="/Work">
            <strong>ONU Canoas /</strong>
          </NavbarLink>
          <NavbarLink to="/Fotos">
            <strong>Trabalhos Recentes /</strong>
          </NavbarLink>
          <NavbarLink to="/Fome">
            <strong>Fome /</strong>
          </NavbarLink>

          <Routes>
            <Route path="/Work" element={<Work />} />
            <Route path="/Fotos" element={<Fotos />} />
            <Route path="/" element={<Home />} />
            <Route path="/Fome" element={<Fome />} />
          </Routes>
        </Router>
      </BackgroundStyle>
    </>
  );
}

export default App;
