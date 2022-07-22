import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Card from "./Card.js";
import axios from "axios";
import Footer from "./Footer.js";

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

const BoxImage = styled.div`
  height: 80%;
  width: auto;
  overflow: hidden;
`;

const Titlebody = styled.h1`
  padding-top: 2%;
  font-family: Helvetica;
  color: #ff8998;
`;

const Data = [
  {
    id: 1,
    img: "https://user-images.githubusercontent.com/17839848/179429756-22bc4ad8-e4cb-4025-bc72-373ad89818a1.png",
  },
  {
    id: 2,
    img: "https://user-images.githubusercontent.com/17839848/146626471-30230e2a-a8b1-4ac2-bde5-39f0d1cc031c.png",
  },
  {
    id: 3,
    img: "https://user-images.githubusercontent.com/17839848/180328802-5319fc8a-cf89-4ed7-b4f9-d88f96e98aa5.png",
  },
  {
    id: 5,
    img: "https://user-images.githubusercontent.com/17839848/156077567-007f0fee-d73b-4eeb-9064-8c6657427732.png",
  },
  {
    id: 6,
    img: "https://user-images.githubusercontent.com/17839848/146284212-1ada3199-7542-4e76-9c09-474e017f15f9.png",
  },
  {
    id: 7,
    img: "https://user-images.githubusercontent.com/17839848/174409466-1516dda7-9bf9-4744-af65-4514aecf0b6e.png",
  },
  {
    id: 8,
    img: "https://user-images.githubusercontent.com/17839848/161453629-a9ca0314-6292-4f65-a9e3-ffdd0b3ac826.png",
  },
  {
    id: 4,
    img: "https://user-images.githubusercontent.com/17839848/156270456-5c5c9196-ea6c-41e7-bebd-e5ecb31729d1.png",
  },
];

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
              <BoxImage>
                <img src={Data[index].img} width="380px"></img>
              </BoxImage>
              <a href={filteredRepo.html_url} target="_blank" rel="noreferrer">
                Saiba Mais
              </a>
            </Card>
          ))}{" "}
      </Box>
      <Footer />
    </>
  );
}
