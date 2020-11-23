import { makeObservable, observable, action } from "mobx";
import axios from "axios";

class DataStore {
  data = [];

  constructor() {
    makeObservable(this, {
      data: observable,
      fetchData: action,
      creatData: action,
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
}

const dataStore = new DataStore();
dataStore.fetchData();
export default dataStore;
