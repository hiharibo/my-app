"use client";

type CheckBoxProps = {
  onToggle: () => void;
  completed: boolean;
};

export default function CheckBox(props: CheckBoxProps) {
  return (
    <input
      type="checkbox"
      checked={props.completed}
      onChange={props.onToggle}
      className="h-4 w-4"
    />
  );
}
