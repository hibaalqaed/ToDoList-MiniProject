//React
import React from "react";

//Store
import dataStore from "../store/dataStore";

//Styles
import { DltButtonStyled } from "../styles";

const TrashButton = ({ data }) => {
  return (
    <div>
      <DltButtonStyled onClick={() => dataStore.deleteData(data.id)}>
        Trash
      </DltButtonStyled>
    </div>
  );
};

export default TrashButton;
