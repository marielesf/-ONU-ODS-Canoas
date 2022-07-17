import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "./Card.js";
import Fome from "./Fome";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
`;

const Box = styled.main`
  border: solid yellow;
  height: 90vh;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;

const Titlebody = styled.h1`
  padding-top: 2%;
  font-family: Helvetica;
  color: #cbffa4;
`;

export default function Work() {
  const [modal, setModal] = useState(false);

  return (
    <>
      <Titlebody>Objetivos da ONU - Rio branco 2030</Titlebody>
      <Box>
        <GlobalStyle />
        <div
          onClick={() => {
            setModal((prevState) => !prevState);
          }}
        >
          <Card>
            <h3> 1 - Acabar com a fome</h3>
            <FontAwesomeIcon icon={faHome} size="3x" />
          </Card>
          {modal && <h1>Conteúdo</h1>}
        </div>

        <div
          onClick={() => {
            setModal((prevState) => !prevState);
          }}
        >
          <Card>
            <h3> 2 - Saúde e Bem-Estar</h3>
            <FontAwesomeIcon icon={faHome} size="3x" />
          </Card>
          {modal && <h1>Conteúdo</h1>}
        </div>

        <div
          onClick={() => {
            setModal((prevState) => !prevState);
          }}
        >
          <Card>
            <h3>3 - Educação </h3>
            <FontAwesomeIcon icon={faHome} size="3x" />
          </Card>
          {modal && <h1>Conteúdo</h1>}
        </div>

        <div
          onClick={() => {
            setModal((prevState) => !prevState);
          }}
        >
          <Card>
            <h3> 4 - Água Potável e Saneamento</h3>
            <FontAwesomeIcon icon={faHome} size="3x" />
          </Card>
          {modal && <h1>Conteúdo</h1>}
        </div>

        <div
          onClick={() => {
            setModal((prevState) => !prevState);
          }}
        >
          <Card>
            <h3>5 - Vida Terrestre</h3>
            <FontAwesomeIcon icon={faHome} size="3x" />
          </Card>
          {modal && <h1>Conteúdo</h1>}
        </div>

        <div
          onClick={() => {
            setModal((prevState) => !prevState);
          }}
        >
          <Card>
            <h3>6 - Ação Contra a Mudança Global do Clima</h3>
            <FontAwesomeIcon icon={faHome} size="3x" />
          </Card>
          {modal && <h1>Conteúdo</h1>}
        </div>

        <div
          onClick={() => {
            setModal((prevState) => !prevState);
          }}
        >
          <Card>
            <h3>
              7 - Criação de Empregos na Indústria, Inovação e Infraestrutura
            </h3>
            <FontAwesomeIcon icon={faHome} size="3x" />
          </Card>
          {modal && <h1>Conteúdo</h1>}
        </div>

        <div
          onClick={() => {
            setModal((prevState) => !prevState);
          }}
        >
          <Card>
            <h3>8 - Energia Limpa e Acessível</h3>
            <FontAwesomeIcon icon={faHome} size="3x" />
          </Card>
          {modal && <h1>Conteúdo</h1>}
        </div>
      </Box>
    </>
  );
}
