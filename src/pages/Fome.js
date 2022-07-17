import React, { useState } from "react";
import styled from "styled-components";
// get our fontawesome imports
import { faBowlFood } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeaderStyled = styled.div`
  width: 80%;
  height: 100%;
  border: solid;
  color: white;
  background: red 0% 0% no-repeat padding-box;
`;

const IconAlign = styled.div`
  display: flex;
  margin-right: 5%;
  float: right;
`;

export default function Fome() {
  return (
    <>
      <HeaderStyled>
        <p>Objetivos de Desenvolvimento Sustentavel</p>
        <IconAlign>
          <FontAwesomeIcon icon={faBowlFood} size="5x" />
        </IconAlign>
        <h1>1</h1>
        <h1>Fome Zero</h1>

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
    </>
  );
}
