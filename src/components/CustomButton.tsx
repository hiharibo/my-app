import { ButtonHTMLAttributes, ReactNode } from "react";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className: string;
}

const CustomButton = ({ children, ...props }: CustomButtonProps) => {
  return (
    <button {...props} onClick={props.onClick}>
      {children}
    </button>
  );
};

export default CustomButton;
