import { makeObservable, observable, action } from "mobx";
import axios from "axios";

class DataStore {
  data = [];

  constructor() {
    makeObservable(this, {
      data: observable,
      fetchData: action,
      creatData: action,
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
  };

  creatData = async (newData) => {
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
}

const dataStore = new DataStore();
dataStore.fetchData();
export default dataStore;
