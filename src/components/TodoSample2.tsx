"use client";

import { useState } from "react";
import StatusTitle from "./StatusTitle";
import TodoInputBox from "./TodoInputBox";
import { Todo } from "./TodoList";
import TodoTitle from "./TodoTitle";
import Todos from "./Todos";

function TodoSample2() {
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

    const newTodo = {
      id: crypto.randomUUID(),
      title: trimmedTitle,
      completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
    handleResetTitle();
  };

  const handleResetTitle = () => {
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
      <section className="w-full max-w-md space-y-4">
        <TodoTitle title="Todos" />
        <StatusTitle isDone={isDone} />
        <TodoInputBox
          title={title}
          onChange={(e) => setTitle(e.target.value)}
          onAddTodo={handleAddTodo}
        />
        <Todos
          todos={todos}
          onToggle={handleToggleTodo}
          onDelete={handleDeleteTodo}
        />
      </section>
    </div>
  );
}

export default TodoSample2;
