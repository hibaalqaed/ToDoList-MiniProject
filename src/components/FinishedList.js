//Store
import dataStore from "../store/dataStore";

//Components
import ItemData from "./ItemData";

//Mobx
import { observer } from "mobx-react";

const FinishedList = () => {
  const filteredData = dataStore.data.filter((data) => data.finished);
  const finished = filteredData.map((_data) => (
    <ItemData key={_data.id} data={_data} />
  ));
  return (
    <>
      <p>FINISHED LIST:</p>
      <div>{finished}</div>
    </>
  );
};

export default observer(FinishedList);
