import { render, screen, fireEvent } from "@testing-library/react";
import { TaskFormModal } from "../components/TaskFormModal";

it("opens and closes modal", () => {
  render(<TaskFormModal />);
  const openBtn = screen.getByRole("button", { name: /add task/i });
  fireEvent.click(openBtn);
  expect(screen.getByPlaceholderText(/title/i)).toBeInTheDocument();
});
