import { Container } from './styles';

import { useState } from 'react';
import imgEyeSlash from '../../assets/eye-slash.svg';
import imgEye from '../../assets/eye-solid.svg';

interface InputProps {
  placeholder?: string;
  senha?: boolean;
}

const Input = ({ placeholder, senha }: InputProps) => {
  const [eye, setEye] = useState<boolean>(false);

  return (
    <>
      {senha ? (
        <Container>
          <div className="password">
            <input type={eye ? 'text' : 'password'} placeholder={placeholder} />

            {eye ? (
              <img
                src={imgEye}
                alt="eye"
                onClick={() => setEye((prev) => !prev)}
              />
            ) : (
              <img
                src={imgEyeSlash}
                alt="eye"
                onClick={() => setEye((prev) => !prev)}
              />
            )}
          </div>
        </Container>
      ) : (
        <Container>
          <input placeholder={placeholder} />
        </Container>
      )}
    </>
  );
};

export default Input;
