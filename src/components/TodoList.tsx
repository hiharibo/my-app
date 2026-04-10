"use client";

import TodoItem from "./TodoItem";

export type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

type TodoListProps = {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

export default function TodoList({
  todos,
  onToggle,
  onDelete,
}: TodoListProps) {

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <ul className="space-y-3">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  );
}
