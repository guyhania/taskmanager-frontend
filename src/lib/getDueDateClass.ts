export function getDueDateClass(dueDate: string | Date): string {
  const date = new Date(dueDate);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const diff = date.getTime() - today.getTime();
  const oneDay = 24 * 60 * 60 * 1000;

  if (diff < 0) return "text-destructive"; // Overdue
  if (diff < oneDay) return "text-yellow-500"; // Due today
  if (diff < 3 * oneDay) return "text-orange-500"; // Due soon
  return "text-foreground";
}
