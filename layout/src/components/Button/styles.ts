import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
  margin-top: 10px;
  button {
    width: 161px;
    height: 42px;

    border: none;
    font-weight: 500;
    border-radius: 5px;

    cursor: pointer;
    font-size: 16px;
    transition: all 200ms ease-in-out;

    color: #fff;
    background: #2eafb2;

    &:hover {
      background: #ff6c22;
    }
  }
`;
