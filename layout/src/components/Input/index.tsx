import { Container, ErrorMsg } from './styles';

import { useState } from 'react';
import imgEyeSlash from '../../assets/eye-slash.svg';
import imgEye from '../../assets/eye-solid.svg';

export interface InputProps {
  placeholder?: string;
  password?: boolean;
  value?: any;
  error?: any;
  ref?: any;
  onBlur?: any;
  onChange?: (value: any) => void;
}

const Input = ({
  placeholder,
  password,
  value,
  error,
  onChange,
  onBlur,
  ref,
}: InputProps) => {
  const [eye, setEye] = useState<boolean>(false);

  return (
    <>
      {password ? (
        <Container>
          <div className="password">
            <input
              type={eye ? 'text' : 'password'}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              ref={ref}
              placeholder={placeholder}
            />

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

          {error && <ErrorMsg>{error.message}</ErrorMsg>}
        </Container>
      ) : (
        <Container>
          <input
            ref={ref}
            type="email"
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            value={value}
          />

          {error && <ErrorMsg>{error.message}</ErrorMsg>}
        </Container>
      )}
    </>
  );
};

export default Input;
