import React from "react";
import styled from "styled-components";
import { GiWaterDrop } from "react-icons/gi";

const Box = styled.main`
  height: 60vh;
  width: 90%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  text-align: left;
  margin-left: 5%;
`;

const Container = styled.div`
  width: 100%;
  margin-bottom: 10%;
  border: solid black;
  border-width: 1px;
`;

const HeaderStyled = styled.div`
  width: 100%;
  border: solid;
  color: white;
  background: #2b9eb3 0% 0% no-repeat padding-box;
`;

const IconAlign = styled.div`
  display: flex;
  margin-right: 5%;
  float: right;
`;

export default function Educacao() {
  return (
    <Box>
      <Container>
        <HeaderStyled>
          <IconAlign>
            <GiWaterDrop size={70} />
          </IconAlign>
          <h1>4 - Água potável e saneamento</h1>
          <p>
            Garantir a disponibilidade e a gestão sustentável da água potável e
            do saneamento para todos
          </p>
        </HeaderStyled>
        <strong>
          Assegurar a disponibilidade e gestão sustentável da água e saneamento
          para todas e todos
        </strong>

        <ol>
          <li>Proibir despejo de residuos no dick</li>
          <li>Efetuar a limpeza do dick semestralmente</li>
          <li>Criar encanamento de esgotos e agua</li>
        </ol>
      </Container>
    </Box>
  );
}
