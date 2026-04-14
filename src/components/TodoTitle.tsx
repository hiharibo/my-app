"use client";

type TodoTitleProps = {
  title: string;
};
export default function TodoTitle({ title }: TodoTitleProps) {
  return <h3 className="text-2xl font-bold">{title}</h3>;
}
