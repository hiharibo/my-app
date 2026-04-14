"use client";

import { type Todo } from "@/src/components/TodoList";
import TodoSample from "@/src/components/TodoSample";
import TodoSample2 from "@/src/components/TodoSample2";
import { useState } from "react";

export default function TodosPage() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: "1", title: "Todo 1", completed: false },
    { id: "2", title: "Todo 2", completed: false },
    { id: "3", title: "Todo 3", completed: false },
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
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <h3 className="mb-6 text-center text-2xl font-bold">Todos</h3>
      {/* <TodoInput onAdd={handleAddTodo} />

      <TodoList
        todos={todos}
        onToggle={handleToggleTodo}
        onDelete={handleDeleteTodo}
      /> */}

      <div className="grid min-h-[calc(100vh-8rem)] grid-cols-1 gap-6 lg:grid-cols-2">
        <section className="rounded-xl bg-white p-6 shadow-sm">
          <h4 className="mb-4 text-lg font-bold">TodoSample</h4>
          <TodoSample />
        </section>
        <section className="rounded-xl bg-white p-6 shadow-sm">
          <h4 className="mb-4 text-lg font-bold">TodoSample2</h4>
          <TodoSample2 todos={todos} />
        </section>
      </div>
    </div>
  );
}
