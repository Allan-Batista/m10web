import React from 'react';
import imgComputador from '../../assets/computador.svg';
import imgLogo from '../../assets/logo.svg';
import { Container, Content, Left, Right } from './styles';

const Login: React.FC = () => {
  return (
    <Container>
      <Content>
        <Left>
          <div className="logo">
            <img src={imgLogo} />
          </div>

          <div className="form">
            <h2>
              Bem Vindo ao <span>painel</span>
            </h2>
          </div>
        </Left>
        <Right>
          <img src={imgComputador} />
        </Right>
      </Content>
    </Container>
  );
};

export default Login;
