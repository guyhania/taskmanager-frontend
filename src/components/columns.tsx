import type { ColumnDef } from "@tanstack/react-table"
import type { Task } from "../features/tasks/taskTypes"
import { Button } from "../components/ui/button"
import { deleteTask } from "../features/tasks/taskSlice"
import type { AppDispatch } from "../store"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu"
import { MoreHorizontal } from "lucide-react"

export const columns = (
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
      header: "Due Date",
      cell: ({ row }) =>
        new Date(row.getValue("dueDate")).toLocaleDateString(),
    },
    {
      id: "actions",
      header: "Actions",
      enableSorting: false,
      enableHiding: false,
      cell: ({ row }) => {
        const task = row.original
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem onClick={() => {
                setEditingTask(task);        // set the task
                setIsEditOpen(true);         // open the modal
              }}>
                Edit Task
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => dispatch(deleteTask(task.id))}
                className="text-destructive"
              >
                Delete Task
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )
      },
    },
  ]
