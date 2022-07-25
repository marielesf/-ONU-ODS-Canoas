import React from "react";
import styled from "styled-components";
import { GiHealthIncrease } from "react-icons/gi";

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
  background: #f0ce4e 0% 0% no-repeat padding-box;
`;

const IconAlign = styled.div`
  display: flex;
  margin-right: 5%;
  float: right;
`;

export default function Saude() {
  return (
    <Box>
      <Container>
        <HeaderStyled>
          <IconAlign>
            <GiHealthIncrease size={70} />
          </IconAlign>
          <h1>2 - Saúde e bem estar</h1>
          <p>
            Garantir o acesso à saúde de qualidade e promover o bem-estar para
            todos{" "}
          </p>
        </HeaderStyled>
        <strong>
          Assegurar uma vida saudável e promover o bem-estar para todas e todos,
          em todas as idades
        </strong>

        <ol>
          <li>Criar grupos de convivio para os idosos</li>
          <li>
            Organização da atividades, como passeata e alongamentos ao ao livre
            nos espaços publicos
          </li>
          <li>Acompanhamento medico para gravidas e acidentados</li>
          <li>
            Visita domiciliar de enfermeiros, para instruçoes de preparo de
            alimentos, n«banhos e curativos{" "}
          </li>
          <li>
            Utilização dos espaços publicos para criação de ortas comunitarias
          </li>
        </ol>
      </Container>
    </Box>
  );
}
