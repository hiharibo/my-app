"use client";

type StatusTitleProps = {
  isDone: boolean;
};

export default function StatusTitle({ isDone }: StatusTitleProps) {
  return <h4 className="text-lg font-bold">{isDone ? "완료" : "진행중"}</h4>;
}
