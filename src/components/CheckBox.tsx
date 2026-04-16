"use client";

type CheckBoxProps = {
  onChange: () => void;
  completed: boolean;
};

export default function CheckBox({ onChange, completed }: CheckBoxProps) {
  return (
    <input
      type="checkbox"
      checked={completed}
      onChange={onChange}
      className="h-4 w-4"
    />
  );
}
