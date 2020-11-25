import { useState } from "react";
//styles
import { ItemWrapper, TexTask } from "../styles";

//Store
import dataStore from "../store/dataStore";

//Component
import TrashButton from "./buttons/TrashButton";

const ItemData = ({ data }) => {
  //I think we need to move this to dataStore under updatePriority but didn't know how to do it.
  const [currentPriority, setCurrentPriority] = useState("low");
  const changePriority = () => {
    if (currentPriority === "low") {
      setCurrentPriority("med");
    } else if (currentPriority === "med") {
      setCurrentPriority("high");
    } else {
      setCurrentPriority("low");
    }
  };

  return (
    <ItemWrapper>
      <TexTask>
        <input
          type="checkbox"
          onClick={() => dataStore.updateStatus(data)}
        ></input>
        {data.name} <button onClick={changePriority}>{currentPriority}</button>
        <TrashButton data={data} />
      </TexTask>
    </ItemWrapper>
  );
};

export default ItemData;
