"use client";

type AddButtonProps = {
  onClick: () => void;
};

export default function AddButton({ onClick }: AddButtonProps) {
  return (
    <button
      onClick={onClick}
      className="rounded-md bg-blue-500 px-4 py-2 text-white"
    >
      추가
    </button>
  );
}
