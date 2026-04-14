"use client";

import TodoTitle from "./TodoTitle";

type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

export default function TodoSample2({ todos }: { todos: Todo[] }) {
  return (
    <div className="flex w-full flex-col items-center px-4 py-6">
      <ul className="w-full max-w-md space-y-4">
        <TodoTitle title="Todos2" />

        {todos.map((todo) => (
          <li
            className="flex items-center justify-between gap-3 rounded-md border px-4 py-3"
            key={todo.id}
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
