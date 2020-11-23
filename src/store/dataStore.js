import { makeObservable, observable, action } from "mobx";
import axios from "axios";

class dataStore {
  data = [];

  constructor() {
    makeObservable(this, {
      data: observable,
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
}

const dataStore = new DataStore();
dataStore.fetchProducts();

export default dataStore;
