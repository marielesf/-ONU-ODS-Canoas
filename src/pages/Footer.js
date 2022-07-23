import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";
import { BiMailSend } from "react-icons/bi";
import styled from "styled-components";

const Textbody = styled.div`
  width: 100%;
  height: 50px;
  font-family: Helvetica;
`;

const IconsNetwork = styled.div`
  display: flex;
  justify-content: flex-end;
  float: right;
  width: 5%;
  height: 100%;
  align-items: center;
`;

const BackgroundStyle = styled.div`
  display: flex;
  justify-content: justify;
  background-color: #cbffa4;
  height: 100%;
  width: 100%;
  padding-right: 7%;
`;

const Copyright = styled.h4`
  display: flex;
  justify-content: rigth;
  width: 85%;
  padding-left: 5%;
  align-items: center;
`;

export default function Footer() {
  return (
    <>
      <Textbody>
        <BackgroundStyle>
          <Copyright>copyright@2022</Copyright>
          <IconsNetwork>
            <a href="https://github.com/marielesf" target="_blank">
              <BsGithub size={28} />
            </a>
          </IconsNetwork>
          <IconsNetwork>
            <a href="mailto:someone@example.com" target="_blank">
              <BiMailSend size={28} />
            </a>
          </IconsNetwork>

          <IconsNetwork>
            <a href="https://www.linkedin.com/" target="_blank">
              <AiOutlineLinkedin size={28} />
            </a>
          </IconsNetwork>
        </BackgroundStyle>
      </Textbody>
    </>
  );
}
