//Components
import AddTask from "./component/AddTask";
import DataList from "./component/DataList";
import FinishedList from "./component/FinishedList";

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
