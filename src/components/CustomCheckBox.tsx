import { InputHTMLAttributes } from "react";

interface CustomCheckBoxProps
  extends InputHTMLAttributes<HTMLInputElement> {}

const CustomCheckBox = (props: CustomCheckBoxProps) => {
  return (
    <input
      type="checkbox"
      className="h-4 w-4"
      {...props}
    />
  );
};

export default CustomCheckBox;