import { variants } from '../../utils/motionConfig';
import { Container } from './styles';

interface ButtonProps {
  label?: string;
  loading?: boolean;
  onClick?: any;
  type?: any;
}

const Button = ({ label, loading, onClick, type }: ButtonProps) => {
  return (
    <Container variants={variants.item}>
      <button type={type} onClick={onClick}>
        {label}
      </button>
    </Container>
  );
};

export default Button;
