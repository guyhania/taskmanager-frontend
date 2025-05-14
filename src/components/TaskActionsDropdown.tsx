import { type Task } from "../features/tasks/taskTypes"
import { type AppDispatch } from "../store"
import { deleteTask } from "../features/tasks/taskSlice"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../components/ui/dropdown-menu"
import { Button } from "../components/ui/button"
import { MoreHorizontal } from "lucide-react"

interface TaskActionsDropdownProps {
    task: Task
    dispatch: AppDispatch
    setEditingTask: (task: Task) => void
    setIsEditOpen: (open: boolean) => void
}

export function TaskActionsDropdown({
    task,
    dispatch,
    setEditingTask,
    setIsEditOpen,
}: TaskActionsDropdownProps) {
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
                <DropdownMenuItem
                    onClick={() => {
                        setEditingTask(task)
                        setIsEditOpen(true)
                    }}
                >
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
}
