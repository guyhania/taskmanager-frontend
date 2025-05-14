import type { AppDispatch } from "../store";
import type { Task } from "../features/tasks/taskTypes";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch } from "react-redux";
import { addTask, updateTask } from "../features/tasks/taskSlice";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "./ui/select";
import { Button } from "./ui/button";
import { DateTimePicker } from "./DateTimePicker";

const schema = z.object({
  id: z.string().optional(),
  title: z.string().min(1).max(50),
  description: z.string().optional(),
  dueDate: z.date(),
  priority: z.enum(["Low", "Medium", "High"]),
  fullName: z.string(),
  telephone: z.string().length(10),
  email: z.string().email(),
});

type TaskFormData = z.infer<typeof schema>;

export function TaskForm({
  task,
  onSuccess,
}: {
  task?: Task;
  onSuccess?: () => void;
}) {
  const dispatch = useDispatch<AppDispatch>();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control
  } = useForm<TaskFormData>({
    resolver: zodResolver(schema),
    defaultValues: task
      ? { ...task, dueDate: new Date(task.dueDate), telephone: String(task.telephone) }
      : undefined,
  });

  useEffect(() => {
    if (task) {
      reset({
        ...task,
        id: String(task.id),
        dueDate: new Date(task.dueDate),
        telephone: String(task.telephone)
      });
    }
  }, [task, reset]);

  const onSubmit = (data: TaskFormData) => {
    const payload = {
      ...data,
      dueDate: data.dueDate.toISOString(),
      isReminderSent: false,
    };

    if (task?.id) {
      (payload as Task).id = String(task.id);
    }

    const action = task
      ? updateTask(payload as Task)
      : addTask(payload as Omit<Task, "id">);
    dispatch(action).then((res) => {
      if ("meta" in res && res.meta.requestStatus === "fulfilled") {
        reset();
        onSuccess?.();
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
      <Input placeholder="Title" {...register("title")} />
      {errors.title && <p className="text-sm text-red-500">{errors.title.message}</p>}
      <Textarea placeholder="Description" {...register("description")} />

      <Controller
        name="dueDate"
        control={control}
        render={({ field }) => (
          <DateTimePicker
            date={field.value}
            setDate={field.onChange}
          />
        )}
      />
      {errors.dueDate && <p className="text-sm text-red-500">{errors.dueDate.message}</p>}

      <Controller
        name="priority"
        control={control}
        render={({ field }) => (
          <Select value={field.value} onValueChange={field.onChange}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select priority" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Low">Low</SelectItem>
              <SelectItem value="Medium">Medium</SelectItem>
              <SelectItem value="High">High</SelectItem>
            </SelectContent>
          </Select>
        )}
      />

      <Input placeholder="Full Name" {...register("fullName")} />
      <Input placeholder="Phone" {...register("telephone")} />
      <Input placeholder="Email" {...register("email")} />
      
      <div className="flex justify-center">
        <Button type="submit">{task ? "Update Task" : "Add Task"}</Button>
      </div>
    </form>
  );
}
