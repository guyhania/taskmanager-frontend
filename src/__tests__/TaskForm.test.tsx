/// <reference types="vitest/globals" />

import { render, screen } from "@testing-library/react";
import { TaskForm } from "../components/TaskForm";

describe("TaskForm", () => {
  it("renders form inputs", () => {
    render(<TaskForm />);
    expect(screen.getByPlaceholderText(/title/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/full name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
  });
});
