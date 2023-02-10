import { Control, Controller } from 'react-hook-form';
import Input, { InputProps } from '../Input';

interface InputControledProps extends InputProps {
  control: Control<any>;
  name: string;
}

const InputControled = ({
  name,
  control,
  error,
  placeholder,
  password,
}: InputControledProps) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value, ref, onBlur } }: any) => (
        <Input
          password={password}
          placeholder={placeholder}
          value={value}
          error={error}
          onChange={onChange}
        />
      )}
    />
  );
};

export default InputControled;
