<<<<<<< HEAD
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
=======
import React, { useState } from 'react';
import { Container, Grid, Item, Left, ListItems, Logo, Right } from './styles';

import imgContato from '../../assets/contato.svg';
import imgInicio from '../../assets/inicio.svg';
import imgLogo from '../../assets/logo.svg';
import imgRelatorios from '../../assets/relatorios.svg';
import imgThumb from '../../assets/thumb.png';
import { variants } from '../../utils/motionConfig';
>>>>>>> 0bcde7f3d430b32000a8d3ec34d4fdc8c36a6866

interface MenuItemsProps {
  img: string;
  label: string;
  active: boolean;
}

interface ListItemsProps {
  img: string;
  title: string;
  label: string;
  time: number;
}

const Home: React.FC = () => {
  const [active, setActive] = useState<number>(0);

<<<<<<< HEAD
  const items: ItemsProps[] = [
    { img: imgInicio, label: "Inicio", active: active === 0 && true },
    { img: imgContato, label: "Contatos", active: active === 1 && true },
    { img: imgRelatorios, label: "Relatórios", active: active === 2 && true },
    { img: imgContato, label: "Contatos", active: active === 3 && true },
    { img: imgContato, label: "Contatos", active: active === 4 && true },
    //{ img: imgContato, label: "Contatos", active: active === 5 && true },
=======
  const MenuItems: MenuItemsProps[] = [
    { img: imgInicio, label: 'Inicio', active: active === 0 && true },
    { img: imgContato, label: 'Contatos', active: active === 1 && true },
    { img: imgRelatorios, label: 'Relatórios', active: active === 2 && true },
    { img: imgContato, label: 'Contatos', active: active === 3 && true },
    { img: imgContato, label: 'Contatos', active: active === 4 && true },
    { img: imgContato, label: 'Contatos', active: active === 5 && true },
>>>>>>> 0bcde7f3d430b32000a8d3ec34d4fdc8c36a6866
  ];

  const listItems: ListItemsProps[] = [
    {
      img: imgThumb,
      title:
        'Lorem Ipsum is simply dummy text of the printing and typesettin...',
      label: 'Lorem Ipsum is simply dummy text of the printing and typesettin.',
      time: 2,
    },
    {
      img: imgThumb,
      title:
        'Lorem Ipsum is simply dummy text of the printing and typesettin...',
      label: 'Lorem Ipsum is simply dummy text of the printing and typesettin.',
      time: 2,
    },
    {
      img: imgThumb,
      title:
        'Lorem Ipsum is simply dummy text of the printing and typesettin...',
      label: 'Lorem Ipsum is simply dummy text of the printing and typesettin.',
      time: 2,
    },
    {
      img: imgThumb,
      title:
        'Lorem Ipsum is simply dummy text of the printing and typesettin...',
      label: 'Lorem Ipsum is simply dummy text of the printing and typesettin.',
      time: 2,
    },
    {
      img: imgThumb,
      title:
        'Lorem Ipsum is simply dummy text of the printing and typesettin...',
      label: 'Lorem Ipsum is simply dummy text of the printing and typesettin.',
      time: 2,
    },
  ];

  const handleActive = (item: MenuItemsProps, index: number) => {
    setActive(index);
  };

  return (
    <Container>
      <Left variants={variants.home} animate="visible" initial="hidden">
        <Logo variants={variants.itemHome}>
          <img src={imgLogo} alt="tropa digital" />
        </Logo>

        {MenuItems.map((item, index) => (
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
<<<<<<< HEAD
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
=======
        <span>
          Olá, <strong> Tropa Digital </strong>
        </span>

        <div className="line"></div>

        <Grid>
          {listItems.map((item, index) => (
            <ListItems key={index}>
              <img src={item.img} alt="img" />

              <h3>{item.title}</h3>
              <span>{item.label}</span>
            </ListItems>
          ))}
        </Grid>
>>>>>>> 0bcde7f3d430b32000a8d3ec34d4fdc8c36a6866
      </Right>
    </Container>
  );
};

export default Home;
