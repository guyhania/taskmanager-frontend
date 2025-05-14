/// <reference types="vitest/globals" />
import { render, screen, fireEvent } from "@testing-library/react";
import { TaskForm } from "../components/TaskForm";

describe("TaskForm", () => {
  it("renders input fields", () => {
    render(<TaskForm />);
    expect(screen.getByPlaceholderText(/title/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/full name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
  });

  it("shows validation errors on submit", () => {
    render(<TaskForm />);
    fireEvent.click(screen.getByRole("button", { name: /add task/i }));
    expect(screen.getByText(/title/i)).toBeInTheDocument();
  });
});
