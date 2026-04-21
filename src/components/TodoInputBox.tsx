"use client";

import { ChangeEvent } from "react";
import AddButton from "./AddButton";
import CustomInput from "./CustomInput";

type TodoInputBoxProps = {
  title: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onAddTodo: () => void;
};

function TodoInputBox({ title, onChange, onAddTodo }: TodoInputBoxProps) {
  return (
    <div className="flex gap-2">
      <CustomInput
        type="text"
        value={title}
        onChange={onChange}
        placeholder="할 일을 입력하세요"
        className="flex-1 rounded-md border border-gray-300 p-2"
      />
      <AddButton onClick={onAddTodo} />
    </div>
  );
}

export default TodoInputBox;
