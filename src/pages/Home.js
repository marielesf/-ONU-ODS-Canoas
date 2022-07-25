import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import avatar2 from "../assets/MyAvatar.png";
import space from "../assets/space.jpg";
import Footer from "./Footer";
import { ConvertPxToVW } from "./styles/global";

const BackgroundStyle = styled.div`
  background-image: url(${space});
  height: 100%;
  width: 100%;
`;

const TitleName = styled.h1`
  font-family: Helvetica;
  font-size: ${ConvertPxToVW(110)};
  margin-top: ${ConvertPxToVW(120)};
  -webkit-text-stroke-width: ${ConvertPxToVW(3)};
  -webkit-text-stroke-color: #ff71f4;
`;

const Textbody = styled.div`
  padding-top: 5%;
  font-family: Helvetica;
  color: #cbffa4;
  font-size: ${ConvertPxToVW(40)};
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

const blinkTextCursor = keyframes`
  from {border-right-color: rgba(0, 0, 0, .75);}
  to {border-right-color: transparent}
`;

const TextCursor = styled.span`
  border-right: 2px solid rgba(0, 0, 0, 0.75);
  display: inline;

  /* A mágica acontece aqui */
  animation: ${blinkTextCursor} 0.7s steps(44) infinite normal;
`;

const Container = styled.p`
  display: inline-block;
  margin: 0;
`;

function TypeWriter({ value }) {
  const [text, setText] = useState("");

  const typeWriter = (text, i = 0) => {
    if (i < value.length) {
      setText(text.slice(0, i + 1));
      setTimeout(() => {
        typeWriter(text, i + 1);
      }, 100);
    }
  };

  useEffect(() => {
    typeWriter(value);
  }, []);

  return (
    <Container>
      {text}
      <TextCursor />
    </Container>
  );
}

export default function Home() {
  return (
    <>
      <BackgroundStyle>
        <Textbody>
          <TypeWriter value="---------" />
          <br />
          <TypeWriter value="Hello, I am Web Developer." />
          <br />
          Welcome to my portifolio.
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
