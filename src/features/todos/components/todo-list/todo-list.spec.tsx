vi.mock("@/features/todos/hooks/use-todos", () => ({
  useTodos: vi.fn(),
}));

import { describe, it, vi, expect, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";

import TodoList from "./todo-list";
import { useTodos } from "@/features/todos/hooks/use-todos";

const mockUseTodos = useTodos as unknown as ReturnType<typeof vi.fn>;

const setup = (overrides = {}) => {
  mockUseTodos.mockReturnValue({
    isLoading: false,
    todos: [
      { id: "1", title: "Todo 1", completed: false },
      { id: "2", title: "Todo 2", completed: true },
    ],
    toggleTodo: vi.fn(),
    deleteTodo: vi.fn(),
    ...overrides,
  });

  render(<TodoList />);
};
describe("TodoList", () => {
  afterEach(() => vi.clearAllMocks());
  it("should render todo cards after loading", () => {
    setup();
    const items = screen.getAllByRole("listitem");
    expect(items).toHaveLength(2);
    expect(items[0]).toHaveTextContent("Todo 1");
    expect(items[1]).toHaveTextContent("Todo 2");
  });

  it("should show loading message when loading", () => {
    setup({ isLoading: true });
    expect(screen.getByText("Loading")).toBeInTheDocument();
  });

  it("should show no todos message when there are no todos", () => {
    setup({ todos: [] });
    expect(screen.getByText("There are no todos")).toBeInTheDocument();
  });
});
