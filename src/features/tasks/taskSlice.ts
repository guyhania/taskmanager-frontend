import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../lib/axios";
import type { Task } from "./taskTypes";

interface TaskState {
  tasks: Task[];
  loading: boolean;
  error: string | null;
  success: string | null;
}

const initialState: TaskState = {
  tasks: [],
  loading: false,
  error: null,
  success: null,
};

// Base URL
const API_URL = "/tasks";

// Async Thunks
export const fetchTasks = createAsyncThunk("tasks/fetch", async () => {
  const res = await axios.get<Task[]>(API_URL);
  return res.data;
});

export const addTask = createAsyncThunk("tasks/add", async (task: Omit<Task, "id">) => {
  const res = await axios.post<Task>(API_URL, task);
  return res.data;
});

export const updateTask = createAsyncThunk("tasks/update", async (task: Task) => {
  const res = await axios.put<Task>(`${API_URL}/${task.id}`, task);
  return res.data;
});

export const deleteTask = createAsyncThunk("tasks/delete", async (id: string) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});

// Slice
const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    clearStatus: (state) => {
      state.error = null;
      state.success = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch tasks";
      })

      // Add
      .addCase(addTask.fulfilled, (state, action) => {
        state.tasks.push(action.payload);
        state.success = "Task added successfully";
      })
      .addCase(addTask.rejected, (state) => {
        state.error = "Failed to add task";
      })

      // Update
      .addCase(updateTask.fulfilled, (state, action) => {
        console.log("Updating task ID:", action.payload.id);
      
        state.tasks = state.tasks.map((t) => {
          console.log("Comparing with:", t.id);
          return t.id === action.payload.id ? action.payload : t;
        });
      
        state.success = "Task updated successfully";
      })
      .addCase(updateTask.rejected, (state) => {
        state.error = "Failed to update task";
      })

      // Delete
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter((t) => t.id !== action.payload);
        state.success = "Task deleted successfully";
      })
      .addCase(deleteTask.rejected, (state) => {
        state.error = "Failed to delete task";
      });
  },
});

export const { clearStatus } = taskSlice.actions;
export default taskSlice.reducer;
