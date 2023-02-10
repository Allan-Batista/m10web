import styled from 'styled-components';
import background from '../../assets/background.svg';

export const Container = styled.div`
  display: grid;
  width: 100%;
  height: 100vh;

  place-items: center;

  background: #ff6c22;
`;

export const Content = styled.div`
  display: flex;
  width: 957px;
  height: 612px;

  justify-content: flex-start;
  align-items: flex-start;

  box-shadow: 0px 4px 19px rgba(0, 0, 0, 0.3);
  border-radius: 4px;

  background: #fff;
`;

export const Left = styled.div`
  display: flex;

  width: 60%;
  height: 100%;

  flex-direction: column;
  padding: 90px 65px;

  .logo {
    display: grid;
    place-items: center;

    img {
      width: 250px;
      height: 80px;
    }
  }

  .form {
    display: flex;
    flex-direction: column;
    margin-top: 60px;

    h2 {
      margin-bottom: 20px;

      font-size: 32px;
      font-weight: 500;

      color: #8f8f8f;

      span {
        color: #ff6c22;
      }
    }
  }
`;

export const Right = styled.div`
  position: relative;
  width: 40%;
  height: 100%;

  background-image: url(${background});

  img {
    position: absolute;
    width: 380px;
    height: 380px;

    bottom: -1px;

    right: 25%;
  }
`;
