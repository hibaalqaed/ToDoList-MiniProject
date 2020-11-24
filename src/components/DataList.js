//Mobx
import { observer } from "mobx-react";

//Store
import dataStore from "../store/dataStore";

//Component
import ItemData from "./ItemData";

const DataList = () => {
  const filteredData = dataStore.data.filter((data) => !data.status);
  const dataList = filteredData.map((_data) => (
    <ItemData key={_data.id} data={_data} />
  ));
  return (
    <>
      <p>TO DO LIST:</p>
      <div>{dataList}</div>
    </>
  );
};

export default observer(DataList);
