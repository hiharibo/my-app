"use client";

import { DONE_TITLE, IN_PROGRESS_TITLE } from "../app/constants/constants";

type StatusTitleProps = {
  isDone: boolean;
};

function StatusTitle({ isDone }: StatusTitleProps) {
  const statusTitle = isDone ? DONE_TITLE : IN_PROGRESS_TITLE;

  return <h4 className="text-lg font-bold">{statusTitle}</h4>;
}

export default StatusTitle;
