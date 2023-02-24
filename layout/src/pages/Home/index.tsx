import React, { useState } from "react";
import {
  BoxCard,
  Card,
  Container,
  Item,
  Left,
  Line,
  Logo,
  Right,
  TitleRight,
} from "./styles";

import imgContato from "../../assets/contato.svg";
import imgInicio from "../../assets/inicio.svg";
import imgLogo from "../../assets/logo.svg";
import imgRelatorios from "../../assets/relatorios.svg";
import imgCard from "../../assets/image 7.svg";
import { variants } from "../../utils/motionConfig";

interface ItemsProps {
  img: string;
  label: string;
  active: boolean;
}

const Home: React.FC = () => {
  const [active, setActive] = useState<number>(0);

  const items: ItemsProps[] = [
    { img: imgInicio, label: "Inicio", active: active === 0 && true },
    { img: imgContato, label: "Contatos", active: active === 1 && true },
    { img: imgRelatorios, label: "Relatórios", active: active === 2 && true },
    { img: imgContato, label: "Contatos", active: active === 3 && true },
    { img: imgContato, label: "Contatos", active: active === 4 && true },
    //{ img: imgContato, label: "Contatos", active: active === 5 && true },
  ];

  const handleActive = (item: ItemsProps, index: number) => {
    setActive(index);
  };

  return (
    <Container>
      <Left variants={variants.home} animate="visible" initial="hidden">
        <Logo variants={variants.itemHome}>
          <img src={imgLogo} alt="tropa digital" />
        </Logo>

        {items.map((item, index) => (
          <Item
            key={index}
            active={item.active}
            onClick={() => handleActive(item, index)}
            variants={variants.itemHome}
          >
            <img src={item.img} alt="inicio" />
            <span>{item.label}</span>
          </Item>
        ))}
      </Left>

      <Right>
        <TitleRight>
          Olá <span>Usuário</span>
          <Line />
        </TitleRight>

        <BoxCard variants={variants.home} animate="visible" initial="hidden">
          <Card variants={variants.itemHome}>
            <img src={imgCard} alt="" />
            <h3>
              Lorem Ipsum is simply dummy text of the printing and typesettin...
            </h3>

            <h4>
              Lorem Ipsum is simply dummy text of the printing and typesettin.
            </h4>
          </Card>

          <Card variants={variants.itemHome}>
            <img src={imgCard} alt="" />
            <h3>
              Lorem Ipsum is simply dummy text of the printing and typesettin...
            </h3>

            <h4>
              Lorem Ipsum is simply dummy text of the printing and typesettin.
            </h4>
          </Card>

          <Card variants={variants.itemHome}>
            <img src={imgCard} alt="" />
            <h3>
              Lorem Ipsum is simply dummy text of the printing and typesettin...
            </h3>

            <h4>
              Lorem Ipsum is simply dummy text of the printing and typesettin.
            </h4>
          </Card>

          <Card variants={variants.itemHome}>
            <img src={imgCard} alt="" />
            <h3>
              Lorem Ipsum is simply dummy text of the printing and typesettin...
            </h3>

            <h4>
              Lorem Ipsum is simply dummy text of the printing and typesettin.
            </h4>
          </Card>
          <Card variants={variants.itemHome}>
            <img src={imgCard} alt="" />
            <h3>
              Lorem Ipsum is simply dummy text of the printing and typesettin...
            </h3>

            <h4>
              Lorem Ipsum is simply dummy text of the printing and typesettin.
            </h4>
          </Card>
          <Card variants={variants.itemHome}>
            <img src={imgCard} alt="" />
            <h3>
              Lorem Ipsum is simply dummy text of the printing and typesettin...
            </h3>

            <h4>
              Lorem Ipsum is simply dummy text of the printing and typesettin.
            </h4>
          </Card>
          <Card variants={variants.itemHome}>
            <img src={imgCard} alt="" />
            <h3>
              Lorem Ipsum is simply dummy text of the printing and typesettin...
            </h3>

            <h4>
              Lorem Ipsum is simply dummy text of the printing and typesettin.
            </h4>
          </Card>
          <Card variants={variants.itemHome}>
            <img src={imgCard} alt="" />
            <h3>
              Lorem Ipsum is simply dummy text of the printing and typesettin...
            </h3>

            <h4>
              Lorem Ipsum is simply dummy text of the printing and typesettin.
            </h4>
          </Card>
          <Card variants={variants.itemHome}>
            <img src={imgCard} alt="" />
            <h3>
              Lorem Ipsum is simply dummy text of the printing and typesettin...
            </h3>

            <h4>
              Lorem Ipsum is simply dummy text of the printing and typesettin.
            </h4>
          </Card>
        </BoxCard>
      </Right>
    </Container>
  );
};

export default Home;
