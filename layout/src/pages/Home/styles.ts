import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

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
  height: 100%;

  padding: 60px 0 60px 16px;

  color: rgba(0, 0, 0, 0.44);

  span {
    font-size: 30px;
  }

  .line {
    width: 100%;
    height: 1px;

    margin-top: 28px;

    background: rgba(0, 0, 0, 0.1);
  }
`;

export const Grid = styled(motion.div)`
  display: grid;

  margin-top: 26px;
  grid-template-columns: repeat(3, 1fr);
  gap: 6px;
`;

export const ListItems = styled(motion.div)`
  display: flex;
  width: 385px;

  padding: 10px;
  font-size: 14px;

  border-radius: 8px;
  flex-direction: column;

  color: #000;
  background: white;

  span {
    margin-top: 4px;
    font-size: 12px;
  }
`;
