"use client";

import { Todo } from "./TodoList";
import TodoListItem from "./TodoListItem";

type TodosProps = {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

function Todos({ todos, onToggle, onDelete }: TodosProps) {
  return (
    <ul className="space-y-3">
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onToggle={() => onToggle(todo.id)}
          onDelete={() => onDelete(todo.id)}
        />
      ))}
    </ul>
  );
}

export default Todos;
