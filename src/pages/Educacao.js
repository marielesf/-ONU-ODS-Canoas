import React from "react";
import styled from "styled-components";
import { MdOutlineCastForEducation } from "react-icons/md";

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
  background: #a6ad3c 0% 0% no-repeat padding-box;
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
            <MdOutlineCastForEducation size={70} />
          </IconAlign>
          <h1>3 - Educação de qualidade</h1>
          <p>Garantir o acesso à educação inclusiva e de qualidade</p>
        </HeaderStyled>
        <strong>
          Assegurar a educação inclusiva e equitativa e de qualidade, e promover
          oportunidades de aprendizagem ao longo da vida para todas e todos
        </strong>

        <ol>
          <li>
            Reduzir o numero de alunos nas salas de aula promovendo um ensino
            mais participativo e personalizado
          </li>
          <li>
            Adicionar aulas de educação sexual, finanças e curriculo e carreira
          </li>
          <li>
            {" "}
            Adicionar aulas de primeiros socorros, medicina antiga e legislação
          </li>
          <li>
            Efetuar manutenção mensalmente nas escolas afim de corrigir
            problemas com janelas, portas, mesas e banheiros
          </li>
          <li>
            Criar de creches com horario integral para pais poderem trabalhar
          </li>
        </ol>
      </Container>
    </Box>
  );
}
