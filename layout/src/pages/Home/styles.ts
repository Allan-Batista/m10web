import { motion } from "framer-motion";
import styled, { css } from "styled-components";

interface Props {
  active: boolean;
}

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;

  background: #e5e5e5;
`;

export const Left = styled(motion.div)`
  display: flex;
  width: 20%;
  height: 100%;

  flex-direction: column;
  align-items: flex-end;

  padding: 60px 0;

  background: #ffffff;
`;

export const Logo = styled(motion.div)`
  display: grid;
  width: 100%;

  margin-bottom: 50px;
  place-items: center;

  img {
    width: 65%;
  }
`;

export const Item = styled(motion.div)<Props>`
  display: flex;
  width: 85%;
  height: 54px;

  justify-content: flex-start;
  align-items: center;

  padding: 8px;
  margin: 8px 10px;

  cursor: pointer;
  border-radius: 5px;

  color: #ffffff;
  background: #2eafb2;

  ${({ active }) =>
    active &&
    css`
      width: 89%;

      margin-right: 0;
      border-radius: 5px 0 0 5px;

      color: #000000;
      background: #e5e5e5;
    `};

  img {
    width: 22px;
    margin-right: 12px;
  }

  span {
    font-size: 16px;
    font-weight: 500;
  }
`;

export const Right = styled(motion.div)`
  width: 80%;

  padding: 5% 5%;
`;

export const TitleRight = styled(motion.div)`
  font-size: 25px;

  color: #8f8f8f;

  span {
    font-weight: bold;
  }
`;

export const Line = styled(motion.div)`
  height: 2px;

  margin: 25px 0 25px 0;

  background-color: #dbdbdb;
`;

export const BoxCard = styled(motion.div)`
  display: flex;

  width: 100%;
  
  flex-wrap: wrap;
  gap: 20px;

`;


export const Card = styled(motion.div)`
  display: flex;
  flex-direction: column;

  flex: 400px;
  padding: 2%;

  border-radius: 5px;

  background-color: #ffffff;

  img {
    width: 100%;
    height: 100%;

    margin-bottom: 10px;
  }

  h3{
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 5px;
    
  }

  h4{
    font-size: 12px;
  }
`;
