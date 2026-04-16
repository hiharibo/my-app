"use client";

import AddButton from "./AddButton";
import Input from "./Input";

type TodoInputBoxProps = {
  title: string;
  onChange: (value: string) => void;
  onAddTodo: () => void;
};

function TodoInputBox({ title, onChange, onAddTodo }: TodoInputBoxProps) {
  return (
    <div className="flex gap-2">
      <Input title={title} onChange={(e) => onChange(e.target.value)} />
      <AddButton onClick={onAddTodo} />
    </div>
  );
}

export default TodoInputBox;
