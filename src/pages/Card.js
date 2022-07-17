import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const Container = styled.div`
  width: 20vw;
  height: 25vh;
  border: solid red;
`;

export default function Card({ children }) {
  return <Container>{children}</Container>;
}
