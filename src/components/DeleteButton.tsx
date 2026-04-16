"use client";

type DeleteButtonProps = {
  onClick: () => void;
};

function DeleteButton({ onClick }: DeleteButtonProps) {
  return (
    <button onClick={onClick} className="text-red-500">
      삭제
    </button>
  );
}

export default DeleteButton;
