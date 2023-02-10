import React from 'react';
import { Container, Item, Left, Logo, Right } from './styles';

import imgContato from '../../assets/contato.svg';
import imgInicio from '../../assets/inicio.svg';
import imgLogo from '../../assets/logo.svg';
import imgRelatorios from '../../assets/relatorios.svg';

const Home: React.FC = () => {
  const items = [
    { img: imgInicio, label: 'Inicio', active: true },
    { img: imgContato, label: 'Contatos', active: false },
    { img: imgRelatorios, label: 'Relatórios', active: false },
    { img: imgContato, label: 'Contatos', active: false },
    { img: imgContato, label: 'Contatos', active: false },
    { img: imgContato, label: 'Contatos', active: false },
  ];

  return (
    <Container>
      <Left>
        <Logo>
          <img src={imgLogo} alt="tropa digital" />
        </Logo>

        {items.map((item, index) => (
          <Item active={item.active} key={index}>
            <img src={item.img} alt="inicio" />
            <span>{item.label}</span>
          </Item>
        ))}
      </Left>

      <Right></Right>
    </Container>
  );
};

export default Home;
