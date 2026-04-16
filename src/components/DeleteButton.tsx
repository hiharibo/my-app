"use client";

type DeleteButtonProps = {
  onClick: () => void;
};

export default function DeleteButton({ onClick }: DeleteButtonProps) {
  return (
    <button onClick={onClick} className="text-red-500">
      삭제
    </button>
  );
}
