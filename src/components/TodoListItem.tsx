"use client";

import CustomCheckBox from "./CustomCheckBox";
import DeleteButton from "./DeleteButton";
import TodoLabel from "./TodoLabel";
import { Todo } from "./TodoList";

type TodoListItemProps = {
  todo: Todo;
  onToggle: () => void;
  onDelete: () => void;
};

function TodoListItem({ todo, onToggle, onDelete }: TodoListItemProps) {
  return (
    <li
      className="flex items-center justify-between gap-3 rounded-md border px-4 py-3"
      key={todo.id}
    >
      <div className="flex flex-1 cursor-pointer items-center gap-3">
        <label>
          <CustomCheckBox checked={todo.completed} onChange={onToggle} />
          <TodoLabel title={todo.title} completed={todo.completed} />
        </label>
      </div>
      <DeleteButton onClick={onDelete} />
    </li>
  );
}

export default TodoListItem;
