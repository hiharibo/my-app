"use client";

import clsx from "clsx";

type TodoLabelProps = {
  title: string;
  completed: boolean;
};

function TodoLabel({ title, completed }: TodoLabelProps) {
  return (
    <span
      className={clsx("text-lg font-medium", {
        "text-gray-400 line-through": completed,
      })}
    >
      {title}
    </span>
  );
}

export default TodoLabel;
