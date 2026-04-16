"use client";

type StatusTitleProps = {
  isDone: boolean;
};

const DONE_TITLE = "완료";
const IN_PROGRESS_TITLE = "진행중";

function StatusTitle({ isDone }: StatusTitleProps) {
  const statusTitle = isDone ? DONE_TITLE : IN_PROGRESS_TITLE;

  return <h4 className="text-lg font-bold">{statusTitle}</h4>;
}

export default StatusTitle;
