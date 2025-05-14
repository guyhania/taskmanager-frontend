import type { ColumnDef } from "@tanstack/react-table"
import type { Task } from "../features/tasks/taskTypes"
import type { AppDispatch } from "../store"
import { Button } from "./ui/button"
import { getDueDateClass } from "../lib/getDueDateClass"
import { TaskActionsDropdown } from "./TaskActionsDropdown"
import { ArrowUpDown } from "lucide-react"

export const Columns = (
  dispatch: AppDispatch,
  setEditingTask: (task: Task) => void,
  setIsEditOpen: (open: boolean) => void
): ColumnDef<Task>[] => [
    {
      accessorKey: "title",
      header: "Title",
    },
    {
      accessorKey: "fullName",
      header: "Assignee",
      enableColumnFilter: true,
    },
    {
      accessorKey: "priority",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Priority
        </Button>
      ),
      enableSorting: true,
      cell: ({ row }) => <span>{row.getValue("priority")}</span>,
    },
    {
      accessorKey: "dueDate",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Due Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
      cell: ({ row }) => {
        const dueDate = row.getValue("dueDate") as string;
        const className = getDueDateClass(dueDate);

        return (
          <span className={`${className} font-medium`}>
            {new Date(dueDate).toLocaleDateString()}
          </span>
        );
      },
      enableSorting: true,
    },
    {
      id: "actions",
      header: "Actions",
      enableSorting: false,
      enableHiding: false,
      cell: ({ row }) => (
        <TaskActionsDropdown
          task={row.original}
          dispatch={dispatch}
          setEditingTask={setEditingTask}
          setIsEditOpen={setIsEditOpen}
        />
      ),
    },
  ]
