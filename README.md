---

```markdown
# TaskManager Frontend

This is the frontend for the **TaskManager** application — a full-featured task management interface built using **React**, **TypeScript**, **Redux Toolkit**, and **ShadCN UI** components. It integrates with a .NET backend to support task creation, editing, deletion, and reminder features.

---

## 🚀 Features

- ✅ Add / Edit / Delete tasks
- ✅ Modal form with validation (`zod + react-hook-form`)
- ✅ Date-time picker (`openstatus/time`)
- ✅ Dynamic data table with:
  - Filtering by assignee
  - Column visibility toggling
  - Sorting (e.g. by priority or due date)
  - Pagination
- ✅ Visual indication of task status (due, overdue, etc.)
- ✅ Redux-based state management
- ✅ Responsive and accessible design using ShadCN UI

---

## 🧱 Tech Stack

- **React + TypeScript**
- **Redux Toolkit** for state management
- **@tanstack/react-table** for data grid logic
- **ShadCN UI** for styled components (built on Radix UI + Tailwind)
- **Zod** for schema validation
- **React Hook Form** for efficient form handling
- **Vitest + Testing Library** for unit testing

---

## 🛠️ Project Structure

```

src/
│
├── components/            # Reusable UI components (e.g. TaskForm, Modals)
│   └── ui/                # UI primitives from ShadCN (button, input, etc.)
│
├── features/              # Redux slices and domain logic
│   └── tasks/
│       ├── taskSlice.ts   # Redux logic and async thunks for task API
│       └── taskTypes.ts   # Type definitions for Task entity
│
├── utils/                 # Utility functions (e.g. due date styling)
├── **tests**/             # Unit tests using Vitest
├── App.tsx
├── main.tsx
└── store.ts               # Redux store configuration

````

---

## 📦 Installation

Make sure Node.js is installed.

```bash
git clone https://github.com/your-username/taskmanager-frontend.git
cd taskmanager-frontend
npm install
````

---

## 🧪 Running the App

```bash
npm run dev
```

It will start the app on [http://localhost:5173](http://localhost:5173) (or another Vite port).

---

## 🔄 Connecting to Backend

This app expects the backend API to be running on:

```
https://localhost:7002/api/tasks
```

Make sure to start the **.NET TaskManager API** before testing the frontend.

---

## 🧪 Running Tests

Make sure `vitest` and `jsdom` are installed:

```bash
npm install -D vitest jsdom @testing-library/react @testing-library/user-event @testing-library/jest-dom
```

Run tests:

```bash
npx vitest
```

Or:

```bash
npm run test
```

---

## 📋 Key Implementations

### 🧩 TaskForm (with DateTime Picker & Zod)

* Validation rules defined with Zod
* Controlled components powered by `react-hook-form`
* `DateTimePicker` uses `@openstatus/time` component

### 📊 DataTable with Filters & Sorting

* Built with `@tanstack/react-table`
* Supports:

  * Column sorting (by priority, due date)
  * Column visibility
  * Text filtering by assignee
  * Pagination with Next / Previous
  * Row-level action menu using `DropdownMenu`

### 🎨 Due Date Styling

Utility function `getDueDateClass` highlights:

* 🔴 Overdue tasks
* 🟡 Due today
* ✅ Normal due dates

Used inside table cell renderers for visual clarity.

---

## 🛡️ Linting & Formatting

Use ESLint and Prettier (if set up) for consistent code:

```bash
npm run lint
npm run format
```

---

## 📚 Future Enhancements

* ✅ Better test coverage for UI logic
* 🔜 Drag & drop reordering of tasks
* 🔜 Notifications or reminders
* 🔜 Tag/category support

---

## 🤝 Contributing

Feel free to open issues or submit PRs! Clone this repo, create a feature branch, and submit a pull request.

---

## 📄 License

MIT License © \[Your Name]

```

---

Would you like me to generate the file and commit it automatically (if connected to GitHub), or help you extend this for backend docs as well?
```
