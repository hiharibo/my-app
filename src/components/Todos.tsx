"use client";

import { Todo } from "./TodoList";
import TodoListTile from "./TodoListItem";

type TodosProps = {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

export default function Todos({ todos, onToggle, onDelete }: TodosProps) {
  return (
    <ul className="space-y-3">
      {todos.map((todo) => (
        <TodoListTile
          key={todo.id}
          todo={todo}
          onToggle={() => onToggle(todo.id)}
          onDelete={() => onDelete(todo.id)}
        />
      ))}
    </ul>
  );
}
