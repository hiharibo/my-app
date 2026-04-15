"use client";

import { useState } from "react";
import { Todo } from "./TodoList";

export default function TodoSample() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState<Todo[]>([
    { id: "1", title: "리액트 공부", completed: false },
    { id: "2", title: "투두 만들기", completed: true },
  ]);
  const isDone = todos.every((todo) => todo.completed);

  const handleAddTodo = () => {
    const trimmedTitle = title.trim();

    if (!trimmedTitle) {
      return;
    }

    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: crypto.randomUUID(),
        title: trimmedTitle,
        completed: false,
      },
    ]);
    setTitle("");
  };

  const handleToggleTodo = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const handleDeleteTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="flex w-full flex-col items-center px-4 py-6">
      <div className="w-full max-w-md space-y-4">
        <h3 className="text-2xl font-bold">Todos</h3>
        <h4 className="text-lg font-bold">{isDone ? "완료" : "진행중"}</h4>

        <div className="flex gap-2">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="할 일을 입력하세요"
            className="flex-1 rounded-md border border-gray-300 p-2"
          />
          <button
            onClick={handleAddTodo}
            className="rounded-md bg-blue-500 px-4 py-2 text-white"
          >
            추가
          </button>
        </div>

        <ul className="space-y-3">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between gap-3 rounded-md border px-4 py-3"
            >
              <label className="flex flex-1 cursor-pointer items-center gap-3">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggleTodo(todo.id)}
                  className="h-4 w-4"
                />
                <span
                  className={`text-lg font-medium ${
                    todo.completed ? "text-gray-400 line-through" : ""
                  }`}
                >
                  {todo.title}
                </span>
              </label>
              <button
                onClick={() => handleDeleteTodo(todo.id)}
                className="text-red-500"
              >
                삭제
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
