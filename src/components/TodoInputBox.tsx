"use client";

import AddButton from "./AddButton";
import Input from "./Input";

type TodoInputBoxProps = {
  title: string;
  onChange: (value: string) => void;
  onAddTodo: () => void;
};

export default function TodoInputBox(props: TodoInputBoxProps) {
  return (
    <div className="flex gap-2">
      <Input
        title={props.title}
        onChange={(e) => props.onChange(e.target.value)}
      />
      <AddButton onClick={props.onAddTodo} />
    </div>
  );
}
