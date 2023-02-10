import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import * as yup from 'yup';
import imgComputador from '../../assets/computador.svg';
import imgLogo from '../../assets/logo.svg';
import Button from '../../components/Button';
import InputControled from '../../components/InputControled';
import { variants } from '../../utils/motionConfig';

import { Container, Content, Left, Right } from './styles';

type Inputs = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup.string().required('Este campo é obrigatorio'),
    password: yup.string().required('Este campo é obrigatorio'),
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const { email, password } = data;

    navigate('/home');
    if (email === 'tropadigital@gmail.com' && password === 'admin123') {
      return;
    }

    toast.error('Usuario invalido');
  };

  return (
    <>
      <Container>
        <Content variants={variants.login} animate="visible" initial="hidden">
          <Left>
            <div className="logo">
              <img src={imgLogo} />
            </div>

            <form className="form" onSubmit={handleSubmit(onSubmit)}>
              <h2>
                Bem Vindo ao <span>painel</span>
              </h2>

              <InputControled
                name="email"
                placeholder="Digite seu e-mail"
                error={errors.email}
                control={control}
              />

              <InputControled
                password
                name="password"
                placeholder="Digite sua senha"
                error={errors.password}
                control={control}
              />

              <Button type="submit" label="Acessar" />
            </form>
          </Left>

          <Right>
            <img src={imgComputador} />
          </Right>
        </Content>
      </Container>

      <ToastContainer theme="dark" />
    </>
  );
};

export default Login;
