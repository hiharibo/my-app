"use client";

import { type Todo } from "@/src/components/TodoList";
import TodoSample from "@/src/components/TodoSample";
import { useState } from "react";

export default function TodosPage() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: "1", title: "Todo 1", completed: false },
  ]);

  const handleAddTodo = (title: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: crypto.randomUUID(), title, completed: false },
    ]);
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
    <div className="flex flex-col items-center justify-center h-screen">
      <h3 className="text-2xl font-bold mb-4">Todos</h3>
      {/* <TodoInput onAdd={handleAddTodo} />

      <TodoList
        todos={todos}
        onToggle={handleToggleTodo}
        onDelete={handleDeleteTodo}
      /> */}

      <TodoSample />
    </div>
  );
}
