"use client";

interface CheckBoxProps {
  onChange: () => void;
  completed: boolean;
}

function CheckBox({ onChange, completed }: CheckBoxProps) {
  return (
    <input
      type="checkbox"
      checked={completed}
      onChange={onChange}
      className="h-4 w-4"
    />
  );
}

export default CheckBox;
