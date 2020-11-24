//Mobx
import { makeObservable, observable, action } from "mobx";

//Axios
import axios from "axios";

class DataStore {
  data = [];

  constructor() {
    makeObservable(this, {
      data: observable,
      fetchData: action,
      createData: action,
      deleteData: action,
    });
  }

  fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:8000/data");
      this.data = res.data;
    } catch (error) {
      console.error("DataStore -> fetchData -> error", error);
    }
    console.log(this.data);
  };

  createData = async (newData) => {
    try {
      const response = await axios.post("http://localhost:8000/Data", newData);
      this.data.push(response.data);
    } catch (error) {
      console.error(console.error);
    }
  };

  deleteData = async (dataId) => {
    try {
      await axios.delete(`http://localhost:8000/data/${dataId}`);
      this.data = this.data.filter((data) => data.id !== dataId);
    } catch (error) {
      console.error(
        "🚀 ~ file: dataStore.js ~ line 39 ~ dataStore ~ deleteData ~ error",
        error
      );
    }
  };

  //we're using this method to update the status of the task so if it is checked it moves to the finishedlist
  updateStatus = async (dataObject) => {
    try {
      dataObject.status = !dataObject.status; //this just flips the status
      await axios.put(
        `http://localhost:8000/data/${dataObject.id}`,
        dataObject
      );
    } catch (error) {
      console.log(
        "🚀 ~ file: dataStore.js ~ line 55 ~ DataStore ~ updateDataStatus= ~ error",
        error
      );
    }
  };

  updatePriority = async (dataObject) => {
    try {
      await axios.put(
        `http://localhost:8000/data/${dataObject.id}`,
        dataObject
      );
    } catch (error) {
      console.log(
        "🚀 ~ file: dataStore.js ~ line 74 ~ DataStore ~ updatePriority= ~ error",
        error
      );
    }
  };
}

const dataStore = new DataStore();
dataStore.fetchData();
export default dataStore;
