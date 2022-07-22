import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
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
`;

export const NameHome = styled.a`
  text-decoration: none;
  &:hover,
  &:focus {
    color: #ff71f4;
  }
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
