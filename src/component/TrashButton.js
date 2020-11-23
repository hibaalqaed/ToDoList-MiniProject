import React from "react";

//store
import dataStore from "../store/dataStore";

//styles
import { DltButtonStyled } from "../styles";

const TrashButton = ({ data }) => {
  return (
    <div>
      <DltButtonStyled onClick={() => dataStore.deleteData(data.id)}>
        trash
      </DltButtonStyled>
    </div>
  );
};

export default TrashButton;
