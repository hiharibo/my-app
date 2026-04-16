"use client";

type TodoTitleProps = {
  title: string;
};

function TodoTitle({ title }: TodoTitleProps) {
  return <h3 className="text-2xl font-bold">{title}</h3>;
}

export default TodoTitle;
