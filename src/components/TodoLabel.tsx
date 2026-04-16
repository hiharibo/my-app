"use client";

type TodoLabelProps = {
  title: string;
  completed: boolean;
};

function TodoLabel({ title, completed }: TodoLabelProps) {
  return (
    <span
      className={`text-lg font-medium ${
        completed ? "text-gray-400 line-through" : ""
      }`}
    >
      {title}
    </span>
  );
}

export default TodoLabel;
