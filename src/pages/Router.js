import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Work from "./Work";
import Jobs from "./Job";
import Home from "./Home";
import Fome from "./Fome";

import styled, { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  `;

export const NavbarLink = styled(Link)`
  margin: 10px;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  &:hover,
  &:focus {
    color: #ffd852;
  }
`;

function RouterApp() {
  return (
    <>
      <Router>
        <NavbarLink to="/">
          <strong>Home/</strong>
        </NavbarLink>
        <NavbarLink to="/Work">
          <strong>ONU Canoas/</strong>
        </NavbarLink>
        <NavbarLink to="/Jobs">
          <strong>Trabalhos Recentes/</strong>
        </NavbarLink>
        <NavbarLink to="/Fome">
          <strong>Fome/</strong>
        </NavbarLink>

        <Routes>
          <Route path="/Work" element={<Work />} />
          <Route path="/Jobs" element={<Jobs />} />
          <Route path="/" element={<Home />} />
          <Route path="/Fome" element={<Fome />} />
        </Routes>
      </Router>
    </>
  );
}

export default RouterApp;
