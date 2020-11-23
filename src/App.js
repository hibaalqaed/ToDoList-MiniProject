//components
import DataList from "./component/DataList";
import AddTask from "./component/AddTask";

function App() {
  return (
    <div>
      <p>This is your To Do List</p>
      <AddTask />
      <DataList />
    </div>
  );
}

export default App;
