import { useState } from "react";

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
    <div>
      <h1>
        <input
          type="checkbox"
          onClick={() => dataStore.updateStatus(data)}
        ></input>
        {data.name}
        <TrashButton data={data} />
        <button onClick={changePriority}>{currentPriority}</button>
      </h1>
    </div>
  );
};

export default ItemData;
