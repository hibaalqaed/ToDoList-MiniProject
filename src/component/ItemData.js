//store
import dataStore from "../store/dataStore";
import TrashButton from "./TrashButton";

const ItemData = ({ data, dataId }) => {
  return (
    <div>
      <h1>
        <input
          type="checkbox"
          onClick={() => dataStore.deleteData(data.id)}
        ></input>
        {data.name} <TrashButton data={data} />
      </h1>
    </div>
  );
};

export default ItemData;
