import React, { useState } from "react";
import styled from "styled-components";
import Card from "./Card.js";
import Footer from "./Footer.js";
import {
  GiHealthIncrease,
  GiWaterDrop,
  GiFruitTree,
  GiRollingEnergy,
} from "react-icons/gi";
import { MdOutlineFoodBank, MdOutlineCastForEducation } from "react-icons/md";
import { TiWeatherShower } from "react-icons/ti";
import { FaIndustry } from "react-icons/fa";
import Fome from "./Fome";

const Box = styled.main`
  height: auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  margin: 3%;
`;

const Titlebody = styled.h2`
  padding-top: 2%;
  font-family: Helvetica;
`;

const BodyParaghp = styled.p`
  padding-top: 2%;
  font-family: Helvetica;
  margin-left: 10%;
  margin-right: 10%;
  text-align: justify;
  text-justify: inter-word;
`;

const CardText = styled.div`
  align-items: center;
  display: flex;
`;

const CardIcon = styled.div`
  margin-top: 20%;
  cursor: pointer;
`;

export const LinkGoals = styled.a`
  text-decoration: none;
  color: black;
`;

export default function Work() {
  const [modal, setModal] = useState(false);

  return (
    <>
      <Titlebody>
        Os Objetivos de Desenvolvimento Sustentável na Rio branco - 2030
      </Titlebody>
      <BodyParaghp>
        Os Objetivos de Desenvolvimento Sustentável são um apelo global à ação
        para acabar com a pobreza, proteger o meio ambiente e o clima e garantir
        que as pessoas, em todos os lugares, possam desfrutar de paz e de
        prosperidade. Estes são os objetivos para os quais as Nações Unidas
        estão contribuindo a fim de que possamos atingir a Agenda 2030 no
        Brasil.
      </BodyParaghp>

      {modal && (
        <BodyParaghp>
          <Fome></Fome>
        </BodyParaghp>
      )}

      <Box>
        <div
          style={{ backgroundColor: "#bf2a23" }}
          onClick={() => {
            setModal((prevState) => !prevState);
          }}
        >
          <Card>
            <CardText>
              <h1> 1 </h1>
              <h3> Acabar com a fome</h3>
            </CardText>
            <CardIcon>
              <MdOutlineFoodBank size={70} />
            </CardIcon>
          </Card>
        </div>
        <div
          style={{ backgroundColor: "#f0ce4e" }}
          onClick={() => {
            setModal((prevState) => !prevState);
          }}
        >
          <Card>
            <LinkGoals href="./Saude">
              <CardText>
                <h1> 2 </h1>
                <h3> Saúde e Bem-Estar</h3>
              </CardText>
              <CardIcon>
                <GiHealthIncrease size={70} />
              </CardIcon>
            </LinkGoals>
          </Card>
        </div>
        <div
          style={{ backgroundColor: "#a6ad3c" }}
          onClick={() => {
            setModal((prevState) => !prevState);
          }}
        >
          <Card>
            <LinkGoals href="./Educacao">
              <CardText>
                <h1> 3 </h1>
                <h3> Educação </h3>
              </CardText>
              <CardIcon>
                <MdOutlineCastForEducation size={70} />
              </CardIcon>
            </LinkGoals>
          </Card>
        </div>
        <div
          style={{ backgroundColor: "#2b9eb3" }}
          onClick={() => {
            setModal((prevState) => !prevState);
          }}
        >
          <Card>
            <LinkGoals href="./Agua">
              <CardText>
                <h1> 4 </h1>
                <h3> Água Potável e Saneamento</h3>
              </CardText>
              <CardIcon>
                <GiWaterDrop size={70} />
              </CardIcon>
            </LinkGoals>
          </Card>
        </div>
        <div style={{ backgroundColor: "#cbffa4" }} onClick={() => {}}>
          <Card>
            <CardText>
              <h1> 5 </h1> <h3> Vida Terrestre</h3>
            </CardText>
            <CardIcon>
              <GiFruitTree size={70} />
            </CardIcon>
          </Card>
        </div>
        <div style={{ backgroundColor: "#ff8998" }} onClick={() => {}}>
          <Card>
            <CardText>
              <h1> 6 </h1>
              <h3> Ação Contra a Mudança Global do Clima</h3>
            </CardText>
            <CardIcon>
              <TiWeatherShower size={70} />
            </CardIcon>
          </Card>
        </div>
        <div style={{ backgroundColor: "#e88700" }} onClick={() => {}}>
          <Card>
            <CardText>
              <h1>7 </h1>
              <h3>
                Criação de Empregos na Indústria, Inovação e Infraestrutura{" "}
              </h3>
            </CardText>
            <CardIcon>
              <FaIndustry size={70} />
            </CardIcon>
          </Card>
        </div>
        <div style={{ backgroundColor: "#fffb5c" }} onClick={() => {}}>
          <Card>
            <CardText>
              <h1>8 </h1>
              <h3> Energia Limpa e Acessível</h3>
            </CardText>
            <CardIcon>
              <GiRollingEnergy size={70} />
            </CardIcon>
          </Card>
        </div>
      </Box>

      <Footer />
    </>
  );
}
