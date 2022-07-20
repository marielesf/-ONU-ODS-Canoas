import React from "react";
import { GoOctoface } from "react-icons/go";
import { GoMail } from "react-icons/go";
import space from "../assets/space.jpg";

import styled, { createGlobalStyle } from "styled-components";
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
  background-color: #cbffa4;
  height: 100%;
  width: 100%;
  padding-right: 5%;
`;

export default function Footer() {
  return (
    <>
      <Textbody>
        <BackgroundStyle>
          <IconsNetwork>
            <a href="https://github.com/marielesf" target="_blank">
              {/* <img src="smiley.gif" alt="Github link" /> */}
              <GoOctoface />
              <h5>Github</h5>
            </a>
          </IconsNetwork>
          <IconsNetwork>
            <a href="mailto:someone@example.com" target="_blank">
              {/* <img src="smiley.gif" alt="Github link" /> */}
              <GoMail />
              <h5>Send email</h5>
            </a>
          </IconsNetwork>
        </BackgroundStyle>
      </Textbody>
    </>
  );
}
