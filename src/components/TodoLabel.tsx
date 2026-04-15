"use client";

type TodoLabelProps = {
  title: string;
  completed: boolean;
};

export default function TodoLabel(props: TodoLabelProps) {
  return (
    <span
      className={`text-lg font-medium ${
        props.completed ? "text-gray-400 line-through" : ""
      }`}
    >
      {props.title}
    </span>
  );
}
