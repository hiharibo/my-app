"use client";

type StatusTitleProps = {
  isDone: boolean;
};

export default function StatusTitle(props: StatusTitleProps) {
  return (
    <h4 className="text-lg font-bold">{props.isDone ? "완료" : "진행중"}</h4>
  );
}
