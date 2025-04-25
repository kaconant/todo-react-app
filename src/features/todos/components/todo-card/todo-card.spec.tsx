import { describe, it, vi, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoCard from "./todo-card";

const setup = (overrides = {}) => {
  const props = {
    id: "999",
    title: "Test Todo",
    completed: false,
    onComplete: vi.fn(),
    onDelete: vi.fn(),
    ...overrides,
  };

  render(<TodoCard {...props} />);
  return props;
};

let user: ReturnType<typeof userEvent.setup>;

beforeEach(() => {
  user = userEvent.setup();
});

describe("TodoCard", () => {
  it("should have all appropriate values if task is not complete", () => {
    setup();
    const todoCard = screen.getByRole("listitem");
    expect(todoCard).toBeInTheDocument();
    expect(todoCard).toHaveTextContent("Test Todo");
    const completeButton = screen.getByRole("button", {
      name: "Mark task as complete",
    });
    expect(completeButton).toBeInTheDocument();
    const deleteButton = screen.getByRole("button", {
      name: "Delete task",
    });
    expect(deleteButton).toBeInTheDocument();
  });
  it("should have all appropriate values if task is complete", () => {
    setup({ completed: true });
    const todoCard = screen.getByRole("listitem");
    expect(todoCard).toBeInTheDocument();
    expect(todoCard).toHaveTextContent("Test Todo");
    const completeButton = screen.getByRole("button", {
      name: "Mark task as incomplete",
    });
    expect(completeButton).toBeInTheDocument();
    const deleteButton = screen.getByRole("button", {
      name: "Delete task",
    });
    expect(deleteButton).toBeInTheDocument();
  });

  it("should call onComplete when toggle button is clicked", async () => {
    const props = setup();
    const completeButton = screen.getByRole("button", {
      name: "Mark task as complete",
    });
    await user.click(completeButton);
    expect(props.onComplete).toHaveBeenCalledWith(props.id);
  });

  it("should make TodoCard deleted when delete button is clicked", async () => {
    const props = setup();
    const deleteButton = screen.getByRole("button", {
      name: "Delete task",
    });
    await user.click(deleteButton);
    expect(props.onDelete).toHaveBeenCalledWith(props.id);
  });
});
