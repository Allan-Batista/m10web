import { Container } from './styles';

interface ButtonProps {
  label?: string;
  loading?: boolean;
  onClick?: any;
}

const Button = ({ label, loading, onClick }: ButtonProps) => {
  return (
    <Container>
      <button onClick={onClick}>{label}</button>
    </Container>
  );
};

export default Button;
