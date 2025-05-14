import { useEffect, useState } from "react";
import { AppDialog } from "./ui/app-dialog";
import { TaskForm } from "./TaskForm";
import type { Task } from "../features/tasks/taskTypes";
import { Button } from "./ui/button";

interface TaskFormModalProps {
    trigger?: React.ReactNode
    task?: Task
    title?: string
    onSuccess?: () => void
    open?: boolean
    setOpen?: React.Dispatch<React.SetStateAction<boolean>>
}

export function TaskFormModal({ trigger, task, title, onSuccess, open, setOpen }: TaskFormModalProps) {

    const [internalOpen, setInternalOpen] = useState(false);
    const isControlled = open !== undefined && setOpen !== undefined;
    const isOpen = isControlled ? open : internalOpen;
    const setOpenState = isControlled ? setOpen : setInternalOpen;

    useEffect(() => {
        if (!trigger && task) {
            setOpen?.(true);
        }
    }, [task, trigger]);

    return (
        <AppDialog
            open={isOpen}
            setOpen={setOpenState}
            {...(!task ? { trigger: <Button variant="default">Add Task</Button> } : {})}
            title={title ?? (task ? "Edit Task" : "Add Task")}
        >
            <TaskForm
                key={task?.id ?? "new"}
                task={task}
                onSuccess={() => {
                    setOpenState(false)
                    onSuccess?.()
                }}
            />
        </AppDialog>
    );
}
