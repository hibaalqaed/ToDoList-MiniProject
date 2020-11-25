//Components
import AddTask from "./components/AddTask";
import DataList from "./components/DataList";
import FinishedList from "./components/FinishedList";

//styles
import { TextHeader } from "./styles";

function App() {
  return (
    <div>
      <TextHeader> My Daily Planner </TextHeader>
      <AddTask />
      <DataList />
      <FinishedList />
    </div>
  );
}

export default App;
