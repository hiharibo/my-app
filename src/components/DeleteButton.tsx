"use client";

type DeleteButtonProps = {
  onClick: () => void;
};

export default function DeleteButton(props: DeleteButtonProps) {
  return (
    <button onClick={props.onClick} className="text-red-500">
      삭제
    </button>
  );
}
