import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "@/features/todos/store/todo-slice";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

// Infer RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
