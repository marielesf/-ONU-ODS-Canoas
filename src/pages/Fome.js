import React, { useState } from "react";
import styled from "styled-components";
import { MdOutlineFoodBank, MdOutlineCastForEducation } from "react-icons/md";

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 10%;
  border: solid black;
  border-width: 1px;
`;

const HeaderStyled = styled.div`
  width: 100%;
  height: 100%;
  border: solid;
  color: white;
  background: #bf2a23 0% 0% no-repeat padding-box;
`;

const IconAlign = styled.div`
  display: flex;
  margin-right: 5%;
  float: right;
`;

export default function Fome() {
  return (
    <>
      <Container>
        <HeaderStyled>
          <IconAlign>
            <MdOutlineFoodBank size={70} />
          </IconAlign>
          <h1>1 - Fome Zero</h1>
          <p>Acabar com a fome em todo o bairro</p>
        </HeaderStyled>
        <strong>
          Acabar com a fome em todo o bairro com auxilio das entidades que já
          auxiliam a comunidade
        </strong>

        <ol>
          <li>Arrecadação de doação de comida nos mercado</li>
          <li>Organização da lista das familias/pessoas interressadas</li>
          <li>Distribuição de cestas basicas as familias</li>
          <li>Recolha de refeicoes em restaurantes para distribuição</li>
          <li>Utilização dos espaços publicos para criação de ortas</li>
        </ol>
      </Container>
    </>
  );
}
