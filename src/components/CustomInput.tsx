import { ChangeEvent, InputHTMLAttributes } from "react";

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  placeholder: string;
  className: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput = ({ value, onChange, ...props }: CustomInputProps) => {
  return <input value={value} onChange={onChange} {...props} />;
};

export default CustomInput;
