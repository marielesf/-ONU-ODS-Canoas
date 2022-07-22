import React, { useState } from "react";
import styled from "styled-components";
import Card from "./Card.js";
import Footer from "./Footer.js";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { MdOutlineFoodBank } from "react-icons/md";

const Box = styled.main`
  border: solid yellow;
  height: 90vh;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  font-color: white;
`;

const Titlebody = styled.h1`
  padding-top: 2%;
  font-family: Helvetica;
  color: #ff8998;
`;

const OnuGoals = [
  {
    title: "1 - ACABAR COM A FOME",
    icon: "MdOutlineFoodBank",
    color: "red",
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
    id: 4,
    img: "https://user-images.githubusercontent.com/17839848/156270456-5c5c9196-ea6c-41e7-bebd-e5ecb31729d1.png",
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
];

export default function Work() {
  const [modal, setModal] = useState(false);

  return (
    <>
      <Titlebody>
        Objetivos de Desenvolvimento Sustentável - Rio branco 2030
      </Titlebody>
      <Box>
        <div
          style={{ backgroundColor: "#bf2a23" }}
          onClick={() => {
            setModal((prevState) => !prevState);
          }}
        >
          <Card>
            <h3> 1 - ACABAR COM A FOME</h3>
            <MdOutlineFoodBank size={70} />
          </Card>
          {modal && <h1>Conteúdo</h1>}
        </div>
        <div
          style={{ backgroundColor: "#f0ce4e" }}
          onClick={() => {
            setModal((prevState) => !prevState);
          }}
        >
          <Card>
            <h3> 2 - Saúde e Bem-Estar</h3>
          </Card>
          {modal && <h1>Conteúdo</h1>}
        </div>
        <div
          style={{ backgroundColor: "#a6ad3c" }}
          onClick={() => {
            setModal((prevState) => !prevState);
          }}
        >
          <Card>
            <h3>3 - Educação </h3>
          </Card>
          {modal && <h1>Conteúdo</h1>}
        </div>
        <div
          style={{ backgroundColor: "#2b9eb3" }}
          onClick={() => {
            setModal((prevState) => !prevState);
          }}
        >
          <Card>
            <h3> 4 - Água Potável e Saneamento</h3>
          </Card>
          {modal && <h1>Conteúdo</h1>}
        </div>
        <div
          style={{ backgroundColor: "#cbffa4" }}
          onClick={() => {
            setModal((prevState) => !prevState);
          }}
        >
          <Card>
            <h3>5 - Vida Terrestre</h3>
          </Card>
          {modal && <h1>Conteúdo</h1>}
        </div>
        <div
          style={{ backgroundColor: "#ff8998" }}
          onClick={() => {
            setModal((prevState) => !prevState);
          }}
        >
          <Card>
            <h3>6 - Ação Contra a Mudança Global do Clima</h3>
          </Card>
          {modal && <h1>Conteúdo</h1>}
        </div>
        <div
          style={{ backgroundColor: "#e88700" }}
          onClick={() => {
            setModal((prevState) => !prevState);
          }}
        >
          <Card>
            <h3>
              7 - Criação de Empregos na Indústria, Inovação e Infraestrutura
            </h3>
          </Card>
          {modal && <h1>Conteúdo</h1>}
        </div>
        <div
          style={{ backgroundColor: "#fffb5c" }}
          onClick={() => {
            setModal((prevState) => !prevState);
          }}
        >
          <Card>
            <h3>8 - Energia Limpa e Acessível</h3>
          </Card>
          {modal && <h1>Conteúdo</h1>}
        </div>
      </Box>
      <Footer />
    </>
  );
}
