import { observer } from "mobx-react";

// store
import dataStore from "../store/dataStore";

//component
import ItemData from "./ItemData";
//
const DataList = () => {
  const dataList = dataStore.data.map((_data) => <ItemData data={_data} />);
  return <>{dataList}</>;
};

export default observer(DataList);
