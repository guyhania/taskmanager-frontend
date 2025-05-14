export interface Task {
    id: string;
    title: string;
    description?: string;
    dueDate: string;
    priority: "Low" | "Medium" | "High";
    fullName: string;
    telephone: string;
  }
  