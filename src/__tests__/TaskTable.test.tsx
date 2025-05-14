import { render, screen } from "@testing-library/react";
import { TaskTable } from "../components/TaskTable";

it("renders TaskTable with title", () => {
  render(<TaskTable />);
  expect(screen.getByText(/upcoming tasks/i)).toBeInTheDocument();
});
