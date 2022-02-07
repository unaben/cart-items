import { useState } from "react";
import "./App.css";
import ToDoItems from "./component/ToDoItems";


export default function App() {
  const [items, setItems] = useState("");
  const [displayItems, setDisplayItems] = useState([]);
  console.log({ items: items, displayItems: displayItems });

  function handleDelete(id) {
    console.log("inside handleDelete: ", id);
    setDisplayItems((prevItems) => {
      console.log(prevItems);
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <>
      <header>
        <h1>Item Cart</h1>
      </header>
      <input
        onChange={(event) => {
          setItems(event.target.value);
        }}
        type="item"
        placeholder="Enter items to add..."
        value={items}
      />
      <button
        onClick={() => {
          setDisplayItems((prevItem) => {
            return [...prevItem, items];
          });
          setItems("");
        }}
      >
        Add Items
      </button>
      <ul>
        {displayItems.map((item, index) => {
          console.log("Items:", item, index);
          return (
            <ToDoItems
              item={item}
              key={index}
              id={index}
              onDelete={handleDelete}
            />
          );
        })}
      </ul>
    </>
  );
}
