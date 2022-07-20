import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Card from "./Card.js";
import axios from "axios";

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
`;

const Box = styled.main`
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
`;

export default function Jobs() {
  const [repo, setrepo] = useState([]);

  useEffect(() => {
    axios.get("https://api.github.com/users/marielesf/repos").then((item) => {
      console.log(item.data);
      setrepo(item.data);
    });
  }, []);

  return (
    <>
      <Titlebody>Trabalhos Recentes</Titlebody>
      <Box>
        <GlobalStyle />
        {repo
          .filter((iten) => iten.size > 400)
          .map((filteredRepo, index) => (
            <Card key={index}>
              <h3>{filteredRepo.name}</h3>
              {/* <iframe
                src={`https://raw.githubusercontent.com/marielesf/${filteredRepo.name}#README.md&embedded=true`}
                title="description"
              ></iframe> */}

              {/* <object
                data={`https://github.com/marielesf/${filteredRepo.name}#README.md`}
                width="800"
                height="800"
                type="text/html"
              ></object> */}

              {/* <embed
                type="text/html"
                src={`https://raw.githubusercontent.com/marielesf/${filteredRepo.name}#README.md&embedded=true`}
                width="800"
                height="500"
              /> */}

              <a href={filteredRepo.html_url} target="_blank" rel="noreferrer">
                Saiba Mais
              </a>
            </Card>
          ))}{" "}
      </Box>
    </>
  );
}
