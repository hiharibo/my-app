"use client";

import { useState } from "react";

type TodoInputProps = {
  onAdd: (title: string) => void;
};

function TodoInput({ onAdd }: TodoInputProps) {
  const [title, setTitle] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleAdd = () => {
    const trimmedTitle = title.trim();

    if (!trimmedTitle) {
      return;
    }

    onAdd(trimmedTitle);
    setTitle("");
  };

  return (
    <div className="flex gap-2">
      <input
        type="text"
        value={title}
        onChange={handleChange}
        placeholder="Add a new todo"
        className="border border-gray-300 rounded-md p-2"
      />
      <button
        type="button"
        onClick={handleAdd}
        className="bg-blue-500 text-white rounded-md p-2"
      >
        Add
      </button>
    </div>
  );
}
export default TodoInput;
