import { Component, useState } from "react";

//Store
import dataStore from "../store/dataStore";

//Component
import TrashButton from "./buttons/TrashButton";

const ItemData = ({ data }) => {
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
          onClick={() => dataStore.moveData(data.id)}
        ></input>
        {data.name}
        <TrashButton data={data} />
        <button onClick={changePriority}>{currentPriority}</button>
      </h1>
    </div>
  );
};

export default ItemData;
