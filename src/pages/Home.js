import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import avatar from "../assets/avatar.png";
import avatar2 from "../assets/MyAvatar.png";
import space from "../assets/space.jpg";
import Footer from "./Footer";

const BackgroundStyle = styled.div`
  background-image: url(${space});
  height: 100%;
  width: 100%;
`;

const TitleName = styled.h1`
  font-family: Helvetica;
  font-size: 550%;
  margin-top: 11%;
  -webkit-text-stroke-width: 3px;
  -webkit-text-stroke-color: #ff71f4;
`;

const Textbody = styled.div`
  padding-top: 5%;
  font-family: Helvetica;
  color: #cbffa4;
`;

const PerfilImage = styled.img`
  height: 40%;
  width: 20%;
  animation-name: example;
  animation-duration: 5s;
`;

export const NameHome = styled.a`
  text-decoration: none;
  &:hover,
  &:focus {
    color: #ff71f4;
  }
`;

const Animar = keyframes`
0%{
  transform: translateX(300px);
  background-color: linear-gradient(45deg, blue, red);
  top: 40%;
}
`;

const Circle = styled.div`
  width: 25vw;
  height: 25vw;
  border-radius: 50%;
  border: solid;
  animation: ${Animar} 4s ease-out;
  position: absolute;
`;

export default function Home() {
  return (
    <>
      <BackgroundStyle>
        <Textbody>
          ---------
          <h2>Hello, I am Web Developer.</h2>
          <h2>Welcome to my portifolio.</h2>
        </Textbody>
        <Circle>
          <h1>Oi galera</h1>
        </Circle>
        <div
          style={{
            display: "flex",
            width: "100%",
            "justify-content": "center",
          }}
        >
          <TitleName>
            <NameHome>Mariele Fontana</NameHome>
          </TitleName>
          <PerfilImage src={avatar2} alt="Foto de Mariele"></PerfilImage>
        </div>
      </BackgroundStyle>

      <Footer />
    </>
  );
}
