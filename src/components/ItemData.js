//Store
import dataStore from "../store/dataStore";

//Component
import TrashButton from "./buttons/TrashButton";

const ItemData = ({ data }) => {
  return (
    <div>
      <h1>
        <input
          type="checkbox"
          onClick={() => dataStore.moveData(data.id)}
        ></input>
        {data.name}
        <TrashButton data={data} />
      </h1>
    </div>
  );
};

export default ItemData;
