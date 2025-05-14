# 📋 TaskManager Frontend

A modern, responsive task management app built with **React**, **TypeScript**, and **ShadCN/UI**, designed to manage tasks efficiently with advanced UI features like filtering, sorting, pagination, modals, and a datetime picker.
![image](https://github.com/user-attachments/assets/1a7d863f-8c5d-4b56-a5ca-98009ee6beca)

---

## 🚀 Features

- 🧾 Add, edit, and delete tasks
- 🔍 Filter by assignee
- ↕️ Sort by priority and due date
- 🎛 Column visibility toggling
- 📆 DateTime picker (using [OpenStatus Time Picker](https://time.openstatus.dev/))
- ✨ Styled using [ShadCN/UI](https://ui.shadcn.dev/)
- 🧪 Component tests with **Vitest** and **Testing Library**

---

## 📁 Project Structure

```

src/
│
├── components/          # Shared UI components (e.g. TaskForm, Modal, Button)
├── features/tasks/      # Redux slice, task types and API logic
├── hooks/               # Custom React hooks
├── lib/                 # Utilities (e.g. Axios client, date utils)
├── pages/               # Page layout components
├── **tests**/           # Unit and integration tests
└── App.tsx              # Main App entry point

````

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/taskmanager-frontend.git
cd taskmanager-frontend
````

### 2. Install dependencies

#### 🛑 React 19 users (recommended)

Use the following command to avoid `peer dependency` conflicts with `react-day-picker` and `date-fns`:

```bash
npm install --legacy-peer-deps
```

#### ✅ Otherwise, standard install:

```bash
npm install
```

---

## 🧑‍💻 Development

Start the dev server:

```bash
npm run dev
```

---

## 🧪 Running Tests

❗While initial test cases were implemented using @testing-library/react and vitest, the tests did not run successfully due to environmental issues in the current React 19 setup.
This is likely caused by misconfiguration or conflicts with React 19 and testing environments such as JSDOM or Vitest.

### Run tests:

```bash
npx vitest
```

Or run in watch mode:

```bash
npx vitest --watch
```

---

## 🔑 Key Implementations

### 🧱 Table Features

Implemented using `@tanstack/react-table`:

* Sorting: Toggle sorting via column headers
* Filtering: Uses controlled input bound to the `fullName` column
* Column toggle: Via `DropdownMenuCheckboxItem`
* Pagination: Next/Previous buttons and row count info
* Row Actions: Dropdown with Edit/Delete

### 📆 DateTime Picker

Using [`@openstatus/react-datetime-picker`](https://time.openstatus.dev/) for selecting due dates in task form.

### 🧠 State Management

* Redux Toolkit for managing tasks
* Async thunks for `fetchTasks`, `addTask`, `updateTask`, and `deleteTask`
* Connected to backend via `axios` client in `lib/axios.ts`

---

## 🛠 Tech Stack

* **React 19**
* **TypeScript**
* **Redux Toolkit**
* **ShadCN UI + Tailwind CSS**
* **TanStack Table**
* **Vitest** for testing
* **React Testing Library**

---
