//Components
import AddTask from "./components/AddTask";
import DataList from "./components/DataList";
import FinishedList from "./components/FinishedList";

function App() {
  return (
    <div>
      <p>This is your To Do List</p>
      <AddTask />
      <DataList />
      <FinishedList />
    </div>
  );
}

export default App;
