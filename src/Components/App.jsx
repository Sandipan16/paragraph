import React, { useState } from "react";
import CharComponent from "./CharComponent";
import "../styles.css";

export default function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  function handleChange(event) {
    const { value } = event.target;
    setText(value);
  }

  function addItems(event) {
    setList(prevItems => {
      return [...prevItems, text];
    });
    event.preventDefault();
    setText("");
  }

  function deleteItem(id) {
    setList(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className="App">
      <form>
        <textarea
          type="text"
          name="text"
          value={text}
          onChange={handleChange}
          placeholder="Enter a paragraph"
        />
        <button onClick={addItems}>Submit</button>
      </form>
      <ul>
        {list.map((item, index) => {
          return (
            <li>
              <CharComponent
                key={index}
                id={index}
                par={item}
                onDel={deleteItem}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
