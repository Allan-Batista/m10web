import React, { useState } from 'react';
import { Container, Grid, Item, Left, ListItems, Logo, Right } from './styles';

import imgContato from '../../assets/contato.svg';
import imgInicio from '../../assets/inicio.svg';
import imgLogo from '../../assets/logo.svg';
import imgRelatorios from '../../assets/relatorios.svg';
import imgThumb from '../../assets/thumb.png';
import { variants } from '../../utils/motionConfig';

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

  const MenuItems: MenuItemsProps[] = [
    { img: imgInicio, label: 'Inicio', active: active === 0 && true },
    { img: imgContato, label: 'Contatos', active: active === 1 && true },
    { img: imgRelatorios, label: 'Relatórios', active: active === 2 && true },
    { img: imgContato, label: 'Contatos', active: active === 3 && true },
    { img: imgContato, label: 'Contatos', active: active === 4 && true },
    { img: imgContato, label: 'Contatos', active: active === 5 && true },
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
      </Right>
    </Container>
  );
};

export default Home;
