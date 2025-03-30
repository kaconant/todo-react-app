import { useEffect, useState } from "react";

const API_URL = "http://localhost:5001/todos";

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  // Loading should always be true as fallback
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadTodos = async () => {
      setIsLoading(true);
      try {
        const results = await fetch(API_URL);
        if (!results.json) {
          throw new Error("Failed to fetch todos");
        }
        const data = await results.json();
        setTodos(data);
      } catch (error) {
        console.error("Error fetching todos:", error);
      } finally {
        setIsLoading(false);
      }
    };
    loadTodos();
  }, []);

  const toggleTodo = async (id: string) => {
    const todo = todos.find((t) => t.id === id);
    if (!todo) return;

    const updatedTodo = { ...todo, completed: !todo.completed };

    try {
      await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedTodo),
      });

      setTodos((prev) =>
        prev.map((todo) => (todo.id === id ? updatedTodo : todo))
      );
    } catch (error) {
      console.error("Error updating todo: ", error);
    }
  };

  const deleteTodo = async (id: string) => {
    try {
      await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error("Error deleting todo: ", error);
    }
  };

  return { todos, setTodos, toggleTodo, deleteTodo, isLoading };
};
