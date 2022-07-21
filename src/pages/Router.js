import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Work from "./Work";
import Jobs from "./Job";
import Home from "./Home";
import Fome from "./Fome";

import styled from "styled-components";

const BackgroundStyle = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const NavbarLink = styled(Link)`
  margin: 8px;
  text-decoration: none;
  &:hover,
  &:focus {
    color: #ffd852;
  }
`;

function RouterApp() {
  return (
    <>
      <BackgroundStyle>
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
      </BackgroundStyle>
    </>
  );
}

export default RouterApp;
