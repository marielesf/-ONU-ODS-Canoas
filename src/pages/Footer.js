import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";
import { BiMailSend } from "react-icons/bi";
import styled from "styled-components";
import { ConvertPxToVW } from "./styles/global";

const Textbody = styled.div`
  width: 100%;
  height: ${ConvertPxToVW(70)};
  font-family: Helvetica;
`;

const IconsNetwork = styled.div`
  display: flex;
  justify-content: flex-end;
  float: right;
  width: ${ConvertPxToVW(150)};
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

const Copyright = styled.p`
  display: flex;
  justify-content: rigth;
  width: 75%;
  padding-left: 5%;
  align-items: center;
  font-size: ${ConvertPxToVW(20)};
`;

export default function Footer() {
  return (
    <>
      <Textbody>
        <BackgroundStyle>
          <Copyright>
            <b>Copyright@2022</b>
          </Copyright>
          <IconsNetwork>
            <a href="https://github.com/marielesf" target="_blank">
              <BsGithub size={18} />
            </a>
          </IconsNetwork>
          <IconsNetwork>
            <a href="mailto:someone@example.com" target="_blank">
              <BiMailSend size={18} />
            </a>
          </IconsNetwork>

          <IconsNetwork>
            <a href="https://www.linkedin.com/" target="_blank">
              <AiOutlineLinkedin size={18} />
            </a>
          </IconsNetwork>
        </BackgroundStyle>
      </Textbody>
    </>
  );
}
