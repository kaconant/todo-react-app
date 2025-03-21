import React, { useState } from "react";
import ToDoCard from "@/components/todo-card";

const ToDoList: React.FC = () => {
  const [todos, setTodos] = useState([
    { id: "1", text: "Learn TypeScript", completed: false },
    { id: "2", text: "Build a React App", completed: false },
  ]);

  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <ul>
      {todos.map((todo) => (
        <ToDoCard
          key={todo.id}
          {...todo}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />
      ))}
    </ul>
  );
};

export default ToDoList;
