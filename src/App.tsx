import { Header } from "./components/Header";
import { TaskTable } from "./components/TaskTable";

function App() {
  return (
    <main className="p-6 max-w-4xl mx-auto space-y-6">
      <Header />
      <TaskTable />
    </main>
  );
}

export default App;
