//Store
import dataStore from "../store/dataStore";

//Components
import ItemData from "./ItemData";

//Mobx
import { observer } from "mobx-react";

//styles
import { ListTextHeader } from "../styles";
const FinishedList = () => {
  const filteredData = dataStore.data.filter((data) => data.status);
  const finished = filteredData.map((_data) => (
    <ItemData key={_data.id} data={_data} />
  ));
  return (
    <>
      <ListTextHeader>FINISHED LIST:</ListTextHeader>
      <div>{finished}</div>
    </>
  );
};

export default observer(FinishedList);
