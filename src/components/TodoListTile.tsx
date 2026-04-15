"use client";

import CheckBox from "./CheckBox";
import DeleteButton from "./DeleteButton";
import TodoLabel from "./TodoLabel";
import { Todo } from "./TodoList";

type TodoListTileProps = {
  todo: Todo;
  onToggle: () => void;
  onDelete: () => void;
};

export default function TodoListTile(props: TodoListTileProps) {
  return (
    <li
      className="flex items-center justify-between gap-3 rounded-md border px-4 py-3"
      key={props.todo.id}
    >
      <label className="flex flex-1 cursor-pointer items-center gap-3">
        <CheckBox completed={props.todo.completed} onToggle={props.onToggle} />
        <TodoLabel title={props.todo.title} completed={props.todo.completed} />
      </label>
      <DeleteButton onClick={props.onDelete} />
    </li>
  );
}
