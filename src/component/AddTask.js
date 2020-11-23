import React from "react";

import { useState } from "react";

//from styles
// import { AddBarStyled, Addtext, AddButtonStyled } from "../styles";

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
      <>
        <input
          placeholder="Add new task"
          value={data.name}
          type="text"
          name="name"
          onChange={handleChange}
        />

        <button onClick={() => dataStore.creatData(data)}>Add</button>
      </>
    </>
  );
};
export default AddTask;
