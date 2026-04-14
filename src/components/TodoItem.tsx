"use client";

type TodoItemProps = {
  id: string;
  title: string;
  completed: boolean;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

export default function TodoItem({
  id,
  title,
  completed,
  onToggle,
  onDelete,
}: TodoItemProps) {
  return (
    <li
      key={id}
      className="flex items-center justify-between gap-3 rounded-md border px-4 py-3"
    >
      <label className="flex items-center gap-3 flex-1 cursor-pointer">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => onToggle(id)}
          className="h-4 w-4"
        />
        <span
          className={`text-lg font-medium ${
            completed ? "text-gray-400 line-through" : ""
          }`}
        >
          {title}
        </span>
      </label>
      <button onClick={() => onDelete(id)} className="text-red-500">
          삭제
      </button>
    </li>
  );
}
