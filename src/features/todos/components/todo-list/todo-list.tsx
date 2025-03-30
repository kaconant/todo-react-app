import React from "react";
import { ToDoCard } from "@/features/todos/components";
import { useTodos } from "@/features/todos/hooks/use-todos";
import styles from "./todo-list.module.css";

const ToDoList: React.FC = () => {
  const { todos, toggleTodo, deleteTodo, isLoading } = useTodos();

  if (isLoading) return <div>Loading...</div>;
  if (todos.length === 0) return <div>There are no todos</div>;

  return (
    <ul className={styles.list}>
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
