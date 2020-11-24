//Mobx
import { observer } from "mobx-react";

//Store
import dataStore from "../store/dataStore";

//Component
import ItemData from "./ItemData";

const DataList = () => {
  const filteredData = dataStore.data.filter((data) => !data.finished);
  const dataList = filteredData.map((_data) => (
    <ItemData key={_data.id} data={_data} />
  ));
  return (
    <>
      <p>To Do List:</p>
      <div>{dataList}</div>
    </>
  );
};

export default observer(DataList);
