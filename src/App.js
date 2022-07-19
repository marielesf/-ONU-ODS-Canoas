import React from "react";
import RouterApp from "./pages/Router";

import space from "./assets/space.jpg";
import styled, { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  `;
const BackgroundStyle = styled.div`
  width: 100%;
  text-align: center;
  font-family: Helvetica;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <BackgroundStyle>
        <RouterApp />
      </BackgroundStyle>
    </>
  );
}

export default App;
