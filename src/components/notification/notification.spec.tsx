import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import Notification from "./notification";

describe("Test Notification", () => {
  it("should contain string when provided text prop", () => {
    render(<Notification text="This is a notification!" />);
    const textElement = screen.getByText("This is a notification!");
    expect(textElement).toBeInTheDocument();
  });
});
