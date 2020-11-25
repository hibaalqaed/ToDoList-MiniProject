//Mobx
import { observer } from "mobx-react";
import styled from "styled-components";

//Store
import dataStore from "../store/dataStore";

//Component
import ItemData from "./ItemData";

//styles
import { ListTextHeader } from "../styles";
const DataList = () => {
  const filteredData = dataStore.data.filter((data) => !data.status);
  const dataList = filteredData.map((_data) => (
    <ItemData key={_data.id} data={_data} />
  ));
  return (
    <>
      <ListTextHeader>TO DO LIST:</ListTextHeader>
      <div>{dataList}</div>
    </>
  );
};

export default observer(DataList);
