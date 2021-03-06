import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 350px;
  height: 250px;
  border: dotted black;
  border-width: 1px;
`;

export default function Card({ children }) {
  return <Container>{children}</Container>;
}
