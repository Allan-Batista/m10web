import styled from 'styled-components';

export const Container = styled.div`
  margin: 10px 0;
  input {
    width: 313px;
    height: 44px;

    padding: 0 10px;

    font-size: 16px;
    font-family: 'Advent Pro', sans-serif;

    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.1);

    outline: none;

    color: rgba(0, 0, 0, 0.35);
    background: #ffffff;

    &::placeholder {
      color: rgba(0, 0, 0, 0.35);
    }
  }
  .password {
    z-index: 2;
    position: relative;

    img {
      position: absolute;
      width: 22px;
      height: 22px;

      opacity: 0.4;
      cursor: pointer;

      top: 14px;
      right: 125px;
    }
  }
`;
