import { useState } from "react";

export const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
};
  const handleAddItem = () => {
    if (inputValue.trim() !== '') { // Prevent adding empty items
      setItems([...items, inputValue]);
      setInputValue(''); // Clear the input field after adding the item
  }
};

  return (
    <>
    <h1>To Do List</h1>
     <input type="text" value={inputValue} onChange={handleInputChange}  />
     <button onClick={handleAddItem}>Add</button>
     <ul>
                {items.map((item, index) => (
                    <li key={index}>
                      <label>
                        <input type="checkbox"/>
                        </label>{item}</li>
                ))}
            </ul>
      
      
      
    </>
  );
};