//React
import React from "react";
import { useState } from "react";

//Styles
//styles
import { TextBoxStyle, AddButtonStyled } from "../styles";

//Store
import dataStore from "../store/dataStore";

const AddTask = () => {
  const [data, setData] = useState({
    name: "",
    status: true,
  });
  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  return (
    <>
      <TextBoxStyle
        placeholder="Add a new task"
        value={data.name}
        type="text"
        name="name"
        onChange={handleChange}
      />

      <AddButtonStyled onClick={() => dataStore.createData(data)}>
        Add task
      </AddButtonStyled>
    </>
  );
};
export default AddTask;
