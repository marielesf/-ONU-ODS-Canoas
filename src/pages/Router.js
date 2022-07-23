import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Work from "./Work";
import Jobs from "./Job";
import Home from "./Home";
import Saude from "./Saude";
import Educacao from "./Educacao";
import Agua from "./Agua";

import styled from "styled-components";

const BackgroundStyle = styled.div`
  width: 100%;
`;

const Menu = styled.div`
  vertical-align: middle;
  height: 6vh;
  width: 500vh;
  display: table-cell;
`;

export const NavbarLink = styled(Link)`
  margin-right: 8px;
  height: 100%;
  justify-content: flex-end;
  justify-content: center;
  align-items: center;
  text-align: center;
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
          <Menu>
            <NavbarLink to="/">
              <strong>Home/</strong>
            </NavbarLink>
            <NavbarLink to="/Work">
              <strong>ONU Canoas/</strong>
            </NavbarLink>
            <NavbarLink to="/Jobs">
              <strong>Trabalhos Recentes/</strong>
            </NavbarLink>
          </Menu>
          <Routes>
            <Route path="/Work" element={<Work />} />
            <Route path="/Jobs" element={<Jobs />} />
            <Route path="/" element={<Home />} />
            <Route path="/Saude" element={<Saude />} />
            <Route path="/Educacao" element={<Educacao />} />
            <Route path="/Agua" element={<Agua />} />
          </Routes>
        </Router>
      </BackgroundStyle>
    </>
  );
}

export default RouterApp;
