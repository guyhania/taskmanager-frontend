import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { AppDispatch, RootState } from "../store";
import { fetchTasks } from "../features/tasks/taskSlice";
import { DataTable } from "./ui/data-table";
import type { Task } from "../features/tasks/taskTypes";
import { TaskFormModal } from "./TaskFormModal.tsx";
import { Columns } from "./columns.tsx";

export function TaskTable() {
    const dispatch = useDispatch<AppDispatch>();
    const { tasks, loading } = useSelector((state: RootState) => state.tasks);
    const [editingTask, setEditingTask] = useState<Task | null>(null);
    const [isEditOpen, setIsEditOpen] = useState(false);

    useEffect(() => {
        if (tasks.length === 0) {
            dispatch(fetchTasks());
        }
    }, [dispatch, tasks.length]);

    // const notOverdueTasks = tasks.filter(task => new Date(task.dueDate) >= new Date());

    return (
        <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">Upcoming Tasks</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <DataTable columns={Columns(dispatch, setEditingTask, setIsEditOpen)} data={tasks} />
            )}
            {editingTask && (
                <TaskFormModal
                    task={editingTask}
                    open={isEditOpen}
                    setOpen={setIsEditOpen}
                    onSuccess={() => {
                        setEditingTask(null)
                        setIsEditOpen(false)
                    }} />)}

        </div>
    );
}
