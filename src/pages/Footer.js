import React from "react";
import { GoOctoface } from "react-icons/go";
import { GoMail } from "react-icons/go";
import space from "../assets/space.jpg";

import styled, { createGlobalStyle } from "styled-components";
const Textbody = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 50px;
  font-family: Helvetica;
`;

const IconsNetwork = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const BackgroundStyle = styled.div`
  background-image: url(${space});
  height: 100%;
  width: 100%;
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
